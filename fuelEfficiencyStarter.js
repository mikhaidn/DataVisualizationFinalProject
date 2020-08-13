async function init(){
    data = await d3.csv("https://flunky.github.io/cars2017.csv")
    console.log(data)

    var xlogCityMPG = d3.scaleLog(10).domain([10,150]).range([0,200])
    var yrange = [0,200]
    var ylogHighwayMPG = d3.scaleLog(10).domain([10,150]).range(yrange)
    var margin = 50;
    var height = 200;
    var tickValues = [10,20,50,100]
    var tickFormat = d3.format("~s")

    var xs = xlogCityMPG;
    var ys = ylogHighwayMPG;
    var ysInv = d3.scaleLog(10).domain([10,150]).range([yrange[1],yrange[0]]);
    var margin = 50;
    var height = 200;

    var gee = d3.select("svg").append("g")
    .attr("transform","translate("+margin+","+margin+")")
    var rectangles = gee.selectAll("circle").data(data).enter().append("circle")
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