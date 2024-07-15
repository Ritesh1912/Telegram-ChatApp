import React, { useState } from 'react';
import { FaMicrophone } from "react-icons/fa";
import FormButton from '../controls/buttons/FormButton';
import AttachmentIcon from '../controls/icons/attachment-icon/AttachmentIcon';
import { BsEmojiSmile } from "react-icons/bs";
import './ChatForm.scss';


const isMessageEmpty = (textMessage) => {
    return adjustTextMessage(textMessage).length === 0;
}

const adjustTextMessage = (textMessage) => {
    return textMessage.trim();
};

const ChatForm = ({ selectedConversation, onMessageSubmitted }) => {
    const [textMessage, setTextMessage] = useState('');
    const disableButton = isMessageEmpty(textMessage);
    let formContents = null;
    let handleFormSubmit = null;

    if (selectedConversation) {
        formContents = (
            <>
                <div className="Add Attachment">
                    <AttachmentIcon />
                </div>
                
                <input 
                    type="text" 
                    placeholder="type a message" 
                    value={textMessage}
                    onChange={ (e) => { setTextMessage(e.target.value); } }     
                />                  
                
                <div className='emoji'>
                  <BsEmojiSmile />
                </div>
                <div className='micIcon'>
                  <FaMicrophone />
                </div>    
                 
               
                
            </>
        );
    
        handleFormSubmit = (e) => {
            e.preventDefault();
            
            if (!isMessageEmpty(textMessage)) {
                onMessageSubmitted(textMessage);
                setTextMessage('');
            }
        };
    }

    return (
        <form id="chat-form" onSubmit={handleFormSubmit}>
            {formContents}
        </form> 
    );
}

export default ChatForm;