import React from 'react'
import { Col, Row } from 'react-bootstrap'
const User = ({ name, src, status }) => {
    return (
        <div className="user">
            <Row>
                <Col xs={3}>
                    <img src={src} alt={name} />
                </Col>
                <Col xs={9}>
                    <Row>
                        <span>{name}</span>
                    </Row>
                    <Row>
                        <p className="blue font-12">{status}</p>
                    </Row>
                </Col>
            </Row>

        </div>
    )
}

export default User;