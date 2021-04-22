var points=100;
var attackpoints=10;
const p=document.getElementById('info');

function attack(){
    var newpoints = points-attackpoints;

    if(newpoints<=0){
        p.innerHTML='game over';
        document.getElementById('at-c1').style.display="none";
        document.getElementById('reset0-btn').style.display="block";
    }else{
        points=newpoints;
        display();
    }
    
} 
function display(){
    p.innerHTML=`points: ${points}    attack:${attackpoints}`;
}
display();
function reset(){
    points=100;
    document.getElementById('at-c1').style.display="block";
    display(); 
    }

//luigi//

var points2=100;
var attackpoints2=10;
const par=document.getElementById('info2');

function attack2(){
    var newpoints = points2-attackpoints2;

    if(newpoints<=0){
        par.innerHTML='game over';
        document.getElementById('at-c2').style.display="none";
        document.getElementById('reset1-btn').style.display="block";
    }else{
        points2=newpoints;
        display2();
    }
    
} 
function display2(){
    par.innerHTML=`points:${points2}  attack:${attackpoints2}`;
}
display2();
function reset1(){
    points2=100;
    document.getElementById('at-c2').style.display="block";
    display2(); 
}
//thanks miss jimenez:p//