import React, { forwardRef } from "react";
import { Avatar } from '@material-ui/core'
import { ChatBubbleOutline, FavoriteBorder, PublishOutlined, RepeatOneOutlined, VerifiedUser } from '@material-ui/icons'
import './Post.css'
const Post = forwardRef(
    ({  displayName,username,verified,text,avatar }, ref) => {
        return (
            <div className='post' ref={ref}>
                <div className='post__avatar'>
                    <Avatar src ={avatar} />
                </div>
                <div className='post__body'>
                    <div className='post__header'>
                        <div className='post__headerText'>
                            <h3>
                                {displayName}{' '} <span className='post__headerSpecial'>{ verified && <VerifiedUser className="post__badge" />}@{username}</span>
                            </h3>
                        </div>
                        <div className='post__description'>
                            <p>{text}</p>
                        </div>
                    </div>
                    <div className='post__footer'>
                        <ChatBubbleOutline fontSize = 'small' />
                        <RepeatOneOutlined fontSize = 'small' />
                        <FavoriteBorder fontSize = 'small' />
                        <PublishOutlined fontSize = 'small' />
                    </div>
                </div>
            </div>
        )
})

export default Post
