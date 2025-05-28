import React, { useEffect, useState } from "react";
import { fetchCoinData } from "../../services/fetchCoinData";
import { useQuery } from "@tanstack/react-query";



function CoinTable() {
    const [page, setPage] = useState(1);
    const [coinData, setCoinData] = useState([]);
    const { data, isLoading, isPending, isError, error } = useQuery({
        queryKey: ['coins', page],
        queryFn: () => fetchCoinData(page, 'usd'),
        retry: 2,
        retryDelay: 1000,
        cacheTime: 1000 * 60 * 2,
    });
    if (isLoading) {
        return (
            <>
                <div>Loading...</div>
            </>
        )
    }
    if (data) {
        const coinData = data.data;
        console.log(coinData);
        return (
            <>
                <div className="m-1">
                    <div className="flex justify-between p-2 text-2xl">
                        <span>Symbol</span>
                        <span>Name</span>
                        <span>Price</span>
                    </div>
                    {coinData.map((ele, index) =>
                        <div className="border border-amber-10 cursor-pointer my-2 flex justify-between items-center gap-1 p-2"
                            key={index}
                            onClick={() => console.log(ele.id)}
                        >
                            <img className="w-20 h-20" src={ele.image} alt="" />
                            <h1 className="text-2xl capitalize">{ele.id}</h1>
                            <h1 className="text-2xl">{ele.current_price}</h1>
                        </div>
                    )}
                </div>
            </>
        )
    }
}

export default CoinTable;