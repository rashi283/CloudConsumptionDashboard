$(document).ready(function() {
            options = {
                chart: {
                    renderTo: 'CPU_Utilization',
                    type: 'line',
                    marginRight: 130,
                    marginBottom: 25
                },
                title: {
                    text: 'CPU Utilization',
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
						return Highcharts.dateFormat('%l%p', Date.parse(this.value +' UTC'));
					}
				}
                },
                yAxis: {
                    title: {
                        text: '% CPU'
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
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'top',
                    x: -10,
                    y: 100,
                    borderWidth: 0
                },
                series: [{}]
            };
            
            $.getJSON("/static/consumer_CPU_24hrs.json", function(json) {
               // alert(json['category']);
               // alert(json['name']);
                //alert(json['data']);
                options.series[0].name = json['name'];
                options.series[0].data = json['data'];
                options.xAxis.categories = json['category'];
                
                chart = new Highcharts.Chart(options);
            });
        });
	