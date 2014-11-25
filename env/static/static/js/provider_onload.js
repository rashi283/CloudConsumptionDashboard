$(document).ready(function() {
 
  options_CPU = {
                chart: {
                    renderTo: 'CPU_Utilization',
                    type: 'spline',
                    marginRight: 80,
                   
                    marginBottom: 40,
                },
                plotOptions: {
                          series: {
                            fillOpacity: 0.3
                                    }
                },
                        
            colors: ['#888888','#7cb5ec', '#434348', '#90ed7d', '#f7a35c', '#8085e9', '#f15c80', '#e4d354', '#8085e8', '#8d4653', '#91e8e1'],
                title: {
                    text: '',
                    style: {
                        color: '#000',
                        font: 'bold 16px "Trebuchet MS", Verdana, sans-serif'
                        },
                    x: -20 //center
                },
                subtitle: {
                    text: '',
                    x: -20
                },
                xAxis: {
                    categories: [],
                    labels: {
					align: 'center',
					x: -3,
					y: 20,
					formatter: function() {
						return Highcharts.dateFormat('%l<br>%p', Date.parse(this.value +' UTC'));
					}
				}
                },
                yAxis: {
                    title: {
                        text:'CPU Utilization (GB)',
                    },
                    plotLines: [{
                        value: 0,
                        width: 1,
                        color: '#808080'
                    }]
                },
                tooltip: {
                    formatter: function() {
                            return '<b>'+ this.series.name +'</b><br/>'+
                            this.x +': '+ this.y;
                    }
                },
                
                   legend: {
                         itemStyle: {
                                    font: '9pt Trebuchet MS, Verdana, sans-serif',
                                    color: '#A0A0A0'
                                    },
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'top',
                    x: -10,
                    y: 10,
                    floating:true,
                    borderWidth: 0
                },
                
                series: [{}]
            };
            
            $.getJSON("/static/consumer_CPU_24hrs.json", function(json) {
               //alert(json['category']);
               //alert(json['name']);
               // alert(json['data']);
                options_CPU.series[0].name = json['name'];
                options_CPU.series[0].data = json['data'];
                options_CPU.xAxis.categories = json['category'];
                
                chart = new Highcharts.Chart(options_CPU);
            });
            $.getJSON("/static/consumer2_CPU_24hrs.json", function(json) {
               //alert(json['category']);
               // alert(json['name']);
                //alert(json['data']);
              
                chart.addSeries({name: json['name'],
                data: json['data']},true);
                chart.xAxis[0].isDirty = true;
                chart.redraw();
            });
           //CPU Utilization end
            
            
            
            //Memory Consumption
            
            options_Memory = {
                chart: {
                    renderTo: 'Memory_Consumption',
                    type: 'column',
                    marginRight: 80,
                   
                    marginBottom: 40,
                    
     
                
                },
                plotOptions: {
                          series: {
                            fillOpacity: 0.3
                                    }
                },
                        
            colors: ['#888888','#7cb5ec', '#434348', '#90ed7d', '#f7a35c', '#8085e9', '#f15c80', '#e4d354', '#8085e8', '#8d4653', '#91e8e1'],
                title: {
                    text: '',
                    style: {
                        color: '#000',
                        font: 'bold 16px "Trebuchet MS", Verdana, sans-serif'
                        },
                    x: -20 //center
                },
                subtitle: {
                    text: '',
                    x: -20
                },
                xAxis: {
                    categories: [],
                    labels: {
					align: 'center',
					x: -3,
					y: 20,
					formatter: function() {
						return Highcharts.dateFormat('%l<br>%p', Date.parse(this.value +' UTC'));
					}
				}
                },
                yAxis: {
                    title: {
                        text:'Memory Consumption (GB)',
                    },
                    plotLines: [{
                        value: 0,
                        width: 1,
                        color: '#808080'
                    }]
                },
                tooltip: {
                    formatter: function() {
                            return '<b>'+ this.series.name +'</b><br/>'+
                            this.x +': '+ this.y;
                    }
                },
                
                   legend: {
                         itemStyle: {
                                    font: '9pt Trebuchet MS, Verdana, sans-serif',
                                    color: '#A0A0A0'
                                    },
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'top',
                    x: -10,
                    y: 10,
                    floating:true,
                    borderWidth: 0
                },
                
                series: [{}]
            };
            
            $.getJSON("/static/consumer_Memory_24hrs.json", function(json) {
               //alert(json['category']);
               // alert(json['name']);
                //alert(json['data']);
                options_Memory.series[0].name = json['name'];
                options_Memory.series[0].data = json['data'];
                options_Memory.xAxis.categories = json['category'];
                
                chart = new Highcharts.Chart(options_Memory);
            });
			
			 $.getJSON("/static/consumer2_Memory_24hrs.json", function(json) {
               //alert(json['category']);
               // alert(json['name']);
                //alert(json['data']);
              
                chart.addSeries({name: json['name'],
                data: json['data']},true);
                chart.xAxis[0].isDirty = true;
                chart.redraw();
            });
 //Disk Utilization
 
             options_Disk = {
                chart: {
                    renderTo: 'Disk_Utilization',
                    
                    type: 'areaspline',
                    marginRight: 80,
                    marginBottom: 40,
                    
                        },    
                colors: ['#66CCCC', '#058DC7', '#50B432', '#ED561B', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4'],
                title: {
                    text: '',
                    style: {
                        color: '#000',
                        font: 'bold 16px "Trebuchet MS", Verdana, sans-serif'
                        },
                    x: -20 //center
                },
                subtitle: {
                    text: '',
                    x: -20
                },
                xAxis: {
                    categories: [],
                    labels: {
					align: 'center',
					x: -3,
					y: 20,
					formatter: function() {
						return Highcharts.dateFormat('%l<br>%p', Date.parse(this.value +' UTC'));
					}
				}
                },
                yAxis: {
                    title: {
                        text: 'Disk Utilization (GB)'
                    },
                    plotLines: [{
                        value: 0,
                        width: 1,
                        color: '#808080'
                    }]
                },
                tooltip: {
                    formatter: function() {
                            return '<b>'+ this.series.name +'</b><br/>'+
                            this.x +': '+ this.y;
                    }
                },
                 plotOptions: {
                          areaspline: {
                            fillOpacity: 0.5
                                    }
                },
                
                   legend: {
                         itemStyle: {
                                    font: '9pt Trebuchet MS, Verdana, sans-serif',
                                    color: '#A0A0A0'
                                    },
                    layout: 'vertical',
                    align: 'right',
                    floating: true,
                    verticalAlign: 'top',
                    x: -10,
                    y: 10,
                    borderWidth: 0
                },
                
                series: [{}]
            };
            
            $.getJSON("/static/consumer_Disk_24hrs.json", function(json) {
               // alert(json['category']);
               // alert(json['name']);
                //alert(json['data']);
                options_Disk.series[0].name = json['name'];
                options_Disk.series[0].data = json['data'];
              
                options_Disk.xAxis.categories = json['category'];
                
                chart = new Highcharts.Chart(options_Disk);
            });
			
			 $.getJSON("/static/consumer2_Disk_24hrs.json", function(json) {
               //alert(json['category']);
               // alert(json['name']);
                //alert(json['data']);
              
                chart.addSeries({name: json['name'],
                data: json['data']},true);
                chart.xAxis[0].isDirty = true;
                chart.redraw();
            });
        });
	