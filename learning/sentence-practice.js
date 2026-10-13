// Context-specific sentence practice and both answer branches.
const SENTENCE_PRACTICE = {
  "1:1:core:0": {
    "en": "Hi, I'm __.",
    "vi": "Chào, mình là __.",
    "options": [
      {
        "fill": [
          "Mai"
        ],
        "mean": [
          "Mai"
        ]
      },
      {
        "fill": [
          "Nam"
        ],
        "mean": [
          "Nam"
        ]
      },
      {
        "fill": [
          "Anna"
        ],
        "mean": [
          "Anna"
        ]
      },
      {
        "fill": [
          "Ben"
        ],
        "mean": [
          "Ben"
        ]
      }
    ],
    "original": "Hi, I’m …"
  },
  "1:1:core:1": {
    "en": "Bye, __.",
    "vi": "Tạm biệt, __.",
    "options": [
      {
        "fill": [
          "Mai"
        ],
        "mean": [
          "Mai"
        ]
      },
      {
        "fill": [
          "Nam"
        ],
        "mean": [
          "Nam"
        ]
      },
      {
        "fill": [
          "Anna"
        ],
        "mean": [
          "Anna"
        ]
      },
      {
        "fill": [
          "Ben"
        ],
        "mean": [
          "Ben"
        ]
      }
    ],
    "original": "Bye, …"
  },
  "1:2:core:0": {
    "en": "I have a __.",
    "vi": "Mình có một __.",
    "options": [
      {
        "fill": [
          "cake"
        ],
        "mean": [
          "chiếc bánh"
        ]
      },
      {
        "fill": [
          "car"
        ],
        "mean": [
          "ô tô đồ chơi"
        ]
      },
      {
        "fill": [
          "cat"
        ],
        "mean": [
          "con mèo"
        ]
      },
      {
        "fill": [
          "cup"
        ],
        "mean": [
          "chiếc cốc"
        ]
      }
    ],
    "original": "I have a …"
  },
  "1:3:core:0": {
    "en": "This is my __.",
    "vi": "Đây là __ của mình.",
    "options": [
      {
        "fill": [
          "bag"
        ],
        "mean": [
          "cặp sách"
        ]
      },
      {
        "fill": [
          "hat"
        ],
        "mean": [
          "mũ"
        ]
      },
      {
        "fill": [
          "apple"
        ],
        "mean": [
          "quả táo"
        ]
      }
    ],
    "original": "This is my …"
  },
  "1:4:core:0": {
    "en": "This is a __.",
    "vi": "Đây là một __.",
    "options": [
      {
        "fill": [
          "desk"
        ],
        "mean": [
          "bàn học"
        ]
      },
      {
        "fill": [
          "dog"
        ],
        "mean": [
          "con chó"
        ]
      },
      {
        "fill": [
          "door"
        ],
        "mean": [
          "cánh cửa"
        ]
      },
      {
        "fill": [
          "duck"
        ],
        "mean": [
          "con vịt"
        ]
      }
    ],
    "original": "This is a …"
  },
  "1:4:core:1": {
    "en": "It's near the __.",
    "vi": "Nó ở gần __.",
    "options": [
      {
        "fill": [
          "desk"
        ],
        "mean": [
          "bàn học"
        ]
      },
      {
        "fill": [
          "door"
        ],
        "mean": [
          "cửa ra vào"
        ]
      },
      {
        "fill": [
          "bed"
        ],
        "mean": [
          "giường"
        ]
      }
    ],
    "original": "It’s on / near the …"
  },
  "1:5:core:0": {
    "en": "I like __.",
    "vi": "Mình thích __.",
    "options": [
      {
        "fill": [
          "chicken"
        ],
        "mean": [
          "thịt gà"
        ]
      },
      {
        "fill": [
          "chips"
        ],
        "mean": [
          "khoai tây chiên"
        ]
      },
      {
        "fill": [
          "fish"
        ],
        "mean": [
          "cá"
        ]
      },
      {
        "fill": [
          "milk"
        ],
        "mean": [
          "sữa"
        ]
      }
    ],
    "original": "I like …"
  },
  "1:6:core:0": {
    "en": "It's a red __.",
    "vi": "Đó là một __ màu đỏ.",
    "options": [
      {
        "fill": [
          "pen"
        ],
        "mean": [
          "bút mực"
        ]
      },
      {
        "fill": [
          "pencil"
        ],
        "mean": [
          "bút chì"
        ]
      },
      {
        "fill": [
          "bell"
        ],
        "mean": [
          "cái chuông"
        ]
      }
    ],
    "original": "It’s a red …"
  },
  "1:6:core:1": {
    "en": "I have __. He has __.",
    "vi": "Mình có __. Bạn ấy có __.",
    "options": [
      {
        "fill": [
          "a pen",
          "a ruler"
        ],
        "mean": [
          "một bút mực",
          "một thước kẻ"
        ]
      },
      {
        "fill": [
          "a pencil",
          "a notebook"
        ],
        "mean": [
          "một bút chì",
          "một quyển vở"
        ]
      }
    ],
    "original": "I have … / He has …"
  },
  "1:7:core:0": {
    "en": "There's a __.",
    "vi": "Có một __.",
    "options": [
      {
        "fill": [
          "gate"
        ],
        "mean": [
          "cái cổng"
        ]
      },
      {
        "fill": [
          "girl"
        ],
        "mean": [
          "bé gái"
        ]
      },
      {
        "fill": [
          "goat"
        ],
        "mean": [
          "con dê"
        ]
      }
    ],
    "original": "There’s a …"
  },
  "1:7:core:1": {
    "en": "There's a __ in the garden.",
    "vi": "Có một __ trong vườn.",
    "options": [
      {
        "fill": [
          "goat"
        ],
        "mean": [
          "con dê"
        ]
      },
      {
        "fill": [
          "tree"
        ],
        "mean": [
          "cây"
        ]
      },
      {
        "fill": [
          "flower"
        ],
        "mean": [
          "bông hoa"
        ]
      }
    ],
    "original": "There’s a … in the garden."
  },
  "1:8:core:0": {
    "en": "Touch your __.",
    "vi": "Chạm vào __ của em.",
    "options": [
      {
        "fill": [
          "hair"
        ],
        "mean": [
          "tóc"
        ]
      },
      {
        "fill": [
          "hand"
        ],
        "mean": [
          "bàn tay"
        ]
      },
      {
        "fill": [
          "head"
        ],
        "mean": [
          "đầu"
        ]
      }
    ],
    "original": "Touch your …"
  },
  "1:9:core:0": {
    "en": "How many __?",
    "vi": "Có bao nhiêu __?",
    "options": [
      {
        "fill": [
          "clocks"
        ],
        "mean": [
          "chiếc đồng hồ"
        ]
      },
      {
        "fill": [
          "locks"
        ],
        "mean": [
          "ổ khóa"
        ]
      },
      {
        "fill": [
          "mops"
        ],
        "mean": [
          "cây lau nhà"
        ]
      },
      {
        "fill": [
          "pots"
        ],
        "mean": [
          "chiếc nồi"
        ]
      }
    ],
    "original": "How many …?"
  },
  "1:9:core:1": {
    "en": "There are __.",
    "vi": "Có __.",
    "options": [
      {
        "fill": [
          "two clocks"
        ],
        "mean": [
          "hai chiếc đồng hồ"
        ]
      },
      {
        "fill": [
          "three locks"
        ],
        "mean": [
          "ba ổ khóa"
        ]
      },
      {
        "fill": [
          "four mops"
        ],
        "mean": [
          "bốn cây lau nhà"
        ]
      },
      {
        "fill": [
          "five pots"
        ],
        "mean": [
          "năm chiếc nồi"
        ]
      }
    ],
    "original": "There are …"
  },
  "1:10:core:0": {
    "en": "That's a __.",
    "vi": "Kia là một __.",
    "options": [
      {
        "fill": [
          "mango"
        ],
        "mean": [
          "quả xoài"
        ]
      },
      {
        "fill": [
          "monkey"
        ],
        "mean": [
          "con khỉ"
        ]
      },
      {
        "fill": [
          "mouse"
        ],
        "mean": [
          "con chuột"
        ]
      }
    ],
    "original": "That’s a …"
  },
  "1:10:core:1": {
    "en": "That's my __.",
    "vi": "Kia là __ của mình.",
    "options": [
      {
        "fill": [
          "mother"
        ],
        "mean": [
          "mẹ"
        ]
      },
      {
        "fill": [
          "mango"
        ],
        "mean": [
          "quả xoài"
        ]
      }
    ],
    "original": "That’s my …"
  },
  "1:11:core:0": {
    "en": "__'s running.",
    "vi": "__ đang chạy.",
    "options": [
      {
        "fill": [
          "Mai"
        ],
        "mean": [
          "Mai"
        ]
      },
      {
        "fill": [
          "Nam"
        ],
        "mean": [
          "Nam"
        ]
      },
      {
        "fill": [
          "Anna"
        ],
        "mean": [
          "Anna"
        ]
      },
      {
        "fill": [
          "Ben"
        ],
        "mean": [
          "Ben"
        ]
      }
    ],
    "original": "…’s running."
  },
  "1:11:core:1": {
    "en": "The boy is __.",
    "vi": "Cậu bé đang __.",
    "options": [
      {
        "fill": [
          "running"
        ],
        "mean": [
          "chạy"
        ]
      },
      {
        "fill": [
          "swimming"
        ],
        "mean": [
          "bơi"
        ]
      },
      {
        "fill": [
          "walking"
        ],
        "mean": [
          "đi bộ"
        ]
      }
    ],
    "original": "The boy is …"
  },
  "1:12:core:0": {
    "en": "Look at the __.",
    "vi": "Hãy nhìn __.",
    "options": [
      {
        "fill": [
          "lake"
        ],
        "mean": [
          "hồ nước"
        ]
      },
      {
        "fill": [
          "leaf"
        ],
        "mean": [
          "chiếc lá"
        ]
      },
      {
        "fill": [
          "tree"
        ],
        "mean": [
          "cây"
        ]
      }
    ],
    "original": "Look at the …"
  },
  "1:12:core:1": {
    "en": "Look at __.",
    "vi": "Hãy nhìn __.",
    "options": [
      {
        "fill": [
          "Mai"
        ],
        "mean": [
          "Mai"
        ]
      },
      {
        "fill": [
          "Nam"
        ],
        "mean": [
          "Nam"
        ]
      },
      {
        "fill": [
          "Anna"
        ],
        "mean": [
          "Anna"
        ]
      },
      {
        "fill": [
          "Ben"
        ],
        "mean": [
          "Ben"
        ]
      }
    ],
    "original": "Look at …"
  },
  "1:13:core:0": {
    "en": "He's having __.",
    "vi": "Bạn ấy đang ăn __.",
    "options": [
      {
        "fill": [
          "nuts"
        ],
        "mean": [
          "các loại hạt"
        ]
      },
      {
        "fill": [
          "noodles"
        ],
        "mean": [
          "mì"
        ]
      },
      {
        "fill": [
          "bananas"
        ],
        "mean": [
          "chuối"
        ]
      }
    ],
    "original": "He’s having …"
  },
  "1:13:core:1": {
    "en": "She's having __.",
    "vi": "Bạn ấy đang ăn __.",
    "options": [
      {
        "fill": [
          "nuts"
        ],
        "mean": [
          "các loại hạt"
        ]
      },
      {
        "fill": [
          "noodles"
        ],
        "mean": [
          "mì"
        ]
      },
      {
        "fill": [
          "bananas"
        ],
        "mean": [
          "chuối"
        ]
      }
    ],
    "original": "She’s having …"
  },
  "1:14:core:0": {
    "en": "I can see a __.",
    "vi": "Mình nhìn thấy một __.",
    "options": [
      {
        "fill": [
          "teddy bear"
        ],
        "mean": [
          "gấu bông"
        ]
      },
      {
        "fill": [
          "top"
        ],
        "mean": [
          "con quay"
        ]
      },
      {
        "fill": [
          "tiger"
        ],
        "mean": [
          "con hổ"
        ]
      },
      {
        "fill": [
          "turtle"
        ],
        "mean": [
          "con rùa"
        ]
      }
    ],
    "original": "I can see a …"
  },
  "1:15:core:0": {
    "en": "Point to your __.",
    "vi": "Chỉ vào __ của em.",
    "options": [
      {
        "fill": [
          "face"
        ],
        "mean": [
          "mặt"
        ]
      },
      {
        "fill": [
          "foot"
        ],
        "mean": [
          "bàn chân"
        ]
      }
    ],
    "original": "Point to your …"
  },
  "1:15:core:1": {
    "en": "That's your __.",
    "vi": "Kia là __ của em.",
    "options": [
      {
        "fill": [
          "father"
        ],
        "mean": [
          "bố"
        ]
      },
      {
        "fill": [
          "football"
        ],
        "mean": [
          "quả bóng đá"
        ]
      }
    ],
    "original": "That’s your …"
  },
  "1:16:core:0": {
    "en": "How many __ can you see?",
    "vi": "Em nhìn thấy bao nhiêu __?",
    "options": [
      {
        "fill": [
          "windows"
        ],
        "mean": [
          "cửa sổ"
        ]
      },
      {
        "fill": [
          "doors"
        ],
        "mean": [
          "cửa ra vào"
        ]
      },
      {
        "fill": [
          "chairs"
        ],
        "mean": [
          "chiếc ghế"
        ]
      }
    ],
    "original": "How many … can you see?"
  },
  "1:16:core:1": {
    "en": "I can see __.",
    "vi": "Mình nhìn thấy __.",
    "options": [
      {
        "fill": [
          "two windows"
        ],
        "mean": [
          "hai cửa sổ"
        ]
      },
      {
        "fill": [
          "three doors"
        ],
        "mean": [
          "ba cửa ra vào"
        ]
      },
      {
        "fill": [
          "four chairs"
        ],
        "mean": [
          "bốn chiếc ghế"
        ]
      }
    ],
    "original": "I can see …"
  },
  "2:1:core:0": {
    "en": "I like __.",
    "vi": "Mình thích __.",
    "options": [
      {
        "fill": [
          "pasta"
        ],
        "mean": [
          "mì Ý"
        ]
      },
      {
        "fill": [
          "popcorn"
        ],
        "mean": [
          "bỏng ngô"
        ]
      },
      {
        "fill": [
          "pizza"
        ],
        "mean": [
          "bánh pizza"
        ]
      }
    ],
    "original": "I like …"
  },
  "2:2:core:0": {
    "en": "Is she __?",
    "vi": "Bạn ấy có đang __ không?",
    "options": [
      {
        "fill": [
          "flying a kite"
        ],
        "mean": [
          "thả diều"
        ]
      },
      {
        "fill": [
          "riding a bike"
        ],
        "mean": [
          "đạp xe"
        ]
      },
      {
        "fill": [
          "playing football"
        ],
        "mean": [
          "chơi bóng đá"
        ]
      }
    ],
    "original": "Is he / she …?",
    "answers": [
      {
        "label": "Yes",
        "en": "Yes, she is.",
        "vi": "Có, bạn ấy đang __."
      },
      {
        "label": "No",
        "en": "No, she isn't.",
        "vi": "Không, bạn ấy không __."
      }
    ]
  },
  "2:3:core:0": {
    "en": "Let's look at __!",
    "vi": "Chúng mình cùng nhìn __ nào!",
    "options": [
      {
        "fill": [
          "the sea"
        ],
        "mean": [
          "biển"
        ]
      },
      {
        "fill": [
          "the sand"
        ],
        "mean": [
          "cát"
        ]
      },
      {
        "fill": [
          "the sun"
        ],
        "mean": [
          "mặt trời"
        ]
      }
    ],
    "original": "Let’s look at …!"
  },
  "2:4:core:0": {
    "en": "There's a __.",
    "vi": "Có một __.",
    "options": [
      {
        "fill": [
          "rainbow"
        ],
        "mean": [
          "cầu vồng"
        ]
      },
      {
        "fill": [
          "river"
        ],
        "mean": [
          "dòng sông"
        ]
      },
      {
        "fill": [
          "road"
        ],
        "mean": [
          "con đường"
        ]
      }
    ],
    "original": "There’s a …"
  },
  "2:5:core:0": {
    "en": "She's __.",
    "vi": "Bạn ấy đang __.",
    "options": [
      {
        "fill": [
          "colouring a square"
        ],
        "mean": [
          "tô màu hình vuông"
        ]
      },
      {
        "fill": [
          "answering a question"
        ],
        "mean": [
          "trả lời câu hỏi"
        ]
      },
      {
        "fill": [
          "doing a quiz"
        ],
        "mean": [
          "làm câu đố"
        ]
      }
    ],
    "original": "He’s / She’s …"
  },
  "2:6:core:0": {
    "en": "Is there __?",
    "vi": "Có __ không?",
    "options": [
      {
        "fill": [
          "a box"
        ],
        "mean": [
          "một cái hộp"
        ]
      },
      {
        "fill": [
          "a fox"
        ],
        "mean": [
          "một con cáo"
        ]
      },
      {
        "fill": [
          "an ox"
        ],
        "mean": [
          "một con bò đực"
        ]
      }
    ],
    "original": "Is there a …?",
    "answers": [
      {
        "label": "Yes",
        "en": "Yes, there is.",
        "vi": "Có __."
      },
      {
        "label": "No",
        "en": "No, there isn't.",
        "vi": "Không có __."
      }
    ]
  },
  "2:7:core:0": {
    "en": "Pass me the __, please.",
    "vi": "Làm ơn đưa cho mình __.",
    "options": [
      {
        "fill": [
          "juice"
        ],
        "mean": [
          "nước ép"
        ]
      },
      {
        "fill": [
          "jam"
        ],
        "mean": [
          "mứt"
        ]
      },
      {
        "fill": [
          "bread"
        ],
        "mean": [
          "bánh mì"
        ]
      }
    ],
    "original": "Pass me the …, please."
  },
  "2:8:core:0": {
    "en": "Can you draw a __?",
    "vi": "Bạn có thể vẽ một __ không?",
    "options": [
      {
        "fill": [
          "village"
        ],
        "mean": [
          "ngôi làng"
        ]
      },
      {
        "fill": [
          "van"
        ],
        "mean": [
          "xe tải nhỏ"
        ]
      },
      {
        "fill": [
          "volleyball"
        ],
        "mean": [
          "quả bóng chuyền"
        ]
      }
    ],
    "original": "Can you draw a …?",
    "answers": [
      {
        "label": "Yes",
        "en": "Yes, I can.",
        "vi": "Có, mình có thể vẽ một __."
      },
      {
        "label": "No",
        "en": "No, I can't.",
        "vi": "Không, mình không thể vẽ một __."
      }
    ]
  },
  "2:9:core:1": {
    "en": "I want some __.",
    "vi": "Mình muốn một ít __.",
    "options": [
      {
        "fill": [
          "yogurt"
        ],
        "mean": [
          "sữa chua"
        ]
      },
      {
        "fill": [
          "yam"
        ],
        "mean": [
          "khoai từ"
        ]
      },
      {
        "fill": [
          "milk"
        ],
        "mean": [
          "sữa"
        ]
      }
    ],
    "original": "I want some …"
  },
  "2:10:core:0": {
    "en": "That's a __.",
    "vi": "Kia là một __.",
    "options": [
      {
        "fill": [
          "zebra"
        ],
        "mean": [
          "con ngựa vằn"
        ]
      },
      {
        "fill": [
          "zebu"
        ],
        "mean": [
          "con bò u"
        ]
      },
      {
        "fill": [
          "goat"
        ],
        "mean": [
          "con dê"
        ]
      }
    ],
    "original": "That’s a …"
  },
  "2:11:core:0": {
    "en": "He's __.",
    "vi": "Bạn ấy đang __.",
    "options": [
      {
        "fill": [
          "sliding"
        ],
        "mean": [
          "trượt cầu trượt"
        ]
      },
      {
        "fill": [
          "riding a bike"
        ],
        "mean": [
          "đạp xe"
        ]
      },
      {
        "fill": [
          "driving a car"
        ],
        "mean": [
          "lái ô tô"
        ]
      }
    ],
    "original": "He’s / She’s …"
  },
  "2:12:core:0": {
    "en": "The __ is on the table.",
    "vi": "__ ở trên bàn.",
    "options": [
      {
        "fill": [
          "cake"
        ],
        "mean": [
          "Chiếc bánh"
        ]
      },
      {
        "fill": [
          "cup"
        ],
        "mean": [
          "Chiếc cốc"
        ]
      },
      {
        "fill": [
          "grape"
        ],
        "mean": [
          "Quả nho"
        ]
      }
    ],
    "original": "The … is on the table."
  },
  "2:12:core:1": {
    "en": "The __ are on the table.",
    "vi": "Những __ ở trên bàn.",
    "options": [
      {
        "fill": [
          "cakes"
        ],
        "mean": [
          "chiếc bánh"
        ]
      },
      {
        "fill": [
          "cups"
        ],
        "mean": [
          "chiếc cốc"
        ]
      },
      {
        "fill": [
          "grapes"
        ],
        "mean": [
          "quả nho"
        ]
      }
    ],
    "original": "The … are on the table."
  },
  "2:13:core:1": {
    "en": "It's __.",
    "vi": "Đó là số __.",
    "options": [
      {
        "fill": [
          "eleven"
        ],
        "mean": [
          "mười một"
        ]
      },
      {
        "fill": [
          "twelve"
        ],
        "mean": [
          "mười hai"
        ]
      },
      {
        "fill": [
          "thirteen"
        ],
        "mean": [
          "mười ba"
        ]
      },
      {
        "fill": [
          "fourteen"
        ],
        "mean": [
          "mười bốn"
        ]
      },
      {
        "fill": [
          "fifteen"
        ],
        "mean": [
          "mười lăm"
        ]
      }
    ],
    "original": "It’s …"
  },
  "2:14:core:0": {
    "en": "How old is your __?",
    "vi": "__ của bạn bao nhiêu tuổi?",
    "options": [
      {
        "fill": [
          "father"
        ],
        "mean": [
          "Bố"
        ]
      },
      {
        "fill": [
          "mother"
        ],
        "mean": [
          "Mẹ"
        ]
      },
      {
        "fill": [
          "brother"
        ],
        "mean": [
          "Anh trai"
        ]
      }
    ],
    "original": "How old is your …?"
  },
  "2:14:core:1": {
    "en": "He's __ years old.",
    "vi": "Người ấy __ tuổi.",
    "options": [
      {
        "fill": [
          "thirty"
        ],
        "mean": [
          "ba mươi"
        ]
      },
      {
        "fill": [
          "forty"
        ],
        "mean": [
          "bốn mươi"
        ]
      },
      {
        "fill": [
          "fifty"
        ],
        "mean": [
          "năm mươi"
        ]
      },
      {
        "fill": [
          "sixty"
        ],
        "mean": [
          "sáu mươi"
        ]
      }
    ],
    "original": "He’s / She’s …"
  },
  "2:15:core:0": {
    "en": "Where are the __?",
    "vi": "Những __ ở đâu?",
    "options": [
      {
        "fill": [
          "shirts"
        ],
        "mean": [
          "chiếc áo sơ mi"
        ]
      },
      {
        "fill": [
          "shorts"
        ],
        "mean": [
          "chiếc quần đùi"
        ]
      },
      {
        "fill": [
          "shoes"
        ],
        "mean": [
          "đôi giày"
        ]
      }
    ],
    "original": "Where are the …?"
  },
  "2:16:core:0": {
    "en": "Is the __ near the __?",
    "vi": "__ có ở gần __ không?",
    "options": [
      {
        "fill": [
          "tent",
          "fence"
        ],
        "mean": [
          "Cái lều",
          "hàng rào"
        ]
      },
      {
        "fill": [
          "table",
          "tree"
        ],
        "mean": [
          "Cái bàn",
          "cây"
        ]
      },
      {
        "fill": [
          "chair",
          "tent"
        ],
        "mean": [
          "Cái ghế",
          "cái lều"
        ]
      }
    ],
    "original": "Is the … near the …?",
    "answers": [
      {
        "label": "Yes",
        "en": "Yes, it is.",
        "vi": "Đúng, __ ở gần __."
      },
      {
        "label": "No",
        "en": "No, it isn't.",
        "vi": "Không, __ không ở gần __."
      }
    ]
  },
  "3:1:core:0": {
    "en": "Hello. I'm __.",
    "vi": "Xin chào. Mình là __.",
    "options": [
      {
        "fill": [
          "Mai"
        ],
        "mean": [
          "Mai"
        ]
      },
      {
        "fill": [
          "Nam"
        ],
        "mean": [
          "Nam"
        ]
      },
      {
        "fill": [
          "Anna"
        ],
        "mean": [
          "Anna"
        ]
      },
      {
        "fill": [
          "Ben"
        ],
        "mean": [
          "Ben"
        ]
      }
    ],
    "original": "Hello. I'm …"
  },
  "3:2:core:0": {
    "en": "What's your name? — My name's __.",
    "vi": "Bạn tên gì? — Mình tên là __.",
    "options": [
      {
        "fill": [
          "Mai"
        ],
        "mean": [
          "Mai"
        ]
      },
      {
        "fill": [
          "Nam"
        ],
        "mean": [
          "Nam"
        ]
      },
      {
        "fill": [
          "Anna"
        ],
        "mean": [
          "Anna"
        ]
      },
      {
        "fill": [
          "Ben"
        ],
        "mean": [
          "Ben"
        ]
      }
    ],
    "original": "What's your name? — My name's …"
  },
  "3:2:core:1": {
    "en": "How old are you? — I'm __ years old.",
    "vi": "Bạn mấy tuổi? — Mình __ tuổi.",
    "options": [
      {
        "fill": [
          "seven"
        ],
        "mean": [
          "bảy"
        ]
      },
      {
        "fill": [
          "eight"
        ],
        "mean": [
          "tám"
        ]
      },
      {
        "fill": [
          "nine"
        ],
        "mean": [
          "chín"
        ]
      },
      {
        "fill": [
          "ten"
        ],
        "mean": [
          "mười"
        ]
      }
    ],
    "original": "How old are you? — I'm … years old."
  },
  "3:3:core:0": {
    "en": "This is __. That is __.",
    "vi": "Đây là __. Kia là __.",
    "options": [
      {
        "fill": [
          "Mai",
          "Ben"
        ],
        "mean": [
          "Mai",
          "Ben"
        ]
      },
      {
        "fill": [
          "Nam",
          "Anna"
        ],
        "mean": [
          "Nam",
          "Anna"
        ]
      }
    ],
    "original": "This is … / That is …"
  },
  "3:3:core:1": {
    "en": "Is this __?",
    "vi": "Đây có phải __ không?",
    "options": [
      {
        "fill": [
          "Mai"
        ],
        "mean": [
          "Mai"
        ]
      },
      {
        "fill": [
          "Nam"
        ],
        "mean": [
          "Nam"
        ]
      },
      {
        "fill": [
          "Anna"
        ],
        "mean": [
          "Anna"
        ]
      },
      {
        "fill": [
          "Ben"
        ],
        "mean": [
          "Ben"
        ]
      }
    ],
    "original": "Is this / that …? — Yes, it is. / No, it isn't.",
    "answers": [
      {
        "label": "Yes",
        "en": "Yes, it is.",
        "vi": "Đúng, đây là __."
      },
      {
        "label": "No",
        "en": "No, it isn't.",
        "vi": "Không, đây không phải __."
      }
    ]
  },
  "3:4:core:0": {
    "en": "What's this? — It's a __.",
    "vi": "Đây là gì? — Đây là một __.",
    "options": [
      {
        "fill": [
          "nose"
        ],
        "mean": [
          "cái mũi"
        ]
      },
      {
        "fill": [
          "hand"
        ],
        "mean": [
          "bàn tay"
        ]
      },
      {
        "fill": [
          "face"
        ],
        "mean": [
          "khuôn mặt"
        ]
      }
    ],
    "original": "What's this? — It's a …"
  },
  "3:4:core:1": {
    "en": "Touch your __.",
    "vi": "Chạm vào __ của em.",
    "options": [
      {
        "fill": [
          "nose"
        ],
        "mean": [
          "mũi"
        ]
      },
      {
        "fill": [
          "face"
        ],
        "mean": [
          "mặt"
        ]
      },
      {
        "fill": [
          "hand"
        ],
        "mean": [
          "bàn tay"
        ]
      },
      {
        "fill": [
          "ear"
        ],
        "mean": [
          "tai"
        ]
      },
      {
        "fill": [
          "mouth"
        ],
        "mean": [
          "miệng"
        ]
      }
    ],
    "original": "Touch / Open your …"
  },
  "3:5:core:0": {
    "en": "What's your hobby? — It's __.",
    "vi": "Sở thích của bạn là gì? — Là __.",
    "options": [
      {
        "fill": [
          "singing"
        ],
        "mean": [
          "hát"
        ]
      },
      {
        "fill": [
          "dancing"
        ],
        "mean": [
          "nhảy"
        ]
      },
      {
        "fill": [
          "drawing"
        ],
        "mean": [
          "vẽ"
        ]
      },
      {
        "fill": [
          "swimming"
        ],
        "mean": [
          "bơi"
        ]
      },
      {
        "fill": [
          "cooking"
        ],
        "mean": [
          "nấu ăn"
        ]
      },
      {
        "fill": [
          "painting"
        ],
        "mean": [
          "tô màu"
        ]
      }
    ],
    "original": "What's your hobby? — It's …"
  },
  "3:5:core:1": {
    "en": "Do you like __?",
    "vi": "Bạn có thích __ không?",
    "options": [
      {
        "fill": [
          "singing"
        ],
        "mean": [
          "hát"
        ]
      },
      {
        "fill": [
          "dancing"
        ],
        "mean": [
          "nhảy"
        ]
      },
      {
        "fill": [
          "drawing"
        ],
        "mean": [
          "vẽ"
        ]
      },
      {
        "fill": [
          "swimming"
        ],
        "mean": [
          "bơi"
        ]
      },
      {
        "fill": [
          "cooking"
        ],
        "mean": [
          "nấu ăn"
        ]
      },
      {
        "fill": [
          "painting"
        ],
        "mean": [
          "tô màu"
        ]
      }
    ],
    "original": "Do you like …? — Yes, I do. / No, I don't.",
    "answers": [
      {
        "label": "Yes",
        "en": "Yes, I do.",
        "vi": "Có, mình thích __."
      },
      {
        "label": "No",
        "en": "No, I don't.",
        "vi": "Không, mình không thích __."
      }
    ]
  },
  "3:6:core:0": {
    "en": "Is this our __?",
    "vi": "Đây có phải __ của chúng ta không?",
    "options": [
      {
        "fill": [
          "classroom"
        ],
        "mean": [
          "phòng học"
        ]
      },
      {
        "fill": [
          "library"
        ],
        "mean": [
          "thư viện"
        ]
      },
      {
        "fill": [
          "playground"
        ],
        "mean": [
          "sân chơi"
        ]
      },
      {
        "fill": [
          "music room"
        ],
        "mean": [
          "phòng âm nhạc"
        ]
      },
      {
        "fill": [
          "computer room"
        ],
        "mean": [
          "phòng máy tính"
        ]
      },
      {
        "fill": [
          "art room"
        ],
        "mean": [
          "phòng mỹ thuật"
        ]
      }
    ],
    "original": "Is this our …? — Yes, it is. / No, it isn't.",
    "answers": [
      {
        "label": "Yes",
        "en": "Yes, it is.",
        "vi": "Đúng, đây là __ của chúng ta."
      },
      {
        "label": "No",
        "en": "No, it isn't.",
        "vi": "Không, đây không phải __ của chúng ta."
      }
    ]
  },
  "3:6:core:1": {
    "en": "Let's go to the __. — OK, let's go.",
    "vi": "Chúng ta đến __ nhé. — Được, đi thôi.",
    "options": [
      {
        "fill": [
          "classroom"
        ],
        "mean": [
          "phòng học"
        ]
      },
      {
        "fill": [
          "library"
        ],
        "mean": [
          "thư viện"
        ]
      },
      {
        "fill": [
          "playground"
        ],
        "mean": [
          "sân chơi"
        ]
      },
      {
        "fill": [
          "music room"
        ],
        "mean": [
          "phòng âm nhạc"
        ]
      },
      {
        "fill": [
          "computer room"
        ],
        "mean": [
          "phòng máy tính"
        ]
      },
      {
        "fill": [
          "art room"
        ],
        "mean": [
          "phòng mỹ thuật"
        ]
      }
    ],
    "original": "Let's go to the … — OK, let's go."
  },
  "3:7:core:1": {
    "en": "May I __?",
    "vi": "Em có thể __ không ạ?",
    "options": [
      {
        "fill": [
          "come in"
        ],
        "mean": [
          "đi vào"
        ]
      },
      {
        "fill": [
          "go out"
        ],
        "mean": [
          "đi ra ngoài"
        ]
      },
      {
        "fill": [
          "open my book"
        ],
        "mean": [
          "mở sách của em"
        ]
      },
      {
        "fill": [
          "speak English"
        ],
        "mean": [
          "nói tiếng Anh"
        ]
      }
    ],
    "original": "May I …? — Yes, you can. / No, you can't.",
    "answers": [
      {
        "label": "Yes",
        "en": "Yes, you may.",
        "vi": "Được, em có thể __."
      },
      {
        "label": "No",
        "en": "No, you may not.",
        "vi": "Không, em không được __."
      }
    ]
  },
  "3:8:core:0": {
    "en": "I have a __.",
    "vi": "Mình có một __.",
    "options": [
      {
        "fill": [
          "pen"
        ],
        "mean": [
          "bút mực"
        ]
      },
      {
        "fill": [
          "pencil"
        ],
        "mean": [
          "bút chì"
        ]
      },
      {
        "fill": [
          "ruler"
        ],
        "mean": [
          "thước kẻ"
        ]
      },
      {
        "fill": [
          "notebook"
        ],
        "mean": [
          "quyển vở"
        ]
      },
      {
        "fill": [
          "school bag"
        ],
        "mean": [
          "cặp sách"
        ]
      }
    ],
    "original": "I have a / an …"
  },
  "3:8:core:1": {
    "en": "Do you have a __?",
    "vi": "Bạn có một __ không?",
    "options": [
      {
        "fill": [
          "pen"
        ],
        "mean": [
          "bút mực"
        ]
      },
      {
        "fill": [
          "pencil"
        ],
        "mean": [
          "bút chì"
        ]
      },
      {
        "fill": [
          "ruler"
        ],
        "mean": [
          "thước kẻ"
        ]
      },
      {
        "fill": [
          "notebook"
        ],
        "mean": [
          "quyển vở"
        ]
      },
      {
        "fill": [
          "school bag"
        ],
        "mean": [
          "cặp sách"
        ]
      }
    ],
    "original": "Do you have a / an …? — Yes, I do. / No, I don't.",
    "answers": [
      {
        "label": "Yes",
        "en": "Yes, I do.",
        "vi": "Có, mình có một chiếc __."
      },
      {
        "label": "No",
        "en": "No, I don't.",
        "vi": "Không, mình không có __."
      }
    ]
  },
  "3:9:core:0": {
    "en": "What colour is it? — It's __.",
    "vi": "Nó có màu gì? — Nó màu __.",
    "options": [
      {
        "fill": [
          "red"
        ],
        "mean": [
          "đỏ"
        ]
      },
      {
        "fill": [
          "blue"
        ],
        "mean": [
          "xanh dương"
        ]
      },
      {
        "fill": [
          "green"
        ],
        "mean": [
          "xanh lá"
        ]
      },
      {
        "fill": [
          "yellow"
        ],
        "mean": [
          "vàng"
        ]
      },
      {
        "fill": [
          "pink"
        ],
        "mean": [
          "hồng"
        ]
      },
      {
        "fill": [
          "purple"
        ],
        "mean": [
          "tím"
        ]
      },
      {
        "fill": [
          "orange"
        ],
        "mean": [
          "cam"
        ]
      },
      {
        "fill": [
          "white"
        ],
        "mean": [
          "trắng"
        ]
      },
      {
        "fill": [
          "black"
        ],
        "mean": [
          "đen"
        ]
      },
      {
        "fill": [
          "brown"
        ],
        "mean": [
          "nâu"
        ]
      },
      {
        "fill": [
          "grey"
        ],
        "mean": [
          "xám"
        ]
      }
    ],
    "original": "What colour is it? — It's …"
  },
  "3:9:core:1": {
    "en": "What colour are they? — They're __.",
    "vi": "Chúng có màu gì? — Chúng màu __.",
    "options": [
      {
        "fill": [
          "red"
        ],
        "mean": [
          "đỏ"
        ]
      },
      {
        "fill": [
          "blue"
        ],
        "mean": [
          "xanh dương"
        ]
      },
      {
        "fill": [
          "green"
        ],
        "mean": [
          "xanh lá"
        ]
      },
      {
        "fill": [
          "yellow"
        ],
        "mean": [
          "vàng"
        ]
      },
      {
        "fill": [
          "pink"
        ],
        "mean": [
          "hồng"
        ]
      },
      {
        "fill": [
          "purple"
        ],
        "mean": [
          "tím"
        ]
      },
      {
        "fill": [
          "orange"
        ],
        "mean": [
          "cam"
        ]
      },
      {
        "fill": [
          "white"
        ],
        "mean": [
          "trắng"
        ]
      },
      {
        "fill": [
          "black"
        ],
        "mean": [
          "đen"
        ]
      },
      {
        "fill": [
          "brown"
        ],
        "mean": [
          "nâu"
        ]
      },
      {
        "fill": [
          "grey"
        ],
        "mean": [
          "xám"
        ]
      }
    ],
    "original": "What colour are they? — They're …"
  },
  "3:10:core:0": {
    "en": "I __ at break time.",
    "vi": "Mình __ vào giờ ra chơi.",
    "options": [
      {
        "fill": [
          "play football"
        ],
        "mean": [
          "chơi bóng đá"
        ]
      },
      {
        "fill": [
          "play badminton"
        ],
        "mean": [
          "chơi cầu lông"
        ]
      },
      {
        "fill": [
          "play basketball"
        ],
        "mean": [
          "chơi bóng rổ"
        ]
      },
      {
        "fill": [
          "play table tennis"
        ],
        "mean": [
          "chơi bóng bàn"
        ]
      },
      {
        "fill": [
          "play chess"
        ],
        "mean": [
          "chơi cờ vua"
        ]
      }
    ],
    "original": "I … at break time."
  },
  "3:10:core:1": {
    "en": "Do you __ at break time?",
    "vi": "Bạn có __ vào giờ ra chơi không?",
    "options": [
      {
        "fill": [
          "play football"
        ],
        "mean": [
          "chơi bóng đá"
        ]
      },
      {
        "fill": [
          "play badminton"
        ],
        "mean": [
          "chơi cầu lông"
        ]
      },
      {
        "fill": [
          "play basketball"
        ],
        "mean": [
          "chơi bóng rổ"
        ]
      },
      {
        "fill": [
          "play table tennis"
        ],
        "mean": [
          "chơi bóng bàn"
        ]
      },
      {
        "fill": [
          "play chess"
        ],
        "mean": [
          "chơi cờ vua"
        ]
      }
    ],
    "original": "Do you … at break time? — Yes, I do. / No, I don't.",
    "answers": [
      {
        "label": "Yes",
        "en": "Yes, I do.",
        "vi": "Có, mình __ vào giờ ra chơi."
      },
      {
        "label": "No",
        "en": "No, I don't.",
        "vi": "Không, mình không __ vào giờ ra chơi."
      }
    ]
  },
  "3:11:core:0": {
    "en": "Who's this? — It's my __.",
    "vi": "Đây là ai? — Là __ của mình.",
    "options": [
      {
        "fill": [
          "father"
        ],
        "mean": [
          "bố"
        ]
      },
      {
        "fill": [
          "mother"
        ],
        "mean": [
          "mẹ"
        ]
      },
      {
        "fill": [
          "brother"
        ],
        "mean": [
          "anh trai"
        ]
      },
      {
        "fill": [
          "sister"
        ],
        "mean": [
          "chị gái"
        ]
      },
      {
        "fill": [
          "grandfather"
        ],
        "mean": [
          "ông"
        ]
      },
      {
        "fill": [
          "grandmother"
        ],
        "mean": [
          "bà"
        ]
      }
    ],
    "original": "Who's this / that? — It's my …"
  },
  "3:11:core:1": {
    "en": "How old is he? — He's __ years old.",
    "vi": "Người ấy bao nhiêu tuổi? — Người ấy __ tuổi.",
    "options": [
      {
        "fill": [
          "thirty"
        ],
        "mean": [
          "ba mươi"
        ]
      },
      {
        "fill": [
          "forty"
        ],
        "mean": [
          "bốn mươi"
        ]
      },
      {
        "fill": [
          "fifty"
        ],
        "mean": [
          "năm mươi"
        ]
      },
      {
        "fill": [
          "sixty"
        ],
        "mean": [
          "sáu mươi"
        ]
      }
    ],
    "original": "How old is he / she? — He's / She's …"
  },
  "3:12:core:0": {
    "en": "What's her job? — She's a __.",
    "vi": "Cô ấy làm nghề gì? — Cô ấy là __.",
    "options": [
      {
        "fill": [
          "doctor"
        ],
        "mean": [
          "bác sĩ"
        ]
      },
      {
        "fill": [
          "teacher"
        ],
        "mean": [
          "giáo viên"
        ]
      },
      {
        "fill": [
          "farmer"
        ],
        "mean": [
          "nông dân"
        ]
      },
      {
        "fill": [
          "nurse"
        ],
        "mean": [
          "y tá"
        ]
      },
      {
        "fill": [
          "driver"
        ],
        "mean": [
          "tài xế"
        ]
      },
      {
        "fill": [
          "worker"
        ],
        "mean": [
          "công nhân"
        ]
      }
    ],
    "original": "What's his / her job? — He's / She's a …"
  },
  "3:12:core:1": {
    "en": "Is he a __?",
    "vi": "Anh ấy có phải là __ không?",
    "options": [
      {
        "fill": [
          "doctor"
        ],
        "mean": [
          "bác sĩ"
        ]
      },
      {
        "fill": [
          "teacher"
        ],
        "mean": [
          "giáo viên"
        ]
      },
      {
        "fill": [
          "farmer"
        ],
        "mean": [
          "nông dân"
        ]
      },
      {
        "fill": [
          "nurse"
        ],
        "mean": [
          "y tá"
        ]
      },
      {
        "fill": [
          "driver"
        ],
        "mean": [
          "tài xế"
        ]
      },
      {
        "fill": [
          "worker"
        ],
        "mean": [
          "công nhân"
        ]
      }
    ],
    "original": "Is he / she a …? — Yes, he / she is. / No, he / she isn't.",
    "answers": [
      {
        "label": "Yes",
        "en": "Yes, he is.",
        "vi": "Đúng, anh ấy là __."
      },
      {
        "label": "No",
        "en": "No, he isn't.",
        "vi": "Không, anh ấy không phải là __."
      }
    ]
  },
  "3:13:core:0": {
    "en": "Where's the __? — It's here.",
    "vi": "__ ở đâu? — Nó ở đây.",
    "options": [
      {
        "fill": [
          "bed"
        ],
        "mean": [
          "giường"
        ]
      },
      {
        "fill": [
          "desk"
        ],
        "mean": [
          "bàn học"
        ]
      },
      {
        "fill": [
          "chair"
        ],
        "mean": [
          "ghế"
        ]
      },
      {
        "fill": [
          "table"
        ],
        "mean": [
          "bàn"
        ]
      },
      {
        "fill": [
          "lamp"
        ],
        "mean": [
          "đèn"
        ]
      }
    ],
    "original": "Where's the …? — It's here / there."
  },
  "3:13:core:1": {
    "en": "Where are the __? — They're there.",
    "vi": "Những __ ở đâu? — Chúng ở kia.",
    "options": [
      {
        "fill": [
          "chairs"
        ],
        "mean": [
          "chiếc ghế"
        ]
      },
      {
        "fill": [
          "books"
        ],
        "mean": [
          "quyển sách"
        ]
      },
      {
        "fill": [
          "lamps"
        ],
        "mean": [
          "chiếc đèn"
        ]
      }
    ],
    "original": "Where are the …? — They're here / there."
  },
  "3:14:core:0": {
    "en": "There's a __ in the room.",
    "vi": "Có một __ trong phòng.",
    "options": [
      {
        "fill": [
          "bed"
        ],
        "mean": [
          "giường"
        ]
      },
      {
        "fill": [
          "desk"
        ],
        "mean": [
          "bàn học"
        ]
      },
      {
        "fill": [
          "chair"
        ],
        "mean": [
          "ghế"
        ]
      },
      {
        "fill": [
          "table"
        ],
        "mean": [
          "bàn"
        ]
      },
      {
        "fill": [
          "lamp"
        ],
        "mean": [
          "đèn"
        ]
      }
    ],
    "original": "There's a … / There are … in the room."
  },
  "3:14:core:1": {
    "en": "The __ is __.",
    "vi": "__ thì __.",
    "options": [
      {
        "fill": [
          "bed",
          "big"
        ],
        "mean": [
          "Chiếc giường",
          "lớn"
        ]
      },
      {
        "fill": [
          "desk",
          "small"
        ],
        "mean": [
          "Bàn học",
          "nhỏ"
        ]
      },
      {
        "fill": [
          "chair",
          "new"
        ],
        "mean": [
          "Chiếc ghế",
          "mới"
        ]
      },
      {
        "fill": [
          "bed",
          "old"
        ],
        "mean": [
          "Chiếc giường",
          "cũ"
        ]
      }
    ],
    "original": "The … is … / The … are …"
  },
  "3:15:core:0": {
    "en": "Would you like some __?",
    "vi": "Bạn có muốn dùng một ít __ không?",
    "options": [
      {
        "fill": [
          "rice"
        ],
        "mean": [
          "cơm"
        ]
      },
      {
        "fill": [
          "chicken"
        ],
        "mean": [
          "thịt gà"
        ]
      },
      {
        "fill": [
          "fish"
        ],
        "mean": [
          "cá"
        ]
      },
      {
        "fill": [
          "bread"
        ],
        "mean": [
          "bánh mì"
        ]
      },
      {
        "fill": [
          "noodles"
        ],
        "mean": [
          "mì"
        ]
      }
    ],
    "original": "Would you like some …? — Yes, please. / No, thanks.",
    "answers": [
      {
        "label": "Yes",
        "en": "Yes, please.",
        "vi": "Có, cho mình __ nhé."
      },
      {
        "label": "No",
        "en": "No, thank you.",
        "vi": "Không, cảm ơn bạn."
      }
    ]
  },
  "3:15:core:1": {
    "en": "What would you like to drink? — I'd like some __, please.",
    "vi": "Bạn muốn uống gì? — Cho mình một ít __.",
    "options": [
      {
        "fill": [
          "water"
        ],
        "mean": [
          "nước"
        ]
      },
      {
        "fill": [
          "milk"
        ],
        "mean": [
          "sữa"
        ]
      },
      {
        "fill": [
          "orange juice"
        ],
        "mean": [
          "nước cam"
        ]
      },
      {
        "fill": [
          "lemonade"
        ],
        "mean": [
          "nước chanh"
        ]
      }
    ],
    "original": "What would you like to eat / drink? — I'd like some …, please."
  },
  "3:16:core:0": {
    "en": "Do you have any __?",
    "vi": "Bạn có __ nào không?",
    "options": [
      {
        "fill": [
          "dogs"
        ],
        "mean": [
          "con chó"
        ]
      },
      {
        "fill": [
          "cats"
        ],
        "mean": [
          "con mèo"
        ]
      },
      {
        "fill": [
          "birds"
        ],
        "mean": [
          "con chim"
        ]
      },
      {
        "fill": [
          "rabbits"
        ],
        "mean": [
          "con thỏ"
        ]
      },
      {
        "fill": [
          "parrots"
        ],
        "mean": [
          "con vẹt"
        ]
      }
    ],
    "original": "Do you have any …? — Yes, I do. / No, I don't.",
    "answers": [
      {
        "label": "Yes",
        "en": "Yes, I do.",
        "vi": "Có, mình có __."
      },
      {
        "label": "No",
        "en": "No, I don't.",
        "vi": "Không, mình không có __."
      }
    ]
  },
  "3:16:core:1": {
    "en": "How many __ do you have? — I have __ __.",
    "vi": "Bạn có bao nhiêu __? — Mình có __ __.",
    "options": [
      {
        "fill": [
          "dogs",
          "two",
          "dogs"
        ],
        "mean": [
          "con chó",
          "hai",
          "con chó"
        ]
      },
      {
        "fill": [
          "cats",
          "three",
          "cats"
        ],
        "mean": [
          "con mèo",
          "ba",
          "con mèo"
        ]
      },
      {
        "fill": [
          "birds",
          "four",
          "birds"
        ],
        "mean": [
          "con chim",
          "bốn",
          "con chim"
        ]
      },
      {
        "fill": [
          "rabbits",
          "five",
          "rabbits"
        ],
        "mean": [
          "con thỏ",
          "năm",
          "con thỏ"
        ]
      },
      {
        "fill": [
          "parrots",
          "two",
          "parrots"
        ],
        "mean": [
          "con vẹt",
          "hai",
          "con vẹt"
        ]
      }
    ],
    "original": "How many … do you have? — I have …"
  },
  "3:17:core:0": {
    "en": "She has __.",
    "vi": "Bạn ấy có __.",
    "options": [
      {
        "fill": [
          "a car"
        ],
        "mean": [
          "một ô tô đồ chơi"
        ]
      },
      {
        "fill": [
          "two dolls"
        ],
        "mean": [
          "hai búp bê"
        ]
      },
      {
        "fill": [
          "three kites"
        ],
        "mean": [
          "ba chiếc diều"
        ]
      },
      {
        "fill": [
          "a teddy bear"
        ],
        "mean": [
          "một chú gấu bông"
        ]
      }
    ],
    "original": "He / She has …"
  },
  "3:17:core:1": {
    "en": "They have __.",
    "vi": "Họ có __.",
    "options": [
      {
        "fill": [
          "a car"
        ],
        "mean": [
          "một ô tô đồ chơi"
        ]
      },
      {
        "fill": [
          "two dolls"
        ],
        "mean": [
          "hai búp bê"
        ]
      },
      {
        "fill": [
          "three kites"
        ],
        "mean": [
          "ba chiếc diều"
        ]
      },
      {
        "fill": [
          "a teddy bear"
        ],
        "mean": [
          "một chú gấu bông"
        ]
      }
    ],
    "original": "They have …"
  },
  "3:18:core:0": {
    "en": "I'm __.",
    "vi": "Mình đang __.",
    "options": [
      {
        "fill": [
          "singing"
        ],
        "mean": [
          "hát"
        ]
      },
      {
        "fill": [
          "dancing"
        ],
        "mean": [
          "nhảy"
        ]
      },
      {
        "fill": [
          "drawing a picture"
        ],
        "mean": [
          "vẽ tranh"
        ]
      },
      {
        "fill": [
          "reading a book"
        ],
        "mean": [
          "đọc sách"
        ]
      },
      {
        "fill": [
          "listening to music"
        ],
        "mean": [
          "nghe nhạc"
        ]
      }
    ],
    "original": "I'm … (verb-ing)."
  },
  "3:18:core:1": {
    "en": "What are you doing? — I'm __.",
    "vi": "Bạn đang làm gì? — Mình đang __.",
    "options": [
      {
        "fill": [
          "singing"
        ],
        "mean": [
          "hát"
        ]
      },
      {
        "fill": [
          "dancing"
        ],
        "mean": [
          "nhảy"
        ]
      },
      {
        "fill": [
          "drawing a picture"
        ],
        "mean": [
          "vẽ tranh"
        ]
      },
      {
        "fill": [
          "reading a book"
        ],
        "mean": [
          "đọc sách"
        ]
      },
      {
        "fill": [
          "listening to music"
        ],
        "mean": [
          "nghe nhạc"
        ]
      }
    ],
    "original": "What are you doing? — I'm …"
  },
  "3:19:core:0": {
    "en": "He's __.",
    "vi": "Bạn ấy đang __.",
    "options": [
      {
        "fill": [
          "running"
        ],
        "mean": [
          "chạy"
        ]
      },
      {
        "fill": [
          "walking"
        ],
        "mean": [
          "đi bộ"
        ]
      },
      {
        "fill": [
          "skating"
        ],
        "mean": [
          "trượt pa tin"
        ]
      },
      {
        "fill": [
          "cycling"
        ],
        "mean": [
          "đạp xe"
        ]
      }
    ],
    "original": "He's / She's … (verb-ing)."
  },
  "3:19:core:1": {
    "en": "What's she doing? — She's __.",
    "vi": "Bạn ấy đang làm gì? — Bạn ấy đang __.",
    "options": [
      {
        "fill": [
          "painting a picture"
        ],
        "mean": [
          "tô tranh"
        ]
      },
      {
        "fill": [
          "playing badminton"
        ],
        "mean": [
          "chơi cầu lông"
        ]
      },
      {
        "fill": [
          "flying a kite"
        ],
        "mean": [
          "thả diều"
        ]
      }
    ],
    "original": "What's he / she doing? — He's / She's …"
  },
  "3:20:core:0": {
    "en": "What can you see? — I can see __.",
    "vi": "Bạn nhìn thấy gì? — Mình nhìn thấy __.",
    "options": [
      {
        "fill": [
          "a tiger"
        ],
        "mean": [
          "một con hổ"
        ]
      },
      {
        "fill": [
          "two monkeys"
        ],
        "mean": [
          "hai con khỉ"
        ]
      },
      {
        "fill": [
          "a peacock"
        ],
        "mean": [
          "một con công"
        ]
      }
    ],
    "original": "What can you see? — I can see …"
  },
  "3:20:core:1": {
    "en": "What's the __ doing? — It's __.",
    "vi": "Con __ đang làm gì? — Nó đang __.",
    "options": [
      {
        "fill": [
          "monkey",
          "climbing"
        ],
        "mean": [
          "khỉ",
          "leo trèo"
        ]
      },
      {
        "fill": [
          "horse",
          "running"
        ],
        "mean": [
          "ngựa",
          "chạy"
        ]
      },
      {
        "fill": [
          "parrot",
          "flying"
        ],
        "mean": [
          "vẹt",
          "bay"
        ]
      }
    ],
    "original": "What's the … doing? — It's …"
  },
  "4:1:core:0": {
    "en": "Where are you from? — I'm from __.",
    "vi": "Bạn đến từ đâu? — Mình đến từ __.",
    "options": [
      {
        "fill": [
          "Viet Nam"
        ],
        "mean": [
          "Việt Nam"
        ]
      },
      {
        "fill": [
          "Britain"
        ],
        "mean": [
          "Anh"
        ]
      },
      {
        "fill": [
          "Japan"
        ],
        "mean": [
          "Nhật Bản"
        ]
      },
      {
        "fill": [
          "Australia"
        ],
        "mean": [
          "Úc"
        ]
      },
      {
        "fill": [
          "America"
        ],
        "mean": [
          "Mỹ"
        ]
      }
    ],
    "original": "Where are you from? — I'm from …"
  },
  "4:1:core:1": {
    "en": "Where's she from? — She's from __.",
    "vi": "Bạn ấy đến từ đâu? — Bạn ấy đến từ __.",
    "options": [
      {
        "fill": [
          "Viet Nam"
        ],
        "mean": [
          "Việt Nam"
        ]
      },
      {
        "fill": [
          "Britain"
        ],
        "mean": [
          "Anh"
        ]
      },
      {
        "fill": [
          "Japan"
        ],
        "mean": [
          "Nhật Bản"
        ]
      },
      {
        "fill": [
          "Australia"
        ],
        "mean": [
          "Úc"
        ]
      },
      {
        "fill": [
          "America"
        ],
        "mean": [
          "Mỹ"
        ]
      }
    ],
    "original": "Where's he / she from? — He's / She's from …"
  },
  "4:2:core:0": {
    "en": "What time is it? — It's __.",
    "vi": "Bây giờ là mấy giờ? — Bây giờ là __.",
    "options": [
      {
        "fill": [
          "seven o'clock"
        ],
        "mean": [
          "bảy giờ"
        ]
      },
      {
        "fill": [
          "eight o'clock"
        ],
        "mean": [
          "tám giờ"
        ]
      },
      {
        "fill": [
          "nine o'clock"
        ],
        "mean": [
          "chín giờ"
        ]
      }
    ],
    "original": "What time is it? — It's …"
  },
  "4:2:core:1": {
    "en": "What time do you __? — I __ at __.",
    "vi": "Bạn __ lúc mấy giờ? — Mình __ lúc __.",
    "options": [
      {
        "fill": [
          "get up",
          "get up",
          "six o'clock"
        ],
        "mean": [
          "thức dậy",
          "thức dậy",
          "sáu giờ"
        ]
      },
      {
        "fill": [
          "have breakfast",
          "have breakfast",
          "seven o'clock"
        ],
        "mean": [
          "ăn sáng",
          "ăn sáng",
          "bảy giờ"
        ]
      },
      {
        "fill": [
          "go to school",
          "go to school",
          "eight o'clock"
        ],
        "mean": [
          "đi học",
          "đi học",
          "tám giờ"
        ]
      }
    ],
    "original": "What time do you …? — I … at …"
  },
  "4:3:core:0": {
    "en": "What day is it today? — It's __.",
    "vi": "Hôm nay là thứ mấy? — Hôm nay là __.",
    "options": [
      {
        "fill": [
          "Monday"
        ],
        "mean": [
          "thứ Hai"
        ]
      },
      {
        "fill": [
          "Tuesday"
        ],
        "mean": [
          "thứ Ba"
        ]
      },
      {
        "fill": [
          "Wednesday"
        ],
        "mean": [
          "thứ Tư"
        ]
      },
      {
        "fill": [
          "Thursday"
        ],
        "mean": [
          "thứ Năm"
        ]
      },
      {
        "fill": [
          "Friday"
        ],
        "mean": [
          "thứ Sáu"
        ]
      },
      {
        "fill": [
          "Saturday"
        ],
        "mean": [
          "thứ Bảy"
        ]
      },
      {
        "fill": [
          "Sunday"
        ],
        "mean": [
          "Chủ nhật"
        ]
      }
    ],
    "original": "What day is it today? — It's …"
  },
  "4:3:core:1": {
    "en": "What do you do on __? — I __.",
    "vi": "Bạn làm gì vào __? — Mình __.",
    "options": [
      {
        "fill": [
          "Mondays",
          "study at school"
        ],
        "mean": [
          "các ngày thứ Hai",
          "học ở trường"
        ]
      },
      {
        "fill": [
          "Tuesdays",
          "go to school"
        ],
        "mean": [
          "các ngày thứ Ba",
          "đi học"
        ]
      },
      {
        "fill": [
          "Sundays",
          "do housework"
        ],
        "mean": [
          "các ngày Chủ nhật",
          "làm việc nhà"
        ]
      }
    ],
    "original": "What do you do on …? — I …"
  },
  "4:4:core:0": {
    "en": "When's your birthday? — It's in __.",
    "vi": "Sinh nhật bạn vào khi nào? — Vào tháng __.",
    "options": [
      {
        "fill": [
          "January"
        ],
        "mean": [
          "Một"
        ]
      },
      {
        "fill": [
          "February"
        ],
        "mean": [
          "Hai"
        ]
      },
      {
        "fill": [
          "March"
        ],
        "mean": [
          "Ba"
        ]
      },
      {
        "fill": [
          "April"
        ],
        "mean": [
          "Tư"
        ]
      },
      {
        "fill": [
          "May"
        ],
        "mean": [
          "Năm"
        ]
      },
      {
        "fill": [
          "June"
        ],
        "mean": [
          "Sáu"
        ]
      },
      {
        "fill": [
          "July"
        ],
        "mean": [
          "Bảy"
        ]
      },
      {
        "fill": [
          "August"
        ],
        "mean": [
          "Tám"
        ]
      },
      {
        "fill": [
          "September"
        ],
        "mean": [
          "Chín"
        ]
      },
      {
        "fill": [
          "October"
        ],
        "mean": [
          "Mười"
        ]
      },
      {
        "fill": [
          "November"
        ],
        "mean": [
          "Mười Một"
        ]
      },
      {
        "fill": [
          "December"
        ],
        "mean": [
          "Mười Hai"
        ]
      }
    ],
    "original": "When's your birthday? — It's in …"
  },
  "4:4:core:1": {
    "en": "What do you want to drink? — I want __.",
    "vi": "Bạn muốn uống gì? — Mình muốn __.",
    "options": [
      {
        "fill": [
          "water"
        ],
        "mean": [
          "nước"
        ]
      },
      {
        "fill": [
          "milk"
        ],
        "mean": [
          "sữa"
        ]
      },
      {
        "fill": [
          "orange juice"
        ],
        "mean": [
          "nước cam"
        ]
      },
      {
        "fill": [
          "lemonade"
        ],
        "mean": [
          "nước chanh"
        ]
      }
    ],
    "original": "What do you want to eat / drink? — I want …"
  },
  "4:5:core:0": {
    "en": "Can you __?",
    "vi": "Bạn có thể __ không?",
    "options": [
      {
        "fill": [
          "sing"
        ],
        "mean": [
          "hát"
        ]
      },
      {
        "fill": [
          "dance"
        ],
        "mean": [
          "nhảy"
        ]
      },
      {
        "fill": [
          "swim"
        ],
        "mean": [
          "bơi"
        ]
      },
      {
        "fill": [
          "draw"
        ],
        "mean": [
          "vẽ"
        ]
      },
      {
        "fill": [
          "run"
        ],
        "mean": [
          "chạy"
        ]
      }
    ],
    "original": "Can you …? — Yes, I can. / No, I can't.",
    "answers": [
      {
        "label": "Yes",
        "en": "Yes, I can.",
        "vi": "Có, mình có thể __."
      },
      {
        "label": "No",
        "en": "No, I can't.",
        "vi": "Không, mình không thể __."
      }
    ]
  },
  "4:5:core:1": {
    "en": "Can he __?",
    "vi": "Bạn ấy có thể __ không?",
    "options": [
      {
        "fill": [
          "swim"
        ],
        "mean": [
          "bơi"
        ]
      },
      {
        "fill": [
          "dance"
        ],
        "mean": [
          "nhảy"
        ]
      },
      {
        "fill": [
          "draw"
        ],
        "mean": [
          "vẽ"
        ]
      }
    ],
    "original": "Can he / she …? — No, he / she can't, but he / she can …",
    "answers": [
      {
        "label": "Yes",
        "en": "Yes, he can.",
        "vi": "Có, bạn ấy có thể __."
      },
      {
        "label": "No",
        "en": "No, he can't.",
        "vi": "Không, bạn ấy không thể __."
      }
    ]
  },
  "4:6:core:0": {
    "en": "Where's your school? — It's in the __.",
    "vi": "Trường bạn ở đâu? — Ở __.",
    "options": [
      {
        "fill": [
          "city"
        ],
        "mean": [
          "thành phố"
        ]
      },
      {
        "fill": [
          "countryside"
        ],
        "mean": [
          "nông thôn"
        ]
      },
      {
        "fill": [
          "town"
        ],
        "mean": [
          "thị trấn"
        ]
      }
    ],
    "original": "Where's your school? — It's in the …"
  },
  "4:6:core:1": {
    "en": "How many __ are there at your school? — There are __.",
    "vi": "Trường bạn có bao nhiêu __? — Có __.",
    "options": [
      {
        "fill": [
          "classrooms",
          "two"
        ],
        "mean": [
          "phòng học",
          "hai"
        ]
      },
      {
        "fill": [
          "computer rooms",
          "three"
        ],
        "mean": [
          "phòng máy tính",
          "ba"
        ]
      },
      {
        "fill": [
          "music rooms",
          "four"
        ],
        "mean": [
          "phòng âm nhạc",
          "bốn"
        ]
      },
      {
        "fill": [
          "classrooms",
          "five"
        ],
        "mean": [
          "phòng học",
          "năm"
        ]
      }
    ],
    "original": "How many … are there at your school? — There are …"
  },
  "4:7:core:0": {
    "en": "What subjects do you have today? — I have __.",
    "vi": "Hôm nay bạn học môn gì? — Mình học __.",
    "options": [
      {
        "fill": [
          "English"
        ],
        "mean": [
          "tiếng Anh"
        ]
      },
      {
        "fill": [
          "maths"
        ],
        "mean": [
          "toán"
        ]
      },
      {
        "fill": [
          "science"
        ],
        "mean": [
          "khoa học"
        ]
      },
      {
        "fill": [
          "art"
        ],
        "mean": [
          "mỹ thuật"
        ]
      },
      {
        "fill": [
          "music"
        ],
        "mean": [
          "âm nhạc"
        ]
      }
    ],
    "original": "What subjects do you have today? — I have …"
  },
  "4:7:core:1": {
    "en": "When do you have __? — I have it on __.",
    "vi": "Khi nào bạn học môn __? — Mình học vào __.",
    "options": [
      {
        "fill": [
          "English",
          "Monday"
        ],
        "mean": [
          "tiếng Anh",
          "thứ Hai"
        ]
      },
      {
        "fill": [
          "maths",
          "Tuesday"
        ],
        "mean": [
          "toán",
          "thứ Ba"
        ]
      },
      {
        "fill": [
          "science",
          "Wednesday"
        ],
        "mean": [
          "khoa học",
          "thứ Tư"
        ]
      },
      {
        "fill": [
          "art",
          "Thursday"
        ],
        "mean": [
          "mỹ thuật",
          "thứ Năm"
        ]
      },
      {
        "fill": [
          "music",
          "Friday"
        ],
        "mean": [
          "âm nhạc",
          "thứ Sáu"
        ]
      },
      {
        "fill": [
          "English",
          "Saturday"
        ],
        "mean": [
          "tiếng Anh",
          "thứ Bảy"
        ]
      },
      {
        "fill": [
          "maths",
          "Sunday"
        ],
        "mean": [
          "toán",
          "Chủ nhật"
        ]
      }
    ],
    "original": "When do you have …? — I have it on …"
  },
  "4:8:core:0": {
    "en": "What's your favourite subject? — It's __.",
    "vi": "Môn học yêu thích của bạn là gì? — Là __.",
    "options": [
      {
        "fill": [
          "English"
        ],
        "mean": [
          "tiếng Anh"
        ]
      },
      {
        "fill": [
          "maths"
        ],
        "mean": [
          "toán"
        ]
      },
      {
        "fill": [
          "science"
        ],
        "mean": [
          "khoa học"
        ]
      },
      {
        "fill": [
          "art"
        ],
        "mean": [
          "mỹ thuật"
        ]
      },
      {
        "fill": [
          "music"
        ],
        "mean": [
          "âm nhạc"
        ]
      }
    ],
    "original": "What's your favourite subject? — It's …"
  },
  "4:8:core:1": {
    "en": "Why do you like __? — Because I want to be a __.",
    "vi": "Tại sao bạn thích __? — Vì mình muốn trở thành __.",
    "options": [
      {
        "fill": [
          "science",
          "doctor"
        ],
        "mean": [
          "khoa học",
          "bác sĩ"
        ]
      },
      {
        "fill": [
          "English",
          "teacher"
        ],
        "mean": [
          "tiếng Anh",
          "giáo viên"
        ]
      },
      {
        "fill": [
          "music",
          "singer"
        ],
        "mean": [
          "âm nhạc",
          "ca sĩ"
        ]
      }
    ],
    "original": "Why do you like …? — Because I want to be a …"
  },
  "4:9:core:0": {
    "en": "Is your sports day in __?",
    "vi": "Ngày hội thể thao của bạn vào tháng __ phải không?",
    "options": [
      {
        "fill": [
          "January"
        ],
        "mean": [
          "Một"
        ]
      },
      {
        "fill": [
          "February"
        ],
        "mean": [
          "Hai"
        ]
      },
      {
        "fill": [
          "March"
        ],
        "mean": [
          "Ba"
        ]
      },
      {
        "fill": [
          "April"
        ],
        "mean": [
          "Tư"
        ]
      },
      {
        "fill": [
          "May"
        ],
        "mean": [
          "Năm"
        ]
      },
      {
        "fill": [
          "June"
        ],
        "mean": [
          "Sáu"
        ]
      },
      {
        "fill": [
          "July"
        ],
        "mean": [
          "Bảy"
        ]
      },
      {
        "fill": [
          "August"
        ],
        "mean": [
          "Tám"
        ]
      },
      {
        "fill": [
          "September"
        ],
        "mean": [
          "Chín"
        ]
      },
      {
        "fill": [
          "October"
        ],
        "mean": [
          "Mười"
        ]
      },
      {
        "fill": [
          "November"
        ],
        "mean": [
          "Mười Một"
        ]
      },
      {
        "fill": [
          "December"
        ],
        "mean": [
          "Mười Hai"
        ]
      }
    ],
    "original": "Is your sports day in …? — Yes, it is. / No, it isn't.",
    "answers": [
      {
        "label": "Yes",
        "en": "Yes, it is.",
        "vi": "Có, ngày hội thể thao vào tháng __."
      },
      {
        "label": "No",
        "en": "No, it isn't.",
        "vi": "Không, ngày hội thể thao không vào tháng __."
      }
    ]
  },
  "4:9:core:1": {
    "en": "When's your sports day? — It's in __.",
    "vi": "Ngày hội thể thao của bạn vào khi nào? — Vào tháng __.",
    "options": [
      {
        "fill": [
          "January"
        ],
        "mean": [
          "Một"
        ]
      },
      {
        "fill": [
          "February"
        ],
        "mean": [
          "Hai"
        ]
      },
      {
        "fill": [
          "March"
        ],
        "mean": [
          "Ba"
        ]
      },
      {
        "fill": [
          "April"
        ],
        "mean": [
          "Tư"
        ]
      },
      {
        "fill": [
          "May"
        ],
        "mean": [
          "Năm"
        ]
      },
      {
        "fill": [
          "June"
        ],
        "mean": [
          "Sáu"
        ]
      },
      {
        "fill": [
          "July"
        ],
        "mean": [
          "Bảy"
        ]
      },
      {
        "fill": [
          "August"
        ],
        "mean": [
          "Tám"
        ]
      },
      {
        "fill": [
          "September"
        ],
        "mean": [
          "Chín"
        ]
      },
      {
        "fill": [
          "October"
        ],
        "mean": [
          "Mười"
        ]
      },
      {
        "fill": [
          "November"
        ],
        "mean": [
          "Mười Một"
        ]
      },
      {
        "fill": [
          "December"
        ],
        "mean": [
          "Mười Hai"
        ]
      }
    ],
    "original": "When's your sports day? — It's in …"
  },
  "4:10:core:0": {
    "en": "Were you __ last weekend?",
    "vi": "Cuối tuần trước bạn có ở __ không?",
    "options": [
      {
        "fill": [
          "at home"
        ],
        "mean": [
          "nhà"
        ]
      },
      {
        "fill": [
          "at the zoo"
        ],
        "mean": [
          "sở thú"
        ]
      },
      {
        "fill": [
          "at the beach"
        ],
        "mean": [
          "bãi biển"
        ]
      }
    ],
    "original": "Were you … last weekend? — Yes, I was. / No, I wasn't.",
    "answers": [
      {
        "label": "Yes",
        "en": "Yes, I was.",
        "vi": "Có, cuối tuần trước mình đã ở __."
      },
      {
        "label": "No",
        "en": "No, I wasn't.",
        "vi": "Không, cuối tuần trước mình không ở __."
      }
    ]
  },
  "4:10:core:1": {
    "en": "Where were you last __? — I was __.",
    "vi": "__ trước bạn ở đâu? — Mình __.",
    "options": [
      {
        "fill": [
          "weekend",
          "at home"
        ],
        "mean": [
          "Cuối tuần",
          "ở nhà"
        ]
      },
      {
        "fill": [
          "summer",
          "at the beach"
        ],
        "mean": [
          "Mùa hè",
          "ở bãi biển"
        ]
      },
      {
        "fill": [
          "Sunday",
          "at the zoo"
        ],
        "mean": [
          "Chủ nhật",
          "ở sở thú"
        ]
      }
    ],
    "original": "Where were you last …? — I was …"
  },
  "4:11:core:0": {
    "en": "Where do you live? — I live __.",
    "vi": "Bạn sống ở đâu? — Mình sống __.",
    "options": [
      {
        "fill": [
          "in a village"
        ],
        "mean": [
          "ở một ngôi làng"
        ]
      },
      {
        "fill": [
          "in a city"
        ],
        "mean": [
          "ở một thành phố"
        ]
      },
      {
        "fill": [
          "in a town"
        ],
        "mean": [
          "ở một thị trấn"
        ]
      }
    ],
    "original": "Where do you live? — I live …"
  },
  "4:11:core:1": {
    "en": "What's the __ like? — It's __.",
    "vi": "__ như thế nào? — Nơi đó __.",
    "options": [
      {
        "fill": [
          "village",
          "quiet"
        ],
        "mean": [
          "Ngôi làng",
          "yên tĩnh"
        ]
      },
      {
        "fill": [
          "city",
          "busy"
        ],
        "mean": [
          "Thành phố",
          "nhộn nhịp"
        ]
      },
      {
        "fill": [
          "town",
          "beautiful"
        ],
        "mean": [
          "Thị trấn",
          "đẹp"
        ]
      }
    ],
    "original": "What's the … like? — It's …"
  },
  "4:12:core:0": {
    "en": "What does she do? — She's a __.",
    "vi": "Cô ấy làm nghề gì? — Cô ấy là __.",
    "options": [
      {
        "fill": [
          "doctor"
        ],
        "mean": [
          "bác sĩ"
        ]
      },
      {
        "fill": [
          "teacher"
        ],
        "mean": [
          "giáo viên"
        ]
      },
      {
        "fill": [
          "farmer"
        ],
        "mean": [
          "nông dân"
        ]
      },
      {
        "fill": [
          "nurse"
        ],
        "mean": [
          "y tá"
        ]
      },
      {
        "fill": [
          "driver"
        ],
        "mean": [
          "tài xế"
        ]
      },
      {
        "fill": [
          "worker"
        ],
        "mean": [
          "công nhân"
        ]
      }
    ],
    "original": "What does he / she do? — He's / She's a …"
  },
  "4:12:core:1": {
    "en": "Where does he work? — He works __.",
    "vi": "Anh ấy làm việc ở đâu? — Anh ấy làm việc __.",
    "options": [
      {
        "fill": [
          "in a hospital"
        ],
        "mean": [
          "ở bệnh viện"
        ]
      },
      {
        "fill": [
          "at a school"
        ],
        "mean": [
          "ở trường học"
        ]
      },
      {
        "fill": [
          "on a farm"
        ],
        "mean": [
          "ở nông trại"
        ]
      },
      {
        "fill": [
          "in a hospital"
        ],
        "mean": [
          "ở bệnh viện"
        ]
      },
      {
        "fill": [
          "in a taxi"
        ],
        "mean": [
          "trong xe taxi"
        ]
      },
      {
        "fill": [
          "in a factory"
        ],
        "mean": [
          "ở nhà máy"
        ]
      }
    ],
    "original": "Where does he / she work? — He / She works …"
  },
  "4:13:core:0": {
    "en": "What does she look like? — She's __.",
    "vi": "Cô ấy trông như thế nào? — Cô ấy __.",
    "options": [
      {
        "fill": [
          "tall"
        ],
        "mean": [
          "cao"
        ]
      },
      {
        "fill": [
          "short"
        ],
        "mean": [
          "thấp"
        ]
      },
      {
        "fill": [
          "slim"
        ],
        "mean": [
          "mảnh mai"
        ]
      }
    ],
    "original": "What does he / she look like? — He's / She's …"
  },
  "4:13:core:1": {
    "en": "She has __.",
    "vi": "Cô ấy có __.",
    "options": [
      {
        "fill": [
          "long hair"
        ],
        "mean": [
          "mái tóc dài"
        ]
      },
      {
        "fill": [
          "short hair"
        ],
        "mean": [
          "mái tóc ngắn"
        ]
      },
      {
        "fill": [
          "big eyes"
        ],
        "mean": [
          "đôi mắt to"
        ]
      }
    ],
    "original": "He / She has …"
  },
  "4:14:core:0": {
    "en": "When do you __? — I __ in the __.",
    "vi": "Bạn __ khi nào? — Mình __ vào buổi __.",
    "options": [
      {
        "fill": [
          "have breakfast",
          "have breakfast",
          "morning"
        ],
        "mean": [
          "ăn sáng",
          "ăn sáng",
          "sáng"
        ]
      },
      {
        "fill": [
          "do homework",
          "do homework",
          "afternoon"
        ],
        "mean": [
          "làm bài tập",
          "làm bài tập",
          "chiều"
        ]
      },
      {
        "fill": [
          "watch TV",
          "watch TV",
          "evening"
        ],
        "mean": [
          "xem ti vi",
          "xem ti vi",
          "tối"
        ]
      }
    ],
    "original": "When do you …? — I … in the …"
  },
  "4:14:core:1": {
    "en": "What do you do in the __? — I __.",
    "vi": "Bạn làm gì vào buổi __? — Mình __.",
    "options": [
      {
        "fill": [
          "morning",
          "have breakfast"
        ],
        "mean": [
          "sáng",
          "ăn sáng"
        ]
      },
      {
        "fill": [
          "afternoon",
          "play football"
        ],
        "mean": [
          "chiều",
          "chơi bóng đá"
        ]
      },
      {
        "fill": [
          "evening",
          "do homework"
        ],
        "mean": [
          "tối",
          "làm bài tập"
        ]
      }
    ],
    "original": "What do you do in the …? — I …"
  },
  "4:15:core:0": {
    "en": "Where does she go on __? — She goes to the __.",
    "vi": "Cô ấy đi đâu vào __? — Cô ấy đến __.",
    "options": [
      {
        "fill": [
          "Monday",
          "park"
        ],
        "mean": [
          "thứ Hai",
          "công viên"
        ]
      },
      {
        "fill": [
          "Tuesday",
          "library"
        ],
        "mean": [
          "thứ Ba",
          "thư viện"
        ]
      },
      {
        "fill": [
          "Wednesday",
          "cinema"
        ],
        "mean": [
          "thứ Tư",
          "rạp chiếu phim"
        ]
      },
      {
        "fill": [
          "Thursday",
          "swimming pool"
        ],
        "mean": [
          "thứ Năm",
          "bể bơi"
        ]
      },
      {
        "fill": [
          "Friday",
          "park"
        ],
        "mean": [
          "thứ Sáu",
          "công viên"
        ]
      },
      {
        "fill": [
          "Saturday",
          "library"
        ],
        "mean": [
          "thứ Bảy",
          "thư viện"
        ]
      },
      {
        "fill": [
          "Sunday",
          "cinema"
        ],
        "mean": [
          "Chủ nhật",
          "rạp chiếu phim"
        ]
      }
    ],
    "original": "Where does he / she go on …? — He / She goes to the …"
  },
  "4:15:core:1": {
    "en": "What does he do on __? — He __.",
    "vi": "Anh ấy làm gì vào __? — Anh ấy __.",
    "options": [
      {
        "fill": [
          "Monday",
          "plays football"
        ],
        "mean": [
          "thứ Hai",
          "chơi bóng đá"
        ]
      },
      {
        "fill": [
          "Tuesday",
          "reads books"
        ],
        "mean": [
          "thứ Ba",
          "đọc sách"
        ]
      },
      {
        "fill": [
          "Wednesday",
          "watches TV"
        ],
        "mean": [
          "thứ Tư",
          "xem ti vi"
        ]
      },
      {
        "fill": [
          "Thursday",
          "plays football"
        ],
        "mean": [
          "thứ Năm",
          "chơi bóng đá"
        ]
      },
      {
        "fill": [
          "Friday",
          "reads books"
        ],
        "mean": [
          "thứ Sáu",
          "đọc sách"
        ]
      },
      {
        "fill": [
          "Saturday",
          "watches TV"
        ],
        "mean": [
          "thứ Bảy",
          "xem ti vi"
        ]
      },
      {
        "fill": [
          "Sunday",
          "plays football"
        ],
        "mean": [
          "Chủ nhật",
          "chơi bóng đá"
        ]
      }
    ],
    "original": "What does he / she do on …? — He / She …"
  },
  "4:16:core:0": {
    "en": "What was the weather like last weekend? — It was __.",
    "vi": "Thời tiết cuối tuần trước thế nào? — Trời __.",
    "options": [
      {
        "fill": [
          "sunny"
        ],
        "mean": [
          "nắng"
        ]
      },
      {
        "fill": [
          "rainy"
        ],
        "mean": [
          "mưa"
        ]
      },
      {
        "fill": [
          "windy"
        ],
        "mean": [
          "gió"
        ]
      },
      {
        "fill": [
          "cloudy"
        ],
        "mean": [
          "nhiều mây"
        ]
      },
      {
        "fill": [
          "hot"
        ],
        "mean": [
          "nóng"
        ]
      },
      {
        "fill": [
          "cold"
        ],
        "mean": [
          "lạnh"
        ]
      }
    ],
    "original": "What was the weather like last weekend? — It was …"
  },
  "4:16:core:1": {
    "en": "Do you want to go to the __?",
    "vi": "Bạn muốn đến __ không?",
    "options": [
      {
        "fill": [
          "park"
        ],
        "mean": [
          "công viên"
        ]
      },
      {
        "fill": [
          "library"
        ],
        "mean": [
          "thư viện"
        ]
      },
      {
        "fill": [
          "cinema"
        ],
        "mean": [
          "rạp chiếu phim"
        ]
      },
      {
        "fill": [
          "swimming pool"
        ],
        "mean": [
          "bể bơi"
        ]
      }
    ],
    "original": "Do you want to go to the …? — Great! Let's go. / Sorry, I can't.",
    "answers": [
      {
        "label": "Yes",
        "en": "Yes, I do.",
        "vi": "Có, mình muốn đến __."
      },
      {
        "label": "No",
        "en": "No, I don't.",
        "vi": "Không, mình không muốn đến __."
      }
    ]
  },
  "4:17:core:0": {
    "en": "What does it say? — It says “__”.",
    "vi": "Biển báo ghi gì? — Biển báo ghi “__”.",
    "options": [
      {
        "fill": [
          "Stop"
        ],
        "mean": [
          "Dừng lại"
        ]
      },
      {
        "fill": [
          "Turn left"
        ],
        "mean": [
          "Rẽ trái"
        ]
      },
      {
        "fill": [
          "Turn right"
        ],
        "mean": [
          "Rẽ phải"
        ]
      },
      {
        "fill": [
          "Go straight"
        ],
        "mean": [
          "Đi thẳng"
        ]
      }
    ],
    "original": "What does it say? — It says “…”."
  },
  "4:17:core:1": {
    "en": "How can I get to the __? — Go straight.",
    "vi": "Mình đến __ bằng cách nào? — Đi thẳng.",
    "options": [
      {
        "fill": [
          "park"
        ],
        "mean": [
          "công viên"
        ]
      },
      {
        "fill": [
          "library"
        ],
        "mean": [
          "thư viện"
        ]
      },
      {
        "fill": [
          "cinema"
        ],
        "mean": [
          "rạp chiếu phim"
        ]
      },
      {
        "fill": [
          "swimming pool"
        ],
        "mean": [
          "bể bơi"
        ]
      }
    ],
    "original": "How can I get to the …? — Go straight. Turn left / right."
  },
  "4:18:core:0": {
    "en": "Where's the __? — It's __.",
    "vi": "__ ở đâu? — Nó __.",
    "options": [
      {
        "fill": [
          "bookshop",
          "near the cinema"
        ],
        "mean": [
          "Hiệu sách",
          "ở gần rạp chiếu phim"
        ]
      },
      {
        "fill": [
          "bakery",
          "opposite the park"
        ],
        "mean": [
          "Tiệm bánh",
          "ở đối diện công viên"
        ]
      },
      {
        "fill": [
          "supermarket",
          "next to the bank"
        ],
        "mean": [
          "Siêu thị",
          "ở cạnh ngân hàng"
        ]
      }
    ],
    "original": "Where's the …? — It's …"
  },
  "4:18:core:1": {
    "en": "How much is the __? — It's __ dong.",
    "vi": "__ giá bao nhiêu? — Giá __ đồng.",
    "options": [
      {
        "fill": [
          "shirt",
          "fifty thousand"
        ],
        "mean": [
          "Chiếc áo sơ mi",
          "năm mươi nghìn"
        ]
      },
      {
        "fill": [
          "skirt",
          "sixty thousand"
        ],
        "mean": [
          "Chiếc váy",
          "sáu mươi nghìn"
        ]
      },
      {
        "fill": [
          "hat",
          "thirty thousand"
        ],
        "mean": [
          "Chiếc mũ",
          "ba mươi nghìn"
        ]
      }
    ],
    "original": "How much is the …? — It's … dong."
  },
  "4:19:core:0": {
    "en": "What are these animals? — They're __.",
    "vi": "Đây là những con vật gì? — Chúng là __.",
    "options": [
      {
        "fill": [
          "tigers"
        ],
        "mean": [
          "hổ"
        ]
      },
      {
        "fill": [
          "monkeys"
        ],
        "mean": [
          "khỉ"
        ]
      },
      {
        "fill": [
          "elephants"
        ],
        "mean": [
          "voi"
        ]
      }
    ],
    "original": "What are these animals? — They're …"
  },
  "4:19:core:1": {
    "en": "Why do you like __? — Because they __.",
    "vi": "Tại sao bạn thích __? — Vì chúng __.",
    "options": [
      {
        "fill": [
          "monkeys",
          "swing well"
        ],
        "mean": [
          "khỉ",
          "đu giỏi"
        ]
      },
      {
        "fill": [
          "peacocks",
          "dance beautifully"
        ],
        "mean": [
          "công",
          "múa đẹp"
        ]
      },
      {
        "fill": [
          "horses",
          "run fast"
        ],
        "mean": [
          "ngựa",
          "chạy nhanh"
        ]
      }
    ],
    "original": "Why do you like …? — Because they …"
  },
  "4:20:core:0": {
    "en": "What's she doing? — She's __.",
    "vi": "Bạn ấy đang làm gì? — Bạn ấy đang __.",
    "options": [
      {
        "fill": [
          "putting up a tent"
        ],
        "mean": [
          "dựng lều"
        ]
      },
      {
        "fill": [
          "taking a photo"
        ],
        "mean": [
          "chụp ảnh"
        ]
      },
      {
        "fill": [
          "telling a story"
        ],
        "mean": [
          "kể chuyện"
        ]
      }
    ],
    "original": "What's he / she doing? — He's / She's …"
  },
  "4:20:core:1": {
    "en": "What are they doing? — They're __.",
    "vi": "Họ đang làm gì? — Họ đang __.",
    "options": [
      {
        "fill": [
          "building a campfire"
        ],
        "mean": [
          "đốt lửa trại"
        ]
      },
      {
        "fill": [
          "playing card games"
        ],
        "mean": [
          "chơi bài"
        ]
      },
      {
        "fill": [
          "singing songs"
        ],
        "mean": [
          "hát các bài hát"
        ]
      }
    ],
    "original": "What are they doing? — They're …"
  },
  "5:1:core:0": {
    "en": "Can you tell me about yourself? — I'm in __. I live in the __.",
    "vi": "Bạn giới thiệu bản thân được không? — Mình học __. Mình sống ở __.",
    "options": [
      {
        "fill": [
          "Class 5A",
          "city"
        ],
        "mean": [
          "lớp 5A",
          "thành phố"
        ]
      },
      {
        "fill": [
          "Class 5B",
          "countryside"
        ],
        "mean": [
          "lớp 5B",
          "nông thôn"
        ]
      },
      {
        "fill": [
          "Class 5C",
          "town"
        ],
        "mean": [
          "lớp 5C",
          "thị trấn"
        ]
      }
    ],
    "original": "Can you tell me about yourself? — I'm in … I live in the …"
  },
  "5:1:core:1": {
    "en": "What's your favourite __? — It's __.",
    "vi": "__ yêu thích của bạn là gì? — Là __.",
    "options": [
      {
        "fill": [
          "sport",
          "football"
        ],
        "mean": [
          "Môn thể thao",
          "bóng đá"
        ]
      },
      {
        "fill": [
          "food",
          "chicken"
        ],
        "mean": [
          "Món ăn",
          "thịt gà"
        ]
      },
      {
        "fill": [
          "colour",
          "blue"
        ],
        "mean": [
          "Màu sắc",
          "màu xanh dương"
        ]
      }
    ],
    "original": "What's your favourite …? — It's …"
  },
  "5:2:core:0": {
    "en": "Do you live in this __?",
    "vi": "Bạn sống trong __ này phải không?",
    "options": [
      {
        "fill": [
          "house"
        ],
        "mean": [
          "ngôi nhà"
        ]
      },
      {
        "fill": [
          "flat"
        ],
        "mean": [
          "căn hộ"
        ]
      },
      {
        "fill": [
          "building"
        ],
        "mean": [
          "tòa nhà"
        ]
      }
    ],
    "original": "Do you live in this / that …? — Yes, I do. / No, I don't.",
    "answers": [
      {
        "label": "Yes",
        "en": "Yes, I do.",
        "vi": "Có, mình sống trong __ này."
      },
      {
        "label": "No",
        "en": "No, I don't.",
        "vi": "Không, mình không sống trong __ này."
      }
    ]
  },
  "5:2:core:1": {
    "en": "What's your address? — It's __.",
    "vi": "Địa chỉ của bạn là gì? — Là __.",
    "options": [
      {
        "fill": [
          "12 Tran Hung Dao Street"
        ],
        "mean": [
          "số 12 phố Trần Hưng Đạo"
        ]
      },
      {
        "fill": [
          "25 Le Loi Street"
        ],
        "mean": [
          "số 25 phố Lê Lợi"
        ]
      },
      {
        "fill": [
          "18 Nguyen Du Street"
        ],
        "mean": [
          "số 18 phố Nguyễn Du"
        ]
      }
    ],
    "original": "What's your address? — It's …"
  },
  "5:3:core:0": {
    "en": "What nationality is she? — She's __.",
    "vi": "Bạn ấy mang quốc tịch gì? — Bạn ấy là người __.",
    "options": [
      {
        "fill": [
          "Vietnamese"
        ],
        "mean": [
          "Việt Nam"
        ]
      },
      {
        "fill": [
          "Japanese"
        ],
        "mean": [
          "Nhật Bản"
        ]
      },
      {
        "fill": [
          "Australian"
        ],
        "mean": [
          "Úc"
        ]
      },
      {
        "fill": [
          "British"
        ],
        "mean": [
          "Anh"
        ]
      }
    ],
    "original": "What nationality is he / she? — He's / She's …"
  },
  "5:3:core:1": {
    "en": "What's he like? — He's __.",
    "vi": "Tính cách bạn ấy thế nào? — Bạn ấy __.",
    "options": [
      {
        "fill": [
          "friendly"
        ],
        "mean": [
          "thân thiện"
        ]
      },
      {
        "fill": [
          "helpful"
        ],
        "mean": [
          "hay giúp đỡ"
        ]
      },
      {
        "fill": [
          "kind"
        ],
        "mean": [
          "tốt bụng"
        ]
      },
      {
        "fill": [
          "clever"
        ],
        "mean": [
          "thông minh"
        ]
      }
    ],
    "original": "What's he / she like? — He's / She's …"
  },
  "5:4:core:0": {
    "en": "What do you like doing in your free time? — I like __.",
    "vi": "Bạn thích làm gì lúc rảnh? — Mình thích __.",
    "options": [
      {
        "fill": [
          "singing"
        ],
        "mean": [
          "hát"
        ]
      },
      {
        "fill": [
          "dancing"
        ],
        "mean": [
          "nhảy"
        ]
      },
      {
        "fill": [
          "drawing"
        ],
        "mean": [
          "vẽ"
        ]
      },
      {
        "fill": [
          "swimming"
        ],
        "mean": [
          "bơi"
        ]
      },
      {
        "fill": [
          "cooking"
        ],
        "mean": [
          "nấu ăn"
        ]
      },
      {
        "fill": [
          "painting"
        ],
        "mean": [
          "tô màu"
        ]
      }
    ],
    "original": "What do you like doing in your free time? — I like …"
  },
  "5:4:core:1": {
    "en": "What do you do at the weekend? — I usually __.",
    "vi": "Bạn làm gì cuối tuần? — Mình thường __.",
    "options": [
      {
        "fill": [
          "play football"
        ],
        "mean": [
          "chơi bóng đá"
        ]
      },
      {
        "fill": [
          "play badminton"
        ],
        "mean": [
          "chơi cầu lông"
        ]
      },
      {
        "fill": [
          "play basketball"
        ],
        "mean": [
          "chơi bóng rổ"
        ]
      },
      {
        "fill": [
          "play table tennis"
        ],
        "mean": [
          "chơi bóng bàn"
        ]
      },
      {
        "fill": [
          "play chess"
        ],
        "mean": [
          "chơi cờ vua"
        ]
      }
    ],
    "original": "What do you do at the weekend? — I always / usually / often / sometimes …"
  },
  "5:5:core:0": {
    "en": "What would you like to be in the future? — I'd like to be a __.",
    "vi": "Bạn muốn làm nghề gì trong tương lai? — Mình muốn làm __.",
    "options": [
      {
        "fill": [
          "doctor"
        ],
        "mean": [
          "bác sĩ"
        ]
      },
      {
        "fill": [
          "teacher"
        ],
        "mean": [
          "giáo viên"
        ]
      },
      {
        "fill": [
          "farmer"
        ],
        "mean": [
          "nông dân"
        ]
      },
      {
        "fill": [
          "nurse"
        ],
        "mean": [
          "y tá"
        ]
      },
      {
        "fill": [
          "driver"
        ],
        "mean": [
          "tài xế"
        ]
      },
      {
        "fill": [
          "worker"
        ],
        "mean": [
          "công nhân"
        ]
      }
    ],
    "original": "What would you like to be in the future? — I'd like to be a …"
  },
  "5:5:core:1": {
    "en": "Why would you like to be a __? — Because I'd like to __.",
    "vi": "Tại sao bạn muốn làm __? — Vì mình muốn __.",
    "options": [
      {
        "fill": [
          "doctor",
          "help sick people"
        ],
        "mean": [
          "bác sĩ",
          "giúp người bệnh"
        ]
      },
      {
        "fill": [
          "teacher",
          "teach children"
        ],
        "mean": [
          "giáo viên",
          "dạy trẻ em"
        ]
      },
      {
        "fill": [
          "farmer",
          "grow vegetables"
        ],
        "mean": [
          "nông dân",
          "trồng rau"
        ]
      }
    ],
    "original": "Why would you like to be a …? — Because I'd like to …"
  },
  "5:6:core:0": {
    "en": "Where's the __? — It's on the __ floor.",
    "vi": "__ ở đâu? — Ở tầng __.",
    "options": [
      {
        "fill": [
          "music room",
          "first"
        ],
        "mean": [
          "Phòng âm nhạc",
          "1"
        ]
      },
      {
        "fill": [
          "computer room",
          "second"
        ],
        "mean": [
          "Phòng máy tính",
          "2"
        ]
      },
      {
        "fill": [
          "art room",
          "third"
        ],
        "mean": [
          "Phòng mỹ thuật",
          "3"
        ]
      }
    ],
    "original": "Where's the …? — It's on the … floor."
  },
  "5:6:core:1": {
    "en": "Could you tell me the way to the __, please? — Go __.",
    "vi": "Bạn chỉ giúp mình đường đến __ được không? — Đi __.",
    "options": [
      {
        "fill": [
          "library",
          "straight"
        ],
        "mean": [
          "thư viện",
          "thẳng"
        ]
      },
      {
        "fill": [
          "music room",
          "upstairs"
        ],
        "mean": [
          "phòng âm nhạc",
          "lên tầng"
        ]
      },
      {
        "fill": [
          "art room",
          "downstairs"
        ],
        "mean": [
          "phòng mỹ thuật",
          "xuống tầng"
        ]
      }
    ],
    "original": "Could you tell me the way to the …, please? — Go …"
  },
  "5:7:core:0": {
    "en": "What school activity does she like? — She likes __.",
    "vi": "Bạn ấy thích hoạt động nào ở trường? — Bạn ấy thích __.",
    "options": [
      {
        "fill": [
          "reading books"
        ],
        "mean": [
          "đọc sách"
        ]
      },
      {
        "fill": [
          "playing games"
        ],
        "mean": [
          "chơi trò chơi"
        ]
      },
      {
        "fill": [
          "doing projects"
        ],
        "mean": [
          "làm dự án"
        ]
      }
    ],
    "original": "What school activity does he / she like? — He / She likes …"
  },
  "5:7:core:1": {
    "en": "Why does he like __? — Because he thinks it's __.",
    "vi": "Tại sao bạn ấy thích __? — Vì bạn ấy nghĩ hoạt động đó __.",
    "options": [
      {
        "fill": [
          "reading books",
          "interesting"
        ],
        "mean": [
          "đọc sách",
          "thú vị"
        ]
      },
      {
        "fill": [
          "playing games",
          "fun"
        ],
        "mean": [
          "chơi trò chơi",
          "vui"
        ]
      },
      {
        "fill": [
          "doing projects",
          "useful"
        ],
        "mean": [
          "làm dự án",
          "hữu ích"
        ]
      }
    ],
    "original": "Why does he / she like …? — Because he / she thinks it's …"
  },
  "5:8:core:0": {
    "en": "Where are the __? — They're __.",
    "vi": "Những __ ở đâu? — Chúng __.",
    "options": [
      {
        "fill": [
          "books",
          "on the desk"
        ],
        "mean": [
          "quyển sách",
          "ở trên bàn"
        ]
      },
      {
        "fill": [
          "pencils",
          "in the box"
        ],
        "mean": [
          "bút chì",
          "ở trong hộp"
        ]
      },
      {
        "fill": [
          "bags",
          "under the table"
        ],
        "mean": [
          "chiếc cặp",
          "ở dưới bàn"
        ]
      }
    ],
    "original": "Where are the …? — They're …"
  },
  "5:8:core:1": {
    "en": "Whose __ is this? — It's __'s.",
    "vi": "Đây là __ của ai? — Là của __.",
    "options": [
      {
        "fill": [
          "book",
          "Mai"
        ],
        "mean": [
          "quyển sách",
          "Mai"
        ]
      },
      {
        "fill": [
          "pen",
          "Nam"
        ],
        "mean": [
          "bút mực",
          "Nam"
        ]
      },
      {
        "fill": [
          "bag",
          "Anna"
        ],
        "mean": [
          "chiếc cặp",
          "Anna"
        ]
      },
      {
        "fill": [
          "book",
          "Ben"
        ],
        "mean": [
          "quyển sách",
          "Ben"
        ]
      }
    ],
    "original": "Whose … is this? — It's …'s."
  },
  "5:9:core:0": {
    "en": "Were you at the __ yesterday?",
    "vi": "Hôm qua các bạn có ở __ không?",
    "options": [
      {
        "fill": [
          "zoo"
        ],
        "mean": [
          "sở thú"
        ]
      },
      {
        "fill": [
          "library"
        ],
        "mean": [
          "thư viện"
        ]
      },
      {
        "fill": [
          "park"
        ],
        "mean": [
          "công viên"
        ]
      }
    ],
    "original": "Were you at the … yesterday? — Yes, we were. / No, we weren't.",
    "answers": [
      {
        "label": "Yes",
        "en": "Yes, we were.",
        "vi": "Có, hôm qua chúng mình đã ở __."
      },
      {
        "label": "No",
        "en": "No, we weren't.",
        "vi": "Không, hôm qua chúng mình không ở __."
      }
    ]
  },
  "5:9:core:1": {
    "en": "What did you do at the __ yesterday? — We __.",
    "vi": "Hôm qua các bạn làm gì ở __? — Chúng mình đã __.",
    "options": [
      {
        "fill": [
          "zoo",
          "saw the animals"
        ],
        "mean": [
          "sở thú",
          "xem các con vật"
        ]
      },
      {
        "fill": [
          "library",
          "read books"
        ],
        "mean": [
          "thư viện",
          "đọc sách"
        ]
      },
      {
        "fill": [
          "park",
          "played football"
        ],
        "mean": [
          "công viên",
          "chơi bóng đá"
        ]
      }
    ],
    "original": "What did you do … yesterday? — We … (past tense)."
  },
  "5:10:core:0": {
    "en": "Did they go to __?",
    "vi": "Họ đã đến __ phải không?",
    "options": [
      {
        "fill": [
          "Ha Long Bay"
        ],
        "mean": [
          "Vịnh Hạ Long"
        ]
      },
      {
        "fill": [
          "Hoan Kiem Lake"
        ],
        "mean": [
          "Hồ Hoàn Kiếm"
        ]
      },
      {
        "fill": [
          "Ba Na Hills"
        ],
        "mean": [
          "Bà Nà Hills"
        ]
      }
    ],
    "original": "Did they go to …? — Yes, they did. / No, they didn't.",
    "answers": [
      {
        "label": "Yes",
        "en": "Yes, they did.",
        "vi": "Có, họ đã đến __."
      },
      {
        "label": "No",
        "en": "No, they didn't.",
        "vi": "Không, họ không đến __."
      }
    ]
  },
  "5:10:core:1": {
    "en": "What did they do there? — They __.",
    "vi": "Họ đã làm gì ở đó? — Họ đã __.",
    "options": [
      {
        "fill": [
          "took photos"
        ],
        "mean": [
          "chụp ảnh"
        ]
      },
      {
        "fill": [
          "played games"
        ],
        "mean": [
          "chơi trò chơi"
        ]
      },
      {
        "fill": [
          "visited a museum"
        ],
        "mean": [
          "tham quan bảo tàng"
        ]
      }
    ],
    "original": "What did they do there? — They … (past tense)."
  },
  "5:11:core:0": {
    "en": "Did you __?",
    "vi": "Bạn đã __ phải không?",
    "options": [
      {
        "fill": [
          "visit your grandparents"
        ],
        "mean": [
          "thăm ông bà"
        ]
      },
      {
        "fill": [
          "watch a film"
        ],
        "mean": [
          "xem phim"
        ]
      },
      {
        "fill": [
          "play chess"
        ],
        "mean": [
          "chơi cờ vua"
        ]
      }
    ],
    "original": "Did you …? — Yes, I did. / No, I didn't.",
    "answers": [
      {
        "label": "Yes",
        "en": "Yes, I did.",
        "vi": "Có, mình đã __."
      },
      {
        "label": "No",
        "en": "No, I didn't.",
        "vi": "Không, mình không __."
      }
    ]
  },
  "5:11:core:1": {
    "en": "What did your family do in __? — We __.",
    "vi": "Gia đình bạn đã làm gì ở __? — Chúng mình đã __.",
    "options": [
      {
        "fill": [
          "Ha Noi",
          "visited a museum"
        ],
        "mean": [
          "Hà Nội",
          "tham quan bảo tàng"
        ]
      },
      {
        "fill": [
          "Da Nang",
          "took photos"
        ],
        "mean": [
          "Đà Nẵng",
          "chụp ảnh"
        ]
      },
      {
        "fill": [
          "Hue",
          "visited a pagoda"
        ],
        "mean": [
          "Huế",
          "thăm chùa"
        ]
      }
    ],
    "original": "What did your family do in …? — We … (past tense)."
  },
  "5:12:core:0": {
    "en": "Will you __ for Tet?",
    "vi": "Bạn sẽ __ vào dịp Tết phải không?",
    "options": [
      {
        "fill": [
          "decorate the house"
        ],
        "mean": [
          "trang trí nhà"
        ]
      },
      {
        "fill": [
          "make banh chung"
        ],
        "mean": [
          "gói bánh chưng"
        ]
      },
      {
        "fill": [
          "buy flowers"
        ],
        "mean": [
          "mua hoa"
        ]
      }
    ],
    "original": "Will you … for Tet? — Yes, I will. / No, I won't.",
    "answers": [
      {
        "label": "Yes",
        "en": "Yes, I will.",
        "vi": "Có, mình sẽ __ vào dịp Tết."
      },
      {
        "label": "No",
        "en": "No, I won't.",
        "vi": "Không, mình sẽ không __ vào dịp Tết."
      }
    ]
  },
  "5:12:core:1": {
    "en": "Where will you go at Tet? — I'll go to __.",
    "vi": "Bạn sẽ đi đâu vào Tết? — Mình sẽ đến __.",
    "options": [
      {
        "fill": [
          "a flower festival"
        ],
        "mean": [
          "một lễ hội hoa"
        ]
      },
      {
        "fill": [
          "a New Year party"
        ],
        "mean": [
          "một bữa tiệc năm mới"
        ]
      },
      {
        "fill": [
          "my grandparents’ house"
        ],
        "mean": [
          "nhà ông bà"
        ]
      }
    ],
    "original": "Where will you go at Tet? — I'll go to …"
  },
  "5:13:core:0": {
    "en": "What will you do __? — We'll __.",
    "vi": "Các bạn sẽ làm gì __? — Chúng mình sẽ __.",
    "options": [
      {
        "fill": [
          "on Sports Day",
          "play sports"
        ],
        "mean": [
          "vào ngày hội thể thao",
          "chơi thể thao"
        ]
      },
      {
        "fill": [
          "on Teachers’ Day",
          "give flowers to our teachers"
        ],
        "mean": [
          "vào ngày Nhà giáo Việt Nam",
          "tặng hoa cho thầy cô"
        ]
      },
      {
        "fill": [
          "at Mid-Autumn Festival",
          "eat mooncakes"
        ],
        "mean": [
          "vào Tết Trung thu",
          "ăn bánh trung thu"
        ]
      }
    ],
    "original": "What will you do …? — We'll …"
  },
  "5:13:core:1": {
    "en": "What drinks will you have at the party? — We'll have __.",
    "vi": "Các bạn sẽ uống gì ở bữa tiệc? — Chúng mình sẽ uống __.",
    "options": [
      {
        "fill": [
          "water"
        ],
        "mean": [
          "nước"
        ]
      },
      {
        "fill": [
          "milk"
        ],
        "mean": [
          "sữa"
        ]
      },
      {
        "fill": [
          "orange juice"
        ],
        "mean": [
          "nước cam"
        ]
      },
      {
        "fill": [
          "lemonade"
        ],
        "mean": [
          "nước chanh"
        ]
      }
    ],
    "original": "What food / drinks will you have at the party? — We'll have …"
  },
  "5:14:core:0": {
    "en": "How does she stay healthy? — She __.",
    "vi": "Cô ấy giữ sức khỏe bằng cách nào? — Cô ấy __.",
    "options": [
      {
        "fill": [
          "does yoga"
        ],
        "mean": [
          "tập yoga"
        ]
      },
      {
        "fill": [
          "eats vegetables"
        ],
        "mean": [
          "ăn rau"
        ]
      },
      {
        "fill": [
          "drinks water"
        ],
        "mean": [
          "uống nước"
        ]
      }
    ],
    "original": "How does he / she stay healthy? — He / She …"
  },
  "5:14:core:1": {
    "en": "How often does he __? — He __ every day.",
    "vi": "Anh ấy __ thường xuyên thế nào? — Anh ấy __ mỗi ngày.",
    "options": [
      {
        "fill": [
          "play sports",
          "plays sports"
        ],
        "mean": [
          "chơi thể thao",
          "chơi thể thao"
        ]
      },
      {
        "fill": [
          "do yoga",
          "does yoga"
        ],
        "mean": [
          "tập yoga",
          "tập yoga"
        ]
      },
      {
        "fill": [
          "eat vegetables",
          "eats vegetables"
        ],
        "mean": [
          "ăn rau",
          "ăn rau"
        ]
      }
    ],
    "original": "How often does he / she …? — … every day / once a week / twice a week."
  },
  "5:15:core:0": {
    "en": "What's the matter? — I have a __.",
    "vi": "Bạn bị làm sao? — Mình bị __.",
    "options": [
      {
        "fill": [
          "headache"
        ],
        "mean": [
          "đau đầu"
        ]
      },
      {
        "fill": [
          "toothache"
        ],
        "mean": [
          "đau răng"
        ]
      },
      {
        "fill": [
          "sore throat"
        ],
        "mean": [
          "đau họng"
        ]
      }
    ],
    "original": "What's the matter? — I have a …"
  },
  "5:15:core:1": {
    "en": "You should __.",
    "vi": "Bạn nên __.",
    "options": [
      {
        "fill": [
          "have a rest"
        ],
        "mean": [
          "nghỉ ngơi"
        ]
      },
      {
        "fill": [
          "drink warm water"
        ],
        "mean": [
          "uống nước ấm"
        ]
      },
      {
        "fill": [
          "go to the doctor"
        ],
        "mean": [
          "đi khám bác sĩ"
        ]
      }
    ],
    "original": "You should …"
  },
  "5:16:core:0": {
    "en": "How's the weather in __ in __? — It's __.",
    "vi": "Thời tiết ở __ vào mùa __ thế nào? — Trời __.",
    "options": [
      {
        "fill": [
          "Ha Noi",
          "summer",
          "hot"
        ],
        "mean": [
          "Hà Nội",
          "hè",
          "nóng"
        ]
      },
      {
        "fill": [
          "Ha Noi",
          "winter",
          "cold"
        ],
        "mean": [
          "Hà Nội",
          "đông",
          "lạnh"
        ]
      },
      {
        "fill": [
          "Ha Noi",
          "autumn",
          "cool"
        ],
        "mean": [
          "Hà Nội",
          "thu",
          "mát"
        ]
      }
    ],
    "original": "How's the weather in … in …? — It's …"
  },
  "5:16:core:1": {
    "en": "What do you usually wear in __? — I wear __.",
    "vi": "Bạn thường mặc gì vào mùa __? — Mình mặc __.",
    "options": [
      {
        "fill": [
          "summer",
          "a T-shirt"
        ],
        "mean": [
          "hè",
          "áo phông"
        ]
      },
      {
        "fill": [
          "winter",
          "a jumper"
        ],
        "mean": [
          "đông",
          "áo len"
        ]
      },
      {
        "fill": [
          "autumn",
          "jeans"
        ],
        "mean": [
          "thu",
          "quần bò"
        ]
      }
    ],
    "original": "What do you usually wear in …? — I wear …"
  },
  "5:17:core:0": {
    "en": "Who are the main characters in the story? — They're __.",
    "vi": "Nhân vật chính trong truyện là ai? — Là __.",
    "options": [
      {
        "fill": [
          "the hare and the tortoise"
        ],
        "mean": [
          "thỏ và rùa"
        ]
      },
      {
        "fill": [
          "Snow White and the seven dwarfs"
        ],
        "mean": [
          "Bạch Tuyết và bảy chú lùn"
        ]
      },
      {
        "fill": [
          "the ant and the grasshopper"
        ],
        "mean": [
          "kiến và châu chấu"
        ]
      }
    ],
    "original": "Who are the main characters in the story? — They're …"
  },
  "5:17:core:1": {
    "en": "How did the __ __? — It __.",
    "vi": "Con __ đã __ như thế nào? — Nó đã __.",
    "options": [
      {
        "fill": [
          "hare",
          "run",
          "ran fast"
        ],
        "mean": [
          "thỏ",
          "chạy",
          "chạy nhanh"
        ]
      },
      {
        "fill": [
          "crow",
          "sing",
          "sang beautifully"
        ],
        "mean": [
          "quạ",
          "hát",
          "hót hay"
        ]
      },
      {
        "fill": [
          "ant",
          "work",
          "worked hard"
        ],
        "mean": [
          "kiến",
          "làm việc",
          "làm việc chăm chỉ"
        ]
      }
    ],
    "original": "How did …? — He / She … (past tense + adverb)."
  },
  "5:18:core:0": {
    "en": "Where do you want to visit? — I want to visit __.",
    "vi": "Bạn muốn tham quan đâu? — Mình muốn tham quan __.",
    "options": [
      {
        "fill": [
          "Dragon Bridge"
        ],
        "mean": [
          "Cầu Rồng"
        ]
      },
      {
        "fill": [
          "Ha Noi Opera House"
        ],
        "mean": [
          "Nhà hát Lớn Hà Nội"
        ]
      },
      {
        "fill": [
          "Ho Chi Minh City Museum"
        ],
        "mean": [
          "Bảo tàng Thành phố Hồ Chí Minh"
        ]
      }
    ],
    "original": "Where do you want to visit? — I want to visit …"
  },
  "5:18:core:1": {
    "en": "How can I get to __? — You can get there __.",
    "vi": "Mình đến __ bằng cách nào? — Bạn có thể đến đó __.",
    "options": [
      {
        "fill": [
          "Dragon Bridge",
          "by bicycle"
        ],
        "mean": [
          "Cầu Rồng",
          "bằng xe đạp"
        ]
      },
      {
        "fill": [
          "Ha Noi Opera House",
          "by bus"
        ],
        "mean": [
          "Nhà hát Lớn Hà Nội",
          "bằng xe buýt"
        ]
      },
      {
        "fill": [
          "Ho Chi Minh City Museum",
          "by taxi"
        ],
        "mean": [
          "Bảo tàng Thành phố Hồ Chí Minh",
          "bằng taxi"
        ]
      }
    ],
    "original": "How can I get to …? — You can get there by … / on foot."
  },
  "5:19:core:0": {
    "en": "What do you think of __? — I think it's __.",
    "vi": "Bạn nghĩ gì về __? — Mình nghĩ nơi đó __.",
    "options": [
      {
        "fill": [
          "this village",
          "peaceful"
        ],
        "mean": [
          "ngôi làng này",
          "yên bình"
        ]
      },
      {
        "fill": [
          "this city",
          "exciting"
        ],
        "mean": [
          "thành phố này",
          "thú vị"
        ]
      },
      {
        "fill": [
          "this park",
          "beautiful"
        ],
        "mean": [
          "công viên này",
          "đẹp"
        ]
      }
    ],
    "original": "What do you think of …? — I think it's / they're …"
  },
  "5:19:core:1": {
    "en": "How far is it from __ to __? — It's about __ kilometres.",
    "vi": "Từ __ đến __ bao xa? — Khoảng __ ki-lô-mét.",
    "options": [
      {
        "fill": [
          "your house",
          "the park",
          "two"
        ],
        "mean": [
          "nhà bạn",
          "công viên",
          "hai"
        ]
      },
      {
        "fill": [
          "your school",
          "the museum",
          "three"
        ],
        "mean": [
          "trường bạn",
          "bảo tàng",
          "ba"
        ]
      },
      {
        "fill": [
          "the park",
          "the zoo",
          "five"
        ],
        "mean": [
          "công viên",
          "sở thú",
          "năm"
        ]
      }
    ],
    "original": "How far is it from … to …? — It's about … kilometres."
  },
  "5:20:core:0": {
    "en": "Where are you going to visit this summer? — I'm going to visit __.",
    "vi": "Hè này bạn dự định tham quan đâu? — Mình dự định tham quan __.",
    "options": [
      {
        "fill": [
          "Phu Quoc Island"
        ],
        "mean": [
          "đảo Phú Quốc"
        ]
      },
      {
        "fill": [
          "Phong Nha Cave"
        ],
        "mean": [
          "động Phong Nha"
        ]
      },
      {
        "fill": [
          "Huong River"
        ],
        "mean": [
          "sông Hương"
        ]
      }
    ],
    "original": "Where are you going to visit this summer? — I'm going to visit …"
  },
  "5:20:core:1": {
    "en": "What are you going to do this summer? — I'm going to __.",
    "vi": "Hè này bạn dự định làm gì? — Mình dự định __.",
    "options": [
      {
        "fill": [
          "go camping"
        ],
        "mean": [
          "đi cắm trại"
        ]
      },
      {
        "fill": [
          "join a music club"
        ],
        "mean": [
          "tham gia câu lạc bộ âm nhạc"
        ]
      },
      {
        "fill": [
          "visit an eco-farm"
        ],
        "mean": [
          "thăm trang trại sinh thái"
        ]
      }
    ],
    "original": "What are you going to do this summer? — I'm going to …"
  },
  "1:1:ext:0": {
    "en": "I can see a __.",
    "vi": "Em nhìn thấy một __.",
    "options": [
      {
        "fill": [
          "swing"
        ],
        "mean": [
          "chiếc xích đu"
        ]
      },
      {
        "fill": [
          "slide"
        ],
        "mean": [
          "cầu trượt"
        ]
      },
      {
        "fill": [
          "seesaw"
        ],
        "mean": [
          "bập bênh"
        ]
      },
      {
        "fill": [
          "bench"
        ],
        "mean": [
          "ghế dài"
        ]
      }
    ],
    "original": "I can see a ________."
  },
  "1:2:ext:0": {
    "en": "This is a __.",
    "vi": "Đây là một __.",
    "options": [
      {
        "fill": [
          "plate"
        ],
        "mean": [
          "cái đĩa"
        ]
      },
      {
        "fill": [
          "spoon"
        ],
        "mean": [
          "cái thìa"
        ]
      },
      {
        "fill": [
          "fork"
        ],
        "mean": [
          "cái dĩa"
        ]
      },
      {
        "fill": [
          "bowl"
        ],
        "mean": [
          "cái bát"
        ]
      }
    ],
    "original": "This is a ________."
  },
  "1:3:ext:0": {
    "en": "I like __.",
    "vi": "Em thích __.",
    "options": [
      {
        "fill": [
          "bananas"
        ],
        "mean": [
          "chuối"
        ]
      },
      {
        "fill": [
          "oranges"
        ],
        "mean": [
          "cam"
        ]
      },
      {
        "fill": [
          "pears"
        ],
        "mean": [
          "lê"
        ]
      },
      {
        "fill": [
          "grapes"
        ],
        "mean": [
          "nho"
        ]
      }
    ],
    "original": "I like ________."
  },
  "1:4:ext:0": {
    "en": "This is my __.",
    "vi": "Đây là __ của em.",
    "options": [
      {
        "fill": [
          "bed"
        ],
        "mean": [
          "giường"
        ]
      },
      {
        "fill": [
          "pillow"
        ],
        "mean": [
          "gối"
        ]
      },
      {
        "fill": [
          "blanket"
        ],
        "mean": [
          "chăn"
        ]
      },
      {
        "fill": [
          "lamp"
        ],
        "mean": [
          "đèn"
        ]
      }
    ],
    "original": "This is my ________."
  },
  "1:5:ext:0": {
    "en": "I like __.",
    "vi": "Em thích __.",
    "options": [
      {
        "fill": [
          "bread"
        ],
        "mean": [
          "bánh mì"
        ]
      },
      {
        "fill": [
          "rice"
        ],
        "mean": [
          "cơm"
        ]
      },
      {
        "fill": [
          "eggs"
        ],
        "mean": [
          "trứng"
        ]
      }
    ],
    "original": "I like ________."
  },
  "1:6:ext:0": {
    "en": "I have a __.",
    "vi": "Em có một __.",
    "options": [
      {
        "fill": [
          "pen"
        ],
        "mean": [
          "bút mực"
        ]
      },
      {
        "fill": [
          "pencil"
        ],
        "mean": [
          "bút chì"
        ]
      },
      {
        "fill": [
          "ruler"
        ],
        "mean": [
          "thước kẻ"
        ]
      },
      {
        "fill": [
          "notebook"
        ],
        "mean": [
          "quyển vở"
        ]
      },
      {
        "fill": [
          "school bag"
        ],
        "mean": [
          "cặp sách"
        ]
      }
    ],
    "original": "I have a ________."
  },
  "1:7:ext:0": {
    "en": "I can see a __.",
    "vi": "Em nhìn thấy một __.",
    "options": [
      {
        "fill": [
          "flower"
        ],
        "mean": [
          "bông hoa"
        ]
      },
      {
        "fill": [
          "tree"
        ],
        "mean": [
          "cây"
        ]
      },
      {
        "fill": [
          "butterfly"
        ],
        "mean": [
          "con bướm"
        ]
      }
    ],
    "original": "I can see a ________."
  },
  "1:8:ext:0": {
    "en": "Touch your __.",
    "vi": "Chạm vào __ của em.",
    "options": [
      {
        "fill": [
          "arm"
        ],
        "mean": [
          "cánh tay"
        ]
      },
      {
        "fill": [
          "leg"
        ],
        "mean": [
          "chân"
        ]
      },
      {
        "fill": [
          "eye"
        ],
        "mean": [
          "mắt"
        ]
      },
      {
        "fill": [
          "ear"
        ],
        "mean": [
          "tai"
        ]
      }
    ],
    "original": "Touch your ________."
  },
  "1:9:ext:0": {
    "en": "This is a __.",
    "vi": "Đây là một __.",
    "options": [
      {
        "fill": [
          "basket"
        ],
        "mean": [
          "cái giỏ"
        ]
      },
      {
        "fill": [
          "bottle"
        ],
        "mean": [
          "cái chai"
        ]
      },
      {
        "fill": [
          "ball"
        ],
        "mean": [
          "quả bóng"
        ]
      }
    ],
    "original": "This is a ________."
  },
  "1:10:ext:0": {
    "en": "Look at the __.",
    "vi": "Hãy nhìn __.",
    "options": [
      {
        "fill": [
          "taxi"
        ],
        "mean": [
          "xe taxi"
        ]
      },
      {
        "fill": [
          "motorbike"
        ],
        "mean": [
          "xe máy"
        ]
      },
      {
        "fill": [
          "boat"
        ],
        "mean": [
          "con thuyền"
        ]
      }
    ],
    "original": "Look at the ________."
  },
  "1:11:ext:0": {
    "en": "I can see a __.",
    "vi": "Em nhìn thấy một __.",
    "options": [
      {
        "fill": [
          "frog"
        ],
        "mean": [
          "con ếch"
        ]
      },
      {
        "fill": [
          "duck"
        ],
        "mean": [
          "con vịt"
        ]
      },
      {
        "fill": [
          "fish"
        ],
        "mean": [
          "con cá"
        ]
      }
    ],
    "original": "I can see a ________."
  },
  "1:12:ext:0": {
    "en": "I can see a __.",
    "vi": "Em nhìn thấy một __.",
    "options": [
      {
        "fill": [
          "leaf"
        ],
        "mean": [
          "chiếc lá"
        ]
      },
      {
        "fill": [
          "tree"
        ],
        "mean": [
          "cây"
        ]
      },
      {
        "fill": [
          "flower"
        ],
        "mean": [
          "bông hoa"
        ]
      }
    ],
    "original": "I can see a ________."
  },
  "1:13:ext:0": {
    "en": "I like __.",
    "vi": "Em thích __.",
    "options": [
      {
        "fill": [
          "soup"
        ],
        "mean": [
          "súp"
        ]
      },
      {
        "fill": [
          "rice"
        ],
        "mean": [
          "cơm"
        ]
      },
      {
        "fill": [
          "bread"
        ],
        "mean": [
          "bánh mì"
        ]
      }
    ],
    "original": "I like ________."
  },
  "1:14:ext:0": {
    "en": "I have a __.",
    "vi": "Em có một __.",
    "options": [
      {
        "fill": [
          "doll"
        ],
        "mean": [
          "búp bê"
        ]
      },
      {
        "fill": [
          "robot"
        ],
        "mean": [
          "rô-bốt"
        ]
      },
      {
        "fill": [
          "puzzle"
        ],
        "mean": [
          "bộ xếp hình"
        ]
      },
      {
        "fill": [
          "toy car"
        ],
        "mean": [
          "ô tô đồ chơi"
        ]
      }
    ],
    "original": "I have a ________."
  },
  "1:15:ext:0": {
    "en": "I can __.",
    "vi": "Em có thể __.",
    "options": [
      {
        "fill": [
          "kick a ball"
        ],
        "mean": [
          "đá bóng"
        ]
      },
      {
        "fill": [
          "catch a ball"
        ],
        "mean": [
          "bắt bóng"
        ]
      },
      {
        "fill": [
          "jump"
        ],
        "mean": [
          "nhảy"
        ]
      }
    ],
    "original": "I can ________."
  },
  "1:16:ext:0": {
    "en": "This is a __.",
    "vi": "Đây là một __.",
    "options": [
      {
        "fill": [
          "sofa"
        ],
        "mean": [
          "ghế sô pha"
        ]
      },
      {
        "fill": [
          "television"
        ],
        "mean": [
          "ti vi"
        ]
      },
      {
        "fill": [
          "lamp"
        ],
        "mean": [
          "đèn"
        ]
      }
    ],
    "original": "This is a ________."
  },
  "2:1:ext:0": {
    "en": "I can see a __.",
    "vi": "Em nhìn thấy một __.",
    "options": [
      {
        "fill": [
          "balloon"
        ],
        "mean": [
          "quả bóng bay"
        ]
      },
      {
        "fill": [
          "candle"
        ],
        "mean": [
          "cây nến"
        ]
      },
      {
        "fill": [
          "present"
        ],
        "mean": [
          "món quà"
        ]
      },
      {
        "fill": [
          "birthday card"
        ],
        "mean": [
          "thiệp sinh nhật"
        ]
      }
    ],
    "original": "I can see a ________."
  },
  "2:2:ext:0": {
    "en": "I can __.",
    "vi": "Em có thể __.",
    "options": [
      {
        "fill": [
          "fly a kite"
        ],
        "mean": [
          "thả diều"
        ]
      },
      {
        "fill": [
          "ride a bike"
        ],
        "mean": [
          "đạp xe"
        ]
      },
      {
        "fill": [
          "play football"
        ],
        "mean": [
          "chơi bóng đá"
        ]
      }
    ],
    "original": "I can ________."
  },
  "2:3:ext:0": {
    "en": "I can see a __.",
    "vi": "Em nhìn thấy một __.",
    "options": [
      {
        "fill": [
          "shell"
        ],
        "mean": [
          "vỏ sò"
        ]
      },
      {
        "fill": [
          "boat"
        ],
        "mean": [
          "con thuyền"
        ]
      },
      {
        "fill": [
          "sandcastle"
        ],
        "mean": [
          "lâu đài cát"
        ]
      }
    ],
    "original": "I can see a ________."
  },
  "2:4:ext:0": {
    "en": "I can see a __.",
    "vi": "Em nhìn thấy một __.",
    "options": [
      {
        "fill": [
          "box"
        ],
        "mean": [
          "cái hộp"
        ]
      },
      {
        "fill": [
          "fox"
        ],
        "mean": [
          "con cáo"
        ]
      },
      {
        "fill": [
          "wax candle"
        ],
        "mean": [
          "cây nến sáp"
        ]
      }
    ],
    "original": "I can see a ________."
  },
  "2:5:ext:0": {
    "en": "Draw a __.",
    "vi": "Hãy vẽ một __.",
    "options": [
      {
        "fill": [
          "circle"
        ],
        "mean": [
          "hình tròn"
        ]
      },
      {
        "fill": [
          "triangle"
        ],
        "mean": [
          "hình tam giác"
        ]
      },
      {
        "fill": [
          "rectangle"
        ],
        "mean": [
          "hình chữ nhật"
        ]
      },
      {
        "fill": [
          "square"
        ],
        "mean": [
          "hình vuông"
        ]
      }
    ],
    "original": "Draw a ________."
  },
  "2:6:ext:0": {
    "en": "There is a __.",
    "vi": "Có một __.",
    "options": [
      {
        "fill": [
          "river"
        ],
        "mean": [
          "dòng sông"
        ]
      },
      {
        "fill": [
          "road"
        ],
        "mean": [
          "con đường"
        ]
      },
      {
        "fill": [
          "bridge"
        ],
        "mean": [
          "cây cầu"
        ]
      }
    ],
    "original": "There is a ________."
  },
  "2:7:ext:0": {
    "en": "Where is the __?",
    "vi": "__ ở đâu?",
    "options": [
      {
        "fill": [
          "spoon"
        ],
        "mean": [
          "Cái thìa"
        ]
      },
      {
        "fill": [
          "plate"
        ],
        "mean": [
          "Cái đĩa"
        ]
      },
      {
        "fill": [
          "bowl"
        ],
        "mean": [
          "Cái bát"
        ]
      }
    ],
    "original": "Where is the ________?"
  },
  "2:8:ext:0": {
    "en": "There is a __.",
    "vi": "Có một __.",
    "options": [
      {
        "fill": [
          "village"
        ],
        "mean": [
          "ngôi làng"
        ]
      },
      {
        "fill": [
          "farm"
        ],
        "mean": [
          "nông trại"
        ]
      },
      {
        "fill": [
          "field"
        ],
        "mean": [
          "cánh đồng"
        ]
      }
    ],
    "original": "There is a ________."
  },
  "2:9:ext:0": {
    "en": "I want some __.",
    "vi": "Em muốn một ít __.",
    "options": [
      {
        "fill": [
          "yogurt"
        ],
        "mean": [
          "sữa chua"
        ]
      },
      {
        "fill": [
          "water"
        ],
        "mean": [
          "nước"
        ]
      },
      {
        "fill": [
          "milk"
        ],
        "mean": [
          "sữa"
        ]
      }
    ],
    "original": "I want some ________."
  },
  "2:10:ext:0": {
    "en": "Look at the __.",
    "vi": "Hãy nhìn __.",
    "options": [
      {
        "fill": [
          "giraffe"
        ],
        "mean": [
          "con hươu cao cổ"
        ]
      },
      {
        "fill": [
          "elephant"
        ],
        "mean": [
          "con voi"
        ]
      },
      {
        "fill": [
          "monkey"
        ],
        "mean": [
          "con khỉ"
        ]
      }
    ],
    "original": "Look at the ________."
  },
  "2:11:ext:0": {
    "en": "He is __.",
    "vi": "Bạn ấy đang __.",
    "options": [
      {
        "fill": [
          "walking"
        ],
        "mean": [
          "đi bộ"
        ]
      },
      {
        "fill": [
          "running"
        ],
        "mean": [
          "chạy"
        ]
      },
      {
        "fill": [
          "jumping"
        ],
        "mean": [
          "nhảy"
        ]
      }
    ],
    "original": "He is ________."
  },
  "2:12:ext:0": {
    "en": "Where is the __?",
    "vi": "__ ở đâu?",
    "options": [
      {
        "fill": [
          "cup"
        ],
        "mean": [
          "Chiếc cốc"
        ]
      },
      {
        "fill": [
          "plate"
        ],
        "mean": [
          "Cái đĩa"
        ]
      },
      {
        "fill": [
          "spoon"
        ],
        "mean": [
          "Cái thìa"
        ]
      }
    ],
    "original": "Where is the ________?"
  },
  "2:13:ext:0": {
    "en": "I can count to __.",
    "vi": "Em có thể đếm đến __.",
    "options": [
      {
        "fill": [
          "sixteen"
        ],
        "mean": [
          "mười sáu"
        ]
      },
      {
        "fill": [
          "seventeen"
        ],
        "mean": [
          "mười bảy"
        ]
      },
      {
        "fill": [
          "eighteen"
        ],
        "mean": [
          "mười tám"
        ]
      },
      {
        "fill": [
          "nineteen"
        ],
        "mean": [
          "mười chín"
        ]
      },
      {
        "fill": [
          "twenty"
        ],
        "mean": [
          "hai mươi"
        ]
      }
    ],
    "original": "I can count to ________."
  },
  "2:14:ext:0": {
    "en": "This is my __.",
    "vi": "Đây là __ của em.",
    "options": [
      {
        "fill": [
          "father"
        ],
        "mean": [
          "bố"
        ]
      },
      {
        "fill": [
          "mother"
        ],
        "mean": [
          "mẹ"
        ]
      },
      {
        "fill": [
          "brother"
        ],
        "mean": [
          "anh trai"
        ]
      },
      {
        "fill": [
          "sister"
        ],
        "mean": [
          "chị gái"
        ]
      },
      {
        "fill": [
          "grandfather"
        ],
        "mean": [
          "ông"
        ]
      },
      {
        "fill": [
          "grandmother"
        ],
        "mean": [
          "bà"
        ]
      }
    ],
    "original": "This is my ________."
  },
  "2:15:ext:0": {
    "en": "I want __.",
    "vi": "Em muốn __.",
    "options": [
      {
        "fill": [
          "a shirt"
        ],
        "mean": [
          "một chiếc áo sơ mi"
        ]
      },
      {
        "fill": [
          "a skirt"
        ],
        "mean": [
          "một chiếc váy"
        ]
      },
      {
        "fill": [
          "some shoes"
        ],
        "mean": [
          "một ít giày"
        ]
      }
    ],
    "original": "I want ________."
  },
  "2:16:ext:0": {
    "en": "I have a __.",
    "vi": "Em có một __.",
    "options": [
      {
        "fill": [
          "tent"
        ],
        "mean": [
          "cái lều"
        ]
      },
      {
        "fill": [
          "torch"
        ],
        "mean": [
          "đèn pin"
        ]
      },
      {
        "fill": [
          "blanket"
        ],
        "mean": [
          "cái chăn"
        ]
      }
    ],
    "original": "I have a ________."
  },
  "3:1:ext:0": {
    "en": "Good __!",
    "vi": "Chào buổi __!",
    "options": [
      {
        "fill": [
          "morning"
        ],
        "mean": [
          "sáng"
        ]
      },
      {
        "fill": [
          "afternoon"
        ],
        "mean": [
          "chiều"
        ]
      },
      {
        "fill": [
          "evening"
        ],
        "mean": [
          "tối"
        ]
      }
    ],
    "original": "Good ________!"
  },
  "3:2:ext:0": {
    "en": "My nickname is __.",
    "vi": "Biệt danh của em là __.",
    "options": [
      {
        "fill": [
          "Sunny"
        ],
        "mean": [
          "Sunny"
        ]
      },
      {
        "fill": [
          "Bunny"
        ],
        "mean": [
          "Bunny"
        ]
      },
      {
        "fill": [
          "Tom"
        ],
        "mean": [
          "Tom"
        ]
      }
    ],
    "original": "My nickname is ________."
  },
  "3:3:ext:0": {
    "en": "My friend is __.",
    "vi": "Bạn của em __.",
    "options": [
      {
        "fill": [
          "friendly"
        ],
        "mean": [
          "thân thiện"
        ]
      },
      {
        "fill": [
          "helpful"
        ],
        "mean": [
          "hay giúp đỡ"
        ]
      },
      {
        "fill": [
          "kind"
        ],
        "mean": [
          "tốt bụng"
        ]
      },
      {
        "fill": [
          "clever"
        ],
        "mean": [
          "thông minh"
        ]
      }
    ],
    "original": "My friend is ________."
  },
  "3:4:ext:0": {
    "en": "Touch your __.",
    "vi": "Chạm vào __ của em.",
    "options": [
      {
        "fill": [
          "arm"
        ],
        "mean": [
          "cánh tay"
        ]
      },
      {
        "fill": [
          "leg"
        ],
        "mean": [
          "chân"
        ]
      },
      {
        "fill": [
          "shoulder"
        ],
        "mean": [
          "vai"
        ]
      },
      {
        "fill": [
          "knee"
        ],
        "mean": [
          "đầu gối"
        ]
      }
    ],
    "original": "Touch your ________."
  },
  "3:5:ext:0": {
    "en": "I like __.",
    "vi": "Em thích __.",
    "options": [
      {
        "fill": [
          "reading"
        ],
        "mean": [
          "đọc sách"
        ]
      },
      {
        "fill": [
          "cycling"
        ],
        "mean": [
          "đạp xe"
        ]
      },
      {
        "fill": [
          "skating"
        ],
        "mean": [
          "trượt pa tin"
        ]
      },
      {
        "fill": [
          "playing chess"
        ],
        "mean": [
          "chơi cờ vua"
        ]
      }
    ],
    "original": "I like ________."
  },
  "3:6:ext:0": {
    "en": "Is this our __?",
    "vi": "Đây có phải __ của chúng mình không?",
    "options": [
      {
        "fill": [
          "classroom"
        ],
        "mean": [
          "phòng học"
        ]
      },
      {
        "fill": [
          "library"
        ],
        "mean": [
          "thư viện"
        ]
      },
      {
        "fill": [
          "playground"
        ],
        "mean": [
          "sân chơi"
        ]
      },
      {
        "fill": [
          "music room"
        ],
        "mean": [
          "phòng âm nhạc"
        ]
      },
      {
        "fill": [
          "computer room"
        ],
        "mean": [
          "phòng máy tính"
        ]
      },
      {
        "fill": [
          "art room"
        ],
        "mean": [
          "phòng mỹ thuật"
        ]
      }
    ],
    "original": "Is this our ________?",
    "answers": [
      {
        "label": "Yes",
        "en": "Yes, it is.",
        "vi": "Đúng, đây là __ của chúng mình."
      },
      {
        "label": "No",
        "en": "No, it isn't.",
        "vi": "Không, đây không phải __ của chúng mình."
      }
    ]
  },
  "3:7:ext:0": {
    "en": "Please __.",
    "vi": "Hãy __.",
    "options": [
      {
        "fill": [
          "listen"
        ],
        "mean": [
          "lắng nghe"
        ]
      },
      {
        "fill": [
          "look at the board"
        ],
        "mean": [
          "nhìn lên bảng"
        ]
      },
      {
        "fill": [
          "raise your hand"
        ],
        "mean": [
          "giơ tay"
        ]
      },
      {
        "fill": [
          "work in pairs"
        ],
        "mean": [
          "làm việc theo cặp"
        ]
      }
    ],
    "original": "Please ________."
  },
  "3:8:ext:0": {
    "en": "I have a __.",
    "vi": "Em có một __.",
    "options": [
      {
        "fill": [
          "pen"
        ],
        "mean": [
          "bút mực"
        ]
      },
      {
        "fill": [
          "pencil"
        ],
        "mean": [
          "bút chì"
        ]
      },
      {
        "fill": [
          "ruler"
        ],
        "mean": [
          "thước kẻ"
        ]
      },
      {
        "fill": [
          "notebook"
        ],
        "mean": [
          "quyển vở"
        ]
      },
      {
        "fill": [
          "school bag"
        ],
        "mean": [
          "cặp sách"
        ]
      }
    ],
    "original": "I have a ________."
  },
  "3:9:ext:0": {
    "en": "My bag is __.",
    "vi": "Cặp sách của em màu __.",
    "options": [
      {
        "fill": [
          "red"
        ],
        "mean": [
          "đỏ"
        ]
      },
      {
        "fill": [
          "blue"
        ],
        "mean": [
          "xanh dương"
        ]
      },
      {
        "fill": [
          "green"
        ],
        "mean": [
          "xanh lá"
        ]
      },
      {
        "fill": [
          "yellow"
        ],
        "mean": [
          "vàng"
        ]
      },
      {
        "fill": [
          "pink"
        ],
        "mean": [
          "hồng"
        ]
      },
      {
        "fill": [
          "purple"
        ],
        "mean": [
          "tím"
        ]
      },
      {
        "fill": [
          "orange"
        ],
        "mean": [
          "cam"
        ]
      },
      {
        "fill": [
          "white"
        ],
        "mean": [
          "trắng"
        ]
      },
      {
        "fill": [
          "black"
        ],
        "mean": [
          "đen"
        ]
      },
      {
        "fill": [
          "brown"
        ],
        "mean": [
          "nâu"
        ]
      },
      {
        "fill": [
          "grey"
        ],
        "mean": [
          "xám"
        ]
      }
    ],
    "original": "My bag is ________."
  },
  "3:10:ext:0": {
    "en": "Let's play __.",
    "vi": "Chúng mình cùng chơi __ nhé.",
    "options": [
      {
        "fill": [
          "football"
        ],
        "mean": [
          "bóng đá"
        ]
      },
      {
        "fill": [
          "badminton"
        ],
        "mean": [
          "cầu lông"
        ]
      },
      {
        "fill": [
          "basketball"
        ],
        "mean": [
          "bóng rổ"
        ]
      },
      {
        "fill": [
          "table tennis"
        ],
        "mean": [
          "bóng bàn"
        ]
      },
      {
        "fill": [
          "chess"
        ],
        "mean": [
          "cờ vua"
        ]
      }
    ],
    "original": "Let’s play ________."
  },
  "3:11:ext:0": {
    "en": "This is my __.",
    "vi": "Đây là __ của em.",
    "options": [
      {
        "fill": [
          "uncle"
        ],
        "mean": [
          "chú"
        ]
      },
      {
        "fill": [
          "aunt"
        ],
        "mean": [
          "cô"
        ]
      },
      {
        "fill": [
          "cousin"
        ],
        "mean": [
          "anh chị em họ"
        ]
      },
      {
        "fill": [
          "baby brother"
        ],
        "mean": [
          "em trai nhỏ"
        ]
      }
    ],
    "original": "This is my ________."
  },
  "3:12:ext:0": {
    "en": "A __ works __.",
    "vi": "Một __ làm việc __.",
    "options": [
      {
        "fill": [
          "doctor",
          "in a hospital"
        ],
        "mean": [
          "bác sĩ",
          "ở bệnh viện"
        ]
      },
      {
        "fill": [
          "teacher",
          "at a school"
        ],
        "mean": [
          "giáo viên",
          "ở trường học"
        ]
      },
      {
        "fill": [
          "farmer",
          "on a farm"
        ],
        "mean": [
          "nông dân",
          "ở nông trại"
        ]
      },
      {
        "fill": [
          "nurse",
          "in a hospital"
        ],
        "mean": [
          "y tá",
          "ở bệnh viện"
        ]
      },
      {
        "fill": [
          "driver",
          "in a taxi"
        ],
        "mean": [
          "tài xế",
          "trong xe taxi"
        ]
      },
      {
        "fill": [
          "worker",
          "in a factory"
        ],
        "mean": [
          "công nhân",
          "ở nhà máy"
        ]
      }
    ],
    "original": "A / An ________ works ________."
  },
  "3:13:ext:0": {
    "en": "There is a __ in my house.",
    "vi": "Nhà em có một __.",
    "options": [
      {
        "fill": [
          "garden"
        ],
        "mean": [
          "khu vườn"
        ]
      },
      {
        "fill": [
          "garage"
        ],
        "mean": [
          "nhà để xe"
        ]
      },
      {
        "fill": [
          "balcony"
        ],
        "mean": [
          "ban công"
        ]
      }
    ],
    "original": "There is a ________ in my house."
  },
  "3:14:ext:0": {
    "en": "There is a __ in my bedroom.",
    "vi": "Trong phòng ngủ của em có một __.",
    "options": [
      {
        "fill": [
          "bed"
        ],
        "mean": [
          "giường"
        ]
      },
      {
        "fill": [
          "desk"
        ],
        "mean": [
          "bàn học"
        ]
      },
      {
        "fill": [
          "chair"
        ],
        "mean": [
          "ghế"
        ]
      },
      {
        "fill": [
          "table"
        ],
        "mean": [
          "bàn"
        ]
      },
      {
        "fill": [
          "lamp"
        ],
        "mean": [
          "đèn"
        ]
      }
    ],
    "original": "There is a ________ in my bedroom."
  },
  "3:15:ext:0": {
    "en": "I use __.",
    "vi": "Em dùng __.",
    "options": [
      {
        "fill": [
          "a spoon"
        ],
        "mean": [
          "một cái thìa"
        ]
      },
      {
        "fill": [
          "a fork"
        ],
        "mean": [
          "một cái dĩa"
        ]
      },
      {
        "fill": [
          "a bowl"
        ],
        "mean": [
          "một cái bát"
        ]
      },
      {
        "fill": [
          "chopsticks"
        ],
        "mean": [
          "đũa"
        ]
      }
    ],
    "original": "I use ________."
  },
  "3:16:ext:0": {
    "en": "I have a __.",
    "vi": "Em có một __.",
    "options": [
      {
        "fill": [
          "hamster"
        ],
        "mean": [
          "con chuột hamster"
        ]
      },
      {
        "fill": [
          "turtle"
        ],
        "mean": [
          "con rùa"
        ]
      },
      {
        "fill": [
          "puppy"
        ],
        "mean": [
          "chó con"
        ]
      },
      {
        "fill": [
          "kitten"
        ],
        "mean": [
          "mèo con"
        ]
      }
    ],
    "original": "I have a ________."
  },
  "3:17:ext:0": {
    "en": "I have __.",
    "vi": "Em có __.",
    "options": [
      {
        "fill": [
          "a car"
        ],
        "mean": [
          "một ô tô đồ chơi"
        ]
      },
      {
        "fill": [
          "two dolls"
        ],
        "mean": [
          "hai búp bê"
        ]
      },
      {
        "fill": [
          "three kites"
        ],
        "mean": [
          "ba chiếc diều"
        ]
      },
      {
        "fill": [
          "a teddy bear"
        ],
        "mean": [
          "một chú gấu bông"
        ]
      }
    ],
    "original": "I have ________."
  },
  "3:18:ext:0": {
    "en": "She is __.",
    "vi": "Bạn ấy đang __.",
    "options": [
      {
        "fill": [
          "singing"
        ],
        "mean": [
          "hát"
        ]
      },
      {
        "fill": [
          "dancing"
        ],
        "mean": [
          "nhảy"
        ]
      },
      {
        "fill": [
          "drawing a picture"
        ],
        "mean": [
          "vẽ tranh"
        ]
      },
      {
        "fill": [
          "reading a book"
        ],
        "mean": [
          "đọc sách"
        ]
      },
      {
        "fill": [
          "listening to music"
        ],
        "mean": [
          "nghe nhạc"
        ]
      }
    ],
    "original": "She is ________."
  },
  "3:19:ext:0": {
    "en": "I like __.",
    "vi": "Em thích __.",
    "options": [
      {
        "fill": [
          "cycling"
        ],
        "mean": [
          "đạp xe"
        ]
      },
      {
        "fill": [
          "skating"
        ],
        "mean": [
          "trượt pa tin"
        ]
      },
      {
        "fill": [
          "skipping"
        ],
        "mean": [
          "nhảy dây"
        ]
      },
      {
        "fill": [
          "playing volleyball"
        ],
        "mean": [
          "chơi bóng chuyền"
        ]
      }
    ],
    "original": "I like ________."
  },
  "3:20:ext:0": {
    "en": "Can you see the __?",
    "vi": "Em có nhìn thấy __ không?",
    "options": [
      {
        "fill": [
          "giraffe"
        ],
        "mean": [
          "con hươu cao cổ"
        ]
      },
      {
        "fill": [
          "crocodile"
        ],
        "mean": [
          "con cá sấu"
        ]
      },
      {
        "fill": [
          "zebra"
        ],
        "mean": [
          "con ngựa vằn"
        ]
      },
      {
        "fill": [
          "bear"
        ],
        "mean": [
          "con gấu"
        ]
      }
    ],
    "original": "Can you see the ________?",
    "answers": [
      {
        "label": "Yes",
        "en": "Yes, I can.",
        "vi": "Có, em nhìn thấy __."
      },
      {
        "label": "No",
        "en": "No, I can't.",
        "vi": "Không, em không nhìn thấy __."
      }
    ]
  },
  "4:1:ext:0": {
    "en": "My friend is from __.",
    "vi": "Bạn của em đến từ __.",
    "options": [
      {
        "fill": [
          "Viet Nam"
        ],
        "mean": [
          "Việt Nam"
        ]
      },
      {
        "fill": [
          "Britain"
        ],
        "mean": [
          "Anh"
        ]
      },
      {
        "fill": [
          "Japan"
        ],
        "mean": [
          "Nhật Bản"
        ]
      },
      {
        "fill": [
          "Australia"
        ],
        "mean": [
          "Úc"
        ]
      },
      {
        "fill": [
          "America"
        ],
        "mean": [
          "Mỹ"
        ]
      }
    ],
    "original": "My friend is from ________."
  },
  "4:2:ext:0": {
    "en": "I __ at seven o'clock.",
    "vi": "Em __ lúc bảy giờ.",
    "options": [
      {
        "fill": [
          "have breakfast"
        ],
        "mean": [
          "ăn sáng"
        ]
      },
      {
        "fill": [
          "go to school"
        ],
        "mean": [
          "đi học"
        ]
      },
      {
        "fill": [
          "get up"
        ],
        "mean": [
          "thức dậy"
        ]
      }
    ],
    "original": "I ________ at seven o’clock."
  },
  "4:3:ext:0": {
    "en": "I __ on Sundays.",
    "vi": "Em __ vào các ngày Chủ nhật.",
    "options": [
      {
        "fill": [
          "play football"
        ],
        "mean": [
          "chơi bóng đá"
        ]
      },
      {
        "fill": [
          "play badminton"
        ],
        "mean": [
          "chơi cầu lông"
        ]
      },
      {
        "fill": [
          "play basketball"
        ],
        "mean": [
          "chơi bóng rổ"
        ]
      },
      {
        "fill": [
          "play table tennis"
        ],
        "mean": [
          "chơi bóng bàn"
        ]
      },
      {
        "fill": [
          "play chess"
        ],
        "mean": [
          "chơi cờ vua"
        ]
      }
    ],
    "original": "I ________ on Sundays."
  },
  "4:4:ext:0": {
    "en": "My birthday is on the __ of May.",
    "vi": "Sinh nhật của em là ngày __ tháng Năm.",
    "options": [
      {
        "fill": [
          "first"
        ],
        "mean": [
          "1"
        ]
      },
      {
        "fill": [
          "second"
        ],
        "mean": [
          "2"
        ]
      },
      {
        "fill": [
          "third"
        ],
        "mean": [
          "3"
        ]
      },
      {
        "fill": [
          "fourth"
        ],
        "mean": [
          "4"
        ]
      },
      {
        "fill": [
          "fifth"
        ],
        "mean": [
          "5"
        ]
      },
      {
        "fill": [
          "twelfth"
        ],
        "mean": [
          "12"
        ]
      },
      {
        "fill": [
          "twentieth"
        ],
        "mean": [
          "20"
        ]
      },
      {
        "fill": [
          "twenty-first"
        ],
        "mean": [
          "21"
        ]
      },
      {
        "fill": [
          "thirty-first"
        ],
        "mean": [
          "31"
        ]
      }
    ],
    "original": "My birthday is on the ________ of May."
  },
  "4:5:ext:0": {
    "en": "I can __.",
    "vi": "Em có thể __.",
    "options": [
      {
        "fill": [
          "sing"
        ],
        "mean": [
          "hát"
        ]
      },
      {
        "fill": [
          "dance"
        ],
        "mean": [
          "nhảy"
        ]
      },
      {
        "fill": [
          "swim"
        ],
        "mean": [
          "bơi"
        ]
      },
      {
        "fill": [
          "draw"
        ],
        "mean": [
          "vẽ"
        ]
      },
      {
        "fill": [
          "run"
        ],
        "mean": [
          "chạy"
        ]
      }
    ],
    "original": "I can ________."
  },
  "4:6:ext:0": {
    "en": "Our school has a __.",
    "vi": "Trường của chúng em có một __.",
    "options": [
      {
        "fill": [
          "classroom"
        ],
        "mean": [
          "phòng học"
        ]
      },
      {
        "fill": [
          "library"
        ],
        "mean": [
          "thư viện"
        ]
      },
      {
        "fill": [
          "playground"
        ],
        "mean": [
          "sân chơi"
        ]
      },
      {
        "fill": [
          "music room"
        ],
        "mean": [
          "phòng âm nhạc"
        ]
      },
      {
        "fill": [
          "computer room"
        ],
        "mean": [
          "phòng máy tính"
        ]
      },
      {
        "fill": [
          "art room"
        ],
        "mean": [
          "phòng mỹ thuật"
        ]
      }
    ],
    "original": "Our school has a ________."
  },
  "4:7:ext:0": {
    "en": "We have __ on Monday.",
    "vi": "Chúng em học __ vào thứ Hai.",
    "options": [
      {
        "fill": [
          "English"
        ],
        "mean": [
          "tiếng Anh"
        ]
      },
      {
        "fill": [
          "maths"
        ],
        "mean": [
          "toán"
        ]
      },
      {
        "fill": [
          "science"
        ],
        "mean": [
          "khoa học"
        ]
      },
      {
        "fill": [
          "art"
        ],
        "mean": [
          "mỹ thuật"
        ]
      },
      {
        "fill": [
          "music"
        ],
        "mean": [
          "âm nhạc"
        ]
      }
    ],
    "original": "We have ________ on Monday."
  },
  "4:8:ext:0": {
    "en": "I like science because it is __.",
    "vi": "Em thích khoa học vì môn này __.",
    "options": [
      {
        "fill": [
          "interesting"
        ],
        "mean": [
          "thú vị"
        ]
      },
      {
        "fill": [
          "useful"
        ],
        "mean": [
          "hữu ích"
        ]
      },
      {
        "fill": [
          "fun"
        ],
        "mean": [
          "vui"
        ]
      }
    ],
    "original": "I like science because it is ________."
  },
  "4:9:ext:0": {
    "en": "Sports Day is on the __ of June.",
    "vi": "Ngày hội thể thao là ngày __ tháng Sáu.",
    "options": [
      {
        "fill": [
          "first"
        ],
        "mean": [
          "1"
        ]
      },
      {
        "fill": [
          "second"
        ],
        "mean": [
          "2"
        ]
      },
      {
        "fill": [
          "third"
        ],
        "mean": [
          "3"
        ]
      },
      {
        "fill": [
          "twelfth"
        ],
        "mean": [
          "12"
        ]
      },
      {
        "fill": [
          "twentieth"
        ],
        "mean": [
          "20"
        ]
      },
      {
        "fill": [
          "thirtieth"
        ],
        "mean": [
          "30"
        ]
      }
    ],
    "original": "Sports Day is on the ________ of June."
  },
  "4:10:ext:0": {
    "en": "I want to __.",
    "vi": "Em muốn __.",
    "options": [
      {
        "fill": [
          "visit a museum"
        ],
        "mean": [
          "tham quan bảo tàng"
        ]
      },
      {
        "fill": [
          "go camping"
        ],
        "mean": [
          "đi cắm trại"
        ]
      },
      {
        "fill": [
          "have a picnic"
        ],
        "mean": [
          "đi dã ngoại"
        ]
      }
    ],
    "original": "I want to ________."
  },
  "4:11:ext:0": {
    "en": "My neighbourhood is __.",
    "vi": "Khu dân cư của em __.",
    "options": [
      {
        "fill": [
          "quiet"
        ],
        "mean": [
          "yên tĩnh"
        ]
      },
      {
        "fill": [
          "busy"
        ],
        "mean": [
          "nhộn nhịp"
        ]
      },
      {
        "fill": [
          "clean"
        ],
        "mean": [
          "sạch sẽ"
        ]
      }
    ],
    "original": "My neighbourhood is ________."
  },
  "4:12:ext:0": {
    "en": "A __ works __.",
    "vi": "Một __ làm việc __.",
    "options": [
      {
        "fill": [
          "doctor",
          "in a hospital"
        ],
        "mean": [
          "bác sĩ",
          "ở bệnh viện"
        ]
      },
      {
        "fill": [
          "teacher",
          "at a school"
        ],
        "mean": [
          "giáo viên",
          "ở trường học"
        ]
      },
      {
        "fill": [
          "farmer",
          "on a farm"
        ],
        "mean": [
          "nông dân",
          "ở nông trại"
        ]
      },
      {
        "fill": [
          "nurse",
          "in a hospital"
        ],
        "mean": [
          "y tá",
          "ở bệnh viện"
        ]
      },
      {
        "fill": [
          "driver",
          "in a taxi"
        ],
        "mean": [
          "tài xế",
          "trong xe taxi"
        ]
      },
      {
        "fill": [
          "worker",
          "in a factory"
        ],
        "mean": [
          "công nhân",
          "ở nhà máy"
        ]
      }
    ],
    "original": "A / An ________ works ________."
  },
  "4:13:ext:0": {
    "en": "She has __.",
    "vi": "Cô ấy có __.",
    "options": [
      {
        "fill": [
          "long hair"
        ],
        "mean": [
          "mái tóc dài"
        ]
      },
      {
        "fill": [
          "curly hair"
        ],
        "mean": [
          "mái tóc xoăn"
        ]
      },
      {
        "fill": [
          "straight hair"
        ],
        "mean": [
          "mái tóc thẳng"
        ]
      }
    ],
    "original": "She has ________."
  },
  "4:14:ext:0": {
    "en": "I __ in the morning.",
    "vi": "Em __ vào buổi sáng.",
    "options": [
      {
        "fill": [
          "brush my teeth"
        ],
        "mean": [
          "đánh răng"
        ]
      },
      {
        "fill": [
          "wash my face"
        ],
        "mean": [
          "rửa mặt"
        ]
      },
      {
        "fill": [
          "have breakfast"
        ],
        "mean": [
          "ăn sáng"
        ]
      }
    ],
    "original": "I ________ in the morning."
  },
  "4:15:ext:0": {
    "en": "We go to the __ at weekends.",
    "vi": "Chúng em đến __ vào cuối tuần.",
    "options": [
      {
        "fill": [
          "park"
        ],
        "mean": [
          "công viên"
        ]
      },
      {
        "fill": [
          "library"
        ],
        "mean": [
          "thư viện"
        ]
      },
      {
        "fill": [
          "cinema"
        ],
        "mean": [
          "rạp chiếu phim"
        ]
      },
      {
        "fill": [
          "swimming pool"
        ],
        "mean": [
          "bể bơi"
        ]
      }
    ],
    "original": "We go to the ________ at weekends."
  },
  "4:16:ext:0": {
    "en": "It is __ today.",
    "vi": "Hôm nay trời __.",
    "options": [
      {
        "fill": [
          "sunny"
        ],
        "mean": [
          "nắng"
        ]
      },
      {
        "fill": [
          "rainy"
        ],
        "mean": [
          "mưa"
        ]
      },
      {
        "fill": [
          "windy"
        ],
        "mean": [
          "gió"
        ]
      },
      {
        "fill": [
          "cloudy"
        ],
        "mean": [
          "nhiều mây"
        ]
      },
      {
        "fill": [
          "hot"
        ],
        "mean": [
          "nóng"
        ]
      },
      {
        "fill": [
          "cold"
        ],
        "mean": [
          "lạnh"
        ]
      }
    ],
    "original": "It is ________ today."
  },
  "4:17:ext:0": {
    "en": "Go straight to the __.",
    "vi": "Đi thẳng đến __.",
    "options": [
      {
        "fill": [
          "bridge"
        ],
        "mean": [
          "cây cầu"
        ]
      },
      {
        "fill": [
          "crossroads"
        ],
        "mean": [
          "ngã tư"
        ]
      },
      {
        "fill": [
          "traffic lights"
        ],
        "mean": [
          "đèn giao thông"
        ]
      }
    ],
    "original": "Go straight to the ________."
  },
  "4:18:ext:0": {
    "en": "What size is this __?",
    "vi": "__ này cỡ bao nhiêu?",
    "options": [
      {
        "fill": [
          "shirt"
        ],
        "mean": [
          "Áo sơ mi"
        ]
      },
      {
        "fill": [
          "skirt"
        ],
        "mean": [
          "Váy"
        ]
      },
      {
        "fill": [
          "T-shirt"
        ],
        "mean": [
          "Áo phông"
        ]
      }
    ],
    "original": "What size is this ________?"
  },
  "4:19:ext:0": {
    "en": "A bird can __.",
    "vi": "Chim có thể __.",
    "options": [
      {
        "fill": [
          "fly"
        ],
        "mean": [
          "bay"
        ]
      },
      {
        "fill": [
          "sing"
        ],
        "mean": [
          "hót"
        ]
      },
      {
        "fill": [
          "hop"
        ],
        "mean": [
          "nhảy lò cò"
        ]
      }
    ],
    "original": "A bird can ________."
  },
  "4:20:ext:0": {
    "en": "Remember to bring a __.",
    "vi": "Hãy nhớ mang theo một __.",
    "options": [
      {
        "fill": [
          "hat"
        ],
        "mean": [
          "chiếc mũ"
        ]
      },
      {
        "fill": [
          "towel"
        ],
        "mean": [
          "khăn"
        ]
      },
      {
        "fill": [
          "water bottle"
        ],
        "mean": [
          "bình nước"
        ]
      }
    ],
    "original": "Remember to bring a ________."
  },
  "5:1:ext:0": {
    "en": "My favourite sport is __.",
    "vi": "Môn thể thao yêu thích của em là __.",
    "options": [
      {
        "fill": [
          "football"
        ],
        "mean": [
          "bóng đá"
        ]
      },
      {
        "fill": [
          "badminton"
        ],
        "mean": [
          "cầu lông"
        ]
      },
      {
        "fill": [
          "basketball"
        ],
        "mean": [
          "bóng rổ"
        ]
      },
      {
        "fill": [
          "table tennis"
        ],
        "mean": [
          "bóng bàn"
        ]
      },
      {
        "fill": [
          "chess"
        ],
        "mean": [
          "cờ vua"
        ]
      }
    ],
    "original": "My favourite sport is ________."
  },
  "5:2:ext:0": {
    "en": "There is a __ in my building.",
    "vi": "Tòa nhà của em có một __.",
    "options": [
      {
        "fill": [
          "lift"
        ],
        "mean": [
          "thang máy"
        ]
      },
      {
        "fill": [
          "staircase"
        ],
        "mean": [
          "cầu thang"
        ]
      },
      {
        "fill": [
          "balcony"
        ],
        "mean": [
          "ban công"
        ]
      }
    ],
    "original": "There is a ________ in my building."
  },
  "5:3:ext:0": {
    "en": "My friend is __.",
    "vi": "Bạn của em __.",
    "options": [
      {
        "fill": [
          "friendly"
        ],
        "mean": [
          "thân thiện"
        ]
      },
      {
        "fill": [
          "helpful"
        ],
        "mean": [
          "hay giúp đỡ"
        ]
      },
      {
        "fill": [
          "kind"
        ],
        "mean": [
          "tốt bụng"
        ]
      },
      {
        "fill": [
          "clever"
        ],
        "mean": [
          "thông minh"
        ]
      }
    ],
    "original": "My friend is ________."
  },
  "5:4:ext:0": {
    "en": "I sometimes __ after school.",
    "vi": "Em thỉnh thoảng __ sau giờ học.",
    "options": [
      {
        "fill": [
          "read books"
        ],
        "mean": [
          "đọc sách"
        ]
      },
      {
        "fill": [
          "play chess"
        ],
        "mean": [
          "chơi cờ vua"
        ]
      },
      {
        "fill": [
          "ride my bike"
        ],
        "mean": [
          "đạp xe"
        ]
      }
    ],
    "original": "I sometimes ________ after school."
  },
  "5:5:ext:0": {
    "en": "I want to be a __.",
    "vi": "Em muốn trở thành __.",
    "options": [
      {
        "fill": [
          "doctor"
        ],
        "mean": [
          "bác sĩ"
        ]
      },
      {
        "fill": [
          "teacher"
        ],
        "mean": [
          "giáo viên"
        ]
      },
      {
        "fill": [
          "farmer"
        ],
        "mean": [
          "nông dân"
        ]
      },
      {
        "fill": [
          "nurse"
        ],
        "mean": [
          "y tá"
        ]
      },
      {
        "fill": [
          "driver"
        ],
        "mean": [
          "tài xế"
        ]
      },
      {
        "fill": [
          "worker"
        ],
        "mean": [
          "công nhân"
        ]
      }
    ],
    "original": "I want to be a ________."
  },
  "5:6:ext:0": {
    "en": "The music room is on the __ floor.",
    "vi": "Phòng âm nhạc ở tầng __.",
    "options": [
      {
        "fill": [
          "first"
        ],
        "mean": [
          "1"
        ]
      },
      {
        "fill": [
          "second"
        ],
        "mean": [
          "2"
        ]
      },
      {
        "fill": [
          "third"
        ],
        "mean": [
          "3"
        ]
      },
      {
        "fill": [
          "fourth"
        ],
        "mean": [
          "4"
        ]
      },
      {
        "fill": [
          "fifth"
        ],
        "mean": [
          "5"
        ]
      }
    ],
    "original": "The music room is on the ________ floor."
  },
  "5:7:ext:0": {
    "en": "We like to __.",
    "vi": "Chúng em thích __.",
    "options": [
      {
        "fill": [
          "work in groups"
        ],
        "mean": [
          "làm việc nhóm"
        ]
      },
      {
        "fill": [
          "do experiments"
        ],
        "mean": [
          "làm thí nghiệm"
        ]
      },
      {
        "fill": [
          "give presentations"
        ],
        "mean": [
          "thuyết trình"
        ]
      }
    ],
    "original": "We like to ________."
  },
  "5:8:ext:0": {
    "en": "The bag is __ the desk.",
    "vi": "Cặp sách ở __ bàn.",
    "options": [
      {
        "fill": [
          "on"
        ],
        "mean": [
          "trên"
        ]
      },
      {
        "fill": [
          "under"
        ],
        "mean": [
          "dưới"
        ]
      },
      {
        "fill": [
          "beside"
        ],
        "mean": [
          "cạnh"
        ]
      },
      {
        "fill": [
          "behind"
        ],
        "mean": [
          "phía sau"
        ]
      }
    ],
    "original": "The bag is ________ the desk."
  },
  "5:9:ext:0": {
    "en": "We want to visit the __.",
    "vi": "Chúng em muốn đến thăm __.",
    "options": [
      {
        "fill": [
          "museum"
        ],
        "mean": [
          "bảo tàng"
        ]
      },
      {
        "fill": [
          "zoo"
        ],
        "mean": [
          "sở thú"
        ]
      },
      {
        "fill": [
          "botanical garden"
        ],
        "mean": [
          "vườn bách thảo"
        ]
      }
    ],
    "original": "We want to visit the ________."
  },
  "5:10:ext:0": {
    "en": "Our meeting point is the __.",
    "vi": "Điểm tập trung của chúng em là __.",
    "options": [
      {
        "fill": [
          "school gate"
        ],
        "mean": [
          "cổng trường"
        ]
      },
      {
        "fill": [
          "main entrance"
        ],
        "mean": [
          "cổng chính"
        ]
      },
      {
        "fill": [
          "bus stop"
        ],
        "mean": [
          "trạm xe buýt"
        ]
      }
    ],
    "original": "Our meeting point is the ________."
  },
  "5:11:ext:0": {
    "en": "My family likes to __.",
    "vi": "Gia đình em thích __.",
    "options": [
      {
        "fill": [
          "go camping"
        ],
        "mean": [
          "đi cắm trại"
        ]
      },
      {
        "fill": [
          "have a picnic"
        ],
        "mean": [
          "đi dã ngoại"
        ]
      },
      {
        "fill": [
          "watch films"
        ],
        "mean": [
          "xem phim"
        ]
      }
    ],
    "original": "My family likes to ________."
  },
  "5:12:ext:0": {
    "en": "At Tet, we __.",
    "vi": "Vào dịp Tết, chúng em __.",
    "options": [
      {
        "fill": [
          "visit relatives"
        ],
        "mean": [
          "thăm họ hàng"
        ]
      },
      {
        "fill": [
          "decorate the house"
        ],
        "mean": [
          "trang trí nhà"
        ]
      },
      {
        "fill": [
          "make banh chung"
        ],
        "mean": [
          "gói bánh chưng"
        ]
      }
    ],
    "original": "At Tet, we ________."
  },
  "5:13:ext:0": {
    "en": "I make a __ for my teacher.",
    "vi": "Em làm một __ cho thầy cô.",
    "options": [
      {
        "fill": [
          "greeting card"
        ],
        "mean": [
          "tấm thiệp chúc mừng"
        ]
      },
      {
        "fill": [
          "paper flower"
        ],
        "mean": [
          "bông hoa giấy"
        ]
      },
      {
        "fill": [
          "bookmark"
        ],
        "mean": [
          "thẻ đánh dấu sách"
        ]
      }
    ],
    "original": "I make a ________ for my teacher."
  },
  "5:14:ext:0": {
    "en": "I __ every day.",
    "vi": "Em __ mỗi ngày.",
    "options": [
      {
        "fill": [
          "drink water"
        ],
        "mean": [
          "uống nước"
        ]
      },
      {
        "fill": [
          "wash my hands"
        ],
        "mean": [
          "rửa tay"
        ]
      },
      {
        "fill": [
          "get enough sleep"
        ],
        "mean": [
          "ngủ đủ giấc"
        ]
      }
    ],
    "original": "I ________ every day."
  },
  "5:15:ext:0": {
    "en": "I have a __.",
    "vi": "Em bị __.",
    "options": [
      {
        "fill": [
          "cough"
        ],
        "mean": [
          "ho"
        ]
      },
      {
        "fill": [
          "runny nose"
        ],
        "mean": [
          "sổ mũi"
        ]
      },
      {
        "fill": [
          "fever"
        ],
        "mean": [
          "sốt"
        ]
      }
    ],
    "original": "I have a ________."
  },
  "5:16:ext:0": {
    "en": "I wear a __ when it is cold.",
    "vi": "Em mặc hoặc đeo __ khi trời lạnh.",
    "options": [
      {
        "fill": [
          "scarf"
        ],
        "mean": [
          "một chiếc khăn quàng"
        ]
      },
      {
        "fill": [
          "jumper"
        ],
        "mean": [
          "một chiếc áo len"
        ]
      },
      {
        "fill": [
          "coat"
        ],
        "mean": [
          "một chiếc áo khoác"
        ]
      }
    ],
    "original": "I wear a ________ when it is cold."
  },
  "5:17:ext:0": {
    "en": "My favourite character is __.",
    "vi": "Nhân vật yêu thích của em là __.",
    "options": [
      {
        "fill": [
          "Snow White"
        ],
        "mean": [
          "Bạch Tuyết"
        ]
      },
      {
        "fill": [
          "the tortoise"
        ],
        "mean": [
          "rùa"
        ]
      },
      {
        "fill": [
          "the ant"
        ],
        "mean": [
          "kiến"
        ]
      }
    ],
    "original": "My favourite character is ________."
  },
  "5:18:ext:0": {
    "en": "We travel __.",
    "vi": "Chúng em di chuyển __.",
    "options": [
      {
        "fill": [
          "by train"
        ],
        "mean": [
          "bằng tàu hỏa"
        ]
      },
      {
        "fill": [
          "by plane"
        ],
        "mean": [
          "bằng máy bay"
        ]
      },
      {
        "fill": [
          "by boat"
        ],
        "mean": [
          "bằng thuyền"
        ]
      },
      {
        "fill": [
          "by motorbike"
        ],
        "mean": [
          "bằng xe máy"
        ]
      }
    ],
    "original": "We travel ________."
  },
  "5:19:ext:0": {
    "en": "This place is __.",
    "vi": "Nơi này __.",
    "options": [
      {
        "fill": [
          "historic"
        ],
        "mean": [
          "có ý nghĩa lịch sử"
        ]
      },
      {
        "fill": [
          "crowded"
        ],
        "mean": [
          "đông đúc"
        ]
      },
      {
        "fill": [
          "famous"
        ],
        "mean": [
          "nổi tiếng"
        ]
      }
    ],
    "original": "This place is ________."
  },
  "5:20:ext:0": {
    "en": "I pack a __.",
    "vi": "Em xếp một __ vào hành lý.",
    "options": [
      {
        "fill": [
          "sun hat"
        ],
        "mean": [
          "chiếc mũ chống nắng"
        ]
      },
      {
        "fill": [
          "T-shirt"
        ],
        "mean": [
          "chiếc áo phông"
        ]
      },
      {
        "fill": [
          "postcard"
        ],
        "mean": [
          "tấm bưu thiếp"
        ]
      }
    ],
    "original": "I pack a ________."
  },
  "3:12:ext:1": {
    "en": "She works __.",
    "vi": "Cô ấy làm việc __.",
    "options": [
      {
        "fill": [
          "in a hospital"
        ],
        "mean": [
          "ở bệnh viện"
        ]
      },
      {
        "fill": [
          "at a school"
        ],
        "mean": [
          "ở trường học"
        ]
      },
      {
        "fill": [
          "on a farm"
        ],
        "mean": [
          "ở nông trại"
        ]
      },
      {
        "fill": [
          "in a hospital"
        ],
        "mean": [
          "ở bệnh viện"
        ]
      },
      {
        "fill": [
          "in a taxi"
        ],
        "mean": [
          "trong xe taxi"
        ]
      },
      {
        "fill": [
          "in a factory"
        ],
        "mean": [
          "ở nhà máy"
        ]
      }
    ],
    "original": "He / She works ________."
  },
  "4:12:ext:1": {
    "en": "She works __.",
    "vi": "Cô ấy làm việc __.",
    "options": [
      {
        "fill": [
          "in a hospital"
        ],
        "mean": [
          "ở bệnh viện"
        ]
      },
      {
        "fill": [
          "at a school"
        ],
        "mean": [
          "ở trường học"
        ]
      },
      {
        "fill": [
          "on a farm"
        ],
        "mean": [
          "ở nông trại"
        ]
      },
      {
        "fill": [
          "in a hospital"
        ],
        "mean": [
          "ở bệnh viện"
        ]
      },
      {
        "fill": [
          "in a taxi"
        ],
        "mean": [
          "trong xe taxi"
        ]
      },
      {
        "fill": [
          "in a factory"
        ],
        "mean": [
          "ở nhà máy"
        ]
      }
    ],
    "original": "He / She works ________."
  },
  "5:5:ext:1": {
    "en": "She works __.",
    "vi": "Cô ấy làm việc __.",
    "options": [
      {
        "fill": [
          "in a hospital"
        ],
        "mean": [
          "ở bệnh viện"
        ]
      },
      {
        "fill": [
          "at a school"
        ],
        "mean": [
          "ở trường học"
        ]
      },
      {
        "fill": [
          "on a farm"
        ],
        "mean": [
          "ở nông trại"
        ]
      },
      {
        "fill": [
          "in a hospital"
        ],
        "mean": [
          "ở bệnh viện"
        ]
      },
      {
        "fill": [
          "in a taxi"
        ],
        "mean": [
          "trong xe taxi"
        ]
      },
      {
        "fill": [
          "in a factory"
        ],
        "mean": [
          "ở nhà máy"
        ]
      }
    ],
    "original": "He / She works ________."
  }
};
