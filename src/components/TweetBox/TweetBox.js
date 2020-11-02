import { Avatar, Button } from '@material-ui/core'
import React, { useState } from 'react'
import db from '../../firebase'
import './TweetBox.css'
import firebase from "firebase"
function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState()

    const sendTweet =(e)=>{
        e.preventDefault()
        db.collection('posts').add({
            displayName:'Ankit Patel',
            username:'ankitpatel',
            verified:true,
            text:tweetMessage,
            avatar:'https://scontent.famd1-3.fna.fbcdn.net/v/t1.0-9/78277994_2494842867431385_4349199006233001984_o.jpg?_nc_cat=109&ccb=2&_nc_sid=09cbfe&_nc_ohc=cid7KbVwmQ4AX9BWRt1&_nc_ht=scontent.famd1-3.fna&oh=6818f3376445127133ecf25330362929&oe=5FC6ED92',
            timestamp:firebase.firestore.FieldValue.serverTimestamp(),   
        });
        setTweetMessage('');
    }
    return (
        <div className='tweetBox'>
            <form>
                <div className='tweetBox__input'>
                <Avatar src={`https://scontent.famd1-3.fna.fbcdn.net/v/t1.0-9/78277994_2494842867431385_4349199006233001984_o.jpg?_nc_cat=109&ccb=2&_nc_sid=09cbfe&_nc_ohc=cid7KbVwmQ4AX9BWRt1&_nc_ht=scontent.famd1-3.fna&oh=6818f3376445127133ecf25330362929&oe=5FC6ED92`}/>
                    <input value={tweetMessage} onChange={e=>setTweetMessage(e.target.value)} placeholder="What's happening?" type='text' />
                </div>
                <Button type='submit' onClick={sendTweet} className='tweetBox__tweetButton'>Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
