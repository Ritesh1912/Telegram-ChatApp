import React from 'react';
import './ConversationSearch.scss';
import { GiHamburgerMenu } from "react-icons/gi";
import { CiSearch } from "react-icons/ci";


const ConversationSearch = ({ conversations }) => {
    let nameContent;

    if (conversations && conversations.length > 0) {
        nameContent = <h1>Telegram</h1>;
    }
    

    return (
        <>
       
        <div id="search-container">
            <div className='hamberIcon'><GiHamburgerMenu /></div> 
             {nameContent}     
            <div className='serachIcon'><CiSearch /></div>
        </div>
        
        </>
    );
}

export default ConversationSearch;