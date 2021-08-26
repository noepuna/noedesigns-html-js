{
    // Array of all products (database)
    let products = [
    
    {
      "name": "Lamelo 'Melo' Ball",
      "price": "$12.99",
      "image": "images/Lamelo Ball.PNG",
      "desc": "Charlotte Hornets' guard Lamelo Ball."
    },
    {
        "name": "A kid from Akron",
        "price": "$22.99",
        "image": "images/LeBron Collage.PNG",
        "desc": "Following LeBron James' career through the Cleveland Cavaliers, Miami Heat, and LA Lakers."
    },
    {
        "name": "Kyle Lowry",
        "price": "$13.99",
        "image": "images/Kyle Lowry.PNG",
        "desc": "Greatest Raptor of All Time, Kyle Lowry of the Toronto Raptors."
    },
    {
        "name": "Charles Barkley",
        "price": "$14.99",
        "image": "images/Charles Barkley.PNG",
        "desc": "The Round Mound Rebound."
    },
    {
        "name": "Steph Curry",
        "price": "$18.99",
        "image": "images/Steph Collage.PNG",
        "desc": "The Greatest Shooter of All Time, Stephen Curry of the Golden State Warriors."
    },
    {
        "name": "Brooklyn Nets Trio",
        "price": "$24.99",
        "image": "images/Brooklyn Nets Trio.PNG",
        "desc": "Kyrie Irving, Kevin Durant, and James Harden."
    },
    {
      "name": "Kobe x Mike",
      "price": "$19.99",
      "image": "images/KBxMJ.PNG",
      "desc": "Kobe Bryant speaking with Michael Jordan."
    },
    {
        "name": "Tim Duncan",
        "price": "$14.99",
        "image": "images/Tim Duncan.PNG",
        "desc": "The Big Fundamental."
    },
    {
        "name": "Reggie Miller",
        "price": "$16.99",
        "image": "images/Reggie Miller.PNG",
        "desc": "Reggie Miller taunting movie director, Spike Lee, in the Garden."
    },
    
    {
        "name": "Michael 'Air' Jordan",
        "price": "$14.99",
        "image": "images/Air Jordan.PNG",
        "desc": "Air Jordan dunk contest."
    },
    {
        "name": "D. Wade Vaporwave",
        "price": "$13.99",
        "image": "images/Wade Vaporwave.PNG",
        "desc": "Heat Legend Dwyane Wade in Miami Vice Jersey."
    },
    {
        "name": "Jayson Tatum",
        "price": "$15.99",
        "image": "images/Jayson Tatum.PNG",
        "desc": "Jayson Tatum."
    },
    {
        "name": "Kinah Inc.",
        "price": "$12.99",
        "image": "images/Kinah Inc.PNG",
        "desc": "Kinah Inc. Advertisement."
    },
    {
        "name": "Hakeem 'The Dream' Olajuwon",
        "price": "$12.99",
        "image": "images/Hakeem Olajuwon.PNG",
        "desc": "The Dream."
    },
    {
        "name": "LeBron 'The King' James",
        "price": "$15.99",
        "image": "images/LeBron James.PNG",
        "desc": "King James."
    },
    {
        "name": "Vince LaSalle",
        "price": "$9.99",
        "image": "images/Vince Lasalle.PNG",
        "desc": "Vince Lasalle from Disney's Recess."
    },
    {
        "name": "Miami Heat",
        "price": "$13.99",
        "image": "images/Miami Heat.PNG",
        "desc": "The Miami Heat Trio of Jimmy Butler, Bam Adebayo, and Tyler Herro."
    },
    {
        "name": "Mike Jordan",
        "price": "$18.99",
        "image": "images/Mike Jordan NCU.PNG",
        "desc": "Young Michael Jordan at North Carolina."
    },
    {
        "name": "Penny x Dijonay",
        "price": "$9.99",
        "image": "images/Proud Family.PNG",
        "desc": "Penny Proud & Dijonay Jones from Disney's Proud Family."
    },
    
    
  ]

  // call getProducts() to display products in 'products' array which holds them all
  function getAllProducts(){
    getProducts(products);
  }
  
  // display all products in param array as product cards  
  function getProducts(array){
        
        let len = array.length;
        for (var i = 0; i < len; i++){
            // create the product div element
            var card = document.createElement("div");
            // img element, store the file directory in array in the img src             
            var pic = document.createElement("img");
            pic.src = array[i].image; 
            pic.id = i;
            pic.onclick = function(e){
                setProduct(this.id, array);
            }
            // h3 element, store the name in array in the h3 
            var name = document.createElement("h3");
            name.innerText = array[i].name; 
            // p element, store the price in array in the p  
            var price = document.createElement("p");
            price.innerText = array[i].price;
            // p element, store the description in array in the p 
            var desc = document.createElement("p");
            desc.innerText = array[i].desc;
            // button element, button text "Add To Cart"
            var btn = document.createElement("button");
            btn.innerText = "View";
            // keeps track of which product the button belongs to, to be used in function to display product
            btn.id = i;
            btn.onclick = function(e) {
                // pass the product's id (index), and the array it belongs to
                setProduct(this.id, array);
            };
            // add all new elements into the product div in order              
            card.appendChild(pic);
            card.appendChild(name);
            card.appendChild(price);
            card.appendChild(desc);
            card.appendChild(btn);
            // add css
            card.className = "product";
            // add constructed div to the page
            document.getElementById("main").appendChild(card);
        }
        
    }

    // function that displays products that match the searched name
    function setSearch(){
        // searchString = the value of the search bar
        var searchString = document.getElementById("search").value;
        // store the searchString in the session variable "searchInput"
        sessionStorage.setItem("searchInput", searchString);
        // switch pages
        location.href = "searched.html";
    }

    // filters the products array by user search displays with getProducts()
    function getSearches(){
        // searchString = session searchInput
        var searchString = sessionStorage.getItem("searchInput");
        // add searchString to title
        document.getElementById("title").innerHTML += " '" + searchString + "'";

        // array of products that fit the searchString
        var searchProducts = [];
        for(var i=0; i < products.length; i++){
            var lowName = products[i].name.toLowerCase();
            var lowDesc = products[i].desc.toLowerCase();
            var lowSearch = searchString.toLowerCase();
            if(lowName.includes(lowSearch) || lowDesc.includes(lowSearch)){
                searchProducts.push(products[i]);
                console.log(searchProducts.length);
            }
        }

        document.getElementById("totalResults").innerHTML = searchProducts.length + " Products";

        getProducts(searchProducts);
    }

    // set the variables for the product page
    function setProduct(productId, productArray){
        console.log(productId);
        sessionStorage.setItem("picture", productArray[productId].image);
        sessionStorage.setItem("name", productArray[productId].name);
        sessionStorage.setItem("price", productArray[productId].price);
        sessionStorage.setItem("description", productArray[productId].desc);
        location.href = "product page.html";
    }

    // display product page
    function loadProduct(){
        var card = document.createElement("div");
        // img element, store the file directory in array in the img src             
        var pic = document.createElement("img");
        pic.src = sessionStorage.getItem('picture'); 
        // h3 element, store the name in array in the h3 
        var name = document.createElement("h2");
        name.innerText = sessionStorage.getItem('name');
        // p element, store the price in array in the p  
        var price = document.createElement("p");
        price.innerText = sessionStorage.getItem('price')
        // p element, store the description in array in the p 
        var desc = document.createElement("p");
        desc.innerText = sessionStorage.getItem('description');
        // add all new elements into the product div in order              
        card.appendChild(pic);
        card.appendChild(name);
        card.appendChild(price);
        card.appendChild(desc);
        // add css
        card.className = "product";
        // add constructed div to the page
        document.getElementById("picture").appendChild(pic);
        document.getElementById("info").appendChild(name);
        document.getElementById("info").appendChild(price);
        document.getElementById("info").appendChild(desc);
        // add to cart button with css
        var atc = document.createElement("button");
        atc.innerText = "Add To Cart";
        atc.style.color = "white";
        atc.style.backgroundColor = "#000"
        atc.style.border = "none";
        atc.style.fontSize = "18px";
        atc.style.fontFamily = "EngraversGothic BT";
        atc.onclick = function(){
            alert("Added To Cart (Not Really).")
        }
        document.getElementById("info").appendChild(atc);
    }
}