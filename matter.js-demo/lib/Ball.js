class Ball{
    constructor(x,y,r){
        var options={
            restitution:1,
            friction:0.1,
            dencity:0.1
        }
        this.body = Bodies.circle(x,y,r,options);
        this.x=x;
        this.y=y;
        this.r=r;
        World.add(world,this.body);
    }
    display(){
        push();
        var pos = this.body.position;
        translate(pos.x,pos.y);
        fill("yellow");
        stroke(0);
        strokeWeight(5);
        ellipseMode(CENTER);
        ellipse(0,0,this.r);
    }
}