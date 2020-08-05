import React, {useState, FormEvent} from 'react';

import PageHeader from '../../components/PageHeader';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';
import Input from '../../components/Input';

import warningIcon from '../../assets/img/icons/warning.svg'

import './styles.css';
import api from '../../services/api';

function TeacherForm() {

  const [name, setName] = useState('')
  const [avatar, setAvatar] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [bio, setBio] = useState('')
  const [subject, setSubject] = useState('')
  const [cost, setCost] = useState('')

  const [scheduleItens, setScheduleItens] = useState([
    { week_day: 0, from: '', to: '' }
  ])

  function addNewSchaduleItem() {
    setScheduleItens([
      ...scheduleItens,
      { week_day: 0, from: '', to: '' }
    ])
  }

  function handleCreateClass(e: FormEvent) {
    e.preventDefault();

    api.post('classes', {
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost: Number(cost),
      schedule: scheduleItens
    }).then(() => {
      alert('Cadastro realizado com sucesso!')
    }).catch(() => {
      alert('Erro no cadastro!');
    })

    console.log(
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      Number(cost),
      scheduleItens
    )
  }

  function setScheduleItemValue(position: Number, field:string, value: string) {
    const updateScheduleItems = scheduleItens.map((scheduleItem, index) => {
      if (index === position) {
        return {...scheduleItem, [field]: value };
      }

      return scheduleItem
    });

    setScheduleItens(updateScheduleItems);
  }

  return (
    <div id="page-teacher-form" className="container">
      <PageHeader 
        title="Que incrivel que você quer dar aulas." 
        description="O primeiro passo é preencher esse formulario de inscrição"
      />

      <main>
        <form onSubmit={handleCreateClass}>
          <fieldset>
            <legend>Seus Dados</legend>

            <Input 
              name="name" 
              label="Nome Completo" 
              value={name} 
              onChange={(e) => { setName(e.target.value) }} 
            />
            <Input 
              type="url" 
              name="avatar" 
              label="Avatar URL"
              value={avatar} 
              onChange={(e) => { setAvatar(e.target.value) }} 
            />
            <Input 
              type="tel" 
              name="whatsapp" 
              label="Whatsapp"
              value={whatsapp} 
              onChange={(e) => { setWhatsapp(e.target.value) }} 
            />
            <Textarea 
              name="bio" 
              label="Biografia"
              value={bio} 
              onChange={(e) => { setBio(e.target.value) }} 
            />
            
          </fieldset>

          <fieldset>
            <legend>Sobre a aula</legend>

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
            <Input 
              name="cost" 
              label="Custo da sua aula por aula"
              value={cost} 
              onChange={(e) => { setCost(e.target.value) }} 
            />
            
          </fieldset>

          <fieldset>
            <legend>
              Horários disponíveis
              <button type="button" onClick={addNewSchaduleItem}>
                + Novo horário
              </button>
            </legend>

            {scheduleItens.map((scheduleItem, index)=>{
              return(
                <div key={scheduleItem.week_day} className="schedule-item">
                  <Select
                    name="week_day" 
                    label="Dia da Semana"
                    value={scheduleItem.week_day}
                    options={[
                      { value: '0', label: 'Domingo' },
                      { value: '1', label: 'Segunda-feira' },
                      { value: '2', label: 'Terça-feira' },
                      { value: '3', label: 'Quarta-feira' },
                      { value: '4', label: 'Quinta-feira' },
                      { value: '5', label: 'Sexta-feira' },
                      { value: '6', label: 'Sábado' },
                    ]}
                    onChange={(e) => setScheduleItemValue(index, 'week_day', e.target.value)} 
                  />
                  <Input 
                    name="from" 
                    label="Das" 
                    type="time"
                    value={scheduleItem.from}
                    onChange={(e) => setScheduleItemValue(index, 'from', e.target.value)}
                  />
                  <Input 
                    name="to" 
                    label="Até" 
                    type="time"
                    value={scheduleItem.to}
                    onChange={(e) => setScheduleItemValue(index, 'to', e.target.value)}
                  />
                </div>
              )
            })}
            
          </fieldset>

          <footer>
            <p>
              <img src={warningIcon} alt="Aviso de Importante"/>
              Importante! <br />
              Preencha todos os dados
            </p>
            <button type="submit">
              Salvar cadastro
            </button>
          </footer>
        </form>
      </main>
    </div>
  )
}

export default TeacherForm;