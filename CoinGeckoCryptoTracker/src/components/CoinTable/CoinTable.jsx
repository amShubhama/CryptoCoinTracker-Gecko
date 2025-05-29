import React, { useContext, useEffect, useState } from "react";
import { fetchCoinData } from "../../services/fetchCoinData";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
// import { CurrencyContext } from "../../context/CurrencyContext";
import currencyStore from '../../state/store'
function CoinTable() {
    //const [page, setPage] = useState(1);
    const navigate = useNavigate();
    const { currency, page, setPage } = currencyStore();
    const { data, isLoading, isPending, isError, error } = useQuery({
        queryKey: ['coins', page, currency],
        queryFn: () => fetchCoinData(page, currency),
        retry: false,
        cacheTime: 1000 * 60 * 2,
    });
    if (isError) return <div className="text-xl font-mono flex justify-center items-center text-center mt-[2rem]">You've exceeded the Rate Limit try again after 30s.. /</div>
    return (
        <>
            <div className="my-5 flex flex-col items-center justify-center gap-5 w-[80vw] mx-auto">
                <div className="w-full bg-amber-600 flex py-4 px-2 font-semibold items-center justify-between">
                    <div className="basis-[25%]">Symbol</div>
                    <div className="basis-[15%]">Price</div>
                    <div className="basis-[10%] text-center">24h PriceChange</div>
                    <div className="basis-[20%]">Market Cap</div>
                </div>
                <div className="flex flex-col w-[80vw] mx-auto">
                    {isLoading && <div>Loading...</div>}
                </div>
                {
                    data && data.map((coin) => {
                        return (
                            <div
                                key={coin.id}
                                className="w-full bg-transparent flex py-4 px-2 font-bold items-center justify-between cursor-pointer"
                                onClick={() => navigate(`/coin_details/${coin.id}`)}
                            >
                                <div className="flex items-center justify-start gap-3 basis-[35%]">
                                    <div className="w-[5rem] h-[5rem]">
                                        <img src={coin.image} className="w-full h-full" />
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="text-3xl">{coin.name}</div>
                                        <div className="text-xl">{coin.symbol}</div>
                                    </div>
                                </div>
                                <div className="basis-[25%]">{coin.current_price}</div>
                                <div className="basis-[20%]">{coin.price_change_24h}</div>
                                <div className="basis-[20%]">{coin.market_cap}</div>
                            </div>
                        );
                    })
                }
                {data &&
                    <div className="flex justify-center items-center gap-6 m-4">
                        <button
                            disabled={page === 1}
                            onClick={() => setPage(page - 1)}
                            className="btn btn-secondary btn-wide text-2xl bg-amber-50"
                        >
                            Prev
                        </button>
                        <button
                            onClick={() => setPage(page + 1)}
                            className="btn btn-secondary btn-wide text-2xl bg-amber-300"
                        >
                            Next
                        </button>
                    </div>
                }
            </div>
        </>
    )
}
export default CoinTable;