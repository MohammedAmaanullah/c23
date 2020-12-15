class Box{
    constructor(x,y,width,height){
        var options = {
            restitution :0.8
        }
        this.block = Bodies.rectangle(x,y,width,height,options);
        this.width = width
        this.height = height;
        World.add(world,this.block);
    }

    display(){
        var pos = this.block.position;
        var angle = this.block.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("white");
        rect(0, 0, this.width, this.height);
        pop();
    }
}