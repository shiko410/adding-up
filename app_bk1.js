'use strict';
// 「2010年から2015年にかけて15〜19歳の人が増えた割合の都道府県ランキング」を作成する。
const fs = require('fs');
const readline = require("readline");
const rs = fs.ReadStream('./popu-pref.csv');
const rl = readline.createInterface({'input': rs, 'output': {}});

rl.on('line', (lineString) => {
    console.log(lineString);
});
rl.resume();
