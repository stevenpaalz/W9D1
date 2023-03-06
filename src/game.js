import Asteroid from "./asteroid";

class Game {
    static DIM_X = 1000;
    static DIM_Y = 600;
    static NUM_ASTEROIDS = 30;

    constructor() {
        this.asteroids = this.addAsteroids();
    }

    randomPosition() {
        const x = Math.floor(Math.random() * 1001);
        const y = Math.floor(Math.random() * 601);
        return [x, y];
    }

    addAsteroids() {
        const newAsteroids = [];
        for (let i = 0; i < Game.NUM_ASTEROIDS; i++) {
            newAsteroids.push(new Asteroid({pos: this.randomPosition()}));
        }
        return newAsteroids;
    }

    draw(ctx) {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        this.asteroids.forEach(asteroid => asteroid.draw(ctx));
    }

    moveObjects() {
        this.asteroids.forEach(asteroid => asteroid.move());
    }
}

export default Game;