import Chartup from "../../assets/chart-up.svg"
import Chartdown from "../../assets/chart-down.svg"
import { RingLoader } from "react-spinners";
function TableCoin({ coins , Isloading}) {
    return (
        <div>
         {Isloading?<p><RingLoader color="#0004ff" /></p>:
            <table>
                <thead>
                    <tr>
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
            </table>}
        </div>
    )
}

export default TableCoin;
const TableRow = (
    { coin:{
        name, image,
        current_price,
        total_volume,
        price_change_percentage_24h: price_change, symbol,
        id,}
    }) => (
    <tr key={id}>
        <td>
            <div>
                <img src={image} alt="" />
                <span>{symbol.toUpperCase()}</span>
            </div>
        </td>
        <td>{name}</td>
        <td>${current_price.toLocaleString()}</td>
        <td>{price_change.toFixed(2)}%</td>
        <td>{total_volume.toLocaleString()}</td>
        <td><img src={price_change > 0 ? Chartup : Chartdown} alt={name} /></td>
    </tr>
)