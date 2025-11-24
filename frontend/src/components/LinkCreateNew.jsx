import { Link } from "react-router";

const LinkCreateNews = () => {
    return (
        <Link
            to="/create"
            className="w-fit h-fit px-4 py-2 text-white bg-indigo-600 rounded-xl cursor-pointer hover:bg-indigo-700 transition"
        >
            Создать новость
        </Link>
    );
};

export default LinkCreateNews;
