import Post from "./Post";

const PostersList = ({ posts }) => {
    return (
        <ul className="flex flex-wrap justify-around gap-8">
            {posts.map((post) => {
                const arrOfPathImg = post.filePath.split("\\");
                const posterImg = `http://localhost:3000/${arrOfPathImg[0]}/${arrOfPathImg[1]}`;
                return (
                    <Post
                        key={post._id}
                        id={post._id}
                        title={post.title}
                        author={post.author}
                        pathImg={posterImg}
                    />
                );
            })}
        </ul>
    );
};

export default PostersList;
