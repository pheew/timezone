{
  "zones": {
    "Asia/Baku": [
      "z",
      {
        "wallclock": 852076800000,
        "format": "AZ%sT",
        "abbrev": "AZT",
        "offset": 14400000,
        "posix": 852062400000,
        "save": 0,
        "rules": "Azer"
      },
      {
        "wallclock": 820454400000,
        "format": "AZ%sT",
        "abbrev": "AZT",
        "offset": 14400000,
        "posix": 820440000000,
        "save": 0,
        "rules": "EUAsia"
      },
      {
        "wallclock": 717548400000,
        "format": "AZT",
        "abbrev": "AZT",
        "offset": 14400000,
        "posix": 717534000000,
        "save": 0
      },
      {
        "wallclock": 683510400000,
        "format": "AZ%sT",
        "abbrev": "AZST",
        "offset": 10800000,
        "posix": 683496000000,
        "save": 3600000,
        "rules": "RussiaAsia"
      },
      {
        "wallclock": 670384800000,
        "format": "BAKST",
        "abbrev": "BAKST",
        "offset": 10800000,
        "posix": 670370400000,
        "save": 3600000
      },
      {
        "wallclock": -405129600000,
        "format": "BAK%sT",
        "abbrev": "BAKT",
        "offset": 14400000,
        "posix": -405140400000,
        "save": 0,
        "rules": "RussiaAsia"
      },
      {
        "wallclock": -1441152000000,
        "format": "BAKT",
        "abbrev": "BAKT",
        "offset": 10800000,
        "posix": -1441163964000,
        "save": 0
      },
      {
        "wallclock": -1.7976931348623157e+308,
        "format": "LMT",
        "abbrev": "LMT",
        "offset": 11964000,
        "posix": -1.7976931348623157e+308,
        "save": 0
      }
    ]
  },
  "rules": {
    "Azer": [
      {
        "from": 1997,
        "to": 1.7976931348623157e+308,
        "month": 2,
        "day": [
          0,
          -31
        ],
        "time": 240,
        "clock": "wallclock",
        "save": 60,
        "letter": "S",
        "saved": 0
      },
      {
        "from": 1997,
        "to": 1.7976931348623157e+308,
        "month": 9,
        "day": [
          0,
          -31
        ],
        "time": 300,
        "clock": "wallclock",
        "save": 0,
        "letter": "",
        "saved": 3600000
      }
    ],
    "EUAsia": [
      {
        "from": 1981,
        "to": 1.7976931348623157e+308,
        "month": 2,
        "day": [
          0,
          -31
        ],
        "time": 60,
        "clock": "posix",
        "save": 60,
        "letter": "S",
        "saved": 0
      },
      {
        "from": 1996,
        "to": 1.7976931348623157e+308,
        "month": 9,
        "day": [
          0,
          -31
        ],
        "time": 60,
        "clock": "posix",
        "save": 0,
        "letter": "",
        "saved": 3600000
      },
      {
        "from": 1979,
        "to": 1995,
        "month": 8,
        "day": [
          0,
          -30
        ],
        "time": 60,
        "clock": "posix",
        "save": 0,
        "letter": "",
        "saved": 0
      }
    ],
    "RussiaAsia": [
      {
        "from": 1993,
        "to": 1.7976931348623157e+308,
        "month": 2,
        "day": [
          0,
          -31
        ],
        "time": 120,
        "clock": "wallclock",
        "save": 60,
        "letter": "S",
        "saved": 0
      },
      {
        "from": 1996,
        "to": 1.7976931348623157e+308,
        "month": 9,
        "day": [
          0,
          -31
        ],
        "time": 180,
        "clock": "wallclock",
        "save": 0,
        "letter": "",
        "saved": 3600000
      },
      {
        "from": 1993,
        "to": 1995,
        "month": 8,
        "day": [
          0,
          -30
        ],
        "time": 180,
        "clock": "wallclock",
        "save": 0,
        "letter": "",
        "saved": 3600000
      },
      {
        "from": 1992,
        "to": 1992,
        "month": 2,
        "day": [
          6,
          -31
        ],
        "time": 1380,
        "clock": "wallclock",
        "save": 60,
        "letter": "S",
        "saved": 0
      },
      {
        "from": 1992,
        "to": 1992,
        "month": 8,
        "day": [
          6,
          -30
        ],
        "time": 1380,
        "clock": "wallclock",
        "save": 0,
        "letter": "",
        "saved": 3600000
      },
      {
        "from": 1984,
        "to": 1991,
        "month": 8,
        "day": [
          0,
          -30
        ],
        "time": 180,
        "clock": "wallclock",
        "save": 0,
        "letter": "",
        "saved": 3600000
      },
      {
        "from": 1985,
        "to": 1991,
        "month": 2,
        "day": [
          0,
          -31
        ],
        "time": 120,
        "clock": "wallclock",
        "save": 60,
        "letter": "S",
        "saved": 0
      },
      {
        "from": 1981,
        "to": 1984,
        "month": 3,
        "day": [
          7,
          1
        ],
        "time": 0,
        "clock": "wallclock",
        "save": 60,
        "letter": "S",
        "saved": 0
      },
      {
        "from": 1981,
        "to": 1983,
        "month": 9,
        "day": [
          7,
          1
        ],
        "time": 0,
        "clock": "wallclock",
        "save": 0,
        "letter": "",
        "saved": 3600000
      }
    ]
  }
}