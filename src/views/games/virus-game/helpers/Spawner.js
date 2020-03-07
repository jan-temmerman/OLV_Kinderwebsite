export default class Spawner {
    constructor() {
        this.id = null;
    }

    start(action, timeout) {
        this.id = setInterval(action, timeout);
    }

    stop() {
        clearInterval(this.id);
    }
}
