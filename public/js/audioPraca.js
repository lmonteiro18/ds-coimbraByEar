//Notas Musicais
let escalas = [
  //escalas maiores
  [{
      do: ["C1", "D1", "E1", "F1", "G1", "A1", "B1", "C1"],
      re: ["D1", "E1", "F#1", "G1", "A1", "B1", "C#2", "D2"],
      mi: ["E1", "F#1", "G#1", "A1", "B1", "C#2", "D#2", "E2"],
      fa: ["F1", "G1", "A1", "Bb1", "C2", "D2", "E2", "F2"],
      sol: ["G1", "A1", "B1", "C2", "D2", "E2", "F#2", "G2"],
      la: ["A1", "B1", "C#2", "D2", "E2", "F#2", "G#2", "A2"],
      si: ["B1", "C#2", "D#2", "E2", "F#2", "G#2", "A#2", "B2"]
    },
    {
      do: ["C2", "D2", "E2", "F2", "G2", "A2", "B2", "C3"],
      re: ["D2", "E2", "F#2", "G2", "A2", "B2", "C#3", "D3"],
      mi: ["E2", "F#2", "G#2", "A2", "B2", "C#3", "D#3", "E3"],
      fa: ["F2", "G2", "A2", "Bb2", "C3", "D3", "E3", "F3"],
      sol: ["G2", "A2", "B2", "C3", "D3", "E3", "F#3", "G3"],
      la: ["A2", "B2", "C#3", "D3", "E3", "F#3", "G#3", "A3"],
      si: ["B2", "C#3", "D#3", "E3", "F#3", "G#3", "A#3", "B3"]
    },
    {
      do: ["C3", "D3", "E3", "F3", "G3", "A3", "B3", "C4"],
      re: ["D3", "E3", "F#3", "G3", "A3", "B3", "C#4", "D4"],
      mi: ["E3", "F#3", "G#3", "A3", "B3", "C#4", "D#4", "E4"],
      fa: ["F3", "G3", "A3", "Bb3", "C4", "D4", "E4", "F4"],
      sol: ["G3", "A3", "B3", "C4", "D4", "E4", "F#4", "G4"],
      la: ["A3", "B3", "C#4", "D4", "E4", "F#4", "G#4", "A4"],
      si: ["B3", "C#4", "D#4", "E4", "F#4", "G#4", "A#4", "B4"]
    },
    {
      do: ["C4", "D4", "E4", "F4", "G4", "A4", "B4", "C5"],
      re: ["D4", "E4", "F#4", "G4", "A4", "B4", "C#5", "D5"],
      mi: ["E4", "F#4", "G#4", "A4", "B4", "C#5", "D#5", "E5"],
      fa: ["F4", "G4", "A4", "Bb4", "C5", "D5", "E5", "F5"],
      sol: ["G4", "A4", "B4", "C5", "D5", "E5", "F#5", "G5"],
      la: ["A4", "B4", "C#5", "D5", "E5", "F#5", "G#5", "A5"],
      si: ["B4", "C#5", "D#5", "E5", "F#5", "G#5", "A#5", "B5"]
    },
    {
      do: ["C5", "D5", "E5", "F5", "G5", "A5", "B5", "C6"],
      re: ["D5", "E5", "F#5", "G5", "A5", "B5", "C#6", "D6"],
      mi: ["E5", "F#5", "G#5", "A5", "B5", "C#6", "D#6", "E6"],
      fa: ["F5", "G5", "A5", "Bb5", "C6", "D6", "E6", "F6"],
      sol: ["G5", "A5", "B5", "C6", "D6", "E6", "F#6", "G6"],
      la: ["A5", "B5", "C#6", "D6", "E6", "F#6", "G#6", "A6"],
      si: ["B5", "C#6", "D#6", "E6", "F#6", "G#6", "A#6", "B6"]
    }
  ],
  //escalas menores
  [{
      do: ["C1", "D1", "Eb1", "F1", "G1", "Ab1", "Bb1", "C2"],
      re: ["D1", "E1", "F1", "G1", "A1", "Bb1", "C2", "D2"],
      mi: ["E1", "F#1", "G1", "A1", "B1", "C2", "D2", "E2"],
      fa: ["F1", "G1", "Ab1", "Bb1", "C2", "Db2", "Eb2", "F2"],
      sol: ["G1", "A1", "Bb1", "C2", "D2", "Eb2", "F2", "G2"],
      la: ["A1", "B1", "C2", "D2", "E2", "F2", "G2", "A2"],
      si: ["B1", "C#2", "D2", "E2", "F#2", "G2", "A2", "B2"]
    },
    {
      do: ["C2", "D2", "Eb2", "F2", "G2", "Ab2", "Bb2", "C3"],
      re: ["D2", "E2", "F2", "G2", "A2", "Bb2", "C3", "D3"],
      mi: ["E2", "F#2", "G2", "A2", "B2", "C3", "D3", "E3"],
      fa: ["F2", "G2", "Ab2", "Bb2", "C3", "Db3", "Eb3", "F3"],
      sol: ["G2", "A2", "Bb2", "C3", "D3", "Eb3", "F3", "G3"],
      la: ["A2", "B2", "C3", "D3", "E3", "F3", "G3", "A3"],
      si: ["B2", "C#3", "D3", "E3", "F#3", "G3", "A3", "B3"]
    },
    {
      do: ["C3", "D3", "Eb3", "F3", "G3", "Ab3", "Bb3", "C4"],
      re: ["D3", "E3", "F3", "G3", "A3", "Bb3", "C4", "D4"],
      mi: ["E3", "F#3", "G3", "A3", "B3", "C4", "D4", "E4"],
      fa: ["F3", "G3", "Ab3", "Bb3", "C4", "Db4", "Eb4", "F4"],
      sol: ["G3", "A3", "Bb3", "C4", "D4", "Eb4", "F4", "G4"],
      la: ["A3", "B3", "C4", "D4", "E4", "F4", "G4", "A4"],
      si: ["B3", "C#4", "D4", "E4", "F#4", "G4", "A4", "B4"]
    },
    {
      do: ["C4", "D4", "Eb4", "F4", "G4", "Ab4", "Bb4", "C5"],
      re: ["D4", "E4", "F4", "G4", "A4", "Bb4", "C5", "D5"],
      mi: ["E4", "F#4", "G4", "A4", "B4", "C5", "D5", "E5"],
      fa: ["F4", "G4", "Ab4", "Bb4", "C5", "Db5", "Eb5", "F5"],
      sol: ["G4", "A4", "Bb4", "C5", "D5", "Eb5", "F5", "G5"],
      la: ["A4", "B4", "C5", "D5", "E5", "F5", "G5", "A5"],
      si: ["B4", "C#5", "D5", "E5", "F#5", "G5", "A5", "B5"]
    },
    {
      do: ["C5", "D5", "Eb5", "F5", "G5", "Ab5", "Bb5", "C6"],
      re: ["D5", "E5", "F5", "G5", "A5", "Bb5", "C6", "D6"],
      mi: ["E5", "F#5", "G5", "A5", "B5", "C6", "D6", "E6"],
      fa: ["F5", "G5", "Ab5", "Bb5", "C6", "Db6", "Eb6", "F6"],
      sol: ["G5", "A5", "Bb5", "C6", "D6", "Eb6", "F6", "G6"],
      la: ["A5", "B5", "C6", "D6", "E6", "F6", "G6", "A6"],
      si: ["B5", "C#6", "D6", "E6", "F#6", "G6", "A6", "B6"]
    }
  ]
];

let notas1 = [];
let notas2 = [];
let notas3 = [];

let audioOn = false;
let print = false;
let previousRot = [];

let botoesAmplitude = document.querySelectorAll(".amplitude");
let botoesSolo = document.querySelectorAll(".solo");
let botoesReverberacao = document.querySelectorAll(".reverberacao");
let botoesDistorcao = document.querySelectorAll(".distorcao");
let botoesPan = document.querySelectorAll(".pan");

let aboutChanges = {};

let loadedCount = 0;

let players = [];
let panners = [];
const files = [
  "audio/pessoas_falar.mp3", "audio/passaros.mp3", "audio/mexer_agua.mp3",
  "audio/cascata_agua_01.mp3", "audio/carros.mp3"
];
const files2 = [
  "audio/pessoas_falar_baixa.mp3", "audio/musica_baixa.mp3", "audio/repuxo.mp3",
  "audio/carros_baixa.mp3", "audio/sino.mp3"
];

for (let i = 0; i < files.length; i++) {
  let player = new Tone.Player(files[i], function() {
    console.log("Audio loaded");
    loadedCount++
  });
  player.autostart = true;
  player.loop = true;
  player.toDestination();
  players.push(player);
}

for (let i = 0; i < files.length; i++) {
  botoesAmplitude[i].addEventListener("click", () => {
    console.log("Amplitude");
    aboutChanges = {
      param: "amplitude",
      index: i
    }
  });
  botoesSolo[i].addEventListener("click", () => {
    console.log("Solo");
    aboutChanges = {
      param: "solo",
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

let noteButtons = document.querySelectorAll(".note");

let shifts = ["-6", "-5", "-4", "-3", "-2", "-1", "0", "1", "2", "3", "4", "5", "6"];
let amplitudeValues = [0, 0, 0, 0, 0];
let shiftIndexes = [6, 6, 6, 6, 6];
let reverbValues = [0, 0, 0, 0, 0];
let distortionValues = [1, 1, 1, 1, 1];
let panValues = [0, 0, 0, 0, 0];
let panOffset = [0, 0, 0, 0, 0];

document.addEventListener("keydown", changeParams);

AFRAME.registerComponent('rotation-reader', {
  tick: function() {
    if (previousRot.length === 0 || previousRot[previousRot.length - 1] !== this.el.object3D.rotation._y) {
      print = true;
    }
    previousRot.push(this.el.object3D.rotation._y);

    if (print === true) {
      let cameraRot = this.el.object3D.rotation._y;
      let physicalSounds = document.querySelectorAll(".physicalSound");
      physicalSounds.forEach((sound, i) => {
        let relativeRotation = sound.object3D.rotation.y - 6.29 / 2;
        let rotationDif = relativeRotation - (cameraRot % 6.29);
        let min1 = -6.29;
        let max1 = 0;
        let reading;
        //ajuste dos parâmetros que ultrapassam os limites
        if (rotationDif > max1) {
          reading = min1 + rotationDif;
        } else if (rotationDif < min1) {
          reading = rotationDif + 6.29;
        } else {
          reading = rotationDif;
        }
        //Pan mapping
        let divisaoQuadrantes = 6.29 / 4;
        let maxPan;
        let minPan;
        let maxReading;
        let minReading;
        if (reading >= min1 && reading <= min1 + divisaoQuadrantes) {
          maxPan = -1;
          minPan = 0;
          maxReading = min1 + divisaoQuadrantes;
          minReading = min1;
          //console.log("First");
        } else if (reading >= min1 + divisaoQuadrantes && reading <= min1 + divisaoQuadrantes * 2) {
          maxPan = 0;
          minPan = -1;
          maxReading = min1 + divisaoQuadrantes * 2;
          minReading = min1 + divisaoQuadrantes;
          //console.log("Second");
        } else if (reading >= min1 + divisaoQuadrantes * 2 && reading <= min1 + divisaoQuadrantes * 3) {
          maxPan = 1;
          minPan = 0;
          maxReading = min1 + divisaoQuadrantes * 3;
          minReading = min1 + divisaoQuadrantes * 2;
          //console.log("Third");
        } else {
          maxPan = 0;
          minPan = 1;
          maxReading = max1;
          minReading = min1 + divisaoQuadrantes * 3;
          //console.log("Fourth");
        }
        let panMapping = (reading - minReading) / (maxReading - minReading);
        let outputPan = panMapping * (maxPan - minPan) + minPan;
        //console.log("Pan: " + outputPan);
        //console.log("rotDif" + rotationDif);

        panValues[i] = outputPan;
      });
      print = false;
    }
    if (previousRot.length >= 2) {
      if (audioOn === true && previousRot[previousRot.length - 1] === this.el.object3D.rotation._y && previousRot[previousRot.length - 2] !== previousRot[previousRot.length - 1]) {
        //console.log("Changed Pan");
        applyPan();
      }
    }
  }
});

let startButton = document.getElementById("StartButton");
startButton.addEventListener("click", async () => {
  await Tone.start()
  console.log('Audio is ready');
  if (loadedCount >= files.length) {
    players.forEach((player, i) => {
      let transpose_by = shifts[shiftIndexes[i]];

      pitch_shift = new Tone.PitchShift({
        pitch: transpose_by
      }).toDestination();

      let panner = new Tone.Panner().toDestination();
      panner.pan.setValueAtTime(panValues[i], 0);

      player.disconnect();
      player.connect(pitch_shift);
      player.connect(panner);

      player.start();
    });
    let synthOptions = {
      oscillator: {
        volume: 0
      },
      envelope: {
        attack: 1,
        decay: 0.5,
        sustain: 1,
        release: 1
      }
    };
    let synth1 = new Tone.Synth(synthOptions).toDestination();
    let synth2 = new Tone.Synth(synthOptions).toDestination();
    let synth3 = new Tone.Synth(synthOptions).toDestination();

    let random1 = Math.floor(Math.random() * (1 - 0 + 1)) + 0;
    let random2 = Math.floor(Math.random() * (3 - 2 + 1)) + 2;
    let random3 = Math.floor(Math.random() * (6 - 0 + 1)) + 0;
    notas1 = [];
    notas2 = [];
    notas3 = [];
    for (let j = 0; j < 20; j++) {
      let random4 = Math.floor(Math.random() * (7 - 0 + 1)) + 0;
      let random5 = Math.floor(Math.random() * (7 - 0 + 1)) + 0;
      let random6 = Math.floor(Math.random() * (7 - 0 + 1)) + 0;
      if (random3 === 0) {
        notas1.push(escalas[random1][random2].do[random4]);
        notas2.push(escalas[random1][random2].do[random5]);
        notas3.push(escalas[random1][random2].do[random6]);
      } else if (random3 === 1) {
        notas1.push(escalas[random1][random2].re[random4]);
        notas2.push(escalas[random1][random2].re[random5]);
        notas3.push(escalas[random1][random2].re[random6]);
      } else if (random3 === 2) {
        notas1.push(escalas[random1][random2].mi[random4]);
        notas2.push(escalas[random1][random2].mi[random5]);
        notas3.push(escalas[random1][random2].mi[random6]);
      } else if (random3 === 3) {
        notas1.push(escalas[random1][random2].fa[random4]);
        notas2.push(escalas[random1][random2].fa[random5]);
        notas3.push(escalas[random1][random2].fa[random6]);
      } else if (random3 === 4) {
        notas1.push(escalas[random1][random2].sol[random4]);
        notas2.push(escalas[random1][random2].sol[random5]);
        notas3.push(escalas[random1][random2].sol[random6]);
      } else if (random3 === 5) {
        notas1.push(escalas[random1][random2].la[random4]);
        notas2.push(escalas[random1][random2].la[random5]);
        notas3.push(escalas[random1][random2].la[random6]);
      } else if (random3 === 6) {
        notas1.push(escalas[random1][random2].si[random4]);
        notas2.push(escalas[random1][random2].si[random5]);
        notas3.push(escalas[random1][random2].si[random6]);
      }
    }
    console.log(notas1, notas2, notas3);
    let synthPart1 = new Tone.Sequence(
      function(time, note) {
        synth1.triggerAttackRelease(note, time);
        console.log("A note");
      },
      notas1,
      "2n"
    );
    let synthPart2 = new Tone.Sequence(
      function(time, note) {
        synths2.triggerAttackRelease(note, time);
        console.log("A note");
      },
      notas2,
      "2n"
    );
    let synthPart3 = new Tone.Sequence(
      function(time, note) {
        synth3.triggerAttackRelease(note, time);
        console.log("A note");
      },
      notas3,
      "2n"
    );
    synthPart1.start();
    synthPart2.start();
    synthPart3.start();
    audioOn = true;
  }
});

function applyPan() {
  if (audioOn === true) {
    players.forEach(function(player, i) {
      let panner = new Tone.Panner(panValues[i]).toDestination();
      player.disconnect();
      player.connect(panner);
      player.start();
      player.volume.value = amplitudeValues[i] + 20;
      console.log(panValues);
    });
  } else {
    console.log("Not on");
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

    case "solo":
      if (evt.keyCode == "83") {
        players.forEach((player, i) => {
          if (i !== aboutChanges.index) {
            player.volume.value = -60;
          } else {
            player.volume.value = amplitudeValues[i];
          }
        });
        console.log("Solo: " + aboutChanges.index);
      } else if (evt.keyCode == "65") {
        players.forEach((player, i) => {
          if (i !== aboutChanges.index) {
            player.volume.value = amplitudeValues[i];
          } else {
            player.volume.value = amplitudeValues[i];
          }
        });
        console.log("All: " + aboutChanges.index);
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
