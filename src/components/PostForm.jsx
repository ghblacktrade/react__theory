import React, {useState} from "react";
import MyInput from "../UI/imput/MyInput";
import MyButton from "../UI/button/MyButton";


const PostForm = (props) => {

    const [title, setTitle] = useState('')

    return (
        <form>
            <MyInput
                value={title}
                onChange={e => setTitle(e.target.value)}
                type='text'
                placeholder='name post' />
            <MyInput
                value={body}
                onChange={e => setBody(e.target.value)}
                type='text'
                placeholder='name post' />
            <MyButton onClick={addNewPost}>Create post</MyButton>
        </form>
    )
}

export default PostForm