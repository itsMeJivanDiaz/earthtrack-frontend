# **EarthTrack Technical assessment**

EarthTrack Technical assessment for Frontend using React Native with TypeScript template and using the earthtrack-backend as data source.

#### Note:

Please ensure that the earthtrack-backend has been properly set up, as it will serve as the data source for this application.

## How to set up

#### Clone the repository

  ```bash
  git clone https://github.com/itsMeJivanDiaz/earthtrack-frontend.git
  ```

### Set variables in `src/services/Environment.ts`

  - This is only applicable if we changed the environment variables on the earthtrack-backend configuration.

  - The default `apiUrl` is `http://localhost:3460/api`.

  - Bear in mind that `localhost` is equivalent to `10.0.2.2` in Windows android emulator.

  - Change the `apiUrl` in the file to match changes on earthtrack-backend configuration.

  ### Installing dependencies

  - There is no special dependencies in this app, just a bunch of usually used packages.

  - Navigate (cd) to the root level of the project where the package.json can be found and run:

    ```bash
    npm install
    ```

### Starting the App

  - After setting up the environment, run this command to start the app in the emulator

  ```bash
    npm run start
  ```
 
### Building Release

  - Make sure to have the keystore credentials in `~/.gradle/gradle.properties`

  - The credentials looks like this:

    ```javascript
    MYAPP_UPLOAD_STORE_FILE=my-upload-key.keystore
    MYAPP_UPLOAD_KEY_ALIAS=my-key-alias
    MYAPP_UPLOAD_STORE_PASSWORD=****
    MYAPP_UPLOAD_KEY_PASSWORD=****
    ```

  - After setting the credentials, navigate (cd) to app/android and run:

    ```bash
    ./gradlew assembleRelease
    ```
  - After a successful build, the generated APK can be located at `android/app/build/outputs/apk/app-release.apk.`


# Version

OS: Windows 10 10.0.22631

Node: 18.18.0

npm: 9.9.0

react-native: 0.72.7
