import './App.css';
import {useState} from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";

import './Styles/App.css'
import PostItem from "./components/PostItem";

function App() {
    const [posts, setPosts] = useState([
            {id: 1, title: 'JavaScript', body: 'Description'},
            {id: 2, title: 'JavaScript', body: 'Description'},
            {id: 3, title: 'JavaScript', body: 'Description'}
        ]
    )
    return (
        <div>
            <Counter/>
            <ClassCounter/>
            <h1 style={{textAlign: 'center'}}>Post list</h1>
            {posts.map(post =>
                <PostItem post={post} key={post.id}/>
            )}

        </div>
    );
}

export default App;
