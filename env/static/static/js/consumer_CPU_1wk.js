$(document).ready(function() {
  $(".dropdown-menu li a").click(function() {
  $(this).parents(".btn-group").find('.selection').text($(this).text());
  $(this).parents(".btn-group").find('.selection').val($(this).text());

    });
    
    
    $("#CPU_1wk").click(function() {
             options = {
                chart: {
                    renderTo: 'CPU_Utilization',
                    type: 'line',
                    marginRight: 100,
                    marginBottom: 65
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
                                         step:2,
                                       
                                    rotation:-35,
					x: -3,
					y: 20,
					formatter: function() {
						return Highcharts.dateFormat('%e%b :%l%p', Date.parse(this.value +' UTC'));
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
                    y: 50,
                        floating: true,
                    borderWidth: 0
                },
                plotOptions: {
                         series: {
                                     marker: {
                                        fillColor: '#FFFFFF',
                                        lineWidth: 2,
                                        lineColor: null // inherit from series
                                                }
                                    }
                        },
                series: [{}]
            };
            
            $.getJSON("/static/consumer_CPU_1wk.json", function(json) {
               //alert(json['category']);
               //alert(json['name']);
              //alert(json['data']);
                options.series[0].name = json['name'];
                options.series[0].data = json['data'];
                options.xAxis.categories = json['category'];
                
                chart = new Highcharts.Chart(options);
            });

  
    });//1 wk

});//on load




