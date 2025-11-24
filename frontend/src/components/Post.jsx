import { Link } from "react-router";

const Post = ({ id, title, author, pathImg }) => {
    return (
        <li className="max-w-[270px]">
            <img className="w-[270px] h-[176px] mb-4" src={pathImg} alt="#" />
            <h4 className="mb-6 text-2xl font-bold underline">
                <Link to={`/catalog/${id}`}>{title}</Link>
            </h4>
            <address className="text-xs not-italic">{author}</address>
        </li>
    );
};

export default Post;
