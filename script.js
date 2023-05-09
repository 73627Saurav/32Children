console.log(document.body.firstChild)
// Text {wholeText: "↵  ", assignedSlot: null, splitText: ƒ}
console.log("----------end----------")

console.log(document.body.lastChild)
// <script src="script.js"></script>
console.log("----------end----------")

console.log(document.body.childNodes)
/* 
NodeList {0: Text, 1: HTMLDivElement, 2: Text, 3: HTMLScriptElement, 4: Text, …}
0: Text
1: HTMLDivElement
2: Text
3: HTMLScriptElement
4: Text
5: Comment
6: Text
7: HTMLScriptElement
8: Text
__proto__: NodeList */
console.log("----------end----------")

let arr = Array.from(document.body.childNodes)
console.log(arr)
/* 
(4) [Text, HTMLDivElement, Text, HTMLScriptElement]
0: Text
1: HTMLDivElement
2: Text
3: HTMLScriptElement
length: 4
__proto__: Array(0) */
console.log("----------end----------")