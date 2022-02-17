import React from 'react';
import axios from 'axios';
export default class Submit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image: null,
            title: '',
            content: '',
        }

    }

    handleSubmit = (event) => {
        event.preventDefault();
        var data = new FormData();
        console.log(this.state.image[0]);
        data.append('title', this.state.title);
        data.append('content', this.state.content);
        data.append('file', this.state.image[0]);

        var config = {
            method: 'post',
            url: 'http://localhost:8080/api/add-blog',
            data: data
        };

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });



        alert('A name was submitted: ' + this.state.value);
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
                            image: e.target.files,
                        })
                    }} type="file" name="file" /><br></br><br></br>
                    <input type="submit" value="AddBlog" />
                </div>
            </form>
        );
    }
}
