import React from 'react'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'

function Nav(props){
    console.log('Nav Redux Props', props)
    if (props.location.pathname === '/') {
        return null;
       }
    return(
        
        <div>Nav
        <img src={props.profile_pic} alt=''/>   
        <p>{props.username}</p>   
        <Link to='/dashboard'><button>Home</button></Link>
        <Link to='/new'><button>New Post</button></Link>
        <Link to='/'><button>Logout</button></Link>
       </div>
    )
}

const mapStateToProps = (state) => {
    const {username, profile_pic} = state
    return{
        username, 
        profile_pic
    }
}

export default withRouter(connect(mapStateToProps)(Nav))