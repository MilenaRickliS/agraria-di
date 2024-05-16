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
          <h2>Lorem ipsum!</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum corporis, rerum doloremque iste sed voluptates omnis molestias molestiae animi recusandae labore sit amet delectus ad necessitatibus laudantium qui! Magni quisquam illum quaerat necessitatibus sint quibusdam perferendis! Aut ipsam cumque deleniti error perspiciatis iusto accusamus consequuntur assumenda. Obcaecati minima sed natus?</p>
          
        </main>        
        </div>
      </div>
  );
}

export default Inicio;