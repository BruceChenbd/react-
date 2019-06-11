import React from 'react';
import { Menu,Icon } from 'antd';
import { NavLink } from 'react-router-dom';
import menuData from '../../utils/menuConfig';
import './navLeft.less'

const SubMenu = Menu.SubMenu

class navLeft extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentPath:''
        }
        this.handleMenu = this.handleMenu.bind(this)
    }
    componentDidMount() {
        //获取菜单节点
       const MenuNode = this.renderMenu(menuData);
        //获取当前hash中的路径   
       let currentPath = window.location.hash.replace(/#|\?.*$/g, '');
       this.setState({
           currentPath,
           MenuNode
       })
    }
    // 递归渲染菜单节点
    renderMenu (data) {
       return data.map((item) => {
          if(item.children) {
              return (
                  <SubMenu  title={
                    <span>
                      <Icon type={item.type} />
                      <span>{item.title}</span>
                    </span>
                  } key={item.key}>
                      {this.renderMenu(item.children)}
                  </SubMenu>
              )
          } else {
              return <Menu.Item title={item.title} key={item.key}>
                 <NavLink to={item.key}>
                    <Icon type={item.type}></Icon>
                    <span>{item.title}</span>
                 </NavLink>
              </Menu.Item>
          }
       })
    }
    // 点击菜单
    handleMenu ({item,key}) {
        if (key === this.state.currentPath) {
            return false;
        }
        this.setState({
            currentPath:key
        })
        this.props.getMenu(key);
    }
    render() {
        return (
            <div className="nav">
               <div className="logo">
                 <h1>CBD后台管理系统</h1>
               </div>
               <Menu
                 onClick={this.handleMenu}
                 selectedKeys={[this.state.currentPath]}
                 theme="dark"
                 mode="inline"
               >
                   {this.state.MenuNode}
               </Menu>
            </div>
        )
    }
}

export default navLeft;