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

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    render () {
        return (
            <Layout>
               <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                  <NavLeft></NavLeft>
               </Sider>
               <Layout>
                    <Header style={{ background: '#fff', padding: 0 }}>
                            <Icon
                            className="trigger"
                            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.toggle}
                            />
                            {/* <Top></Top> */}
                            <div>hahahhah</div>
                    </Header>
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
