# Moodster
Moodster Application Project

# Setting up the Development Environment

Go to https://facebook.github.io/react-native/docs/getting-started.html, and select the **React Native CLI Quickstart** tab as this project doesn't use Expo. **Follow these instructions to setup your development environment.**

### Windows/Linux

You will need Node, the React Native command line interface, Python2, a JDK, and Android Studio.

### macOS
 
You will need Node, Watchman, the React Native command line interface, and Xcode.

*Note: A Mac is required to build projects with native code for iOS.*


# Running the App
Once you've installed the relevant dependancies and have either a phyiscal/virtual device connected. Run the following commands
```
cd moodster-app
npm install
```

### Android
```
react-native run-android
```

### iOS
```
react-native run-ios
```

For the app to connect to the local API correctly, follow the installation steps for https://github.com/JBonser/moodster-api.
If you are running the app on a phyiscal device, the device will need to be on the same network as the host machine and you will need to follow these steps:

### Android

1) Connect Android mobile device with USB cable to laptop
2) Enable USB Debugging on mobile device
3) On host machine, run ```adb reverse tcp:5000 tcp:5000```
    5000 is the standard port used for the local sqlite db, update accordingly.

### iOS

1) On Mac, go to System preferences/sharing
2) Enable remote management
