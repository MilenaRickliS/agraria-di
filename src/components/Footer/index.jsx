import { Link } from 'react-router-dom';
import './style.css';
import AppContext from '../../contexts/AppContext'
import { useState, useEffect, useContext, useMemo } from 'react';
import { db } from '../../services/firebaseConnection';
import { 
  collection,
  onSnapshot
} from 'firebase/firestore';

function Footer(){
  //context para armazenar a quantidade de ração dos clientes
  const { quantTotal, setQuantTotal, totalRef } = useContext(AppContext);

  // Sum of all quantTotal values
  const totalQuantTotal = useMemo(() => {
    return quantTotal.reduce((acc, item) => acc + item.quantRacaoMes, 0);
  }, [quantTotal]);

  // Efeito que carrega os clientes do Firestore sempre que o componente é montado.
  useEffect(() => {
    async function loadQuant(){
      const unsub = onSnapshot(collection(db, "clientes-di"), (snapshot) => {
        let lista = [];
        snapshot.forEach((doc) => {
          lista.push({
            quantRacaoMes: doc.data().quantRacaoMes, // use doc.data().quantRacaoMes instead of doc.quantRacaoMes
          })
        })
        setQuantTotal(lista);
      })
    }
    loadQuant();
  }, [])

  

  return(
    <footer>
        <div className="interface">
            <div className="line-footer">
                <div className="flex">
                    <nav className='bemvindo'>
                        <ul>
                            <li>Bem-vindo ao site!</li>
                            <li>Controle de estoque de Ração para seus clientes!</li>
                            <li>Total de ração: {totalQuantTotal} kg</li>
                            <li></li>
                        </ul>
                    </nav>
                    {/* <nav className="menu-footer">
                        <ul>
                            <li><Link to = '/clientes'>Clientes</Link></li>
                            <li><Link to = '/ajuda'>Precisa de Ajuda?</Link></li>                                
                            <li><Link to = '/conta'>Conta</Link></li>
                        </ul>
                    </nav> */}
                </div>
            </div>

            <div className="line-footer borda">
                <p><i className="bi bi-envelope-fill"></i> <a
                        href="https://www.agraria.com.br/">https://www.agraria.com.br/</a>
                </p>
            </div>
            <div className="btn-social">
                        <a href="#"><button><i className="bi bi-instagram"></i></button></a>
                        <a href="#"><button><i className="bi bi-whatsapp"></i></button></a>
                        <a href="#"><button><i className="bi bi-facebook"></i></button></a>
            </div>
        </div>
    </footer> 

  );
}

export default Footer;