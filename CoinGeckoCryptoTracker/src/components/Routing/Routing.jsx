import { Route, Routes } from "react-router-dom";
import MainLayout from "../../pages/Layout";
import CustomErrorBoundary from "../CustomErrorBoundary/CustomErrorBoundary";
import { lazy, Suspense } from "react";
import MyCodeLoader from "../ContentLoader/ContentLoader";
const Home = lazy(() => import('../../pages/Home'));
const CoinDetailsPage = lazy(() => import('../../pages/CoinDetailsPage'));
function Routing() {
    return (
        <CustomErrorBoundary>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={
                        <Suspense fallback={<MyCodeLoader />}>
                            <Home />
                        </Suspense>
                    } />
                    <Route path="/coin_details/:id" element={
                        <Suspense fallback={<MyCodeLoader />}>
                            <CoinDetailsPage />
                        </Suspense>
                    } />
                </Route>
            </Routes>
        </CustomErrorBoundary>
    )
}

export default Routing;