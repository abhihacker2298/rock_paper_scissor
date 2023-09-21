hide("win");
hide("loss");
hide("tie");
hide("ruler");
hide("cross");
var pc_score=0;
var my_score=0;

function rock() {

    hide("play");

    var randomNum = pc_random();

    console.log(randomNum);

    if(randomNum==1){
        show("tie");
    }
    else if(randomNum==2)
    {
        document.getElementById("image_win").src = "assets/rock_ellipse.png";
        document.getElementById("imagewin").src = "assets/scissors_ellipse.png";

        show("win");
        
        my_score+=1;
    
        document.getElementById("your_score").innerHTML = my_score;
    }
    else{

        document.getElementById("image_loss").src = "assets/rock_ellipse.png";
        document.getElementById("imageloss").src = "assets/paper_ellipse.png";

        show("loss");

        pc_score+=1;
        
        document.getElementById("comp_score").innerHTML = pc_score;

    }
}

function scissor(){

    hide("play");
    
    var randomNum = pc_random();

    console.log(randomNum);

    if(randomNum==1){

        document.getElementById("image_loss").src = "assets/scissors_ellipse.png";
        document.getElementById("imageloss").src = "assets/rock_ellipse.png";

        show("loss");

        pc_score+=1;
        document.getElementById("comp_score").innerHTML = pc_score;
    }
    else if(randomNum==2)
    {

        document.getElementById("image_tie").src = "assets/scissors_ellipse.png";
        document.getElementById("imagetie").src = "assets/scissors_ellipse.png";

        show("tie");
    }
    else
    {
        document.getElementById("image_win").src = "assets/scissors_ellipse.png";
        document.getElementById("imagewin").src = "assets/paper_ellipse.png";

        show("win");

        my_score+=1;
        document.getElementById("your_score").innerHTML = my_score;
    }
}

function paper(){

    hide("play");

    var randomNum = pc_random();

    console.log(randomNum);

    if(randomNum==1){

        document.getElementById("image_win").src = "assets/paper_ellipse.png";
        document.getElementById("imagewin").src = "assets/rock_ellipse.png";

        show("win");

        my_score+=1;
        document.getElementById("your_score").innerHTML = my_score;
    }
    else if(randomNum==2)
    {
        document.getElementById("image_loss").src = "assets/paper_ellipse.png";
        document.getElementById("imageloss").src = "assets/scissors_ellipse.png";

        show("loss");
        
        pc_score+=1;
        document.getElementById("comp_score").innerHTML = pc_score;
    }
    else
    {
        document.getElementById("image_tie").src = "assets/paper_ellipse.png";
        document.getElementById("imagetie").src = "assets/paper_ellipse.png";

        show("tie");
    }
}

function playagain_loss(){
    hide("loss");
    show("play");
}

function playagain_win(){
    hide("win");
    show("play");
}

function play_again(){
    hide("tie");
    show("play");
}

function hide(Id){
    document.getElementById(Id).style.display = "none";
}

function show(Id){
    document.getElementById(Id).style.display = "block";
}

function pc_random(){
    var randomNum = Math.floor(Math.random() * 3) + 1;
    return randomNum;
}

function open_rules(){
    show("ruler");
    show("cross");
}

function hide_rules(){
    hide("ruler");
    hide("cross");
}