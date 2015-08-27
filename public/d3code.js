<!doctype html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<title> MyStox </title>
		<meta name="description" content="">
		<link rel="stylesheet" href="/public/css/style.css">
	</head>
	<body>

		<!-- ======= ======= ======= header ======= ======= ======= -->
		<div class="row header">
			<div class="column column-2">R1_C1</div>
			<div class="column column-8"><h1> p3 </h1></div>
			<div class="column column-2">R1_C3</div>
		</div>

				<!-- ======= ======= ======= content ======= ======= ======= -->
		<div class="row content_row">
			<div class="column column-2">

				<!-- ======= ======= ======= menu ======= ======= ======= -->
				<nav id="main_nav">
			    <ul>
			      <li class="thisPage menuLink"><a href="#">login</a></li>
			      <li><a class="menuLink" href="#">stocks</a></li>
			      <li><a class="menuLink" href="#">watch</a></li>
			      <li><a class="menuLink" href="#">sold</a></li>
			      <li><a class="menuLink" href="#">indexes</a></li>
			      <li><a class="menuLink" href="#">profile</a></li>
			    </ul>
		    </nav>
			</div>
			<div class="column column-8">
			<script>
			//Width and height
						var w = 500;
						var h = 300;
						var padding = 30;

						/*
						//Static dataset
						var dataset = [
										[5, 20], [480, 90], [250, 50], [100, 33], [330, 95],
										[410, 12], [475, 44], [25, 67], [85, 21], [220, 88],
										[600, 150]
									  ];
						*/

						//Dynamic, random dataset
						var dataset = [];					//Initialize empty array
						var numDataPoints = 50;				//Number of dummy data points to create
						var xRange = Math.random() * 1000;	//Max range of new x values
						var yRange = Math.random() * 1000;	//Max range of new y values
						for (var i = 0; i < numDataPoints; i++) {					//Loop numDataPoints times
							var newNumber1 = Math.round(Math.random() * xRange);	//New random integer
							var newNumber2 = Math.round(Math.random() * yRange);	//New random integer
							dataset.push([newNumber1, newNumber2]);					//Add new number to array
						}

						//Create scale functions
						var xScale = d3.scale.linear()
											 .domain([0, d3.max(dataset, function(d) { return d[0]; })])
											 .range([padding, w - padding * 2]);

						var yScale = d3.scale.linear()
											 .domain([0, d3.max(dataset, function(d) { return d[1]; })])
											 .range([h - padding, padding]);

						var rScale = d3.scale.linear()
											 .domain([0, d3.max(dataset, function(d) { return d[1]; })])
											 .range([2, 5]);

						//Define X axis
						var xAxis = d3.svg.axis()
										  .scale(xScale)
										  .orient("bottom")
										  .ticks(5);

						//Define Y axis
						var yAxis = d3.svg.axis()
										  .scale(yScale)
										  .orient("left")
										  .ticks(5);

						//Create SVG element
						var svg = d3.select("body")
									.append("svg")
									.attr("width", w)
									.attr("height", h);

						//Create circles
						svg.selectAll("circle")
						   .data(dataset)
						   .enter()
						   .append("circle")
						   .attr("cx", function(d) {
						   		return xScale(d[0]);
						   })
						   .attr("cy", function(d) {
						   		return yScale(d[1]);
						   })
						   .attr("r", function(d) {
						   		return rScale(d[1]);
						   });

						/*
						//Create labels
						svg.selectAll("text")
						   .data(dataset)
						   .enter()
						   .append("text")
						   .text(function(d) {
						   		return d[0] + "," + d[1];
						   })
						   .attr("x", function(d) {
						   		return xScale(d[0]);
						   })
						   .attr("y", function(d) {
						   		return yScale(d[1]);
						   })
						   .attr("font-family", "sans-serif")
						   .attr("font-size", "11px")
						   .attr("fill", "red");
					  	*/

						//Create X axis
						svg.append("g")
							.attr("class", "axis")
							.attr("transform", "translate(0," + (h - padding) + ")")
							.call(xAxis);

						//Create Y axis
						svg.append("g")
							.attr("class", "axis")
							.attr("transform", "translate(" + padding + ",0)")
							.call(yAxis);
			</script>
			</div>
			<div class="column column-2">R3_C3</div>
		</div>

		<!-- ======= ======= ======= info ======= ======= ======= -->
		<div class="row info">
			<div class="column column-2">R4_C1</div>
			<div class="column column-8">info</div>
			<div class="column column-2">R4_C3</div>
		</div>

		<!-- ======= ======= ======= footer ======= ======= ======= -->
		<div class="row footer">
			<div class="column column-12">footer</div>
		</div>



		<!-- ======= ======= ======= scripts ======= ======= ======= -->
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.6/d3.min.js" charset="utf-8"></script>
		<script type="text/javascript" src="/public/js/script.js"></script>
		<script type="text/d3" src="/public/js/d3code.js"></script>

	</body>
</html>
