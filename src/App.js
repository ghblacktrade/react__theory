import './App.css';
import React, {useEffect, useMemo, useState} from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import './Styles/App.css'
import PostList from "./components/PostList";
import PostFilter from "./components/PostFilter";
import PostForm from "./components/PostForm";
import MyModal from "./UI/MyModal/MyModal";
import MyButton from "./UI/button/MyButton";
import {usePosts} from "./hooks/usePosts";
import axios from "axios";
import PostService from "./API/PostService";
import Loader from "./UI/Loader/Loader";
import {useFetching} from "./hooks/useFetching";
import {getPageCount, getPagesArray} from "./utils/ pages";
import Pagination from "./UI/pagination/Pagination";
import {BrowserRouter, Route, Router, Routes, Link} from "react-router-dom";
import About from "./Pages/About";

function App() {
    return (
        <div>

        <Routes>
<Route path='/about' element={<About />} />
        </Routes>
        </div>
    );
}

export default App;
