import "./main.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainPage from "./pages/MainPage";
import CatalogNews from "./pages/CatalogNews";
import News from "./pages/News";
import Profile from "./pages/Profile";
import { Route, Routes } from "react-router";
import { fetchNews } from "./store/slices/newsSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import CreateNews from "./pages/CreateNews";
import Error from "./components/Error";

function App() {
    const dispach = useDispatch();
    useEffect(() => {
        dispach(fetchNews());
    }, [dispach]);
    return (
        <>
            <Header />
            <main>
                <Routes>
                    <Route path="/create" element={<CreateNews />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/catalog/:newsId" element={<News />} />
                    <Route path="/catalog" element={<CatalogNews />} />
                    <Route path="/" element={<MainPage />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </main>
            <Footer />
        </>
    );
}

export default App;
