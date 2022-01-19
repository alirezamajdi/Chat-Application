import React from 'react'
import User from '../component/user'

const UserList = ({ userList }) => {
   console.log(userList)
   return (
      <div>

         <div className="userList">
            {userList && userList.map(user => (
               <User
                  src={'/images/user.jpg'}
                  name={user.username}
                  message={user.mobile}
               />
            ))}

         </div>
      </div>
   )
}
export default UserList