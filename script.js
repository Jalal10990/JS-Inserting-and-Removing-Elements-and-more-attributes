// insertion method 

// let div = document.createElement("div");
// div.innerHTML = "I have been inserted <b>by jalal</b>"

// div.setAttribute("class", "created");
// // document.querySelector(".container").before(div);
// // document.querySelector(".container").after(div);
// document.querySelector(".container").prepend(div);


// node.append() function 
// node.prepend() function 
// node.before() function 
// node.after() function 
// node.relpace() function 

// methods insert Adjacent HTML / Text / Element  
let cont = document.querySelector(".container")
cont.insertAdjacentHTML("beforeend", "<b> please help me </b>")



// beforebegin() function 
// afterbegin() function 
// beforeend() function 
// afterend() function 

// Node removal 
// .remove

// document.querySelector(".container")
// <div class=​"container red green" style=​"display:​ flex;​">​…​</div>​flex
// document.querySelector(".container").classList
// DOMTokenList(3) ['container', 'red', 'green', value: 'container red green']
// document.querySelector(".container").className
// 'container red green'
// document.querySelector(".container").classList.add("jalal")
// undefined
// document.querySelector(".container").classList.remove("jalal")
// undefined

// others attributes 
// document.querySelector(".container")
// <div class=​"container">​…​</div>​
// document.querySelector(".box")
// <div class=​"box" style=​"display:​ flex;​">​ this is a box ​</div>​flex
// document.querySelector(".box").innerHTML
// '\n            this is a box\n        '
// document.querySelector(".container").innerHTML
// '\n        <div class="box" style="display: flex;">\n            this is a box\n        </div>\n    '
// document.querySelector(".container").innerText
// 'this is a box'
// document.querySelector(".container").outer
// undefined
// document.querySelector(".container").outerHTML
// '<div class="container">\n        <div class="box" style="display: flex;">\n            this is a box\n        </div>\n    </div>'
// document.querySelector(".container").tagName
// 'DIV'
// document.querySelector(".container").nodeName
// 'DIV'
// document.querySelector(".container").textContent
// '\n        \n            this is a box\n        \n    '
// document.querySelector(".container").hidden
// false
// document.querySelector(".container").innerHTML = "Hy I am Jalal"
// 'Hy I am Jalal'
// document.querySelector(".container").hasAttribute("style")
// true
// document.querySelector(".box").hasAttribute("style")
// true
// document.querySelector(".box").getAttribute("style")
// 'display: flex;'
// document.querySelector(".container").setAttribute("style", "display: inline")
// undefined
// document.querySelector(".box").attributes
// NamedNodeMap {0: class, 1: style, class: class, style: style, length: 2}
// document.querySelector(".box").removeAttribute("style")
// undefined
// document.designMode = "on"
// 'on'
// document.querySelector(".box").dataset
// DOMStringMap {conceptby: 'Ali'}
