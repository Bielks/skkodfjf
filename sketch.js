var trolador, troladorImg, troladorImg2, troladorImg3;
var atleticano, atleticanoImg, atleticanoImg2, atleticanoImg3;
var ground;
var abacate;
var estilingue;

function preload(){
  troladorImg = loadImage('troll face.png');
  //troladorImg2 = loadImage('ok.png');
  troladorImg3 = loadImage('LOL.png');

  atleticanoImg = loadImage('carinha.png');
  atleticanoImg2 = loadImage('poker face.png');
  atleticanoImg3 = loadImage('FU.png');
}

function setup() {
  createCanvas(800,400);

  ground = createSprite(400, 360, 800, 80);
  ground.shapeColor = 'black';

  atleticano = createSprite(650, 250);
  atleticano.addImage('atleticano sofredô HAHAHAHAHAHAHAHAAHAHAHAHAHAHAHAHAHAAHAHAH', atleticanoImg);
  atleticano.scale = 0.2;

  trolador = createSprite(150, 250);
  trolador.addImage('HIHIHIHIHIHIHIHIHIHIHIHIHIHIHIHIHIHIHIHIHIHIHIIHIHIHIHIHIHIHIH', troladorImg);
  trolador.scale = 0.2;

  abacate = new Abacate(100, 200, 50);

  estilingue = new PontoDeJogar(abacate.body, {x:100, y:200});

}

function draw() {
  background('white');  

  abacate.display();
  
  if(abacate.isTouching(ground)){
    abacate.destroy;
    //trolador.addImage('xora n coleguinha', troladorImg2);
    atleticano.addImage('._.', atleticanoImg2);
  }

  if(abacate.isTouching(atleticano))
  abacate.destroy;
  trolador.addImage('HAHAHAHAHAHHA', troladorImg3);
  atleticano.addImage('OTARIEDADE', atleticanoImg3);
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(stoneObj.body, {x:mouseX, y:mouseY});
}

function mouseReleased(){
  pontodejogar.flying();
}
