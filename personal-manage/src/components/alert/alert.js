import React from 'react';
import { Alert } from 'antd';

class Alerts extends React.Component {
    constructor(props) {
        super(props)
    }
    render () {
        return (
            <Alert message="Success Text" type="success" />
        )
    }   
}

export default Alerts