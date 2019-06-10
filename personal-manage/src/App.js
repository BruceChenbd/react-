import React from 'react';
import './App.less';
import 'antd/dist/antd.css'


// 创建组件方式1
class App extends React.Component {
   render() {
     console.log(this.props)
     return (
       <div>
         {this.props.children}
       </div>
     )
   }
}

export default App;
