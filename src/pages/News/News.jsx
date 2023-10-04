import { useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import Navabar from "../Shared/Navbar/Navabar";

const News = () => {
    const {id} = useParams();
    return (
        <div>
            <Header></Header>
            <Navabar></Navabar>
            <div className="grid md:grid-cols-4">
                <div className="col-span-3">
                    <h2 className="text-5xl">New Detaile</h2>
                    <p>{id}</p>

                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default News;