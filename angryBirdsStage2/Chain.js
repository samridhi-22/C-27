class Chain {
    constructor(body1,body2){
        var options={
            bodyA:body1,
            bodyB:body2,
            length:100,
            stiffness:0.04
        }
        this.chain=Constraint.create(options);
        World.add(world,this.chain);
    }
    display(){
        push();
        stroke("white");
        strokeWeight(5);
line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.bodyB.position.x,this.chain.bodyB.position.y);
pop();
    }
}