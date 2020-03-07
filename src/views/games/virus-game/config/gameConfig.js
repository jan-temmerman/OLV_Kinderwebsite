const gameConfig = {
    window: {
        backgroundColor: 0x04162e,
        width: window.innerWidth,
        height: window.innerHeight,
        autoResize: true,
    },
    hasStarted: false,
    playing: false,
    gameOver: false,
    maxViruses: 5,
    lives: 2,
    score: 0,
    level: 1,
    scorePerLevel: 10,
    startGame: () => {},
};

export default gameConfig;
