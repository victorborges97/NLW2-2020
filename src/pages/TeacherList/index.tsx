import React from 'react';

import './styles.css';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';


function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponiveis.">
        <form id="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">Matéria</label>
            <input type="text" id="subject"/>
          </div>

          <div className="input-block">
            <label htmlFor="subject">Dia da Semana</label>
            <input type="text" id="subject"/>
          </div>

          <div className="input-block">
            <label htmlFor="subject">Hora</label>
            <input type="text" id="subject"/>
          </div>
        </form>
      </PageHeader>

      <main>
        <TeacherItem 
          url_img="https://avatars1.githubusercontent.com/u/47835782?s=460&u=3c69157e2b492c8ee40466ea0066f8f8df87b4db&v=4"
          name="João Victor Borges" 
          materia="Programação"
          descricao="Entusiasta das melhores tecnologias de química avançada.
          Apaixonado por explodir coisas em laboratório e por mudar a vida das 
          pessoas através de experiências. Mais de 200.000 pessoas já passaram 
          por uma das minhas explosões."
          preco="70,00"
        />
        <TeacherItem 
          url_img="https://avatars2.githubusercontent.com/u/2254731?s=460&u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&v=4"
          name="Diego Fernandes" 
          materia="ReactJs e Native"
          descricao="Entusiasta das melhores tecnologias de química avançada.
          Apaixonado por explodir coisas em laboratório e por mudar a vida das 
          pessoas através de experiências. Mais de 200.000 pessoas já passaram 
          por uma das minhas explosões."
          preco="100,00"
        />
      </main>
    </div>
  )
}

export default TeacherList;