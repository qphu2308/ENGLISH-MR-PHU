// Real photographs; attribution: /photo-credits.html.
const REAL_PHOTOS = {
  "apple": {
    "url": "assets/photos/apple.webp",
    "x": 50,
    "y": 50,
    "size": 100,
    "credit": "Photo by Tobi on Unsplash",
    "source": "https://unsplash.com/photos/zLCR7RsxYGs",
    "kind": "photo"
  },
  "banana": {
    "url": "assets/photos/banana.webp",
    "x": 50,
    "y": 50,
    "size": 100,
    "credit": "Photo by Mockup Graphics on Unsplash",
    "source": "https://unsplash.com/photos/Kl3467edwsE",
    "kind": "photo"
  },
  "orange": {
    "url": "assets/photos/orange.webp",
    "x": 50,
    "y": 50,
    "size": 100,
    "credit": "Photo by Mae Mu on Unsplash",
    "source": "https://unsplash.com/photos/U1iYwZ8Dx7k",
    "kind": "photo"
  },
  "mango": {
    "url": "assets/photos/mango.webp",
    "x": 50,
    "y": 50,
    "size": 100,
    "credit": "Photo by Allec Gomes on Unsplash",
    "source": "https://unsplash.com/photos/7CMH2a9Vumo",
    "kind": "photo"
  },
  "grapes": {
    "url": "assets/photos/grapes.webp",
    "x": 50,
    "y": 50,
    "size": 100,
    "credit": "Photo by Andrey Haimin on Unsplash",
    "source": "https://unsplash.com/photos/qtwlKiu6VHg",
    "kind": "photo"
  },
  "watermelon": {
    "url": "assets/photos/watermelon.webp",
    "x": 50,
    "y": 50,
    "size": 100,
    "credit": "Photo by Mockup Graphics on Unsplash",
    "source": "https://unsplash.com/photos/13PBliWTDng",
    "kind": "photo"
  },
  "strawberry": {
    "url": "assets/photos/strawberry.webp",
    "x": 50,
    "y": 50,
    "size": 100,
    "credit": "Photo by Allec Gomes on Unsplash",
    "source": "https://unsplash.com/photos/xnRg3xDcNnE",
    "kind": "photo"
  },
  "pineapple": {
    "url": "assets/photos/pineapple.webp",
    "x": 50,
    "y": 50,
    "size": 100,
    "credit": "Photo by Stephany Williams on Unsplash",
    "source": "https://unsplash.com/photos/yx3-a7ualMM",
    "kind": "photo"
  },
  "rabbit": {
    "url": "assets/photos/rabbit.webp",
    "x": 50,
    "y": 50,
    "size": 100,
    "credit": "Photo by Satyabratasm on Unsplash",
    "source": "https://unsplash.com/photos/u_kMWN-BWyU",
    "kind": "photo"
  },
  "elephant": {
    "url": "assets/photos/elephant.webp",
    "x": 50,
    "y": 50,
    "size": 100,
    "credit": "Photo by Nam Anh on Unsplash",
    "source": "https://unsplash.com/photos/QJbyG6O0ick",
    "kind": "photo"
  },
  "lion": {
    "url": "assets/photos/lion.webp",
    "x": 50,
    "y": 50,
    "size": 100,
    "credit": "Photo by Mariola Grobelska on Unsplash",
    "source": "https://unsplash.com/photos/8a7ZTFKax_I",
    "kind": "photo"
  },
  "monkey": {
    "url": "assets/photos/monkey.webp",
    "x": 50,
    "y": 50,
    "size": 100,
    "credit": "Photo by Jamie Haughton on Unsplash",
    "source": "https://unsplash.com/photos/Z05GiksmqYU",
    "kind": "photo"
  },
  "bird": {
    "url": "assets/photos/bird.webp",
    "x": 50,
    "y": 50,
    "size": 100,
    "credit": "Photo by Zdenek Machacek on Unsplash",
    "source": "https://unsplash.com/photos/OlKkCmToXEs",
    "kind": "photo"
  },
  "duck": {
    "url": "assets/photos/duck.webp",
    "x": 50,
    "y": 50,
    "size": 100,
    "credit": "Photo by Ross Sokolovski on Unsplash",
    "source": "https://unsplash.com/photos/kCZSzqvIei4",
    "kind": "photo"
  },
  "dog": {
    "url": "assets/photos/dog.webp",
    "x": 50,
    "y": 50,
    "size": 100,
    "credit": "Photo by Richard Brutyo on Unsplash",
    "source": "https://unsplash.com/photos/Sg3XwuEpybU",
    "kind": "photo"
  },
  "fish": {
    "url": "assets/photos/fish.webp",
    "x": 50,
    "y": 50,
    "size": 100,
    "credit": "Photo by Zhengtao Tang on Unsplash",
    "source": "https://unsplash.com/photos/V7SKRhXskv8",
    "kind": "photo"
  },
  "horse": {
    "url": "assets/photos/horse.webp",
    "x": 50,
    "y": 50,
    "size": 100,
    "credit": "Photo by Helena Lopes on Unsplash",
    "source": "https://unsplash.com/photos/lIeqGEdvex0",
    "kind": "photo"
  },
  "cow": {
    "url": "assets/photos/cow.webp",
    "x": 50,
    "y": 50,
    "size": 100,
    "credit": "Photo by Screenroad on Unsplash",
    "source": "https://unsplash.com/photos/FquDp5N1Gw0",
    "kind": "photo"
  },
  "pencil": {
    "url": "assets/photos/pencil.webp",
    "x": 50,
    "y": 50,
    "size": 100,
    "credit": "Photo by Glen Carrie on Unsplash",
    "source": "https://unsplash.com/photos/Md9H3aeXFHE",
    "kind": "photo"
  },
  "book": {
    "url": "assets/photos/book.webp",
    "x": 50,
    "y": 50,
    "size": 100,
    "credit": "Photo by Gulfer Ergin on Unsplash",
    "source": "https://unsplash.com/photos/LUGuCtvlk1Q",
    "kind": "photo"
  },
  "ruler": {
    "url": "assets/photos/ruler.webp",
    "x": 50,
    "y": 50,
    "size": 100,
    "credit": "Photo by Markus Spiske on Unsplash",
    "source": "https://unsplash.com/photos/pwpVGQ-A5qI",
    "kind": "photo"
  },
  "eraser": {
    "url": "assets/photos/eraser.webp",
    "x": 50,
    "y": 50,
    "size": 100,
    "credit": "Photo by Daniel Shapiro on Unsplash",
    "source": "https://unsplash.com/photos/r5KFjtLvB_I",
    "kind": "photo"
  },
  "chair": {
    "url": "assets/photos/chair.webp",
    "x": 50,
    "y": 50,
    "size": 100,
    "credit": "Photo by Scopic Ltd on Unsplash",
    "source": "https://unsplash.com/photos/NLlWwR4d3qU",
    "kind": "photo"
  },
  "bread": {
    "url": "assets/photos/bread.webp",
    "x": 50,
    "y": 50,
    "size": 100,
    "credit": "Photo by Charles Chen on Unsplash",
    "source": "https://unsplash.com/photos/w2ZFjDnUL3w",
    "kind": "photo"
  },
  "noodles": {
    "url": "assets/photos/noodles.webp",
    "x": 50,
    "y": 50,
    "size": 100,
    "credit": "Photo by Ikhsan Baihaqi on Unsplash",
    "source": "https://unsplash.com/photos/pbc2wXbQYpI",
    "kind": "photo"
  },
  "juice": {
    "url": "assets/photos/juice.webp",
    "x": 50,
    "y": 50,
    "size": 100,
    "credit": "Photo by Abhishek Hajare on Unsplash",
    "source": "https://unsplash.com/photos/kkrXVKK-jhg",
    "kind": "photo"
  },
  "egg": {
    "url": "assets/photos/egg.webp",
    "x": 50,
    "y": 50,
    "size": 100,
    "credit": "Photo by Jasmin Egger on Unsplash",
    "source": "https://unsplash.com/photos/PcGNb3QJjXI",
    "kind": "photo"
  },
  "milk": {
    "url": "assets/photos/milk.webp",
    "x": 50,
    "y": 50,
    "size": 100,
    "credit": "Photo by Eiliv Aceron on Unsplash",
    "source": "https://unsplash.com/photos/_8bnn1GqX70",
    "kind": "photo"
  },
  "cake": {
    "url": "assets/photos/cake.webp",
    "x": 50,
    "y": 50,
    "size": 100,
    "credit": "Photo by American Heritage Chocolate on Unsplash",
    "source": "https://unsplash.com/photos/vdx5hPQhXFk",
    "kind": "photo"
  },
  "pizza": {
    "url": "assets/photos/pizza.webp",
    "x": 50,
    "y": 50,
    "size": 100,
    "credit": "Photo by Ivan Torres on Unsplash",
    "source": "https://unsplash.com/photos/MQUqbmszGGM",
    "kind": "photo"
  },
  "ice cream": {
    "url": "assets/photos/ice-cream.webp",
    "x": 50,
    "y": 50,
    "size": 100,
    "credit": "Photo by Ian Dooley on Unsplash",
    "source": "https://unsplash.com/photos/TLD6iCOlyb0",
    "kind": "photo"
  },
  "clock": {
    "url": "assets/photos/clock.webp",
    "x": 50,
    "y": 50,
    "size": 100,
    "credit": "Photo by Ocean Ng on Unsplash",
    "source": "https://unsplash.com/photos/L0xOtAnv94Y",
    "kind": "photo"
  },
  "bed": {
    "url": "assets/photos/bed.webp",
    "x": 50,
    "y": 50,
    "size": 100,
    "credit": "Photo by Quilia on Unsplash",
    "source": "https://unsplash.com/photos/iAftdIcgpFc",
    "kind": "photo"
  },
  "schoolbag": {
    "url": "assets/photos/schoolbag.webp",
    "x": 50,
    "y": 50,
    "size": 100,
    "credit": "Photo by Note Thanun on Unsplash",
    "source": "https://unsplash.com/photos/CYlPykF-qAM",
    "kind": "photo"
  },
  "tiger": {
    "url": "assets/photos/tiger.webp",
    "x": 50,
    "y": 50,
    "size": 100,
    "credit": "Photo by Kartik Iyer on Unsplash",
    "source": "https://unsplash.com/photos/DJ4vjcD0s0I",
    "kind": "photo"
  },
  "giraffe": {
    "url": "assets/photos/giraffe.webp",
    "x": 50,
    "y": 50,
    "size": 100,
    "credit": "Photo by Thomas Evans on Unsplash",
    "source": "https://unsplash.com/photos/NVXY8_M1n40",
    "kind": "photo"
  },
  "hippo": {
    "url": "assets/photos/hippo.webp",
    "x": 50,
    "y": 50,
    "size": 100,
    "credit": "Photo by Tim De Pauw on Unsplash",
    "source": "https://unsplash.com/photos/SBYsc1gsA-M",
    "kind": "photo"
  },
  "crocodile": {
    "url": "assets/photos/crocodile.webp",
    "x": 50,
    "y": 50,
    "size": 100,
    "credit": "Photo by Shelly Collins on Unsplash",
    "source": "https://unsplash.com/photos/YppMBEPyfFQ",
    "kind": "photo"
  },
  "panda": {
    "url": "assets/photos/panda.webp",
    "x": 50,
    "y": 50,
    "size": 100,
    "credit": "Photo by William Warby on Unsplash",
    "source": "https://unsplash.com/photos/ScdnaKVtPIA",
    "kind": "photo"
  },
  "car": {
    "url": "assets/photos/car.webp",
    "x": 50,
    "y": 50,
    "size": 100,
    "credit": "Photo by Josh Berquist on Unsplash",
    "source": "https://unsplash.com/photos/_4sWbzH5fp8",
    "kind": "photo"
  },
  "bus": {
    "url": "assets/photos/bus.webp",
    "x": 50,
    "y": 50,
    "size": 100,
    "credit": "Photo by Jonathan Borba on Unsplash",
    "source": "https://unsplash.com/photos/T5jzpRTVF1U",
    "kind": "photo"
  },
  "bicycle": {
    "url": "assets/photos/bicycle.webp",
    "x": 50,
    "y": 50,
    "size": 100,
    "credit": "Photo by Robert Bye on Unsplash",
    "source": "https://unsplash.com/photos/tG36rvCeqng",
    "kind": "photo"
  },
  "ship": {
    "url": "assets/photos/ship.webp",
    "x": 50,
    "y": 50,
    "size": 100,
    "credit": "Photo by Venti Views on Unsplash",
    "source": "https://unsplash.com/photos/FPKnAO-CF6M",
    "kind": "photo"
  },
  "train": {
    "url": "assets/photos/train.webp",
    "x": 50,
    "y": 50,
    "size": 100,
    "credit": "Photo by Denis Chick on Unsplash",
    "source": "https://unsplash.com/photos/mHqIs22M2Kw",
    "kind": "photo"
  },
  "library": {
    "url": "assets/photos/library.webp",
    "x": 50,
    "y": 50,
    "size": 100,
    "credit": "Photo by Emil Widlund on Unsplash",
    "source": "https://unsplash.com/photos/xrbbXIXAWY0",
    "kind": "photo"
  },
  "hospital": {
    "url": "assets/photos/hospital.webp",
    "x": 50,
    "y": 50,
    "size": 100,
    "credit": "Photo by Martha Dominguez De Gouveia on Unsplash",
    "source": "https://unsplash.com/photos/nMyM7fxpokE",
    "kind": "photo"
  },
  "chicken-food": {
    "url": "assets/photos/chicken-food.webp",
    "x": 50,
    "y": 50,
    "size": 100,
    "credit": "Photo by Claudio Schwarz on Unsplash",
    "source": "https://unsplash.com/photos/4qJlXK4mYzU",
    "kind": "photo"
  },
  "cat": {
    "url": "assets/photos/cat.webp",
    "x": 50,
    "y": 50,
    "size": 100,
    "credit": "Photo by Alvan Nee on Unsplash",
    "source": "https://unsplash.com/photos/ZCHj_2lJP00",
    "kind": "photo"
  },
  "kitchen": {
    "url": "assets/photos/kitchen.webp",
    "x": 50,
    "y": 50,
    "size": 100,
    "credit": "Photo by Jason Briscoe on Unsplash",
    "source": "https://unsplash.com/photos/GliaHAJ3_5A",
    "kind": "photo"
  },
  "bedroom": {
    "url": "assets/photos/bedroom.webp",
    "x": 50,
    "y": 50,
    "size": 100,
    "credit": "Photo by Christopher Jolly on Unsplash",
    "source": "https://unsplash.com/photos/GqbU78bdJFM",
    "kind": "photo"
  },
  "bathroom": {
    "url": "assets/photos/bathroom.webp",
    "x": 50,
    "y": 50,
    "size": 100,
    "credit": "Photo by Lotus Design N Print on Unsplash",
    "source": "https://unsplash.com/photos/g51F6-WYzyU",
    "kind": "photo"
  },
  "playground": {
    "url": "assets/photos/playground.webp",
    "x": 50,
    "y": 50,
    "size": 100,
    "credit": "Photo by Power Lai on Unsplash",
    "source": "https://unsplash.com/photos/E0BmfKjeQrw",
    "kind": "photo"
  },
  "clouds": {
    "url": "assets/photos/clouds.webp",
    "x": 50,
    "y": 50,
    "size": 100,
    "credit": "Photo by Engin Akyurt on Unsplash",
    "source": "https://unsplash.com/photos/gJILnne_HFg",
    "kind": "photo"
  },
  "zebra": {
    "url": "assets/photos/zebra.webp",
    "x": 50,
    "y": 50,
    "size": 100,
    "credit": "Photo by Jeff Griffith on Unsplash",
    "source": "https://unsplash.com/photos/ZqYPM8i60F8",
    "kind": "photo"
  },
  "classroom": {
    "url": "assets/photos/classroom.webp",
    "x": 50,
    "y": 50,
    "size": 100,
    "credit": "Photo by National Cancer Institute on Unsplash",
    "source": "https://unsplash.com/photos/N_aihp118p8",
    "kind": "photo"
  },
  "cooked-fish": {
    "url": "assets/photos/cooked-fish.webp",
    "x": 50,
    "y": 50,
    "size": 100,
    "credit": "Photo by Keesha S Kitchen on Unsplash",
    "source": "https://unsplash.com/photos/KRbF_wsztBE",
    "kind": "photo"
  },
  "table": {
    "url": "assets/photos/table.webp",
    "x": 50,
    "y": 50,
    "size": 100,
    "credit": "Photo by Hannah Busing on Unsplash",
    "source": "https://unsplash.com/photos/nME9TubZtSo",
    "kind": "photo"
  },
  "snow": {
    "url": "assets/photos/snow.webp",
    "x": 50,
    "y": 50,
    "size": 100,
    "credit": "Photo by Adam Chang on Unsplash",
    "source": "https://unsplash.com/photos/IWenq-4JHqo",
    "kind": "photo"
  },
  "rice": {
    "url": "assets/photos/rice.webp",
    "x": 50,
    "y": 50,
    "size": 100,
    "credit": "Photo by Vinn Koonyosying on Unsplash",
    "source": "https://unsplash.com/photos/zXNC_lBBVGE",
    "kind": "photo"
  }
};
const PHOTO_ALIASES = {"parrot": "bird", "goldfish": "fish", "school bag": "schoolbag", "backpack": "schoolbag", "ice-cream": "ice cream", "birthday cake": "cake", "grape": "grapes", "bike": "bicycle", "by bicycle": "bicycle", "by bus": "bus", "by car": "car", "cloudy": "clouds", "snowy": "snow", "kitten": "cat"};
