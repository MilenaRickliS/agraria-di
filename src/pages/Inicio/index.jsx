import React, { useState, useEffect, useRef, useContext } from "react";
import "./style.css";
import Footer from "../../components/Footer";
import Header from "../../components/Header"
import AppContext from "../../contexts/AppContext";


const Inicio = () => {
  const [items, setItems] = useState([]);
  const [descItem, setDescItem] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("Entrada");

  const { totalRef } = useContext(AppContext);

  const incomesRef = useRef(null);
  const expensesRef = useRef(null);
  

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("db_items")) || [];
    setItems(storedItems);
  }, []);

  const handleNewItem = () => {
    if (descItem === "" || amount === "" || type === "") {
      return alert("Preencha todos os campos!");
    }

    const newItem = {
      desc: descItem,
      amount: Math.abs(parseFloat(amount)).toFixed(2),
      type: type,
    };

    setItems([...items, newItem]);
    localStorage.setItem("db_items", JSON.stringify(items));

    setDescItem("");
    setAmount("");
  };

  const deleteItem = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
    localStorage.setItem("db_items", JSON.stringify(newItems));
  };

  const insertItem = (item, index) => {
    return (
      <tr key={index}>
        <td>{item.desc}</td>
        <td>{item.amount}</td>
        <td className="columnType">
          {item.type === "Entrada" ? (
            <i className="bx bxs-chevron-up-circle"></i>
          ) : (
            <i className="bx bxs-chevron-down-circle"></i>
          )}
        </td>
        <td className="columnAction">
          <button onClick={() => deleteItem(index)}>
            <i className="bx bx-trash"></i>
          </button>
        </td>
      </tr>
    );
  };

  const getTotals = () => {
    const amountIncomes = items
      .filter((item) => item.type === "Entrada")
      .map((transaction) => parseFloat(transaction.amount));

    const amountExpenses = items
      .filter((item) => item.type === "Saída")
      .map((transaction) => parseFloat(transaction.amount));

    const totalIncomes = amountIncomes.reduce((acc, cur) => acc + cur, 0);
    const totalExpenses = Math.abs(
      amountExpenses.reduce((acc, cur) => acc + cur, 0)
    );
    const totalItems = totalIncomes - totalExpenses;

    if (incomesRef.current) {
      incomesRef.current.innerHTML = totalIncomes.toFixed(2);
    }
    if (expensesRef.current) {
      expensesRef.current.innerHTML = totalExpenses.toFixed(2);
    }
    if (totalRef.current) {
      totalRef.current.innerHTML = totalItems.toFixed(2);
    }
  };

  useEffect(() => {
    getTotals();
  }, [items]);

  return (
    <div className="container">
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
        <div className="resume">
          <div>
            Entradas:
            <span ref={incomesRef}>0.00</span>
          </div>
          <div>
            Saídas: 
            <span ref={expensesRef}>0.00</span>
          </div>
          <div>
            Total:
            <span ref={totalRef}>0.00</span>
          </div>
        </div>
        <div className="newItem">
          <div className="divDesc">
            <label htmlFor="desc">Descrição</label>
            <input
              type="text"
              id="desc"
              value={descItem}
              onChange={(e) => setDescItem(e.target.value)}
/>
          </div>
          <div className="divAmount">
            <label htmlFor="amount">Quantidade de Ração</label>
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <div className="divType">
            <label htmlFor="type">Tipo</label>
            <select
              id="type"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option value="Entrada">Entrada</option>
              <option value="Saída">Saída</option>
            </select>
          </div>
          <button id="btnNew" onClick={handleNewItem}>
            Incluir
          </button>
        </div>
        <div className="divTable">
          <table>
            <thead>
              <tr>
                <th>Descrição</th>
                <th className="columnAmount">Quantidade de Ração</th>
                <th className="columnType">Tipo</th>
                <th className="columnAction"></th>
              </tr>
            </thead>
            <tbody>{items.map((item, index) => insertItem(item, index))}</tbody>
          </table>
        </div>
      </main>
      <div>
      <Footer/>
      </div>
    </div>
  );
};

export default Inicio;

/*
import React, { useState, useEffect } from "react";
import "./style.css";
import "boxicons";

const App = () => {
  const [items, setItems] = useState([]);
  const [descItem, setDescItem] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("Entrada");

  const incomes = document.querySelector(".incomes");
  const expenses = document.querySelector(".expenses");
  const total = document.querySelector(".total");

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("db_items")) || [];
    setItems(storedItems);
  }, []);

  const handleNewItem = () => {
    if (descItem === "" || amount === "" || type === "") {
      return alert("Preencha todos os campos!");
    }

    const newItem = {
      desc: descItem,
      amount: Math.abs(parseFloat(amount)).toFixed(2),
      type: type,
    };

    setItems([...items, newItem]);
    localStorage.setItem("db_items", JSON.stringify(items));

    setDescItem("");
    setAmount("");
  };

  const deleteItem = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
    localStorage.setItem("db_items", JSON.stringify(newItems));
  };

  const insertItem = (item, index) => {
    return (
      <tr key={index}>
        <td>{item.desc}</td>
        <td>R$ {item.amount}</td>
        <td className="columnType">
          {item.type === "Entrada" ? (
            <i className="bx bxs-chevron-up-circle"></i>
          ) : (
            <i className="bx bxs-chevron-down-circle"></i>
          )}
        </td>
        <td className="columnAction">
          <button onClick={() => deleteItem(index)}>
            <i className="bx bx-trash"></i>
          </button>
        </td>
      </tr>
    );
  };

  const getTotals = () => {
    const amountIncomes = items
      .filter((item) => item.type === "Entrada")
      .map((transaction) => parseFloat(transaction.amount));

    const amountExpenses = items
      .filter((item) => item.type === "Saída")
      .map((transaction) => parseFloat(transaction.amount));

    const totalIncomes = amountIncomes.reduce((acc, cur) => acc + cur, 0);
    const totalExpenses = Math.abs(
      amountExpenses.reduce((acc, cur) => acc + cur, 0)
    );
    const totalItems = totalIncomes - totalExpenses;

    incomes.innerHTML = totalIncomes.toFixed(2);
    expenses.innerHTML = totalExpenses.toFixed(2);
    total.innerHTML = totalItems.toFixed(2);
  };

  useEffect(() => {
    getTotals();
  }, [items]);

  return (
    <div className="container">
      <main>
        <div className="resume">
          <div>
            Entradas: R$
            <span className="incomes">0.00</span>
          </div>
          <div>
            Saídas: R$
            <span className="expenses">0.00</span>
          </div>
          <div>
            Total: R$
            <span className="total">0.00</span>
          </div>
        </div>
        <div className="newItem">
          <div className="divDesc">
            <label htmlFor="desc">Descrição</label>
            <input
              type="text"
              id="desc"
              value={descItem}
              onChange={(e) => setDescItem(e.target.value)}
/>
          </div>
          <div className="divAmount">
            <label htmlFor="amount">Valor</label>
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <div className="divType">
            <label htmlFor="type">Tipo</label>
            <select
              id="type"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option value="Entrada">Entrada</option>
              <option value="Saída">Saída</option>
            </select>
          </div>
          <button id="btnNew" onClick={handleNewItem}>
            Incluir
          </button>
        </div>
        <div className="divTable">
          <table>
            <thead>
              <tr>
                <th>Descrição</th>
                <th className="columnAmount">Valor</th>
                <th className="columnType">Tipo</th>
                <th className="columnAction"></th>
              </tr>
            </thead>
            <tbody>{items.map((item, index) => insertItem(item, index))}</tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default App;*/