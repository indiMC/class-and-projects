class Player{
    constructor(x,y,width,height){
        var options={
            restitution:0.5,
            friction:0.5,
            dencity:1
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.image = loadImage("img/mormal.png");
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(200,200)
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();
    }
}