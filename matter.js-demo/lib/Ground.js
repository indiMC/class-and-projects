class Ground{
    constructor(x,y,width,height,angle){
        var options={
            isStatic:true
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
            var angle = this.body.angle;
			translate(gpos.x, gpos.y);
            rotate(angle);
            fill(0);
			rectMode(CENTER)
			rect(0,0,this.width, this.height);
			pop()
    }
}