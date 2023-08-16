async function totaltests(){
    const queryParams = new URL(window.location.search);
    const mapstr = queryParams.get("map");
    map = JSON.parse(mapstr); 
    







     // Move the 'h' variable outside the drawChart function to make it global
     var h = [];

     // Define the map and populate 'h' array
     
 
     for (const [key, value] of progressmap.entries()) {
       h.push([key, value]);
     }
 
     google.charts.load('current', {'packages':['corechart']});
     google.charts.setOnLoadCallback(drawChart);
 
     
       var data = new google.visualization.DataTable();
       data.addColumn('string', 'Test');
       data.addColumn('number', 'Marks');
       data.addRows(h);

       var options = {
         title: 'Company Performance',
         curveType: 'function',
         legend: { position: 'bottom' },
         vAxis: {
           title: 'Marks',
           ticks: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160]
         }
       };
 
       var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));
 
       chart.draw(data, options);
     
   
    
}
setTimeout(totaltests);