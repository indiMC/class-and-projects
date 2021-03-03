class Ground {
    constructor() {
      var options = {
          isStatic: true
      }
      this.ground = Bodies.rectangle(960,929,1920,20,options);      
      World.add(world, this.ground);
    }

    display(){     
      strokeWeight(2);
      fill("black");
      rectMode(CENTER);
      rect(this.ground.position.x,this.ground.position.y,1920,20);
    }
  }