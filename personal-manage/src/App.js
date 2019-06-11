import React from 'react';
import './App.less';
import 'antd/dist/antd.css'


// 创建组件方式1
class App extends React.Component {
   render() {
     return (
       <div className="App">
         {this.props.children}
       </div>
     )
   }
}

export default App;
