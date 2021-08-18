var bgImg;
var canvas;
var cat, catImg1,catImg2,catImg3;
var mouse, mouseImg1,mouseImg2,mouseImg3;

function preload() {
    //precargar imagenes con la ruta de ubicación del archivo  con la siguiente sintaxis
    
    catImg1= loadAnimation("ce.png");
    mouseImg1= loadAnimation("si.png");
    mouseImg2= loadAnimation("simp.png");
    catImg2= loadAnimation("mamahuevo.png");
}

function setup(){
    canvas = createCanvas(1000,800);
    //crea a quí los sprites deL cat(GATO) AÑADE IMAGEN y escala
    

    cat = createSprite(870, 600);
    cat.addAnimation("si", catImg1)

  
    //crea a quí los sprites deL mouse (raton) AÑADE IMAGEN y escala
    mouse = createSprite(200,600)
    mouse.addAnimation("ce",mouseImg1)

}

function draw() {

    background(180);
//condicional 
    if(cat.x - mouse.x < (cat.width - mouse.width)/2)
    { 
        
    }  

    drawSprites();
}

//funcion
function keyPressed(){

    if(keyCode === LEFT_ARROW){
        mouse.addAnimation("yis",mouseImg2 );
        mouse.scale = 0.5;
        mouse.changeAnimation("yis");
        mouse.frameDelay = 25;

        cat.velocityX = -5;

        cat.addAnimation("siy", catImg2 );
        cat.scale = 0.1;
        cat.changeAnimation("siy");
        cat.frameDelay = 25;
    }
    if(keyCode === A){
        cat.velocityX = 0
    }
}