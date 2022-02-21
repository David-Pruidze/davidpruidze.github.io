window.onhashchange = SwitchToStateFromURLHash;

function SwitchToStateFromURLHash(param) {
    const URLHash = window.location.hash;

    function changeRepresentation(state) {
        let title,
            prefix = state + ' - ';
        const stateElements = [
            {state: 'Menu', 'id': 'menu'},
            {state: 'Start', 'id': 'start'},
            {state: 'Records', 'id': 'recordsMenu'}
        ];

        stateElements.forEach(function (entry) {
            const showElement = entry.state === state;
            document.getElementById(entry.id).style.display = showElement ? 'block' : 'none';
        });

        if (state === 'Start') {
            prefix = 'Game - ';
        }
        title = prefix + 'Nemo';
        document.getElementsByTagName('title')[0].innerHTML = title;
    }

    let state = decodeURIComponent(URLHash.substr(1)),
        confirmFlag = true;

    switch (state) {
        case 'Menu':
            if (gameFunc.isPlaying()) {
                if (!(confirm('Внимание! Текущий прогресс игры будет потерян'))) {
                    confirmFlag = false;
                }
            }
            if (confirmFlag) {
                changeRepresentation(state);
                gameFunc.stopGame();
            } else {
                history.replaceState('Start');
            }
            reset();
            break;

        case 'Start':
            if (param === true) {
                window.location.hash = 'Menu';
            } else {
                changeRepresentation(state);
                gameFunc.startGame();

            }
            break;

        case 'Records':
            changeRepresentation(state);
            gameFunc.showRecords();
            reset();
            break;

        default:
            window.location.hash = '#Menu';
            break;
    }
}

window.onbeforeunload = beforeUnload;
const reloadMsg = 'В случае перезагрузки страницы прогресс игры будет утрачен';

function beforeUnload(e) {
    e = e || window.event;
    if (gameFunc.isPlaying()) {
        e.returnValue = reloadMsg;
        return reloadMsg;
    }
}

SwitchToStateFromURLHash(true);