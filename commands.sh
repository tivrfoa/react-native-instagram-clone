
$ npx react-native init instaclone
...
Done in 14.63s.

  Run instructions for iOS:
    • cd instaclone && react-native run-ios
    - or -
    • Open instaclone/ios/instaclone.xcodeproj in Xcode or run "xed -b ios"
    • Hit the Run button

  Run instructions for Android:
    • Have an Android emulator running (quickest way to get started), or a device connected.
    • cd instaclone && react-native run-android


$ react-native start

# Then in other tab:
$ react-native run-android


# Simulate json server:
# Fake api:
# https://gist.github.com/diego3g/9c033227012bba04b96fb78fb37cd370

$ yarn add json-server -D

# delay 1 second
# -w makes it watch changes
$ yarn json-server server.json -d 1000 -w

# or use your IP if you are testing on Android:
$ yarn json-server --host 10.0.0.104 server.json -d 1000 -w

$ yarn add react-navigation react-native-gesture-handler react-native-reanimated

# Add code to MainActivity.java
# https://github.com/kmagiera/react-native-gesture-handler/blob/master/docs/getting-started.md

$ yarn add styled-components