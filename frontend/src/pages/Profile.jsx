import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "../components/Loading";
import { useSelector } from "react-redux";
import { Link } from "react-router";
import LinkCreateNews from "../components/LinkCreateNew";

const Profile = withAuthenticationRequired(
    () => {
        const news = useSelector((state) => state.entities);
        const { user } = useAuth0();
        const userPosts = news.filter((post) => {
            return post.author === user.email;
        });
        return (
            <section className="max-w-7xl mx-auto px-2 py-14 min-h-screen">
                <div className="grid grid-cols-2 gap-14">
                    <img
                        src={user.picture}
                        alt="Картинка пользователя"
                        className="w-50 h-50 object-contain rounded-[50%]"
                    />
                    <div>
                        <h3 className="text-2xl font-bold">Мои новости</h3>
                        <ul className="flex flex-col gap-2 mt-4">
                            {userPosts.map((post) => {
                                return (
                                    <Link
                                        to={`/catalog/${post._id}`}
                                        key={post._id}
                                        className="underline"
                                    >
                                        {post.title}
                                    </Link>
                                );
                            })}
                        </ul>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h3 className="text-2xl font-bold mb-4">
                            Профиль пользователя
                        </h3>
                        <p>
                            Имя пользователя:{" "}
                            <span className="text-[#736c6c]">
                                {user.nickname}
                            </span>
                        </p>
                        <p>
                            Email:{" "}
                            <span className="text-[#736c6c]">{user.email}</span>
                        </p>
                        <p>
                            Дата последнего входа:
                            <br />{" "}
                            <span className="text-[#736c6c]">{`${new Date(
                                user.updated_at
                            )}`}</span>
                        </p>
                    </div>
                    <LinkCreateNews />
                </div>
            </section>
        );
    },
    {
        onRedirecting: () => <Loading />,
    }
);

export default Profile;
