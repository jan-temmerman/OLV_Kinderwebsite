const gameConfig = {
  window: {
    backgroundColor: 0x04162e,
    width: window.innerWidth,
    height: window.innerHeight,
    autoResize: true,
  },
  game: {
    hasStarted: false,
    playing: false,
    gameOver: false,
    maxViruses: 5,
    lives: 2,
    score: 0,
    level: 1,
    difficulty: {
      easy: {
        initViruses: 5,
        virusPerLevel: 2,
        scorePerLevel: 10,
        spawnInterval: 1000,
        buttonText: 'Makkelijk',
      },
      normal: {
        initViruses: 10,
        virusPerLevel: 4,
        scorePerLevel: 10,
        spawnInterval: 500,
        buttonText: 'Normaal',
      },
      hard: {
        initViruses: 15,
        virusPerLevel: 6,
        scorePerLevel: 10,
        spawnInterval: 300,
        buttonText: 'Moeilijk',
      },
    },
    startGame: () => {},
  },
};

export default gameConfig;
