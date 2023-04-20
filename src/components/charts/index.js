import * as d3 from "d3";
import { useRef, useLayoutEffect } from "react";
var elementResizeEvent = require("element-resize-event")

function BarChart(props) {

    const myChart = useRef()
    
    useLayoutEffect(() => {
        if(myChart && myChart.current && !myChart.current.innerHTML){
            drawChart()
        }
        let parentElement = document.querySelector(".reservation-stats-wrapper");
        elementResizeEvent(parentElement, function () {
            drawChart()
        })
    },[]);

    const drawChart = () => {
        myChart.current.innerHTML = ''
        const mockData = [
            {
                day: "Monday",
                bar1: 18,
                bar2: 60,
            },
            {
                day: "Tuesday",
                bar1: 54,
                bar2: 65,
            },
            {
                day: "Wednesday",
                bar1: 85,
                bar2: 18,
            },
            {
                day: "Thursday",
                bar1: 10,
                bar2: 30,
            },
            {
                day: "Friday",
                bar1:80,
                bar2: 40,
            },
            {
                day: "Saturday",
                bar1: 17,
                bar2: 10,
            },
            {
                day: "Sunday",
                bar1: 65,
                bar2: 38,
            }
        ]
        let bottom = 65
        let left = 30
        if(window.screen.width < 500){
            bottom = 45
            left = 20
        } else if(window.screen.width >= 700 && window.screen.width <= 800){
             bottom = 45
            left = 25
        }
        const margin = {top: 10, right: 0, bottom, left},
        width = myChart.current.offsetWidth - margin.left - margin.right,
        height =  myChart.current.offsetHeight - margin.top - margin.bottom;
    
        const svg = d3.select("#my_dataviz")
        .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
        .append("g")
            .attr("transform",`translate(${margin.left},${margin.top})`);
        
        const groups = mockData.map(d => d.day)
        const subgroups = ["bar1","bar2"]
  
        const x = d3.scaleBand()
            .domain(groups)
            .range([0, width])
            .padding([0.6])

        svg.append("g")
            .attr("transform", `translate(0, ${height})`)
            .call(d3.axisBottom(x).tickSize(0))
            .selectAll("text") 
                .style("text-anchor", "end")
                .style("color", "#a7a3a3")
                .style("font-size", "13px")
                .attr("transform", "rotate(-40)"); 

        const y = d3.scaleLinear()
            .domain([0, 100])
            .range([ height, 0 ]);
        svg.append("g")
            .attr("class", "axisGey")
            .call(d3.axisLeft(y).tickSize(-(width)).ticks(5));


        const xSubgroup = d3.scaleBand()
            .domain(subgroups)
            .range([0, x.bandwidth()])
            .padding([0.05])

        const color = d3.scaleOrdinal()
            .domain(subgroups)
            .range(['#145846','#14A3B8'])

      
        svg.append("g")
            .selectAll("g")
            .data(mockData)
            .join("g")
                .attr("transform", d => `translate(${x(d.day)}, 0)`)
        
        .selectAll("rect")
        .data(function(d) { return subgroups.map(function(key) { return {key: key, value: d[key]}; }); })
        .join("rect")
            .attr("x", d => xSubgroup(d.key))
            .attr("y", d => y(d.value))
            .attr("rx", d => 7)
            .attr("width", xSubgroup.bandwidth())
            .attr("height", d => height - y(d.value))
            .attr("fill", d => color(d.key));
    }
    return <div id="my_dataviz" ref={myChart} style={{width:"100%", height:"100%", boxSizing:"border-box"}} onResize={drawChart}></div>
}

export default BarChart;