const routes = [
  {
    id: "astana-classic",
    cityKey: "astana",
    city: "Астана",
    title: "Классика столицы",
    meta: "09:30–20:00 · спокойный темп",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Baiterek.jpg?width=1200",
    text: "Подойдёт для первой поездки: главные символы города, музей и вечерняя прогулка.",
    tags: ["архитектура", "музей", "вечерний вид"],
    travelMode: "walking",
    steps: [
      {
        time: "09:30",
        place: "Байтерек",
        duration: "60–90 минут",
        note: "Начните день с главного символа города и вида на левый берег.",
        detail: "Здесь удобно начать знакомство с Астаной: рядом широкие площади, главные здания левого берега и хорошие точки для фото. Лучше прийти утром, пока меньше людей.",
        practical: "Сначала поднимитесь на обзорную площадку, потом спокойно пройдитесь вокруг монумента и сделайте фотографии со стороны бульвара.",
        mapQuery: "Байтерек Астана",
        mapStop: true
      },
      {
        time: "11:00",
        place: "Бульвар Нуржол",
        duration: "45–60 минут",
        note: "Пройдитесь пешком, сделайте фотографии у зданий и фонтанов.",
        detail: "Это прогулочная часть маршрута между главными объектами столицы. Тут не нужно торопиться: лучше идти медленно и смотреть на архитектуру по сторонам.",
        practical: "Держитесь центральной пешеходной зоны. Если погода ветреная, можно сократить прогулку и быстрее перейти к обеду.",
        mapQuery: "Бульвар Нуржол Астана",
        mapStop: true
      },
      {
        time: "13:00",
        place: "Обед рядом с центром",
        duration: "60 минут",
        note: "Выберите кафе на левом берегу, чтобы не тратить много времени на дорогу.",
        detail: "Лучше не ставить обед слишком далеко от маршрута. После прогулки по центру удобнее выбрать кафе рядом с Байтереком или бульваром Нуржол.",
        practical: "Откройте карту и посмотрите кафе с рейтингом рядом с текущей точкой. Для туриста удобнее выбирать место в 10–15 минутах пешком.",
        mapQuery: "кафе рядом с Байтерек Астана",
        mapStop: false
      },
      {
        time: "15:00",
        place: "Национальный музей",
        duration: "1,5–2 часа",
        note: "Хорошая точка, чтобы понять историю и культуру Казахстана.",
        detail: "В музее лучше не пытаться посмотреть всё за один раз. Выберите самые интересные залы: историю, культуру, археологию и современный Казахстан.",
        practical: "Проверьте график работы заранее. Если времени мало, заложите минимум полтора часа и не планируйте после музея слишком плотную программу.",
        mapQuery: "Национальный музей Республики Казахстан Астана",
        mapStop: true
      },
      {
        time: "18:30",
        place: "Набережная Есиля",
        duration: "60–90 минут",
        note: "Завершите маршрут прогулкой у реки и вечерними огнями города.",
        detail: "Вечером набережная выглядит спокойнее и атмосфернее. Это хорошая финальная точка после музея и насыщенного дня.",
        practical: "Приходите ближе к закату. Можно просто прогуляться вдоль воды или выбрать кафе поблизости.",
        mapQuery: "Набережная реки Есиль Астана",
        mapStop: true
      }
    ]
  },
  {
    id: "astana-modern",
    cityKey: "astana",
    city: "Астана",
    title: "Современная Астана",
    meta: "10:00–19:30 · больше фото-точек",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%AD%D0%BA%D1%81%D0%BF%D0%BE%202017%204.jpg?width=1200",
    text: "Маршрут для тех, кто любит необычные здания, широкие улицы и аккуратные городские пространства.",
    tags: ["EXPO", "фото", "город"],
    travelMode: "driving",
    steps: [
      {
        time: "10:00",
        place: "EXPO",
        duration: "1–1,5 часа",
        note: "Начните с района выставочного комплекса и футуристичной архитектуры.",
        detail: "Район EXPO хорошо показывает современную сторону Астаны. Здесь удобно гулять, фотографировать здания и начать день без суеты.",
        practical: "Лучше приезжать утром: меньше людей и проще спокойно посмотреть территорию вокруг комплекса.",
        mapQuery: "EXPO Astana Nur Alem",
        mapStop: true
      },
      {
        time: "12:00",
        place: "Ботанический сад",
        duration: "60 минут",
        note: "Спокойная прогулка и небольшой отдых от шумных улиц.",
        detail: "После современной архитектуры хорошо сделать зелёную паузу. Ботанический сад подходит для спокойной прогулки и отдыха между точками.",
        practical: "Если жарко или ветрено, сократите прогулку до центральных аллей. Возьмите воду, особенно летом.",
        mapQuery: "Ботанический сад Астана",
        mapStop: true
      },
      {
        time: "14:00",
        place: "Обед",
        duration: "60 минут",
        note: "Лучше выбрать место рядом с ботаническим садом или Mega Silk Way.",
        detail: "На этом маршруте обед лучше оставить рядом с районом EXPO, чтобы не делать лишний переезд через город.",
        practical: "Посмотрите кафе в Mega Silk Way или поблизости. Так маршрут останется удобным и логичным.",
        mapQuery: "кафе Mega Silk Way Астана",
        mapStop: false
      },
      {
        time: "16:00",
        place: "Абу-Даби Плаза",
        duration: "30–45 минут",
        note: "Короткая остановка для городских фотографий.",
        detail: "Это не точка, где нужно проводить много времени. Скорее короткая остановка, чтобы увидеть высотную современную архитектуру города.",
        practical: "Запланируйте здесь 30–45 минут. Дальше лучше двигаться к центру, чтобы застать вечернюю подсветку.",
        mapQuery: "Abu Dhabi Plaza Astana",
        mapStop: true
      },
      {
        time: "18:00",
        place: "Вечер у Байтерека",
        duration: "60–90 минут",
        note: "Вернитесь в центр, когда включается подсветка.",
        detail: "Вечером центр выглядит по-другому: подсветка, прогулочная зона и более живая атмосфера. Это хороший финал современного маршрута.",
        practical: "Если устали, можно просто выбрать кафе рядом и пройтись по бульвару Нуржол уже после ужина.",
        mapQuery: "Байтерек Астана",
        mapStop: true
      }
    ]
  },
  {
    id: "astana-museums",
    cityKey: "astana",
    city: "Астана",
    title: "Музеи и спокойный день",
    meta: "10:30–18:30 · без спешки",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/National%20Museum%20of%20the%20Republic%20of%20Kazakhstan%2001.jpg?width=1200",
    text: "Небольшой культурный маршрут без длинных переездов и перегруженного расписания.",
    tags: ["музеи", "история", "легко"],
    travelMode: "walking",
    steps: [
      {
        time: "10:30",
        place: "Национальный музей",
        duration: "2 часа",
        note: "Выделите больше времени, чтобы не бежать по залам.",
        detail: "Национальный музей лучше смотреть без спешки. Это главная часть маршрута, поэтому не ставьте перед ним много других точек.",
        practical: "Сначала посмотрите основные экспозиции, потом уже выбирайте дополнительные залы по интересу.",
        mapQuery: "Национальный музей Республики Казахстан Астана",
        mapStop: true
      },
      {
        time: "13:00",
        place: "Обед",
        duration: "60–75 минут",
        note: "Поставьте длинную паузу — после музея это удобно.",
        detail: "После большого музея лучше сделать нормальную паузу, а не быстрый перекус. Так вторая часть дня будет спокойнее.",
        practical: "Выбирайте кафе рядом с музеем или по пути к мечети Хазрет Султан.",
        mapQuery: "кафе рядом Национальный музей Астана",
        mapStop: false
      },
      {
        time: "15:00",
        place: "Мечеть Хазрет Султан",
        duration: "45–60 минут",
        note: "Спокойная архитектурная точка рядом с музеем.",
        detail: "Мечеть находится рядом с музейным районом, поэтому её удобно добавить в маршрут без лишних переездов.",
        practical: "Одевайтесь аккуратно и уважительно. На территории лучше вести себя спокойно и не шуметь.",
        mapQuery: "Мечеть Хазрет Султан Астана",
        mapStop: true
      },
      {
        time: "16:30",
        place: "Дворец мира и согласия",
        duration: "40–60 минут",
        note: "Посмотрите здание снаружи и прогуляйтесь вокруг.",
        detail: "Пирамида хорошо подходит для короткой остановки и фотографий. Даже если не заходить внутрь, место визуально запоминается.",
        practical: "Проверьте, есть ли возможность посещения внутри. Если нет, просто оставьте время на прогулку вокруг.",
        mapQuery: "Дворец мира и согласия Астана",
        mapStop: true
      },
      {
        time: "18:00",
        place: "Кофе-пауза",
        duration: "45–60 минут",
        note: "Закончите день в кафе без дополнительной суеты.",
        detail: "Финал маршрута специально сделан лёгким. После музеев и прогулки лучше не добавлять ещё одну большую точку.",
        practical: "Выберите кафе рядом с последней точкой или вернитесь ближе к центру, если планируете вечернюю прогулку.",
        mapQuery: "кофейня рядом Дворец мира и согласия Астана",
        mapStop: false
      }
    ]
  },
  {
    id: "almaty-mountains",
    cityKey: "almaty",
    city: "Алматы",
    title: "Горы за один день",
    meta: "09:00–20:00 · активный темп",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Shymbulak%2C%20Almaty%20%28LRM%2020240401%20103616%29.jpg?width=1200",
    text: "План для тех, кто едет в Алматы ради гор, воздуха и красивых панорам.",
    tags: ["горы", "панорамы", "природа"],
    travelMode: "driving",
    steps: [
      {
        time: "09:00",
        place: "Медеу",
        duration: "60–90 минут",
        note: "Приезжайте утром, пока меньше людей и мягче свет.",
        detail: "Медеу — удобная первая точка перед подъёмом выше. Здесь можно погулять, сделать фотографии и почувствовать горную атмосферу.",
        practical: "Лучше ехать утром. В выходные закладывайте больше времени на дорогу и очередь.",
        mapQuery: "Медеу Алматы",
        mapStop: true
      },
      {
        time: "11:00",
        place: "Шымбулак",
        duration: "2–3 часа",
        note: "Поднимитесь выше, погуляйте и сделайте паузу на чай.",
        detail: "Главная часть маршрута — подъём в горы. Даже без активного спорта здесь приятно погулять, посмотреть виды и отдохнуть в кафе.",
        practical: "Проверьте погоду заранее. В горах может быть холоднее, чем в городе, поэтому лучше взять лёгкую куртку.",
        mapQuery: "Шымбулак Алматы",
        mapStop: true
      },
      {
        time: "14:00",
        place: "Обед в горах",
        duration: "60 минут",
        note: "Не планируйте всё слишком плотно — дорога может занять время.",
        detail: "В этом маршруте обед лучше сделать прямо в горной зоне, чтобы не спускаться в город слишком рано.",
        practical: "Посмотрите кафе на Шымбулаке или рядом с Медеу. Цены могут быть выше, чем в городе.",
        mapQuery: "кафе Шымбулак Алматы",
        mapStop: false
      },
      {
        time: "16:30",
        place: "Возвращение в город",
        duration: "60–90 минут",
        note: "Оставьте запас на такси или автобус.",
        detail: "Дорога обратно может занять больше времени, чем кажется. Не ставьте сразу после гор точку с точным временем.",
        practical: "Если едете на такси, проверьте связь и заранее посмотрите место посадки.",
        mapQuery: "Медеу Алматы",
        mapStop: false
      },
      {
        time: "18:30",
        place: "Кок-Тобе",
        duration: "1,5 часа",
        note: "Закончите день видом на город на закате.",
        detail: "Кок-Тобе хорошо подходит для финала: город видно сверху, а вечером атмосфера становится приятнее.",
        practical: "Лучше приехать до заката, чтобы увидеть город и днём, и в вечерних огнях.",
        mapQuery: "Кок-Тобе Алматы",
        mapStop: true
      }
    ]
  },
  {
    id: "almaty-center",
    cityKey: "almaty",
    city: "Алматы",
    title: "Старый центр и базар",
    meta: "10:00–18:00 · прогулочный маршрут",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Central%20Asia%20003%20%286086921576%29.jpg?width=1200",
    text: "Маршрут для знакомства с атмосферой города: парк, улицы, базар и местная еда.",
    tags: ["пешком", "еда", "центр"],
    travelMode: "walking",
    steps: [
      {
        time: "10:00",
        place: "Парк 28 панфиловцев",
        duration: "60 минут",
        note: "Начните с зелёной части центра и Вознесенского собора.",
        detail: "Это один из самых удобных стартов для прогулки по центру Алматы: зелёная зона, историческая атмосфера и несколько объектов рядом.",
        practical: "Сначала прогуляйтесь по парку, потом посмотрите собор и памятники. Не торопитесь — маршрут дальше тоже пеший.",
        mapQuery: "Парк 28 гвардейцев-панфиловцев Алматы",
        mapStop: true
      },
      {
        time: "11:30",
        place: "Зелёный базар",
        duration: "60–90 минут",
        note: "Попробуйте местные продукты и посмотрите живую городскую атмосферу.",
        detail: "Базар показывает Алматы не как открытку, а как живой город. Здесь можно посмотреть продукты, купить сувениры и попробовать что-то местное.",
        practical: "Держите вещи ближе к себе и заранее решите, что хотите купить. Для первого раза лучше просто пройтись и осмотреться.",
        mapQuery: "Зелёный базар Алматы",
        mapStop: true
      },
      {
        time: "13:00",
        place: "Обед",
        duration: "60 минут",
        note: "Выберите место с национальной кухней рядом с центром.",
        detail: "После базара удобно пообедать в центре, не уходя далеко от основной прогулочной части.",
        practical: "Можно выбрать кафе рядом с Панфиловским парком, Арбатом или улицей Жибек Жолы.",
        mapQuery: "кафе национальная кухня центр Алматы",
        mapStop: false
      },
      {
        time: "15:00",
        place: "Арбат",
        duration: "60 минут",
        note: "Спокойная прогулка, уличные музыканты и сувениры.",
        detail: "Арбат — лёгкая прогулочная точка после обеда. Здесь можно пройтись, посмотреть уличную жизнь и сделать небольшую паузу.",
        practical: "Не планируйте здесь слишком много: одного часа обычно достаточно.",
        mapQuery: "Арбат Алматы Жибек Жолы",
        mapStop: true
      },
      {
        time: "17:00",
        place: "Кофейня в центре",
        duration: "45–60 минут",
        note: "Финальная точка без лишней дороги.",
        detail: "В конце маршрута лучше оставить свободную точку: можно выбрать кофейню по настроению и не привязываться к одному месту.",
        practical: "Откройте карту рядом с Арбатом и выберите кофейню с хорошим рейтингом.",
        mapQuery: "кофейня рядом Арбат Алматы",
        mapStop: false
      }
    ]
  },
  {
    id: "almaty-evening",
    cityKey: "almaty",
    city: "Алматы",
    title: "Город и вечерний вид",
    meta: "11:00–21:00 · поздний старт",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Night%20view%2C%20Kok-tobe.jpg?width=1200",
    text: "Вариант, если утром хочется не спешить, а главную часть дня оставить на вечер.",
    tags: ["вечер", "кафе", "вид"],
    travelMode: "driving",
    steps: [
      {
        time: "11:00",
        place: "Кофе и прогулка",
        duration: "60 минут",
        note: "Начните день в районе центра, без раннего подъёма.",
        detail: "Маршрут специально начинается поздно. Первая точка должна быть лёгкой, чтобы день не выглядел перегруженным.",
        practical: "Выберите кофейню в центре и после неё немного прогуляйтесь пешком.",
        mapQuery: "кофейня центр Алматы",
        mapStop: false
      },
      {
        time: "13:00",
        place: "Музей или галерея",
        duration: "1–1,5 часа",
        note: "Добавьте культурную остановку в середине дня.",
        detail: "Культурная точка делает маршрут не только прогулочным. Можно выбрать музей или галерею в зависимости от интереса.",
        practical: "Перед выходом проверьте расписание. Некоторые места могут быть закрыты в отдельные дни.",
        mapQuery: "Государственный музей искусств имени Кастеева Алматы",
        mapStop: true
      },
      {
        time: "15:30",
        place: "Парк или терренкур",
        duration: "60–90 минут",
        note: "Лёгкая прогулка перед вечерней частью маршрута.",
        detail: "После музея хорошо добавить прогулку на воздухе. Это даёт паузу перед ужином и вечерней панорамой.",
        practical: "Выберите место по погоде: если жарко — парк, если хочется активности — терренкур.",
        mapQuery: "Терренкур Алматы",
        mapStop: true
      },
      {
        time: "18:00",
        place: "Ужин",
        duration: "60–75 минут",
        note: "Лучше поужинать до подъёма на видовую точку.",
        detail: "Если сначала подняться на видовую точку, потом может быть сложнее спокойно найти место для ужина.",
        practical: "Выберите ресторан ближе к центру или по пути к Кок-Тобе.",
        mapQuery: "ресторан центр Алматы",
        mapStop: false
      },
      {
        time: "20:00",
        place: "Кок-Тобе",
        duration: "60–90 минут",
        note: "Вечерняя панорама города — сильный финал маршрута.",
        detail: "Финальная точка построена вокруг вида на город. Вечером здесь особенно хорошо, если погода ясная.",
        practical: "Возьмите лёгкую верхнюю одежду: вечером на высоте может быть прохладнее.",
        mapQuery: "Кок-Тобе Алматы",
        mapStop: true
      }
    ]
  },
  {
    id: "shymkent-first",
    cityKey: "shymkent",
    city: "Шымкент",
    title: "Первое знакомство",
    meta: "10:00–19:00 · спокойный темп",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Shymkent%20independence%20square%20in%202023.jpg?width=1200",
    text: "Базовый маршрут по городу: история, парк, местная кухня и вечерняя прогулка.",
    tags: ["история", "парк", "еда"],
    travelMode: "walking",
    steps: [
      {
        time: "10:00",
        place: "Старый город",
        duration: "60 минут",
        note: "Начните с исторической части и прогулки без спешки.",
        detail: "Старый город подходит для первого знакомства с Шымкентом. Тут лучше не спешить, а просто пройтись и посмотреть атмосферу района.",
        practical: "Начните с короткой прогулки и оставьте время на фотографии. В жару лучше идти утром.",
        mapQuery: "Старый город Шымкент",
        mapStop: true
      },
      {
        time: "12:00",
        place: "Цитадель",
        duration: "60 минут",
        note: "Посмотрите место, связанное с прошлым города.",
        detail: "Цитадель добавляет маршруту историческую часть. Это хорошая точка, чтобы не ограничиваться только кафе и парками.",
        practical: "Проверьте режим посещения заранее и заложите время на прогулку вокруг.",
        mapQuery: "Цитадель Шымкент",
        mapStop: true
      },
      {
        time: "13:30",
        place: "Обед",
        duration: "60–75 минут",
        note: "Попробуйте южную кухню: плов, самсу или шашлык.",
        detail: "В Шымкенте еда — важная часть впечатления от города. Обед лучше сделать полноценной остановкой.",
        practical: "Ищите место с местной кухней рядом с центром. Не ставьте после обеда сразу далёкую точку.",
        mapQuery: "плов самса шашлык Шымкент центр",
        mapStop: false
      },
      {
        time: "15:30",
        place: "Парк Кен-Баба",
        duration: "60 минут",
        note: "Хорошая точка для отдыха в середине дня.",
        detail: "Парк помогает сделать маршрут легче после исторической части и обеда. Здесь можно просто отдохнуть и пройтись.",
        practical: "Если едете с семьёй, эту точку можно расширить по времени.",
        mapQuery: "Парк Кен-Баба Шымкент",
        mapStop: true
      },
      {
        time: "18:00",
        place: "Вечерняя прогулка",
        duration: "60 минут",
        note: "Закончите маршрут в центре, где удобно найти кафе.",
        detail: "Вечером лучше оставаться ближе к центру: так проще выбрать кафе, вернуться в отель или продолжить прогулку.",
        practical: "Выберите точку рядом с вашим жильём или с местом, где планируете ужин.",
        mapQuery: "центр Шымкент вечерняя прогулка",
        mapStop: false
      }
    ]
  },
  {
    id: "shymkent-green",
    cityKey: "shymkent",
    city: "Шымкент",
    title: "Зелёный день",
    meta: "09:30–18:30 · больше природы",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Dendropark%20Shymkent.jpg?width=1200",
    text: "План для тёплого дня, когда хочется меньше зданий и больше прогулок на воздухе.",
    tags: ["природа", "пешком", "отдых"],
    travelMode: "driving",
    steps: [
      {
        time: "09:30",
        place: "Дендропарк",
        duration: "1,5–2 часа",
        note: "Лучше прийти утром, пока не слишком жарко.",
        detail: "Дендропарк — главная зелёная часть маршрута. Утром здесь комфортнее, особенно летом.",
        practical: "Возьмите воду и удобную обувь. Если день жаркий, не растягивайте прогулку на середину дня.",
        mapQuery: "Дендропарк Шымкент",
        mapStop: true
      },
      {
        time: "12:00",
        place: "Кофе или лёгкий обед",
        duration: "45–60 минут",
        note: "Сделайте паузу перед следующей прогулкой.",
        detail: "После большой прогулки нужна короткая остановка. Лучше не перегружать маршрут плотным обедом слишком рано.",
        practical: "Посмотрите кафе рядом с текущей точкой или по пути к следующему парку.",
        mapQuery: "кафе рядом Дендропарк Шымкент",
        mapStop: false
      },
      {
        time: "14:00",
        place: "Парк независимости",
        duration: "60 минут",
        note: "Широкие аллеи и спокойный темп.",
        detail: "Парк независимости подходит для второй прогулочной части. Здесь маршрут остаётся спокойным и не превращается в гонку по достопримечательностям.",
        practical: "Если жарко, выбирайте тенистые участки и сократите время прогулки.",
        mapQuery: "Парк независимости Шымкент",
        mapStop: true
      },
      {
        time: "16:00",
        place: "Центральная мечеть",
        duration: "45 минут",
        note: "Красивая архитектурная остановка.",
        detail: "Мечеть добавляет маршруту архитектурную точку после зелёных прогулок. Это спокойная остановка без сильной нагрузки.",
        practical: "Соблюдайте уважительное поведение на территории и выбирайте аккуратную одежду.",
        mapQuery: "Центральная мечеть Шымкент",
        mapStop: true
      },
      {
        time: "18:00",
        place: "Ужин",
        duration: "60–90 минут",
        note: "Финальная часть дня — местная кухня без спешки.",
        detail: "После прогулочного дня лучше завершить маршрут нормальным ужином, а не добавлять ещё одну дальнюю точку.",
        practical: "Выберите ресторан недалеко от мечети или ближе к месту проживания.",
        mapQuery: "ресторан Шымкент местная кухня",
        mapStop: false
      }
    ]
  },
  {
    id: "shymkent-food",
    cityKey: "shymkent",
    city: "Шымкент",
    title: "Еда и местный ритм",
    meta: "11:00–20:00 · гастро-маршрут",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Ordabassy-Square-Shymkent-Kazakhstan.jpg?width=1200",
    text: "Маршрут для тех, кто хочет почувствовать город через базары, кафе и неспешные прогулки.",
    tags: ["еда", "базар", "вечер"],
    travelMode: "walking",
    steps: [
      {
        time: "11:00",
        place: "Местный базар",
        duration: "60–90 минут",
        note: "Начните день с живой атмосферы и небольших покупок.",
        detail: "Базар — хороший способ увидеть обычный ритм города. Здесь больше жизни, чем в классических туристических точках.",
        practical: "Берите наличные на мелкие покупки и не планируйте после базара длинный переход без паузы.",
        mapQuery: "центральный базар Шымкент",
        mapStop: true
      },
      {
        time: "13:00",
        place: "Обед с южной кухней",
        duration: "75 минут",
        note: "Сделайте еду главным пунктом дня, а не быстрым перекусом.",
        detail: "В этом маршруте обед — не техническая пауза, а часть знакомства с городом. Можно попробовать плов, самсу, шашлык или лагман.",
        practical: "Выбирайте место, где много посетителей: часто это хороший знак для локальной кухни.",
        mapQuery: "южная кухня Шымкент плов самса",
        mapStop: false
      },
      {
        time: "15:00",
        place: "Прогулка по центру",
        duration: "60 минут",
        note: "Посмотрите город в обычном, не туристическом ритме.",
        detail: "После обеда лучше сделать лёгкую прогулку, а не сразу садиться в транспорт. Так маршрут ощущается естественнее.",
        practical: "Выберите центральные улицы рядом с кафе и двигайтесь без строгого расписания.",
        mapQuery: "центр Шымкент",
        mapStop: true
      },
      {
        time: "17:00",
        place: "Парк",
        duration: "60 минут",
        note: "Добавьте спокойную остановку перед вечером.",
        detail: "Парк нужен для баланса: после базара и еды маршрут становится более спокойным.",
        practical: "Можно выбрать ближайший парк по карте, чтобы не делать лишний переезд.",
        mapQuery: "парк центр Шымкент",
        mapStop: true
      },
      {
        time: "19:00",
        place: "Чай и десерт",
        duration: "45–60 минут",
        note: "Закончите день в кафе, без перегруженного расписания.",
        detail: "Финал маршрута должен быть лёгким. Чай, десерт и спокойный вечер лучше подходят для гастро-дня, чем ещё одна большая достопримечательность.",
        practical: "Выберите кафе рядом с последней прогулочной точкой или ближе к отелю.",
        mapQuery: "чай десерт кафе Шымкент",
        mapStop: false
      }
    ]
  }
];

const routeExtras = {
  "astana-classic": {
    categories: ["family", "tourist", "walk"],
    audience: "для первой поездки и семьи",
    durationText: "6–8 часов",
    budgetText: "~15 000 ₸ / чел.",
    entryCostText: "входы: ~3 000–5 000 ₸",
    costDetails: [
      "Байтерек: примерно 2 000–3 000 ₸",
      "Национальный музей: примерно 1 000–2 000 ₸",
      "Обед и кофе: примерно 8 000–10 000 ₸"
    ]
  },
  "astana-modern": {
    categories: ["tourist", "car"],
    audience: "для фото и современной архитектуры",
    durationText: "5–7 часов",
    budgetText: "~12 000 ₸ / чел.",
    entryCostText: "входы: ~2 000–4 000 ₸",
    costDetails: [
      "EXPO / Nur Alem: примерно 2 000–4 000 ₸",
      "Такси между точками: зависит от расстояния",
      "Кафе: примерно 6 000–8 000 ₸"
    ]
  },
  "astana-museums": {
    categories: ["family", "tourist", "budget", "walk"],
    audience: "для спокойного культурного дня",
    durationText: "6–7 часов",
    budgetText: "~10 000 ₸ / чел.",
    entryCostText: "входы: ~2 000–4 000 ₸",
    costDetails: [
      "Музеи: примерно 1 000–2 000 ₸ за место",
      "Мечеть: бесплатно, но важно соблюдать правила посещения",
      "Обед: примерно 5 000–7 000 ₸"
    ]
  },
  "almaty-mountains": {
    categories: ["active", "tourist", "car"],
    audience: "для активного отдыха и видов",
    durationText: "7–9 часов",
    budgetText: "~20 000 ₸ / чел.",
    entryCostText: "канатка/транспорт: ~5 000–10 000 ₸",
    costDetails: [
      "Медеу: прогулка обычно бесплатная",
      "Шымбулак и канатная дорога: зависит от сезона и тарифа",
      "Обед в горах: обычно дороже, примерно 8 000–12 000 ₸"
    ]
  },
  "almaty-center": {
    categories: ["family", "tourist", "budget", "walk"],
    audience: "для пешего знакомства с городом",
    durationText: "5–6 часов",
    budgetText: "~8 000 ₸ / чел.",
    entryCostText: "можно почти без входных билетов",
    costDetails: [
      "Парк и Арбат: бесплатно",
      "Зелёный базар: расходы зависят от покупок",
      "Обед: примерно 5 000–7 000 ₸"
    ]
  },
  "almaty-evening": {
    categories: ["evening", "tourist", "car"],
    audience: "для вечернего вида и неспешной прогулки",
    durationText: "4–6 часов",
    budgetText: "~12 000 ₸ / чел.",
    entryCostText: "канатка/такси: ~3 000–7 000 ₸",
    costDetails: [
      "Кок-Тобе: стоимость зависит от способа подъёма",
      "Такси или канатка: заложите отдельный бюджет",
      "Кафе вечером: примерно 6 000–9 000 ₸"
    ]
  },
  "shymkent-first": {
    categories: ["family", "tourist", "budget", "walk"],
    audience: "для первого знакомства с городом",
    durationText: "5–6 часов",
    budgetText: "~7 000 ₸ / чел.",
    entryCostText: "много бесплатных точек",
    costDetails: [
      "Парки и прогулочные места: чаще всего бесплатно",
      "Музей или отдельные объекты: примерно 500–1 500 ₸",
      "Еда и напитки: примерно 4 000–6 000 ₸"
    ]
  },
  "shymkent-green": {
    categories: ["family", "budget", "active", "walk"],
    audience: "для прогулки на свежем воздухе",
    durationText: "4–6 часов",
    budgetText: "~6 000 ₸ / чел.",
    entryCostText: "входы: ~0–1 500 ₸",
    costDetails: [
      "Дендропарк и зелёные зоны: обычно бюджетно",
      "Такси внутри города: зависит от района",
      "Кафе после прогулки: примерно 4 000–6 000 ₸"
    ]
  },
  "shymkent-food": {
    categories: ["budget", "tourist", "evening", "walk"],
    audience: "для еды, базара и местного ритма",
    durationText: "5–7 часов",
    budgetText: "~9 000 ₸ / чел.",
    entryCostText: "входные билеты почти не нужны",
    costDetails: [
      "Базар: расходы зависят от покупок",
      "Обед с местной кухней: примерно 4 000–7 000 ₸",
      "Чай и десерт: примерно 2 000–4 000 ₸"
    ]
  }
};

routes.forEach((route) => Object.assign(route, routeExtras[route.id] || {}));

const routesGrid = document.getElementById("routesGrid");
const cityTabs = document.querySelectorAll(".city-tab");
const typeTabs = document.querySelectorAll(".type-tab");
const routesCounter = document.getElementById("routesCounter");
const weatherTabs = document.querySelectorAll(".weather-tab");
const weatherBox = document.getElementById("weatherBox");
const planModal = document.getElementById("planModal");
const planModalBackdrop = document.querySelector(".plan-modal__backdrop");
const planModalClose = document.getElementById("planModalClose");
const planModalBody = document.getElementById("planModalBody");

let activeCity = "all";
let activeType = "all";

const cityWeather = {
  astana: { name: "Астана", lat: 51.1694, lon: 71.4491 },
  almaty: { name: "Алматы", lat: 43.2389, lon: 76.8897 },
  shymkent: { name: "Шымкент", lat: 42.3417, lon: 69.5901 }
};

function encodeMapQuery(value) {
  return encodeURIComponent(value);
}

function createSinglePointMapLink(step) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeMapQuery(step.mapQuery || step.place)}`;
}

function createRouteMapLink(plan) {
  const stops = plan.steps.filter((step) => step.mapStop !== false);

  if (stops.length === 0) {
    return "https://www.google.com/maps";
  }

  const destination = stops[stops.length - 1].mapQuery || stops[stops.length - 1].place;
  const waypoints = stops
    .slice(0, -1)
    .map((step) => step.mapQuery || step.place)
    .join("|");

  const params = new URLSearchParams({
    api: "1",
    destination,
    travelmode: plan.travelMode || "walking"
  });

  if (waypoints) {
    params.set("waypoints", waypoints);
  }

  return `https://www.google.com/maps/dir/?${params.toString()}`;
}

function getWeatherIcon(code) {
  if ([0, 1].includes(code)) return "☀️";
  if ([2, 3].includes(code)) return "⛅";
  if ([45, 48].includes(code)) return "🌫️";
  if ([51, 53, 55, 61, 63, 65, 80, 81, 82].includes(code)) return "🌧️";
  if ([71, 73, 75, 77, 85, 86].includes(code)) return "❄️";
  if ([95, 96, 99].includes(code)) return "⛈️";
  return "🌤️";
}

function getWeatherText(code) {
  if ([0, 1].includes(code)) return "ясно";
  if ([2, 3].includes(code)) return "облачно";
  if ([45, 48].includes(code)) return "туман";
  if ([51, 53, 55, 61, 63, 65, 80, 81, 82].includes(code)) return "возможен дождь";
  if ([71, 73, 75, 77, 85, 86].includes(code)) return "снег";
  if ([95, 96, 99].includes(code)) return "гроза";
  return "погода обновлена";
}

function getTravelWeatherAdvice(temp, wind, precipitation, code, rainChance) {
  if (rainChance >= 50 || precipitation > 0 || [61, 63, 65, 80, 81, 82, 95, 96, 99].includes(code)) {
    return "Лучше взять зонт и выбрать маршрут с кафе или музеями.";
  }

  if (temp <= 5) {
    return "Холодно — лучше одеться теплее и сократить долгие прогулки.";
  }

  if (temp >= 28) {
    return "Жарко — берите воду и планируйте больше пауз в тени.";
  }

  if (wind >= 10) {
    return "Ветрено — для открытых площадок лучше взять куртку.";
  }

  return "Сегодня подходит для прогулки по городу.";
}

async function loadWeather(cityKey = "astana") {
  const city = cityWeather[cityKey];

  weatherTabs.forEach((tab) => {
    tab.classList.toggle("is-active", tab.dataset.weatherCity === cityKey);
  });

  weatherBox.innerHTML = `<span class="weather-card__status">Загружаем погоду для ${city.name}...</span>`;

  const url = new URL("https://api.open-meteo.com/v1/forecast");
  url.search = new URLSearchParams({
    latitude: city.lat,
    longitude: city.lon,
    current: "temperature_2m,weather_code,wind_speed_10m,precipitation",
    daily: "temperature_2m_max,temperature_2m_min,precipitation_probability_max",
    timezone: "auto",
    forecast_days: "1"
  }).toString();

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("weather request failed");
    }

    const data = await response.json();
    const temp = Math.round(data.current.temperature_2m);
    const wind = Math.round(data.current.wind_speed_10m);
    const code = data.current.weather_code;
    const precipitation = data.current.precipitation || 0;
    const max = Math.round(data.daily.temperature_2m_max[0]);
    const min = Math.round(data.daily.temperature_2m_min[0]);
    const rainChance = data.daily.precipitation_probability_max?.[0] ?? 0;
    const advice = getTravelWeatherAdvice(temp, wind, precipitation, code, rainChance);

    weatherBox.innerHTML = `
      <div class="weather-card__main">
        <span class="weather-card__icon">${getWeatherIcon(code)}</span>
        <div>
          <strong>${city.name}: ${temp}°C</strong>
          <span>${getWeatherText(code)}, днём ${max}° / ночью ${min}°</span>
        </div>
      </div>
      <div class="weather-card__grid">
        <span>Ветер: ${wind} км/ч</span>
        <span>Осадки: ${rainChance}%</span>
      </div>
      <p>${advice}</p>
    `;
  } catch (error) {
    weatherBox.innerHTML = `
      <div class="weather-card__main">
        <span class="weather-card__icon">🌤️</span>
        <div>
          <strong>${city.name}</strong>
          <span>Не удалось загрузить погоду</span>
        </div>
      </div>
      <p>Проверьте интернет или откройте сайт через Live Server. Сам блок погоды уже подключён.</p>
    `;
  }
}

function createStepDetailMarkup(step) {
  return `
    <div class="step-detail-box__top">
      <div>
        <span class="step-detail-box__label">Подробно о точке</span>
        <h4>${step.place}</h4>
      </div>
      <span class="step-detail-box__time">${step.time} · ${step.duration}</span>
    </div>
    <p>${step.detail}</p>
    <div class="step-detail-box__tip">
      <strong>Совет:</strong> ${step.practical}
    </div>
    <a class="map-link" href="${createSinglePointMapLink(step)}" target="_blank" rel="noopener">
      Открыть эту точку на карте
    </a>
  `;
}

function createCostList(plan) {
  return (plan.costDetails || [])
    .map((item) => `<li>${item}</li>`)
    .join("");
}

function renderPlanModal(plan, initialStepIndex = 0) {
  const tags = plan.tags.map((tag) => `<span>${tag}</span>`).join("");
  const steps = plan.steps
    .map(
      (step, index) => `
        <button class="plan-step ${index === initialStepIndex ? "is-selected" : ""}" type="button" data-step="${index}">
          <span class="plan-step__time">${step.time}</span>
          <span class="plan-step__content">
            <span class="plan-step__place">${step.place}</span>
            <span class="plan-step__note">${step.note}</span>
          </span>
        </button>
      `
    )
    .join("");

  planModalBody.innerHTML = `
    <div class="plan-modal__hero" style="--image: url('${plan.image}')">
      <div class="plan-modal__hero-overlay"></div>
      <div class="plan-modal__hero-content">
        <span class="plan-card__city">${plan.city}</span>
        <span class="plan-modal__meta">${plan.meta}</span>
        <h3>${plan.title}</h3>
        <p>${plan.text}</p>
        <div class="route-facts route-facts--modal">
          <span>⏱ ${plan.durationText}</span>
          <span>💸 ${plan.budgetText}</span>
          <span>🎟 ${plan.entryCostText}</span>
        </div>
        <div class="tags">${tags}</div>
        <div class="plan-modal__actions">
          <a class="btn btn--primary btn--small" href="${createRouteMapLink(plan)}" target="_blank" rel="noopener">Маршрут в Google Maps</a>
          <button class="btn btn--ghost-light btn--small" type="button" id="planModalCloseSecondary">Закрыть</button>
        </div>
      </div>
    </div>
    <div class="plan-modal__content">
      <div class="plan-modal__timeline">
        <p class="plan-details__hint">Нажмите на пункт маршрута, чтобы увидеть подробное описание и открыть точку на карте.</p>
        <div class="plan-steps-list">${steps}</div>
      </div>
      <div class="plan-modal__aside">
        <div class="step-detail-box">${createStepDetailMarkup(plan.steps[initialStepIndex])}</div>
        <div class="cost-box">
          <span class="step-detail-box__label">Время и стоимость</span>
          <h4>${plan.durationText} · ${plan.budgetText}</h4>
          <p>Цены примерные, потому что билеты, кафе и такси могут меняться.</p>
          <ul>${createCostList(plan)}</ul>
        </div>
      </div>
    </div>
  `;

  const detailBox = planModalBody.querySelector('.step-detail-box');
  const stepButtons = planModalBody.querySelectorAll('.plan-step');

  stepButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const stepIndex = Number(button.dataset.step);
      const currentStep = plan.steps[stepIndex];
      stepButtons.forEach((item) => item.classList.remove('is-selected'));
      button.classList.add('is-selected');
      detailBox.innerHTML = createStepDetailMarkup(currentStep);
    });
  });

  const secondaryClose = document.getElementById('planModalCloseSecondary');
  secondaryClose?.addEventListener('click', closePlanModal);
}

function openPlanModal(plan) {
  renderPlanModal(plan, 0);
  planModal.hidden = false;
  document.body.classList.add('modal-open');
}

function closePlanModal() {
  planModal.hidden = true;
  document.body.classList.remove('modal-open');
}

function createPlanCard(plan) {
  const article = document.createElement("article");
  article.className = "plan-card";
  article.dataset.city = plan.cityKey;
  article.style.setProperty("--image", `url("${plan.image}")`);

  const tags = plan.tags.map((tag) => `<span>${tag}</span>`).join("");

  article.innerHTML = `
    <div class="plan-card__image"></div>
    <div class="plan-card__body">
      <div class="plan-card__top">
        <span class="plan-card__city">${plan.city}</span>
        <span class="plan-card__meta">${plan.audience}</span>
      </div>
      <h3>${plan.title}</h3>
      <p class="plan-card__text">${plan.text}</p>
      <div class="route-facts">
        <span>⏱ ${plan.durationText}</span>
        <span>💸 ${plan.budgetText}</span>
        <span>🎟 ${plan.entryCostText}</span>
      </div>
      <div class="tags">${tags}</div>
      <div class="plan-card__actions">
        <button class="btn btn--primary btn--small plan-open" type="button">Открыть план</button>
        <a class="btn btn--outline btn--small" href="${createRouteMapLink(plan)}" target="_blank" rel="noopener">Google Maps</a>
      </div>
    </div>
  `;

  article.querySelector('.plan-open').addEventListener('click', () => {
    openPlanModal(plan);
  });

  return article;
}

function getFilteredRoutes() {
  return routes.filter((route) => {
    const cityMatches = activeCity === "all" || route.cityKey === activeCity;
    const typeMatches = activeType === "all" || route.categories?.includes(activeType);
    return cityMatches && typeMatches;
  });
}

function renderRoutes() {
  routesGrid.innerHTML = "";

  const filteredRoutes = getFilteredRoutes();

  if (routesCounter) {
    routesCounter.textContent = filteredRoutes.length === routes.length
      ? "Показаны все маршруты"
      : `Найдено маршрутов: ${filteredRoutes.length}`;
  }

  if (filteredRoutes.length === 0) {
    routesGrid.innerHTML = `
      <div class="empty-routes">
        <h3>Маршрутов не найдено</h3>
        <p>Попробуйте выбрать другой город или другой тип поездки.</p>
      </div>
    `;
    return;
  }

  filteredRoutes.forEach((plan) => {
    routesGrid.appendChild(createPlanCard(plan));
  });
}

cityTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    activeCity = tab.dataset.filter;

    cityTabs.forEach((item) => item.classList.remove("is-active"));
    tab.classList.add("is-active");

    if (activeCity !== "all" && cityWeather[activeCity]) {
      loadWeather(activeCity);
    }

    renderRoutes();
  });
});

typeTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    activeType = tab.dataset.type;

    typeTabs.forEach((item) => item.classList.remove("is-active"));
    tab.classList.add("is-active");

    renderRoutes();
  });
});

weatherTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    loadWeather(tab.dataset.weatherCity);
  });
});

planModalBackdrop?.addEventListener('click', closePlanModal);
planModalClose?.addEventListener('click', closePlanModal);

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !planModal.hidden) {
    closePlanModal();
  }
});

renderRoutes();
loadWeather("astana");
