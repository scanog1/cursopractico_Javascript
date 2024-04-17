
//Elementos//
const menu_email = document.querySelector('.navbar-email');
const menu_escritorio = document.querySelector('.desktop-menu');
const menu_mobile = document.querySelector('.mobile-menu');
const icon_mobile = document.querySelector('.menu');
const menu_carrito = document.querySelector('.product-detail');
const icon_carrito = document.querySelector ('.navbar-shopping-cart');
const cardsContainer = document.querySelector ('.cards-container');

//Event listener//
icon_carrito.addEventListener('click', show_pop_carrito );
icon_mobile.addEventListener('click', show_pop_mobile);
menu_email.addEventListener('click',show_pop );

//Funciones//

function show_pop() {
    menu_escritorio.classList.toggle('inactive');
}

function show_pop_mobile() {
    const ismenu_carritoclosed = menu_carrito.classList.contains('inactive');
    if(!ismenu_carritoclosed){
    menu_carrito.classList.add('inactive')
    }
    menu_mobile.classList.toggle('inactive');
}


function show_pop_carrito(){
    const ismenu_mobileclosed = menu_mobile.classList.contains('inactive');
    if (!ismenu_mobileclosed){
    menu_mobile.classList.add('inactive')    
 }
    menu_carrito.classList.toggle('inactive');
    }
//Array para productos//

const listaProductos = [];

listaProductos.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=94'
});
listaProductos.push({
    name: 'Pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=94'
});
listaProductos.push({
    name: 'Computadora',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=94'
});
listaProductos.push({
    name: 'lavadora',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=94'
});
listaProductos.push({
    name: 'Refrigerador',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=94'
});
listaProductos.push({
    name: ' Celular',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=94'
});
listaProductos.push({
    name: 'Sarten',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=94'
});
listaProductos.push({
    name: 'Reloj',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=94'
});
listaProductos.push({
    name: 'Comedor',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=94'
});

function renderProducts(arr){
    for (product of arr){
        const productCard = document.createElement ('div');
        productCard.classList.add('product-card');
        
        const productImg = document.createElement ('img');
        productImg.setAttribute('src', product.image);
     
        const productInfo = document.createElement ('div');
        productInfo.classList.add('product-info');
     
        const productInfoDiv = document.createElement ('div');
     
        const productPrice = document.createElement ('p');
        productPrice.innerText ='$' + product.price;
     
        const productName = document.createElement ('p');
        productName.innerText = product.name;
     
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
     
        const productInfoFigure = document.createElement ('figure');
     
        const productImgCard =  document.createElement ('img');
        productImgCard.setAttribute('src', './icons/bt_add_to_cart.svg');
     
        productInfoFigure.appendChild(productImgCard);
     
        productInfo.appendChild( productInfoDiv);
        productInfo.appendChild( productInfoFigure);
     
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
     
     
     cardsContainer.appendChild(productCard);
     
     
     
     }
}

renderProducts(listaProductos);
