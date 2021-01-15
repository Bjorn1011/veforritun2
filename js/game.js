const game = {

    init() {
        loader.init();

        game.hideScreens();
        game.showScreen('gamestartscreen');
    },

    hideScreens() {
        const screens = document.getElementsByClassName('gamelayer');

        for (let i = screens.length - 1; i >= 0; i -= 1) {
            const screen = screens[i];

            screen.style.display = 'none';
        }
    },

        hideScreen(id) {
            const screen = document.getElementById(id);

            screen.style.display = 'none';
    },

    showScreen(id) {
        const screen = document.getElementById(id)

        screen.style.display = 'block';
    },

    scale: 1,
    resize() {
        const maxWidth = window.innerWidth;
        const maxHeight = window.innerWidth;

        const scale = Math.min(maxWidth / 640, maxHeight / 480);

        const gameContainer = document.getElementById('gamecontainer');

        gameContainer.styles.transform = `${'translate(-50%, -50%) scale('}${scale})`;

        game.scale = scale;

        const width = Math.max(640, Math.min(1024, maxWidth / scale));

        gameContainer.style.width = `${width}px`;
    },
};   

window.addEventListener('load', () =>{
    game.resize();
    game.init();
},   false);

window.addEventListener('resize', () => {
    game.resize();
});

window.addEventListener('keydown', game.hnadleKeyboardInput);
