import { useEffect, useState } from "react";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navabar from "../Shared/Navbar/Navabar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";
import { data } from "autoprefixer";
import { Link } from "react-router-dom";

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
                <div className="border">
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="md:col-span-2 border">
                    <h2 className="text-4xl">Dragon News Home </h2>
                    {
                        news.map(news => <Link to={`/news/${news.id}`}>
                            <div class="relative flex max-w-[24rem] mt-6  flex-col rounded-xl bg-white  text-gray-700 shadow-md">
                                <p>{news.title}</p>
                                <img src={news.image_url} alt="" />
                                <div>
                                   
                                    <p class="mt-3 block font-sans text-xl font-normal leading-relaxed text-gray-700 antialiased">
                                        <span className={`overflow-hidden inline-block h-48 ${readMore ? "h-20rem" : ""}`}>{news.details}</span>
                                        <button onClick={() => setReadMore((prev) =>prev )} className="btn bg-none text-red-500">Read More</button>
                                    </p>
                                </div>
                                <div class="flex items-center justify-between p-6">
                                    <div class="flex items-center -space-x-3">
                                        <img
                                            alt="natali craig"
                                            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1061&amp;q=80"
                                            class="relative inline-block h-9 w-9 rounded-full border-2 border-white object-cover object-center hover:z-10"
                                            data-tooltip-target="author-1"
                                        />
                                        <div
                                            data-tooltip="author-1"
                                            class="absolute z-50 whitespace-normal break-words rounded-lg bg-black py-1.5 px-3 font-sans text-sm font-normal text-white focus:outline-none"
                                        >
                                            Natali Craig
                                        </div>
                                        <img
                                            alt="tania andrew"
                                            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
                                            class="relative inline-block h-9 w-9 rounded-full border-2 border-white object-cover object-center hover:z-10"
                                            data-tooltip-target="author-2"
                                        />
                                        <div
                                            data-tooltip="author-2"
                                            class="absolute z-50 whitespace-normal break-words rounded-lg bg-black py-1.5 px-3 font-sans text-sm font-normal text-white focus:outline-none"
                                        >
                                            Tania Andrew
                                        </div>
                                    </div>
                                    <p class="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                                        January 10
                                    </p>
                                </div>
                            </div>

                        </Link>)
                    }
                </div>
                <div className="border">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;