import { Routes, Route } from 'react-router-dom'

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Inicio from '../pages/Inicio';
import CadastroCliente from '../pages/CadastroCliente';
import Conta from '../pages/Conta';
import Ajuda from '../pages/Ajuda';
import Detalhes from '../pages/Detalhes';

import Private from './private'


function RoutesApp(){
  return(
    <Routes>

      <Route path="/signin" element={ <SignIn/> } />

      <Route path="/signup" element={ <SignUp/> } />

      <Route path="/" element={<Private><Inicio/></Private>}/>
      
      <Route path="/cadastro" element={ <Private><CadastroCliente/></Private> } />

      <Route path="/detalhes/:id" element={ <Private><Detalhes/></Private>} />

      <Route path="/conta" element={<Private><Conta/></Private>} />
      
      <Route path="/ajuda" element={<Private><Ajuda/></Private>} />
    
    </Routes>
  )
}

export default RoutesApp;