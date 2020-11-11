class Chain {
constructor(bodyA,bodyB){
    var options = {
        bodyA: bodyA,
        bodyB: bodyB,
        stiffness: 0.10,
        length: 30
    }

    this.Chain = Constraint.create(options);
    World.add(world, this.Chain);

}
    display() {
        var posA = this.Chain.bodyA.position
        var posB = this.Chain.bodyB.position
        strokeWeight(4);
        line(posA.x,posA.y, posB.x, posB.y);
    }
        
    

}