import React, { useState } from 'react';
import propTypes from 'prop-types';
import AppContext from './AppContext';

function Provider({ children }) {

  // Estado para armazenar a quantidade de ração por mês.
  const [quantRacaoMes, setQuantRacaoMes] = useState('');
  // Estado para armazenar a quantidade de ração por semana.
  const [quantRacaoSem, setQuantRacaoSem] = useState('');
  const [clientes, setClientes] = useState([]);

  const value = {
    quantRacaoMes,
    setQuantRacaoMes,
    quantRacaoSem,
    setQuantRacaoSem,
    clientes,
    setClientes
  };

  return (
    <AppContext.Provider value={ value }>
      {children}
    </AppContext.Provider>
  );
}

export default Provider;

Provider.propTypes = {
  children: propTypes.any,
}.isRequired;