import React, { Component } from 'react';
import axios from 'axios';

class UserList extends Component {
    state = { userList: [] }

    componentDidMount() {
        const token = localStorage.getItem('token');
        const headers = {
            headers: { 
                'Authorization': `Bearer ${token}`,
            }
        };
        console.log(token)
        axios.get('http://localhost:1984/admin/getuserlist/', headers)
            .then((res) => {
                console.log(res.data)
            }).catch((err) => {
                console.log('gagal')
                console.log(err.response)
            })
    }

    renderUserList = () => {
        var listJSX = this.state.userList.map((item) => {
            return (
                <div>
                    <h4>Username : {item.username}</h4>
                    <h4>Email : {item.email}</h4>
                    <h4>Role : {item.role}</h4>
                    <h4>Status : {item.status}</h4>
                    <h4>Last Login : {item.lastlogin.toString()}</h4>
                </div>
            );
        })

        return listJSX;
    }

    render() {
        return (
            <div>
                {this.renderUserList()}
            </div>
        )
    }
}

export default UserList;