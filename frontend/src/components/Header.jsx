import { Link } from "react-router";
import UserButtons from "./UserButtons";

const Header = () => {
    return (
        <header className="py-8 bg-[#dedcdc]">
            <nav className="flex justify-between items-center max-w-7xl mx-auto px-2">
                <Link to="/" className="flex text-base font-bold">
                    <span className="p-2 bg-black rounded-lg text-white">
                        News
                    </span>
                    <span className="p-2">Portal</span>
                </Link>
                <div className="flex gap-6">
                    <Link to="/catalog">Все новости</Link>
                    <UserButtons />
                </div>
            </nav>
        </header>
    );
};

export default Header;
