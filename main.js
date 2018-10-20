function afterInit () {
	function addMarker (lat, lng, title = "Marker") {
		const position = new google.maps.LatLng(lat, lng);
		const marker = new google.maps.Marker({position, title});

		const map = document.getElementById('map');
		marker.setMap(map);
	}


	var params  = new URLSearchParams(document.location.search);
	const { Latitude, Longitude } = params;

	addMarker(Latitude, Longitude);
}

function createInputField (name) {
	const label = document.createElement('label');
	label.setAttribute('for', name);
	label.innerHTML = name;

	const input = document.createElement('input');
	input.setAttribute('id', name);
	input.setAttribute('name', name);
	input.setAttribute('class', 'form-control');

	const form = document.querySelector('form');
	form.appendChild(label);
	form.appendChild(input);
}

const inputFields = [
	'Latitude',
	'Longitude',
];

inputFields.forEach(createInputField);

const submit = document.createElement('input');
submit.setAttribute('type', 'submit');
submit.setAttribute('class', 'my-3 btn btn-primary');
document.querySelector('form').appendChild(submit);

// =====================================
