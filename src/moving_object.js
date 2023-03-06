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
}

module.exports = MovingObject;