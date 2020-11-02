import React, { useEffect, useState } from 'react'
import FlipMove from 'react-flip-move'
import Post from '../Post/Post'
import TweetBox from '../TweetBox/TweetBox'
import db from '../../firebase'
import './Feed.css'
function Feed() {
    const [posts, setPosts] = useState([])

    useEffect(()=>{
        db.collection('posts').orderBy('timestamp','desc').onSnapshot(snapshot=>(
            setPosts(snapshot.docs.map(doc=>doc.data()))
        ))
    },[])
    return (
        <div className='feed'>
            <div className='feed__header'>
                <h2>Home</h2>
            </div>
            {/* header */}

            {/* tweetbox */}
            <TweetBox/>

            {/* post */}
            <FlipMove>
                {posts.map((post,i)=>(
                    <Post 
                        key={i}
                        displayName={post.displayName}
                        avatar={post.avatar}
                        image={post.image}
                        verified = {post.image}
                        text={post.text}
                        username={post.username}/> 
                ))}
            </FlipMove>
        </div>
    )
}

export default Feed
