import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Auth from './components/Auth/Auth'
import Dashboard from './components/Dashboard/Dashboard'
import Form from './components/Form/Form'
import Post from './components/Post/Post'

export default(
    <Switch>
        <Route exact path='/' component={Auth}></Route>
        <Route exact path='/dashboard' component={Dashboard}></Route>
        <Route exact path='/post/:postid' component={Post}></Route>
        <Route exact path='/new' component={Form}></Route>
    </Switch>
)

