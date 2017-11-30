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

        return(
            <div className="border-b-2 border-grey-light p-4 px-3 py-10 bg-grey-lighter flex justify-center" style={{'minHeight':'100vh','alignItems':'center'}}>
            <div className="w-full max-w-xs ">
                <form onSubmit={ this.onSubmit } className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                { errors && <p className="text-red text-xs italic">{ errors }</p> }
                    <div className="mb-4">
                        <label className="block text-grey-darker text-sm font-bold mb-2" >Email</label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"  type="text" placeholder="Email" name="email" onChange={ this.onInputChange } value={this.state.email} />
                    </div>
                    <div className="mb-4">
                        <label className="block text-grey-darker text-sm font-bold mb-2" >Password</label>
                        <input type="password" className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"    placeholder="Password" name="password" onChange={ this.onInputChange } value={this.state.password} />
                    </div>

                    <div className="flex items-center justify-between">
                        <button className="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded" type="submit">
                            Sign In
                        </button>
                        <a className="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker" href="#">
                            Forgot Password?
                        </a>
                    </div>

                </form>
            </div>
            </div>
        )
    }
}