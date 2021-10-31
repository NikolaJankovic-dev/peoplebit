import React from 'react';
import { UserItem } from './UserItem';
import PropTypes from 'prop-types'


export const UserList = props => {
    if(props && props.data && props.data.length>0) {
        const userList = props.data.map((user, index) => <UserItem userData = {user} key = {index} />)
        return (
            <div className="container">
                <div className="row">
                    {userList}
                </div>
            </div>
        )
        }return (<div></div>)
}
UserList.propType = {
    data: PropTypes.array.isRequired
}

UserList.defaultProps = {
    data: []
}

