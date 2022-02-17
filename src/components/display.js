import React from "react";

export default class Display extends React.Component {

    constructor(props) {
        console.log('contractor');
        super(props);
        this.state = {
            test: '',
        }
    }

    logger = () => {
        console.log('loging call on render');
    }

    render() {
        this.logger();
        console.log('render display call');

        // gán products props vào display bên home;
        // đọc ra bên đây và đưa vào list;
        let { products, notify } = this.props;
        // thường chỉ đọc ra props ở đây
        // logic có thể viết hàm có sẵn willmout didmout or return;
        return (
            <div className="container">
                <p style={notifyStyle}>{notify}</p>
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
    componentDidMount() {
        console.log('DidMout: luôn call 1 lần mỗi khi chu kỳ component kết thúc');
    }

    // luôn call bất kể có state or props thay đổi;
    componentDidUpdate() {
        console.log('DidUpdated: Cập nhật đơn hang');
    }


    componentWillUnmount() {
        console.log('WillunMout: chỉ kích hoạt khi component bị xóa đi');
    }


    // mặc định return true;
    // mặc định có hai tham số nextProps, nextState;
    // nếu return true nó sẽ cập nhật lại state props khi có thay đổi;
    // nếu return false nó sẽ không bao giờ cập nhật chạy lại render();
    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.test === nextState.test) {
            return true;
        } else {
            return false;
        }
    }

}

const notifyStyle = {
    color: 'green',
};