// let container = document.getElementById("container");


// HTML Rendering

// element.innerHTML =  new html content	Change the inner HTML of an element
// element.attribute = new value	Change the attribute value of an HTML element
// element.style.property = new style	Change the style of an HTML element

// document.createElement(element)	Create an HTML element
// document.removeChild(element)	Remove an HTML element
// document.appendChild(element)	Add an HTML element
// document.replaceChild(new, old)	Replace an HTML element
// document.write(text)	Write into the HTML output stream
// let app = document.getElementById('app');
// let container = document.createElement('div');

// for (i = 0; i < 10; i++) {
//   let element = document.createElement(element)

// }
// let gridOne = document.createElement('div');
// let gridTwo = document.createElement('div');
// let gridThree = document.createElement('div');
// let gridFour = document.createElement('div');
// let gridFive = document.createElement('div');
// let gridSix = document.createElement('div');
// let gridSeven = document.createElement('div');
// let gridEight = document.createElement('div');
// let gridNine = document.createElement('div');
// container.setAttribute('id', 'container')
// let one = document.getElementById('container');
// container.setAttribute('class', 'container')
// gridOne.setAttribute('id', 'grid1')
// gridTwo.setAttribute('id', 'grid2')
// gridThree.setAttribute('id', 'grid3')
// gridFour.setAttribute('id', 'grid4')
// gridFive.setAttribute('id', 'grid5')
// gridSix.setAttribute('id', 'grid6')
// gridSeven.setAttribute('id', 'grid7')
// gridEight.setAttribute('id', 'grid8')
// gridNine.setAttribute('id', 'grid9')
// app.appendChild(container)
// one.append(gridOne);
// container.append(gridTwo);
// container.append(gridThree);
// container.append(gridFour);
// container.append(gridFive);
// container.append(gridSix);
// container.append(gridSeven);
// container.append(gridEight);
// container.append(gridNine);

// container.addEventListener('click', function() {
//     console.log('You clicked me!');
// })

 function buildBoard() {
  let board = []
  for (i = 0; i < 9; i++) {
    
  }
}


const create = (type) => {
    const element = document.createElement(type)
    return element
  }


 let app = document.getElementById('app');
 let container = create('div');
 container.id = "container";
 let gridOne = create('div');
 let gridTwo = create('div');
 let gridThree = create('div');
 let gridFour = create('div');
 let gridFive = create('div');
 let gridSix = create('div');
 let gridSeven = create('div');
 let gridEight = create('div');
 let gridNine = create('div');

 app.append(container);
 container.append(gridOne);
 