import "./style.css";
import Header from "../../components/Header";
import { useAuth } from "../../contexts/authContext";
import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { doSignOut } from "../../services/auth";
import Footer from "../../components/Footer";

function Inicio() {
  
  return (
      <div>
        <Header/>        
        <main id="main" class="flexbox-col">
          <h2>Estoque</h2>
          <p>Atualize sempre que possível o seu estoque!</p>
          <div className="input-group">
              <input className='pesquisar' type="search" placeholder="Pesquisar ..."/>
              <div class="input-group-append">
                <div class="input-group-text"><ion-icon name="search-outline"></ion-icon></div>
              </div>
          </div>
          

        
        </main>         
        
        
        <Footer/> 
        
      </div>
  );
}

export default Inicio;