import React from 'react';
import Form from '../components/form';
import WellCome from '../components/wellcome';
export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            center: '',
            nam : '2022',
            nameform: 'input list',
        }
    }



    render() {
        return (
            <div>
                <WellCome nam={this.state.nam} />
                <h1>
                    Fetch list products
                </h1>
                <Form lableName ={this.state.nameform} />
            </div>
        );
    }
}
