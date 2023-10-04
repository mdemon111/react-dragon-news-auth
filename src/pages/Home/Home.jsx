import { useEffect, useState } from "react";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navabar from "../Shared/Navbar/Navabar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";
import { data } from "autoprefixer";
import { Link } from "react-router-dom";
import News from "../News/News";

const Home = () => {
    const [news, setNews] = useState([]);
    const [readMore, setReadMore] = useState(false)

    useEffect(() => {
        fetch('news.json')
            .then(res => res.json())
            .then(data => setNews(data))
        console.log(data);
    }, [])
    console.log(news);

    return (
        <div>

            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navabar></Navabar>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div>
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="md:col-span-2">
                    <h2 className="text-4xl">Dragon News Home </h2>
                    {
                        news.map(news => <Link to={`/news/${news._id}`}>
                            <div class="relative flex  mt-6  flex-col rounded-xl bg-white  text-gray-700 shadow-md">
                                
                                <img className="h-96" src={news.image_url} alt="" />
                                <p className="text-xl font-bold">{news.title}</p>
                                <div>

                                    <p>
                                        {
                                            news.details.length > 200 ? <p>
                                                {news.details.slice(0, 200)} <Link to={`/news/${<News></News>}`} className="text-blue-600">Read More.....</Link>
                                            </p> : <p>{news.details}</p>
                                        }
                                    </p>
                                   
                                    
                                </div>
                                
                            </div>

                        </Link>)
                    }
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;