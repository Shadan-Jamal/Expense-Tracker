import React,{useState} from 'react';
import { IoIosAddCircle } from "react-icons/io";

function App() {
  const [groceryInput,setGroceryInput] = useState('');
  const [expenseInput,setExpenseInput] = useState('');
  const [groceryList,setGroceryList] = useState([]);
  const [expenseList,setExpenseList] = useState([]);
  const [totalGrocery,setTotalGrocery] = useState([{}]);
  const [calculateExpense , setCalculateExpense] = useState(0);
  const [expensePressed , setExpensePressed] = useState(false);

  const addGrocery=() =>{
    setGroceryList([...groceryList, groceryInput]);
    setExpenseList([...expenseList,expenseInput]);
    setTotalGrocery([...totalGrocery , {
      grocery : `${groceryInput}: Rs.`,
      expense : Number(expenseInput),
    }])
    setCalculateExpense(calculateExpense => calculateExpense + Number(expenseInput));
    setGroceryInput('');
  }
  
  const addExpense = () => {
    setExpensePressed(true);
  }
  
  const deleteCart = () => {
    setGroceryInput('');
    setExpenseInput('');
    setGroceryList([]);
    setExpenseList([]);
    setTotalGrocery([{}])
    setCalculateExpense();

  }
  
  return (
    <div className='w-[700px] rounded-xl bg-yellow-100 p-5'>
      <div className='rounded px-3 py-2 flex items-center gap-3'>
        <input
        value={groceryInput}
        onChange={(e) => setGroceryInput(e.target.value)}
        placeholder='Enter Grocery...'
        required
        className='w-full p-1 rounded bg-transparent text-lg text-black border-b-2 border-b-black focus:outline-none' 
        type="text" />

        <input
        value={expenseInput}
        onChange={(e) => setExpenseInput(e.target.value)}
        placeholder='Enter Expense(Rs)...'
        required
        className='w-full p-1 rounded bg-transparent text-lg border-b-2 border-b-black text-black focus:outline-none' 
        type="number" />

        <div>
          <IoIosAddCircle
          className='rounded-full p-1 transition-colors hover:bg-gray-400'
          onClick={addGrocery} 
          size={35} />
        </div>
      </div>

        <button
        onClick={addExpense} 
        className='text-base text-start text-white p-2 my-3 me-3 rounded bg-black mb-1 hover:bg-green-500 transition-all'>Calculate Expense
        </button>

        <button 
        onClick={deleteCart}
        className='text-base text-start text-white p-2 rounded bg-black mb-1 hover:bg-red-600 hover:text-black transition-all'>Delete Cart</button>

        <p className='text-black text-2xl font-bold mb-1'>{expensePressed && calculateExpense}</p>

      <div className='border-t-2 border-t-black mt-2 py-6'>
        <h2 className='text-black font-bold text-lg text-start bg-transparent'>Grocery List :- </h2>
        <ul className='list-none text-start font-bold capitalize'>
          {groceryList && totalGrocery.map((item,index) => <li key={index}>{item.grocery}{item.expense}</li>)
          }
        </ul>
      </div>
    </div>
  )
}

export default App;