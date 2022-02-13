// have api;
const getProducts = () => {
    console.log('start');
    // FFETCH TƯ ĐỘNG LÀ MỘT PROMISSE KHI GỌI URL;
    return new Promise((resolver, reject) => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            // .then 1 bạn nhận được resolver = listPost json;
            .then(function (response) {
                // sau đó bạn .json() trong fetch chính là json -> to js hay (.json() = parse);
                return resolver(response.json());
            })
            // then 2 chính là giả định ta đã có list products js;
            .then(function (products) {
                return products;
            }).catch(function (e) {
                console.log('Failure: ' + reject(e));
            })
    })
}


export default getProducts;