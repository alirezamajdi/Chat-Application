/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import io from 'socket.io-client'
import UserList from './container/userList'
import BodyChat from './container/bodyChat'
import HeaderChat from './container/headerChat'
import { getTokenWithExpiry, clearToken } from '../share/util/tokenSetting'


function useWidowSize() {

    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });
    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return windowSize;
}

const Chat = () => {
    const [tablist, setTab] = useState(false)
    const [groupChat, setGroup] = useState(false)
    const size = useWidowSize();
    const CONNETION_PORT = 'http://localhost:5000'
    const [socket, setsocket] = useState(null)
    const [user, setUser] = useState({
        name: getTokenWithExpiry('username'),
        mobile: getTokenWithExpiry('mobile'),
        id: "1"
    })
    const [message, setMessage] = useState("")
    const [messageList, setMessageList] = useState([])
    const [userList, setUserList] = useState(null)


    const setHour = (i) => {
        if (i < 24 && i >= 0) {
            i = i + 12;
        }
        return i;
    }



    useEffect(() => {
        setsocket(io(CONNETION_PORT))

    }, [CONNETION_PORT])

    useEffect(() => {

        if (socket) {
            socket.emit('join_room', { room: getTokenWithExpiry('room') })
            socket.on('receive_message', (data) => {
                setMessageList([...messageList, data])
            })
        }
    })


    useEffect(() => {
        if (socket) {
            socket.emit('userList', {
                room: getTokenWithExpiry('room'),
                username: getTokenWithExpiry('username'),
                mobile: getTokenWithExpiry('mobile')
            })
            socket.on('receive_list', (data) => {
                setUserList(Object.values(data)[0])
            })
        }
    }, [socket])

    const leftRoom = () => {
        socket.emit('leftRoom', {
            mobile: getTokenWithExpiry('mobile')
        })
        socket.on('left_user', (data) => {
            setUserList(Object.values(data)[0])
        })
        clearToken()
    }



    const sendMessage = () => {
        let d = new Date()
        let messageContent = {
            room: getTokenWithExpiry('room'),
            content: {
                auther: user.name,
                mobile: user.mobile,
                message: message,
                userId: user.id,
                time: `${setHour(d.getHours())}:${d.getMinutes()}`
            }
        }
        socket.emit('send_message', messageContent)
        setMessageList([...messageList, messageContent.content])
        setMessage("")
    }
    return (
        <div className="chat">
            <Row>
                <Col md={12} className="p-l-0">
                    <HeaderChat
                        src={user.image}
                        name={user.name}
                        setTab={setTab}
                        tablist={tablist}
                        groupChat={groupChat}
                        setGroup={setGroup}
                        leftRoom={leftRoom}
                    />
                </Col>
            </Row>

            <Row>
                {size.width > 768 &&
                    <Col md={4} lg={3} className="p-x-0">
                        <UserList {...{ userList }} />
                    </Col>
                }
                {(size.width < 768 && tablist) &&

                    <Col md={3} className="p-x-0">
                        <UserList {...{ userList }} />
                    </Col>
                }
                <Col xs={12} md={8} lg={9} className="p-x-0">
                    <BodyChat {...{ user, message, setMessage, sendMessage, messageList }} />
                </Col>
            </Row>
        </div>

    )
}
export default Chat;
