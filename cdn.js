(function (window) {
  window.dataCdn = {
    data: "html.",
    note: "此为备用CDN，暂时未使用",
    "index.html": "/index.html",
    react: "https://unpkg.com/react@16/umd/react.development.js",
    "react-dom": "https://unpkg.com/react-dom@16/umd/react-dom.development.js",
    babel: "https://unpkg.com/babel-standalone@6.15.0/babel.min.js",
  };
  let a = 100000000;
  let sum = 0
  for(var i = 0;i<a;i++){
    sum += i
  }
  window.aaa = sum
})(window);
