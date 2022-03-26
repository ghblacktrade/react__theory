import './App.css';
import {useMemo, useState} from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import './Styles/App.css'
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./UI/selector/MySelect";
import MyInput from "./UI/imput/MyInput";

function App() {
    const [posts, setPosts] = useState([
            {id: 1, title: 'JavaScript', body: 'Description'},
            {id: 2, title: 'JavaScript', body: 'Description'},
            {id: 3, title: 'JavaScript', body: 'Description'}
        ]
    )

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))

    }
    const [selectedSort, setSelectedSort] = useState('')


    const [searchQuery, setSearchQuery] = useState('')

    const sortPosts = (sort) => {
        setSelectedSort(sort)
    }


    const sortedPosts = useMemo(() => {
        if (selectedSort) {
            return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
        }
        return posts
    }, [selectedSort, posts])

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(searchQuery))
    }, [searchQuery, sortedPosts])

    return (
        <div>
            <Counter/>
            <ClassCounter/>
            <MyInput
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder='search...'
            />
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
            {sortedAndSearchedPosts.length
                ? <PostList remove={removePost} posts={sortedAndSearchedPosts} title='post list JS'/>
                : <h1 style={{textAlign: 'center'}}>posts not found</h1>
            }
            {/*<PostList posts={posts2} title='post list Python'/>*/}

        </div>
    );
}

export default App;
