class Block{
    constructor(x, y) {

        var options = {
           
            restitution: 0.4,
            friction: 0.005
           
        }

        this.body = Bodies.rectangle(x, y, 30, 40, options);
        this.width = width;
        this.height = height;
        this.Visiblity = 255;
        World.add(world, this.body);

    }
    display(){

        if(this.body.speed < 3){
            rect(this.body.position.x, this.body.position.y, 30, 40);
        }
        else{
            World.remove(world, this.body);
            push();
            this.Visiblity = this.Visiblity - 5;
            tint(255, this.Visiblity);
            // rect(this.body.position.x, this.body.position.y, 30, 40);
            pop();
          }

    }
}