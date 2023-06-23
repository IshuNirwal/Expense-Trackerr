// import logo from './logo.svg';
import './App.css';
import {useState } from 'react';
import { Typography,styled,Box} from '@mui/material';
import Balance from './Components/Balance';
import ExpenseCard from './Components/ExpenseCard';
import NewTransactions from './Components/NewTransactions';
import Transactions from './Components/Transactions';
const Header= styled(Typography)`
  font-size: 36px;
  color:blue;
  text-transform:uppercase;
`
const Componentt=styled(Box)`
  display:flex;
  background:#fff;
  width:800px;
  padding:10px;
  border-radius:20px;
  margin:auto;
  &>div{
    height:70vh;
    width: 50%;
    padding:20px;
  }
`


function App() {
  const[transactions,setTransactions]=useState([
    {id:1,text:"Momos",amount:-20},
    {id:2,text:"Salary",amount:3000},
    {id:3,text:"Book",amount:-100},
    {id:4,text:"Bonus",amount:1500},
  ])
  return (
    <div className="App">
      <Header>Expense Tracker</Header>
      <Componentt>
        <Box><Balance transactions={transactions}/>
        <ExpenseCard transactions={transactions}/>
        <NewTransactions setTransactions={setTransactions}/>
        </Box>
        <Box>
          <Transactions transactions={transactions} setTransactions={setTransactions}/>
        </Box>
      </Componentt>
     
    </div>
  );
}

export default App;
