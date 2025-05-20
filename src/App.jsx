import './App.css'
import HomePage from './components/template/HomePage';

function App() {
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    'x-cg-demo-api-key': 'CG-V7WPnLJE4UGyxfsEqVz1keSV	'
  }
};

fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=20&page=1', options)
  .then(res => res.json())
  .then(res => console.log(res))
  .catch(err => console.error(err));
  return (
    <>
<div>
  <HomePage/>
</div>
      
    </>
  )
}

export default App
