import * as Util from "./util.js";
import MovingObject from "./moving_object.js";

class Asteroid extends MovingObject {
    static RADIUS = 25;
    static COLOR = "gray";
    constructor(options) {
        super({pos: options["pos"], color: Asteroid.COLOR, radius: Asteroid.RADIUS, vel: Util.randomVec(Asteroid.RADIUS)});
    }
}

export default Asteroid;