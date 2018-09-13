enum Color {Red, Pink, Green}
console.log(Color)
for (let item in Color) {
  if (isNaN(Number(item))) {
      console.log(item);
      const dom = document.createElement('p')
      dom.innerText = item;
      document.body.appendChild(dom)
  }
}