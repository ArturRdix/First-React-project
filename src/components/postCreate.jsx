import React, { useState } from 'react';
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';

const PostCreate = ({ callBack }) => {
    function createPost(e) {
        e.preventDefault()
        const newPost = {
            title,
            body
        }
        callBack(newPost)
        setBody('')
        setTitle('')
    }

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    return (
        <form action="">
            <MyInput
                value={title}
                onChange={e => setTitle(e.target.value)}
                type="text"
                placeholder='Название поста' />
            <MyInput
                value={body}
                type="text"
                placeholder='Описание текста'
                onChange={e => setBody(e.target.value)} />

            <MyButton onClick={e => {
                createPost(e)
            }} >Опубликовать</MyButton>
        </form>
    )
}

export default PostCreate