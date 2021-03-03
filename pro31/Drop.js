class Drop {
    constructor(x, y, width, height) {
        var options={
         restitution: 1,
         friction: 0.01
      };
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world,this.body);
    }
    display(){
      var pos = this.body.position;
      fill("blue");
      rectMode(CENTER);
      rect(pos.x, pos.y, this.width, this.height);
    }
     update(){
       if(this.body.position.y>1080){
          Matter.Body.setPosition(this.body,{x: random(0,1920),
          y: random(-10,1080)
          });
        }
     }
  }