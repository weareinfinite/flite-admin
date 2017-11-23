import React, { Component } from 'react';
import { login } from '../../api'

export default class Login extends Component {

    constructor(props) {
        super(props)

        this.state = {
            email:'',
            password: '',
            errors: null
        }

        this.onInputChange = this.onInputChange.bind(this);

        this.doLogin = this.doLogin.bind(this)

        this.onSubmit = this.onSubmit.bind(this)
    }

    componentDidMount() {

       
    }

    onSubmit(e) {
        console.log('this ', this)
        this.setState({ errors: null })
        e.preventDefault();
        let { email, password } = this.state;
        login(email,password)
            .then(success => {
                console.log(success)

                this.props.history.push('/dashboard');

                
            })
            .catch(error => {
                console.log('Error : ', error);
                this.setState( { errors: error.message })
            })

            
    }

    onInputChange(event) {

        this.setState({ [event.target.name] : event.target.value })
    }

    doLogin() {
        console.log(this.state)
    }

    render() {
        let { errors } = this.state;
        return(<div>
            <h3>Login</h3>
            { errors && <p>{ errors }</p> }
            <form onSubmit={ this.onSubmit }>
                <input type="text" name="email" onChange={ this.onInputChange } value={this.state.email} placeholder="Email" />
                <input type="password" name="password" onChange={ this.onInputChange } placeholder="Password" />
                <button >Login</button>
            </form>
            
        </div>)
    }
}