/*

##################################################
<> username: minimal1st.
<> project: Tallest Buildings of Montreal.
<> coding: UTF-8.
<> last updated: june 11th 2016.
##################################################   

<> Overview of the Project

<> Files of the project: js/app.js, index.html, css/main.css and README.md. 

<> app.js contains the logic of the application in JavaScript, index.html the structure of the page, and main.css is the stylesheet.

<> The project is a one-page application that displays the 26 tallest buildings in the city of Montreal. 

<> The application can be divided into three sections: the sidebar, the top navbar, and the map.

<> In the sidebar, there is a list of the 26 tallest buildings in the city of Montreal.

<> All buildings are by default located on the map and information about them can be obtained by either clicking on their map marker or on the item in the list appearing in the left sidebar.

<> If the user clicks on one of these items, the associated marker is animated and an InfoWindow is opened.

<> The InfoWindow contains information about the building, which is pulled from Wikipedia. A picture of the building is also displayed. 

<> The application is responsive and should be usable on all devices.

<> The programming languages that were used are the following:

<> HTML, CSS, JavaScript, jQuery, Knockout.js.

<> The map is a courtesy of the Google Maps API.

##################################################
*/
/*

data is an array of objects. 

It contains all the data we need for our locations.

Each object represents a location, and all the relevant information about the location is contained in each these objects (title, rank, position, wikipedia_url to retrieve information via AJAX, wikipedia url to display in infowindow, lat/lng coordinates, and the rank of the building).
*/
var data = [
	{
		title: "1000 de La Gauchetière",
		rank: 1,
		position: {lat: 45.498243, lng: -73.566274},
		wikipedia_url: "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&titles=1000_de_La_Gaucheti%C3%A8re&callback=?",
		wikipedia: "https://en.wikipedia.org/wiki/1000_de_La_Gaucheti%C3%A8re",
		wikipedia_img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/1000-de-la-gauchetiere.jpg/360px-1000-de-la-gauchetiere.jpg"
	},

	{
		title: "1250 René-Lévesque",
		rank: 2,
		position: {lat: 45.497323, lng: -73.570381},
		wikipedia_url: "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&titles=1250_René-Lévesque&callback=?",
		wikipedia: "https://en.wikipedia.org/wiki/1250_René-Lévesque",
		wikipedia_img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/1250represent.JPG/360px-1250represent.JPG"
	},

	{
		title: "Tour de la Bourse",
		rank: 3,
		position: {lat: 45.500611, lng: -73.56175},
		wikipedia_url: "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&titles=Tour_de_la_Bourse&callback=?",
		wikipedia: "https://en.wikipedia.org/wiki/Tour_de_la_Bourse",
		wikipedia_img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/TourBoursenov.jpg/375px-TourBoursenov.jpg"
	},

	{
		title: "Place Ville-Marie",
		rank: 4,
		position: {lat: 45.5015, lng: -73.5684},
		wikipedia_url: "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&titles=Place_Ville_Marie&callback=?",
		wikipedia: "https://en.wikipedia.org/wiki/Place_Ville_Marie",
		wikipedia_img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Place_Ville_Marie.jpg/375px-Place_Ville_Marie.jpg"
	},

	{
		title: "CIBC Tower",
		rank: 5,
		position: {lat: 45.4985, lng: -73.5709},
		wikipedia_url: "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&titles=CIBC_Tower&callback=?",
		wikipedia: "https://en.wikipedia.org/wiki/CIBC_Tower",
		wikipedia_img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Tour_CIBC_2012-1.jpg/360px-Tour_CIBC_2012-1.jpg"
	},

	{
		title: "Tour des Canadiens",
		rank: 6,
		position: {lat: 45.5025, lng: -73.5682},
		wikipedia_url: "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&titles=Tour_des_Canadiens&callback=?",
		wikipedia: "https://en.wikipedia.org/wiki/Tour_des_Canadiens",
		wikipedia_img: "https://upload.wikimedia.org/wikipedia/en/9/99/TDCrennder.jpg"
	},

	{
		title: "1501 McGill College",
		rank: 7,
		position: {lat: 45.502222, lng: -73.571667},
		wikipedia_url: "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&titles=1501_McGill_College&callback=?",
		wikipedia: "https://en.wikipedia.org/wiki/1501_McGill_College",
		wikipedia_img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/1501_McGill_College.jpg/323px-1501_McGill_College.jpg"
	},

	{
		title: "Complexe Desjardins South Tower",
		rank: 8,
		position: {lat: 45.5075, lng: -73.5644},
		wikipedia_url: "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&titles=Complexe_Desjardins&callback=?",
		wikipedia: "https://en.wikipedia.org/wiki/Complexe_Desjardins",
		wikipedia_img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Complexe_Desjardins_%28South_Tower%29.JPG/323px-Complexe_Desjardins_%28South_Tower%29.JPG"
	},

	{
		title: "Roccabella",
		rank: 9,
		position: {lat: 45.496819, lng: -73.571579},
		wikipedia_url: "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&titles=Roccabella&callback=?",
		wikipedia: "https://en.wikipedia.org/wiki/Roccabella",
		wikipedia_img: "https://upload.wikimedia.org/wikipedia/en/0/07/Roccabella_render.jpg"
	},

	{
		title: "Icône",
		rank: 10,
		position: {lat: 45.497113, lng: -73.572568},
		wikipedia_url: "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&titles=Icône&callback=?",
		wikipedia: "https://en.wikipedia.org/wiki/Icône",
		wikipedia_img: "https://upload.wikimedia.org/wikipedia/en/b/b5/IconeRender.gif"
	},

	{
		title: "KPMG Tower",
		rank: 10,
		position: {lat: 45.504164, lng: -73.570864},
		wikipedia_url: "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&titles=KPMG_Tower&callback=?",
		wikipedia: "https://en.wikipedia.org/wiki/KPMG_Tower",
		wikipedia_img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Montreal_KPMG_Tower.jpg/323px-Montreal_KPMG_Tower.jpg"
	},

	{
		title: "Marriott Château Champlain",
		rank: 12,
		position: {lat: 45.4975, lng: -73.5672},
		wikipedia_url: "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&titles=Montreal_Marriott_Château_Champlain_Hotel&callback=?",
		wikipedia: "https://en.wikipedia.org/wiki/Montreal_Marriott_Château_Champlain_Hotel",
		wikipedia_img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Marriott_Chateau_Champlain_2012.jpg/360px-Marriott_Chateau_Champlain_2012.jpg"
	},

	{
		title: "Le V",
		rank: 13,
		position: {lat: 45.5051, lng: -73.5637},
		wikipedia_url: "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&titles=Le_V&callback=?",
		wikipedia: "https://en.wikipedia.org/wiki/Le_V",
		wikipedia_img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Lev8sept14.jpg/360px-Lev8sept14.jpg"
	},

	{
		title: "Telus Tower",
		rank: 14,
		position: {lat: 45.5024, lng: -73.5676},
		wikipedia_url: "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&titles=Telus_Tower_(Montreal)&callback=?",
		wikipedia: "https://en.wikipedia.org/wiki/Telus_Tower_(Montreal)",
		wikipedia_img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/TelusTower.jpg/323px-TelusTower.jpg"
	},

	{
		title: "Bell Media Tower",
		rank: 15,
		position: {lat: 45.502222, lng: -73.572778},
		wikipedia_url: "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&titles=Bell_Media_Tower&callback=?",
		wikipedia: "https://en.wikipedia.org/wiki/Bell_Media_Tower",
		wikipedia_img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/BellMediaT.jpg/323px-BellMediaT.jpg"
	},

	{
		title: "500 Place D'Armes",
		rank: 16,
		position: {lat: 45.50428, lng: -73.557475},
		wikipedia_url: "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&titles=500_Place_D%27Armes&callback=?",
		wikipedia: "https://en.wikipedia.org/wiki/500_Place_D%27Armes",
		wikipedia_img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/500PlaceDArmes_%28edited%29.jpg/360px-500PlaceDArmes_%28edited%29.jpg"
	},

	{
		title: "Deloitte Tower",
		rank: 16,
		position: {lat: 45.496729, lng: -73.568192},
		wikipedia_url: "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&titles=Deloitte_Tower&callback=?",
		wikipedia: "https://en.wikipedia.org/wiki/Deloitte_Tower",
		wikipedia_img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Deloitte3sep15.jpg/360px-Deloitte3sep15.jpg"
	},

	{
		title: "Complexe Desjardins East Tower",
		rank: 18,
		position: {lat: 45.5075, lng: -73.5644},
		wikipedia_url: "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&titles=Complexe_Desjardins&callback=?",
		wikipedia: "https://en.wikipedia.org/wiki/Complexe_Desjardins",
		wikipedia_img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Complexe_Desjardins_%28South_Tower%29.JPG/323px-Complexe_Desjardins_%28South_Tower%29.JPG"
	},

	{
		title: "Scotia Tower",
		rank: 19,
		position: {lat: 45.505866, lng: -73.575525},
		wikipedia_url: "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&titles=Scotia_Tower_(Montreal)&callback=?",
		wikipedia: "https://en.wikipedia.org/wiki/Scotia_Tower_(Montreal)",
		wikipedia_img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Scotia_Tower_Montreal.jpg/323px-Scotia_Tower_Montreal.jpg"
	},

	{
		title: "National Bank Tower",
		rank: 19,
		position: {lat: 45.50186, lng: -73.56384},
		wikipedia_url: "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&titles=Complexe_Maisonneuve&callback=?",
		wikipedia: "https://en.wikipedia.org/wiki/Complexe_Maisonneuve",
		wikipedia_img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Complexe_Maisonneuve_06.jpg/323px-Complexe_Maisonneuve_06.jpg"
	},

	{
		title: "700 de la Gauchetière",
		rank: 19,
		position: {lat: 45.50186, lng: -73.56384},
		wikipedia_url: "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&titles=Complexe_Maisonneuve&callback=?",
		wikipedia: "https://en.wikipedia.org/wiki/Complexe_Maisonneuve",
		wikipedia_img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Complexe_Maisonneuve_06.jpg/323px-Complexe_Maisonneuve_06.jpg"
	},

	{
		title: "1000 Sherbrooke West",
		rank: 19,
		position: {lat: 45.5027, lng: -73.5751},
		wikipedia_url: "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&titles=1000_Sherbrooke_West&callback=?",
		wikipedia: "https://en.wikipedia.org/wiki/1000_Sherbrooke_West",
		wikipedia_img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/1000Sherbrooke.JPG/360px-1000Sherbrooke.JPG"
	},

	{
		title: "Terminal Tower",
		rank: 23,
		position: {lat: 45.486854, lng: -73.653374},
		wikipedia_url: "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&titles=Terminal_Tower_(Montreal)&callback=?",
		wikipedia: "https://en.wikipedia.org/wiki/Terminal_Tower_(Montreal)",
		wikipedia_img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Tour_Terminal.JPG/300px-Tour_Terminal.JPG"
	},

	{
		title: "Altitude Tower",
		rank: 24,
		position: {lat: 45.5025, lng: -73.568056},
		wikipedia_url: "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&titles=Altitude_Montreal&callback=?",
		wikipedia: "https://en.wikipedia.org/wiki/Altitude_Montreal",
		wikipedia_img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/AltitudeMTL.JPG/360px-AltitudeMTL.JPG"
	},

	{
		title: "Sun Life Building",
		rank: 25,
		position: {lat: 45.500208, lng: -73.570225},
		wikipedia_url: "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&titles=Sun_Life_Building&callback=?",
		wikipedia: "https://en.wikipedia.org/wiki/Sun_Life_Building",
		wikipedia_img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Sun-Life-Building-June-2007.jpg/360px-Sun-Life-Building-June-2007.jpg"
	},

	{
		title: "Le Port Royal",
		rank: 26,
		position: {lat: 45.50123, lng: -73.5679},
		wikipedia_url: "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&titles=Le_Port-Royal_Apartments&callback=?",
		wikipedia: "https://en.wikipedia.org/wiki/Le_Port-Royal_Apartments",
		wikipedia_img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/PortRoyalApartments-1.jpg/360px-PortRoyalApartments-1.jpg"
	}];

// array used to hold the Google.maps.Marker objects
var markers = [];
var infowindow, map;
infowindow = map = null;

/*
ajaxOpenInfoAndToggleBounce(), as the name suggests, is called each time an item in the list is being click. The function finds the corresponding marker in the array of markers, open the infoWindow of the marker and animate it.

This function needs to be called whenever the list is filtered as the filter function reassigns new elements to each locations whenever it is triggered.
*/
var ajaxOpenInfoAndToggleBounce = function() { 

			closeAnimationAndInfoWindows(); 

			for (var i=0; i<markers.length; i++){
				if (markers[i].title.toLowerCase() == this.title.toLowerCase()){
					if (markers[i].getAnimation() === null) {
						ajaxCall(markers[i]);
						infowindow.open(map, markers[i]);
					}
					toggleBounce(markers[i]);
				}
			}
};

/*
initMap gets called as soon as the Google Maps API .js file is loaded. It is specified as a callback in the script src.

See: src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCLdMUwZeQveBfSkzWovsb0W_chVa6HrgQ&callback=initMap
*/
var initMap = function() {
		// the initial coordinates of the map
		var initialLatLng = {lat: 45.50123, lng: -73.5679};
		// creating a google.maps.Map object
		//
		map = new google.maps.Map(document.getElementById('map'), {
			zoom: 15,
			center: initialLatLng,
			zoomControl: true,
				zoomControlOptions: {
					style: google.maps.ZoomControlStyle.SMALL,
					position: google.maps.ControlPosition.RIGHT_CENTER
				},

		});

		// Create a generic infowindow that will be used for our markers whenever we will need to open one.
		infowindow = new google.maps.InfoWindow({content: "", disableAutoPan: false, maxHeight: '100vh'});

		/*
		addAllMarkers: It simply iterate through the array 
		of objects called data and create a google.maps.Marker for each object. We can define and add our own properties to these Markers objects, which can be very handy when we need to have access to those properties.
		*/
		var addAllMarkers = function() {
			for (var i=0; i<data.length; i++){
				var marker = new google.maps.Marker({
					position: data[i].position,
					map: map,
					title: data[i].title,
					rank: data[i].rank,
					wikipedia_url: data[i].wikipedia_url,
					wikipedia: data[i].wikipedia,
					wikipedia_img: data[i].wikipedia_img,
					animation: null
				});    			
				/* 
				Whenever the user clicks on a marker, closeAnimationAndInfoWindows() makes sure that no marker is animated and that the infoWindow is closed.
				*/
				marker.addListener('click', function(){

					closeAnimationAndInfoWindows(); 		
					ajaxCall(this);
					infowindow.open(map, this);
					toggleBounce(this);
				});

			markers.push(marker);
			}
		};
		/* 
		If the user clicks on an area which is not a marker,
		then for all markers for which the infowindow is open
		or for which the marker is being animated, then the
		infoWindow is closed and the marker's animation is 
		stopped.
		*/
		addAllMarkers();
		map.addListener('click', closeAnimationAndInfoWindows);

};
// if marker is animated, then stop animation
// else animate the marker
var toggleBounce = function(right){
	right.getAnimation() !== null ? 
	right.setAnimation(null) : 
	right.setAnimation(google.maps.Animation.BOUNCE);
};


// closeAnimationAndInfoWindows();
var closeAnimationAndInfoWindows = function() {
	infowindow.setContent("");
	for(var i=0; i<markers.length; i++){
		if(markers[i].getAnimation !== null)
			markers[i].setAnimation(null);
	}
	if(infowindow.getMap() !== null)
		infowindow.close();	
};
/* 
This is our Knockout.js viewModel. 
There are two observables: filterText and filteredList.
filterText is bound to a text-input in index.html and is updated each time a key is pressed. Whenever the filterText value is updated then the search function is called using the new filterText as argument. Using the new filterText, the search function then filters the list and returns a new filteredList. Since filteredList is bound to the unordered list appearing in the side bar and each list item of that ul displays the title of every element foundin filteredList, a new filtered list is displayed.
*/
var appViewModel = function () {

	var self=this;
	self.scriptNotLoadedMsg = ko.observable("An error occurred. The Google Maps API has not been loaded correctly.");
	self.errorOccurred = ko.observable(false);
	self.filterText = ko.observable("");
	self.filteredList = ko.observableArray(data);

	// native js search function is used to implement the filter function

	self.search = function(value){
		self.filteredList([]);
		for (var i=0; i<markers.length; i++){
			markers[i].setMap(null);
			// if search using the title of the marker does not return -1
			// then marker is part of the filteredList
			if (markers[i].title.toLowerCase().search(filterText().toLowerCase()) != -1) { 
				markers[i].setMap(map);
				self.filteredList.push({title:markers[i].title, rank: markers[i].rank}) ;
			}
		}
		addClickListeners();

	};

/* 
This subscribe function is required so that every time filterText is updated the search function gets called with the new filterText as argument.
*/
	self.filterText.subscribe(self.search);
};

/*
GET request to Wikipedia API using .ajax().

On success, it sets the content of the infowindow with the information that was retrieved. If there is an error, then an error is displayed in the infoWindow.
*/
var ajaxCall = function(marker) { 
		$.ajax({
			type: "GET",
			url: marker.wikipedia_url,
			contentType: "application/json; charset=utf-8",	
			dataType: "json",
			timeout: 1000})
			.done(function (data) {
				if (data.query == undefined)
					infowindow.setContent("An error occured. Unable to pull content from Wikipedia.");
				else {
					var pages = data.query.pages;
					var text = pages[Object.keys(pages)[0]].extract;
					infowindow.setContent("<p id='info'><img class='wiki_img' src='"+marker.wikipedia_img+"' alt='hello'>" + text + "<b> Source: <a id='wiki' href='"+marker.wikipedia+"'>Wikipedia</a></b></p>");
				}
			})
			.fail(function (errorMessage) {
				infowindow.setContent("The AJAX request failed. Unable to pull content from Wikipedia.");
			});
};

ko.applyBindings(appViewModel);