const singleplayer = {

    start() {
        game.hideScreens();

        singleplayer.currentLevel = 0;

        singleplayer.initLevel();
    },

    initLevel() {
        game.type = 'singleplayer'
        game.team = 'blue';

        const enterMissionButton = document.getElementById('entermission');

        enterMissionButton.disabled = true;

        const level = levles.singleplayer[singleplayer.currentlevel];
        game.loadLevelData(level);

        game.offsetX = level.startX * game.gridSize
        game.offsetY = lavel.startY * game.gridSize;

        loader.onload = function () {
            enterMissionButton.disabled = false;
        };

        this.showMissionBriefing(level.briefing);
    },

    
    showMissionBriefing(briefing) {
        const missionBreifingText = document.getElementById('missionbriefing');

        missionBreifingText.innerHTML = briefing.replace(/\n/g, '<br><br>');

        game.showScreen('missionbriefingscreen');
    },

    exit() {
        game.hideScreens();
        game.showScreen('gamestartscreen');
    },

    play() {
        game.animationLoop();

        game.animationInterval = setInterval(game.animationLoop, game.animationTimeout);

        game.start();
    },

    
};