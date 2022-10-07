function createMap(){
    var wallPosition = [
    {x: 0,y: windowHeight/2,w: 20,h: windowHeight},
    {x: windowWidth,y: windowHeight/2,w: 20,h:windowHeight},
    {x: windowWidth/2,y: 0,w:windowWidth,h: 20},
    {x: windowWidth/2,y: windowHeight,w: windowWidth,h: 20},
    ] 
for(var c = 0;c < wallPosition.length;c++){
    var wall = createSprite(wallPosition[c].x,wallPosition[c].y,wallPosition[c].w,wallPosition[c].h);
    wall.shapeColor = "red";
    wallGroup.add(wall);
}
}