import React, { Component } from 'react';
import axios from 'axios';
import queryString from 'query-string';
import { connect } from 'react-redux';
import { onUserVerified } from '../actions';

class Verified extends Component {
    state = { verified: false, loading: true }

    componentDidMount() {
        var params = queryString.parse(this.props.location.search)
        console.log(params)
        var username = params.username;
        var password = params.password;
        axios.post(`http://localhost:1984/auth/verified`, {
            username,
            password
        }).then((res) => {
            const { token } = res.data;
            localStorage.setItem("token", token);
            this.props.onUserVerified(res.data);
            console.log(res.data)
            this.setState({ loading: false, verified: true })
        }).catch((err) => {
            console.log(err)
        })
    }

    renderContent = () => {
        if(this.state.verified && !this.state.loading) {
            return (
                <h1>Congrats you are verified! now its the time to find your ninja way!</h1>
            );
        }
        else if(!this.state.verified && !this.state.loading) {
            return (
                <h1>Sorry Error happened, try to reload this page!</h1>
            );
        }
        return (
            <h1>Please wait...</h1>
        );
    }

    render() {
        return(
            <div>
                {this.renderContent()}
            </div>
        )
    }
}

export default connect(null, { onUserVerified })(Verified);
