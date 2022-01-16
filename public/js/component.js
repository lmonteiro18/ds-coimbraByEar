let print = false;
let stable = false;
let previousRot = [];

let players = [];
let panners = [];

AFRAME.registerComponent('rotation-reader', {
  tick: function() {
    if (previousRot.length === 0 || previousRot[previousRot.length - 1] !== this.el.object3D.rotation._y) {
      print = true;
      //console.log(previousRot);
    }else{
      print = false;
    }
    previousRot.push(this.el.object3D.rotation._y);
    if(previousRot[previousRot.length - 1] === previousRot[previousRot.length - 2] && previousRot[previousRot.length - 1] !== previousRot[previousRot.length - 3]){
      stable = true;
    }else{
      stable = false;
    }
  }
});
