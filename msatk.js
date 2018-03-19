(function() {
    'use strict'

    class Player {
        constructor(name) {
            this.name = name;
        }

        attack(enemy) {
            console.log(this.name + "は" + enemy + "を攻撃した");
        }
    }

    var team = [];
    team.push("勇者");
    team.push("戦士");
    team.push("魔法使い");

    var p = new Player("スライム");
    for (var person of team) {
        p.attack(person);
    }

})();
