import React from 'react';
import NavLeft from '../../components/navLeft/navLeft';
import Top from '../../components/top/top'
import { Icon,Layout } from 'antd';

const {Content,Header,Footer,Sider} = Layout
class Admin extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            collapsed:false
        }
    }

    toggle = (value) => {
        console.log(value)
        this.setState({
            collapsed: value,
        });
    }
    render () {
        return (
            <Layout>
               <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                  <NavLeft></NavLeft>
               </Sider>
               <Layout>
                    <Top toggleClick={this.toggle}></Top>
                    <Content  style={{
                            margin: '24px 16px',
                            padding: 24,
                            background: '#fff',
                            minHeight: 280,
                            }}>
                        {this.props.children}
                    </Content>
                    <Footer>copyright</Footer>
               </Layout>
            </Layout>
        )
    }
}

export default Admin;
