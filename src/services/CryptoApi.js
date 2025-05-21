const BASE_URL = "https://api.coingecko.com/api/v3"
const API_KEY = "CG-V7WPnLJE4UGyxfsEqVz1keSV"

const getCoinList = () => {
    return `${BASE_URL}/coins/markets?vs_currency=usd&per_page=20&page=1&x-cg-demo-api-key=${API_KEY}`
}


export { getCoinList } ;