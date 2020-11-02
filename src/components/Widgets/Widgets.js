import React from 'react'
import './Widgets.css'
import {TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed} from 'react-twitter-embed'
import { SearchOutlined } from '@material-ui/icons'
function Widgets() {
    return (
        <div className='widgets'>
           <div className='widgets__input'>
               <SearchOutlined className='widgets__search'/>
               <input type = 'text' placeholder='Search Twitter' />
           </div>

           <div className='widgets__widgetContainer'>
               <h2>What's happening</h2>
               <TwitterTweetEmbed tweetId = {'1108231783852597250'} />

               <TwitterTimelineEmbed
                sourceType="profile"
                screenName="reactjs"
                options={{ height: 400 }}
                className='widgets__twitterTimeline' />

               <TwitterShareButton 
                    url={'https://www.facebook.com/profile.php?id=100007170876571'}
                    options={{text:'#reactjs is awesome', via:'Ankit Patel'}} />  

           </div>
        </div>
    )
}

export default Widgets
