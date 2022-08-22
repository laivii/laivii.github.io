window.addEventListener("load",function(event) {
    load();
  },false);

const list = Array(24);

function load(){
    var temp = JSON.parse(localStorage.getItem("selected"));
    for(i = 0; i < list.length; i++){list[i] = temp[i]; if(list[i] == 1){document.getElementById(i).classList.toggle('active');}}
    console.log(list);
}

function setSel(id){
    if(list[id] == 1){list[id] = 0;}else {list[id] = 1;}
    localStorage.setItem("selected", JSON.stringify(list));
}

$(".bingo-card__item").on('click', function() {
    $(this).toggleClass('active');
    setSel(this.id);
});

$('.clear-button').on('click', function(){
    $('.bingo-card__item').removeClass('active');
});

