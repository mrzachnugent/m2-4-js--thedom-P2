// Preset values
const FROGS = 3;
const track = document.querySelector(".track");
const main = document.querySelector("main");

//Add CSS to HTML
const link = document.createElement("link");
link.setAttribute("rel", "stylesheet");
link.setAttribute("href", "./assets/styles.css");
document.head.appendChild(link);

for (let count = 1; count <= FROGS; count++) {
  let createLane = document.createElement("li");
  createLane.setAttribute("id", `lane-${count}`);
  let createSpan = document.createElement("span");

  let createSpanTextNode = document.createTextNode(`${count}`);
  createSpan.appendChild(createSpanTextNode);
  createLane.appendChild(createSpan);
  track.appendChild(createLane);
}

let racers = [];

for (let i = 0; i < FROGS; i++) {
  let rando = Math.floor(Math.random() * frogstable.length);
  racers.push(frogstable[rando]);
  frogstable.splice(rando, 1);
}

//1.3

function addObjFromArrToDom(item, id) {
  id = id + 1;
  document.getElementById(
    `lane-${id}`
  ).innerHTML += `<div class="frog" id="frog-${id}" style="background:${item.color}">${item.number}</div>`;
  let frogNameTextNode = document.createTextNode(`${item.name}`);
  let createSpan2 = document.createElement("span");
  createSpan2.classList.add(`frog-name`);
  createSpan2.appendChild(frogNameTextNode);
  document.getElementById(`lane-${id}`).appendChild(createSpan2);
  item.progress = 0;
  item.lane = `${id}`;
}
console.log(racers);
racers.forEach(addObjFromArrToDom);

//1.6
let ranking = [];

const trackWidth = track.offsetWidth;

function timeRandomizer() {
  randomTime = Math.floor(Math.random() * 901) + 100;
  return randomTime;
}

function racingFrog(racers) {
  const hop = setInterval(function () {
    const hopLength = Math.floor(((Math.random() * 100) / trackWidth) * 100);
    timeRandomizer();
    if (racers.progress >= 100) {
      clearInterval(hop);
      ranking.push(racers);
      if (ranking.length === 3) {
        console.log(
          `In first place, we have ${ranking[0].name}. In second place, we have ${ranking[1].name}. In third place, we have ${ranking[2].name}`
        );
      }
    } else {
      document.querySelector(
        `#frog-${racers.lane}`
      ).style.left = `${racers.progress}%`;

      racers.progress += hopLength;

      // console.log(`${racers.name} is at position ${racers.progress}`);
    }
  }, timeRandomizer());
}

const startRace = () => {
  racers.forEach((racers) => {
    racingFrog(racers);
  });
  let refreshButton = document.createElement("button");
  refreshButton.setAttribute("class", `refresh-btn`);
  let buttonTextNode = document.createTextNode("Click to Restart");
  refreshButton.appendChild(buttonTextNode);
  main.appendChild(refreshButton);
  const refreshPlease = () => {
    window.location.reload();
  };
  refreshButton.addEventListener("click", refreshPlease);
};

const refreshPlease = () => {
  window.location.reload();
};

let startButton = document.createElement("button");
startButton.setAttribute("class", `start-btn`);
let buttonTextNode = document.createTextNode("Click to Start");
startButton.appendChild(buttonTextNode);
main.appendChild(startButton);

startButton.addEventListener("click", startRace);
