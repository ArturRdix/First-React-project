import React from 'react';
import Post from './post';

const PostList = ({ posts, title, remove }) => {

    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>{title}</h1>
            {posts.map(post => <Post remove={remove} post={post} key={post.id} />)
            }
        </div>
    )
}
export default PostList

