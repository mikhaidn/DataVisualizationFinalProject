async function init(){
   
  
}
async function createTable( idName){

}

async function createChaosTable( idName){
    data = await d3.csv("https://flunky.github.io/cars2017.csv")
    console.log(idName)
    xlogCityMPG = d3.scaleLog(10).domain([10,150]).range([0,200])
    yrange = [0,200]
    ylogHighwayMPG = d3.scaleLog(10).domain([10,150]).range(yrange)
    margin = 50;
    height = 200;
    tickValues = [10,20,50,100]
    tickFormat = d3.format("~s")

    xs = xlogCityMPG;
    ys = ylogHighwayMPG;
    ysInv = d3.scaleLog(10).domain([10,150]).range([yrange[1],yrange[0]]);
    margin = 50;
    height = 200;

    var gee = d3.selectAll(idName).select("svg").append("g")
    .attr("transform","translate("+margin+","+margin+")")
    var circles = gee.selectAll("circle").data(data).enter().append("circle")
        .attr("cx", function(d,i){return xs(d.AverageCityMPG)})
        .attr("cy", function(d,i){return height - ys(parseInt(d.AverageHighwayMPG) )})
        .attr("r", function(d,i){return (2 + parseInt(d.EngineCylinders) )})

    d3.selectAll("svg").append("g")
        .attr("transform","translate("+margin+","+margin+")")
        .call(d3.axisLeft(ysInv).tickValues(tickValues).tickFormat(tickFormat))

    d3.selectAll("svg").append("g")
        .attr("transform","translate("+margin+","+(height+ margin)+")")
        .call(d3.axisBottom(xs).tickValues(tickValues).tickFormat(tickFormat))
} 

async function createFilterTable( idName){
    data = await d3.csv("https://flunky.github.io/cars2017.csv")
    console.log(idName)
    xlogCityMPG = d3.scaleLog(10).domain([10,150]).range([0,200])
    yrange = [0,200]
    ylogHighwayMPG = d3.scaleLog(10).domain([10,150]).range(yrange)
    margin = 50;
    height = 200;
    tickValues = [10,20,50,100]
    tickFormat = d3.format("~s")

    xs = xlogCityMPG;
    ys = ylogHighwayMPG;
    ysInv = d3.scaleLog(10).domain([10,150]).range([yrange[1],yrange[0]]);
    margin = 50;
    height = 200;

    var gee = d3.selectAll(idName).select("svg").append("g")
    .attr("transform","translate("+margin+","+margin+")")

    var circles = gee.selectAll("circle")
        .data(data.filter(function(d) { return d.EngineCylinders == 6 & d.Fuel == "Gasoline" }))
        .enter().append("circle")
        .attr("cx", function(d,i){return xs(d.AverageCityMPG)})
        .attr("cy", function(d,i){return height - ys(parseInt(d.AverageHighwayMPG) )})
        .attr("r", function(d,i){return (2 + parseInt(d.EngineCylinders) )})
    console.log(circles)

    d3.selectAll("svg").append("g")
        .attr("transform","translate("+margin+","+margin+")")
        .call(d3.axisLeft(ysInv).tickValues(tickValues).tickFormat(tickFormat))

    d3.selectAll("svg").append("g")
        .attr("transform","translate("+margin+","+(height+ margin)+")")
        .call(d3.axisBottom(xs).tickValues(tickValues).tickFormat(tickFormat))
} 