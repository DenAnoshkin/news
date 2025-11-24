import PostersList from "../components/PostersList";
import Pagination from "../components/Pagination";
import { useSelector } from "react-redux";
import { useState } from "react";
import SearchInput from "../components/UI/SearchInput";

const CatalogNews = () => {
    const news = useSelector((state) => state.entities);
    const [searchNews, setSearchNews] = useState("");
    const pageSize = 7;
    const [currentPage, setCurrentPage] = useState(1);
    const filteredNews = news.filter((item) => {
        return item.title.includes(searchNews);
    });
    const displayedNews = filteredNews.slice(
        (currentPage - 1) * pageSize,
        currentPage * pageSize
    );

    const handleChange = (e) => {
        setSearchNews(e.target.value);
    };

    const handleChangePage = (page, value = 0) => {
        setCurrentPage(page + value);
    };

    return (
        <section className="flex flex-col min-h-screen">
            <div className="w-7xl mx-auto px-2 py-4 flex flex-col flex-1">
                <h2 className="mb-6 text-4xl font-bold">Список новостей</h2>
                <SearchInput value={searchNews} onChange={handleChange} />
                <PostersList posts={displayedNews} />
                <Pagination
                    pageSize={pageSize}
                    posts={filteredNews}
                    currentPage={currentPage}
                    onChange={handleChangePage}
                />
            </div>
        </section>
    );
};

export default CatalogNews;
