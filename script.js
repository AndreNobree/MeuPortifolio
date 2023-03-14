const front =  document.querySelector("#front")
const back =  document.querySelector("#back")

front.addEventListener("click", function(e){
    e.preventDefault();

    var clickedCard = document.querySelector('#tecnologias');

    clickedCard.innerHTML = '<img src="./media/html5.png" class="ferramentas"><img src="./media/css3.png" class="ferramentas"><img src="./media/js.png" class="ferramentas"><img src="./media/ts.png" class="ferramentas"><img src="./media/reactnative.png" class="ferramentas"><img src="./media/bts.png" class="ferramentas">';
    
})

back.addEventListener("click", function(e){
    e.preventDefault();

    var clickedCard = document.querySelector('#tecnologias');

    clickedCard.innerHTML = '<img src="./media/python.png" class="ferramentas"><img src="./media/java.png" class="ferramentas"><img src="./media/cplus.png" class="ferramentas"><img src="./media/mysql.png" class="ferramentas"><img src="./media/dj.png" class="ferramentas"><img src="./media/node.png" class="ferramentas">';
    
})
