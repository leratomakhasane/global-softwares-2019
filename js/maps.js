      function initMap() {
        var uluru = {lat: -27.957825, lng: 26.788703};
        var map = new google.maps.Map(document.getElementById('maps'), {
          zoom: 4,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map,
          icon: 'images/map-marker.png'
        });
      }
