import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import card from "../../../assets/1.png";
import card2 from "../../../assets/2.png";
import card3 from "../../../assets/3.png";
import icon from "../../../assets/Frame.png";

const LeftSideNav = () => {
    const [categoris, setCategoris] = useState([])

    useEffect(()=>{
        fetch('categories.json')
        .then(res=>res.json())
        .then(data=>setCategoris(data))
    },[])
    return (
        <div className="space-y-10">
            <h2 className="text-2xl">All Caterogy {categoris.length}</h2>
            {
                categoris.map(category => <Link className="block ml-4 text-xl font-semibold" key={category.id} to={`/category/${category.id}`}>{category.name}</Link>)
            }
            <div>
            <img src={card} alt="" />
            <h2 className="mt-4 text-xl font-semibold">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
            <div className="flex justify-around mt-8">
                <span>Sports</span>
                <img src={icon} alt="" />
                <p>Jan 4, 2022</p>
            </div>
            </div>
            <div>
            <img src={card2} alt="" />
            <h2 className="mt-4 text-xl font-semibold">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
            <div className="flex justify-around mt-8">
                <span>Sports</span>
                <img src={icon} alt="" />
                <p>Jan 4, 2022</p>
            </div>
            </div>
            <div>
            <img src={card3} alt="" />
            <h2 className="mt-4 text-xl font-semibold">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
            <div className="flex justify-around mt-8">
                <span>Sports</span>
                <img src={icon} alt="" />
                <p>Jan 4, 2022</p>
            </div>
            </div>
        </div>
    );
};

export default LeftSideNav;