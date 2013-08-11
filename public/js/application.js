function initialize() {
  var mapOptions = {
    zoom: 15,
    center: new google.maps.LatLng(41.91, -87.677),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  var map = new google.maps.Map(document.getElementById('map-canvas'),
    mapOptions);

  var bars = [
  ["Flat Iron",41.91,-87.677,1,"Sun: $4 MGD\nMon: $2 wells"], ["Rodan",41.909277,-87.675761,2, "Sun: 2 for 1 Beers\nMon: $2 PBR"],
  ["Division Ale House",41.903515,-87.67653,5, "Sun: $10 Buckets \nMon: $6 Top Shelf"],
  ["Rainbo Club",41.878114,-87.629798,3, "Sun: $5 Jameson \nMon: $1 Beers"],["The Empty Bottle",41.900356,-87.686826,4, "Sun: $6 Shot & a Beer \nMon: None"]
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
    anchor: new google.maps.Point(0, 25)
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
    $('.info').html(this.title + "\n" + this.info);
    $('.info').css({"visibility":"visible"});
  });
  google.maps.event.addListener(marker, 'mouseout', function() {
    $('.info').html('');
    $('.info').css({"visibility":"hidden"});
  });
  }


}

var bars = [
["Flat Iron",41.91,-87.677,1], ["Rodan",41.909277,-87.675761,2], ["Rainbo Club",41.878114,-87.629798,3],["The Empty Bottle",41.900356,-87.686826,4],["Division Ale House",41.903515,-87.67653,5]
];

// function setMarkers(map, bars) {
//   var image = {
//     url: 'http://m.mountsinai.org/img/guide/martini.png',
//     // This marker is 25 pixels wide by 25 pixels tall.
//     size: new google.maps.Size(45, 45),
//     // The origin for this image is 0,0.
//     origin: new google.maps.Point(0,0),
//     // The anchor for this image is the base of the flagpole at 0,32.
//     anchor: new google.maps.Point(0, 25)
//   };
  
//   var shadow = {
//     url: 'http://209.85.48.18/7059/133/0/p1015675/shadow.png',
//     size: new google.maps.Size(45, 45),
//     origin: new google.maps.Point(0,0),
//     anchor: new google.maps.Point(0, 45)
//   };

//   // Shapes define the clickable region of the icon.
//   // The type defines an HTML <area> element 'poly' which
//   // traces out a polygon as a series of X,Y points. The final
//   // coordinate closes the poly by connecting to the first
//   // coordinate.
//   var shape = {
//     coord: [1, 1, 1, 20, 18, 20, 18 , 1],
//     type: 'poly'
//   };
  
//   for (var i = 0; i < bars.length; i++) {
//     var bar = bars[i];
//     var myLatLng = new google.maps.LatLng(bar[1], bar[2]);
//     var marker = new google.maps.Marker({
//       position: myLatLng,
//       map: map,
//       shadow: shadow,
//       icon: image,
//       shape: shape,
//       mouseover: console.log("worked"),
//       title: bar[0],
//       zIndex: bar[3]
//     });
//   }
// }

function loadScript() {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&' +
  'callback=initialize';
  document.body.appendChild(script);
}

window.onload = loadScript;
