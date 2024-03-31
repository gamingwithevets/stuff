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
let n = 0
const i = setInterval(() => {
  try {
    window.initData.userInfos.user_permission.permission.usable_classwiz = 1;
    window.initData.userInfos.user_permission.permission.usable_financial = 1;
    window.initData.userInfos.user_permission.permission.usable_paid_statistics = 1;
    window.initData.userInfos.user_permission.permission.usable_paid_formula = 1;
    window.initData.userInfos.user_permission.permission.usable_handwriting = 1;
    window.initData.sharedDatas.classwiz_models.EY016 = { "name": "fx-800DE CW", "language": "de", "decimal": "[,]", "qr": "2", "background": "#3A3A3A" };
    clearInterval(i)
  } catch {
  }
  if (++n > 1000) clearInterval(i) // after 10s its probably over
}, 10)
