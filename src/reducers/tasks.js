import * as types from './../constants/ActionTypes';
var innitialState = [
  
    
        {
            id: 1,
            Name: "Iphone 5",
            source: "https://images-na.ssl-images-amazon.com/images/I/71oip7WhHiL._SX569_.jpg",
            Price: 6999999,
            status: false
        },
        {
            id: 2,
            Name: "Iphone 6",
            source: "https://ae01.alicdn.com/kf/HTB1k4oiAwaTBuNjSszfq6xgfpXar/Unlocked-Apple-iPhone-6s-2GB-RAM-16-64-128GB-ROM-Cell-Phone-IOS-A9-Dual-Core.jpg",
            Price: 11000000,
            status: false
        },
        {
            id: 3,
            Name: "Iphone 7",
            source: "https://switch.com.my/wp-content/uploads/2017/11/iPhone7-Black-2Up-34L-US-EN-SCREEN.jpg",
            Price: 26999999,
            status: false
        },
        {
            id: 4,
            Name: "Iphone 8",
            source: "./a.jpg",
            Price: 59999999,
            status: false
        },
        {
            id: 5,
            Name: "Iphone X",
            source: "./iphonex.png",
            Price: 60000000,
            status: false
        },
        {
            id: 6,
            Name: "Iphone 3",
            source: "https://cdn.thegioididong.com/Products/Images/42/22230/iPhone-3GS-8GB-1.jpg",
            Price: 299999,
            status: false
        },
        {
            id: 7,
            Name: "Iphone 3",
            source: "./1.jpg",
            Price: 299999,
            status: false
        },
 
        {
            id: 9,
            Name: "Iphone 3",
            source: "./3.jpg",
            Price: 299999,
            status: false
        },
        {
            id: 10,
            Name: "Iphone 3",
            source: "./4.jpg",
            Price: 299999,
            status: false
        },
        {
            id: 11,
            Name: "Iphone 3",
            source: "./5.jpg",
            Price: 299999,
            status: false
        },
        {
            id: 12,
            Name: "Iphone 3",
            source: "./6.jpg",
            Price: 299999,
            status: false
        }

];

var myReducer = (state = innitialState, action) =>{
    switch (action.type) {
        case types.LIST_ALL:  return state;
        default:   return state;
    }
  
}




export default myReducer;