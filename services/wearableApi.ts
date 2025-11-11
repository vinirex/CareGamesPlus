import GoogleFit, { Scopes } from "react-native-google-fit";

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
    google: 9100,
  };
}
export async function getSleepData() {
  // Mock de leitura até integração real
  return {
    google: 7.2,
  };
}   
