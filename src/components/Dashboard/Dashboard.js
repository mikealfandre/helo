import React, { Component } from 'react'

class Dashboard extends Component {
    constructor(props){
        super(props)
        this.state = {
            posts: [],
            search: '',
            userposts: true
        }
    }
    handleChange = (prop, val) => {
        this.setState({
            [prop]: val
        })
    }
    reset = () => {
        this.setState({
            search: '',
            posts: [],
        })
    }
    toggleUserPosts = () => {
       this.setState({
           userposts: !this.state.userposts
       })
    }
    render() {
        if(this.state.userposts){
            const {posts} = this.state
                posts.map((post, index) => {
                return(
                <div key={index}>
                    <p>{post.title}</p>
                    <p>{post.author_id}</p>
                    <p>{post.profile_pic}</p>
                </div>
                )
            })
        }else{
            return null;
        }

        return (
            <div>Dashboard
                <input value={this.state.change} onChange={e => this.handleChange('search', e.target.value)} type='text'/>
                <button>search</button>
                <button>reset</button>




            </div>
        )
    }
}

export default Dashboard 