// Initial google maps
function initMap() {
	var myLatLng = {
		lat: 50.448792,
		lng: 30.4259675
	};

	var image = {
		url: '../img/icon/marker.png',
		size: new google.maps.Size(20, 26),
		origin: new google.maps.Point(0, 0),
		anchor: new google.maps.Point(0, 26)
	};

	var map = new google.maps.Map(document.getElementById('map'), {
		center: myLatLng,
		zoom: 15,
		disableDefaultUI: true
	});

	var marker = new google.maps.Marker({
		position: myLatLng,
		map: map,
		icon: image
	});

	marker.setMap(map);
}
