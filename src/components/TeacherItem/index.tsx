import React from 'react';

import './styles.css';
import whatsIcon from '../../assets/img/icons/whatsapp2.svg'

interface TeacherItens {
  name: String;
  materia: String;
  preco: String;
  descricao: String;
  url_img: String;
}

const TeacherItem: React.FC<TeacherItens> = (props) => {
  return(
    <article className="teacher-item">
      <header>
        <img src={`${props.url_img}`} alt={`${props.name}`}/>
        <div>
          <strong>{props.name}</strong>
          <span>{props.materia}</span>
        </div>
      </header>
      <p>
        {props.descricao}
      </p>
      <footer>
        <p>
          Preço/hora
          <strong>R$ {props.preco}</strong>
        </p>
        <button type="button">
          <img src={whatsIcon} alt="Icone do Whatsapp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  )
}

export default TeacherItem;