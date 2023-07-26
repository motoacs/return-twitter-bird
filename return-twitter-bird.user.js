// ==UserScript==
// @name         Return Twitter bird
// @namespace    http://tampermonkey.net/
// @version      0.2.0
// @description  Twitterの新しいロゴ "X" を従来の鳥に置き換えます  This is a user script that replaces Twitter's new logo "X" with a traditional bird
// @author       github.com/motoacs
// @match        https://twitter.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=twitter.com
// @grant        none
// ==/UserScript==

(function () {
  'use strict';
  console.log('User Script: Return Twitter Bird loaded!');

  // Your code here...
  function replaceSvgPaths() {
    console.log('Return Twitter Bird: scanning');
    // 特定のpath要素を持つSVGタグを見つける  Finding SVG tags with a specific path element
    let svgElements = Array.from(document.querySelectorAll('svg'));

    svgElements.forEach((svg) => {
      let paths = Array.from(svg.querySelectorAll('path'));
      paths.forEach((path) => {
        // 指定されたpath要素と一致する場合、新しいpath要素で置き換える  If it matches the specified path element, replace it with the new path element
        if (path.getAttribute('d')?.startsWith('M18.244')) {
          console.log('Return Twitter Bird: found "X"');
          path.remove();

          let newPath1 = document.createElementNS("http://www.w3.org/2000/svg", 'path');
          newPath1.setAttribute("opacity", "0");
          newPath1.setAttribute("d", "M0 0h24v24H0z");
          svg.appendChild(newPath1);
          let newPath2 = document.createElementNS("http://www.w3.org/2000/svg", 'path');
          newPath2.setAttribute("d", "M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z");
          svg.appendChild(newPath2);

          console.log('Return Twitter Bird: replaced: X -> bird');
        }
      });
    });
  }

  // faviconを従来のものに置き換える Replace favicon with a traditional one
  function replaceFavicon() {
    let favicon = document.querySelector('link[rel="icon"], link[rel="shortcut icon"]');
    let newFaviconData = 'data:image/x-icon;base64,AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wz///8f////H////x////8Y////B////wD///8A////AP///wD///8A////AP///wD///8A////A////yj7789g9tV+ofbVfqH21X6h+N+eifz03lf///8o////A////wD///8A////AP///wD///8A////APr37g/PsGCftogQ7r2JAP/bnwD/7qwA/+6sAP/urAD/9Mtftv357z////8D////AP///wD///8A////AP///wD///8A////AP///w/57c5a88VQwu6sAP/urAD/7qwA/+6sAP/xvDDb/fnvP////wD///8A////AP///wD///8A////AP///wDz5L5X7bgv2+6sAP/urAD/7qwA/+6sAP/urAD/7qwA//G8MNv///8Y////AP///wD///8A////AP///wD///8M9NN+n+6wD/PurAD/7qwA/+6sAP/urAD/7qwA/+6sAP/urAD/9Nyegf///wD///8A////AP///wD///8A+O3PVu6wD/PurAD/7qwA/+6sAP/urAD/7qwA/+6sAP/urAD/7qwA//G8MNv///8A////AP///wD///8A////ANasQMXurAD/7qwA/+qpAP/YnAD/1JkA/+6sAP/urAD/7qwA/+6sAP/urAD/////FP///wD///8A////AP///wDz255+7qwA/9icAP+6ixDuz7Bgn9m8b5TurAD/7qwA/+6sAP/urAD/7qwA//jkr3j///8M////AP///wD///8A47Y/ysmRAP/PsGCf+vfuD////wDw584w46QA/+6sAP/urAD/7qwA/9+hAP/orA/z9OrPQv///wD///8A////AMypT7Hhz55g////AP///wD///8A////AMOaL9DMlAD/0JYA/8mRAP/FoEC/vpIf4OPQnmL///8A////AP///wD69+4P////AP///wD///8A////AP///wD69+4P3ceOcNi/foHhz55g////APr37g/69+4P////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A//8AAP//AAD//wAA8P8AAMA/AAD4HwAA8A8AAOAHAADgBwAAwAcAAOAHAADHAwAA3wMAAP/fAAD//wAA//8AAA==';  // ここに新しいfaviconのbase64エンコードされたデータを入れてください
  
    if (favicon) {
      favicon.href = newFaviconData;
    } else {
      favicon = document.createElement('link');
      favicon.rel = 'icon';
      favicon.href = newFaviconData;
      document.head.appendChild(favicon);
    }
  }
  

  replaceFavicon();
  replaceSvgPaths();
  
  // MutationObserverの作成  Creating a MutationObserver
  let observer = new MutationObserver(replaceSvgPaths);
  // body要素の子要素の変更を監視する  Monitor changes to child elements of the body element
  observer.observe(document.body, { childList: true, subtree: true });
  // 5秒後に動作を終了する  Terminate the event handler after 5 seconds
  let timeoutId = setTimeout(() => observer.disconnect(), 5000);

  // URLの変更を検知したら動作させる  Operate when URL changes are detected
  window.addEventListener('popstate', () => {
    clearTimeout(timeoutId);
    // body子要素の変更監視を再開 Restart observing
    observer.observe(document.body, { childList: true, subtree: true });
    // 5秒後に動作を終了する  Terminate the event handler after 5 seconds
    timeoutId = setTimeout(() => observer.disconnect(), 5000);
  });

  // スマホ版でpopstateが効かないためタイマーで実行 Running with a timer because popstate does not work on the mobile browser
  setInterval(replaceSvgPaths, 5000);
})();
