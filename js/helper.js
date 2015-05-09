<<<<<<< HEAD
var helper={loadData:function(t){return $.ajax({url:t,success:function(t){},error:function(t){}})},DisableCache:function(){$.ajax({cache:!1})},ChartHelper:chartHelper},chartHelper={BarChartBuilder:function(t,e){$(t).highcharts({chart:{type:e.StringType},title:{text:e.StringTitle},subtitle:{text:e.StringSubtitle},xAxis:{categories:e.ArrayXcategories},yAxis:{min:0,title:{text:e.StringYtitle}},legend:{enabled:e.BooleanLegend},tooltip:{pointFormat:e.StringTooltip},series:e.ArraySeries})}};
=======
var helper={loadData:function(a){return $.ajax({url:a,success:function(a){},error:function(a){}})},DisableCache:function(){$.ajax({cache:!1})}};
>>>>>>> cc75e205c16b68afe73a41fbc440599eb67e0ca5
