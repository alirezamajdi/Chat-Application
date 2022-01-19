/* eslint-disable eqeqeq */
import React from 'react'
import SendBox from '../component/sendBox'
import Message from '../component/message'
import { getTokenWithExpiry } from '../../share/util/tokenSetting'
const bodyChat = ({ user, message, setMessage, messageList, sendMessage }) => {
    return (
        <div className="bodyChat">
            <div className="messageChat">

                {messageList.map((value, key) => (
                    <Message
                        key={key}
                        name={value.auther}
                        mobile={value.mobile}
                        message={value.message}
                        time={value.time}
                        directionLeft={value.mobile == getTokenWithExpiry('mobile') ? false : true}
                    />
                )
                )}

            </div>
            <SendBox {...{ message, setMessage, sendMessage }} />

        </div>

    )
}
export default bodyChat;