'use strict';
// 「2010年から2015年にかけて15〜19歳の人が増えた割合の都道府県ランキング」を作成する。
const fs = require('fs');
const readline = require("readline");
const rs = fs.ReadStream('./popu-pref.csv');
const rl = readline.createInterface({'input': rs, 'output': {}});

const map = new Map(); // key:都道府県 value:集計データのオブジェクト

rl.on('line', (lineString) => {
    const columns = lineString.split(',');
    const year = parseInt(columns[0]);
    const prefecture = columns[2];
    const popu = parseInt(columns[7]);
    if (year === 2010 || year === 2015) {
        let value = map.get(prefecture);
        if (!value){
            value = {
                popu10: 0,
                popu15: 0,
                change: null
            };
        }
        if (year === 2010) {
            value.popu10 += popu;
        }
        if (year === 2015) {
            value.popu15 += popu;
        }
        map.set(prefecture, value);
        // console.log(year);
        // console.log(prefecture);
        // console.log(popu);
    }
    // console.log(lineString);
});
rl.resume();
rl.on('close', () => {
    console.log(map);
});