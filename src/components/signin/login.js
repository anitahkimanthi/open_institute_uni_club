import { Button, Divider } from '@material-ui/core';
import React, {useState} from 'react';
import {Link} from "react-router-dom"
import { connect } from 'react-redux';
import {signin} from "../../redux/actions/actions";
import image from "../../static/images/image10.jpeg";


function Login(props) {
    const [state, setState] = useState({
        email : "",
        password : "",
    })

    const handleChange = (e) =>{
        setState({
            ...state,
            [e.target.name] : e.target.value
        })
    }
    const handleSubmit = (e) =>{
        e.preventDefault();

        const {password, email} = state

        const  userInputs ={
            email : email,
            password : password
        }

        setState({
            email : "",
            password : "",
        })
        props.signin(userInputs)
    }
    const {password, email} = state

    return (
        <div className="row no-gutters auth h-80 justify-content-center">
            <div className="col-12 col-lg-6 fields my-auto">
                <form onSubmit={handleSubmit}>
                <h3>Sign In</h3>
                <input 
                    type="text" 
                    name="email"
                    value={email} 
                    onChange={handleChange}
                    placeholder="yourname@gmail.com"
                />
                <br/>
                <input 
                    type="password" 
                    name="password"
                    value={password} 
                    onChange={handleChange}
                    placeholder="password"
                />
                <br/>
                {password === "" || email === "" ? 
                <Button variant="contained" className="disabled">Sign In</Button>
                : 
                <Button variant="contained" className="enabled" onClick={handleSubmit}>Sign In</Button>
                }
                
                <div className="footer">
                    <Link to="/forgot-password">
                        <small>Forgot password</small>
                    </Link>
                    
                    <Divider orientation="vertical" flexItem className="divider"/>
                    <Link to="/register">
                        <small>Register</small>
                    </Link>
                </div>
                </form>
            </div>
            <div className="col-12 col-lg-6 image_wapper">
                <img src={image} alt="title" className="img-fluid"/>
            </div>
        </div>
    )
}

const mapStateToProps =(state) =>({
    registerInfo : state.register,
    error : state.register.error
})

export default connect(mapStateToProps, {signin}) (Login)
