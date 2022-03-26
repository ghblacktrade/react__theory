import './App.css';
import React, {useMemo, useState} from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import './Styles/App.css'
import PostList from "./components/PostList";
import PostFilter from "./components/PostFilter";
import PostForm from "./components/PostForm";
import MyModal from "./UI/MyModal/MyModal";
import MyButton from "./UI/button/MyButton";
import {usePosts} from "./hooks/usePosts";

function App() {
    const [posts, setPosts] = useState([
            {id: 1, title: 'JavaScript', body: 'Description'},
            {id: 2, title: 'JavaScript', body: 'Description'},
            {id: 3, title: 'JavaScript', body: 'Description'}
        ]
    )
    const [modal, setModal] = useState('')
    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }
    const [filter, setFilter] = useState({sort: '', query: ''})
    const sortedAndSearchedPosts =usePosts(posts, filter.sort, filter.query)
    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }
    return (
        <div>
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
            <PostList
                remove={removePost}
                posts={sortedAndSearchedPosts}
                title='post list JS'/>
        </div>
    );
}

export default App;
