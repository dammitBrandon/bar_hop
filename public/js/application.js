function initialize() {
  var mapOptions = {
    zoom: 18,
    center: new google.maps.LatLng(41.91, -87.677),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  var map = new google.maps.Map(document.getElementById('map-canvas'),
    mapOptions);

  var bars = [
  ["Big Star", 41.909174, -87.677354,1, "$3 Old Overholt Whiskey Shots"],
  ["Blue Line Lounge & Grill", 41.909666, -87.677591,2, "$3 House Red & White Wine"],
  ["Carriage House", 41.90344, -87.670514,3, "Brunch Served from 10am-2pm"],
  ["Chris' Northland Tavern & Grill", 41.910701, -87.66821,4, "$2.50 Domestic Drafts"],
  ["Crocodile", 41.90944, -87.676187,5, "$10 Bottomless Bloody Marys"],
  ["Flat Iron",41.91,-87.677,6,"Sun: $4 MGD<br>Mon: $2 wells"],
  ["Easy Bar",41.903335,-87.676606,7,"$2 Miller High Life Bottles, $5 Jameson"],
  ["Estelle's",41.910397,-87.678164,8,"$4 SKA Brewery Cans, $2.50 Pabst Blue Ribbon"],
  ["Fatpour",41.903041,-87.677633,9,"$7 Bloody Marys, $3 Mimosas, $5 Beermosas"],
  ["Francesca's Forno",41.910072,-87.677185,10,"$3 Stiegl"],
  ["Rodan",41.909277,-87.675761,11, "Sun: 2 for 1 Beers<br>Mon: $2 PBR"],
  ["Division Ale House",41.903515,-87.67653,12, "Sun: $10 Buckets<br>Mon: $6 Top Shelf"],
  ["Rainbo Club",41.878114,-87.629798,13, "Sun: $5 Jameson<br>Mon: $1 Beers"],
  ["The Empty Bottle",41.900356,-87.686826,14, "Sun: $6 Shot & a Beer<br>Mon: None"]
  ];
  // var marker = new google.maps.Marker({
  //   position: map.getCenter(),
  //   map: map,
  //   title: 'Click to zoom'
  // });

  // setMarkers(map, bars);

  var image = {
    url: 'http://m.mountsinai.org/img/guide/martini.png',
    // This marker is 25 pixels wide by 25 pixels tall.
    size: new google.maps.Size(45, 45),
    // The origin for this image is 0,0.
    origin: new google.maps.Point(0,0),
    // The anchor for this image is the base of the flagpole at 0,32.
    anchor: new google.maps.Point(0, 0)
  };
  
  var shadow = {
    url: 'http://209.85.48.18/7059/133/0/p1015675/shadow.png',
    size: new google.maps.Size(45, 45),
    origin: new google.maps.Point(0,0),
    anchor: new google.maps.Point(0, 45)
  };

  // Shapes define the clickable region of the icon.
  // The type defines an HTML <area> element 'poly' which
  // traces out a polygon as a series of X,Y points. The final
  // coordinate closes the poly by connecting to the first
  // coordinate.
  var shape = {
    coord: [1, 1, 1, 20, 18, 20, 18 , 1],
    type: 'poly'
  };
  
  var marker = [];

  for (var i = 0; i < bars.length; i++) {
    var bar = bars[i];
    var myLatLng = new google.maps.LatLng(bar[1], bar[2]);
    marker[i] = new google.maps.Marker({
      position: myLatLng,
      map: map,
      shadow: shadow,
      icon: image,
      shape: shape,
      title: bar[0],
      info: bar[4],
      zIndex: bar[3]
    });
  google.maps.event.addListener(marker[i], 'mouseover', function() {
    // $('.info').html(this.title + "\n" + this.info);
    $('.info').append('<h1 id="bar_name">' + this.title + '</h1>');
    $('.info').append('<img src="http://metropolis.co.jp/dining/files/2009/12/821BarLifebottles.jpg">');
    $('.info').append("<p>" + this.info + "</p>");
    $('.info').css({"visibility":"visible"});
  });
  google.maps.event.addListener(marker[i], 'mouseout', function() {
    $('.info').html('');
    $('.info').css({"visibility":"hidden"});
  });
  }


}

var bars = [
["Flat Iron",41.91,-87.677,1], ["Rodan",41.909277,-87.675761,2], ["Rainbo Club",41.878114,-87.629798,3],["The Empty Bottle",41.900356,-87.686826,4],["Division Ale House",41.903515,-87.67653,5]
];

function loadScript() {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&' +
  'callback=initialize';
  document.body.appendChild(script);
}

window.onload = loadScript;
