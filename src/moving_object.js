class MovingObject {
    constructor(options) {
        this.pos = options["pos"];
        this.vel = options["vel"];
        this.radius = options["radius"];
        this.color = options["color"];
    }

    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(...this.pos, this.radius, 0, (2 * Math.PI));
        ctx.closePath();
        ctx.fill();
    }

    move() {
        this.pos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]];
    }
}

export default MovingObject;
// module.exports = MovingObject;