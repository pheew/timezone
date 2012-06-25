{
  "zones": {
    "Asia/Hovd": [
      "z",
      {
        "wallclock": 252460800000,
        "format": "HOV%sT",
        "abbrev": "HOVT",
        "offset": 25200000,
        "posix": 252439200000,
        "save": 0,
        "rules": "Mongol"
      },
      {
        "wallclock": -2032905600000,
        "format": "HOVT",
        "abbrev": "HOVT",
        "offset": 21600000,
        "posix": -2032927596000,
        "save": 0
      },
      {
        "wallclock": -1.7976931348623157e+308,
        "format": "LMT",
        "abbrev": "LMT",
        "offset": 21996000,
        "posix": -1.7976931348623157e+308,
        "save": 0
      }
    ]
  },
  "rules": {
    "Mongol": [
      {
        "from": 2001,
        "to": 2006,
        "month": 8,
        "day": [
          6,
          -30
        ],
        "time": 120,
        "clock": "wallclock",
        "save": 0,
        "letter": "",
        "saved": 3600000
      },
      {
        "from": 2002,
        "to": 2006,
        "month": 2,
        "day": [
          6,
          -31
        ],
        "time": 120,
        "clock": "wallclock",
        "save": 60,
        "letter": "S",
        "saved": 0
      },
      {
        "from": 2001,
        "to": 2001,
        "month": 3,
        "day": [
          6,
          -30
        ],
        "time": 120,
        "clock": "wallclock",
        "save": 60,
        "letter": "S",
        "saved": 0
      },
      {
        "from": 1985,
        "to": 1998,
        "month": 2,
        "day": [
          0,
          -31
        ],
        "time": 0,
        "clock": "wallclock",
        "save": 60,
        "letter": "S",
        "saved": 0
      },
      {
        "from": 1984,
        "to": 1998,
        "month": 8,
        "day": [
          0,
          -30
        ],
        "time": 0,
        "clock": "wallclock",
        "save": 0,
        "letter": "",
        "saved": 3600000
      },
      {
        "from": 1983,
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
        "from": 1983,
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