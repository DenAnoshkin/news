import { useSelector } from "react-redux";
import PostersList from "./PostersList";
import _ from "lodash";

const LatestNews = () => {
    const news = useSelector((state) => state.entities);
    const latestNews = _.orderBy(news, ["date"], ["desc", "asc"]).slice(0, 6);
    return (
        <section className="py-14">
            <div className="max-w-7xl mx-auto px-2">
                <h3 className="mb-6 text-4xl font-bold">Latest News</h3>
                <PostersList posts={latestNews} />
            </div>
        </section>
    );
};

export default LatestNews;
