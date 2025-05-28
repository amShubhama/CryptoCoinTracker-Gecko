import axiosInstance from "../helpers/axiosInstance";

export async function fetchCoinData() {
    try {
        const response = await axiosInstance.get('/coins/markets?vs_currency=usd');
        console.log(response);
        return response;
    } catch (error) {
        prompt("Something went wrong check console");
        console.error(error);
        return null;
    }
}