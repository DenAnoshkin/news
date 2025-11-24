import { useSelector } from "react-redux";
import LatestNews from "../components/LatestNews";
import Hero from "../components/Hero";

const MainPage = () => {
    const news = useSelector((state) => state.entities);
    return (
        <>
            <Hero />
            <LatestNews />
        </>
    );
};

export default MainPage;
