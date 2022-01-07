// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  urlApi: 'https://platzi-store.herokuapp.com',
  firebase: {
    projectId: 'angular-store-459b4',
    appId: '1:730241601405:web:32d34d72190d0c93070614',
    storageBucket: 'angular-store-459b4.appspot.com',
    locationId: 'us-central',
    apiKey: 'AIzaSyAl947hCHaIfB40nILwNFSkQINnKO8H3iU',
    authDomain: 'angular-store-459b4.firebaseapp.com',
    messagingSenderId: '730241601405',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
