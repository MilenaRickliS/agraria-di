import "./style.css";
import Header from "../../components/Header";
import { useAuth } from "../../contexts/authContext";
import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { doSignOut } from "../../services/auth";

function Inicio() {
  
  return (
      <div>
        <div><Header/>        
        <main id="main" class="flexbox-col">
          <h2>Estoque</h2>
          <p>Atualize sempre que possível o seu estoque!</p>
          
        </main>        
        </div>
      </div>
  );
}

export default Inicio;