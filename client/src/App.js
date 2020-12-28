import './App.css';
import Header from './components/Header'
import Balance from './components/Balance'
import IncomeExpense from './components/IncomeExpense';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import { GlobalProvider } from './components/context/GlobalState';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Contact from './components/Contact'

function App() {
  return (
    <Router>
    <Route exact path="/" render={props => (
    <GlobalProvider>
        <Header />
    <div className="container">
      <Balance />
      <IncomeExpense />
      <TransactionList />
      <AddTransaction />
    </div>
    </GlobalProvider>
    )} />
    <Route path="/contact" component={Contact} />
    </Router>
  );
}

export default App;
