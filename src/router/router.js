import React from 'react';
import {HashRouter, Route, Switch, Redirect} from 'react-router-dom';
import Home from '../pages/home/home';
import Detail from '../pages/detail/detail';


const BasicRoute = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" render={() => (
                <Redirect to="/home" />
            )}/>
            {/* 使用嵌套路由时，外层路由有时不能加exact。否则，内层路由存在匹配不上的问题 */}
            <Route path="/home" component={Home}/>
            <Route path="/detail" component={Detail}/>
        </Switch>
    </HashRouter>
);


export default BasicRoute;