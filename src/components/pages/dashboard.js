import React, { Component } from 'react';
import fireapp from '../../api/firebaseapp'
import Card from '../ui/card'
import Navigation from '../ui/navigation'
export default class Login extends Component {

    constructor(props) {
        super(props)

        this.state = {
            quotes: [],
            initialLoad: true
        }
    }

    componentDidMount() {


        let qRef = fireapp.database().ref('quotes')

        qRef.on('child_added', snapshot => {

            const message = {
                id: snapshot.key,
                data: snapshot.val()
            }

           let __quotes = [...this.state.quotes, message]

            this.setState({quotes: __quotes,initialLoad: false});

        }, error => console.log(error))

    }

    renderQuotesList() {

        if(!this.state.quotes.length && this.state.initialLoad) return 'Loading....';

        return this.state.quotes.map((q,i) => (
            <Card key={q.id} title={q.data.text}body={q.data.text}></Card>
        ))
    }


    render() {

        return(<div>
            <Navigation/>
            <h3>Dash</h3>
            <ul>
                {this.renderQuotesList()}
            </ul>
        </div>)
    }
}