class Umla {
    constructor(){
         var options = {
              isStatic: true,
              restitution: 0.5
         };
         var radius = 25;
         this.body = Matter.Bodies.circle(620,1080/2, radius, options);
         this.width = radius;
         this.height = radius;
         World.add(world, this.body);
    }
    display(){
         var pos = this.body.position;
         image(manimg, pos.x-90, pos.y-20,175,175);

    }
}