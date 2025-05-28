import { useContext, useState } from "react";
import Banner from "../Banner/Banner";
import CoinTable from "../CoinTable/CoinTable";
import Navbar from "../Navbar/Navbar";
import { CurrencyContext } from "../../context/CurrencyContext";

function Home() {
    return (
        <>
            <Navbar />
            <Banner />
            <CoinTable />
        </>
    )
}

export default Home;