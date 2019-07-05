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
            Message: 'Form is Incomplete!',
            color: 'red'
        };

    }
    
    render() {
        return (
            <div className="row">
            <h4 className="text-center">Form Validation</h4>
            <form>
                <h5>Name:
                </h5>
                <input onChange={(event)=>{this.validateName(event)}} required type='text'/>
                <h5>Email:
                </h5>
                <input onChange={(event)=>{this.validateEmail(event)}} type='text'/>
                <h5>Phone:
                </h5>
                <input onChange={(event)=>{this.validatePhone(event)}} type='text'  maxLength='10'/>
                <h5>Blog URL:
                </h5>
                <input onChange={(event)=>{this.validateUrl(event)}} type='text'/>
                <div className="small-6 small-centered text-center columns" onClick={()=>{this.validateData()}}>
                    <a className="button success expand round text-center">Verify</a>
                </div>
            </form>
            <Message color={this.state.color} Message={this.state.Message}/>
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
    validateData(){
        if(this.state.isEmailValid && this.state.isNameValid && this.state.isPhoneValid && this.state.isUrlValid){
            alert('Submitted Successfully')
            this.setState({color: 'green', Message: 'Form Submitted Successfully!'})
        }else{
            let Message = ''
            this.state.isEmailValid? '': Message = 'Enter Valid Email';
            this.state.isNameValid? '': Message = 'Enter Valid Name';
            this.state.isPhoneValid? '': Message = 'Enter Valid Phone';
            this.state.isUrlValid? '': Message = 'Enter Valid Url';
            this.setState({color: 'red', Message: Message})
        }
    }

}

export default Form;