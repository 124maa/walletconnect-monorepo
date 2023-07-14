// Polyfill TextEncode / TextDecode
import "fast-text-encoding";

// Polyfill crypto.getRandomvalues
import "react-native-get-random-values";

// Polyfill Buffer
if (typeof Buffer === "undefined") {
  global.Buffer = require("buffer").Buffer;
}

if (typeof global?.Linking === "undefined") {
  try {
    global.Linking = require("react-native").Linking;
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error("react-native-compat: react-native.Linking is not available");
  }
}

if (typeof global?.Platform === "undefined") {
  try {
    global.Platform = require("react-native").Platform;
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error("react-native-compat: react-native.Platform is not available");
  }
}

if (typeof global?.isOnline === "undefined") {
  try {
    require("react-native").NetInfo.addEventListener((state) => {
      // eslint-disable-next-line no-console
      console.log("Connection type", state.type);
      // eslint-disable-next-line no-console
      console.log("Is connected?", state.isConnected);
      global.isOnline = state.isConnected;
    });
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error("react-native-compat: react-native.NetInfo is not available");
  }
}
