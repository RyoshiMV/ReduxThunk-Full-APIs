// fetch of products;
import {
  FETCH_PRODUCT,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_FAILED
} from './action';

const initialStateProducts = {
  loading: '',
  error: null,
  products: [],
}

// action được map auto đóng vai trò là một hàm ví dụ (startFetchProductsSuccess) bên disPatch;
export const productReducer = (state = initialStateProducts, action) => {
  switch (action.type) {
    case FETCH_PRODUCT:
      console.log('start call reducer');
      return {
        loading: 'loading...',
        error: null,
        products: [],
      };
    case FETCH_PRODUCT_SUCCESS: {
      console.log('call reducer success');
      console.log(action);
      return {
        loading: false,
        products: action.payload,
        error: null,
      };
    }
    case FETCH_PRODUCT_FAILED: {
      console.log('call reducer error');
      return {
        loading: false,
        products: [],
        error: action.payload.error
      }
    }
    default:
      return state;
  }

}
