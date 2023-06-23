const {
  shareAll,
  withModuleFederationPlugin,
  share,
} = require("@angular-architects/module-federation/webpack");
module.exports = withModuleFederationPlugin({
  // remotes: {
  //     "auth-mfe": "http://localhost:4200/remoteEntry.js",
  //     "book-mfe": "http://localhost:4300/remoteEntry.js"
  // },
  shared: share({
    "@angular/core": {
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    },
    "@angular/common": {
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    },
    "@angular/common/http": {
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    },
    "@angular/router": {
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    },
    "@angular/material": {
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    },
    "@ngx-translate/core": {
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    },
    "@ngx-translate/http-loader": {
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    },
  }),
});
