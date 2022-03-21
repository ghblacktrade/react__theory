import './App.css';
import {useState} from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import './Styles/App.css'
import PostList from "./components/PostList";
import MyButton from "./UI/button/MyButton";

function App() {
    const [posts, setPosts] = useState([
            {id: 1, title: 'JavaScript', body: 'Description'},
            {id: 2, title: 'JavaScript', body: 'Description'},
            {id: 3, title: 'JavaScript', body: 'Description'}
        ]
    )
    const [posts2, setPosts2] = useState([
            {id: 1, title: 'Python', body: 'Description'},
            {id: 2, title: 'Python 2 ', body: 'Description'},
            {id: 3, title: 'Python 3', body: 'Description'}
        ]
    )
    return (
        <div>
            <Counter/>
            <ClassCounter/>
            <input type='text' placeholder='name post' />
            <input type='text' placeholder='name post' />
            <MyButton>Create post</MyButton>
            <PostList posts={posts} title='post list JS'/>
            <PostList posts={posts2} title='post list Python'/>

        </div>
    );
}

export default App;
