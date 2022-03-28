import React, {useEffect, useMemo, useState} from "react";
import PostService from "../API/PostService";
import Counter from "../components/Counter";
import ClassCounter from "../components/ClassCounter";
import MyButton from "../components/UI/button/MyButton";
import MyModal from "../components/UI/MyModal/MyModal";
import PostFilter from "../components/PostFilter";
import Loader from "../components/UI/Loader/Loader";
import PostList from "../components/PostList";
import Pagination from "../components/UI/pagination/Pagination";
import PostForm from "../components/PostForm";
import {usePosts} from "../hooks/usePosts";
import {useFetching} from "../hooks/useFetching";
import {getPageCount} from "../utils/ pages";


function Posts() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'JavaScript', body: 'Description'},
        {id: 2, title: 'JavaScript', body: 'Description'},
        {id: 3, title: 'JavaScript', body: 'Description'}
    ])
    const [modal, setModal] = useState('')
    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }
    const [filter, setFilter] = useState({sort: '', query: ''})
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)
    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }
    const changePage = (page) => {
        setPage(page)
    }
    const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
        const response = await PostService.getAll(limit, page)
        setPosts(response.data)
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPageCount(totalCount, limit))
    })


    useEffect(() => {
        fetchPosts()
    }, [page])


    return (
        <div>
            <button onClick={fetchPosts}>GET</button>
            <Counter/>
            <ClassCounter/>
            <MyButton style={{marginTop: '5px'}} onClick={() => setModal(true)}>
                Create User
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </MyModal>
            <PostFilter
                filter={filter}
                setFilter={setFilter}/>
            {isPostsLoading
                ? <Loader/>
                : <PostList
                    remove={removePost}
                    posts={sortedAndSearchedPosts}
                    title='post list JS'/>
            }
            <Pagination page={page} changePage={changePage} totalPages={totalPages}/>

        </div>
    );
}

export default Posts;
