import { useState } from "react";
import Banner from "../Banner/Banner";
import CoinTable from "../CoinTable/CoinTable";
import Navbar from "../Navbar/Navbar";

function Home() {
    const [currency, setCurrency] = useState('usd');
    return (
        <>
            <Navbar setCurrency={setCurrency} />
            <Banner />
            <CoinTable currency={currency} />
        </>
    )
}

export default Home;