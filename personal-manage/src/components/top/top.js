import React from 'react';
import { Icon } from 'antd'

class Top extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            collapsed:true
        }
    }
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
        this.props.toggleClick(this.state.collapsed)
    }
    render () {
        return (
            <div className="header">
               <Icon
                className="trigger"
                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={this.toggle}
                />

                我是标题
            </div>
        )
    }   
}

export default Top