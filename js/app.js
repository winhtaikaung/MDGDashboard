function loadmanifest(){return $.ajax({url:window.DASHBOARD.BASE_URL+"/config.manifest",dataType:"json"})}function login(){return $.ajax({method:"POST",url:window.dashboard.login_url,crossDomain:!0,dataType:"json",beforeSend:function(o){o.setRequestHeader("Authorization","Basic "+window.DASHBOARD.encodedstring),o.setRequestHeader("Access-Control-Allow-Methods: GET, POST, PUT, DELETE"),o.setRequestHeader("Access-Control-Allow-Origin","*")},success:function(o){console.log(o)}})}window.DASHBOARD={},window.DASHBOARD.BASE_URL=window.location.origin,$(function(){loadmanifest().done(function(o){window.DASHBOARD.MAP_PATH=window.DASHBOARD.BASE_URL+"/"+o.map_path+o.maps.LAOS,helper.loadData(window.DASHBOARD.MAP_PATH).done(function(o){window.DASHBOARD.MAP_DATA=o,mapbuilder(o)})}),makeDonutChart()});