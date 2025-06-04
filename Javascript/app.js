var shop = [
    {
        title: 'Tigers',
        image: './images/small-dog.png.png',
        price: '$7,500',
      description: 'a baby tiger',
    },
    {
        title: 'Duke',
        image: './img/gerbile.jpg',
        price: '$7,500-15,000',
      description: 'a baby tiger'
    },
    {
        title: 'Richie Rich',
        image: './img/gerbile.jpg',
        price: '$7,500-15,000',
      description: 'a baby tiger'
    },

    {
        title: 'Tigers',
        image: './img/gerbile.jpg',
        price: '$7,500-15,000',
      description: 'a baby tiger'
    },
    {
        title: 'Tigers',
        image: './img/gerbile.jpg',
        price: '$7,500-15,000',
      description: 'happy'
    },



]

var postHTML = " "



    for (var i=0; i < shop.length; i++){
        var heading = '<div class="product card col-md-3 mx-3 my-3' + '"><span><h5 class="card-title titlename ">' + shop[i].title + '</h5>'
        var image = '<img src="' + shop[i].image + '" class="shop-img card-img justify-content-center"/>'
        var price = '<p class="container card-body price "> ' + shop[i].price + '</p></span>'
        var description = '<div class="cardDescription"><p class="card-text text " >'+ shop[i].description + '</p><button type="button" class="btn btn-warning button "> Click to Adopt</button></div></div>'
        var concatThis = heading + image + price + description;
        postHTML = postHTML + concatThis
    }
    document.getElementById('market').innerHTML = postHTML