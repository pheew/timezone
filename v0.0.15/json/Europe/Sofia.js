{
  "zones": {
    "Europe/Sofia": [
      "z",
      {
        "wallclock": 852076800000,
        "format": "EE%sT",
        "abbrev": "EET",
        "offset": 7200000,
        "posix": 852069600000,
        "save": 0,
        "rules": "EU"
      },
      {
        "wallclock": 662688000000,
        "format": "EE%sT",
        "abbrev": "EET",
        "offset": 7200000,
        "posix": 662680800000,
        "save": 0,
        "rules": "E-Eur"
      },
      {
        "wallclock": 401853600000,
        "format": "EE%sT",
        "abbrev": "EEST",
        "offset": 7200000,
        "posix": 401842800000,
        "save": 3600000,
        "rules": "C-Eur"
      },
      {
        "wallclock": 291769200000,
        "format": "EE%sT",
        "abbrev": "EEST",
        "offset": 7200000,
        "posix": 291762000000,
        "save": 3600000,
        "rules": "Bulg"
      },
      {
        "wallclock": -781045200000,
        "format": "EET",
        "abbrev": "EET",
        "offset": 7200000,
        "posix": -781048800000,
        "save": 0
      },
      {
        "wallclock": -788918400000,
        "format": "CET",
        "abbrev": "CET",
        "offset": 3600000,
        "posix": -788922000000,
        "save": 0
      },
      {
        "wallclock": -857250000000,
        "format": "CE%sT",
        "abbrev": "CET",
        "offset": 3600000,
        "posix": -857257200000,
        "save": 0,
        "rules": "C-Eur"
      },
      {
        "wallclock": -2369520000000,
        "format": "EET",
        "abbrev": "EET",
        "offset": 7200000,
        "posix": -2369527016000,
        "save": 0
      },
      {
        "wallclock": -2840140800000,
        "format": "IMT",
        "abbrev": "IMT",
        "offset": 7016000,
        "posix": -2840146396000,
        "save": 0
      },
      {
        "wallclock": -1.7976931348623157e+308,
        "format": "LMT",
        "abbrev": "LMT",
        "offset": 5596000,
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
    "E-Eur": [
      {
        "from": 1981,
        "to": 1.7976931348623157e+308,
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
        "from": 1996,
        "to": 1.7976931348623157e+308,
        "month": 9,
        "day": [
          0,
          -31
        ],
        "time": 0,
        "clock": "wallclock",
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
        "time": 0,
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
        "time": 0,
        "clock": "wallclock",
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
        "time": 0,
        "clock": "wallclock",
        "save": 0,
        "letter": "",
        "saved": 0
      },
      {
        "from": 1977,
        "to": 1977,
        "month": 8,
        "day": [
          0,
          -30
        ],
        "time": 0,
        "clock": "wallclock",
        "save": 0,
        "letter": "",
        "saved": 0
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
    "Bulg": [
      {
        "from": 1980,
        "to": 1982,
        "month": 3,
        "day": [
          6,
          1
        ],
        "time": 1380,
        "clock": "wallclock",
        "save": 60,
        "letter": "S",
        "saved": 0
      },
      {
        "from": 1981,
        "to": 1981,
        "month": 8,
        "day": [
          7,
          27
        ],
        "time": 120,
        "clock": "wallclock",
        "save": 0,
        "letter": "",
        "saved": 3600000
      },
      {
        "from": 1980,
        "to": 1980,
        "month": 8,
        "day": [
          7,
          29
        ],
        "time": 60,
        "clock": "wallclock",
        "save": 0,
        "letter": "",
        "saved": 3600000
      },
      {
        "from": 1979,
        "to": 1979,
        "month": 2,
        "day": [
          7,
          31
        ],
        "time": 1380,
        "clock": "wallclock",
        "save": 60,
        "letter": "S",
        "saved": 0
      },
      {
        "from": 1979,
        "to": 1979,
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
      }
    ]
  }
}