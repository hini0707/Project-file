import './components/Expenses/Expenses.css';
import Expenses from './components/Expenses/Expenses';

const App = () => {

  const expenses = [
    {
      id: 'e1',
      title: 'Skin care products',
      amount: 784.12,
      date: new Date(2020, 8, 24),
    },
    { id: 'e2', title: 'Hair care products', amount: 987.49, date: new Date(2021, 10, 22) },
    {
      id: 'e3',
      title: 'Lotions and Emulsions',
      amount: 543.67,
      date: new Date(2021, 1, 24),
    },
    {
      id: 'e4',
      title: 'Fragrances',
      amount: 900,
      date: new Date(2021, 5, 7),
    },
  ];


  return (
          <div >
            <h2><center>Easily Manage Your Expenses !!!!</center></h2>
            <Expenses items={expenses}/> 
          </div>
        );
} 

export default App;
