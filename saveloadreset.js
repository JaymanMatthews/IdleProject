'use strict';

function saveGame() {
    localStorage.setItem("gameSave", JSON.stringify(game));
};

function loadGame() {
    const savedGame = JSON.parse(localStorage.getItem("gameSave"));
    game = {...game, ...savedGame};
};

function resetGame() {
    if (confirm("Are you sure that you would like to reset your save?")) {
        var newGame = {};
        localStorage.setItem("gameSave", JSON.stringify(newGame));
        location.reload();
    }
};