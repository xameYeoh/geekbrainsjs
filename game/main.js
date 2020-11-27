window.addEventListener('load', () => {
    const settings = new Settings();
    const status = new Status();
    const board = new Board();
    const snake = new Snake();
    const food = new Food();
    const menu = new Menu();
    const game = new Game();
    const obstacle = new Obstacle();

    settings.init({
        speed: 5,
        winLength: 5
    });
    board.init(settings, snake);
    food.init(settings, snake, board);
    game.init(settings, status, board, snake, menu, food, obstacle);
    obstacle.init(settings, snake, board);
    snake.init(settings);


    board.renderBoard();
    // render snake
    board.renderSnake();
    // render food
    food.setNewFood();
    // board.renderFood();
    obstacle.setNewObstacle();

    // start game
    game.run();

})