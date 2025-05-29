import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import fetchCoinDetails from "../services/fetchCoinDetails";
import currencyStore from '../state/store'
import MyCodeLoader from "../components/ContentLoader/ContentLoader";

function CoinDetailsPage() {
    const { currency } = currencyStore();
    const { id } = useParams();
    const { data: coin, isLoading, isPending, isError, error } = useQuery({
        queryKey: ['coins', id],
        queryFn: () => fetchCoinDetails(id),
        retry: false,
        cacheTime: 1000 * 60 * 2,
    });
    console.log(error);
    if (isLoading) return <MyCodeLoader />
    if (isError) return <div className="text-xl font-mono flex justify-center items-center text-center mt-[2rem]">You've exceeded the Rate Limit try again after 30s.. / </div>
    return (
        <div className="flex flex-col md:flex-row ">
            <div
                className="md:w-1/3 w-full flex flex-col items-center mt-6 md:mt-0 border-r-2 border-gray-500"
            >
                <img
                    src={coin?.image?.large}
                    alt={coin?.id}
                    className="h-52 mb-5"
                />
                <h1 className="text-4xl font-bold mb-5">
                    {coin?.name}
                </h1>
                <p className="w-full px-6 py-4 text-justify">
                    {coin?.description?.en}
                </p>
                <div className="w-full flex flex-col md:flex-row md:justify-around items-center">
                    <div className="flex items-center mb-4 md:mb-3">
                        <h2 className="text-xl font-bold text-amber-500">Rank</h2>
                        <span className="text-xl ml-1 font-semibold">: {coin?.market_cap_rank}</span>
                    </div>
                    <div className="flex items-center mb-4 md:mb-3">
                        <h2 className="text-xl font-bold text-amber-500">Current Price</h2>
                        <span className="text-xl ml-1 font-semibold text-amber-100">: {coin?.market_data?.current_price[currency]}</span>
                    </div>
                </div>
            </div>
            <div className="md:w-2/3 w-full p-6">
                Coin Information
            </div>
        </div>
    )
}
export default CoinDetailsPage;