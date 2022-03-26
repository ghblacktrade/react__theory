import './App.css';
import {useState} from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import './Styles/App.css'
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./UI/selector/MySelect";

function App() {
    const [posts, setPosts] = useState([
            {id: 1, title: 'JavaScript', body: 'Description'},
            {id: 2, title: 'JavaScript', body: 'Description'},
            {id: 3, title: 'JavaScript', body: 'Description'}
        ]
    )
    // const [posts2, setPosts2] = useState([
    //         {id: 1, title: 'Python', body: 'Description'},
    //         {id: 2, title: 'Python 2 ', body: 'Description'},
    //         {id: 3, title: 'Python 3', body: 'Description'}
    //     ]
    // )
    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))

    }
    const [selectedSort, setSelectedSort] = useState('')
    const sortPosts = (sort) => {
        setSelectedSort(sort)
        setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))

    }
    return (
        <div>
            <Counter/>
            <ClassCounter/>
            <PostForm create={createPost}/>
                <MySelect
                    value={selectedSort}
                    onChange={sortPosts}
                    defaultValue='sort'
                    options={[
                        {value: 'title', name: 'name'},
                        {value: 'body', name: 'description'}
                    ]}
                />
            {posts.length
                ? <PostList remove={removePost} posts={posts} title='post list JS'/>
                : <h1 style={{textAlign: 'center'}}>posts not found</h1>
            }
            {/*<PostList posts={posts2} title='post list Python'/>*/}

        </div>
    );
}

export default App;
