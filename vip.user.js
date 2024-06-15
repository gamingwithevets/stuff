// ==UserScript==
// @name        ClassPad.net Enhance
// @namespace   Violentmonkey Scripts
// @match       https://classpad.net/*
// @grant       none
// @version     1.2
// @author      pitust; sheepsheep
// @description v1.0 at 18/12/2022, 21:36:04; v1.1 at 25/03/2024, 12:45:20; v1.2 at 30/03/2024, 21:17:08
// @run-at      document-start
// @icon        https://www.google.com/s2/favicons?sz=64&domain=classpad.net
// ==/UserScript==

let emu_list = {
    "EY005": {
        "name": "fx-570/991CW",
        "language": "en",
        "decimal": "[.]",
        "qr": "2",
        "background": "#3A3A3A",
        "license": "1"
    },
    "EY001": {
        "name": "fx-82/85/350CW",
        "language": "en",
        "decimal": "[.]",
        "qr": "2",
        "background": "#3A3A3A",
        "license": "1"
    },
    "CY234": {
        "name": "fx-570/991EX",
        "language": "en",
        "decimal": "[.]",
        "qr": "1",
        "background": "#4D4D4D",
        "license": "1"
    },
    "CY230": {
        "name": "fx-82/85/350EX",
        "language": "en",
        "decimal": "[.]",
        "qr": "0",
        "background": "#525252",
        "license": "1"
    },
    "CY258": {
        "name": "fx-570/991AR X",
        "language": "ar",
        "decimal": "[.]",
        "qr": "1",
        "background": "#4D4D4D",
        "license": "1"
    },
    "CY257": {
        "name": "fx-95AR X",
        "language": "ar",
        "decimal": "[.]",
        "qr": "0",
        "background": "#525252",
        "license": "1"
    },
    "CY256": {
        "name": "fx-82AR X",
        "language": "ar",
        "decimal": "[.]",
        "qr": "0",
        "background": "#525252",
        "license": "1"
    },
    "EY044": {
        "name": "fx-8200 AU",
        "language": "en",
        "decimal": "[.]",
        "qr": "2",
        "background": "#3A3A3A",
        "license": "1"
    },
    "EY007": {
        "name": "fx-92B Secondaire",
        "language": "fr",
        "decimal": "[,]",
        "qr": "2",
        "background": "#90BCAE",
        "license": "1"
    },
    "CY247": {
        "name": "fx-92B Spéciale Collège",
        "language": "fr",
        "decimal": "[,]",
        "qr": "1",
        "background": "#6DBF9A",
        "license": "1"
    },
    "CY294": {
        "name": "fx-991CE X",
        "language": "cs",
        "decimal": "[,]",
        "qr": "1",
        "background": "#4D4D4D",
        "license": "1"
    },
    "CY291": {
        "name": "fx-82/85/350CE X",
        "language": "cs",
        "decimal": "[,]",
        "qr": "1",
        "background": "#525252",
        "license": "1"
    },
    "EY015": {
        "name": "fx-991DE CW",
        "language": "de",
        "decimal": "[,]",
        "qr": "2",
        "background": "#3A3A3A",
        "license": "1"
    },
    "EY047": {
        "name": "fx-810DE CW",
        "language": "de",
        "decimal": "[,]",
        "qr": "2",
        "background": "#3A3A3A",
        "license": "1"
    },
    "EY014": {
        "name": "fx-87DE CW",
        "language": "de",
        "decimal": "[,]",
        "qr": "2",
        "background": "#3A3A3A",
        "license": "1"
    },
    "EY012": {
        "name": "fx-82/85DE CW",
        "language": "de",
        "decimal": "[,]",
        "qr": "2",
        "background": "#3A3A3A",
        "license": "1"
    },
    "CY251": {
        "name": "fx-991DE X",
        "language": "de",
        "decimal": "[,]",
        "qr": "1",
        "background": "#4D4D4D",
        "license": "1"
    },
    "CY250": {
        "name": "fx-87DE X",
        "language": "de",
        "decimal": "[,]",
        "qr": "1",
        "background": "#525252",
        "license": "1"
    },
    "CY215": {
        "name": "fx-82/85DE X",
        "language": "de",
        "decimal": "[,]",
        "qr": "1",
        "background": "#525252",
        "license": "1"
    },
    "EY006": {
        "name": "fx-92 Collège",
        "language": "fr",
        "decimal": "[,]",
        "qr": "2",
        "background": "#90BCAE",
        "license": "1"
    },
    "CY295": {
        "name": "fx-92+ Spéciale Collège",
        "language": "fr",
        "decimal": "[,]",
        "qr": "1",
        "background": "#6DBF9A",
        "license": "1"
    },
    "EY041": {
        "name": "fx-83/85GT CW",
        "language": "en",
        "decimal": "[.]",
        "qr": "2",
        "background": "#3A3A3A",
        "license": "1"
    },
    "CY213": {
        "name": "fx-83/85GT X",
        "language": "en",
        "decimal": "[.]",
        "qr": "0",
        "background": "#525252",
        "license": "1"
    },
    "EY031": {
        "name": "fx-JP900CW",
        "language": "ja",
        "decimal": "[.]",
        "qr": "2",
        "background": "#3A3A3A",
        "license": "1"
    },
    "EY030": {
        "name": "fx-JP700CW",
        "language": "ja",
        "decimal": "[.]",
        "qr": "0",
        "background": "#3A3A3A",
        "license": "1"
    },
    "EY029": {
        "name": "fx-JP500CW",
        "language": "ja",
        "decimal": "[.]",
        "qr": "0",
        "background": "#3A3A3A",
        "license": "1"
    },
    "EY032": {
        "name": "fx-550AZ",
        "language": "ja",
        "decimal": "[.]",
        "qr": "2",
        "background": "#3A3A3A",
        "license": "1"
    },
    "CY243": {
        "name": "fx-JP900",
        "language": "ja",
        "decimal": "[.]",
        "qr": "1",
        "background": "#4D4D4D",
        "license": "1"
    },
    "CY242": {
        "name": "fx-JP700",
        "language": "ja",
        "decimal": "[.]",
        "qr": "0",
        "background": "#525252",
        "license": "1"
    },
    "CY241": {
        "name": "fx-JP500",
        "language": "ja",
        "decimal": "[.]",
        "qr": "0",
        "background": "#525252",
        "license": "1"
    },
    "CY240": {
        "name": "fx-530AZ",
        "language": "ja",
        "decimal": "[.]",
        "qr": "0",
        "background": "#4D4D4D",
        "license": "1"
    },
    "EY039": {
        "name": "fx-570/991LA CW",
        "language": "enla",
        "decimal": "[,]",
        "qr": "2",
        "background": "#3A3A3A",
        "license": "1"
    },
    "EY036": {
        "name": "fx-82LA CW",
        "language": "enla",
        "decimal": "[,]",
        "qr": "2",
        "background": "#3A3A3A",
        "license": "1"
    },
    "CY272": {
        "name": "fx-570/991LA X",
        "language": "enla",
        "decimal": "[,]",
        "qr": "1",
        "background": "#4D4D4D",
        "license": "1"
    },
    "CY270": {
        "name": "fx-82/350LA X",
        "language": "enla",
        "decimal": "[,]",
        "qr": "0",
        "background": "#525252",
        "license": "1"
    },
    "EY021": {
        "name": "fx-82NL",
        "language": "nl",
        "decimal": "[,]",
        "qr": "2",
        "background": "#0095C2",
        "license": "1"
    },
    "CY217": {
        "name": "fx-991RS X",
        "language": "ru",
        "decimal": "[,]",
        "qr": "1",
        "background": "#4D4D4D",
        "license": "1"
    },
    "CY297": {
        "name": "fx-97SG X",
        "language": "en",
        "decimal": "[.]",
        "qr": "1",
        "background": "#525252",
        "license": "1"
    },
    "EY011": {
        "name": "fx-570/991SP CW",
        "language": "es",
        "decimal": "[.]",
        "qr": "2",
        "background": "#E8E8E8",
        "license": "1"
    },
    "EY008": {
        "name": "fx-82/85SP CW",
        "language": "es",
        "decimal": "[.]",
        "qr": "2",
        "background": "#3A3A3A",
        "license": "1"
    },
    "CY268": {
        "name": "fx-570/991SP X/X II",
        "language": "es",
        "decimal": "[.]",
        "qr": "1",
        "background": "#4D4D4D",
        "license": "1"
    },
    "CY266": {
        "name": "fx-82/85/350SP X/X II",
        "language": "es",
        "decimal": "[.]",
        "qr": "0",
        "background": "#525252",
        "license": "1"
    },
    "EY023": {
        "name": "fx-880BTG",
        "language": "vn",
        "decimal": "[.]",
        "qr": "2",
        "background": "#3A3A3A",
        "license": "1"
    },
    "CY298": {
        "name": "fx-580VN X",
        "language": "vi",
        "decimal": "[.]",
        "qr": "0",
        "background": "#4D4D4D",
        "license": "1"
    },
    "EY016": {
        "name": "fx-800DE CW",
        "language": "de",
        "decimal": "[,]",
        "qr": "2",
        "background": "#3A3A3A"
    },
    "EY090": {
        "name": "Graph Light",
        "language": "fr",
        "decimal": "[,]",
        "qr": "2",
        "background": "#c7c7c7"
    }
}

let n = 0
const i = setInterval(() => {
  try {
    window.initData.userInfos.user_permission.permission.usable_classwiz = 1;
    window.initData.userInfos.user_permission.permission.usable_financial = 1;
    window.initData.userInfos.user_permission.permission.usable_paid_statistics = 1;
    window.initData.userInfos.user_permission.permission.usable_paid_formula = 1;
    window.initData.userInfos.user_permission.permission.usable_handwriting = 1;
    console.log(window.initData.sharedDatas.classwiz_models);
    for (let [model, data] of Object.entries(emu_list)) {
        if (!window.initData.sharedDatas.classwiz_models.hasOwnProperty(model)) {
            window.initData.sharedDatas.classwiz_models[model] = data;
        }
    }
    clearInterval(i)
  } catch {
  }
  if (++n > 1000) clearInterval(i) // after 10s its probably over
}, 10)
