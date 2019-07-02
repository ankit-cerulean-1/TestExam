import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import { validateEmail, validatePhone, validateUrl, validateName } from "../utils/Validation";
import Message from './Message';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEmailValid: false,
            isNameValid: false,
            isPhoneValid: false,
            isUrlValid: false,
            Message: 'Enter Valid Data!'
        };

    }
    
    render() {
        return (
            <div className="row">
            <h1 className="text-center">Form Validation</h1>
            <form>
                <h3>Name:
                </h3>
                <input onChange={(event)=>{this.validateName(event)}} required type='text'/>
                <h3>Email:
                </h3>
                <input onChange={(event)=>{this.validateEmail(event)}} type='text'/>
                <h3>Phone:
                </h3>
                <input onChange={(event)=>{this.validatePhone(event)}} type='number' maxLength='10'/>
                <h3>Blog URL:
                </h3>
                <input onChange={(event)=>{this.validateUrl(event)}} type='text'/>
                <div className="small-6 small-centered text-center columns">
                    <a href="#" className="button success expand round text-center">Verify</a>
                </div>
            </form>
            <Message  Message={this.state.Message}/>
        </div>);
    }
    validateEmail(event){
        if(validateEmail(event.target.value)){
            this.setState({isEmailValid: true, Message: ''})
        }else this.setState({isEmailValid: false,Message: 'Enter Valid Email Id.'})
    }
    validateName(event){
        if(validateName(event.target.value)){
            this.setState({isNameValid: true, Message: ''})
        }else this.setState({isNameValid: false,Message: 'Enter Valid Name.'})
    }
    validatePhone(event){
        if(validatePhone(event.target.value)){
            this.setState({isPhoneValid: true, Message: ''})
        }else this.setState({isPhoneValid: false,Message: 'Enter Valid Phone Number'})
    }
    validateUrl(event){
        if(validateUrl(event.target.value)){
            this.setState({isUrlValid: true, Message: ''})
        }else this.setState({isUrlValid: false,Message: 'Enter Valid Url'})
    }

}

export default Form;
