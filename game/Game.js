class Game {
    tickIdentifier = null;
    obstacleIdentifier = null;
    messageEl = document.getElementById('message');
    score = null;



    init(settings, status, board, snake, menu, food, obstacle) {
        this.settings = settings;
        this.status = status;
        this.board = board;
        this.snake = snake;
        this.menu = menu;
        this.food = food;
        this.obstacle = obstacle;

    }



    tick() {

        this.snake.performStep();

        if (this.isGameLost()) {
            return;
        }
        if (this.isGameWon()) {
            return;
        }
        if (this.board.isHeadOnFood()) {
            this.snake.increaseBody();
            this.food.setNewFood();
            this.score();

        }
        this.board.clearBoard();
        this.food.setFood();
        this.obstacle.setObstacle();
        this.board.renderSnake();
    }

    createObstacle() {
        this.obstacle.setNewObstacle();
    }


    /**
     * Метод проверяет проиграна ли игра, останавливает игру
     * в случае проигрыша, выводит сообщение о проигрыше.
     * @returns {boolean} если мы шагнули в стену, тогда
     * true, иначе false.
     */
    isGameLost() {
        if (this.board.isNextStepToObstacle(this.snake.body[0])) {
            clearInterval(this.tickIdentifier);
            clearInterval(this.obstacleIdentifier);
            this.setMessage('Вы проиграли');
            return true;
        }
        return false;
    }

    /**
     * Метод проверяет выиграна ли игра, останавливает игру,
     * выводит сообщение о выигрыше.
     * @returns {boolean} если длина змейки достигла длины нужной
     * для выигрыша, тогда true, иначе false.
     */
    isGameWon() {
        if (this.snake.body.length === this.settings.winLength) {
            clearInterval(this.tickIdentifier);
            clearInterval(this.obstacleIdentifier);
            this.setMessage('Вы выиграли');
            return true;
        }
        return false;
    }

    pressKeyHandler(event) {
        switch (event.key) {
            case "ArrowUp":
                this.snake.changeDirection('up');
                break;
            case "ArrowDown":
                this.snake.changeDirection('down');
                break;
            case "ArrowLeft":
                this.snake.changeDirection('left');
                break;
            case "ArrowRight":
                this.snake.changeDirection('right');
                break;
        }
    }

    run() {
        this.menu.addButtonsClickListeners(this.start.bind(this), this.pause.bind(this));
        document.addEventListener('keydown', this.pressKeyHandler.bind(this))
    }

    start() {
        console.log('start', this);
        this.score = this.createScore();
        this.score();
        if (!this.status.isPlaying) {

            this.status.setPlaying();
            this.tickIdentifier = setInterval(this.tick.bind(this), 1000 / this.settings.speed);
            this.obstacleIdentifier = setInterval(this.createObstacle.bind(this), 3000);
        }
    }
    createScore() {
        var scoreEl = document.getElementById('score');
        var counter = 0;

        function setScore() {
            scoreEl.innerText = `Score: ${counter}`;
            return counter++;
        }
        return setScore;
    }
    pause() {
        console.log('pause');
        if (this.status.isPlaying) {
            this.status.setPaused();
            clearInterval(this.tickIdentifier)
            clearInterval(this.obstacleIdentifier);
        }
    }

    setMessage(text) {
        this.messageEl.innerText = text;
    }


}