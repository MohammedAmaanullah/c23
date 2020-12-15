class Ground {
    constructor(x,y,width,height){
     var options = {
        isStatic : true
     }   
     this.earth = Bodies.rectangle(x,y,width,height,options);
     this.width = width;
     this.height = height;
     World.add(world, this.earth);
    }

    display(){
        var pos = this.earth.position;
        rectMode(CENTER);
        fill("yellow");
        rect(pos.x, pos.y, this.width, this.height);
    }
}