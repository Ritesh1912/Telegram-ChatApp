import React from 'react';
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import './ChatTitle.scss';


const ChatTitle = ({ selectedConversation, onDeleteConversation }) => {
    let chatTitleContents = null;

    if (selectedConversation) {
        chatTitleContents = (
            <>
                <span>{ selectedConversation.title }</span>
                <div className="icon-set">
                  <div className="phIcon"><FaPhoneAlt/></div>
                  <div className="dotIcon"><BsThreeDotsVertical /></div>
                </div>
            </>
        );
    }

    return (
        <div id="chat-title">
            { chatTitleContents }
        </div>
    );
}

export default ChatTitle;