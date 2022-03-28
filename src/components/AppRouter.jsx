import React from "react";
import {Route, Routes} from "react-router-dom";
import Posts from "../Pages/Posts";
import About from "../Pages/About";
import Error from "../Pages/Error";

const AppRouter = () => {
    return (
        <Routes>
            <Route path='/posts' element={<Posts/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path="*" element={<Error/>}/>
        </Routes>
    )
}


export default AppRouter
