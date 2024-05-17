import "./style.css";
import Header from "../../components/Header";

function CadastroCliente() { 
  return (
      <div>
        <div><Header/></div>
        <main id="main" class="flexbox-col">
          <h2>Clientes</h2>
          <p>Aqui está uma lista de todos os seus clientes!</p>
          <div className="input-group">
              <input className='pesquisar' type="search" placeholder="Pesquisar ..."/>
              <div class="input-group-append">
                <div class="input-group-text"><ion-icon name="search-outline"></ion-icon></div>
              </div>
          </div>
          
        </main> 
      </div>
  );
}

export default CadastroCliente;