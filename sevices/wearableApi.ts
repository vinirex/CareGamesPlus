import AppleHealthKit, {
  HealthKitPermissions,
} from "react-native-health";
import GoogleFit, { Scopes } from "react-native-google-fit";

export async function initAppleHealth() {
  const permissions: HealthKitPermissions = {
    permissions: {
        read: [
            AppleHealthKit.Constants.Permissions.StepCount,
            AppleHealthKit.Constants.Permissions.DistanceWalkingRunning,
            AppleHealthKit.Constants.Permissions.ActiveEnergyBurned,
            AppleHealthKit.Constants.Permissions.SleepAnalysis,
        ],
        write: []
    },
  };

  return new Promise((resolve, reject) => {
    AppleHealthKit.initHealthKit(permissions, (error: string) => {
      if (error) reject(error);
      else resolve(true);
    });
  });
}

export async function initGoogleFit() {
  const options = {
    scopes: [
      Scopes.FITNESS_ACTIVITY_READ,
      Scopes.FITNESS_BODY_READ,
      Scopes.FITNESS_SLEEP_READ,
    ],
  };

  try {
    const result = await GoogleFit.authorize(options);
    return result.success;
  } catch (error) {
    console.error("Google Fit auth error:", error);
    return false;
  }
}

export async function getDailySteps() {
  // Mock de leitura até integração real
  return {
    apple: 8500,
    google: 9100,
  };
}
