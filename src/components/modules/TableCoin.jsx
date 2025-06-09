import Chartup from "../../assets/chart-up.svg"
import Chartdown from "../../assets/chart-down.svg"
import { RingLoader } from "react-spinners";
import '../modules/global.css'
function TableCoin({ coins, Isloading }) {
    return (
        <div className="h-[1700px]" >
            {Isloading ? <div className="flex justify-center items-center h-[550px] "><RingLoader color="#0004ff" size={60} /> </div> :
                (
                    <table className="border-collapse mb-[20px]  w-[100%] h-screen">
                        <thead className=" border-b-2 border-b-solid border-b-[#fff] mt-52">
                            <tr >
                                <th>Coin</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>24h</th>
                                <th>Total volume</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {coins.map((coin) => (
                                <TableRow coin={coin} key={coin.id} />
                            ))}
                        </tbody>
                    </table>
                )}
        </div>
    )
}

export default TableCoin;
const TableRow = (
    { coin: {
        name, image,
        current_price,
        total_volume,
        price_change_percentage_24h: price_change, symbol,
        id, }
    }) => (
    <tr key={id}>
        <td >
            <div className="flex gap-2 items-center text-[#9fa6b7] font-[600] cursor-pointer">
                <img width="25px" height="25px" src={image} alt="" />
                <span className="text-[1.2rem]">{symbol.toUpperCase()}</span>
            </div>
        </td>
        <td>{name}</td>
        <td>${current_price.toLocaleString()}</td>
        <td className={price_change > 0 ? "text-green-500" : "text-red-500"}>{price_change.toFixed(2)}%</td>
        <td>{total_volume.toLocaleString()}</td>
        <td><img src={price_change > 0 ? Chartup : Chartdown} alt={name} /></td>
    </tr>
)