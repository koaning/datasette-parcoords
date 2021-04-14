window.onload = function(){
    const csvElem = document.querySelector('.export-links a[href*=csv]');
    // Create elements for adding graph tool to page
    visTool = document.createElement('div');
    visTool.className = "parcoords"
    visTool.id = "parcoords-chart"

    let table = document.querySelector('table.rows-and-columns');
    table.parentNode.insertBefore(visTool, table);

    let btn = document.createElement("button");
    btn.textContent = "Parallel Coordinates"
    btn.id = "parcoords-btn"
    visTool.appendChild(btn)
    document.getElementById("parcoords-btn").onclick = makechart;

    var parcoords;
    function makechart(){
        d3.select("#parcoords-btn").remove();
        d3.csv('/calmcode/smoking.csv', function(data) {
            var colors = d3.scale.category20b();
            // load csv file and create the chart
    
            var colorgen = d3.scale.ordinal()
                .range(["#a6cee3","#1f78b4","#b2df8a","#33a02c",
                        "#fb9a99","#e31a1c","#fdbf6f","#ff7f00",
                        "#cab2d6","#6a3d9a","#ffff99","#b15928"]);
    
            // var color = function(d) { return colorgen(d.group) ? d.hasOwnProperty('group') : "#a6cee3"; };
            var color = function(d) { return "#a6cee3" };
            data.map(d => color(d))
    
            parcoords = d3.parcoords()("#parcoords-chart")
                .data(data)
                .hideAxis(["name"])
                .color(color)
                .alpha(0.55)
                .composite("darken")
                .margin({ top: 20, left: 10, bottom: 10, right: 0 })
                .mode("queue")
                .render()
                .reorderable()
                .brushMode("1D-axes");  // enable brushing
    
            parcoords.svg.selectAll("text").style("font", "10px sans-serif");
        });
    }
};
