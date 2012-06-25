{
  "zones": {
    "Europe/Helsinki": [
      "z",
      {
        "wallclock": 410227200000,
        "format": "EE%sT",
        "abbrev": "EET",
        "offset": 7200000,
        "posix": 410220000000,
        "save": 0,
        "rules": "EU"
      },
      {
        "wallclock": -1535932800000,
        "format": "EE%sT",
        "abbrev": "EET",
        "offset": 7200000,
        "posix": -1535938792000,
        "save": 0,
        "rules": "Finland"
      },
      {
        "wallclock": -2890252800000,
        "format": "HMT",
        "abbrev": "HMT",
        "offset": 5992000,
        "posix": -2890258792000,
        "save": 0
      },
      {
        "wallclock": -1.7976931348623157e+308,
        "format": "LMT",
        "abbrev": "LMT",
        "offset": 5992000,
        "posix": -1.7976931348623157e+308,
        "save": 0
      }
    ]
  },
  "rules": {
    "EU": [
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
        "saved": 3600000
      },
      {
        "from": 1977,
        "to": 1980,
        "month": 3,
        "day": [
          0,
          1
        ],
        "time": 60,
        "clock": "posix",
        "save": 60,
        "letter": "S",
        "saved": 0
      },
      {
        "from": 1978,
        "to": 1978,
        "month": 9,
        "day": [
          7,
          1
        ],
        "time": 60,
        "clock": "posix",
        "save": 0,
        "letter": "",
        "saved": 3600000
      },
      {
        "from": 1977,
        "to": 1977,
        "month": 8,
        "day": [
          0,
          -30
        ],
        "time": 60,
        "clock": "posix",
        "save": 0,
        "letter": "",
        "saved": 3600000
      }
    ],
    "Finland": [
      {
        "from": 1981,
        "to": 1982,
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
        "to": 1982,
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
        "from": 1942,
        "to": 1942,
        "month": 3,
        "day": [
          7,
          3
        ],
        "time": 0,
        "clock": "wallclock",
        "save": 60,
        "letter": "S",
        "saved": 0
      },
      {
        "from": 1942,
        "to": 1942,
        "month": 9,
        "day": [
          7,
          3
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