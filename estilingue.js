class PontoDeJogar {
  constructor(bodyA, pontoB, stffness, length) {
    this.bodyA = bodyA;
    this.pontoB = pontoB;
    this.stffness = stffness;
    this.length = length;

    var options = {
        bodyA: this.bodyA,
        pointB: this.pontoB,
        stffness: this.stffness,
        length: this.length,
    }
    this.pontodejogar = Constraint.create(options);
    World.add(world, this.pontodejogar);
}
flying() {
    this.pontodejogar.bodyA = null;
}
ataque() {
  this.pontodejogar.bodyA = this.bodyA;
}
display() {
    if (this.pontodejogar.bodyA != null) {
        push();
        strokeWeight(2);
        fill("black");
        line(this.bodyA.position.x, this.bodyA.position.y, this.pontoB.x, this.pontoB.y);
        pop();
    }
}
}