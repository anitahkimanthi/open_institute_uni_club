import { Button, Divider } from '@material-ui/core';
import React, {useState} from 'react';
import {Link} from "react-router-dom"
import { connect } from 'react-redux';
import {resetPassword} from "../../redux/actions/actions";
import signupImage from "../../static/images/image6.jpeg";


function ResetPassword(props) {
    const [state, setState] = useState({
        password : "",
        confirm_password : "",
        error : ""
    })

    const handleChange = (e) =>{
        setState({
            ...state,
            [e.target.name] : e.target.value
        })
    }
    const handleSubmit = (e) =>{
        e.preventDefault();

        const { password, confirm_password} = state
        if(password !== confirm_password){
            setState({
                ...state,
                error : "Password do not match"
            })
        } else{
            setState({
                ...state,
                error : ""
            })
           const  userInputs ={
                password : password
            } 
            props.resetPassword(userInputs)
        }
        

        
    }

    const {password, confirm_password, error} = state
    return (
        <div className="row no-gutters auth h-80 justify-content-center">
            <div className="col-12 col-lg-6 fields my-auto">
                <form >
                <h3>Password Reset</h3>
                <input 
                    type="password" 
                    name="password"
                    value={password} 
                    onChange={handleChange}
                    placeholder="password"
                />
                <br/>
                <input 
                    type="password" 
                    name="confirm_password"
                    value={confirm_password} 
                    onChange={handleChange}
                    placeholder="confirm passord"
                />
                <div className="errorMessage">
                    <small>{error}</small>
                </div>
                {password === "" || confirm_password === "" ? 
                 <Button variant="contained" className="disabled">Reset</Button>
                 : 
                 <Button variant="contained"  className="enabled" onClick={handleSubmit}>Reset</Button>
                }
                <div className="footer">
                    <Link to="/register">
                        <small>Register</small>
                    </Link>
                    
                    <Divider orientation="vertical" flexItem className="divider"/>
                    <Link to="/login">
                        <small>Sign In</small>
                    </Link>
                    
                </div>
                </form>
            </div>
            <div className="col-12 col-lg-6 image_wapper">
                <img src={signupImage} alt="title" className="img-fluid"/>
            </div>
        </div>
    )
}

const mapStateToProps =(state) =>({
    registerInfo : state.register,
    error : state.register.error
})

export default connect(mapStateToProps, {resetPassword}) (ResetPassword)
