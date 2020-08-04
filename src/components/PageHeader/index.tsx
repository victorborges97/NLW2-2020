import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/img/logo.svg'
import backIcon from '../../assets/img/icons/back.svg'

import './styles.css'

interface PageHeaderProps {
  title: string;
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
  return(
    <header className="page-header">
      <div className="top-bar-container">
        <Link to="/"> 
          <img src={backIcon} alt=""/>
        </Link>
        <img src={logoImg} alt=""/>
      </div>
      <div className="header-content">
        <strong>{props.title}</strong>
        {props.children}
      </div>
      
    </header>
  )
}

export default PageHeader;