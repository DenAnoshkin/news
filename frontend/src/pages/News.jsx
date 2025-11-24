import { useSelector } from "react-redux";
import userImg from "../assets/images/user.png";
import { useNavigate, useParams } from "react-router";
import Loading from "../components/Loading";
import { useEffect } from "react";

const News = () => {
    const state = useSelector((state) => state);
    const news = state.entities;
    const navigate = useNavigate();
    const { newsId } = useParams();
    const currentNews = news.find((item) => {
        return item._id === newsId;
    });

    useEffect(() => {
        if (!currentNews) {
            navigate("/error");
        }
    }, [currentNews, state.isLoading, navigate]);

    if (state.isLoading) {
        return <Loading />;
    }

    const arrOfPathImg = currentNews.filePath.split("\\");
    const newsImg = `http://localhost:3000/${arrOfPathImg[0]}/${arrOfPathImg[1]}`;

    return (
        <section className="py-14 min-h-screen">
            <div className="max-w-4xl flex flex-col mx-auto px-2">
                <img
                    src={newsImg}
                    alt="#"
                    className="w-[60%] h-auto object-contain mb-8 mx-auto"
                />
                <h2 className="mb-16 text-5xl text-center">
                    {currentNews.title}
                </h2>
                <p className="mb-16 text-2xl leading-[1.5]whitespace-pre-wrap break-words">
                    {currentNews.description}
                </p>
                <div className="flex items-center">
                    <img
                        src={userImg}
                        alt="#"
                        className="w-6 h-6 mr-2 rounded-[50%]"
                    />
                    <address className="text-base not-italic">
                        Создал: {`${currentNews.author}`}
                    </address>
                </div>
            </div>
        </section>
    );
};

export default News;
