var personagem;
var wallGroup;
var persParado,persCaindo;
var persAndandoR,persAndandoL;


function preload(){
  persParado = loadImage("./imagens/persParado.png");
  persCaindo =  loadImage("./imagens/persCaindo.png");
  persAndandoR = loadAnimation("./imagens/persAndandoR.png","./imagens/persAndandoR-1.png");
  persAndandoL - loadAnimation("./imagens/persAndandoL.png","./imagens/persAndandoL-1.png");
}

function setup() {
createCanvas(windowWidth, windowHeight);
personagem = createSprite(windowWidth/2, 850, 20, 20);
personagem.addImage("parado",persParado);
personagem.shapeColor = "red";
wallGroup = new Group()
createMap();  

}

function draw() {
background("gray");

move(4);
console.log(personagem.x,personagem.y)
drawSprites();
}
