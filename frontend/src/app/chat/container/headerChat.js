/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Plus, AlignLeft, Users, User, Power } from 'react-feather'
const HeaderChat = ({ src, name, setTab, tablist, groupChat, setGroup, leftRoom }) => {
    return (
        <div className="headChat">
            <Row className="align-items-center">
                <Col md={4} lg={3}>
                    <a onClick={() => leftRoom()}> <Power /></a>
                    <a onClick={() => setTab(!tablist)}><AlignLeft /></a>
                    <a> <Plus /></a>
                    {groupChat ? <a onClick={() => setGroup(false)}><User /></a> : <a onClick={() => setGroup(true)}><Users /></a>}

                </Col>
                <Col md={8} lg={9} >
                    {groupChat ?
                        <div className="user-profile">
                            <p>گروه ایده باران</p>
                        </div>
                        :
                        <div className="user-profile">
                            <img src={'/images/user.jpg'} alt={name} />
                            <p>{name}</p>
                        </div>
                    }
                </Col>
            </Row>
        </div>

    )
}
export default HeaderChat