import React from 'react';
import NavLeft from '../../components/navLeft/navLeft';
import Top from '../../components/top/top'
import {Layout,Breadcrumb} from 'antd';
import './admin.less';
import menuConfig from '../../utils/menuConfig'

const {Content,Footer,Sider} = Layout
class Admin extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            collapsed:false,
            bread:''
        }
        this.getMenu = this.getMenu.bind(this)
    }
    componentWillMount() {
        let hash = window.location.hash.replace(/#|\?.*$/g, '');
        this.setState({
           bread:hash
        })
    }
    // 获取菜单
    getMenu(value) {
        this.setState({
           bread:value
        })
    }
    // 折叠
    toggle = (value) => {
        this.setState({
            collapsed: value,
        });
    }
    render () {
        const { bread } = this.state;
        let breadArr = [];
        // 获取面包屑数组
        menuConfig.forEach((item) => {
            if(item.children) {
                item.children.forEach((item1) => {
                    if(item1.key == bread) {
                        breadArr.push(item.title,item1.title)
                    }
                })
            } else {
                if(item.key == bread) {
                    breadArr.push(item.title)
                }
            }
        })

        return (
            <Layout className="layout">
               <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                  <NavLeft getMenu={this.getMenu}></NavLeft>
               </Sider>
               <Layout>
                    <Top toggleClick={this.toggle}></Top>
                    <div className="breadcrumb">
                        <span>当前位置：</span>
                        <Breadcrumb>
                        {
                            breadArr.map((item,index) => {
                                return (
                                    <Breadcrumb.Item key={index}>{item}</Breadcrumb.Item>  
                                )
                            })
                        }
                        </Breadcrumb>
                    </div>
                    <Content  style={{
                            margin: '0 16px 0 16px',
                            padding: 24,
                            background: '#fff',
                            minHeight: 280,
                            }}>
                        {this.props.children}
                    </Content>
                    <Footer className="footer">Copyright@ChenBaoDong</Footer>
               </Layout>
            </Layout>
        )
    }
}

export default Admin;
