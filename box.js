class box {
   constructor(x, y, width, height){
       var options = {
           "restitution":0,
           "friction":0.2,
           "density":1.2
       }
       this.body = bodies.rectangle(x, y, width, height, options);
       this.width = width;
       this.height = height;


       world.add(world, this.body);

   }

   display(){
       var pos = this.body.position;
       rectMode(CENTER);
       fill(255);
       rect(pos.x, pos.y, this.width, this.height);
       pop();
   }


};