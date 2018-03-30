# JsMonsterAttack
クラスでモンスターへの攻撃

## 処理
`player()`クラスの`attack()`メソッドを使って、モンスターへの攻撃を出力する。

## コード
```
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
```

## 出力結果  
```
スライムは勇者を攻撃した
スライムは戦士を攻撃した
スライムは魔法使いを攻撃した
```
  
## 開発環境
| 開発ツール |  |
|:-|:-|
| OS | Windows10 |
| 仮想化ソフト | Oracle VM VirtualBox 5.2 |
| 構築ソフト | Vagrant 2.0.2 |
| 仮想化上OS | CentOS 6.9 |
| SSHクライアント | PuTTY 0.6.8 |
| FTPクライアント | Cyberduck 6.3.5 |
| エディタ | Atom 1.24.0 |
| 開発言語 | Java Script |
| Js環境 | Node.js 8.10.0 |
