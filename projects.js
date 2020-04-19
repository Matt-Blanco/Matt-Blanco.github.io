var projectSVG = d3.select("body").append("svg")
.attr("width", window.innerWidth)
.attr("height", 800)
.attr("class", "projectSvg");

// Red Square
projectSVG.append("rect")
.attr("x", 300)
.attr("y", 150)
.attr("width", 20)
.attr("height", 20)
.attr("fill", "#ffb7b2")
.transition()
.on("start", function repeat() {
  d3.select(this)
  .transition()
  .duration(6000)
  .attr("width", 500)
  .attr("x", 0)
  .transition()
  .duration(6000)
  .attr("width", 20)
  .attr("x", 300)
  .on("end", repeat)
});

// Red Square
projectSVG.append("rect")
.attr("x", 1000)
.attr("y", 300)
.attr("width", 40)
.attr("height", 20)
.attr("fill", "#ffb7b2")
.transition()
.on("start", function repeat() {
  d3.select(this)
  .transition()
  .duration(5000)
  .attr("width", 650)
  .attr("x", 700)
  .transition()
  .duration(5000)
  .attr("width", 20)
  .attr("x", 1000)
  .on("end", repeat)
});

// Red Square
projectSVG.append("rect")
.attr("x", 400)
.attr("y", 500)
.attr("width", 50)
.attr("height", 20)
.attr("fill", "#ffb7b2")
.transition()
.on("start", function repeat() {
  d3.select(this)
  .transition()
  .duration(3000)
  .attr("width", 650)
  .attr("x", 100)
  .transition()
  .duration(3000)
  .attr("width", 50)
  .attr("x", 400)
  .on("end", repeat)
});

// Light Green
projectSVG.append("rect")
.attr("x", 700)
.attr("y", 75)
.attr("width", 50)
.attr("height", 20)
.attr("fill", "#e2f0cb")
.transition()
.on("start", function repeat() {
  d3.select(this)
  .transition()
  .duration(4500)
  .attr("width", 600)
  .attr("x", 500)
  .transition()
  .duration(4000)
  .attr("width", 50)
  .attr("x", 700)
  .on("end", repeat)
});

// Light Green
projectSVG.append("rect")
.attr("x", 300)
.attr("y", 340)
.attr("width", 50)
.attr("height", 20)
.attr("fill", "#e2f0cb")
.transition()
.on("start", function repeat() {
  d3.select(this)
  .transition()
  .duration(4000)
  .attr("width", 650)
  .attr("x", 100)
  .transition()
  .duration(5000)
  .attr("width", 50)
  .attr("x", 300)
  .on("end", repeat)
});

// Dark Green
projectSVG.append("rect")
.attr("x", 550)
.attr("y", 700)
.attr("width", 50)
.attr("height", 20)
.attr("fill", "#ffdac1")
.transition()
.on("start", function repeat() {
  d3.select(this)
  .transition()
  .duration(4000)
  .attr("width", 550)
  .attr("x", 250)
  .transition()
  .duration(5000)
  .attr("width", 50)
  .attr("x", 550)
  .on("end", repeat)
});

// Dark Green
projectSVG.append("rect")
.attr("x", 700)
.attr("y", 225)
.attr("width", 50)
.attr("height", 20)
.attr("fill", "#ffdac1")
.transition()
.on("start", function repeat() {
  d3.select(this)
  .transition()
  .duration(4000)
  .attr("width", 800)
  .attr("x", 400)
  .transition()
  .duration(5000)
  .attr("width", 50)
  .attr("x", 500)
  .on("end", repeat)
});