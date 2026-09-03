// ---------------------------------------------------------
// Файл с локациями. Чтобы добавить/изменить точку — просто
// добавь или отредактируй объект в этом массиве.
//
// Поля:
//   id           — уникальный номер
//   name         — название места
//   country      — страна / город (подпись под названием)
//   lat, lng     — координаты
//   rating       — оценка от 0 до 5
//   dogFriendly  — true/false — можно ли гулять с собакой
//   wifi         — true/false — есть ли wi-fi
//   workspace    — true/false — есть ли рабочая зона (со звёздочкой)
//   outlet       — true/false — есть ли розетка (текст в поп-апе звёздочки)
//   desc         — короткое описание
//   shots        — массив ссылок на картинки/скриншоты места
// ---------------------------------------------------------

const LOCATIONS = [
  {
    id: 1,
    name: "Скала Прейкестолен",
    country: "Норвегия, Рогаланд",
    lat: 58.9866, lng: 6.1903,
    rating: 4.8,
    dogFriendly: true,
    wifi: false,
    workspace: false,
    outlet: false,
    desc: "Отвесная скала над фьордом Люсефьорд. Популярный маршрут для треккинга, около 8 км туда-обратно.",
    shots: [
      "https://picsum.photos/seed/preikestolen1/900/560",
      "https://picsum.photos/seed/preikestolen2/900/560"
    ]
  },
  {
    id: 2,
    name: "Парк Ретиро",
    country: "Испания, Мадрид",
    lat: 40.4153, lng: -3.6844,
    rating: 4.6,
    dogFriendly: true,
    wifi: true,
    workspace: true,
    outlet: false,
    desc: "Городской парк в центре Мадрида с прудом, стеклянным павильоном и открытыми зонами для прогулок.",
    shots: [
      "https://picsum.photos/seed/retiro1/900/560",
      "https://picsum.photos/seed/retiro2/900/560",
      "https://picsum.photos/seed/retiro3/900/560"
    ]
  },
  {
    id: 3,
    name: "Набережная Комсомольска",
    country: "Иркутск, Байкал",
    lat: 51.8496, lng: 104.9556,
    rating: 4.2,
    dogFriendly: true,
    wifi: true,
    workspace: false,
    outlet: false,
    desc: "Прогулочная зона вдоль Ангары. Кафе, лавочки и вид на реку.",
    shots: [
      "https://picsum.photos/seed/irkutsk1/900/560",
      "https://picsum.photos/seed/irkutsk2/900/560"
    ]
  },
  {
    id: 4,
    name: "Центральный парк",
    country: "США, Нью-Йорк",
    lat: 40.7829, lng: -73.9654,
    rating: 4.7,
    dogFriendly: true,
    wifi: true,
    workspace: true,
    outlet: true,
    desc: "Крупнейший парк Манхэттена. Отдельные зоны для собак без поводка в определённые часы, есть скамейки с розетками у Bethesda Terrace.",
    shots: [
      "https://picsum.photos/seed/centralpark1/900/560",
      "https://picsum.photos/seed/centralpark2/900/560"
    ]
  },
  {
    id: 5,
    name: "Сад Мэйдзи",
    country: "Япония, Токио",
    lat: 35.6764, lng: 139.6993,
    rating: 4.5,
    dogFriendly: false,
    wifi: false,
    workspace: false,
    outlet: false,
    desc: "Тихий лесной парк вокруг святилища Мэйдзи. Собаки на территорию не допускаются.",
    shots: [
      "https://picsum.photos/seed/meiji1/900/560",
      "https://picsum.photos/seed/meiji2/900/560"
    ]
  },
  {
    id: 6,
    name: "Пустыня Атакама",
    country: "Чили",
    lat: -24.5, lng: -69.25,
    rating: 4.9,
    dogFriendly: false,
    wifi: false,
    workspace: false,
    outlet: false,
    desc: "Самая сухая пустыня на планете. Лунные пейзажи и одни из лучших мест для наблюдения звёзд.",
    shots: [
      "https://picsum.photos/seed/atacama1/900/560",
      "https://picsum.photos/seed/atacama2/900/560"
    ]
  },
  {
    id: 7,
    name: "Коворкинг-кафе Blue Bottle",
    country: "США, Сан-Франциско",
    lat: 37.7699, lng: -122.4269,
    rating: 4.3,
    dogFriendly: true,
    wifi: true,
    workspace: true,
    outlet: true,
    desc: "Кофейня с большими столами, быстрым wi-fi и розетками почти у каждого места. Разрешено сидеть с ноутбуком долго.",
    shots: [
      "https://picsum.photos/seed/bluebottle1/900/560",
      "https://picsum.photos/seed/bluebottle2/900/560"
    ]
  }
];
