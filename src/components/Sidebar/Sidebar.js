import React from 'react'
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import SearchIcon from '@material-ui/icons/Search';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import './Sidebar.css'
import SidebarOption from '../SidebarOption/SidebarOption';
import { Button } from '@material-ui/core';
function Sidebar() {
    return (
        <div className='sidebar'>

            {/* Twitter icon */}
            <TwitterIcon className='sidebar__twitterIcon'/>

            {/* sidebarOption */}
            <SidebarOption active Icon={HomeIcon} text='Home'/>
            <SidebarOption Icon={SearchIcon} text='Explore'/>
            <SidebarOption Icon={NotificationsNoneIcon} text='Notification'/>
            <SidebarOption Icon={MailOutlineIcon} text='Messages'/>
            <SidebarOption Icon={BookmarkBorderIcon} text='Bookmarks'/>
            <SidebarOption Icon={ListAltIcon} text='List'/>
            <SidebarOption Icon={PermIdentityIcon} text='Profile'/>
            <SidebarOption Icon={MoreHorizIcon} text='More'/>

            {/* Button -> tweet */}
            <Button variant='outlined' className='sidebar__tweet' >
                Tweet
            </Button>
            
        </div>
    )
}

export default Sidebar
