import React from 'react'
import "./Sidebar.css"
import SidebarOption from './SidebarOption';
import HomeIcon from "@material-ui/icons/Home;"
import SearchIcon from "@material-ui/icons/Search;"
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic"

function Sidebar() {
    return (
        <div className="sidebar">
            <img className="sidebar__logo" src="https://i.ibb.co/gTTZ6hj/Spotify-symbol.jpg" alt="" />
            <SidebarOption Icon={HomeIcon} title="Home" />
            <SidebarOption Icon={SearchIcon} title="Search" />
            <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />
        </div>
    );
}

export default Sidebar
