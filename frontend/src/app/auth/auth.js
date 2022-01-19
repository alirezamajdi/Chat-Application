import React, { useState, useEffect } from 'react'
import io from 'socket.io-client'
import { setTokenWithExpiry } from '../share/util/tokenSetting'
const Auth = () => {
  const [inputs, setInputs] = useState({})
  const [socket, setsocket] = useState(null)
  const CONNETION_PORT = 'http://localhost:5000'
  useEffect(() => {
    setsocket(io(CONNETION_PORT))
  }, [CONNETION_PORT])

  const handleInput = (e) => {
    const name = e.target.name;
    const val = e.target.value;
    setInputs(prev => {
      return {
        ...prev,
        [name]: val
      };
    });
  }

  const handleSubmit = e => {
    e.preventDefault()
    socket.emit('join_room', inputs)
    setTokenWithExpiry('username', inputs.username, 1000 * 60 * 60)
    setTokenWithExpiry('mobile', inputs.mobile, 1000 * 60 * 60)
    setTokenWithExpiry('room', inputs.room, 1000 * 60 * 60)
    window.location.href = "/chat"
  }



  return (
    <div className="auth">
      <div className="auth-page-container">
        <div className="main-form front">
          <div className="inner-form">
            <form onSubmit={handleSubmit}>
              <div className="user-img">
                <img src="/images/user.png" alt="user" />
              </div>
              <input
                name="username"
                value={inputs["username"]}
                onChange={e => handleInput(e)}
                placeholder="نام کاربری"
              />
              <input
                name="mobile"
                value={inputs["mobile"]}
                onChange={e => handleInput(e)}
                placeholder="شماره موبایل"
              />
              <select
                name="room"
                onChange={e => handleInput(e)}
              >
                <option value="">گروه خود را انتخاب کنید</option>
                <option value="public" >عمومی</option>
                <option value="private">شخصی</option>
              </select>
              <div className="auth-btn">
                <button>ورود</button>
              </div>
            </form>
          </div>
        </div>
        <div className="main-form back"></div>
      </div>
    </div>
  )
}
export default Auth;


