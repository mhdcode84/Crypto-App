import { useEffect, useState } from 'react';
import TableCoin from '../modules/TableCoin'
import { getCoinList } from '../../services/CryptoApi';

function HomePage() {
  const [coins, setcoins] = useState([])
  useEffect(() => {
    const getData = async () => {
      const fetchData = await fetch(getCoinList())
      const json = await fetchData.json()
      setcoins(json)
    }
    getData()
  }, [])
  return (
    <div>
      <TableCoin coins={coins} />
    </div>
  )
}

export default HomePage