const planetsObject = {
  sun: {
    scale: "5 5 5",
    gltfModel: "objects/sun.glb",
    symvol: "&#9737;",
    animation:
      "property: rotation; easing: linear; dir: alternate; dur: 400000;  to: 0 1440 0; loop: true",
    name: "Солнце",
    description: `Солнце - это звезда в центре Солнечной системы. Это почти идеальная сфера горячей плазмы, нагретая до накала реакциями ядерного синтеза в своем ядре, излучающая энергию главным образом в виде видимого света, ультрафиолетового света  и инфракрасного излучения. Это, безусловно, самый важный источник энергии для жизни на Земле.`,
    class: "sun",
    rotation: "0 0 0",
    type: "<span><span class='title_info'>Тип:</span></span> Звезда (Желтый карлик)",
    temp: "<span class='title_info'>Температура:</span> Температура поверхности — 5780 кельвинов (5506 С°)",
    radius:
      "<span class='title_info'>Средний радиус:</span> Экваториальный радиус 6,9551 ⋅ 108 м",
    square:
      "<span class='title_info'>Площадь поверхности:</span>  6,07877 ⋅ 10<sup>18</sup> м² (11 918 площадей Земли) ",
    obiom:
      "<span class='title_info'>Объем:</span>  1,40927 ⋅ 10<sup>27</sup>  м³ (1 301 019 объёмов Земли) ",
    mass: "<span class='title_info'>Масса:</span>  1,9885 ⋅ 10<sup>30</sup> кг (332 940 масс Земли)",
    plotnost: "<span class='title_info'>Средняя плотность:</span>  1,409 г/см³",
    atmosfera:
      "<span class='title_info'>Состав:</span> Водород - 97% и Гелий - 7%",
    forEarth:
      "<span class='title_info'>Среднее расстояние до Земли:</span> 149,6 млн км (8,31 световых минут) или 1 а.е.",
    periodVrashenieOsi:
      "<span class='title_info'>Продолжительность суток:</span> На экваторе - 25.6 дней",
    year: "<span class='title_info'>Продолжительность года:</span> - ",
    sattelite: "<span class='title_info'>Спутники:</span> У Солнца 8 планет",
    coreTemp: "<span class='title_info'>Температура ядра:</span> 15 000 000 °C",
  },
  merc: {
    scale: "10 10 10",
    gltfModel: "objects/mercury.glb",
    symvol: "&#9791;",
    animation:
      "property: rotation; easing: linear; dir: alternate; dur: 400000;  to: 0 1440 0; loop: true",
    name: "Меркурий",
    description:
      "Меркурий — первая планета от Солнца и самая маленькая в Солнечной системе. Названа в честь древнеримского бога торговли, он движется по небу быстрее других планет.",
    class: "merc",
    rotation: "0 0 0",
    type: "<span><span class='title_info'>Тип:</span></span> планета земной группы",
    temp: "<span class='title_info'>Температура:</span> от −180 до +430 °C",
    radius:
      "<span class='title_info'>Средний радиус:</span> 2439,7 ± 1,0 км (0,3829 земного)",
    square:
      "<span class='title_info'>Площадь поверхности:</span> 7,48 ⋅ 107 км² (0,147 земной)",
    obiom:
      "<span class='title_info'>Объем:</span>  1,40927  ⋅  10<sup>27</sup> м³ (1 301 019 объёмов Земли) ",
    mass: "<span class='title_info'>Масса:</span>  3,33022  ⋅  10<sup>23</sup> кг (0,055274 земной)",
    plotnost:
      "<span class='title_info'>Средняя плотность:</span> 5200 кг/м³ (0,984 земной)",
    atmosfera:
      "<span class='title_info'>Состав:</span> 42,0 % кислород, 29,0 % натрий, 22,0 % водород, 6,0 % гелий",
    forEarth:
      "<span class='title_info'>Среднее расстояние до Земли:</span> 77 млн км (0,387 а. е.)",
    periodVrashenieOsi:
      "<span class='title_info'>Продолжительность суток:</span> 58,646 земных суток",
    year: "<span class='title_info'>Продолжительность года:</span> 88 земных суток",
    sattelite:
      "<span class='title_info'>Спутники:</span> У Меркурия нет спутников :(",
    coreTemp: "<span class='title_info'>Температура ядра:</span> -",
  },
  venus: {
    scale: "1 1 1",
    gltfModel: "objects/venus.glb",
    symvol: "&#9792;",
    animation:
      "property: rotation; easing: linear; dir: alternate; dur: 400000;  to: 0 -1440 0; loop: true",
    name: "Венера",
    description: `Венера — вторая планета от Солнца и близнец Земли по размеру и массе, но на этом их сходство заканчивается. Названная “утренней звездой”, Венера часто видна невооружённым глазом с Земли.
Эта планета вращается в обратном направлении по сравнению с остальными планетами в Солнечной системе. Её орбита занимает 225 земных суток, а каждый венерианский день длится дольше, чем год на Земле — 243 земных дня.
`,
    class: "venus",
    rotation: "0 0 0",
    type: "<span><span class='title_info'>Тип:</span></span> планета земной группы",
    temp: "<span class='title_info'>Температура:</span> Температура поверхности — 462 °C ",
    radius:
      "<span class='title_info'>Средний радиус:</span> 6051,8 ± 1,0 км (0,9499 земных)",
    square:
      "<span class='title_info'>Площадь поверхности:</span>  4,60  ⋅  108 км² (0,902 земных)",
    obiom:
      "<span class='title_info'>Объем:</span>  9,38 ⋅ 1011 км³ (0,857 земных)",
    mass: "<span class='title_info'>Масса:</span>  4,8675  ⋅  10<sup>24</sup> кг (0,815 земных)",
    plotnost: "<span class='title_info'>Средняя плотность:</span> 5240 кг/м³",
    atmosfera:
      "<span class='title_info'>Состав:</span> Водород - 97% и Гелий - 7%",
    forEarth:
      "<span class='title_info'>Среднее расстояние до Земли:</span> 108 млн км (0,723 а. е.)",
    periodVrashenieOsi:
      "<span class='title_info'>Продолжительность суток:</span> ~ 243 земных суток",
    year: "<span class='title_info'>Продолжительность года:</span> 225 земных суток",
    sattelite:
      "<span class='title_info'>Спутники:</span> У Венеры нет спутников :(",
    coreTemp:
      "<span class='title_info'>Температура ядра:</span>  5160 К (~4886,85 °C)",
  },
  earth: {
    scale: "0.26 0.26 0.26",
    gltfModel: "objects/earth.glb",
    symvol: "&#9793;",
    animation:
      "property: rotation; easing: linear; dir: alternate; dur: 400000;  to: 0 1440 0; loop: true",
    name: "Земля",
    description: `Земля — уникальная планета Солнечной системы, единственная из известных, на которой существует жизнь.
Атмосфера Земли состоит из азота, кислорода и углекислого газа, а поверхность на 70% покрыта водой.
Земля обладает всеми необходимыми условиями для жизни: достаточное количество тепла и солнечного света, наличие кислорода и углекислого газа в атмосфере, озоновый слой для защиты от ультрафиолетового излучения, магнитное поле для защиты от космических лучей, а также вода в трех состояниях.
`,
    class: "earth",
    rotation: "0 0 0",
    type: "<span><span class='title_info'>Тип:</span></span> планета земной группы",
    temp: "<span class='title_info'>Температура:</span> минимальная — −89,2 °C, максимальная — 56,7 °C",
    radius: "<span class='title_info'>Средний радиус:</span> 6371,0 км",
    square:
      "<span class='title_info'>Площадь поверхности:</span>  510 072 000 км²",
    obiom:
      "<span class='title_info'>Объем:</span>  1,08321  ⋅  10<sup>12</sup> км³",
    mass: "<span class='title_info'>Масса:</span>  5,9726  ⋅  10<sup>24</sup> кг",
    plotnost: "<span class='title_info'>Средняя плотность:</span>  5518 кг/м³",
    atmosfera:
      "<span class='title_info'>Состав:</span> включает различные элементы в зависимости от слоя планеты",
    forEarth:
      "<span class='title_info'>Среднее расстояние до Земли:</span> 149,6 млн км (8,31 световых минут) или 1 астрономическая еденица",
    periodVrashenieOsi:
      "<span class='title_info'>Продолжительность суток:</span> 24 часа (23 часа 56 минут 4 секунды)",
    year: "<span class='title_info'>Продолжительность года:</span> 365/366 земных суток",
    sattelite:
      "<span class='title_info'>Спутники:</span> У Земли 1 спутник - Луна",
    coreTemp:
      "<span class='title_info'>Температура ядра:</span> около 5 000–6 000 °C",
  },
  mars: {
    scale: "7.1 7.1 7.1",
    gltfModel: "objects/mars.glb",
    symvol: "&#9794;",
    animation:
      "property: rotation; easing: linear; dir: alternate; dur: 400000;  to: 0 1440 0; loop: true",
    name: "Марс",
    description:
      "Марс — четвёртая планета от Солнца. Его часто называют “красной планетой” из-за характерного цвета, вызванного оксидом железа на поверхности.",
    class: "mars",
    rotation: "0 0 0",
    type: "<span><span class='title_info'>Тип:</span></span> планета земной группы",
    temp: "<span class='title_info'>Температура:</span> Температура поверхности — от −153 °C до 35 °C",
    radius:
      "<span class='title_info'>Средний радиус:</span> 3389,5 ± 0,2 км (0,532 земного)",
    square:
      "<span class='title_info'>Площадь поверхности:</span> 1,4437 ⋅ 108 км² (0,283 земной) ",
    obiom:
      "<span class='title_info'>Объем:</span>  1,6318 ⋅ 10<sup>11</sup> км3 (0,151 земного)",
    mass: "<span class='title_info'>Масса:</span>  6,4171 ⋅ 10<sup>23</sup> кг (0,107 земной)",
    plotnost:
      "<span class='title_info'>Средняя плотность:</span>  3933 кг/м³ (0,714 земной)",
    atmosfera:
      "<span class='title_info'>Состав:</span> диоксид углерода 95%, железо с примесью 16% серы",
    forEarth:
      "<span class='title_info'>Среднее расстояние до Земли:</span> 225 млн км",
    periodVrashenieOsi:
      "<span class='title_info'>Продолжительность суток:</span> 24 часа 39 минут 35,244 секунды",
    year: "<span class='title_info'>Продолжительность года:</span> 687 земных суток",
    sattelite:
      "<span class='title_info'>Спутники:</span> У Марса 2 спутника - Фобос и Деймос",
    coreTemp:
      "<span class='title_info'>Температура ядра:</span> приблизительно  1726 °C",
  },
  jupiter: {
    scale: "5.1 5.1 5.1",
    gltfModel: "objects/jupiter.glb",
    symvol: "&#9795;",
    animation:
      "property: rotation; easing: linear; dir: alternate; dur: 400000;  to: 0 1440 0; loop: true",
    name: "Юпитер",
    description:
      "Юпи́тер — крупнейшая планета Солнечной системы, пятая по удалённости от Солнца. Наряду с Сатурном Юпитер классифицируется как газовый гигант.",
    class: "jupiter",
    rotation: "0 0 0",
    type: "<span><span class='title_info'>Тип:</span></span> планета-гигант",
    temp: "<span class='title_info'>Температура атмосферы:</span> -148,15С°",
    radius:
      "<span class='title_info'>Средний радиус:</span>  69 911 ± 6 километра",
    square:
      "<span class='title_info'>Площадь поверхности:</span> 6,21796  ⋅  10<sup>10</sup> км² ",
    obiom:
      "<span class='title_info'>Объем:</span> 1,43128  ⋅  10<sup>15</sup> км³",
    mass: "<span class='title_info'>Масса:</span>  1,8982×10<sup>27</sup> кг ",
    plotnost: "<span class='title_info'>Средняя плотность:</span> 1326 кг/м³",
    atmosfera:
      "<span class='title_info'>Состав:</span> Водород - 92% и Гелий - 8%",
    forEarth:
      "<span class='title_info'>Среднее расстояние до Земли:</span> от 588,5 до 968,6 млн км",
    periodVrashenieOsi:
      "<span class='title_info'>Продолжительность суток:</span> 9 часов 55 минут",
    year: "<span class='title_info'>Продолжительность года:</span> 12 земных лет",
    sattelite: "<span class='title_info'>Спутники:</span> 95 спутников",
    coreTemp: "<span class='title_info'>Температура ядра:</span> 24 000 °C",
  },
  saturn: {
    scale: "48.5 48.5 48.5",
    gltfModel: "objects/saturn.glb",
    symvol: "&#9796;",
    animation:
      "property: rotation; easing: linear; dir: alternate; dur: 400000;  to: 0 1440 0; loop: true",
    name: "Сатурн",
    description:
      "Сату́рн — шестая планета от Солнца и вторая по размерам планета в Солнечной системе после Юпитера. Сатурн, а также Юпитер, Уран и Нептун, классифицируются как газовые планеты-гиганты. Сатурн назван в честь римского бога земледелия. Символ Сатурна — серп (Юникод: ♄). В основном Сатурн состоит из водорода, с примесями гелия и следами воды, метана, аммиака и тяжёлых элементов.",
    class: "saturn",
    rotation: "0 0 0",
    type: "<span><span class='title_info'>Тип:</span></span> планета-гигант",
    temp: "<span class='title_info'>Температура атмосферы:</span>  примерно -160 °С",
    radius: "<span class='title_info'>Средний радиус:</span> 58 232 км",
    square:
      "<span class='title_info'>Площадь поверхности:</span>  4,27×10<sup>10</sup> км² ",
    obiom:
      "<span class='title_info'>Объем:</span>  8,2713 ⋅ 10<sup>14</sup> км³ ",
    mass: "<span class='title_info'>Масса:</span> 5,68×10<sup>26</sup> кг ",
    plotnost: "<span class='title_info'>Средняя плотность:</span>  0,687 г/см³",
    atmosfera:
      "<span class='title_info'>Состав:</span> Водород - 96,3% и Гелий - 3,25%",
    forEarth:
      "<span class='title_info'>Среднее расстояние до Земли:</span> 1 400 000 000 км",
    periodVrashenieOsi:
      "<span class='title_info'>Продолжительность суток:</span> 10 часов 33 минуты",
    year: "<span class='title_info'>Продолжительность года:</span>  29,5 земных лет",
    sattelite: "<span class='title_info'>Спутники:</span> 274 спутника",
    coreTemp: "<span class='title_info'>Температура ядра:</span> 11 700 °C",
  },
  uran: {
    scale: "0.085 0.085 0.085",
    gltfModel: "objects/uranus.glb",
    symvol: "&#9954;",
    animation:
      "property: rotation; easing: linear; dir: alternate; dur: 400000;  to: 0 0 0; loop: true",
    name: "Уран",
    description:
      "Ура́н — планета Солнечной системы, седьмая по удалённости от Солнца, третья по диаметру и четвёртая по массе. Была открыта в 1781 году английским астрономом Уильямом Гершелем и названа в честь греческого бога неба Урана. Уран стал первой планетой, обнаруженной в Новое время и при помощи телескопа. Его открыл Уильям Гершель 13 марта 1781 года, тем самым впервые со времён античности расширив границы Солнечной системы в глазах человека. Несмотря на то, что порой Уран различим невооружённым глазом, более ранние наблюдатели принимали его за тусклую звезду.",
    class: "uran",
    rotation: "0 0 0",
    type: "<span><span class='title_info'>Тип:</span></span> ледяной гигант",
    temp: "<span class='title_info'>Температура атмосферы:</span>  от −224 °C до −216 °C",
    radius: "<span class='title_info'>Средний радиус:</span> 25 362 ± 7 км",
    square:
      "<span class='title_info'>Площадь поверхности:</span> 8,1156 ⋅ 10<sup>9</sup> км² (15,91 земных)",
    obiom:
      "<span class='title_info'>Объем:</span>  6,833 ⋅ 10<sup>13</sup> км³ ",
    mass: "<span class='title_info'>Масса:</span>  8,6813 ⋅ 10<sup>25</sup> кг ",
    plotnost: "<span class='title_info'>Средняя плотность:</span>  1,27 г/см³",
    atmosfera:
      "<span class='title_info'>Состав:</span> Водород - 83%, Гелий - 15% и Метан - 2,3%",
    forEarth:
      "<span class='title_info'>Среднее расстояние до Земли:</span> 2 800 000 000 километров (19,1914 астрономической единицы)",
    periodVrashenieOsi:
      "<span class='title_info'>Продолжительность суток:</span>  17 часов 14 минут",
    year: "<span class='title_info'>Продолжительность года:</span>  84 земных года",
    sattelite: "<span class='title_info'>Спутники:</span> 28 спутников",
    coreTemp:
      "<span class='title_info'>Температура ядра:</span> приблизительно 4737 °C",
  },
  neptune: {
    scale: "5 5 5",
    gltfModel: "objects/neptune.glb",
    symvol: "&#9798;",
    animation:
      "property: rotation; easing: linear; dir: alternate; dur: 400000;  to: 0 1440 0; loop: true",
    name: "Нептун",
    description:
      "Непту́н — восьмая и самая дальняя от Солнца планета Солнечной системы. Его масса превышает массу Земли в 17,2 раза и является третьей среди планет Солнечной системы, а по экваториальному диаметру Нептун занимает четвёртое место, превосходя Землю в 3,9 раза. Планета названа в честь Нептуна — римского бога морей.",
    class: "neptune",
    rotation: "0 0 0",
    type: "<span><span class='title_info'>Тип:</span></span> ледяной гигант",
    temp: "<span class='title_info'>Температура атмосферы:</span>  −218 °C",
    radius: "<span class='title_info'>Средний радиус:</span> 24 622 ± 19 км",
    square:
      "<span class='title_info'>Площадь поверхности:</span> 7 640 800 000 км²",
    obiom:
      "<span class='title_info'>Объем:</span>  6,254 ⋅ 10<sup>13</sup> км³ ",
    mass: "<span class='title_info'>Масса:</span>  1,9885 ⋅ 10<sup>30</sup> кг. ",
    plotnost: "<span class='title_info'>Средняя плотность:</span>  1,638 г/см³",
    atmosfera:
      "<span class='title_info'>Состав:</span> Водород -  80±3,2%, Гелий - 19±3,2% и метан - 1,5±0,5%",
    forEarth:
      "<span class='title_info'>Среднее расстояние до Земли:</span> от 4 300 000 000 до 4 600 000 000 км",
    periodVrashenieOsi:
      "<span class='title_info'>Продолжительность суток:</span> приблизительно 16 часов",
    year: "<span class='title_info'>Продолжительность года:</span> 165 земных лет",
    sattelite: "<span class='title_info'>Спутники:</span> 16 спутников",
    coreTemp: "<span class='title_info'>Температура ядра:</span> 7100 °C",
  },
};
const animationButton = document.querySelector(".animation");
const infoButton = document.querySelector(".info");
const infoList = document.querySelector(".info_list");
const planet = document.querySelector(".planet");
const planets = [
  "sun",
  "merc",
  "venus",
  "earth",
  "mars",
  "jupiter",
  "saturn",
  "uran",
  "neptune",
];
let planetInc = 0;
let currentPlanet = "sun";
const buttons = document.querySelectorAll(".button");
const descriptionHead = document.querySelector("#description-head");
const descriptionText = document.querySelector("#description-text");
const descriptionSymvol = document.querySelector("#description-symvol");
const scene = document.querySelector("#scene");
const infoListItem = document.getElementsByClassName("info_list-item");

function changePlanet(object) {
  planet.setAttribute("scale", object.scale);
  planet.setAttribute("gltf-model", object.gltfModel);
  planet.setAttribute("animation", object.animation);
  planet.setAttribute("rotation", object.rotation);

  planet.id = object.class;

  descriptionHead.textContent = object.name;
  descriptionText.textContent = object.description;
  descriptionSymvol.innerHTML = object.symvol;
  changeInfo(object);
}
function changeInfo(object) {
  for (let i = 0; i < infoListItem.length; i++) {
    for (let key in object) {
      if (infoListItem[i].classList.value.slice(15) == key) {
        infoListItem[i].innerHTML = object[key];
      }
    }
  }
}

infoButton.addEventListener("click", (e) => {
  e.target.classList.toggle("visible");
  if (e.target.classList.contains("visible")) {
    infoList.classList.remove("animation-info-close");
    infoList.classList.remove("hide");
    infoList.classList.add("animation-info");
  } else {
    infoList.classList.add("animation-info-close");

    setTimeout(() => {
      infoList.classList.add("hide");
    }, 500);
    infoList.classList.remove("animation-info");
  }
});

animationButton.addEventListener("click", (e) => {
  e.target.classList.toggle("play");

  if (e.target.classList.contains("play")) {
    if (planet.id == "venus") {
      animationPlanet(
        "property: rotation; easing: linear; dir: alternate; dur: 400000;  to: 0 -1440 0; loop: true"
      );
    } else if (planet.id == "uran") {
      animationPlanet(
        "property: rotation; easing: linear; dir: alternate; dur: 400000;  to: 1440 0 0; loop: true"
      );
    } else {
      animationPlanet(
        "property: rotation; easing: linear; dir: alternate; dur: 400000;  to: 0 1440 0; loop: true"
      );
    }
  } else {
    planet.removeAttribute("animation");
  }
});

function animationPlanet(yesOrNo) {
  planet.setAttribute("animation", yesOrNo);
}

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let namePlanet = e.target.className.slice(7);

    changePlanet(planetsObject[namePlanet]);
  });
});

// // Получаем объект, который нужно вращать
//       const rotatableObject = document.querySelector(".planet");

//       // Переменные для отслеживания касаний
//       let isTouching = false;
//       let startX = 0;
//       let startY = 0;
//       let rotationX = 0;
//       let rotationY = 0;

//       // Обработчик начала касания
//       document.addEventListener("touchstart", (event) => {
//         isTouching = true;

//         // Сохраняем начальные координаты касания
//         startY = event.touches[0].clientY;

//         // Сохраняем текущую ориентацию объекта
//         const rotation = rotatableObject.getAttribute("rotation");
//         rotationX = rotation.x;
//       });

//       // Обработчик движения пальца
//       document.addEventListener("touchmove", (event) => {
//         if (!isTouching) return;

//         // Вычисляем разницу между текущей позицией и начальной позицией
//         const deltaX = event.touches[0].clientX - startX;
//         const deltaY = event.touches[0].clientY - startY;

//         // Обновляем вращение объекта
//         rotatableObject.setAttribute("rotation", {
//           x: 0, // Умножаем на коэффициент для регулировки скорости вращения
//           y: rotationY + deltaX * 0.1,
//           z: 0,
//         });
//       });

//       // Обработчик завершения касания
//       document.addEventListener("touchend", () => {
//         isTouching = false;
//       });
