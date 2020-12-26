import React, { useEffect, useState } from 'react'

export default function Home() {
    const [price,setPrice] = useState('')

    function fetchPrice() {
        fetch('https://api.blockchain.com/v3/exchange/tickers/BTC-USD', {
            headers: {
                "X-API-Token": 'eyJhbGciOiJFUzI1NiIsInR5cCI6IkFQSSJ9.eyJhdWQiOiJtZXJjdXJ5IiwidWlkIjoiYzA4ZDMxMjMtYTBmZC00NDg3LTkxYWUtNzU0NzRhMTU0YWE5IiwiaXNzIjoiYmxvY2tjaGFpbiIsInJkbyI6dHJ1ZSwiaWF0IjoxNjA4OTY3Njg4LCJqdGkiOiIyODViMjkyZi1jNDhjLTQyN2EtYjE1OS1lN2EwNGY2Nzg0MmUiLCJzZXEiOjE4MTI3NjAsIndkbCI6ZmFsc2V9.H0KInfw/3gJ027frM08FNSB9+/hoKwgPFAXoFCloWiI2M/Ha8vynZAS7deamPvSskxwg9WUIIb1WchSQqIdqwGs='
            }
        })
        .then(res => res.json())
        .then(res => {
            console.log(res);
            setPrice(res.last_trade_price)
        })
    }

    useEffect(() => {
        fetchPrice()
        setInterval(() => fetchPrice(), 10000)
    }, [])

    return (
        <div>
            <h1>BTC Price</h1>
            {price ? <span>{price}</span> : null}
        </div>
    )
}