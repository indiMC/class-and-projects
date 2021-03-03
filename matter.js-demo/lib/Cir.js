class Cir{
    constructor(x,y,r){
        var options={
            friction:0,
            dencity:0,
            restitution:1
        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.visiblity = 255;
        this.body = Bodies.circle(this.x,this.y,this.r,options);
        World.add(world,this.body);
    }
    display(){
        if(this.body.speed <2) {
            push();
            var pos =  this.body.position;
            translate(pos.x,pos.y);
            fill("green");
            stroke(0);
            ellipseMode(CENTER);
            ellipse(0,0,this.r,this.r)
            pop();
          }else{
        World.remove(world,this.body)
        
          }
    }
}