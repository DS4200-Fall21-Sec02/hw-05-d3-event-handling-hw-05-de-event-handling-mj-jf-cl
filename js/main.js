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
  .on("click", changeCircleColor); 

// Add a circle 
let circle = svg.append('circle') 
  .attr('cx', '350')
  .attr('cy', '250')
  .attr('r', '60')
  .attr('fill', '#b2df8a')
  .on("click", changeSquareColor);

function changeCircleColor(){
  circle.attr('fill', '#a6cee3')
}

function changeSquareColor(){
  rect.attr('fill', '#b2df8a')
}


let btn = document.createElement(circle);
btn.onclick = function (){
  document.circle.style.fill='#337ab7'
}





data = [{"circle": "A"}, {"square", "b"}]
radius = 60
var node = svg.append("g")
  .selectAll("circle")
  .data(data)
  .enter()
  .append("circle")
      .attr('cx', '350')
      .attr('cy', '250')
      .attr('r', radius)
      .attr('fill', '#b2df8a')
    .call(d3.drag()
         .on("start", dragstarted)
         .on("drag", dragged)
         .on("end", dragended));

var simulation = d3.forceSimulation()
    .force("center", d3.forceCenter().x(width / 2).y(height / 2))
    .force("charge", d3.forceManyBody().strength(1))
    .force("collide", d3.forceCollide().strength(.1).radius(30).iterations(1))

simulation
    .nodes(data)
    .on("tick", function(d){
      node
          .attr("cx", function(d){ return d.x; })
          .attr("cy", function(d){ return d.y; })
    });

function dragstarted(d) {
  if (!d3.event.active) simulation.alphaTarget(.03).restart();
  d.fx = d.x;
  d.fy = d.y;
}

function dragged(d) {
  d.fx = d3.event.x;
  d.fy = d3.event.y;
}

function dragended(d) {
  if (!d3.event.active) simulation.alphaTarget(.03);
  d.fx = null;
  d.fy = null;
}
