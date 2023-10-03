import React from 'react';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';

const BreakingNews = () => {
    return (
        <div className='flex'>
            <button className="btn btn-secondary">Latest</button>
            <Marquee pauseOnHover={true} speed={150} >
                <Link className='mr-10' to="/">I can be a React component, multiple React components, or just some text..........</Link>
                <Link className='mr-10' to="/">I can be a React component, multiple React components, or just some text..........</Link>
                <Link className='mr-10' to="/">I can be a React component, multiple React components, or just some text..........</Link>
            </Marquee>
        </div>
    );
};

export default BreakingNews;