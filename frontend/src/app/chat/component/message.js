/* eslint-disable eqeqeq */
import React from 'react'
import { Row } from 'react-bootstrap'
const Message = ({ name, time, message, directionLeft, key, mobile }) => {
    const regex = new RegExp('^[a-zA-Z0-9]*$')
    return (
        <Row className={`${directionLeft ? "justify-content-end" : "justify-content-start"}`}>
            <div className="message" key={key}>
                <div className="head-message">
                    <span>{name}</span>
                    <span>{mobile}</span>
                </div>
                <p className={message[0].search(regex) == 0 ? 'text-left' : 'text-right'} >{message}</p>
                <div className="time">
                    <span>{time}</span>
                </div>
            </div>
        </Row>
    )
}
export default Message