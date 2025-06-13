var shop = [
    {
        title: 'Friskies Cat Food',
        image: './images/catfood.webp',
        price: '$7.00-20.00',
      description: 'Wonderful flavors to go around for your furry friend ranges from 9lb to 15lb',
    },
    {
        title: 'Simple Grooming kit',
        image: './Images/dogGroomingKit.webp',
        price: '$10.00-20.00',
      description:'Comes with all the essentials to help groom your dog the simple way'
    },
    {
        title: 'Big bones ',
        image: './images/dogbones.jpg',
        price: '$5.00-10.00',
      description: 'Grab a pack of three big bones'
      
      
      
    },

    {
        title: 'CatNip',
        image: './images/catnip.webp',
        price: '$7.99',
      description: 'A little CatNip to keep the kitties calm'
    },
    {
        title: 'Animal beds',
        image: './Images/petBeds.jpg',
        price: '$25-$50',
      description: 'We have a range of pet beds for your furry friend'
    },



]

var postHTML = " "



    for (var i=0; i < shop.length; i++){
        var heading = '<div class="product card col-md-3 mx-3 my-3' + '"><span><h5 class="card-title titlename ">' + shop[i].title + '</h5>'
        var image = '<img src="' + shop[i].image + '" class="shop-img card-img justify-content-center"/>'
        var price = '<p class="container card-body price "> ' + shop[i].price + '</p></span>'
        var description = '<div class="cardDescription"><p class="card-text text " >'+ shop[i].description + '</p><button type="button" class="btn btn-warning button ">Click to Add </button></div></div>'
        var concatThis = heading + image + price + description;
        postHTML = postHTML + concatThis
    }
    document.getElementById('market').innerHTML = postHTML