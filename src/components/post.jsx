import React, { useState } from 'react'
import MyButton from './UI/button/MyButton';

const Post = ({ remove, ...props }) => {

  return (
    <div className="post">
      <div className="post__content">
        <strong>{props.post.id}. {props.post.title}</strong>
        <div>
          {props.post.body}
        </div>
      </div>
      <div className="post__btn">
        <MyButton onClick={() => {
          return remove(props.post)
        }}>Удалить пост</MyButton>
      </div>
    </div>)
}
export default Post;