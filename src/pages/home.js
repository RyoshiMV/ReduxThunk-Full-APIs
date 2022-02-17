import React from 'react';
import Form from '../components/form';
import WellCome from '../components/wellcome';
import Submit from '../components/submit';
import {Count} from '../components/count';
export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            center: '',
            nam: '2022',
            nameform: 'input list',
        }
    }



    render() {
        return (
            <div className='container'>
                <br /> <br /> <br />
                <div className='row'>
                    <div className='col-md-6'>
                        <WellCome nam={this.state.nam} />
                        <h1>
                            Fetch list products
                        </h1>
                        <Submit />
                    </div>
                    <div className='col-md-6'>
                        <Form lableName={this.state.nameform} />
                    </div>
                    <Count />
                </div>
            </div>
        );
    }
}
