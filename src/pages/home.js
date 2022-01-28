import React from 'react';
import Form from '../components/form';


export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            center: '',
        }
    }

    render() {
        return (
            <div>
                <h1>
                    Fetch list products
                </h1>
                <a href="/nofetch">nofetch</a>
                <Form />
            </div>
        );
    }
}
