import React from 'react'
import {HashRouter, Route, Switch, Redirect} from 'react-router-dom';
import App from './App';
import Home from './pages/home/home';
import Admin from './container/admin/admin';

export default class Router extends React.Component{
    render () {
       return (
           <HashRouter>
               <App>
                   <Switch>
                       {/* <Route></Route> */}
                       <Admin>
                            <Switch>
                                <Route path="/home" component={Home}></Route>
                                {/* <Route path="/table/basic" component={BasicTable}></Route> */}
                                <Redirect to="/home" />
                            </Switch>
                       </Admin>
                   </Switch>
               </App>
           </HashRouter>
       )
    }
}