import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import { useDispatch } from "react-redux";
import { fetchNews } from "../store/slices/newsSlice";
import Loading from "../components/Loading";

const CreateNews = withAuthenticationRequired(
    () => {
        const [data, setData] = useState({
            title: "",
            description: "",
            file: null,
        });
        const { user } = useAuth0();
        const navigate = useNavigate();
        const dispatch = useDispatch();

        const handleChange = (e) => {
            setData((prevState) => {
                return { ...prevState, [e.target.name]: e.target.value };
            });
        };

        const handleFileChange = (e) => {
            setData({ ...data, file: e.target.files[0] });
        };

        const handleSubmit = async (e) => {
            e.preventDefault();

            const formData = new FormData();
            formData.append("title", data.title);
            formData.append("description", data.description);
            formData.append("author", user.email);
            formData.append("date", `${Date.now()}`);
            formData.append("file", data.file);

            try {
                const response = await axios.post(
                    "http://localhost:3000/news",
                    formData,
                    {
                        headers: { "Content-Type": "multipart/form-data" },
                    }
                );
                console.log(response.data);
                dispatch(fetchNews());
                navigate("/profile", { replace: true });
            } catch (error) {
                console.log(error);
            }
        };

        return (
            <div className="max-w-7xl mx-auto px-2 py-8">
                <form
                    onSubmit={handleSubmit}
                    className=" w-fit p-7 flex flex-col gap-12 w-[600px] mx-auto bg-[#eceaea] border rounded-xl"
                >
                    <h3 className="text-3xl font-bold">Создать новость</h3>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="title" className="text-xl font-bold">
                            Заголовок новости
                        </label>
                        <input
                            onChange={(e) => handleChange(e)}
                            value={data.title}
                            type="text"
                            placeholder="Введите заголовок"
                            name="title"
                            id="title"
                            className="p-4 border border-black w-80"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label
                            htmlFor="description"
                            className="text-xl font-bold"
                        >
                            Добавьте описание к новости
                        </label>
                        <textarea
                            onChange={(e) => handleChange(e)}
                            value={data.description}
                            name="description"
                            id="description"
                            rows="7"
                            className="p-4 border border-black w-80 rounded-xl"
                        />
                    </div>

                    <div className="flex items-center gap-3">
                        <label className="px-4 py-2 bg-indigo-600 text-white rounded-lg cursor-pointer hover:bg-indigo-700 transition">
                            Выбрать файл
                            <input
                                type="file"
                                className="hidden"
                                onChange={handleFileChange}
                            />
                        </label>
                        <span className="text-gray-600 text-sm">
                            {data.file ? data.file.name : "Файл не выбран"}
                        </span>
                    </div>

                    <button
                        type="submit"
                        className="w-fit h-fit px-4 py-2 text-white bg-indigo-600 rounded-xl border cursor-pointer hover:bg-indigo-700 transition"
                    >
                        Создать
                    </button>
                </form>
            </div>
        );
    },
    {
        onRedirecting: () => <Loading />,
    }
);

export default CreateNews;
