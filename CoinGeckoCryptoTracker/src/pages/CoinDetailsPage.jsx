import { useParams } from "react-router-dom";

function CoinDetailsPage() {
    const { id } = useParams();
    console.log(id);
    return (
        <>
            <div>CoinDetails</div>
        </>
    )
}

export default CoinDetailsPage;