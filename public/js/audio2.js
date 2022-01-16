//------------------------------------------A-FRAME------------------------------------------
let print = false;
AFRAME.registerComponent('rotation-reader', {
  tick: function() {
    // `this.el` is the element.
    // `object3D` is the three.js object.

    // `rotation` is a three.js Euler using radians. `quaternion` also available.
    document.addEventListener("keydown", function(evt) {
      if (evt.keyCode == "32") {
        print = true;
      }
    });

    if (print === true) {
      let cameraRot = this.el.object3D.rotation._y;
      console.log(cameraRot);
      let physicalSounds = document.querySelectorAll(".physicalSound");
      physicalSounds.forEach((sound, i) => {
        let maxPan = 1;
        let minPan = -1;

        let maxRot = 0;
        let minRot = -6.29;

        let panMapping = (cameraRot - minRot) / (maxRot - minRot);
        let outputPan = panMapping * (maxPan - minPan) + minPan;
        //console.log(outputPan);
        //console.log(cameraRot);

        if (i === 0) {
          let relativeRotation = sound.object3D.rotation.y - 6.29 / 2 - cameraRot;
          if (relativeRotation > 0) {

          }
          console.log(relativeRotation % 6.29);
        }
      });
      print = false;
    }
  }
});

//------------------------------------------TONE.JS------------------------------------------
const files = [
  "audio/pessoas_falar.mp3", "audio/passaros.mp3", "audio/mexer_agua.mp3", "audio/cascata_agua_01.mp3", "audio/carros.mp3"
];

let botoesAmplitude = document.querySelectorAll(".amplitude");
let botoesFrequencia = document.querySelectorAll(".frequencia");
let botoesReverberacao = document.querySelectorAll(".reverberacao");
let botoesDistorcao = document.querySelectorAll(".distorcao");

let aboutChanges = {};

let loadedCount = 0;
let players = [];

for (let i = 0; i < files.length; i++) {
  let player = new Tone.Player(files[i], function() {
    console.log("Audio loaded");
    loadedCount++
  });
  player.autostart = true;
  player.loop = true;
  player.toDestination();
  players.push(player);

  botoesAmplitude[i].addEventListener("click", () => {
    console.log("Amplitude");
    aboutChanges = {
      param: "amplitude",
      index: i
    }
  });
  botoesFrequencia[i].addEventListener("click", () => {
    console.log("Frequência");
    aboutChanges = {
      param: "frequencia",
      index: i
    }
  });
  botoesReverberacao[i].addEventListener("click", () => {
    console.log("Reverberação");
    aboutChanges = {
      param: "reverberacao",
      index: i
    }
  });
  botoesDistorcao[i].addEventListener("click", () => {
    console.log("Distorção");
    aboutChanges = {
      param: "distorcao",
      index: i
    }
  });
}
//transpose_by = 0 // up 7 half steps, -7 would be down 7 half steps

//let playButton = document.querySelector(".play");
//playButton.addEventListener("click", () => Tone.start());

let noteButtons = document.querySelectorAll(".note");

let shifts = ["-6", "-5", "-4", "-3", "-2", "-1", "0", "1", "2", "3", "4", "5", "6"];
let amplitudeValues = [0, 0, 0, 0, 0, 0];
let shiftIndexes = [6, 6, 6, 6, 6, 6];
let reverbValues = [0, 0, 0, 0, 0, 0];
let distortionValues = [1, 1, 1, 1, 1, 1];

document.addEventListener("keydown", changeParams);

function startAudio() {
  if (loadedCount >= files.length) {
    players.forEach((player, i) => {
      let transpose_by = shifts[shiftIndexes[i]];
      console.log(transpose_by);

      pitch_shift = new Tone.PitchShift({
        pitch: transpose_by
      }).toMaster();

      player.disconnect();
      player.connect(pitch_shift);
      player.volume.value = amplitudeValues[i];

      player.start();
    });
  }
}

function changeParams(evt) {
  switch (aboutChanges.param) {
    case "amplitude":
      let previousAmplitude = amplitudeValues[aboutChanges.index];
      let newAmplitude = previousAmplitude;
      if (evt.keyCode == "37") { //seta esquerda -> Diminuir
        if (previousAmplitude > -60) {
          amplitudeValues[aboutChanges.index] = amplitudeValues[aboutChanges.index] - 1;
          newAmplitude = amplitudeValues[aboutChanges.index];
          console.log("Desceu Volume: " + newAmplitude);
        }
      } else if (evt.keyCode == "39") { //seta direita -> Aumentar
        if (previousAmplitude < 6) {
          amplitudeValues[aboutChanges.index] = amplitudeValues[aboutChanges.index] + 1;
          newAmplitude = amplitudeValues[aboutChanges.index];
          console.log("Subiu Volume: " + newAmplitude);
        }
      }

      if (previousAmplitude !== newAmplitude) {
        players[aboutChanges.index].volume.value = newAmplitude;
      }
      break;

    case "frequencia":
      let previousShiftIndex = shiftIndexes[aboutChanges.index];
      let newShiftIndex = previousShiftIndex;
      if (evt.keyCode == "37") { //seta esquerda -> Diminuir
        if (previousShiftIndex > 0) {
          shiftIndexes[aboutChanges.index] = shiftIndexes[aboutChanges.index] - 1;
          newShiftIndex = shiftIndexes[aboutChanges.index];
          console.log("Desceu Pitch: " + newShiftIndex);
        }
      } else if (evt.keyCode == "39") { //seta direita -> Aumentar
        if (previousShiftIndex < shifts.length - 1) {
          shiftIndexes[aboutChanges.index] = shiftIndexes[aboutChanges.index] + 1;
          newShiftIndex = shiftIndexes[aboutChanges.index];
          console.log("Subiu Pitch: " + newShiftIndex);
        }
      }

      if (previousShiftIndex !== newShiftIndex) {
        //players[aboutChanges.index].shift = shifts[newShiftIndex];
        let transpose_by = shifts[newShiftIndex];
        console.log(transpose_by);

        pitch_shift = new Tone.PitchShift({
          pitch: transpose_by
        }).toDestination();

        players[aboutChanges.index].disconnect();
        players[aboutChanges.index].connect(pitch_shift);

        players[aboutChanges.index].start();
      }
      break;

    case "reverberacao":
      let previousReverb = reverbValues[aboutChanges.index];
      let newReverb = previousReverb;
      if (evt.keyCode == "37") { //seta esquerda -> Diminuir
        if (previousReverb > 0.05) {
          reverbValues[aboutChanges.index] = reverbValues[aboutChanges.index] - 0.05;
          newReverb = reverbValues[aboutChanges.index];
          console.log("Desceu Reverb: " + newReverb);
        }
      } else if (evt.keyCode == "39") { //seta direita -> Aumentar
        if (previousReverb < 0.95) {
          reverbValues[aboutChanges.index] = reverbValues[aboutChanges.index] + 0.05;
          newReverb = reverbValues[aboutChanges.index];
          console.log("Subiu Reverb: " + newReverb);
        }
      }

      if (previousReverb !== newReverb) {
        reverb = new Tone.Reverb({
          decay: 2,
          wet: newReverb
        }).toDestination();

        players[aboutChanges.index].disconnect();
        players[aboutChanges.index].connect(reverb);

        players[aboutChanges.index].start();
      }
      break;

    case "distorcao":
      let previousDistortion = distortionValues[aboutChanges.index];
      let newDistortion = previousDistortion;
      if (evt.keyCode == "37") { //seta esquerda -> Diminuir
        if (previousDistortion > 0.2) {
          distortionValues[aboutChanges.index] = distortionValues[aboutChanges.index] - 0.1;
          newDistortion = distortionValues[aboutChanges.index];
          console.log("Desceu Distorção: " + newDistortion);
        }
      } else if (evt.keyCode == "39") { //seta direita -> Aumentar
        if (previousDistortion < 5) {
          distortionValues[aboutChanges.index] = distortionValues[aboutChanges.index] + 0.1;
          newDistortion = distortionValues[aboutChanges.index];
          console.log("Subiu Distorção: " + newDistortion);
        }
      }

      if (previousDistortion !== newDistortion) {
        players[aboutChanges.index].playbackRate = newDistortion;
      }
      break;

    default:
  }
}
