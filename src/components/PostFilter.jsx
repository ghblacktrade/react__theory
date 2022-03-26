import React from "react";
import MyInput from "../UI/imput/MyInput";
import PostForm from "./PostForm";
import MySelect from "../UI/selector/MySelect";

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <MyInput
                value={filter.query}
                onChange={e => setFilter({...filter , query: e.target.value})}
                placeholder='search...'
            />

            <MySelect
                value={filter.sort}
                onChange={selectedSort=>setFilter({...filter, sort: selectedSort})}
                defaultValue='sort'
                options={[
                    {value: 'title', name: 'name'},
                    {value: 'body', name: 'description'}
                ]}
            />
        </div>
    )
}
export default PostFilter