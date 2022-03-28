import './App.css';
import React, {useEffect, useMemo, useState} from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import './Styles/App.css'
import PostList from "./components/PostList";
import PostFilter from "./components/PostFilter";
import PostForm from "./components/PostForm";
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import {usePosts} from "./hooks/usePosts";
import axios from "axios";
import PostService from "./API/PostService";
import Loader from "./components/UI/Loader/Loader";
import {useFetching} from "./hooks/useFetching";
import {getPageCount, getPagesArray} from "./utils/ pages";
import Pagination from "./components/UI/pagination/Pagination";
import {BrowserRouter, Route, Router, Routes, Link} from "react-router-dom";
import About from "./Pages/About";
import Posts from "./Pages/Posts";
import Navbar from "./components/UI/Navbar/Navbar";
import * as PropTypes from "prop-types";
import Error from "./Pages/Error";
import AppRouter from "./components/AppRouter";

function Navigate(props) {
    return null;
}

Navigate.propTypes = {
    replace: PropTypes.bool,
    to: PropTypes.string
};

function App() {
    return (
        <div>
            <Navbar/>
<AppRouter />
        </div>
    );
}

export default App;
