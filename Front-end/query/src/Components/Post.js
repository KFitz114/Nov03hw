import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Post(props) {
    const[post, setPost] = useState ('');
        useEffect(() => {
            let data = {
                userName: 'Kfitz',
                passWord: '123456'
            }
        axios.post('http://localhost:3400/post', data)
            .then(res => { console.log(res.data);
                setPost(res.data.post);
        })
    }, [])
        return(
            <div>
                <h1> Hello {post} </h1>
            </div>
        )
}

export default Post;