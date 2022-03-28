import React from "react";
import MyButton from "../button/MyButton";
import {getPagesArray} from "../../utils/ pages";


const Pagination = ({totalPages, page, changePage}) => {
    let pagesArray = getPagesArray(totalPages)
    return (
        <div className='page__wrapper'>
            {pagesArray.map(p =>
                <MyButton onClick={() => changePage(p)} key={p}
                          className={page === p ? 'page page__current' : 'page'}>{p}</MyButton>
            )}
        </div>
    )
}

export default Pagination