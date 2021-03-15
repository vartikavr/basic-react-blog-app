import useFetch from './useFetch';
import BlogList from './blogList';
const Home = () => {
    const { Data: Blogs, isPending, error } = useFetch('http://localhost:8000/blogs');
    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading ... </div>}
            {Blogs && <BlogList blogs={Blogs} title="All blogs" />}
        </div>
    );
}

export default Home;