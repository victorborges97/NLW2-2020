import { Request, Response } from 'express'

import db from '../db/connection';
import convertHourToMinutes from '../utils/convertHourToMinutes';

interface ScheduleItem {
  week_day: number;
  from: string;
  to: string;
};

export default class ClassesController {
  async index(req: Request, res: Response) {
    const filters = req.query;
    
    const subject = filters.subject as string
    const week_day = filters.week_day as string
    const time = filters.time as string

    if (!filters.week_day || !filters.subject || !filters.time) {
      return res.status(400).send({
        error: 'Missing filters to search classes'
      })
      
    }

    const timeInMinutes = convertHourToMinutes(time)
    
    const classes = await db('classes')
      .whereExists(function() {
        this.select('classes_schedule.*')
          .from('classes_schedule')
          .whereRaw('`classes_schedule`.`class_id` = `classes`.`id`')
          .whereRaw('`classes_schedule`.`week_day` = ??', [Number(week_day)])
          .whereRaw('`classes_schedule`.`from` <= ??', [timeInMinutes])
          .whereRaw('`classes_schedule`.`to` > ??', [timeInMinutes])
      })
      .where('classes.subject', '=', subject)
      .join('users', 'classes.user_id', '=', 'users.id')
      .select(['classes.*', 'users.*']);

    res.json(classes)
  }

  async create(req: Request, res: Response) {
    const {
      name, avatar, whatsapp, bio, subject, cost, schedule
    } = req.body;
  
    const trx = await db.transaction();
  
    try {
      const insertedUsersIds = await trx('users').insert({
        name, avatar, whatsapp, bio
      });
    
      const user_id = insertedUsersIds[0];
    
      const insertedClassesIds = await trx('classes').insert({
        subject, cost, user_id
      });
    
      const class_id = insertedClassesIds[0];
    
      const classSchedule = schedule.map((scheduleItem: ScheduleItem) => {
        return {
          class_id,
          week_day: scheduleItem.week_day,
          from: convertHourToMinutes(scheduleItem.from),
          to: convertHourToMinutes(scheduleItem.to),
        }
      })
    
      await trx('classes_schedule').insert(classSchedule);
    
      await trx.commit();
    
      return res.status(201).send();
  
    } catch (err) {
  
      await trx.rollback();
  
      return res.status(400).json({
        error: 'Unexpected error while creating new class'
      })
    }
  };
}
