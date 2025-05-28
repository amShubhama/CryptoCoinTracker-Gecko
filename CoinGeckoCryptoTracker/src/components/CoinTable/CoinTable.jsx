import React, { useEffect, useState } from "react";
import { fetchCoinData } from "../../services/fetchCoinData";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

function CoinTable({ currency }) {
    const [page, setPage] = useState(1);
    const navigate = useNavigate();
    const { data, isLoading, isPending, isError, error } = useQuery({
        queryKey: ['coins', page, currency],
        queryFn: () => fetchCoinData(page, currency),
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
                            onClick={() => navigate('/coin_details')}
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
    if (Error) {
        console.log(Error);

        return (
            <>
                <div>Failed to load information try after some time...</div>
            </>
        )
    }
}

export default CoinTable;