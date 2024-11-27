const productContainer = document.getElementById('productContainer');
const API_URL = "https://fakestoreapi.com/products";


const fetchProductData = async () => {
    try {
        const response = await fetch(API_URL);

        if(!response.ok) {
            throw new Error ("Something Went wrong");
        }

        const data = await response.json();
    
        // console.log(`data: ${JSON.stringify(data, null, 2)}`);

        return data;
    } catch (error) {
        console.log("error: ", error);
        return
    }
}

const createElement = (elementType, className, id, data) => {

    const label = {
        'price': `$${data}`,
        'category': `Category: ${data}`,
        'rate': `Rate: ${data}`,
        'count': `Count: ${data}`,
    }


    console.log(`element: ${elementType}`)
    if(typeof(elementType) !== 'string') {
        console.log("invalid parameters");
        return;
    }

    const newElement = document.createElement(elementType);
    newElement.className = className;

    if(className === 'card') {
        //set ID for card to make it unique
        newElement.id = id;
    } else if(elementType === 'img') {
        // https://www.w3schools.com/jsref/prop_img_src.asp
        newElement.src = `${data}`
    } else {

       newElement.textContent = label[className] ?? data;
    }
 
    return newElement;
}

const displayProductData = async () => {
    
    //  "id": 8,
    // "title": "Pierced Owl Rose Gold Plated Stainless Steel Double",
    // "price": 10.99,
    // "description": "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
    // "category": "jewelery",
    // "image": "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
    // "rating": {
    //   "rate": 1.9,
    //   "count": 100
    // }

    const data = await fetchProductData();

    //deconstruct rating
    const reformatData = [...data].map((item) => {
        const {rating, ...rest} = item;
        const {rate, count} = rating;
        const newItem = {
            ...rest,
            rate: rate,
            count: count
        }
        return newItem;
    })


    console.log(`${JSON.stringify(reformatData, null, 2)}`);

   reformatData.map((item) => {
        const { id } = item;

        // console.log(`item: ${JSON.stringify(item, null, 2)}`);
        const cardElement = createElement('div', 'card', id, null);
            Object.keys(item).map((key, index) => {
                console.log(`key: ${key}, id: ${index} value: ${item[key]}`);

                const value = item[key];

                if(key === 'rating') {
                    Object.keys(value).map((key, index) => {
                        const ratingValue = value[key];

                        const newElement = createElement(
                            'p',
                            key === 'image' ? 'card-img-top ' : key, 
                            index, 
                            ratingValue,
                        ); 
                        cardElement.appendChild(newElement);
                    })
                } else if(key !== 'id' ){
                    const newElement = createElement(
                        key === 'image' ? 'img' : key === 'title' ? 'h3' : 'p', 
                        key === 'image' ? 'card-img-top ' : key, 
                        index, 
                        value,
                    ); 
                    cardElement.appendChild(newElement);
                }
                

            })
        

        // https://stackoverflow.com/questions/9732624/how-to-swap-dom-child-nodes-in-javascript#:~:text=You%20get%20the%20parent%20of,Reference%20documentation%20on%20insertBefore.
        //move image node from the start
        const imgNode = 4
        const nodes = cardElement.childNodes;
        cardElement.insertBefore(nodes[imgNode], nodes[0]);
        
        productContainer.appendChild(cardElement);
    })
}

displayProductData();
