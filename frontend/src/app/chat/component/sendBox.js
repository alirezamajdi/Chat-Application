/* eslint-disable eqeqeq */
import React from 'react'
import { Smile, Paperclip, Send } from 'react-feather'
const sendBox = ({ message, setMessage, sendMessage }) => {
    const regex = new RegExp('^[a-zA-Z0-9]*$')
    return (

        <div className="sendBox">
            <span onClick={sendMessage}><Send /></span>
            <input
                placeholder="پیام خود را بنویسید"
                value={message}
                className={message && message[0].search(regex) == 0 ? 'text-left' : 'text-right'}
                onChange={(e) => { setMessage(e.target.value) }}
            />
            <span><Paperclip /></span>
            <span><Smile /></span>

        </div>


    )
}
export default sendBox;
