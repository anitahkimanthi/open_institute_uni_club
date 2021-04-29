import { Button, Divider } from '@material-ui/core';
import React, {useState} from 'react';
import {Link} from "react-router-dom"
import { connect } from 'react-redux';
import {register} from "../../redux/actions/actions";
import image from "../../static/images/image13.jpg";


function Signup(props) {
    const [state, setState] = useState({
        email : "",
        password : "",
        age : "",
        loggedIn : false
    })

    const handleChange = (e) =>{
        setState({
            ...state,
            [e.target.name] : e.target.value
        })
    }
    const handleSubmit = (e) =>{
        const {email,password, age} = state

        const  userInputs = {
            email : email,
            password : password,
            age : age,
            loggedIn : true
        }

    
        props.register(userInputs)

    }

    const {password, email,age} = state

    return (
        <div className="row no-gutters auth h-80 justify-content-center">
            <div className="col-12 col-lg-6 fields my-auto">
                <form>
                <h3>Register</h3>
                <input 
                    type="email" 
                    name="email"
                    value={email} 
                    onChange={handleChange}
                    placeholder="yourname@gmail.com"
                />
                <br/>
                <input 
                    type="number" 
                    name ="age"
                    value={age} 
                    onChange={handleChange}
                    placeholder="Age"
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
                {password === "" || email === "" || age === "" ? 
                <Button variant="contained" className="disabled">Register</Button>
                : 
                <Button variant="contained" className="enabled" onClick={handleSubmit}>Register</Button>
                 }
                
                <div className="footer">
                    <Link to="/forgot-password">
                        <small>Forgot password</small>
                    </Link>
                    
                    <Divider orientation="vertical" flexItem className="divider"/>
                    <Link to="/login">
                        <small>Sign In</small>
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
})

export default connect(mapStateToProps, {register}) (Signup)
