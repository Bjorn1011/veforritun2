const loader = {
    loaded: true,
    loadedCount: 0,
    totalCount: 0,

    init() {
        let mp3Support;
        let oggSupport;
        const audio = document.createElement('audio');

        if (audio.canPlayType) {
            mp3Support = audio.canPlayType('audio/mpeg') !== '';
            oggSupport = audio.canPlayType('audio/ogg; codecs="') !== '';
        } else{
            mp3Support = false;
            oggSupport = false;
        }

        if (oggSupport) {
            loader.soundFileExtn = '.ogg';
        } else if (mp3Support) {
            loader.soundFileExtn = '.mp3';
        } else{
            loader.soundFileExtn = undefined;
        }
    },

    loadImage(url) {
        this.loaded = false;
        this.totalCount += 1;

        Gamepad.showScreen('loadingscreen');
        
        const image = new Image();

        image.addEventListener('load', loader.itemLoaded, false);
        image.src = url;

        return image;
    },

    soundFileExtn: '.ogg',

    loadSound(url) {
        this.loaded = false;
        this.totalCount += 1;

        Gamepad.showScreen('loadingscreen');

        const audio = new Audio();

        audio.addEventListener('canplaythrough', loader.itemLoaded, false);
        audio.src = url + loader.soundFileExtn;

        return audio;
    },

    itemLoaded(ev) {
        ev.target.removeEventListener(ev.type, loader.itemLoaded, false);

        loader.loadedCount += 1;

        document.getElementById('loadingmessage').innerHTML = `loaded ${loader.loadedCount} of ${loader.totalCount}`;

        if (loader.loadedCount === loader.totalCount) {


        loader.loaded = true;
        loader.loadedCount = 0;
        loader.totalCount = 0;

        Game.hideScreen('loadingscreen');

        if (loader.onload) {
            loader.onload();
            loader.onload = undefined;
        }
        }
    }
}
