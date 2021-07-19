// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  currencyFormat: {
    symbol: '!',
    name: 'dollar'
  },
  basePath: 'http://162.241.201.237:7000/api/',
  imageUrl: 'http://162.241.201.237:7000/',

  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwZWQxY2M3Njk5ZjA3MWU0MDk2YTNkYiIsImlhdCI6MTYyNjM1MjU1MSwiZXhwIjoxNzIxMzkyNTUxfQ.7RVF85X4A4hT_gPZnP_EP8uf9nE_Vg5sSma1Zn9mWqs'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
