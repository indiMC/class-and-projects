class Box{
    constructor(x,y,width,height){
        var options={
            isStatic:false,
            restitution:0.7,
            friction:0.3,
            dencity:0.5
        }
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x, y, width, height, options);
        World.add(world,this.body);
    }
    display(){
        var gpos=this.body.position;		
			push()
			translate(gpos.x, gpos.y);
            fill("pink");
			rectMode(CENTER)
			rect(0,0,this.width, this.height);
			pop()
    }
}