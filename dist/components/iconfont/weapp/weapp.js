(wx.webpackJsonp=wx.webpackJsonp||[]).push([[17],{"78":function(e,t,r){"use strict";Component({"properties":{"name":{"type":String},"color":{"type":null,"observer":function observer(e){this.setData({"colors":this.fixColor(),"isStr":"string"==typeof e})}},"size":{"type":Number,"value":18,"observer":function observer(e){this.setData({"svgSize":e/750*wx.getSystemInfoSync().windowWidth})}}},"data":{"colors":"","svgSize":.024*wx.getSystemInfoSync().windowWidth,"quot":'"',"isStr":!0},"methods":{"fixColor":function fixColor(){var e=this.data.color,t=this.hex2rgb;return"string"==typeof e?0===e.indexOf("#")?t(e):e:e.map(function(e){return 0===e.indexOf("#")?t(e):e})},"hex2rgb":function hex2rgb(e){var t=[];return 3===(e=e.substr(1)).length&&(e=e.replace(/(.)/g,"$1$1")),e.replace(/../g,function(e){return t.push(parseInt(e,16)),e}),"rgb("+t.join(",")+")"}}})}},[[78,0]]]);