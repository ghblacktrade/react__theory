import './App.css';
import {useState} from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import './Styles/App.css'
import PostList from "./components/PostList";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/imput/MyInput";

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
    const [title, setTitle] = useState('')
    const addNewPost = (e) => {
        e.preventDefault()

    }
    return (
        <div>
            <Counter/>
            <ClassCounter/>
            <MyInput
                value={title}
                onChange={e => setTitle(e.target.value)}
                type='text'
                placeholder='name post' />
            <MyInput type='text' placeholder='name post' />
            <MyButton onClick={addNewPost}>Create post</MyButton>
            <PostList posts={posts} title='post list JS'/>
            <PostList posts={posts2} title='post list Python'/>

        </div>
    );
}

export default App;
