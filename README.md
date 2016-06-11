# Front-End Web Developer Nanodegree
# Project: The Tallest Buildings of Montréal

### How to Launch the Application

- To launch the application, download the folder containing the source files and open `index.html`.

### Overview of the Project

- The project is a one-page application that displays the 26 tallest buildings in the city of Montreal. 
- The application can be divided into four sections: the sidebar, the top navbar, the map, and the filter.
- The filter is an input box allowing the user to enter text. 
- The locations are filtered based on the text entered in the filter input box.
- At any given time, only the locations that match the filter text appear in the list or on the map.
- When the application is initially loaded, all buildings are located on the map and information about them can be obtained by either clicking on their marker or on the item in the list appearing in the sidebar.
- When a user clicks on a marker or on a list item, the associated marker is animated and an InfoWindow is opened.
- The InfoWindow contains information about the building, which is pulled from Wikipedia via AJAX request. A picture of the building is also displayed. 
- The application is responsive and should be usable on all devices.
- The map is generated with the help of Google Maps API.
- Knockout.js, which provides declarative bindings, dependency tracking and automatic UI refreshes has been used in this project.

#### Learning objectives

- The goal of this project was to learn how design patterns can assist in developing a manageable codebase. 

- More specifically, how frameworks (Knockout.js, in this case) can decrease the time required to develop an application and provide a number of utilities to use.

- Another objective was to learn how to implement third-party APIs (Wikipedia and Google Maps API, in this case) that provide valuable data sets, which can improve the quality of various applications.

### Project Specifications from Udacity

- Use Knockout.js to handle list, filter and any other information on the page that is subject to changing state.*

- Do not use Knockout.js to handle anything the Map API is used for, creating markers, tracking their click events, making the map, and refreshing the map.*

- Write code required to add a full-screen map to your page using the Google Maps API. 

- For the sake of efficiency, the map API should be called only once.

- Write code to display map markers identifying at least 5 interesting locations. 

- These locations should be displayed by default when the page is loaded.

- Implement a list view of the set of locations defined in the previous step.

- Implement a filter option that uses an input field to filter both the list view and the map markers displayed by default on load should be provided. 

- The list view and the markers should update accordingly.

- Providing a search function through a third-party API is not enough to meet the filter option specifications*

- Implement functionality that provides information when a map marker or list view entry is click (e.g. yelp, wikipedia, flickr, etc.) using third-party APIs. 

- StreetView and Places don't count as an additional 3rd party API because they are libraries included in the Google MAPS API.

- Provide attribution to the data sources and APIs used.

- Implement functionality that animate a map marker whenever the list item associated with it or the map marker itself is selected.

- Implement a functionality to open an InfoWindow with the information about the location whenever a location is selected for the list view or its map market is selected directly.

- The app interface should be intuitive to use.

- Input text area to filter locations should be easy to locate.

- It should be easy to understand what set of locations is being filtered.

- Selecting a location via a list item or map marker should cause the map market to bounce or in some other way animate to indicate that the location has been selected and associated info window should open above the map market with additional information.

- Error Handling: In case of error (e.g. in a situation where a third party API does not return the expected result) we expect your webpage to do one of the following: A message is displayed notifying the user that the data can't be loaded, OR There are no negative repercussions to the UI. 

#### Files of the project: 

	js/app.js: contains the logic of the application.
	index.html: contains the structure of the page.
	css/main.css: css stylesheet.
	README.md: the readme file.
	
#### License

MIT License

Copyright (c) 2016 minimal1st

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the 	Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
