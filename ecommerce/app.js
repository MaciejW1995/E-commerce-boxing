const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
   {
    id: 1,
    title: "CLETO REYES",
    price: 189,
    colors: [
        {
        code: "black",
        img: "cleto-black.jpg"
        },
        {
        code: "gold",
        img: "cleto.jpg"
        },
        {
        code: "red",
        img: "cleto-red.jpg"
        },
        {
        code: "blue",
        img: "cleto-blue.jpg"
        },
    ],
   },
   {
    id: 2,
    title: "GRANT",
    price: 259,
    colors: [
        {
        code: "gold",
        img: "Grant.png"
        },
        {
        code: "black",
        img: "grant-black.jpg"
        },
    ],
   },
   {
    id: 3,
    title: "WINNING",
    price: 199,
    colors: [
            {
            code: "white",
            img: "winning_pro_fight_gloves_-_white.jpg"
            },
            {
            code: "black",
            img: "winning-black.jpg"
            },
            ],
   },
   {
    id: 4,
    title: "EVERLAST",
    price: 129,
    colors: [
            {
            code: "black",
            img: "everlast.jpg"
            },
            {
            code: "white",
            img: "everlast-white.jpg"
            },
            ],
   },
   {
    id: 5,
    title: "RIVAL",
    price: 159,
    colors: [
            {
            code: "gold",
            img: "rival.jpg"
            },
            {
            code: "green",
            img: "rival-green.jpg"
            },
            ],
   },
];

let choosenProduct = products[0]

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item,index)=>{
    item.addEventListener("click", ()=>{
        //change the current slide
        wrapper.style.transform=`translateX(${-100 * index}vw)`;

        //change the choosen product
        choosenProduct = products[index]

        //change texts of currentProduct
        currentProductTitle.textContent = choosenProduct.title
        currentProductPrice.textContent = "$" + choosenProduct.price
        currentProductImg.src = choosenProduct.colors[0].img

        //nowe kolory
        currentProductColors.forEach((color, index) => {
            color.style.backgroundColor = choosenProduct.colors[index].code;
        })
    });
});

currentProductColors.forEach((color, index)=>{
    color.addEventListener("click", ()=>{
        currentProductImg.src = choosenProduct.colors[index].img
    })
});

currentProductSizes.forEach((size, index)=>{
    size.addEventListener("click", ()=>{
        currentProductSizes.forEach((size) =>{
            size.style.backgroundColor = "white"
            size.style.color = "black"
        })
        size.style.backgroundColor = "black"
        size.style.color = "white"
    })
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", ()=>{
    payment.style.display = "flex";
});

close.addEventListener("click", ()=>{
    payment.style.display = "none";
});