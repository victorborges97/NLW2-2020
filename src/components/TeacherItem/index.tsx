import React from 'react';

import './styles.css';
import whatsIcon from '../../assets/img/icons/whatsapp2.svg'
import api from '../../services/api';

interface TeacherItens {
  teacher: {
    avatar: string;
    bio: string;
    cost: Number;
    id: Number;
    name: string;
    subject: string;
    whatsapp: string;
  }
}

const TeacherItem: React.FC<TeacherItens> = ({ teacher }) => {

  function CreateNewConnection() {
    api.post('connections', {
      user_id: teacher.id,
    })
  }

  return(
    <article className="teacher-item">
      <header>
        <img src={`${teacher.avatar}`} alt={`${teacher.name}`}/>
        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </header>
      <p>
        {teacher.bio}
      </p>
      <footer>
        <p>
          Preço/hora
          <strong>R$ {teacher.cost}</strong>
        </p>
        <a 
          // eslint-disable-next-line react/jsx-no-target-blank
          target="_blank" 
          onClick={CreateNewConnection} 
          href={`https://wa.me/${teacher.whatsapp}`}
        >
          <img src={whatsIcon} alt="Icone do Whatsapp"/>
          Entrar em contato
        </a>
      </footer>
    </article>
  )
}

export default TeacherItem;