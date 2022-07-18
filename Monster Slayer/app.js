new Vue({
  el: "#app",
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    gameIsRunning: false,
    turns: [],
  },
  methods: {
    startGame() {
      this.gameIsRunning = true;
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.turns = [];
    },
    attack() {
      var damage = this.calculateDamage(3, 10);
      this.monsterHealth -= damage;
      this.turns.unshift({
        isPlayer: 1,
        text: "Player hits the monster for " + damage,
      });
      if (this.checkWin()) {
        return;
      }
      this.monsterAttacks();
    },
    specialAttack() {
      let damage = this.calculateDamage(10, 20);
      this.monsterHealth -= damage;
      this.turns.unshift({
        isPlayer: 1,
        text: "Player hits the monster hard for " + damage,
      });
      if (this.checkWin()) {
        return;
      }
      this.monsterAttacks();
    },
    monsterAttacks() {
      var damage = this.calculateDamage(5, 12);
      this.playerHealth -= damage;
      this.turns.unshift({
        isPlayer: 2,
        text: "Monster hits the player for " + damage,
      });
      this.checkWin();
    },
    heal() {
      // if (
      // this.playerHealth < 100 &&

      // fail
      // if (this.playerHealth < 100) {
      //   this.playerHealth = (this.playerHealth +=
      //     10) <= 100
      //       ? this.playerHealth += 10
      //       : (this.playerHealth +=(10-((this.playerHealth +=10)-100)) > 100 ? this.playerHealth +=(10-((this.playerHealth +=10)-100)) > 100 : this.playerHealth += 10);
      // fail
      // his.playerHealth = (this.playerHealth +=
      //   10) <= 100
      //     ? this.playerHealth += 10
      //     : (this.playerHealth + (this.playerHealth-(100-this.playerHealth))+10);

      // first soulotion
      let result = 100 - this.playerHealth;
      if (result < 10) {
        this.playerHealth += result;
        this.turns.unshift({
          isPlayer: 3,
          text: "Player heals for " + result,
        });
      } else {
        this.playerHealth += 10;
        this.turns.unshift({
          isPlayer: 3,
          text: "Player heals for 10",
        });
      }

      // second soulotion
      // if (this.playerHealth <= 90) {
      //   this.playerHealth += 10;
      // } else {
      //   this.playerHealth = 100;
      // }

      this.monsterAttacks;
    },
    giveUp() {
      this.gameIsRunning = false;
    },
    calculateDamage(min, max) {
      return Math.max(Math.floor(Math.random() * max) + 1, min);
    },
    checkWin() {
      if (this.monsterHealth <= 0) {
        if (confirm("You won! Start a new game?")) {
          this.startGame();
        } else {
          this.gameIsRunning = false;
        }
        return true;
      } else if (this.playerHealth <= 0) {
        if (confirm("You died! Start a new game?")) {
          this.startGame();
        } else {
          this.gameIsRunning = false;
        }
        return true;
      }
      return false;
    },
  },
});
