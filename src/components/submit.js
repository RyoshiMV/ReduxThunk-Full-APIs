import React from 'react';
import axios from 'axios';

export default class Submit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image: null,
            title: '',
            content: '',
            res: 'chưa up',
        }
    }

    handleSubmit = (event) => {
        
        event.preventDefault();
        var data = new FormData();
        data.append('title', this.state.title);
        data.append('content', this.state.content);
        data.append('file', this.state.image);

        var config = {
            method: 'post',
            url: 'http://localhost:8080/api/add-blog',
            data: data
        };

        axios(config)
            .then(function (response) {
                console.log('phản hồi Api:' + JSON.stringify(response.data));
                if (JSON.stringify(response.data) === 'done') {
                    this.setState({
                        res: 'Done all',
                    })
                } else {
                    this.setState({
                        res: 'Thất bại',
                    })
                }
            })
            .catch(function (error) {
                console.log('vào đây:' + error);
            });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <h1>
                        Upload blog post
                    </h1>
                    <input onChange={(e) => {
                        this.setState({
                            title: e.target.value,
                        })
                    }} value={this.state.title} type="text" name='title' /> <br></br><br></br>
                    <textarea onChange={(e) => {
                        this.setState({
                            content: e.target.value,
                        })
                    }} value={this.state.content} type="text" name="content" /><br></br>
                    <input onChange={(e) => {
                        this.setState({
                            image: e.target.files[0],
                        })
                    }} type="file" name="file" /><br></br><br></br>
                    <input type="submit" value="AddBlog" />
                    <br></br><br></br>
                    <label className='notify-blog'>{this.state.res}</label>
                </div>
            </form>

        );
    }
}
