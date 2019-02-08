import React, {Component} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {updateAuth} from './../../ducks/reducer'

class Auth extends Component{
    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }
    handleChange(prop, val){    
    this.setState({
        [prop]: val
        })    
    }
    register = () => {
        const {username, password} = this.state
        axios.post('/auth/register', {username, password})
            .then(res => {
                this.props.updateAuth(res.data)
                console.log('res', res.data)
                this.props.history.push('/dashboard')
            })
            .catch(err => {
                console.log(err)
            })
    }
    login = () => {
        const {username, password} = this.state
        axios.post('/auth/login', {username, password})
            .then(res => {
                this.props.updateAuth(res.data)
                this.props.history.push('/dashboard')
            })
    }
    render(){
        console.log(this.state)
        return(
            <div>Auth
                <input value={this.state.username} onChange={e => this.handleChange('username', e.target.value)} type='text'/>
                <input value={this.state.password} onChange={e => this.handleChange('password', e.target.value)} type='password'/>
                <button onClick={this.login}>Login</button>
                <button onClick={this.register}>Register</button>
            </div>
        )
    }
}



export default connect(null, {updateAuth})(Auth)