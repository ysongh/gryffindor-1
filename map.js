function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 7,
    center: {lat: 34.8021, lng: 38.9968},
  });

  setMarkers(map);
}

function setMarkers(map) {
  var image = {
    url:
      'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
    size: new google.maps.Size(20, 32),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(0, 32),
  };

  var bounds = new google.maps.LatLngBounds();
  for (var i = 0; i < payload.length; i++) {
    var beach = payload[i];
    var marker = new google.maps.Marker({
      position: {lat: beach['Latitude'], lng: beach['Longitude']},
      map: map,
      content: payload[i]['Region'],
      icon: image,
      title: beach['Region'],
      zIndex: null,
    });

    var infowindow = new google.maps.InfoWindow();
    google.maps.event.addListener(
      marker,
      'click',
      (function(marker, i, infowindow) {
        return function() {
          console.log('this', payload[i]);
          console.log('this', payload[i].Latitude);
          console.log('error', payload[i]['Mean squared error']);
          console.log('error', payload[i]['Population in 2015']);
          console.log('error', payload[i]['Surface water in sq.km']);

          const detailDiv = document.getElementById('location-details');

          if (!detailDiv.children.length) {
            const header = document.createElement('h2');
            header.setAttribute('id', 'location-header');
            header.innerHTML = this.title;
            detailDiv.appendChild(header);

            for (let key in payload[i]) {
              const node = document.createElement('p');
              node.innerHTML = key + ': ' + payload[i][key];
              node.setAttribute('id', key);
              detailDiv.appendChild(node);
            }
          } else {
            const header = document.getElementById('location-header');
            header.innerHTML = payload[i]['Region'];
            for (let key in payload[i]) {
              const node = document.getElementById(key);
              node.innerHTML = key + ': ' + payload[i][key];
            }
          }

          infowindow.setContent(this.content);
          infowindow.open(map, this);
        };
      })(marker, i, infowindow),
    );
    bounds.extend(marker.position);
  }
}
