import React from 'react';
import Form from './Form';
import Results from './Results';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class RESTy extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            url: '',
            method: 'GET',
            headers: {},
            body: {},
            history: [],
            resHeaders:'',
            resBody:''
        };
    }

    onURLChange(e) {
        this.setState({ ...this.state, url: e.target.value });
    }

    onMethodChange(e) {
        this.setState({ ...this.state, method: e.target.value });
    }

    async stateChange(val, key){
        await this.setState({...this.state, [key]: val});
    }

    async changeOnSubmit() {
        await this.stateChange('', 'resBody');
        await this.stateChange('', 'headers');
        if (this.state.url)  await this.fetchAPI();  
      }

    async onSubmit(e) {
      

        let body;
        let headers = {};
        let response;

        if (this.state.method === 'GET') {
            response = await fetch(this.state.url, {
              method: 'GET'
            });
          } else {
            response = await fetch(this.state.url, {
              method: this.state.method,
              body: body,
              headers: headers
            });
          }

        let res = await fetch(this.state.url, {
            method: this.state.method,
            headers: {
                Accept: 'application/json',
            },
        });

        if (res.status === 200) {
            body = await res.json();

            for (const entry of res.headers.entries()) {
                headers[entry[0]] = entry[1];
            }
        }

        this.setState({ headers, body });
    }

    render() {
        return (
            <> 
                <Form className ="form"
                    url={this.state.url}
                    onURLChange={this.onURLChange.bind(this)}
                    onMethodChange={this.onMethodChange.bind(this)}
                    onSubmit={this.onSubmit.bind(this)}
                />
                <Results className="results"
                    tabWidth={2}
                    headers={this.state.headers}
                    body={this.state.body}
                />
            </>
        );
    }
}

export default RESTy;
