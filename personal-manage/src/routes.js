import React from 'react'
import {HashRouter, Route, Switch, Redirect} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'
import App from './App';
import Home from './pages/home/home';
import Admin from './container/admin/admin'; 
import Buttons from './components/button/button';
import Alerts from './components/alert/alert';
import Login from './pages/login/login';

const history = createHistory();
export default class Router extends React.Component{
    render () {
       return (
           <HashRouter history={history}>
               <App>
                   <Switch>
                       <Route path="/" exact component={Login}></Route>                      
                       <Admin>
                            <Switch>
                                <Route path="/home" component={Home}></Route>
                                <Route path="/ui/buttons" component={Buttons}></Route>
                                <Route path="/ui/modals" component={Alerts}></Route>
                                <Redirect to="/home" />
                            </Switch>
                       </Admin>
                   </Switch>
               </App>
           </HashRouter>
       )
    }
}