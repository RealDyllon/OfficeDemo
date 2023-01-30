// run `npx react-native-asset` to re-link assets

module.exports = {
  project: {
    ios:{},
    android:{}
  },
  dependencies: {
    'react-native-vector-icons': {
      platforms: {
        ios: null, // https://github.com/oblador/react-native-vector-icons#ios
      },
    },
  },
  assets:[
    './assets/images/',
    './assets/fonts/'
  ],
}
