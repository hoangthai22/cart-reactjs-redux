 var initialState = [
    {
        id: 1,
        name: 'Iphone 7',
        image: 'https://cdn.mobilecity.vn/mobilecity-vn/images/2019/12/iphone7-red.jpg',
        description: 'SP do Apple san xuat',
        price: 500,
        inventory: 10,
        rating: 4
    },
    {
        id: 2,
        name: 'Iphone 8',
        image: 'https://cdn.mobilecity.vn/mobilecity-vn/images/2019/12/iphone8-gold.jpg',
        description: 'SP do Apple san xuat',
        price: 1000,
        inventory: 20,
        rating: 2
    },
    {
        id: 3,
        name: ' Asus ROG Phone 2',
        image: 'https://cdn.mobilecity.vn/mobilecity-vn/images/2019/09/mc-asus-rog-phone-2.jpg',
        description: 'SP do Apple san xuat',
        price: 1500,
        inventory: 15,
        rating: 5
    },
];

const product = (state = initialState, action) => {
    switch(action.type) {
        default: return [...state];
    }
}

export default product;