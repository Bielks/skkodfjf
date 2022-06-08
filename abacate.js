class Abacate {
    constructor(x, y, r){
        var options = {
            density:0.9,
            friction:0.1,
            restuition:0.2
        };
        this.x = x;
        this.y = y;
        this.r = r;
        this.image = loadImage('abacate.png');
        this.body = Bodies.circle(this.x, this.y, this.r, options);
        World.add(world, this.body);
    };
    display(){
        var pos = this.body.position;
        var angle = this.body.angles;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        ellipseMode(RADIUS);
        this.image(this.image, 0, 0, this.r*2, this.r*2);
        pop();
    }
}