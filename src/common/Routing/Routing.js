import React from 'react'
import {Route, Routes} from "react-router-dom";
import Home from "../../components/home/Home";
import MovieDeatails from "../../components/moviedetails/MovieDeatails";
import PageNotFound from "../../components/pagenotfound/PageNotFound";

function Routing() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/movie/:imdbID" element={<MovieDeatails/>}/>
                <Route path="*" element={<PageNotFound/>}/>
            </Routes>
        </>
    )
}

export default Routing
