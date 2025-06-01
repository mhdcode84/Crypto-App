import { useEffect, useState } from 'react';
import TableCoin from '../modules/TableCoin'
import { getCoinList } from '../../services/CryptoApi';
import Pagination from '../modules/pagination';
function HomePage() {
  const [coins, setcoins] = useState([])
  const [Isloading,Setisloading] = useState(true)
  useEffect(() => {
    const getData = async () => {
      const fetchData = await fetch(getCoinList())
      const json = await fetchData.json()
      setcoins(json)
      Setisloading(false)
    }
    getData()
  }, [])
  return (
    <div className='container'>
      <Pagination/>
      <TableCoin coins={coins} Isloading={Isloading} />
    </div>
  )
}

export default HomePage