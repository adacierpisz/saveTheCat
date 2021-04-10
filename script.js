var character = document.getElementById("character");
var game = document.getElementById("game");
var interval;
var both = 0;
var counter = 0;
var currentBlocks = [];
var score = document.getElementById("score_text");
var level = document.getElementById("level");
var ende = document.getElementById("ende");
var time = 1;

score.textContent = counter;

function moveLeft(){
    var left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    if (left>0) {

        character.style.left = left - 2 + "px";
    }
}

function moveRight(){
    var left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    if (left<380) {
        character.style.left = left + 2 + "px";
    }
}

document.addEventListener("keydown", event => {
    if (both == 0) {
        both++;
        
        if (event.key === "ArrowLeft"){
            interval = setInterval(moveLeft, 1);
        }
        if (event.key === "ArrowRight"){
            interval = setInterval(moveRight, 1);
        }
    }
});

document.addEventListener("keyup", event => {
    clearInterval(interval);
    both=0;
});


 var blocks = setInterval(function(){document.getElementById("score_text");

    var blockLast = document.getElementById("block" + (counter-1));
    var holeLast = document.getElementById("hole" + (counter-1));

    if (counter > 0) {
        var blockLastTop =
        parseInt(window.getComputedStyle(blockLast).getPropertyValue("top"));
        
        var holeLastTop =
        parseInt(window.getComputedStyle(holeLast).getPropertyValue("top"));
    }    

    if(blockLastTop<400||counter==0) {

        var block = document.createElement("div");
        var hole = document.createElement("div");
        
        block.setAttribute("class","block");
        hole.setAttribute("class","hole");
        block.setAttribute("id","block"+counter);
        hole.setAttribute("id","hole"+counter);
        
        block.style.top = blockLastTop + 100 + "px";
        hole.style.top = holeLastTop + 100 + "px";

        var random = Math.floor(Math.random() * 360);
        hole.style.left = random + "px";
        game.appendChild(block);
        game.appendChild(hole);
        currentBlocks.push(counter);
        counter++;
        if (counter > 9) {
            score.textContent = counter - 9 ;
        }
        if(counter < 50){
            level.textContent = "Level1:";
        }
        if(counter > 50 + 9  && counter <= 100 + 9 ){
            level.textContent = "Level2:";
           time = 1;
        }
        if(counter > 100 + 9 && counter <= 150 + 9 ){
           level.textContent = "Level3:";
          /* time = 0.5;*/
        }
        if(counter > 150 + 9  && counter <= 200 + 9 ){
            level.textContent = "Level4:";
            /*time = 0.3;*/
         }
         if(counter > 200 + 9  && counter <= 250 + 9 ){
            level.textContent = "Level5:";
         }  
         if(counter > 250 + 9  && counter <= 300 + 9 ){
            level.textContent = "Level6:";
         } 
         if(counter > 300 + 9  && counter <= 350 + 9 ){
            level.textContent = "Level7:";
         }
         if(counter > 350 + 9  && counter <= 400 + 9 ){
            level.textContent = "Level8:";
         }
         if(counter > 400 + 9  && counter <= 450 + 9 ){
            level.textContent = "Level9:";
         }
         if(counter > 450 + 9  && counter <= 500 + 9 ){
            level.textContent = "FinalesLevel";
        }
        if(counter == 500 + 9 ){
            level.textContent = "Du hast es geschafft!!!"
        }
        if(counter == 500 + 9 ){
            ende.style.display = 'inline';
        }
        if(counter == 502 + 9 ){
        
            alert("Game over. Score:"+(counter-9));
            clearInterval(blocks);
            location.reload()
            
        }
        
    }
   var characterTop = 
    parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var characterLeft = 
    parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    var drop = 0;
    if(characterTop <= 0){
        alert("Game over. Score:"+(counter-9));
        clearInterval(blocks);
        location.reload()
    }
    for(var i = 0; i < currentBlocks.length;i++){
        let current = currentBlocks[i];
        let iblock = document.getElementById("block"+current);
        let ihole = document.getElementById("hole"+current);
        let iblockTop = 
        parseFloat(window.getComputedStyle(iblock).getPropertyValue("top"));
        let iholeLeft = parseFloat(window.getComputedStyle(ihole).getPropertyValue("left"));

        iblock.style.top = iblockTop - 0.5 + "px";
        ihole.style.top = iblockTop - 0.5 + "px";
        if(iblockTop < -20){
            currentBlocks.shift();
            iblock.remove();
            ihole.remove();
        }
        if(iblockTop-20<characterTop && iblockTop>characterTop){
            drop++;
            if(iholeLeft<=characterLeft && iholeLeft+20>=characterLeft){
                drop = 0;
            }
        }
    }
    if(drop==0){
        if(characterTop < 480){
        character.style.top = characterTop + 2 + "px";
        }
    }else{
        character.style.top = characterTop - 0.5 + "px";}
}, time);
   /*if(counter > 10, counter <= 150){
       time2
   }*/
   /*if(counter > 10, counter <= 20)
   if(drop==0){
    if(characterTop < 480){
    character.style.top = characterTop + 2 + "px";
    }
}else{
    character.style.top = characterTop - 0.5 + "px";}
 time2);*/