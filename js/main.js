// write your javascript code here.
// feel free to change the pre-set attributes as you see fit

let margin = {
  top: 60,
  left: 50,
  right: 30,
  bottom: 35
},
width = 500 - margin.left - margin.right,
height = 500 - margin.top - margin.bottom;

//SVG that will hold the visualization 
let svg = d3.select('#vis')
.append('svg')
  .attr('preserveAspectRatio', 'xMidYMid meet') // this will scale your visualization according to the size of its parent element and the page.
  .attr('width', '100%') // this is now required by Chrome to ensure the SVG shows up at all
  .style('background-color', 'white') 
  .style('border', 'solid')
  .attr('viewBox', [0, 0, width + margin.left + margin.right, height + margin.top + margin.bottom].join(' '))

// Add a square 
let rect = svg.append('rect')
.attr('x', '100')
.attr('y', '200')
.attr('width', '20%')
.attr('height', '20%')
.attr('fill', '#a6cee3')
.on("click", changeCircleColor)
.on("mouseover", handleMouseHover)
.on("mouseout", handleMouseOut).call(d3.drag()
         .on("drag", rectDrag)); 

// Add a circle 
let circle = svg.append('circle') 
.attr('cx', '350')
.attr('cy', '250')
.attr('r', '60')
.attr('fill', '#b2df8a')
.on("dblclick", changeBoth)
.on("mouseover", handleMouseHover)
.on("mouseout", handleMouseOut).call(d3.drag()
         .on("drag", circleDrag));


function changeCircleColor() {
  if (circle.attr('fill') == '#b2df8a') {
    circle.attr('fill', '#a6cee3')
  } else {
    circle.attr('fill', '#b2df8a')
  }
}

function changeBoth() {
  if (circle.attr('fill') != 'magenta') {
    circle.attr('fill', 'magenta')
  } else {
    circle.attr('fill', 'blue')
  }
  if (rect.attr('fill') != 'yellow') {
    rect.attr('fill', 'yellow')
  } else {
    rect.attr('fill', 'black')
  }
}

function handleMouseHover() {
  d3.select(this).attr("stroke", "#000000")
  d3.select(this).attr("stroke-width", 15)
}

function handleMouseOut() {
  d3.select(this).attr("stroke", "outline: none;")
}

function circleDrag(event, d){
  d3.select(this).attr('cx', event.x).attr('cy', event.y).raise();
}

function rectDrag(event, d) {
  d3.select(this).attr('x', event.x).attr('y', event.y).raise();
}

let btn = document.createElement(circle);
btn.onclick = function (){
  document.circle.style.fill='#337ab7'
}
