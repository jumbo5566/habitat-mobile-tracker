(function() {

var init_eclipse_20march2015 = function() {

// First BLUE, Solar Eclipse of  2015 Mar 20 - Northern Limit
var polyline = new google.maps.Polyline({
    path:[
        new google.maps.LatLng(   51.87296,  -45.24982),
        new google.maps.LatLng(   55.57391,  -46.79059),
        new google.maps.LatLng(   55.62445,  -44.21466),
        new google.maps.LatLng(   55.67491,  -42.99445),
        new google.maps.LatLng(   55.72541,  -42.06317),
        new google.maps.LatLng(   55.77596,  -41.28235),
        new google.maps.LatLng(   55.82655,  -40.59808),
        new google.maps.LatLng(   55.87722,  -39.98248),
        new google.maps.LatLng(   55.92793,  -39.41882),
        new google.maps.LatLng(   55.97872,  -38.89642),
        new google.maps.LatLng(   56.02956,  -38.40753),
        new google.maps.LatLng(   56.08047,  -37.94684),
        new google.maps.LatLng(   56.13170,  -37.50806),
        new google.maps.LatLng(   56.18552,  -37.07013),
        new google.maps.LatLng(   56.24202,  -36.63269),
        new google.maps.LatLng(   56.30120,  -36.19568),
        new google.maps.LatLng(   56.36308,  -35.75922),
        new google.maps.LatLng(   56.42770,  -35.32324),
        new google.maps.LatLng(   56.49508,  -34.88788),
        new google.maps.LatLng(   56.56523,  -34.45306),
        new google.maps.LatLng(   56.63817,  -34.01892),
        new google.maps.LatLng(   56.71391,  -33.58551),
        new google.maps.LatLng(   56.79247,  -33.15283),
        new google.maps.LatLng(   56.87385,  -32.72101),
        new google.maps.LatLng(   56.95808,  -32.28998),
        new google.maps.LatLng(   57.04515,  -31.85992),
        new google.maps.LatLng(   57.13508,  -31.43079),
        new google.maps.LatLng(   57.22784,  -31.00269),
        new google.maps.LatLng(   57.32349,  -30.57562),
        new google.maps.LatLng(   57.42200,  -30.14966),
        new google.maps.LatLng(   57.52338,  -29.72485),
        new google.maps.LatLng(   57.62763,  -29.30121),
        new google.maps.LatLng(   57.73474,  -28.87878),
        new google.maps.LatLng(   57.84471,  -28.45770),
        new google.maps.LatLng(   57.95752,  -28.03802),
        new google.maps.LatLng(   58.07317,  -27.61969),
        new google.maps.LatLng(   58.19164,  -27.20282),
        new google.maps.LatLng(   58.31292,  -26.78748),
        new google.maps.LatLng(   58.43700,  -26.37366),
        new google.maps.LatLng(   58.56387,  -25.96143),
        new google.maps.LatLng(   58.69349,  -25.55090),
        new google.maps.LatLng(   58.82584,  -25.14203),
        new google.maps.LatLng(   58.96091,  -24.73486),
        new google.maps.LatLng(   59.09867,  -24.32953),
        new google.maps.LatLng(   59.23906,  -23.92603),
        new google.maps.LatLng(   59.38208,  -23.52435),
        new google.maps.LatLng(   59.52769,  -23.12457),
        new google.maps.LatLng(   59.67588,  -22.72668),
        new google.maps.LatLng(   59.82661,  -22.33081),
        new google.maps.LatLng(   59.97979,  -21.93689),
        new google.maps.LatLng(   60.13546,  -21.54504),
        new google.maps.LatLng(   60.29354,  -21.15521),
        new google.maps.LatLng(   60.45399,  -20.76746),
        new google.maps.LatLng(   60.61679,  -20.38177),
        new google.maps.LatLng(   60.78188,  -19.99823),
        new google.maps.LatLng(   60.94923,  -19.61676),
        new google.maps.LatLng(   61.11880,  -19.23743),
        new google.maps.LatLng(   61.29054,  -18.86023),
        new google.maps.LatLng(   61.46442,  -18.48523),
        new google.maps.LatLng(   61.64037,  -18.11243),
        new google.maps.LatLng(   61.81835,  -17.74182),
        new google.maps.LatLng(   61.99833,  -17.37329),
        new google.maps.LatLng(   62.18028,  -17.00702),
        new google.maps.LatLng(   62.36412,  -16.64288),
        new google.maps.LatLng(   62.54984,  -16.28094),
        new google.maps.LatLng(   62.73736,  -15.92114),
        new google.maps.LatLng(   62.92667,  -15.56354),
        new google.maps.LatLng(   63.11772,  -15.20807),
        new google.maps.LatLng(   63.31046,  -14.85474),
        new google.maps.LatLng(   63.50485,  -14.50354),
        new google.maps.LatLng(   63.70085,  -14.15448),
        new google.maps.LatLng(   63.89841,  -13.80750),
        new google.maps.LatLng(   64.09750,  -13.46259),
        new google.maps.LatLng(   64.29811,  -13.11981),
        new google.maps.LatLng(   64.50014,  -12.77905),
        new google.maps.LatLng(   64.70358,  -12.44031),
        new google.maps.LatLng(   64.90840,  -12.10358),
        new google.maps.LatLng(   65.11457,  -11.76886),
        new google.maps.LatLng(   65.32204,  -11.43610),
        new google.maps.LatLng(   65.53078,  -11.10529),
        new google.maps.LatLng(   65.74077,  -10.77643),
        new google.maps.LatLng(   65.95197,  -10.44946),
        new google.maps.LatLng(   66.16434,  -10.12439),
        new google.maps.LatLng(   66.37784,   -9.80121),
        new google.maps.LatLng(   66.59245,   -9.47986),
        new google.maps.LatLng(   66.80814,   -9.16034),
        new google.maps.LatLng(   67.02487,   -8.84259),
        new google.maps.LatLng(   67.24265,   -8.52667),
        new google.maps.LatLng(   67.46142,   -8.21246),
        new google.maps.LatLng(   67.68117,   -7.90002),
        new google.maps.LatLng(   67.90186,   -7.58936),
        new google.maps.LatLng(   68.12348,   -7.28040),
        new google.maps.LatLng(   68.34599,   -6.97308),
        new google.maps.LatLng(   68.56940,   -6.66754),
        new google.maps.LatLng(   68.79365,   -6.36359),
        new google.maps.LatLng(   69.01873,   -6.06134),
        new google.maps.LatLng(   69.24462,   -5.76074),
        new google.maps.LatLng(   69.47130,   -5.46173),
        new google.maps.LatLng(   69.69875,   -5.16443),
        new google.maps.LatLng(   69.92697,   -4.86877),
        new google.maps.LatLng(   70.15592,   -4.57465),
        new google.maps.LatLng(   70.38560,   -4.28223),
        new google.maps.LatLng(   70.61597,   -3.99139),
        new google.maps.LatLng(   70.84704,   -3.70221),
        new google.maps.LatLng(   71.07877,   -3.41467),
        new google.maps.LatLng(   71.31115,   -3.12872),
        new google.maps.LatLng(   71.54418,   -2.84454),
        new google.maps.LatLng(   71.77783,   -2.56201),
        new google.maps.LatLng(   72.01207,   -2.28113),
        new google.maps.LatLng(   72.24693,   -2.00201),
        new google.maps.LatLng(   72.48237,   -1.72461),
        new google.maps.LatLng(   72.71838,   -1.44904),
        new google.maps.LatLng(   72.95495,   -1.17529),
        new google.maps.LatLng(   73.19208,   -0.90338),
        new google.maps.LatLng(   73.42973,   -0.63336),
        new google.maps.LatLng(   73.66790,   -0.36530),
        new google.maps.LatLng(   73.90659,   -0.09924),
        new google.maps.LatLng(   74.14578,    0.16467),
        new google.maps.LatLng(   74.38548,    0.42645),
        new google.maps.LatLng(   74.62565,    0.68604),
        new google.maps.LatLng(   74.86629,    0.94324),
        new google.maps.LatLng(   75.10739,    1.19806),
        new google.maps.LatLng(   75.34895,    1.45038),
        new google.maps.LatLng(   75.59095,    1.70007),
        new google.maps.LatLng(   75.83339,    1.94702),
        new google.maps.LatLng(   76.07624,    2.19104),
        new google.maps.LatLng(   76.31953,    2.43195),
        new google.maps.LatLng(   76.56319,    2.66974),
        new google.maps.LatLng(   76.80725,    2.90411),
        new google.maps.LatLng(   77.05171,    3.13483),
        new google.maps.LatLng(   77.29655,    3.36169),
        new google.maps.LatLng(   77.54175,    3.58453),
        new google.maps.LatLng(   77.78729,    3.80310),
        new google.maps.LatLng(   78.03320,    4.01703),
        new google.maps.LatLng(   78.27943,    4.22607),
        new google.maps.LatLng(   78.52597,    4.42981),
        new google.maps.LatLng(   78.77286,    4.62787),
        new google.maps.LatLng(   79.02006,    4.81989),
        new google.maps.LatLng(   79.26755,    5.00537),
        new google.maps.LatLng(   79.51531,    5.18390),
        new google.maps.LatLng(   79.76336,    5.35480),
        new google.maps.LatLng(   80.01166,    5.51746),
        new google.maps.LatLng(   80.26020,    5.67120),
        new google.maps.LatLng(   80.50897,    5.81525),
        new google.maps.LatLng(   80.75788,    5.94873),
        new google.maps.LatLng(   81.00711,    6.07086),
        new google.maps.LatLng(   81.25614,    6.18024),
        new google.maps.LatLng(   81.50585,    6.27618),
        new google.maps.LatLng(   81.75579,    6.35699),
        new google.maps.LatLng(   82.00541,    6.42108),
        new google.maps.LatLng(   82.25499,    6.46680),
        new google.maps.LatLng(   82.50471,    6.49237),
        new google.maps.LatLng(   82.75486,    6.49561),
        new google.maps.LatLng(   83.00430,    6.47388),
        new google.maps.LatLng(   83.25406,    6.42413),
        new google.maps.LatLng(   83.50369,    6.34332),
        new google.maps.LatLng(   83.75852,    6.22443),
        new google.maps.LatLng(   84.02412,    6.05615),
        new google.maps.LatLng(   84.30194,    5.82458),
        new google.maps.LatLng(   84.59392,    5.50989),
        new google.maps.LatLng(   84.90244,    5.08344),
        new google.maps.LatLng(   85.23077,    4.50122),
        new google.maps.LatLng(   85.58321,    3.69391),
        new google.maps.LatLng(   85.96605,    2.54163),
        new google.maps.LatLng(   86.38892,    0.81763),
        new google.maps.LatLng(   86.86777,   -1.97223),
        new google.maps.LatLng(   87.43336,   -7.19788),
        new google.maps.LatLng(   88.16220,  -21.30188),
        new google.maps.LatLng(   88.63130,  -53.04840),
        new google.maps.LatLng(   87.66375,  111.50092)
    ],
    strokeColor: "#3300FF",
    strokeWeight: 2,
    strokeOpacity: 0.65,
    clickable: false,
    map: map
});

// Second BLUE, Solar Eclipse of  2015 Mar 20 - Southern Limit
var polyline = new google.maps.Polyline({
    path:[
        new google.maps.LatLng(   51.87296,  -45.24982),
        new google.maps.LatLng(   51.89054,  -41.70398),
        new google.maps.LatLng(   51.92660,  -40.46918),
        new google.maps.LatLng(   51.96506,  -39.52728),
        new google.maps.LatLng(   52.00479,  -38.73785),
        new google.maps.LatLng(   52.04535,  -38.04602),
        new google.maps.LatLng(   52.08651,  -37.42352),
        new google.maps.LatLng(   52.12815,  -36.85370),
        new google.maps.LatLng(   52.17017,  -36.32544),
        new google.maps.LatLng(   52.21252,  -35.83112),
        new google.maps.LatLng(   52.25514,  -35.36523),
        new google.maps.LatLng(   52.29801,  -34.92365),
        new google.maps.LatLng(   52.34110,  -34.50299),
        new google.maps.LatLng(   52.38449,  -34.09979),
        new google.maps.LatLng(   52.42988,  -33.69708),
        new google.maps.LatLng(   52.47735,  -33.29462),
        new google.maps.LatLng(   52.52688,  -32.89233),
        new google.maps.LatLng(   52.57852,  -32.49030),
        new google.maps.LatLng(   52.63226,  -32.08856),
        new google.maps.LatLng(   52.68812,  -31.68707),
        new google.maps.LatLng(   52.74613,  -31.28583),
        new google.maps.LatLng(   52.80630,  -30.88495),
        new google.maps.LatLng(   52.86862,  -30.48438),
        new google.maps.LatLng(   52.93315,  -30.08423),
        new google.maps.LatLng(   52.99986,  -29.68439),
        new google.maps.LatLng(   53.06878,  -29.28491),
        new google.maps.LatLng(   53.13992,  -28.88586),
        new google.maps.LatLng(   53.21330,  -28.48730),
        new google.maps.LatLng(   53.28891,  -28.08917),
        new google.maps.LatLng(   53.36678,  -27.69159),
        new google.maps.LatLng(   53.44691,  -27.29449),
        new google.maps.LatLng(   53.52929,  -26.89795),
        new google.maps.LatLng(   53.61394,  -26.50195),
        new google.maps.LatLng(   53.70088,  -26.10651),
        new google.maps.LatLng(   53.79010,  -25.71173),
        new google.maps.LatLng(   53.88159,  -25.31757),
        new google.maps.LatLng(   53.97537,  -24.92407),
        new google.maps.LatLng(   54.07146,  -24.53125),
        new google.maps.LatLng(   54.16981,  -24.13916),
        new google.maps.LatLng(   54.27045,  -23.74780),
        new google.maps.LatLng(   54.37337,  -23.35724),
        new google.maps.LatLng(   54.47857,  -22.96747),
        new google.maps.LatLng(   54.58601,  -22.57855),
        new google.maps.LatLng(   54.69573,  -22.19049),
        new google.maps.LatLng(   54.80769,  -21.80322),
        new google.maps.LatLng(   54.92193,  -21.41687),
        new google.maps.LatLng(   55.03839,  -21.03143),
        new google.maps.LatLng(   55.15707,  -20.64691),
        new google.maps.LatLng(   55.27797,  -20.26337),
        new google.maps.LatLng(   55.40104,  -19.88080),
        new google.maps.LatLng(   55.52631,  -19.49921),
        new google.maps.LatLng(   55.65374,  -19.11865),
        new google.maps.LatLng(   55.78332,  -18.73914),
        new google.maps.LatLng(   55.91502,  -18.36066),
        new google.maps.LatLng(   56.04881,  -17.98322),
        new google.maps.LatLng(   56.18472,  -17.60687),
        new google.maps.LatLng(   56.32268,  -17.23157),
        new google.maps.LatLng(   56.46268,  -16.85736),
        new google.maps.LatLng(   56.60471,  -16.48431),
        new google.maps.LatLng(   56.74871,  -16.11237),
        new google.maps.LatLng(   56.89468,  -15.74152),
        new google.maps.LatLng(   57.04259,  -15.37183),
        new google.maps.LatLng(   57.19241,  -15.00323),
        new google.maps.LatLng(   57.34412,  -14.63574),
        new google.maps.LatLng(   57.49771,  -14.26941),
        new google.maps.LatLng(   57.65310,  -13.90424),
        new google.maps.LatLng(   57.81030,  -13.54010),
        new google.maps.LatLng(   57.96928,  -13.17712),
        new google.maps.LatLng(   58.13001,  -12.81525),
        new google.maps.LatLng(   58.29244,  -12.45447),
        new google.maps.LatLng(   58.45654,  -12.09485),
        new google.maps.LatLng(   58.62229,  -11.73627),
        new google.maps.LatLng(   58.78965,  -11.37872),
        new google.maps.LatLng(   58.95861,  -11.02228),
        new google.maps.LatLng(   59.12913,  -10.66687),
        new google.maps.LatLng(   59.30117,  -10.31250),
        new google.maps.LatLng(   59.47470,   -9.95905),
        new google.maps.LatLng(   59.64970,   -9.60663),
        new google.maps.LatLng(   59.82613,   -9.25519),
        new google.maps.LatLng(   60.00397,   -8.90466),
        new google.maps.LatLng(   60.18319,   -8.55505),
        new google.maps.LatLng(   60.36374,   -8.20636),
        new google.maps.LatLng(   60.54560,   -7.85846),
        new google.maps.LatLng(   60.72875,   -7.51141),
        new google.maps.LatLng(   60.91316,   -7.16516),
        new google.maps.LatLng(   61.09878,   -6.81970),
        new google.maps.LatLng(   61.28561,   -6.47498),
        new google.maps.LatLng(   61.47360,   -6.13092),
        new google.maps.LatLng(   61.66273,   -5.78754),
        new google.maps.LatLng(   61.85298,   -5.44476),
        new google.maps.LatLng(   62.04432,   -5.10260),
        new google.maps.LatLng(   62.23672,   -4.76099),
        new google.maps.LatLng(   62.43016,   -4.41992),
        new google.maps.LatLng(   62.62460,   -4.07928),
        new google.maps.LatLng(   62.82005,   -3.73914),
        new google.maps.LatLng(   63.01643,   -3.39935),
        new google.maps.LatLng(   63.21376,   -3.05994),
        new google.maps.LatLng(   63.41200,   -2.72076),
        new google.maps.LatLng(   63.61114,   -2.38190),
        new google.maps.LatLng(   63.81115,   -2.04327),
        new google.maps.LatLng(   64.01200,   -1.70477),
        new google.maps.LatLng(   64.21368,   -1.36639),
        new google.maps.LatLng(   64.41616,   -1.02814),
        new google.maps.LatLng(   64.61943,   -0.68988),
        new google.maps.LatLng(   64.82347,   -0.35156),
        new google.maps.LatLng(   65.02825,   -0.01318),
        new google.maps.LatLng(   65.23376,    0.32532),
        new google.maps.LatLng(   65.43998,    0.66400),
        new google.maps.LatLng(   65.64690,    1.00287),
        new google.maps.LatLng(   65.85448,    1.34210),
        new google.maps.LatLng(   66.06271,    1.68164),
        new google.maps.LatLng(   66.27158,    2.02161),
        new google.maps.LatLng(   66.48108,    2.36200),
        new google.maps.LatLng(   66.69118,    2.70294),
        new google.maps.LatLng(   66.90188,    3.04443),
        new google.maps.LatLng(   67.11317,    3.38654),
        new google.maps.LatLng(   67.32500,    3.72937),
        new google.maps.LatLng(   67.53738,    4.07294),
        new google.maps.LatLng(   67.75029,    4.41736),
        new google.maps.LatLng(   67.96374,    4.76270),
        new google.maps.LatLng(   68.17769,    5.10895),
        new google.maps.LatLng(   68.39214,    5.45624),
        new google.maps.LatLng(   68.60705,    5.80463),
        new google.maps.LatLng(   68.82243,    6.15417),
        new google.maps.LatLng(   69.03829,    6.50494),
        new google.maps.LatLng(   69.25458,    6.85706),
        new google.maps.LatLng(   69.47131,    7.21057),
        new google.maps.LatLng(   69.68847,    7.56555),
        new google.maps.LatLng(   69.90604,    7.92206),
        new google.maps.LatLng(   70.12401,    8.28021),
        new google.maps.LatLng(   70.34237,    8.64014),
        new google.maps.LatLng(   70.56111,    9.00183),
        new google.maps.LatLng(   70.78023,    9.36542),
        new google.maps.LatLng(   70.99969,    9.73102),
        new google.maps.LatLng(   71.21953,   10.09869),
        new google.maps.LatLng(   71.43970,   10.46857),
        new google.maps.LatLng(   71.66019,   10.84076),
        new google.maps.LatLng(   71.88102,   11.21533),
        new google.maps.LatLng(   72.10216,   11.59241),
        new google.maps.LatLng(   72.32360,   11.97217),
        new google.maps.LatLng(   72.54533,   12.35461),
        new google.maps.LatLng(   72.76736,   12.73999),
        new google.maps.LatLng(   72.98968,   13.12836),
        new google.maps.LatLng(   73.21225,   13.51984),
        new google.maps.LatLng(   73.43507,   13.91461),
        new google.maps.LatLng(   73.65815,   14.31281),
        new google.maps.LatLng(   73.88148,   14.71460),
        new google.maps.LatLng(   74.10505,   15.12012),
        new google.maps.LatLng(   74.32886,   15.52960),
        new google.maps.LatLng(   74.55287,   15.94318),
        new google.maps.LatLng(   74.77710,   16.36102),
        new google.maps.LatLng(   75.00151,   16.78333),
        new google.maps.LatLng(   75.22612,   17.21033),
        new google.maps.LatLng(   75.45092,   17.64227),
        new google.maps.LatLng(   75.67590,   18.07935),
        new google.maps.LatLng(   75.90105,   18.52179),
        new google.maps.LatLng(   76.12633,   18.96991),
        new google.maps.LatLng(   76.35175,   19.42389),
        new google.maps.LatLng(   76.57732,   19.88409),
        new google.maps.LatLng(   76.80302,   20.35083),
        new google.maps.LatLng(   77.02883,   20.82440),
        new google.maps.LatLng(   77.25473,   21.30518),
        new google.maps.LatLng(   77.48073,   21.79358),
        new google.maps.LatLng(   77.70682,   22.28986),
        new google.maps.LatLng(   77.93294,   22.79462),
        new google.maps.LatLng(   78.15912,   23.30817),
        new google.maps.LatLng(   78.38535,   23.83112),
        new google.maps.LatLng(   78.61158,   24.36395),
        new google.maps.LatLng(   78.83783,   24.90729),
        new google.maps.LatLng(   79.06406,   25.46161),
        new google.maps.LatLng(   79.29029,   26.02771),
        new google.maps.LatLng(   79.51645,   26.60626),
        new google.maps.LatLng(   79.74255,   27.19806),
        new google.maps.LatLng(   79.96853,   27.80396),
        new google.maps.LatLng(   80.19443,   28.42480),
        new google.maps.LatLng(   80.42005,   29.06134),
        new google.maps.LatLng(   80.64555,   29.71509),
        new google.maps.LatLng(   80.87107,   30.38776),
        new google.maps.LatLng(   81.09606,   31.07910),
        new google.maps.LatLng(   81.32071,   31.79126),
        new google.maps.LatLng(   81.54515,   32.52631),
        new google.maps.LatLng(   81.76958,   33.28687),
        new google.maps.LatLng(   81.99352,   34.07336),
        new google.maps.LatLng(   82.21712,   34.88885),
        new google.maps.LatLng(   82.44281,   35.74518),
        new google.maps.LatLng(   82.67596,   36.66852),
        new google.maps.LatLng(   82.91739,   37.67029),
        new google.maps.LatLng(   83.16814,   38.76526),
        new google.maps.LatLng(   83.42921,   39.97217),
        new google.maps.LatLng(   83.70220,   41.31647),
        new google.maps.LatLng(   83.98880,   42.83228),
        new google.maps.LatLng(   84.29142,   44.56824),
        new google.maps.LatLng(   84.61311,   46.59558),
        new google.maps.LatLng(   84.95811,   49.02454),
        new google.maps.LatLng(   85.33260,   52.03912),
        new google.maps.LatLng(   85.74625,   55.97827),
        new google.maps.LatLng(   86.21585,   61.57147),
        new google.maps.LatLng(   86.77829,   70.93030),
        new google.maps.LatLng(   87.66375,  111.50092),
    ],
    strokeColor: "#3300FF",
    strokeWeight: 2,
    strokeOpacity: 0.65,
    clickable: false,
    map: map
});

// First RED, Solar Eclipse of  2015 Mar 20 - Central Line
var polyline = new google.maps.Polyline({
    path:[
        new google.maps.LatLng(   53.63452,  -45.97729),
        new google.maps.LatLng(   53.67035,  -42.92926),
        new google.maps.LatLng(   53.71337,  -41.68951),
        new google.maps.LatLng(   53.75761,  -40.74683),
        new google.maps.LatLng(   53.80253,  -39.95789),
        new google.maps.LatLng(   53.84789,  -39.26685),
        new google.maps.LatLng(   53.89358,  -38.64551),
        new google.maps.LatLng(   53.93953,  -38.07672),
        new google.maps.LatLng(   53.98570,  -37.54968),
        new google.maps.LatLng(   54.03207,  -37.05652),
        new google.maps.LatLng(   54.07860,  -36.59186),
        new google.maps.LatLng(   54.12530,  -36.15143),
        new google.maps.LatLng(   54.17213,  -35.73199),
        new google.maps.LatLng(   54.22120,  -35.31335),
        new google.maps.LatLng(   54.27256,  -34.89502),
        new google.maps.LatLng(   54.32628,  -34.47705),
        new google.maps.LatLng(   54.38233,  -34.05933),
        new google.maps.LatLng(   54.44076,  -33.64203),
        new google.maps.LatLng(   54.50157,  -33.22498),
        new google.maps.LatLng(   54.56481,  -32.80841),
        new google.maps.LatLng(   54.63046,  -32.39233),
        new google.maps.LatLng(   54.69854,  -31.97668),
        new google.maps.LatLng(   54.76907,  -31.56152),
        new google.maps.LatLng(   54.84206,  -31.14685),
        new google.maps.LatLng(   54.91754,  -30.73279),
        new google.maps.LatLng(   54.99549,  -30.31927),
        new google.maps.LatLng(   55.07594,  -29.90643),
        new google.maps.LatLng(   55.15889,  -29.49420),
        new google.maps.LatLng(   55.24437,  -29.08270),
        new google.maps.LatLng(   55.33234,  -28.67194),
        new google.maps.LatLng(   55.42284,  -28.26190),
        new google.maps.LatLng(   55.51588,  -27.85266),
        new google.maps.LatLng(   55.61145,  -27.44427),
        new google.maps.LatLng(   55.70954,  -27.03674),
        new google.maps.LatLng(   55.81016,  -26.63007),
        new google.maps.LatLng(   55.91331,  -26.22443),
        new google.maps.LatLng(   56.01896,  -25.81976),
        new google.maps.LatLng(   56.12713,  -25.41602),
        new google.maps.LatLng(   56.23783,  -25.01337),
        new google.maps.LatLng(   56.35102,  -24.61176),
        new google.maps.LatLng(   56.46671,  -24.21124),
        new google.maps.LatLng(   56.58487,  -23.81189),
        new google.maps.LatLng(   56.70550,  -23.41376),
        new google.maps.LatLng(   56.82857,  -23.01678),
        new google.maps.LatLng(   56.95408,  -22.62103),
        new google.maps.LatLng(   57.08203,  -22.22656),
        new google.maps.LatLng(   57.21235,  -21.83337),
        new google.maps.LatLng(   57.34505,  -21.44153),
        new google.maps.LatLng(   57.48011,  -21.05096),
        new google.maps.LatLng(   57.61752,  -20.66174),
        new google.maps.LatLng(   57.75723,  -20.27393),
        new google.maps.LatLng(   57.89922,  -19.88757),
        new google.maps.LatLng(   58.04344,  -19.50256),
        new google.maps.LatLng(   58.18991,  -19.11908),
        new google.maps.LatLng(   58.33857,  -18.73700),
        new google.maps.LatLng(   58.48940,  -18.35638),
        new google.maps.LatLng(   58.64237,  -17.97729),
        new google.maps.LatLng(   58.79745,  -17.59967),
        new google.maps.LatLng(   58.95459,  -17.22351),
        new google.maps.LatLng(   59.11377,  -16.84888),
        new google.maps.LatLng(   59.27495,  -16.47577),
        new google.maps.LatLng(   59.43812,  -16.10419),
        new google.maps.LatLng(   59.60321,  -15.73407),
        new google.maps.LatLng(   59.77021,  -15.36548),
        new google.maps.LatLng(   59.93909,  -14.99841),
        new google.maps.LatLng(   60.10977,  -14.63281),
        new google.maps.LatLng(   60.28224,  -14.26874),
        new google.maps.LatLng(   60.45649,  -13.90613),
        new google.maps.LatLng(   60.63244,  -13.54498),
        new google.maps.LatLng(   60.81011,  -13.18536),
        new google.maps.LatLng(   60.98940,  -12.82715),
        new google.maps.LatLng(   61.17030,  -12.47034),
        new google.maps.LatLng(   61.35279,  -12.11499),
        new google.maps.LatLng(   61.53682,  -11.76099),
        new google.maps.LatLng(   61.72237,  -11.40839),
        new google.maps.LatLng(   61.90938,  -11.05713),
        new google.maps.LatLng(   62.09785,  -10.70715),
        new google.maps.LatLng(   62.28772,  -10.35852),
        new google.maps.LatLng(   62.47894,  -10.01117),
        new google.maps.LatLng(   62.67151,   -9.66504),
        new google.maps.LatLng(   62.86541,   -9.32019),
        new google.maps.LatLng(   63.06057,   -8.97644),
        new google.maps.LatLng(   63.25697,   -8.63385),
        new google.maps.LatLng(   63.45459,   -8.29242),
        new google.maps.LatLng(   63.65341,   -7.95209),
        new google.maps.LatLng(   63.85337,   -7.61279),
        new google.maps.LatLng(   64.05447,   -7.27454),
        new google.maps.LatLng(   64.25665,   -6.93719),
        new google.maps.LatLng(   64.45991,   -6.60089),
        new google.maps.LatLng(   64.66422,   -6.26544),
        new google.maps.LatLng(   64.86954,   -5.93091),
        new google.maps.LatLng(   65.07586,   -5.59717),
        new google.maps.LatLng(   65.28316,   -5.26422),
        new google.maps.LatLng(   65.49139,   -4.93207),
        new google.maps.LatLng(   65.70054,   -4.60059),
        new google.maps.LatLng(   65.91059,   -4.26978),
        new google.maps.LatLng(   66.12151,   -3.93964),
        new google.maps.LatLng(   66.33329,   -3.61005),
        new google.maps.LatLng(   66.54590,   -3.28107),
        new google.maps.LatLng(   66.75932,   -2.95258),
        new google.maps.LatLng(   66.97353,   -2.62451),
        new google.maps.LatLng(   67.18851,   -2.29688),
        new google.maps.LatLng(   67.40424,   -1.96960),
        new google.maps.LatLng(   67.62072,   -1.64270),
        new google.maps.LatLng(   67.83792,   -1.31604),
        new google.maps.LatLng(   68.05582,   -0.98962),
        new google.maps.LatLng(   68.27441,   -0.66339),
        new google.maps.LatLng(   68.49366,   -0.33734),
        new google.maps.LatLng(   68.71355,   -0.01141),
        new google.maps.LatLng(   68.93409,    0.31451),
        new google.maps.LatLng(   69.15525,    0.64038),
        new google.maps.LatLng(   69.37701,    0.96631),
        new google.maps.LatLng(   69.59938,    1.29236),
        new google.maps.LatLng(   69.82234,    1.61847),
        new google.maps.LatLng(   70.04585,    1.94482),
        new google.maps.LatLng(   70.26993,    2.27142),
        new google.maps.LatLng(   70.49455,    2.59821),
        new google.maps.LatLng(   70.71969,    2.92542),
        new google.maps.LatLng(   70.94536,    3.25299),
        new google.maps.LatLng(   71.17154,    3.58099),
        new google.maps.LatLng(   71.39822,    3.90948),
        new google.maps.LatLng(   71.62540,    4.23853),
        new google.maps.LatLng(   71.85303,    4.56818),
        new google.maps.LatLng(   72.08116,    4.89844),
        new google.maps.LatLng(   72.30974,    5.22949),
        new google.maps.LatLng(   72.53876,    5.56122),
        new google.maps.LatLng(   72.76825,    5.89386),
        new google.maps.LatLng(   72.99816,    6.22736),
        new google.maps.LatLng(   73.22850,    6.56177),
        new google.maps.LatLng(   73.45925,    6.89722),
        new google.maps.LatLng(   73.69043,    7.23376),
        new google.maps.LatLng(   73.92200,    7.57147),
        new google.maps.LatLng(   74.15396,    7.91034),
        new google.maps.LatLng(   74.38632,    8.25049),
        new google.maps.LatLng(   74.61905,    8.59198),
        new google.maps.LatLng(   74.85215,    8.93494),
        new google.maps.LatLng(   75.08562,    9.27942),
        new google.maps.LatLng(   75.31945,    9.62549),
        new google.maps.LatLng(   75.55362,    9.97314),
        new google.maps.LatLng(   75.78816,   10.32263),
        new google.maps.LatLng(   76.02304,   10.67395),
        new google.maps.LatLng(   76.25826,   11.02728),
        new google.maps.LatLng(   76.49379,   11.38263),
        new google.maps.LatLng(   76.72965,   11.74017),
        new google.maps.LatLng(   76.96584,   12.09991),
        new google.maps.LatLng(   77.20233,   12.46210),
        new google.maps.LatLng(   77.43915,   12.82678),
        new google.maps.LatLng(   77.67625,   13.19415),
        new google.maps.LatLng(   77.91364,   13.56433),
        new google.maps.LatLng(   78.15133,   13.93738),
        new google.maps.LatLng(   78.38929,   14.31360),
        new google.maps.LatLng(   78.62753,   14.69299),
        new google.maps.LatLng(   78.86605,   15.07593),
        new google.maps.LatLng(   79.10484,   15.46252),
        new google.maps.LatLng(   79.34387,   15.85297),
        new google.maps.LatLng(   79.58318,   16.24750),
        new google.maps.LatLng(   79.82272,   16.64642),
        new google.maps.LatLng(   80.06251,   17.04999),
        new google.maps.LatLng(   80.30254,   17.45844),
        new google.maps.LatLng(   80.54279,   17.87219),
        new google.maps.LatLng(   80.78318,   18.29138),
        new google.maps.LatLng(   81.02386,   18.71667),
        new google.maps.LatLng(   81.26501,   19.14899),
        new google.maps.LatLng(   81.50613,   19.58777),
        new google.maps.LatLng(   81.74741,   20.03394),
        new google.maps.LatLng(   81.98909,   20.48859),
        new google.maps.LatLng(   82.23066,   20.95148),
        new google.maps.LatLng(   82.47240,   21.42377),
        new google.maps.LatLng(   82.71451,   21.90704),
        new google.maps.LatLng(   82.95660,   22.40125),
        new google.maps.LatLng(   83.19903,   22.90820),
        new google.maps.LatLng(   83.45036,   23.44806),
        new google.maps.LatLng(   83.71204,   24.02734),
        new google.maps.LatLng(   83.98547,   24.65369),
        new google.maps.LatLng(   84.27238,   25.33722),
        new google.maps.LatLng(   84.57509,   26.09180),
        new google.maps.LatLng(   84.89641,   26.93732),
        new google.maps.LatLng(   85.24041,   27.90283),
        new google.maps.LatLng(   85.61264,   29.03442),
        new google.maps.LatLng(   86.02140,   30.41034),
        new google.maps.LatLng(   86.48034,   32.17902),
        new google.maps.LatLng(   87.01443,   34.67609),
        new google.maps.LatLng(   87.68029,   38.93298),
        new google.maps.LatLng(   88.70470,   52.56244),
        new google.maps.LatLng(   89.38753,   97.49750),
    ],
    strokeColor: "#FF0000",
    strokeWeight: 2,
    strokeOpacity: 0.65,
    clickable: false,
    map: map
});

// YELLOW Solar Eclipse Time Line:  9.3333  1
var polyline = new google.maps.Polyline({
    path:[
new google.maps.LatLng( 56.78481,  -33.19440),
new google.maps.LatLng( 54.61831,  -22.46344)
    ],
    strokeColor: "#FFFF00",
    strokeWeight: 3,
    strokeOpacity: 0.65,
    clickable: false,
    map: map
});

// YELLOW Solar Eclipse Time Line:  9.5000  2
var polyline = new google.maps.Polyline({
    path:[
new google.maps.LatLng( 60.04075,  -21.78253),
new google.maps.LatLng( 57.62815,  -13.96246)
    ],
    strokeColor: "#FFFF00",
    strokeWeight: 3,
    strokeOpacity: 0.65,
    clickable: false,
    map: map
});

// YELLOW Solar Eclipse Time Line:  9.6667  3
var polyline = new google.maps.Polyline({
    path:[
new google.maps.LatLng( 63.65408,  -14.23737),
new google.maps.LatLng( 60.94490,   -7.10590)
    ],
    strokeColor: "#FFFF00",
    strokeWeight: 3,
    strokeOpacity: 0.65,
    clickable: false,
    map: map
});

// YELLOW Solar Eclipse Time Line:  9.8333  4
var polyline = new google.maps.Polyline({
    path:[
new google.maps.LatLng( 67.79971,   -7.73279),
new google.maps.LatLng( 64.67683,   -0.59454)
    ],
    strokeColor: "#FFFF00",
    strokeWeight: 3,
    strokeOpacity: 0.65,
    clickable: false,
    map: map
});

// YELLOW Solar Eclipse Time Line: 10.0000  5
var polyline = new google.maps.Polyline({
    path:[
new google.maps.LatLng( 72.86018,   -1.28467),
new google.maps.LatLng( 69.04364,    6.51367)
    ],
    strokeColor: "#FFFF00",
    strokeWeight: 3,
    strokeOpacity: 0.65,
    clickable: false,
    map: map
});

// YELLOW Solar Eclipse Time Line: 10.1667  6
var polyline = new google.maps.Polyline({
    path:[
new google.maps.LatLng( 80.15559,    5.60767),
new google.maps.LatLng( 74.58987,   16.01190)
    ],
    strokeColor: "#FFFF00",
    strokeWeight: 3,
    strokeOpacity: 0.65,
    clickable: false,
    map: map
});

var ebox = new google.maps.InfoWindow({
});

google.maps.event.addListener(map, 'click', function(event) {
    if(event.latLng) {
        var html = loc_circ(event.latLng.lat(), event.latLng.lng());
        ebox.setContent(html);
        ebox.setPosition(event.latLng);
        ebox.open(map);
    }
});

}; // end of function


var timer_eclipse_20march2015 = setInterval(function() {
    if(map) {
        init_eclipse_20march2015();
        clearInterval(timer_eclipse_20march2015);
    }
}, 2000);

})();

var elements = new Array(
//*** #0U - Input Besselian Elements here
2457101.907486,  10.0,  -4.0,   4.0,    67.6,
   -0.16829461,    0.55373979,    0.00000579,   -0.00000936,
    0.93905246,    0.17864749,   -0.00005412,   -0.00000293,
   -0.21267051,    0.01603609,   -0.00000001,
  328.10678101,   15.00441360,    0.00000049,
    0.53595018,    0.00002651,   -0.00001295,
   -0.01015634,    0.00002638,   -0.00001289,
    0.00469504,    0.00467165
);
