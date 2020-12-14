export const wines = [
    {
        productName: "Baby Angel",
        price: "",
        stipe_id: '',
        icon: 'public/resources/Assets/Photos/Palet1.JPG',
        type: 'wine'
    },

    
];


export const merch = [
    {
        productName: "Shirt",
        price: '',
        stripe_id: '',
        icon: '/logo2.jpg',
        type: 'merch'

    }
]


export const products = [

    ...wines,
    ...merch

]