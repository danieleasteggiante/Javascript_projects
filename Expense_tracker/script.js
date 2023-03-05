const balance = document.getElementById('balance');
const money_plus = document.getElementById('money-plus');
const money_minus = document.getElementById('money-minus');
const list = document.getElementById('list');
const form = document.getElementById('form');
const text = document.getElementById('text');
const amount = document.getElementById('amount');


const dummyTransactions = [
  { id: 1, text: 'Flower', amount: -20 },
  { id: 2, text: 'Salary', amount: 300 },
  { id: 3, text: 'Book', amount: -10 },
  { id: 4, text: 'Camera', amount: 150 }
];

let transactions = dummyTransactions;

function addTransactionDOM(trans){
    const sign = trans.amount < 0 ? "-" : "+";
    
    const item =  document.createElement('li');
    item.classList.add(trans.amount < 0 ? 'minus' : 'plus');
    item.innerHTML = `
    ${trans.text} <span>€${sign}${Math.abs(trans.amount)}
    </span> <button class="delete-btn">x</button>
    `; //this simble is backtick TODO insert in keyboard

    list.appendChild(item);
}

function init(){
    list.innerHTML = '';
    transactions.forEach(addTransactionDOM); // the argument (transaction) getted by element of a forEach cycle
}

init();