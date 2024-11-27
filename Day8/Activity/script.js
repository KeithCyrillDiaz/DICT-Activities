const productLabel1 = document.getElementById('product_Label_1').textContent;
const productPrice1 = document.getElementById('product_Price_1').textContent;

const productLabel2 = document.getElementById('product_Label_2').textContent;
const productPrice2 = document.getElementById('product_Price_2').textContent;

const productLabel3 = document.getElementById('product_Label_3').textContent;
const productPrice3 = document.getElementById('product_Price_3').textContent;

const cartTotal = document.getElementById('cart-total');

const button1 = document.getElementById(`button_1`);
const button2 = document.getElementById(`button_2`);
const button3 = document.getElementById(`button_3`);

const cartItems = document.getElementById('cart-items');



button1.addEventListener('mousedown', (event) => addToCart(event, 1));
button2.addEventListener('mousedown', (event) => addToCart(event, 2));
button3.addEventListener('mousedown', (event) => addToCart(event, 3));

const products = [
    {
        id: 0,
        label: productLabel1,
        price: Number(productPrice1.split("$")[1]),
    },
    {
        id: 1,
        label: productLabel2,
        price: Number(productPrice2.split("$")[1]),
    },
    {
        id: 2,
        label: productLabel3,
        price: Number(productPrice3.split("$")[1]),
    }
]

const shoppingCartCounts = {
    product1Count: 0,
    product2Count: 0,
    product3Count: 0,
    totalPrice: 0,
    totalProductCount: function () {
        return this.product1Count + this.product2Count + this. product3Count
    },
}

const shoppingCart = [];

function removeItem(event, id) {
    event.preventDefault();

    const price =  shoppingCartCounts[`product${id + 1}Count`] * products[id].price

    const totalPrice =  shoppingCartCounts.totalPrice - price;

    updateTotal(totalPrice)

    shoppingCartCounts[`product${id + 1}Count`] = 0;
    const childNodes  = cartItems.childNodes;
    const liElement = document.getElementById(`list-${id}`);
    liElement.remove();
    console.log(`childeNOdes: ${childNodes.length}`);
   
    if(childNodes.length === 0) {
        cartItems.style.display = 'none'
    }
    
    return

}

function createListElement (data) {

    //Label And Quantity
    const labelElement = document.createElement('span');
    labelElement.id = `label-${data.id}`;

    const productCount = shoppingCartCounts[`product${data.id + 1}Count`];

    console.log(`productCount: ${productCount}`)

    if(productCount === 1) {
        labelElement.textContent= `${data.label}`;
    } else {
        labelElement.textContent= `${data.label} Quantity: ${productCount}x`;
    }
    
    console.log(`id: ${data.id}`)

      //Price and Remove Button
      const priceElement = document.createElement('span');
      priceElement.textContent= `$${data.price}`;
      priceElement.id = `price-${data.id}`;

      const removeButton = document.createElement('button');
      removeButton.textContent= `Remove`;
      removeButton.id = `removeButton-${data.id}`;
      // apply classname on element https://www.w3schools.com/jsref/prop_html_classname.asp
      removeButton.className = "dangerButton";
      removeButton.addEventListener('mousedown', (event) => removeItem(event, Number(removeButton.id.split('-')[1])));

    return {labelElement, priceElement, removeButton}

}

function displayCart(data) {
          //get list ID
          const checkListELement = document.getElementById(`list-${data.id}`);
          if(checkListELement) {
            // https://www.w3schools.com/jsref/met_element_remove.asp
            checkListELement.remove();
        };

        const liElement = document.createElement('li');
        liElement.id = `list-${data.id}`;

        console.log(`data: ${JSON.stringify(data, null, 2)}`)

  
        
   
       const {priceElement, labelElement, removeButton} = createListElement(data);

    
        liElement.appendChild(labelElement);
        liElement.appendChild(priceElement);
        priceElement.appendChild(removeButton);
        
        cartItems.appendChild(liElement);
        cartItems.style.display='block';


}

function updateTotal (price) {
    cartTotal.textContent = `Total: $${price}`
}

function addToCart (event, id) {
    
    event.preventDefault();
    console.log("Adding product to cart");
    const index = id -1;
    const totalPrice = shoppingCartCounts.totalPrice;
   
    if(index === 0) {
        shoppingCartCounts.product1Count++;
    } else if (index === 1) {
        shoppingCartCounts.product2Count++;
    } else {
        shoppingCartCounts.product3Count++;
    }

    shoppingCart.push(products[index]);

    //update price
    shoppingCartCounts.totalPrice = totalPrice + products[index].price
    
    console.log(`item 1: ${shoppingCartCounts.product1Count}`);
    console.log(`item 2: ${shoppingCartCounts.product2Count}`);
    console.log(`item 3: ${shoppingCartCounts.product3Count}`);
    console.log(`Total items: ${shoppingCartCounts.totalProductCount()}`);
    console.log(`item 3: ${shoppingCartCounts.totalPrice}`);

    displayCart(products[index]);
    updateTotal(shoppingCartCounts.totalPrice);
}
