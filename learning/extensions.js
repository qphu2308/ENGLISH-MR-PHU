// Supplementary words only; no duplicated main vocabulary.
const ORDINAL_NAMES = [
  "first",
  "second",
  "third",
  "fourth",
  "fifth",
  "sixth",
  "seventh",
  "eighth",
  "ninth",
  "tenth",
  "eleventh",
  "twelfth",
  "thirteenth",
  "fourteenth",
  "fifteenth",
  "sixteenth",
  "seventeenth",
  "eighteenth",
  "nineteenth",
  "twentieth",
  "twenty-first",
  "twenty-second",
  "twenty-third",
  "twenty-fourth",
  "twenty-fifth",
  "twenty-sixth",
  "twenty-seventh",
  "twenty-eighth",
  "twenty-ninth",
  "thirtieth",
  "thirty-first"
];
const ORDINAL_ROWS = [
  [
    "1st",
    "first",
    "thứ nhất"
  ],
  [
    "2nd",
    "second",
    "thứ hai"
  ],
  [
    "3rd",
    "third",
    "thứ ba"
  ],
  [
    "4th",
    "fourth",
    "thứ tư"
  ],
  [
    "5th",
    "fifth",
    "thứ năm"
  ],
  [
    "6th",
    "sixth",
    "thứ sáu"
  ],
  [
    "7th",
    "seventh",
    "thứ bảy"
  ],
  [
    "8th",
    "eighth",
    "thứ tám"
  ],
  [
    "9th",
    "ninth",
    "thứ chín"
  ],
  [
    "10th",
    "tenth",
    "thứ mười"
  ],
  [
    "11th",
    "eleventh",
    "thứ mười một"
  ],
  [
    "12th",
    "twelfth",
    "thứ mười hai"
  ],
  [
    "13th",
    "thirteenth",
    "thứ mười ba"
  ],
  [
    "14th",
    "fourteenth",
    "thứ mười bốn"
  ],
  [
    "15th",
    "fifteenth",
    "thứ mười lăm"
  ],
  [
    "16th",
    "sixteenth",
    "thứ mười sáu"
  ],
  [
    "17th",
    "seventeenth",
    "thứ mười bảy"
  ],
  [
    "18th",
    "eighteenth",
    "thứ mười tám"
  ],
  [
    "19th",
    "nineteenth",
    "thứ mười chín"
  ],
  [
    "20th",
    "twentieth",
    "thứ hai mươi"
  ],
  [
    "21st",
    "twenty-first",
    "thứ hai mươi mốt"
  ],
  [
    "22nd",
    "twenty-second",
    "thứ hai mươi hai"
  ],
  [
    "23rd",
    "twenty-third",
    "thứ hai mươi ba"
  ],
  [
    "24th",
    "twenty-fourth",
    "thứ hai mươi bốn"
  ],
  [
    "25th",
    "twenty-fifth",
    "thứ hai mươi lăm"
  ],
  [
    "26th",
    "twenty-sixth",
    "thứ hai mươi sáu"
  ],
  [
    "27th",
    "twenty-seventh",
    "thứ hai mươi bảy"
  ],
  [
    "28th",
    "twenty-eighth",
    "thứ hai mươi tám"
  ],
  [
    "29th",
    "twenty-ninth",
    "thứ hai mươi chín"
  ],
  [
    "30th",
    "thirtieth",
    "thứ ba mươi"
  ],
  [
    "31st",
    "thirty-first",
    "thứ ba mươi mốt"
  ]
];
const JOB_ROWS = [
  [
    "doctor",
    "bác sĩ",
    "hospital / clinic",
    "bệnh viện / phòng khám",
    "A doctor can work in a hospital."
  ],
  [
    "nurse",
    "y tá",
    "hospital / nursing home",
    "bệnh viện / viện dưỡng lão",
    "A nurse can work in a hospital."
  ],
  [
    "teacher",
    "giáo viên",
    "school",
    "trường học",
    "A teacher works in a school."
  ],
  [
    "farmer",
    "nông dân",
    "farm",
    "nông trại",
    "A farmer works on a farm."
  ],
  [
    "cook",
    "đầu bếp",
    "restaurant",
    "nhà hàng",
    "A cook can work in a restaurant."
  ],
  [
    "worker",
    "công nhân",
    "factory",
    "nhà máy",
    "A worker can work in a factory."
  ],
  [
    "office worker",
    "nhân viên văn phòng",
    "office",
    "văn phòng",
    "An office worker works in an office."
  ],
  [
    "police officer",
    "cảnh sát",
    "police station",
    "đồn cảnh sát",
    "A police officer can work at a police station."
  ],
  [
    "firefighter",
    "lính cứu hỏa",
    "fire station",
    "trạm cứu hỏa",
    "A firefighter works at a fire station."
  ],
  [
    "reporter",
    "phóng viên",
    "newsroom / TV station",
    "phòng tin tức / đài truyền hình",
    "A reporter can work in a newsroom."
  ],
  [
    "gardener",
    "người làm vườn",
    "garden / park",
    "vườn / công viên",
    "A gardener can work in a park."
  ],
  [
    "writer",
    "nhà văn",
    "home / office",
    "nhà / văn phòng",
    "A writer can work at home."
  ],
  [
    "actor",
    "diễn viên",
    "theatre / film studio",
    "nhà hát / trường quay phim",
    "An actor can work in a theatre."
  ],
  [
    "singer",
    "ca sĩ",
    "stage / recording studio",
    "sân khấu / phòng thu",
    "A singer can work in a recording studio."
  ],
  [
    "driver",
    "tài xế",
    "bus / taxi / truck",
    "xe buýt / taxi / xe tải",
    "A driver can drive a bus."
  ]
];
const EXTENSIONS = {
  "1": {
    "1": {
      "topic": "Playground things",
      "words": [
        [
          "swing",
          "xích đu",
          ""
        ],
        [
          "slide",
          "cầu trượt",
          ""
        ],
        [
          "seesaw",
          "bập bênh",
          ""
        ],
        [
          "bench",
          "ghế dài",
          ""
        ]
      ],
      "patterns": [
        [
          "I can see a ________.",
          "Em nhìn thấy một ________."
        ]
      ],
      "examples": [
        [
          "I can see a swing.",
          "Em nhìn thấy một chiếc xích đu."
        ]
      ],
      "note": "Explore more words from this topic. Choose two or three words, listen, repeat and make your own sentences. These words are also included in Unit review."
    },
    "2": {
      "topic": "At the table",
      "words": [
        [
          "plate",
          "đĩa",
          ""
        ],
        [
          "spoon",
          "thìa",
          ""
        ],
        [
          "fork",
          "dĩa",
          ""
        ],
        [
          "bowl",
          "bát",
          ""
        ]
      ],
      "patterns": [
        [
          "This is a ________.",
          "Đây là một ________."
        ]
      ],
      "examples": [
        [
          "This is a spoon.",
          "Đây là một chiếc thìa."
        ]
      ],
      "note": "Explore more words from this topic. Choose two or three words, listen, repeat and make your own sentences. These words are also included in Unit review."
    },
    "3": {
      "topic": "Fruit at the market",
      "words": [
        [
          "banana",
          "quả chuối",
          ""
        ],
        [
          "orange",
          "quả cam",
          ""
        ],
        [
          "pear",
          "quả lê",
          ""
        ],
        [
          "grape",
          "quả nho",
          ""
        ]
      ],
      "patterns": [
        [
          "I like ________.",
          "Em thích ________."
        ]
      ],
      "examples": [
        [
          "I like bananas.",
          "Em thích chuối."
        ]
      ],
      "note": "Explore more words from this topic. Choose two or three words, listen, repeat and make your own sentences. These words are also included in Unit review."
    },
    "4": {
      "topic": "Bedroom things",
      "words": [
        [
          "bed",
          "giường",
          ""
        ],
        [
          "pillow",
          "gối",
          ""
        ],
        [
          "blanket",
          "chăn",
          ""
        ],
        [
          "lamp",
          "đèn",
          ""
        ]
      ],
      "patterns": [
        [
          "This is my ________.",
          "Đây là ________ của em."
        ]
      ],
      "examples": [
        [
          "This is my bed.",
          "Đây là giường của em."
        ]
      ],
      "note": "Explore more words from this topic. Choose two or three words, listen, repeat and make your own sentences. These words are also included in Unit review."
    },
    "5": {
      "topic": "Food and drinks",
      "words": [
        [
          "bread",
          "bánh mì",
          ""
        ],
        [
          "rice",
          "cơm",
          ""
        ],
        [
          "egg",
          "trứng",
          ""
        ],
        [
          "water",
          "nước",
          ""
        ]
      ],
      "patterns": [
        [
          "I like ________.",
          "Em thích ________."
        ]
      ],
      "examples": [
        [
          "I like rice.",
          "Em thích cơm."
        ]
      ],
      "note": "Explore more words from this topic. Choose two or three words, listen, repeat and make your own sentences. These words are also included in Unit review."
    },
    "6": {
      "topic": "My school bag",
      "words": [
        [
          "ruler",
          "thước kẻ",
          ""
        ],
        [
          "eraser",
          "tẩy",
          ""
        ],
        [
          "notebook",
          "vở",
          ""
        ],
        [
          "school bag",
          "cặp sách",
          ""
        ]
      ],
      "patterns": [
        [
          "I have a ________.",
          "Em có một ________."
        ]
      ],
      "examples": [
        [
          "I have a ruler.",
          "Em có một chiếc thước kẻ."
        ]
      ],
      "note": "Explore more words from this topic. Choose two or three words, listen, repeat and make your own sentences. These words are also included in Unit review."
    },
    "7": {
      "topic": "In a garden",
      "words": [
        [
          "flower",
          "hoa",
          ""
        ],
        [
          "tree",
          "cây",
          ""
        ],
        [
          "grass",
          "cỏ",
          ""
        ],
        [
          "butterfly",
          "bướm",
          ""
        ]
      ],
      "patterns": [
        [
          "I can see a ________.",
          "Em nhìn thấy một ________."
        ]
      ],
      "examples": [
        [
          "I can see a butterfly.",
          "Em nhìn thấy một con bướm."
        ]
      ],
      "note": "Explore more words from this topic. Choose two or three words, listen, repeat and make your own sentences. These words are also included in Unit review."
    },
    "8": {
      "topic": "More body parts",
      "words": [
        [
          "arm",
          "cánh tay",
          ""
        ],
        [
          "leg",
          "chân",
          ""
        ],
        [
          "eye",
          "mắt",
          ""
        ],
        [
          "ear",
          "tai",
          ""
        ]
      ],
      "patterns": [
        [
          "Touch your ________.",
          "Hãy chạm vào ________ của em."
        ]
      ],
      "examples": [
        [
          "Touch your arm.",
          "Hãy chạm vào cánh tay của em."
        ]
      ],
      "note": "Explore more words from this topic. Choose two or three words, listen, repeat and make your own sentences. These words are also included in Unit review."
    },
    "9": {
      "topic": "Things in a shop",
      "words": [
        [
          "basket",
          "giỏ",
          ""
        ],
        [
          "bag",
          "túi",
          ""
        ],
        [
          "bottle",
          "chai",
          ""
        ],
        [
          "box",
          "hộp",
          ""
        ]
      ],
      "patterns": [
        [
          "This is a ________.",
          "Đây là một ________."
        ]
      ],
      "examples": [
        [
          "This is a basket.",
          "Đây là một chiếc giỏ."
        ]
      ],
      "note": "Explore more words from this topic. Choose two or three words, listen, repeat and make your own sentences. These words are also included in Unit review."
    },
    "10": {
      "topic": "More zoo animals",
      "words": [
        [
          "elephant",
          "voi",
          ""
        ],
        [
          "lion",
          "sư tử",
          ""
        ],
        [
          "giraffe",
          "hươu cao cổ",
          ""
        ],
        [
          "zebra",
          "ngựa vằn",
          ""
        ]
      ],
      "patterns": [
        [
          "Look at the ________.",
          "Hãy nhìn ________."
        ]
      ],
      "examples": [
        [
          "Look at the elephant.",
          "Hãy nhìn con voi."
        ]
      ],
      "note": "Explore more words from this topic. Choose two or three words, listen, repeat and make your own sentences. These words are also included in Unit review."
    },
    "11": {
      "topic": "On the road",
      "words": [
        [
          "car",
          "ô tô",
          ""
        ],
        [
          "taxi",
          "taxi",
          ""
        ],
        [
          "bicycle",
          "xe đạp",
          ""
        ],
        [
          "motorbike",
          "xe máy",
          ""
        ]
      ],
      "patterns": [
        [
          "I can see a ________.",
          "Em nhìn thấy một ________."
        ]
      ],
      "examples": [
        [
          "I can see a taxi.",
          "Em nhìn thấy một chiếc taxi."
        ]
      ],
      "note": "Explore more words from this topic. Choose two or three words, listen, repeat and make your own sentences. These words are also included in Unit review."
    },
    "12": {
      "topic": "Around the lake",
      "words": [
        [
          "boat",
          "thuyền",
          ""
        ],
        [
          "fish",
          "cá",
          ""
        ],
        [
          "frog",
          "ếch",
          ""
        ],
        [
          "bird",
          "chim",
          ""
        ]
      ],
      "patterns": [
        [
          "I can see a ________.",
          "Em nhìn thấy một ________."
        ]
      ],
      "examples": [
        [
          "I can see a boat.",
          "Em nhìn thấy một chiếc thuyền."
        ]
      ],
      "note": "Explore more words from this topic. Choose two or three words, listen, repeat and make your own sentences. These words are also included in Unit review."
    },
    "13": {
      "topic": "Canteen food",
      "words": [
        [
          "soup",
          "súp",
          ""
        ],
        [
          "rice",
          "cơm",
          ""
        ],
        [
          "bread",
          "bánh mì",
          ""
        ],
        [
          "egg",
          "trứng",
          ""
        ]
      ],
      "patterns": [
        [
          "I like ________.",
          "Em thích ________."
        ]
      ],
      "examples": [
        [
          "I like soup.",
          "Em thích súp."
        ]
      ],
      "note": "Explore more words from this topic. Choose two or three words, listen, repeat and make your own sentences. These words are also included in Unit review."
    },
    "14": {
      "topic": "More toys",
      "words": [
        [
          "doll",
          "búp bê",
          ""
        ],
        [
          "robot",
          "người máy đồ chơi",
          ""
        ],
        [
          "puzzle",
          "trò ghép hình",
          ""
        ],
        [
          "toy car",
          "ô tô đồ chơi",
          ""
        ]
      ],
      "patterns": [
        [
          "I have a ________.",
          "Em có một ________."
        ]
      ],
      "examples": [
        [
          "I have a robot.",
          "Em có một người máy đồ chơi."
        ]
      ],
      "note": "Explore more words from this topic. Choose two or three words, listen, repeat and make your own sentences. These words are also included in Unit review."
    },
    "15": {
      "topic": "Let’s move",
      "words": [
        [
          "kick",
          "đá",
          ""
        ],
        [
          "catch",
          "bắt",
          ""
        ],
        [
          "jump",
          "nhảy",
          ""
        ],
        [
          "run",
          "chạy",
          ""
        ]
      ],
      "patterns": [
        [
          "I can ________.",
          "Em có thể ________."
        ]
      ],
      "examples": [
        [
          "I can jump.",
          "Em có thể nhảy."
        ]
      ],
      "note": "Explore more words from this topic. Choose two or three words, listen, repeat and make your own sentences. These words are also included in Unit review."
    },
    "16": {
      "topic": "Things at home",
      "words": [
        [
          "sofa",
          "ghế sofa",
          ""
        ],
        [
          "chair",
          "ghế",
          ""
        ],
        [
          "table",
          "bàn",
          ""
        ],
        [
          "television",
          "ti vi",
          ""
        ]
      ],
      "patterns": [
        [
          "This is a ________.",
          "Đây là một ________."
        ]
      ],
      "examples": [
        [
          "This is a chair.",
          "Đây là một chiếc ghế."
        ]
      ],
      "note": "Explore more words from this topic. Choose two or three words, listen, repeat and make your own sentences. These words are also included in Unit review."
    }
  },
  "2": {
    "1": {
      "topic": "Party things",
      "words": [
        [
          "balloon",
          "bóng bay",
          ""
        ],
        [
          "candle",
          "nến",
          ""
        ],
        [
          "present",
          "quà",
          ""
        ],
        [
          "birthday card",
          "thiệp sinh nhật",
          ""
        ]
      ],
      "patterns": [
        [
          "I can see a ________.",
          "Em nhìn thấy một ________."
        ]
      ],
      "examples": [
        [
          "I can see a balloon.",
          "Em nhìn thấy một quả bóng bay."
        ]
      ],
      "note": "Explore more words from this topic. Choose two or three words, listen, repeat and make your own sentences. These words are also included in Unit review."
    },
    "2": {
      "topic": "Backyard fun",
      "words": [
        [
          "jump",
          "nhảy",
          ""
        ],
        [
          "skip",
          "nhảy dây",
          ""
        ],
        [
          "play",
          "chơi",
          ""
        ],
        [
          "run",
          "chạy",
          ""
        ]
      ],
      "patterns": [
        [
          "I can ________.",
          "Em có thể ________."
        ]
      ],
      "examples": [
        [
          "I can skip.",
          "Em có thể nhảy dây."
        ]
      ],
      "note": "Explore more words from this topic. Choose two or three words, listen, repeat and make your own sentences. These words are also included in Unit review."
    },
    "3": {
      "topic": "At the beach",
      "words": [
        [
          "shell",
          "vỏ sò",
          ""
        ],
        [
          "wave",
          "sóng",
          ""
        ],
        [
          "boat",
          "thuyền",
          ""
        ],
        [
          "sandcastle",
          "lâu đài cát",
          ""
        ]
      ],
      "patterns": [
        [
          "I can see a ________.",
          "Em nhìn thấy một ________."
        ]
      ],
      "examples": [
        [
          "I can see a sandcastle.",
          "Em nhìn thấy một lâu đài cát."
        ]
      ],
      "note": "Explore more words from this topic. Choose two or three words, listen, repeat and make your own sentences. These words are also included in Unit review."
    },
    "4": {
      "topic": "Country places",
      "words": [
        [
          "field",
          "cánh đồng",
          ""
        ],
        [
          "hill",
          "đồi",
          ""
        ],
        [
          "bridge",
          "cầu",
          ""
        ],
        [
          "pond",
          "ao",
          ""
        ]
      ],
      "patterns": [
        [
          "I can see a ________.",
          "Em nhìn thấy một ________."
        ]
      ],
      "examples": [
        [
          "I can see a bridge.",
          "Em nhìn thấy một cây cầu."
        ]
      ],
      "note": "Explore more words from this topic. Choose two or three words, listen, repeat and make your own sentences. These words are also included in Unit review."
    },
    "5": {
      "topic": "More shapes",
      "words": [
        [
          "circle",
          "hình tròn",
          ""
        ],
        [
          "triangle",
          "hình tam giác",
          ""
        ],
        [
          "rectangle",
          "hình chữ nhật",
          ""
        ],
        [
          "star",
          "hình ngôi sao",
          ""
        ]
      ],
      "patterns": [
        [
          "Draw a ________.",
          "Hãy vẽ một ________."
        ]
      ],
      "examples": [
        [
          "Draw a circle.",
          "Hãy vẽ một hình tròn."
        ]
      ],
      "note": "Explore more words from this topic. Choose two or three words, listen, repeat and make your own sentences. These words are also included in Unit review."
    },
    "6": {
      "topic": "Farm animals",
      "words": [
        [
          "cow",
          "bò",
          ""
        ],
        [
          "pig",
          "lợn",
          ""
        ],
        [
          "sheep",
          "cừu",
          ""
        ],
        [
          "hen",
          "gà mái",
          ""
        ]
      ],
      "patterns": [
        [
          "There is a ________.",
          "Có một ________."
        ]
      ],
      "examples": [
        [
          "There is a cow.",
          "Có một con bò."
        ]
      ],
      "note": "Explore more words from this topic. Choose two or three words, listen, repeat and make your own sentences. These words are also included in Unit review."
    },
    "7": {
      "topic": "Kitchen things",
      "words": [
        [
          "spoon",
          "thìa",
          ""
        ],
        [
          "plate",
          "đĩa",
          ""
        ],
        [
          "bowl",
          "bát",
          ""
        ],
        [
          "fridge",
          "tủ lạnh",
          ""
        ]
      ],
      "patterns": [
        [
          "Where is the ________?",
          "________ ở đâu?"
        ]
      ],
      "examples": [
        [
          "Where is the spoon?",
          "Chiếc thìa ở đâu?"
        ]
      ],
      "note": "Explore more words from this topic. Choose two or three words, listen, repeat and make your own sentences. These words are also included in Unit review."
    },
    "8": {
      "topic": "Around the village",
      "words": [
        [
          "house",
          "nhà",
          ""
        ],
        [
          "shop",
          "cửa hàng",
          ""
        ],
        [
          "school",
          "trường học",
          ""
        ],
        [
          "market",
          "chợ",
          ""
        ]
      ],
      "patterns": [
        [
          "There is a ________.",
          "Có một ________."
        ]
      ],
      "examples": [
        [
          "There is a market.",
          "Có một khu chợ."
        ]
      ],
      "note": "Explore more words from this topic. Choose two or three words, listen, repeat and make your own sentences. These words are also included in Unit review."
    },
    "9": {
      "topic": "Shopping for food",
      "words": [
        [
          "bread",
          "bánh mì",
          ""
        ],
        [
          "cheese",
          "phô mai",
          ""
        ],
        [
          "butter",
          "bơ",
          ""
        ],
        [
          "egg",
          "trứng",
          ""
        ]
      ],
      "patterns": [
        [
          "I want some ________.",
          "Em muốn một ít ________."
        ]
      ],
      "examples": [
        [
          "I want some bread.",
          "Em muốn một ít bánh mì."
        ]
      ],
      "note": "Explore more words from this topic. Choose two or three words, listen, repeat and make your own sentences. These words are also included in Unit review."
    },
    "10": {
      "topic": "More zoo animals",
      "words": [
        [
          "elephant",
          "voi",
          ""
        ],
        [
          "lion",
          "sư tử",
          ""
        ],
        [
          "giraffe",
          "hươu cao cổ",
          ""
        ],
        [
          "hippo",
          "hà mã",
          ""
        ]
      ],
      "patterns": [
        [
          "Look at the ________.",
          "Hãy nhìn ________."
        ]
      ],
      "examples": [
        [
          "Look at the giraffe.",
          "Hãy nhìn con hươu cao cổ."
        ]
      ],
      "note": "Explore more words from this topic. Choose two or three words, listen, repeat and make your own sentences. These words are also included in Unit review."
    },
    "11": {
      "topic": "Playground actions",
      "words": [
        [
          "jumping",
          "đang nhảy",
          ""
        ],
        [
          "running",
          "đang chạy",
          ""
        ],
        [
          "skipping",
          "đang nhảy dây",
          ""
        ],
        [
          "climbing",
          "đang leo",
          ""
        ]
      ],
      "patterns": [
        [
          "He is ________.",
          "Bạn ấy đang ________."
        ]
      ],
      "examples": [
        [
          "He is jumping.",
          "Bạn ấy đang nhảy."
        ]
      ],
      "note": "Explore more words from this topic. Choose two or three words, listen, repeat and make your own sentences. These words are also included in Unit review."
    },
    "12": {
      "topic": "At a café",
      "words": [
        [
          "menu",
          "thực đơn",
          ""
        ],
        [
          "cup",
          "tách",
          ""
        ],
        [
          "glass",
          "cốc",
          ""
        ],
        [
          "chair",
          "ghế",
          ""
        ]
      ],
      "patterns": [
        [
          "Where is the ________?",
          "________ ở đâu?"
        ]
      ],
      "examples": [
        [
          "Where is the menu?",
          "Thực đơn ở đâu?"
        ]
      ],
      "note": "Explore more words from this topic. Choose two or three words, listen, repeat and make your own sentences. These words are also included in Unit review."
    },
    "13": {
      "topic": "Counting beyond twenty",
      "words": [
        [
          "twenty-one",
          "hai mươi mốt",
          ""
        ],
        [
          "twenty-two",
          "hai mươi hai",
          ""
        ],
        [
          "twenty-three",
          "hai mươi ba",
          ""
        ],
        [
          "thirty",
          "ba mươi",
          ""
        ]
      ],
      "patterns": [
        [
          "I can count to ________.",
          "Em có thể đếm đến ________."
        ]
      ],
      "examples": [
        [
          "I can count to thirty.",
          "Em có thể đếm đến ba mươi."
        ]
      ],
      "note": "Explore more words from this topic. Choose two or three words, listen, repeat and make your own sentences. These words are also included in Unit review."
    },
    "14": {
      "topic": "More family members",
      "words": [
        [
          "aunt",
          "cô hoặc dì",
          ""
        ],
        [
          "uncle",
          "chú hoặc bác trai",
          ""
        ],
        [
          "cousin",
          "anh chị em họ",
          ""
        ],
        [
          "baby",
          "em bé",
          ""
        ]
      ],
      "patterns": [
        [
          "This is my ________.",
          "Đây là ________ của em."
        ]
      ],
      "examples": [
        [
          "This is my aunt.",
          "Đây là cô hoặc dì của em."
        ]
      ],
      "note": "Explore more words from this topic. Choose two or three words, listen, repeat and make your own sentences. These words are also included in Unit review."
    },
    "15": {
      "topic": "More clothes",
      "words": [
        [
          "dress",
          "váy liền",
          ""
        ],
        [
          "skirt",
          "chân váy",
          ""
        ],
        [
          "hat",
          "mũ",
          ""
        ],
        [
          "socks",
          "tất",
          ""
        ]
      ],
      "patterns": [
        [
          "I want ________.",
          "Em muốn ________."
        ]
      ],
      "examples": [
        [
          "I want a dress.",
          "Em muốn một chiếc váy liền."
        ]
      ],
      "note": "Explore more words from this topic. Choose two or three words, listen, repeat and make your own sentences. These words are also included in Unit review."
    },
    "16": {
      "topic": "Camping things",
      "words": [
        [
          "sleeping bag",
          "túi ngủ",
          ""
        ],
        [
          "torch",
          "đèn pin",
          ""
        ],
        [
          "backpack",
          "ba lô",
          ""
        ],
        [
          "water bottle",
          "bình nước",
          ""
        ]
      ],
      "patterns": [
        [
          "I have a ________.",
          "Em có một ________."
        ]
      ],
      "examples": [
        [
          "I have a torch.",
          "Em có một chiếc đèn pin."
        ]
      ],
      "note": "Explore more words from this topic. Choose two or three words, listen, repeat and make your own sentences. These words are also included in Unit review."
    }
  },
  "3": {
    "1": {
      "topic": "Friendly greetings",
      "words": [
        [
          "good morning",
          "chào buổi sáng",
          ""
        ],
        [
          "good afternoon",
          "chào buổi chiều",
          ""
        ],
        [
          "good evening",
          "chào buổi tối",
          ""
        ],
        [
          "see you soon",
          "hẹn sớm gặp lại",
          ""
        ]
      ],
      "patterns": [
        [
          "Good ________!",
          "Lời chào theo buổi: morning / afternoon / evening."
        ]
      ],
      "examples": [
        [
          "Good morning!",
          "Chào buổi sáng!"
        ]
      ],
      "note": "Explore more words from this topic. Choose two or three words, listen, repeat and make your own sentences. These words are also included in Unit review."
    },
    "2": {
      "topic": "Getting to know you",
      "words": [
        [
          "first name",
          "tên gọi",
          ""
        ],
        [
          "full name",
          "họ và tên",
          ""
        ],
        [
          "nickname",
          "biệt danh",
          ""
        ],
        [
          "spell",
          "đánh vần",
          ""
        ]
      ],
      "patterns": [
        [
          "My nickname is ________.",
          "Biệt danh của em là ________."
        ]
      ],
      "examples": [
        [
          "My nickname is Ben.",
          "Biệt danh của em là Ben."
        ]
      ],
      "note": "Explore more words from this topic. Choose two or three words, listen, repeat and make your own sentences. These words are also included in Unit review."
    },
    "3": {
      "topic": "Being a good friend",
      "words": [
        [
          "kind",
          "tốt bụng",
          ""
        ],
        [
          "helpful",
          "hay giúp đỡ",
          ""
        ],
        [
          "friendly",
          "thân thiện",
          ""
        ],
        [
          "classmate",
          "bạn cùng lớp",
          ""
        ]
      ],
      "patterns": [
        [
          "My friend is ________.",
          "Bạn của em ________."
        ]
      ],
      "examples": [
        [
          "My friend is kind.",
          "Bạn của em tốt bụng."
        ]
      ],
      "note": "Explore more words from this topic. Choose two or three words, listen, repeat and make your own sentences. These words are also included in Unit review."
    },
    "4": {
      "topic": "More body parts",
      "words": [
        [
          "shoulder",
          "vai",
          ""
        ],
        [
          "knee",
          "đầu gối",
          ""
        ],
        [
          "arm",
          "cánh tay",
          ""
        ],
        [
          "leg",
          "chân",
          ""
        ]
      ],
      "patterns": [
        [
          "Touch your ________.",
          "Hãy chạm vào ________ của em."
        ]
      ],
      "examples": [
        [
          "Touch your shoulder.",
          "Hãy chạm vào vai của em."
        ]
      ],
      "note": "Explore more words from this topic. Choose two or three words, listen, repeat and make your own sentences. These words are also included in Unit review."
    },
    "5": {
      "topic": "More hobbies",
      "words": [
        [
          "reading",
          "đọc sách",
          ""
        ],
        [
          "cycling",
          "đạp xe",
          ""
        ],
        [
          "skating",
          "trượt patin",
          ""
        ],
        [
          "gardening",
          "làm vườn",
          ""
        ]
      ],
      "patterns": [
        [
          "I like ________.",
          "Em thích ________."
        ]
      ],
      "examples": [
        [
          "I like reading.",
          "Em thích đọc sách."
        ]
      ],
      "note": "Explore more words from this topic. Choose two or three words, listen, repeat and make your own sentences. These words are also included in Unit review."
    },
    "6": {
      "topic": "More school places",
      "words": [
        [
          "canteen",
          "căng tin",
          ""
        ],
        [
          "hall",
          "hội trường",
          ""
        ],
        [
          "school office",
          "văn phòng trường",
          ""
        ],
        [
          "science room",
          "phòng khoa học",
          ""
        ]
      ],
      "patterns": [
        [
          "Is this our ________?",
          "Đây có phải ________ của chúng mình không?"
        ]
      ],
      "examples": [
        [
          "Is this our canteen?",
          "Đây có phải căng tin của chúng mình không?"
        ]
      ],
      "note": "Explore more words from this topic. Choose two or three words, listen, repeat and make your own sentences. These words are also included in Unit review."
    },
    "7": {
      "topic": "Helpful classroom phrases",
      "words": [
        [
          "raise your hand",
          "giơ tay",
          ""
        ],
        [
          "work in pairs",
          "làm việc theo cặp",
          ""
        ],
        [
          "listen carefully",
          "nghe cẩn thận",
          ""
        ],
        [
          "line up",
          "xếp hàng",
          ""
        ]
      ],
      "patterns": [
        [
          "Please ________.",
          "Hãy ________."
        ]
      ],
      "examples": [
        [
          "Please raise your hand.",
          "Hãy giơ tay."
        ]
      ],
      "note": "Explore more words from this topic. Choose two or three words, listen, repeat and make your own sentences. These words are also included in Unit review."
    },
    "8": {
      "topic": "More school supplies",
      "words": [
        [
          "glue stick",
          "hồ khô",
          ""
        ],
        [
          "scissors",
          "kéo",
          ""
        ],
        [
          "crayon",
          "bút sáp",
          ""
        ],
        [
          "sharpener",
          "gọt bút chì",
          ""
        ]
      ],
      "patterns": [
        [
          "I have a ________.",
          "Em có một ________."
        ]
      ],
      "examples": [
        [
          "I have a crayon.",
          "Em có một chiếc bút sáp."
        ]
      ],
      "note": "Explore more words from this topic. Choose two or three words, listen, repeat and make your own sentences. These words are also included in Unit review."
    },
    "9": {
      "topic": "More colours",
      "words": [
        [
          "grey",
          "màu xám",
          ""
        ],
        [
          "gold",
          "màu vàng kim",
          ""
        ]
      ],
      "patterns": [
        [
          "My bag is ________.",
          "Cặp sách của em màu ________."
        ]
      ],
      "examples": [
        [
          "My bag is purple.",
          "Cặp sách của em màu tím."
        ]
      ],
      "note": "Explore more words from this topic. Choose two or three words, listen, repeat and make your own sentences. These words are also included in Unit review."
    },
    "10": {
      "topic": "More break-time games",
      "words": [
        [
          "hide-and-seek",
          "trốn tìm",
          ""
        ],
        [
          "tag",
          "đuổi bắt",
          ""
        ],
        [
          "hopscotch",
          "nhảy lò cò",
          ""
        ],
        [
          "jump rope",
          "nhảy dây",
          ""
        ]
      ],
      "patterns": [
        [
          "Let’s play ________.",
          "Chúng mình cùng chơi ________ nhé."
        ]
      ],
      "examples": [
        [
          "Let’s play hide-and-seek.",
          "Chúng mình cùng chơi trốn tìm nhé."
        ]
      ],
      "note": "Explore more words from this topic. Choose two or three words, listen, repeat and make your own sentences. These words are also included in Unit review."
    },
    "11": {
      "topic": "My wider family",
      "words": [
        [
          "aunt",
          "cô hoặc dì",
          ""
        ],
        [
          "uncle",
          "chú hoặc bác trai",
          ""
        ],
        [
          "cousin",
          "anh chị em họ",
          ""
        ],
        [
          "grandparents",
          "ông bà",
          ""
        ]
      ],
      "patterns": [
        [
          "This is my ________.",
          "Đây là ________ của em."
        ]
      ],
      "examples": [
        [
          "This is my cousin.",
          "Đây là anh chị em họ của em."
        ]
      ],
      "note": "Explore more words from this topic. Choose two or three words, listen, repeat and make your own sentences. These words are also included in Unit review."
    },
    "12": {
      "topic": "Jobs and workplaces",
      "words": [
        [
          "hospital",
          "bệnh viện",
          ""
        ],
        [
          "school",
          "trường học",
          ""
        ],
        [
          "farm",
          "nông trại",
          ""
        ],
        [
          "restaurant",
          "nhà hàng",
          ""
        ],
        [
          "factory",
          "nhà máy",
          ""
        ],
        [
          "office",
          "văn phòng",
          ""
        ]
      ],
      "patterns": [
        [
          "A / An ________ works ________.",
          "Một người làm nghề ________ làm việc ________. Chọn a hoặc an phù hợp."
        ],
        [
          "He / She works ________.",
          "Thêm cụm chỉ nơi làm việc, ví dụ: in a hospital hoặc on a farm."
        ]
      ],
      "examples": [
        [
          "A doctor works in a hospital.",
          "Bác sĩ làm việc trong bệnh viện."
        ],
        [
          "She works on a farm.",
          "Cô ấy làm việc ở một nông trại."
        ]
      ],
      "note": "Match jobs to common workplaces. A person may work in different places. Say in a hospital, at a fire station, on a farm or at home. These words are also included in Unit review.",
      "table": "jobs"
    },
    "13": {
      "topic": "More rooms at home",
      "words": [
        [
          "dining room",
          "phòng ăn",
          ""
        ],
        [
          "garden",
          "vườn",
          ""
        ],
        [
          "garage",
          "ga ra",
          ""
        ],
        [
          "balcony",
          "ban công",
          ""
        ]
      ],
      "patterns": [
        [
          "There is a ________ in my house.",
          "Nhà em có một ________."
        ]
      ],
      "examples": [
        [
          "There is a balcony in my house.",
          "Nhà em có một ban công."
        ]
      ],
      "note": "Explore more words from this topic. Choose two or three words, listen, repeat and make your own sentences. These words are also included in Unit review."
    },
    "14": {
      "topic": "Bedroom objects",
      "words": [
        [
          "pillow",
          "gối",
          ""
        ],
        [
          "blanket",
          "chăn",
          ""
        ],
        [
          "wardrobe",
          "tủ quần áo",
          ""
        ],
        [
          "bookshelf",
          "giá sách",
          ""
        ]
      ],
      "patterns": [
        [
          "There is a ________ in my bedroom.",
          "Trong phòng ngủ của em có một ________."
        ]
      ],
      "examples": [
        [
          "There is a wardrobe in my bedroom.",
          "Trong phòng ngủ của em có một tủ quần áo."
        ]
      ],
      "note": "Explore more words from this topic. Choose two or three words, listen, repeat and make your own sentences. These words are also included in Unit review."
    },
    "15": {
      "topic": "At the table",
      "words": [
        [
          "plate",
          "đĩa",
          ""
        ],
        [
          "spoon",
          "thìa",
          ""
        ],
        [
          "fork",
          "dĩa",
          ""
        ],
        [
          "chopsticks",
          "đũa",
          ""
        ]
      ],
      "patterns": [
        [
          "I use ________.",
          "Em dùng ________."
        ]
      ],
      "examples": [
        [
          "I use chopsticks.",
          "Em dùng đũa."
        ]
      ],
      "note": "Explore more words from this topic. Choose two or three words, listen, repeat and make your own sentences. These words are also included in Unit review."
    },
    "16": {
      "topic": "Caring for pets",
      "words": [
        [
          "hamster",
          "chuột hamster",
          ""
        ],
        [
          "pet food",
          "thức ăn cho thú cưng",
          ""
        ],
        [
          "pet bowl",
          "bát cho thú cưng",
          ""
        ]
      ],
      "patterns": [
        [
          "I have a ________.",
          "Em có một ________."
        ]
      ],
      "examples": [
        [
          "I have a hamster.",
          "Em có một chú chuột hamster."
        ]
      ],
      "note": "Explore more words from this topic. Choose two or three words, listen, repeat and make your own sentences. These words are also included in Unit review."
    },
    "17": {
      "topic": "More toys",
      "words": [
        [
          "robot",
          "người máy đồ chơi",
          ""
        ],
        [
          "doll",
          "búp bê",
          ""
        ],
        [
          "puzzle",
          "trò ghép hình",
          ""
        ],
        [
          "building blocks",
          "khối xếp hình",
          ""
        ]
      ],
      "patterns": [
        [
          "I have ________.",
          "Em có ________."
        ]
      ],
      "examples": [
        [
          "I have building blocks.",
          "Em có các khối xếp hình."
        ]
      ],
      "note": "Explore more words from this topic. Choose two or three words, listen, repeat and make your own sentences. These words are also included in Unit review."
    },
    "18": {
      "topic": "More things we are doing",
      "words": [
        [
          "cooking",
          "đang nấu ăn",
          ""
        ],
        [
          "cleaning",
          "đang dọn dẹp",
          ""
        ],
        [
          "studying",
          "đang học",
          ""
        ],
        [
          "watering the plants",
          "đang tưới cây",
          ""
        ]
      ],
      "patterns": [
        [
          "She is ________.",
          "Bạn ấy đang ________."
        ]
      ],
      "examples": [
        [
          "She is watering the plants.",
          "Bạn ấy đang tưới cây."
        ]
      ],
      "note": "Explore more words from this topic. Choose two or three words, listen, repeat and make your own sentences. These words are also included in Unit review."
    },
    "19": {
      "topic": "Outdoor fun",
      "words": [
        [
          "hiking",
          "đi bộ đường dài",
          ""
        ],
        [
          "camping",
          "cắm trại",
          ""
        ],
        [
          "fishing",
          "câu cá",
          ""
        ],
        [
          "playing hide-and-seek",
          "chơi trốn tìm",
          ""
        ]
      ],
      "patterns": [
        [
          "I like ________.",
          "Em thích ________."
        ]
      ],
      "examples": [
        [
          "I like camping.",
          "Em thích cắm trại."
        ]
      ],
      "note": "Explore more words from this topic. Choose two or three words, listen, repeat and make your own sentences. These words are also included in Unit review."
    },
    "20": {
      "topic": "More zoo animals",
      "words": [
        [
          "giraffe",
          "hươu cao cổ",
          ""
        ],
        [
          "lion",
          "sư tử",
          ""
        ],
        [
          "crocodile",
          "cá sấu",
          ""
        ]
      ],
      "patterns": [
        [
          "Can you see the ________?",
          "Em có nhìn thấy ________ không?"
        ]
      ],
      "examples": [
        [
          "Can you see the giraffe?",
          "Em có nhìn thấy con hươu cao cổ không?"
        ]
      ],
      "note": "Explore more words from this topic. Choose two or three words, listen, repeat and make your own sentences. These words are also included in Unit review."
    }
  },
  "4": {
    "1": {
      "topic": "Countries and languages",
      "words": [
        [
          "France",
          "Pháp",
          ""
        ],
        [
          "China",
          "Trung Quốc",
          ""
        ],
        [
          "India",
          "Ấn Độ",
          ""
        ],
        [
          "Canada",
          "Canada",
          ""
        ],
        [
          "French",
          "tiếng Pháp",
          ""
        ],
        [
          "Chinese",
          "tiếng Trung Quốc",
          ""
        ]
      ],
      "patterns": [
        [
          "My friend is from ________.",
          "Bạn của em đến từ ________."
        ]
      ],
      "examples": [
        [
          "My friend is from Canada.",
          "Bạn của em đến từ Canada."
        ]
      ],
      "note": "Choose two or three new words, listen, repeat and make your own sentences. France, China, India and Canada are countries. French and Chinese here are languages."
    },
    "2": {
      "topic": "My daily routine",
      "words": [
        [
          "get dressed",
          "mặc quần áo",
          ""
        ],
        [
          "take a shower",
          "tắm",
          ""
        ]
      ],
      "patterns": [
        [
          "I ________ at seven o’clock.",
          "Em ________ lúc bảy giờ."
        ]
      ],
      "examples": [
        [
          "I brush my teeth at seven o’clock.",
          "Em đánh răng lúc bảy giờ."
        ]
      ],
      "note": "Explore more words from this topic. Choose two or three words, listen, repeat and make your own sentences. These words are also included in Unit review."
    },
    "3": {
      "topic": "More weekly activities",
      "words": [
        [
          "visit my grandparents",
          "thăm ông bà",
          ""
        ],
        [
          "help my parents",
          "giúp bố mẹ",
          ""
        ],
        [
          "read comics",
          "đọc truyện tranh",
          ""
        ],
        [
          "play board games",
          "chơi trò chơi bàn cờ",
          ""
        ]
      ],
      "patterns": [
        [
          "I ________ on Sundays.",
          "Em ________ vào các ngày Chủ nhật."
        ]
      ],
      "examples": [
        [
          "I visit my grandparents on Sundays.",
          "Em thăm ông bà vào các ngày Chủ nhật."
        ]
      ],
      "note": "Explore more words from this topic. Choose two or three words, listen, repeat and make your own sentences. These words are also included in Unit review."
    },
    "4": {
      "topic": "Birthday dates: ordinal numbers",
      "words": [
        [
          "date",
          "ngày tháng",
          ""
        ],
        [
          "candle",
          "nến",
          ""
        ],
        [
          "present",
          "quà",
          ""
        ],
        [
          "invitation",
          "lời mời",
          ""
        ],
        [
          "first",
          "thứ nhất",
          ""
        ],
        [
          "second",
          "thứ hai",
          ""
        ],
        [
          "third",
          "thứ ba",
          ""
        ],
        [
          "fourth",
          "thứ tư",
          ""
        ],
        [
          "fifth",
          "thứ năm",
          ""
        ],
        [
          "sixth",
          "thứ sáu",
          ""
        ],
        [
          "seventh",
          "thứ bảy",
          ""
        ],
        [
          "eighth",
          "thứ tám",
          ""
        ],
        [
          "ninth",
          "thứ chín",
          ""
        ],
        [
          "tenth",
          "thứ mười",
          ""
        ],
        [
          "eleventh",
          "thứ mười một",
          ""
        ],
        [
          "twelfth",
          "thứ mười hai",
          ""
        ],
        [
          "thirteenth",
          "thứ mười ba",
          ""
        ],
        [
          "fourteenth",
          "thứ mười bốn",
          ""
        ],
        [
          "fifteenth",
          "thứ mười lăm",
          ""
        ],
        [
          "sixteenth",
          "thứ mười sáu",
          ""
        ],
        [
          "seventeenth",
          "thứ mười bảy",
          ""
        ],
        [
          "eighteenth",
          "thứ mười tám",
          ""
        ],
        [
          "nineteenth",
          "thứ mười chín",
          ""
        ],
        [
          "twentieth",
          "thứ hai mươi",
          ""
        ],
        [
          "twenty-first",
          "thứ hai mươi mốt",
          ""
        ],
        [
          "twenty-second",
          "thứ hai mươi hai",
          ""
        ],
        [
          "twenty-third",
          "thứ hai mươi ba",
          ""
        ],
        [
          "twenty-fourth",
          "thứ hai mươi bốn",
          ""
        ],
        [
          "twenty-fifth",
          "thứ hai mươi lăm",
          ""
        ],
        [
          "twenty-sixth",
          "thứ hai mươi sáu",
          ""
        ],
        [
          "twenty-seventh",
          "thứ hai mươi bảy",
          ""
        ],
        [
          "twenty-eighth",
          "thứ hai mươi tám",
          ""
        ],
        [
          "twenty-ninth",
          "thứ hai mươi chín",
          ""
        ],
        [
          "thirtieth",
          "thứ ba mươi",
          ""
        ],
        [
          "thirty-first",
          "thứ ba mươi mốt",
          ""
        ]
      ],
      "patterns": [
        [
          "My birthday is on the ________ of May.",
          "Sinh nhật của em là ngày ________ tháng Năm."
        ]
      ],
      "examples": [
        [
          "My birthday is on the twenty-first of May.",
          "Sinh nhật của em là ngày hai mươi mốt tháng Năm."
        ]
      ],
      "note": "Cardinal numbers tell us how many. Ordinal numbers tell us a position or date. Learn 1–10, 11–20, then 21–31. Remember 1st, 2nd, 3rd, but 11th, 12th, 13th; 20th is twentieth and 30th is thirtieth.",
      "table": "ordinals"
    },
    "5": {
      "topic": "More things I can do",
      "words": [
        [
          "draw a picture",
          "vẽ tranh",
          ""
        ],
        [
          "make a paper plane",
          "gấp máy bay giấy",
          ""
        ],
        [
          "play chess",
          "chơi cờ vua",
          ""
        ],
        [
          "dance",
          "nhảy múa",
          ""
        ]
      ],
      "patterns": [
        [
          "I can ________.",
          "Em có thể ________."
        ]
      ],
      "examples": [
        [
          "I can make a paper plane.",
          "Em có thể gấp máy bay giấy."
        ]
      ],
      "note": "Explore more words from this topic. Choose two or three words, listen, repeat and make your own sentences. These words are also included in Unit review."
    },
    "6": {
      "topic": "More school facilities",
      "words": [
        [
          "sports hall",
          "nhà thể thao",
          ""
        ],
        [
          "science room",
          "phòng khoa học",
          ""
        ],
        [
          "canteen",
          "căng tin",
          ""
        ],
        [
          "school office",
          "văn phòng trường",
          ""
        ]
      ],
      "patterns": [
        [
          "Our school has a ________.",
          "Trường của chúng em có một ________."
        ]
      ],
      "examples": [
        [
          "Our school has a sports hall.",
          "Trường của chúng em có một nhà thể thao."
        ]
      ],
      "note": "Explore more words from this topic. Choose two or three words, listen, repeat and make your own sentences. These words are also included in Unit review."
    },
    "7": {
      "topic": "Reading a timetable",
      "words": [
        [
          "lesson",
          "tiết học",
          ""
        ],
        [
          "break",
          "giờ nghỉ",
          ""
        ],
        [
          "lunchtime",
          "giờ ăn trưa",
          ""
        ]
      ],
      "patterns": [
        [
          "We have ________ on Monday.",
          "Chúng em có ________ vào thứ Hai."
        ]
      ],
      "examples": [
        [
          "We have a music lesson on Monday.",
          "Chúng em có tiết âm nhạc vào thứ Hai."
        ]
      ],
      "note": "Explore more words from this topic. Choose two or three words, listen, repeat and make your own sentences. These words are also included in Unit review."
    },
    "8": {
      "topic": "Talking about subjects",
      "words": [
        [
          "easy",
          "dễ",
          ""
        ],
        [
          "difficult",
          "khó",
          ""
        ],
        [
          "interesting",
          "thú vị",
          ""
        ],
        [
          "useful",
          "hữu ích",
          ""
        ]
      ],
      "patterns": [
        [
          "I like science because it is ________.",
          "Em thích khoa học vì môn này ________."
        ]
      ],
      "examples": [
        [
          "I like science because it is interesting.",
          "Em thích khoa học vì môn này thú vị."
        ]
      ],
      "note": "Explore more words from this topic. Choose two or three words, listen, repeat and make your own sentences. These words are also included in Unit review."
    },
    "9": {
      "topic": "Sports day: dates and places",
      "words": [
        [
          "race",
          "cuộc đua",
          ""
        ],
        [
          "medal",
          "huy chương",
          ""
        ],
        [
          "winner",
          "người thắng",
          ""
        ],
        [
          "team",
          "đội",
          ""
        ]
      ],
      "patterns": [
        [
          "Sports Day is on the ________ of June.",
          "Ngày hội thể thao là ngày ________ tháng Sáu."
        ]
      ],
      "examples": [
        [
          "Sports Day is on the third of June.",
          "Ngày hội thể thao là ngày ba tháng Sáu."
        ]
      ],
      "note": "Explore extra sports words. Find all twelve months in the main Unit vocabulary."
    },
    "10": {
      "topic": "Holiday activities",
      "words": [
        [
          "visit a museum",
          "thăm bảo tàng",
          ""
        ],
        [
          "take photos",
          "chụp ảnh",
          ""
        ],
        [
          "have a picnic",
          "đi dã ngoại",
          ""
        ],
        [
          "go swimming",
          "đi bơi",
          ""
        ]
      ],
      "patterns": [
        [
          "I want to ________.",
          "Em muốn ________."
        ]
      ],
      "examples": [
        [
          "I want to visit a museum.",
          "Em muốn thăm một bảo tàng."
        ]
      ],
      "note": "Explore more words from this topic. Choose two or three words, listen, repeat and make your own sentences. These words are also included in Unit review."
    },
    "11": {
      "topic": "Around my home",
      "words": [
        [
          "neighbour",
          "hàng xóm",
          ""
        ],
        [
          "neighbourhood",
          "khu dân cư",
          ""
        ],
        [
          "house number",
          "số nhà",
          ""
        ]
      ],
      "patterns": [
        [
          "My neighbourhood is ________.",
          "Khu dân cư của em ________."
        ]
      ],
      "examples": [
        [
          "My neighbourhood is quiet.",
          "Khu dân cư của em yên tĩnh."
        ]
      ],
      "note": "Explore more words from this topic. Choose two or three words, listen, repeat and make your own sentences. These words are also included in Unit review."
    },
    "12": {
      "topic": "Jobs and workplaces",
      "words": [
        [
          "office",
          "văn phòng",
          ""
        ],
        [
          "police station",
          "đồn cảnh sát",
          ""
        ],
        [
          "fire station",
          "trạm cứu hỏa",
          ""
        ],
        [
          "restaurant",
          "nhà hàng",
          ""
        ],
        [
          "studio",
          "phòng thu hoặc trường quay",
          ""
        ],
        [
          "clinic",
          "phòng khám",
          ""
        ]
      ],
      "patterns": [
        [
          "A / An ________ works ________.",
          "Một người làm nghề ________ làm việc ________. Chọn a hoặc an phù hợp."
        ],
        [
          "He / She works ________.",
          "Thêm cụm chỉ nơi làm việc, ví dụ: in a hospital hoặc on a farm."
        ]
      ],
      "examples": [
        [
          "A police officer works in a police station.",
          "Cảnh sát làm việc tại đồn cảnh sát."
        ],
        [
          "She works on a farm.",
          "Cô ấy làm việc ở một nông trại."
        ]
      ],
      "note": "Match jobs to common workplaces. A person may work in different places. Say in a hospital, at a fire station, on a farm or at home. These words are also included in Unit review.",
      "table": "jobs"
    },
    "13": {
      "topic": "Describing people",
      "words": [
        [
          "glasses",
          "kính mắt",
          ""
        ],
        [
          "beard",
          "râu",
          ""
        ]
      ],
      "patterns": [
        [
          "She has ________.",
          "Cô ấy có ________."
        ]
      ],
      "examples": [
        [
          "She has curly hair.",
          "Cô ấy có mái tóc xoăn."
        ]
      ],
      "note": "Explore more words from this topic. Choose two or three words, listen, repeat and make your own sentences. These words are also included in Unit review."
    },
    "14": {
      "topic": "Helping at home",
      "words": [
        [
          "make the bed",
          "dọn giường",
          ""
        ],
        [
          "tidy my room",
          "dọn phòng",
          ""
        ],
        [
          "feed the cat",
          "cho mèo ăn",
          ""
        ],
        [
          "water the plants",
          "tưới cây",
          ""
        ]
      ],
      "patterns": [
        [
          "I ________ in the morning.",
          "Em ________ vào buổi sáng."
        ]
      ],
      "examples": [
        [
          "I make the bed in the morning.",
          "Em dọn giường vào buổi sáng."
        ]
      ],
      "note": "Explore more words from this topic. Choose two or three words, listen, repeat and make your own sentences. These words are also included in Unit review."
    },
    "15": {
      "topic": "Weekend plans",
      "words": [
        [
          "park",
          "công viên",
          ""
        ],
        [
          "museum",
          "bảo tàng",
          ""
        ],
        [
          "library",
          "thư viện",
          ""
        ],
        [
          "bowling alley",
          "sân chơi bowling",
          ""
        ]
      ],
      "patterns": [
        [
          "We go to the ________ at weekends.",
          "Chúng em đến ________ vào cuối tuần."
        ]
      ],
      "examples": [
        [
          "We go to the museum at weekends.",
          "Chúng em đến bảo tàng vào cuối tuần."
        ]
      ],
      "note": "Explore more words from this topic. Choose two or three words, listen, repeat and make your own sentences. These words are also included in Unit review."
    },
    "16": {
      "topic": "More weather words",
      "words": [
        [
          "snowy",
          "có tuyết",
          ""
        ],
        [
          "foggy",
          "có sương mù",
          ""
        ],
        [
          "stormy",
          "có bão",
          ""
        ],
        [
          "rainbow",
          "cầu vồng",
          ""
        ]
      ],
      "patterns": [
        [
          "It is ________ today.",
          "Hôm nay trời ________."
        ]
      ],
      "examples": [
        [
          "It is foggy today.",
          "Hôm nay có sương mù."
        ]
      ],
      "note": "Explore more words from this topic. Choose two or three words, listen, repeat and make your own sentences. These words are also included in Unit review."
    },
    "17": {
      "topic": "Finding your way",
      "words": [
        [
          "cross the road",
          "băng qua đường",
          ""
        ],
        [
          "traffic lights",
          "đèn giao thông",
          ""
        ],
        [
          "crossroads",
          "ngã tư",
          ""
        ],
        [
          "map",
          "bản đồ",
          ""
        ]
      ],
      "patterns": [
        [
          "Go straight to the ________.",
          "Đi thẳng đến ________."
        ]
      ],
      "examples": [
        [
          "Go straight to the traffic lights.",
          "Đi thẳng đến chỗ đèn giao thông."
        ]
      ],
      "note": "Explore more words from this topic. Choose two or three words, listen, repeat and make your own sentences. These words are also included in Unit review."
    },
    "18": {
      "topic": "Shopping politely",
      "words": [
        [
          "price",
          "giá tiền",
          ""
        ],
        [
          "cashier",
          "thu ngân",
          ""
        ],
        [
          "receipt",
          "hóa đơn",
          ""
        ],
        [
          "size",
          "cỡ",
          ""
        ]
      ],
      "patterns": [
        [
          "What size is this ________?",
          "________ này cỡ bao nhiêu?"
        ]
      ],
      "examples": [
        [
          "What size is this T-shirt?",
          "Chiếc áo phông này cỡ bao nhiêu?"
        ]
      ],
      "note": "Explore more words from this topic. Choose two or three words, listen, repeat and make your own sentences. These words are also included in Unit review."
    },
    "19": {
      "topic": "Animal actions",
      "words": [
        [
          "crawl",
          "bò",
          ""
        ],
        [
          "hop",
          "nhảy lò cò",
          ""
        ],
        [
          "fly",
          "bay",
          ""
        ],
        [
          "swim",
          "bơi",
          ""
        ]
      ],
      "patterns": [
        [
          "A bird can ________.",
          "Chim có thể ________."
        ]
      ],
      "examples": [
        [
          "A bird can fly.",
          "Chim có thể bay."
        ]
      ],
      "note": "Explore more words from this topic. Choose two or three words, listen, repeat and make your own sentences. These words are also included in Unit review."
    },
    "20": {
      "topic": "Camping safely",
      "words": [
        [
          "sleeping bag",
          "túi ngủ",
          ""
        ],
        [
          "torch",
          "đèn pin",
          ""
        ],
        [
          "backpack",
          "ba lô",
          ""
        ],
        [
          "water bottle",
          "bình nước",
          ""
        ]
      ],
      "patterns": [
        [
          "Remember to bring a ________.",
          "Hãy nhớ mang theo một ________."
        ]
      ],
      "examples": [
        [
          "Remember to bring a torch.",
          "Hãy nhớ mang theo một chiếc đèn pin."
        ]
      ],
      "note": "Explore more words from this topic. Choose two or three words, listen, repeat and make your own sentences. These words are also included in Unit review."
    }
  },
  "5": {
    "1": {
      "topic": "Introducing myself",
      "words": [
        [
          "favourite food",
          "món ăn yêu thích",
          ""
        ],
        [
          "favourite sport",
          "môn thể thao yêu thích",
          ""
        ],
        [
          "age",
          "tuổi",
          ""
        ],
        [
          "hometown",
          "quê hương",
          ""
        ]
      ],
      "patterns": [
        [
          "My favourite sport is ________.",
          "Môn thể thao yêu thích của em là ________."
        ]
      ],
      "examples": [
        [
          "My favourite sport is badminton.",
          "Môn thể thao yêu thích của em là cầu lông."
        ]
      ],
      "note": "Explore more words from this topic. Choose two or three words, listen, repeat and make your own sentences. These words are also included in Unit review."
    },
    "2": {
      "topic": "More parts of a home",
      "words": [
        [
          "balcony",
          "ban công",
          ""
        ],
        [
          "lift",
          "thang máy",
          ""
        ],
        [
          "stairs",
          "cầu thang",
          ""
        ],
        [
          "roof",
          "mái nhà",
          ""
        ]
      ],
      "patterns": [
        [
          "There is a ________ in my building.",
          "Tòa nhà của em có một ________."
        ]
      ],
      "examples": [
        [
          "There is a lift in my building.",
          "Tòa nhà của em có một thang máy."
        ]
      ],
      "note": "Explore more words from this topic. Choose two or three words, listen, repeat and make your own sentences. These words are also included in Unit review."
    },
    "3": {
      "topic": "More nationalities",
      "words": [
        [
          "Canadian",
          "người Canada",
          ""
        ],
        [
          "French",
          "người Pháp",
          ""
        ],
        [
          "Thai",
          "người Thái Lan",
          ""
        ]
      ],
      "patterns": [
        [
          "My friend is ________.",
          "Bạn của em ________."
        ]
      ],
      "examples": [
        [
          "My friend is Canadian.",
          "Bạn của em là người Canada."
        ]
      ],
      "note": "Explore more words from this topic. Choose two or three words, listen, repeat and make your own sentences. These words are also included in Unit review."
    },
    "4": {
      "topic": "More free-time activities",
      "words": [
        [
          "read comics",
          "đọc truyện tranh",
          ""
        ],
        [
          "make models",
          "làm mô hình",
          ""
        ]
      ],
      "patterns": [
        [
          "I sometimes ________ after school.",
          "Em thỉnh thoảng ________ sau giờ học."
        ]
      ],
      "examples": [
        [
          "I sometimes make models after school.",
          "Em thỉnh thoảng làm mô hình sau giờ học."
        ]
      ],
      "note": "Explore more words from this topic. Choose two or three words, listen, repeat and make your own sentences. These words are also included in Unit review."
    },
    "5": {
      "topic": "Future jobs and workplaces",
      "words": [
        [
          "fire station",
          "trạm cứu hỏa",
          ""
        ],
        [
          "TV station",
          "đài truyền hình",
          ""
        ],
        [
          "office",
          "văn phòng",
          ""
        ],
        [
          "school",
          "trường học",
          ""
        ],
        [
          "park",
          "công viên",
          ""
        ],
        [
          "newsroom",
          "phòng tin tức",
          ""
        ]
      ],
      "patterns": [
        [
          "I want to be a ________.",
          "Em muốn trở thành một ________."
        ],
        [
          "He / She works ________.",
          "Thêm cụm chỉ nơi làm việc, ví dụ: in a hospital hoặc on a farm."
        ]
      ],
      "examples": [
        [
          "I want to be a reporter.",
          "Em muốn trở thành phóng viên."
        ],
        [
          "She works on a farm.",
          "Cô ấy làm việc ở một nông trại."
        ]
      ],
      "note": "Match jobs to common workplaces. A person may work in different places. Say in a hospital, at a fire station, on a farm or at home. These words are also included in Unit review.",
      "table": "jobs"
    },
    "6": {
      "topic": "School floors: ordinal numbers",
      "words": [
        [
          "fourth floor",
          "tầng thứ tư",
          ""
        ],
        [
          "fifth floor",
          "tầng thứ năm",
          ""
        ],
        [
          "stairs",
          "cầu thang",
          ""
        ],
        [
          "lift",
          "thang máy",
          ""
        ],
        [
          "first",
          "thứ nhất",
          ""
        ],
        [
          "second",
          "thứ hai",
          ""
        ],
        [
          "third",
          "thứ ba",
          ""
        ],
        [
          "fourth",
          "thứ tư",
          ""
        ],
        [
          "fifth",
          "thứ năm",
          ""
        ],
        [
          "sixth",
          "thứ sáu",
          ""
        ],
        [
          "seventh",
          "thứ bảy",
          ""
        ],
        [
          "eighth",
          "thứ tám",
          ""
        ],
        [
          "ninth",
          "thứ chín",
          ""
        ],
        [
          "tenth",
          "thứ mười",
          ""
        ],
        [
          "eleventh",
          "thứ mười một",
          ""
        ],
        [
          "twelfth",
          "thứ mười hai",
          ""
        ],
        [
          "thirteenth",
          "thứ mười ba",
          ""
        ],
        [
          "fourteenth",
          "thứ mười bốn",
          ""
        ],
        [
          "fifteenth",
          "thứ mười lăm",
          ""
        ],
        [
          "sixteenth",
          "thứ mười sáu",
          ""
        ],
        [
          "seventeenth",
          "thứ mười bảy",
          ""
        ],
        [
          "eighteenth",
          "thứ mười tám",
          ""
        ],
        [
          "nineteenth",
          "thứ mười chín",
          ""
        ],
        [
          "twentieth",
          "thứ hai mươi",
          ""
        ],
        [
          "twenty-first",
          "thứ hai mươi mốt",
          ""
        ],
        [
          "twenty-second",
          "thứ hai mươi hai",
          ""
        ],
        [
          "twenty-third",
          "thứ hai mươi ba",
          ""
        ],
        [
          "twenty-fourth",
          "thứ hai mươi bốn",
          ""
        ],
        [
          "twenty-fifth",
          "thứ hai mươi lăm",
          ""
        ],
        [
          "twenty-sixth",
          "thứ hai mươi sáu",
          ""
        ],
        [
          "twenty-seventh",
          "thứ hai mươi bảy",
          ""
        ],
        [
          "twenty-eighth",
          "thứ hai mươi tám",
          ""
        ],
        [
          "twenty-ninth",
          "thứ hai mươi chín",
          ""
        ],
        [
          "thirtieth",
          "thứ ba mươi",
          ""
        ],
        [
          "thirty-first",
          "thứ ba mươi mốt",
          ""
        ]
      ],
      "patterns": [
        [
          "The music room is on the ________ floor.",
          "Phòng âm nhạc ở tầng thứ ________."
        ]
      ],
      "examples": [
        [
          "The music room is on the fourth floor.",
          "Phòng âm nhạc ở tầng thứ tư."
        ]
      ],
      "note": "Cardinal numbers tell us how many. Ordinal numbers tell us a position or date. Learn 1–10, 11–20, then 21–31. Remember 1st, 2nd, 3rd, but 11th, 12th, 13th; 20th is twentieth and 30th is thirtieth. In British English, the ground floor is at street level; the first floor is just above it.",
      "table": "ordinals"
    },
    "7": {
      "topic": "Working together",
      "words": [
        [
          "teamwork",
          "làm việc nhóm",
          ""
        ],
        [
          "share ideas",
          "chia sẻ ý tưởng",
          ""
        ],
        [
          "give a presentation",
          "thuyết trình",
          ""
        ],
        [
          "design a poster",
          "thiết kế áp phích",
          ""
        ]
      ],
      "patterns": [
        [
          "We like to ________.",
          "Chúng em thích ________."
        ]
      ],
      "examples": [
        [
          "We like to share ideas.",
          "Chúng em thích chia sẻ ý tưởng."
        ]
      ],
      "note": "Explore more words from this topic. Choose two or three words, listen, repeat and make your own sentences. These words are also included in Unit review."
    },
    "8": {
      "topic": "More position words",
      "words": [
        [
          "below",
          "ở phía dưới",
          ""
        ],
        [
          "inside",
          "ở bên trong",
          ""
        ],
        [
          "outside",
          "ở bên ngoài",
          ""
        ],
        [
          "next to",
          "ở cạnh",
          ""
        ]
      ],
      "patterns": [
        [
          "The bag is ________ the desk.",
          "Cặp sách ở ________ bàn."
        ]
      ],
      "examples": [
        [
          "The bag is next to the desk.",
          "Cặp sách ở cạnh bàn."
        ]
      ],
      "note": "Explore more words from this topic. Choose two or three words, listen, repeat and make your own sentences. These words are also included in Unit review."
    },
    "9": {
      "topic": "More places to visit",
      "words": [
        [
          "botanical garden",
          "vườn thực vật",
          ""
        ],
        [
          "skating rink",
          "sân trượt băng",
          ""
        ],
        [
          "stadium",
          "sân vận động",
          ""
        ],
        [
          "playground",
          "sân chơi",
          ""
        ]
      ],
      "patterns": [
        [
          "We want to visit the ________.",
          "Chúng em muốn đến thăm ________."
        ]
      ],
      "examples": [
        [
          "We want to visit the botanical garden.",
          "Chúng em muốn đến thăm vườn thực vật."
        ]
      ],
      "note": "Explore more words from this topic. Choose two or three words, listen, repeat and make your own sentences. These words are also included in Unit review."
    },
    "10": {
      "topic": "Planning a school trip",
      "words": [
        [
          "meeting point",
          "điểm tập trung",
          ""
        ],
        [
          "departure time",
          "giờ khởi hành",
          ""
        ],
        [
          "entrance ticket",
          "vé vào cửa",
          ""
        ],
        [
          "packed lunch",
          "bữa trưa mang theo",
          ""
        ]
      ],
      "patterns": [
        [
          "Our meeting point is the ________.",
          "Điểm tập trung của chúng em là ________."
        ]
      ],
      "examples": [
        [
          "Our meeting point is the school gate.",
          "Điểm tập trung của chúng em là cổng trường."
        ]
      ],
      "note": "Explore more words from this topic. Choose two or three words, listen, repeat and make your own sentences. These words are also included in Unit review."
    },
    "11": {
      "topic": "Family adventures",
      "words": [
        [
          "go hiking",
          "đi bộ đường dài",
          ""
        ],
        [
          "have a picnic",
          "đi dã ngoại",
          ""
        ],
        [
          "visit relatives",
          "thăm họ hàng",
          ""
        ],
        [
          "play board games",
          "chơi trò chơi bàn cờ",
          ""
        ]
      ],
      "patterns": [
        [
          "My family likes to ________.",
          "Gia đình em thích ________."
        ]
      ],
      "examples": [
        [
          "My family likes to have a picnic.",
          "Gia đình em thích đi dã ngoại."
        ]
      ],
      "note": "Explore more words from this topic. Choose two or three words, listen, repeat and make your own sentences. These words are also included in Unit review."
    },
    "12": {
      "topic": "More Tet traditions",
      "words": [
        [
          "lucky money",
          "tiền lì xì",
          ""
        ],
        [
          "kumquat tree",
          "cây quất",
          ""
        ],
        [
          "red envelope",
          "phong bao đỏ",
          ""
        ],
        [
          "visit relatives",
          "thăm họ hàng",
          ""
        ]
      ],
      "patterns": [
        [
          "At Tet, we ________.",
          "Vào dịp Tết, chúng em ________."
        ]
      ],
      "examples": [
        [
          "At Tet, we visit relatives.",
          "Vào dịp Tết, chúng em thăm họ hàng."
        ]
      ],
      "note": "Explore more words from this topic. Choose two or three words, listen, repeat and make your own sentences. These words are also included in Unit review."
    },
    "13": {
      "topic": "Celebrations around us",
      "words": [
        [
          "birthday",
          "sinh nhật",
          ""
        ],
        [
          "New Year’s Day",
          "ngày đầu năm",
          ""
        ],
        [
          "invitation",
          "lời mời",
          ""
        ],
        [
          "greeting card",
          "thiệp chúc mừng",
          ""
        ]
      ],
      "patterns": [
        [
          "I make a ________ for my teacher.",
          "Em làm một ________ cho thầy cô."
        ]
      ],
      "examples": [
        [
          "I make a greeting card for my teacher.",
          "Em làm một tấm thiệp chúc mừng cho thầy cô."
        ]
      ],
      "note": "Explore more words from this topic. Choose two or three words, listen, repeat and make your own sentences. These words are also included in Unit review."
    },
    "14": {
      "topic": "Healthy everyday habits",
      "words": [
        [
          "get enough sleep",
          "ngủ đủ giấc",
          ""
        ],
        [
          "drink water",
          "uống nước",
          ""
        ],
        [
          "wash my hands",
          "rửa tay",
          ""
        ],
        [
          "take a break",
          "nghỉ giải lao",
          ""
        ]
      ],
      "patterns": [
        [
          "I ________ every day.",
          "Em ________ mỗi ngày."
        ]
      ],
      "examples": [
        [
          "I drink water every day.",
          "Em uống nước mỗi ngày."
        ]
      ],
      "note": "Explore more words from this topic. Choose two or three words, listen, repeat and make your own sentences. These words are also included in Unit review."
    },
    "15": {
      "topic": "Explaining how I feel",
      "words": [
        [
          "cough",
          "ho",
          ""
        ],
        [
          "runny nose",
          "sổ mũi",
          ""
        ],
        [
          "fever",
          "sốt",
          ""
        ]
      ],
      "patterns": [
        [
          "I have a ________.",
          "Em có một ________."
        ]
      ],
      "examples": [
        [
          "I have a cough.",
          "Em bị ho."
        ]
      ],
      "note": "Use these words to tell an adult how you feel. If you feel unwell, tell a parent or teacher. These words are also included in Unit review."
    },
    "16": {
      "topic": "Dressing for the seasons",
      "words": [
        [
          "raincoat",
          "áo mưa",
          ""
        ],
        [
          "scarf",
          "khăn quàng",
          ""
        ],
        [
          "gloves",
          "găng tay",
          ""
        ],
        [
          "boots",
          "ủng",
          ""
        ]
      ],
      "patterns": [
        [
          "I wear a ________ when it is cold.",
          "Em mặc hoặc đeo một ________ khi trời lạnh."
        ]
      ],
      "examples": [
        [
          "I wear a scarf when it is cold.",
          "Em quàng khăn khi trời lạnh."
        ]
      ],
      "note": "Explore more words from this topic. Choose two or three words, listen, repeat and make your own sentences. These words are also included in Unit review."
    },
    "17": {
      "topic": "Talking about a story",
      "words": [
        [
          "character",
          "nhân vật",
          ""
        ],
        [
          "title",
          "tên truyện",
          ""
        ],
        [
          "ending",
          "kết thúc",
          ""
        ],
        [
          "lesson",
          "bài học",
          ""
        ]
      ],
      "patterns": [
        [
          "My favourite character is ________.",
          "Nhân vật yêu thích của em là ________."
        ]
      ],
      "examples": [
        [
          "My favourite character is Snow White.",
          "Nhân vật yêu thích của em là Bạch Tuyết."
        ]
      ],
      "note": "Explore more words from this topic. Choose two or three words, listen, repeat and make your own sentences. These words are also included in Unit review."
    },
    "18": {
      "topic": "More ways to travel",
      "words": [
        [
          "by train",
          "bằng tàu hỏa",
          ""
        ],
        [
          "by plane",
          "bằng máy bay",
          ""
        ],
        [
          "by boat",
          "bằng thuyền",
          ""
        ],
        [
          "by motorbike",
          "bằng xe máy",
          ""
        ]
      ],
      "patterns": [
        [
          "We travel ________.",
          "Chúng em di chuyển ________."
        ]
      ],
      "examples": [
        [
          "We travel by train.",
          "Chúng em di chuyển bằng tàu hỏa."
        ]
      ],
      "note": "Explore more words from this topic. Choose two or three words, listen, repeat and make your own sentences. These words are also included in Unit review."
    },
    "19": {
      "topic": "Describing places",
      "words": [
        [
          "historic",
          "có ý nghĩa lịch sử",
          ""
        ],
        [
          "crowded",
          "đông đúc",
          ""
        ],
        [
          "famous",
          "nổi tiếng",
          ""
        ],
        [
          "entrance fee",
          "phí vào cửa",
          ""
        ]
      ],
      "patterns": [
        [
          "This place is ________.",
          "Nơi này ________."
        ]
      ],
      "examples": [
        [
          "This place is historic.",
          "Nơi này có ý nghĩa lịch sử."
        ]
      ],
      "note": "Explore more words from this topic. Choose two or three words, listen, repeat and make your own sentences. These words are also included in Unit review."
    },
    "20": {
      "topic": "Getting ready for a holiday",
      "words": [
        [
          "suitcase",
          "va li",
          ""
        ],
        [
          "sun hat",
          "mũ chống nắng",
          ""
        ],
        [
          "travel plan",
          "kế hoạch du lịch",
          ""
        ],
        [
          "postcard",
          "bưu thiếp",
          ""
        ]
      ],
      "patterns": [
        [
          "I pack a ________.",
          "Em xếp một ________ vào hành lý."
        ]
      ],
      "examples": [
        [
          "I pack a sun hat.",
          "Em xếp một chiếc mũ chống nắng vào hành lý."
        ]
      ],
      "note": "Explore more words from this topic. Choose two or three words, listen, repeat and make your own sentences. These words are also included in Unit review."
    }
  }
};
