class Player {
  playerInfo (pName, pLevel) {
   this.name = pName;
   this.level = pLevel;
  }
  info (){
    console.log (`${this.name} has reached Level ${this.level}!`);
  }
     
}

const playerStep = new Player(`step`,1);
console.log(playerStep)
playerStep.info ();