{
  "zones": {
    "Europe/Tallinn": [
      "z",
      {
        "wallclock": 1014249600000,
        "format": "EE%sT",
        "abbrev": "EET",
        "offset": 7200000,
        "posix": 1014242400000,
        "save": 0,
        "rules": "EU"
      },
      {
        "wallclock": 941414400000,
        "format": "EET",
        "abbrev": "EET",
        "offset": 7200000,
        "posix": 941407200000,
        "save": 0
      },
      {
        "wallclock": 906422400000,
        "format": "EE%sT",
        "abbrev": "EEST",
        "offset": 7200000,
        "posix": 906411600000,
        "save": 3600000,
        "rules": "EU"
      },
      {
        "wallclock": 622609200000,
        "format": "EE%sT",
        "abbrev": "EET",
        "offset": 7200000,
        "posix": 622598400000,
        "save": 0,
        "rules": "C-Eur"
      },
      {
        "wallclock": 606880800000,
        "format": "EEST",
        "abbrev": "EEST",
        "offset": 7200000,
        "posix": 606870000000,
        "save": 3600000
      },
      {
        "wallclock": -797644800000,
        "format": "MSK/MSD",
        "abbrev": "MSK",
        "offset": 10800000,
        "posix": -797652000000,
        "save": 0,
        "rules": "Russia"
      },
      {
        "wallclock": -892944000000,
        "format": "CE%sT",
        "abbrev": "CEST",
        "offset": 3600000,
        "posix": -892954800000,
        "save": 3600000,
        "rules": "C-Eur"
      },
      {
        "wallclock": -927936000000,
        "format": "MSK",
        "abbrev": "MSK",
        "offset": 10800000,
        "posix": -927943200000,
        "save": 0
      },
      {
        "wallclock": -1535932800000,
        "format": "EET",
        "abbrev": "EET",
        "offset": 7200000,
        "posix": -1535938740000,
        "save": 0
      },
      {
        "wallclock": -1593820800000,
        "format": "TMT",
        "abbrev": "TMT",
        "offset": 5940000,
        "posix": -1593824400000,
        "save": 0
      },
      {
        "wallclock": -1638316800000,
        "format": "CE%sT",
        "abbrev": "CET",
        "offset": 3600000,
        "posix": -1638322740000,
        "save": 0,
        "rules": "C-Eur"
      },
      {
        "wallclock": -2840140800000,
        "format": "TMT",
        "abbrev": "TMT",
        "offset": 5940000,
        "posix": -2840146740000,
        "save": 0
      },
      {
        "wallclock": -1.7976931348623157e+308,
        "format": "LMT",
        "abbrev": "LMT",
        "offset": 5940000,
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
    "C-Eur": [
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
        "from": 1981,
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
        "from": 1979,
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
        "from": 1977,
        "to": 1980,
        "month": 3,
        "day": [
          0,
          1
        ],
        "time": 120,
        "clock": "standard",
        "save": 60,
        "letter": "S"
      },
      {
        "from": 1978,
        "to": 1978,
        "month": 9,
        "day": [
          7,
          1
        ],
        "time": 120,
        "clock": "standard",
        "save": 0,
        "letter": ""
      },
      {
        "from": 1977,
        "to": 1977,
        "month": 8,
        "day": [
          0,
          -30
        ],
        "time": 120,
        "clock": "standard",
        "save": 0,
        "letter": ""
      },
      {
        "from": 1944,
        "to": 1945,
        "month": 3,
        "day": [
          1,
          1
        ],
        "time": 120,
        "clock": "wallclock",
        "save": 60,
        "letter": "S",
        "saved": 0
      },
      {
        "from": 1945,
        "to": 1945,
        "month": 8,
        "day": [
          7,
          16
        ],
        "time": 120,
        "clock": "standard",
        "save": 0,
        "letter": ""
      },
      {
        "from": 1944,
        "to": 1944,
        "month": 9,
        "day": [
          7,
          2
        ],
        "time": 180,
        "clock": "wallclock",
        "save": 0,
        "letter": "",
        "saved": 3600000
      },
      {
        "from": 1943,
        "to": 1943,
        "month": 9,
        "day": [
          7,
          4
        ],
        "time": 180,
        "clock": "wallclock",
        "save": 0,
        "letter": "",
        "saved": 3600000
      },
      {
        "from": 1943,
        "to": 1943,
        "month": 2,
        "day": [
          7,
          29
        ],
        "time": 120,
        "clock": "wallclock",
        "save": 60,
        "letter": "S",
        "saved": 0
      },
      {
        "from": 1942,
        "to": 1942,
        "month": 10,
        "day": [
          7,
          2
        ],
        "time": 180,
        "clock": "wallclock",
        "save": 0,
        "letter": "",
        "saved": 3600000
      },
      {
        "from": 1940,
        "to": 1940,
        "month": 3,
        "day": [
          7,
          1
        ],
        "time": 120,
        "clock": "wallclock",
        "save": 60,
        "letter": "S",
        "saved": 0
      },
      {
        "from": 1917,
        "to": 1918,
        "month": 8,
        "day": [
          1,
          15
        ],
        "time": 180,
        "clock": "wallclock",
        "save": 0,
        "letter": "",
        "saved": 3600000
      },
      {
        "from": 1917,
        "to": 1918,
        "month": 3,
        "day": [
          1,
          15
        ],
        "time": 120,
        "clock": "wallclock",
        "save": 60,
        "letter": "S",
        "saved": 0
      },
      {
        "from": 1916,
        "to": 1916,
        "month": 9,
        "day": [
          7,
          1
        ],
        "time": 60,
        "clock": "wallclock",
        "save": 0,
        "letter": "",
        "saved": 3600000
      },
      {
        "from": 1916,
        "to": 1916,
        "month": 3,
        "day": [
          7,
          30
        ],
        "time": 1380,
        "clock": "wallclock",
        "save": 60,
        "letter": "S",
        "saved": 0
      }
    ],
    "Russia": [
      {
        "from": 1996,
        "to": 2010,
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
        "to": 2010,
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
      },
      {
        "from": 1921,
        "to": 1921,
        "month": 8,
        "day": [
          7,
          1
        ],
        "time": 0,
        "clock": "wallclock",
        "save": 60,
        "letter": "S",
        "saved": 7200000
      },
      {
        "from": 1921,
        "to": 1921,
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
      },
      {
        "from": 1921,
        "to": 1921,
        "month": 1,
        "day": [
          7,
          14
        ],
        "time": 1380,
        "clock": "wallclock",
        "save": 60,
        "letter": "S",
        "saved": 0
      },
      {
        "from": 1921,
        "to": 1921,
        "month": 2,
        "day": [
          7,
          20
        ],
        "time": 1380,
        "clock": "wallclock",
        "save": 120,
        "letter": "M",
        "saved": 3600000
      },
      {
        "from": 1919,
        "to": 1919,
        "month": 7,
        "day": [
          7,
          16
        ],
        "time": 0,
        "clock": "wallclock",
        "save": 0,
        "letter": "",
        "saved": 3600000
      },
      {
        "from": 1919,
        "to": 1919,
        "month": 6,
        "day": [
          7,
          1
        ],
        "time": 120,
        "clock": "wallclock",
        "save": 60,
        "letter": "S",
        "saved": 0
      },
      {
        "from": 1919,
        "to": 1919,
        "month": 4,
        "day": [
          7,
          31
        ],
        "time": 1380,
        "clock": "wallclock",
        "save": 120,
        "letter": "MDST",
        "saved": 3600000
      },
      {
        "from": 1918,
        "to": 1918,
        "month": 8,
        "day": [
          7,
          16
        ],
        "time": 60,
        "clock": "wallclock",
        "save": 60,
        "letter": "MST",
        "saved": 7200000
      },
      {
        "from": 1918,
        "to": 1918,
        "month": 4,
        "day": [
          7,
          31
        ],
        "time": 1320,
        "clock": "wallclock",
        "save": 120,
        "letter": "MDST",
        "saved": 0
      },
      {
        "from": 1917,
        "to": 1917,
        "month": 11,
        "day": [
          7,
          28
        ],
        "time": 0,
        "clock": "wallclock",
        "save": 0,
        "letter": "MMT",
        "saved": 3600000
      },
      {
        "from": 1917,
        "to": 1917,
        "month": 6,
        "day": [
          7,
          1
        ],
        "time": 1380,
        "clock": "wallclock",
        "save": 60,
        "letter": "MST",
        "saved": 0
      }
    ]
  }
}