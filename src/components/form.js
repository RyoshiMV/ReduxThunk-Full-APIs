import React from "react";
import { connect } from 'react-redux';
import Display from '../components/display';
// khi import mot class vao day thi no co la cha khong?
import getProductsAndDispatch from '../redux/disPatchProducts';
class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'list',
            notify: 'List current is null',
        };
        // nếu không bind ở đây chúng ta sẽ phải dùng arrowffunction bên dưới để call;
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        if (this.state.value === 'list') {
            this.props.mainFetchProducts();
            this.setState({
                notify: 'List current is:'
            })
        } else {
            this.setState({
                products: [],
                value: '',
            })
            event.preventDefault();
        }
    }


    render() {
       // const { lableName } = this.props;
        return (
            <>
                <label>
                    {this.props.lableName} : 
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <button onClick={this.handleSubmit}>Submit</button>
                <h2 style={loadingStyle}>{this.props.loading}</h2>
                <Display products={this.props.products} notify={this.state.notify} />
            </>
        );
    }
}

// state tham số truyền vào này là state của redux đã hoàn chỉnh;
// mapStateToProps hàm ý map toàn bộ state do rudex quản lý thành props class components;
const mapStateToProps = (state) => {
    return {
        // {loading, error, products} bên trái sẽ đc cơ chế HOC chuyển thành props của class này (Form)   
        // nhưng thứ bên phải object đọc trực tiếp từ redux ra;
        loading: state.loading,
        error: state.error,
        products: state.products
    }
}

//map getProductsAndDispatch() vào thành props của class form vs tên mainFetchProducts;
const mapDispatch = (dispatch) => ({
    mainFetchProducts: () => {
        dispatch(getProductsAndDispatch())
    }
});
// style HOC REACTJS của redux sẽ tạo ra một funtion or bao bọc;
// đơn giản tôi tạo ra class ReduxHandle trong class này có hàm return
// trong hàm return tôi gọi component nào đó import vào trong component đó
// tôi truyền thuộc tính cho nó value thuộc tính la toàn giá trị state redux  
// tương ứng tôi đang có ví dụ <Form loading = {this.state.loading}/> như vậy là xong;
// bây giờ loading đã laf props của Form và có value laf state của redux;
export default connect(mapStateToProps, mapDispatch)(Form);


const loadingStyle = {
    color: 'red',
};


// khi có sự thay đổi props thì render mới kích hoạt chính vì vậy 
// chúng ta cần map mọi thứ redux có vào props của components để đọc;
// {...this.props} mouse={mouse}; khai báo nhanh components này lấy toàn bộ state đã có và thêm state mới mouse;