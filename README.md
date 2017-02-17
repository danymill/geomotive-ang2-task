# Geomotiv.Task
## Description: 
As one of the focuses of our application is location based notifications, we would like to see how the candidate is going to implement a small website to display data on the map with showing description page when user clicks on a point. 

1. Map view with points from the server.
When the map is loaded, it should be centered in 59.879037 lat and 9.87903 lng;
The map should display points from the REST API:
http://api.dev.aispot.no/lighthouse/spot/nearby?lat=59.879037&lng=9.87903
When the user clicks on a point the website should load the detailed view for that point. 

2. Detailed view
This page is displayed when the user has clicked on a point on the map.
To load the detailed information about the place the app can use the REST API: 
http://api.dev.aispot.no/lighthouse/content/{id}
Where ID is a spot id from the first request.

For building UI we suggest to use either Bootstrap or Material Design libs.

##------------------------
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0-beta.31.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
