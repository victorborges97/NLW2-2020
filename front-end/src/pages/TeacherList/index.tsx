import React, { useState, FormEvent } from 'react';

import './styles.css';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';
import api from '../../services/api';


function TeacherList() {

  const [filterTeachers,setFilterTeachers] = useState([])

  const [subject, setSubject] = useState('')
  const [time, setTime] = useState('')
  const [week_day, setWeek_day] = useState('')

  async function searchTeachers(e: FormEvent) {
    e.preventDefault();

    const res = await api.get('classes', {
      params:{
        subject,
        time,
        week_day,
      }
    })

    setFilterTeachers(res.data)
  }

  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponiveis.">
        <form id="search-teachers" onSubmit={searchTeachers} >

          <Select
            name="subject" 
            label="Máteria"
            options={[
              { value: 'Artes', label: 'Artes' },
              { value: 'Ciências', label: 'Ciências' },
              { value: 'Geografia', label: 'Geografia' },
              { value: 'Matemática', label: 'Matemática' },
              { value: 'Quimica', label: 'Quimica' },
              { value: 'Portugues', label: 'Portugues' },
              { value: 'Programação', label: 'Programação' },
              { value: 'React Native e React', label: 'React Native e React' }
            ]}
            value={subject}
            onChange={(e) => { setSubject(e.target.value) }}
          />
          <Select
            name="week_day" 
            label="Dia da Semana"
            options={[
              { value: '0', label: 'Domingo' },
              { value: '1', label: 'Segunda-feira' },
              { value: '2', label: 'Terça-feira' },
              { value: '3', label: 'Quarta-feira' },
              { value: '4', label: 'Quinta-feira' },
              { value: '5', label: 'Sexta-feira' },
              { value: '6', label: 'Sábado' },
            ]}
            value={week_day}
            onChange={(e) => { setWeek_day(e.target.value) }}
          />
          <Input 
            type="time" 
            name="time" 
            label="Hora"
            value={time}
            onChange={(e) => { setTime(e.target.value) }}
          />
          <button type="submit">Buscar</button>
        </form>
      </PageHeader>

      <main>
        {
          filterTeachers.map((teacher, index) => {
            return (
              <TeacherItem key={index}
                teacher={teacher}
              />
            )    
          })
        }
        
      </main>
    </div>
  )
}

export default TeacherList;