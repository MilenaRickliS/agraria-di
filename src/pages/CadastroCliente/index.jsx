import "./style.css";
import Header from "../../components/Header";

function CadastroCliente() { 
  return (
      <div>
        <div><Header/></div>
        <main id="main" class="flexbox-col">
          <h2>Clientes</h2>
          <p>Aqui está uma lista de todos os seus clientes!</p>
          
        </main> 
      </div>
  );
}

export default CadastroCliente;