import React from "react";
import MyButton from "./UI/button/MyButton";
import { useNavigate } from 'react-router-dom'

const PostItem = (props) => {
    const router = useNavigate()
  return (
      <div className='post'>
          <div className='post__content'>
              <strong>{props.post.id}. {props.post.title}</strong>
              <div>
                  {props.post.body}
              </div>
              <div className='posts__btn'>
                  <MyButton onClick={() => props.remove(props.post)}>Remove</MyButton>
                  <MyButton onCLick={() =>{router(`/posts/${props.post.id}`)} }>Open</MyButton>
              </div>
          </div>
      </div>
  )
}

export default PostItem