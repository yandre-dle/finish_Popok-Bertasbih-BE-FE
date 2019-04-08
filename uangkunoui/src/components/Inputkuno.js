import React, { Component } from 'react';

class Inputkuno extends Component {
    render() {
        return (
            <input type={this.props.type} ref={this.props.innerRef} />
        )
    }
}

export default Inputkuno;
