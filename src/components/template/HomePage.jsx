import { useEffect, useState } from 'react';
import TableCoin from '../modules/TableCoin'
import { getCoinList } from '../../services/CryptoApi';
import Pagination from '../modules/pagination';
function HomePage() {
  const [coins, setcoins] = useState([])
  const [Isloading,Setisloading] = useState(true)
   const [page,setpage] = useState(1)
  useEffect(() => {
    Setisloading(true)
    const getData = async () => {
      const fetchData = await fetch(getCoinList(page))
      const json = await fetchData.json()
      setcoins(json)
      Setisloading(false)
    }
    getData()
  }, [page])
  return (
    <div className='container'>
      <Pagination page={page} setpage={setpage}  />
      <TableCoin coins={coins} Isloading={Isloading} />
    </div>
  )
}

export default HomePage