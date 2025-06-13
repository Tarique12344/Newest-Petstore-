var shop = [
    {
        title: 'Santas Little Helper',
        image: './images/small-dog.png.png',
        price: '$50.00 Adoption fee',
        description: 'A cute little small dog with big hopes. *',
    },
    {
        title: 'Odie',
        image: './images/odiE.jpg',
        price: '$50.00 Adoption fee',
        description: 'A energetic animal that loves cats, will eat left over lasanga'
    },
    {
        title: 'Richie Rich',
        image: './images/richCat.jpg',
        price: '$50.00 Adoption fee',
        description: 'Likes to live the luxary life style in home ',
    },
    {
        title: 'Duke the Third',
        image: './images/Kingsley.jpg',
        price: '$100 Adoption fee',
        description: 'Loves strolls in the park, running in the snow and chasing his tail'
    },
    {
        title: 'Ying & Yang',
        image: './images/yingYang.jpg',
        price: '$50 Adoption fee',
        description: 'they work in harmony together, duo pairs that wont leave eachother side *'
    },
    {
        title: 'Maurice',
        image: './images/maurice.jpg',
        price: '$75 Adoption fee',
        description: 'Wise , loyal , and sometimes Problematic'
    },
    {
        title: 'Smoke',
        image: './images/BigAhhDog.jpg',
        price: '$100 Adoption fee',
        description: 'Hes a very huge dog thats loyal, super protective and sometimes thinks hes a lap dog'
    },
]

var postHTML = "";

for (var i = 0; i < shop.length; i++) {
    var isFeatured = shop[i].description.includes("*");
    var cardClass = "product card col-md-3 mx-3 my-3" 
    var heading = `<div class="${cardClass}">`;

    // Add featured badge if needed
 

    var title = `<h5 class="card-title titlename">${shop[i].title}</h5>`;
    var image = `<img src="${shop[i].image}" class="shop-img card-img justify-content-center"/>`;
    var badge = isFeatured ? `<div class="featured-badge"></div>` : "";
    var price = `<p class="container card-body price">${shop[i].price}</p>` + (isFeatured ? " featured animal of the week" : "");
    var description = `
        <div class="cardDescription">
            <p class="card-text text">${shop[i].description}</p>
            <button type="button" class="btn btn-warning button">Click to Adopt</button>
        </div>
    </div>`;

    var concatThis = heading + badge + title + image + price + description;
    postHTML += concatThis;
}

document.getElementById('market').innerHTML = postHTML;
