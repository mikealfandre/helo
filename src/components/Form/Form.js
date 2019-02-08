import React, { Component } from 'react'
import {connect} from 'react-redux'
import axios from 'axios';

class Form extends Component {
    constructor(props){
        super(props)
        this.state = {
            title:'',
            img:'',
            content:''
        }
    }
    handleChange = (prop, value) => {
        this.setState({
            [prop]: value
        })
    }
    newPost = () => {
        const {id} = this.props
        const {title, img, content} = this.state
        axios.post(`/api/post/${id}`, {title, img, content})
            .then(() => {
                this.props.history.push('/dashboard')
            })
    }
    render() {
        return (
            <div>Form <br/>
                <input value={this.state.title} placeholder='title' onChange={e => this.handleChange('title', e.target.value)}/> <br/>
                <input value={this.state.img} placeholder='image URL' onChange={e => this.handleChange('img', e.target.value)}/><br/>
                <textarea value={this.state.content} placeholder='compose post' onChange={e => this.handleChange('content', e.target.value)}/><br/>
                <button onClick={this.newPost}>Post</button>




            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const {id} = state
    return{
        id
    }
}

export default connect(mapStateToProps)(Form)