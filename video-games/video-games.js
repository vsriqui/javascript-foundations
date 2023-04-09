module.exports = { 
createPlayer,
createLevel,
findCoins,
defeatPlayer
}

function createPlayer(name,age, moveset) {
    return {
        name: name,
        age: age,
        moveset: moveset,
        
    }
};

function createLevel(name, players, lives, coins) {
    return {
        name: name,
        players: players,    
        lives: 3,
        coins: 0
    }

}

function findCoins(level, upCoins){
    
    level.coins += upCoins
    if (level.coins >= 100){
        level.lives += 1
        return level 
    } else {
    return level
    }
}

function defeatPlayer(level){
    level.lives -= 1
    if (!level.lives){
        return 'GAME OVER'
    } else {
    return level
    }
}
