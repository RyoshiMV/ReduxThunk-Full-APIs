import getProducts from './service';

// xuất hàm mac dinh này truyền vào username;
const getProductsAndDispatch = () => {
    // trả về một hàm dispatch;
    return (dispatch) => {
        // luôn chạy hàm start ban đầu 
        dispatch(startFetchProducts());
        // chạy fetch thật sự;
        getProducts()
            // getProducts đơn giản nếu fetch thành công sẽ có user ham nay la promisse
            .then((products) => {
                // sau đó mới chuyển dispatch products này đến hàm startFetchProductsSuccess;
                // gọi đến function startFetchProductsSuccess và truyền data là products vao;
                dispatch(startFetchProductsSuccess(products))
            })
            .catch(error => dispatch(startFetchProductsFailure(error)))
    }
}

export default getProductsAndDispatch;



// chi don gian tu khai type va payload cho dung cau truc;
// sau khi getProductsAndDispatch call cac ham tuong ung thi 
// cac gia tri se dc gan cung type va (dispatch auto) sang reducer tuong ứng;
export const startFetchProducts = () => {
    return {
        type: 'FETCH_PRODUCT'
    }
}

export const startFetchProductsSuccess = (products) => {
    return {
        // payload gán là products tham số thì bên reducer chỉ cân acction.payload là xòn
        // cần thiết thì in action ra xem có gì;
        type: 'FETCH_PRODUCT_SUCCESS', payload: products
    }
}

export const startFetchProductsFailure = (error) => {
    return {
        type: 'FETCH_PRODUCT_FAILED', payload: error
    }
}

// đơn giản là hàm đã đc fetch và data và type đã đổ sang acction để chuyển sang ruducer;