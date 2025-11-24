import heroImg from "../assets/images/hero.png";
import LinkCreateNews from "./LinkCreateNew";

const PopularPost = () => {
    return (
        <section className="pt-8">
            <div className="max-w-7xl mx-auto px-2">
                <h1 className="mb-6 text-5xl font-bold">Создай свою новость</h1>
                <div
                    className="flex flex-col justify-start p-14 w-full h-[400px] bg-no-repeat bg-cover"
                    style={{ backgroundImage: `url( ${heroImg} )` }}
                >
                    <h3 className="mb-4 max-w-md text-3xl leading-[1.5] text-white">
                        Поделись своими событиями — начни новую историю
                    </h3>
                    <LinkCreateNews />
                </div>
            </div>
        </section>
    );
};

export default PopularPost;
