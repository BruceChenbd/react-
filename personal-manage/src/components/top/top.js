import React from 'react';
import { Icon,Avatar,Menu, Dropdown,Row,Col } from 'antd';
import { connect } from 'react-redux';
import createHistory from 'history/createHashHistory'
import './top.less'

const history = createHistory()

class Top extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            collapsed:true ,
            userName:''
        }

        this.loginOut = this.loginOut.bind(this)
    }
    componentDidMount() {
        const {username} = this.props;
        if( username ) {
            window.localStorage.setItem('username',username);
        }
        this.setState({
            userName: window.localStorage.getItem('username')
        })
    }
    // 面包屑折叠 
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
        this.props.toggleClick(this.state.collapsed)
    }
    // 退出登录
    loginOut() {
       window.localStorage.removeItem('username');
       history.push('/')
    }
    render () {
        const menu = (
            <Menu>
                <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
                   修改资料
                </a>
                </Menu.Item>
                <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" onClick={this.loginOut}>
                   退出
                </a>
                </Menu.Item>
            </Menu>
        )
        return (
            <Row className="header" gutter={24}>
                <Col span={18}>
                    <Icon
                    className="trigger"
                    type={this.state.collapsed ? 'menu-fold' : 'menu-unfold'}
                    onClick={this.toggle}
                    style={{fontSize:25,color:'#890ff'}}
                    />
                </Col>
               <Col span={5}>
                    <Dropdown overlay={menu} className="userInfo">
                        <a className="ant-dropdown-link">
                        {
                            this.state.userName? this.state.userName:'管理员'
                        }<Icon type="down" />
                        </a>
                    </Dropdown>
               </Col>
               <Col span={1}>
                 <Avatar style={{ backgroundColor: '#1890ff',float:'right',marginLeft:20}} icon="user" />
               </Col>
            </Row>
        )
    }   
}

const mapStateToProps = (state, ownProps) => {
    return {
        username: state.username
    }
}
export default connect(mapStateToProps)(Top)