import React from "react";

export default class Display extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {

        // gán products props vào display bên home;
        // đọc ra bên đây và đưa vào list;
        let { products, notify } = this.props;
        // thường chỉ đọc ra props ở đây
        // logic có thể viết hàm có sẵn willmout didmout or return;
        return (
            <div>
                {/* {(() => {
                    // if (products.length < 0) {
                    //     return (
                    //         <h1>danh sách là:</h1>
                    //     )
                    // } else {
                    //     return (
                    //         <h1>danh sách null:</h1>
                    //     )
                    // }
                })()} */}
                <h1 style={notifyStyle}>{notify}</h1>
                <ul>
                    {products.map(p => (
                        <li key={p.id}>
                            <p>id: {p.id}</p>
                            <h2>title: {p.title}</h2>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }

}

const notifyStyle = {
    color: 'green',
};