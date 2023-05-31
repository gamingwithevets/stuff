// ==UserScript==
// @name        Classpad VIP enabler
// @namespace   Violentmonkey Scripts
// @match       https://classpad.net/*
// @grant       none
// @version     1.0
// @author      MeowIce64
// @description 18/12/2022, 21:36:04
// ==/UserScript==
let n = 0
const i = setInterval(() => {
  try {
    Classpad.Services.UserService.canUseManifestControlledFeature = () => true
    Classpad.Services.UserService.canUsePaidFeature = () => true
    clearInterval(i)
  } catch {}
  if (++n > 200) clearInterval(i) // after 20s its probably over
}, 100)
