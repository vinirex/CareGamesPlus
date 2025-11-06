# Vivace App

A React Native Expo project for a medical/health app prototype. This repository contains the Expo application, screens, and a service to interact with wearable/health APIs.

## Project structure

- [vivace-app/.gitignore](vivace-app/.gitignore)  
- [vivace-app/app.json](vivace-app/app.json) — Expo config  
- [vivace-app/App.tsx](vivace-app/App.tsx) — Root App component (`App`)  
- [vivace-app/index.ts](vivace-app/index.ts) — Expo bootstrap (`registerRootComponent`)  
- [vivace-app/package.json](vivace-app/package.json) — Scripts & dependencies  
- [vivace-app/tsconfig.json](vivace-app/tsconfig.json) — TypeScript config  
- [vivace-app/assets/](vivace-app/assets/) — App images and icons  
- [vivace-app/screens/BenefitsScreen.tsx](vivace-app/screens/BenefitsScreen.tsx)  
- [vivace-app/screens/ChallengesScreen.tsx](vivace-app/screens/ChallengesScreen.tsx)  
- [vivace-app/screens/HomeScreen.tsx](vivace-app/screens/HomeScreen.tsx)  
- [vivace-app/screens/ProfileScreen.tsx](vivace-app/screens/ProfileScreen.tsx)  
- [vivace-app/screens/ReportsScreen.tsx](vivace-app/screens/ReportsScreen.tsx)  
- [vivace-app/sevices/wearableApi.ts](vivace-app/sevices/wearableApi.ts) — wearable / health integration helper (`wearableApi`)

## Key files / symbols
- Root component: [`App`](vivace-app/App.tsx)  
- Entry: [`index.ts`](vivace-app/index.ts)  
- Wearable API helper: [`wearableApi`](vivace-app/sevices/wearableApi.ts)  
- Expo config: [`app.json`](vivace-app/app.json)  
- Package metadata: [`package.json`](vivace-app/package.json)

## Dependencies

Main dependencies (from [vivace-app/package.json](vivace-app/package.json)):

- expo (~54)
- react (19.x)
- react-native (0.81.x)
- @react-navigation/native
- @react-navigation/bottom-tabs
- react-native-safe-area-context
- react-native-screens
- react-native-google-fit
- react-native-health

Note: `react-native-google-fit` and `react-native-health` are native modules. In a managed Expo workflow you typically need to:
- Use a custom dev client (Expo Development Build) or
- Eject/prebuild to the bare workflow to include native modules.

## Installation

1. Install Node dependencies:
```sh
npm install
# or
yarn
```

2. Start the Expo dev server:
```sh
npm run start
# or
yarn start
```

3. Run on a device/emulator:
```sh
npm run android
npm run ios
npm run web
```

## Native modules (Google Fit / Apple Health)

- For `react-native-google-fit` and `react-native-health`, follow each library's native setup instructions (permissions, plist/manifest entries). If you remain in the Expo managed workflow, create a custom development build:

```sh
# install expo-dev-client and create a dev build
npx expo install expo-dev-client
eas build --profile development --platform android
# or ios
```

Or prebuild/eject:

```sh
expo prebuild
# then follow native build steps with Android Studio / Xcode
```

See the helper at [`vivace-app/sevices/wearableApi.ts`](vivace-app/sevices/wearableApi.ts) for how the app intends to use wearable data.

## Development notes

- TypeScript strict mode is enabled via [`vivace-app/tsconfig.json`](vivace-app/tsconfig.json).
- Entry point is [`vivace-app/index.ts`](vivace-app/index.ts) which registers [`App`](vivace-app/App.tsx).
- Keep assets in [`vivace-app/assets/`](vivace-app/assets/).

## Troubleshooting

- If native modules fail to load in Expo Go, build a custom dev client or eject.
- Check permissions for health sensors on device settings and in native config (`app.json` / AndroidManifest / Info.plist).

## Contribution

1. Create a branch
2. Make sure TypeScript compiles
3. Run the app locally and validate screens under [`vivace-app/screens/`](vivace-app/screens/)

## License

Add your license information here.