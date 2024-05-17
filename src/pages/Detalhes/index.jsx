import React, { useEffect, useContext } from "react";
import "./style.css";
import { useParams } from 'react-router-dom';
import AppContext from "../../contexts/AppContext";
import { db } from '../../services/firebaseConnection';
import {
    collection,
    onSnapshot
  } from 'firebase/firestore';

function Detalhes() {
  const { id } = useParams();
  //context para armazenar clientes
  const { clientes, setClientes} = useContext(AppContext);

  // Efeito que carrega os clientes do Firestore sempre que o componente é montado.
  useEffect(() => {
    async function loadClientes(){
    const unsub = onSnapshot(collection(db, "clientes-di"), (snapshot) => {
    let listaClientes = [];
    snapshot.forEach((doc) => {
      listaClientes.push({
        id: doc.id,
        nome: doc.data().nome,
        propriedade: doc.data().propriedade, 
        email: doc.data().email,
        telefone: doc.data().telefone,
        cpf: doc.data().cpf,
        quantAnimais: doc.quantAnimais,   
        quantRacaoMes: doc.quantRacaoMes,   
    })
    })
    setClientes(listaClientes);
    })
    }
    loadClientes();
  }, [id])

  return (
    <div className="container">
      {clientes.map((item) => {
        return (
          <article key={item.id}>
            <strong>{item.nome}</strong>
            <p >{item.propriedade}</p>
            <p >{item.cpf}</p>
            <p >{item.email}</p>
            <p >{item.telefone}</p>
            <p >{item.quantAnimais}</p>
            <p >{item.quantRacaoMes}</p>
          </article>
        );
      })}
    </div>
  );
}

export default Detalhes;