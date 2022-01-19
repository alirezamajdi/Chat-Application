import React from 'react'
import { Col, Row } from 'react-bootstrap'
const User = ({ name, message, src, time }) => {
    return (
        <div className="user">
            <Row>
                <Col xs={3}>
                    <img src={src} alt={name} />
                </Col>
                <Col xs={7}>
                    <Row>
                        <span>{name}</span>
                    </Row>
                    <Row>
                        <div className="message-user">
                            <p>{message}</p>
                        </div>

                    </Row>
                </Col>
                <Col xs={2}>
                    <div className="time">
                        <p>{time}</p>
                    </div>
                </Col>
            </Row>

        </div>
    )
}

export default User;