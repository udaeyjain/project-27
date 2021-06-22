class Bob{
constructor(x,y){
var options={
density:0.8
}
this.body=Bodies.circle(x,y,20,options);
World.add(world,this.body);
}

display(){
var pos=this.body.position;
push();
translate(pos.x,pos.y);
ellipseMode(CENTER);
fill("white")
ellipse(0,0,this.width);
pop();
}






}