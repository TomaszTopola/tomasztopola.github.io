function potatoes(){
    location.href = "potatoes.html"
}

function accessories(){
    location.href = "accessories.html"
}

function gallery(){
    location.href = "history.html"
}

function contact(){
    location.href = "contact.html"
}

function showImageFulscreen(path){
    document.getElementById('fulscreen-image').src = path
    cards = document.getElementsByClassName('article-card');
    count = cards.length
    for(var i=0; i<count; i++){
        cards[i].style.display = 'none'
    }
    document.getElementById('image-frame').style.display = 'block'
}

function hideImageFulscreen(){
    cards = document.getElementsByClassName('article-card');
    count = cards.length
    for(var i=0; i<count; i++){
        cards[i].style.display = 'grid'
    }
    document.getElementById('image-frame').style.display = 'none'
}