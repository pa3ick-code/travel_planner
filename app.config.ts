import 'dotenv/config';
import { ExpoConfig } from 'expo/config'; 


export default ({ config }: { config: ExpoConfig }) => {
  return {
    ...config,
    extra: {
      apiKey: process.env.FIREBAE_API_KEY, 
      authDomain: process.env.FIREBAE_AUTH_DOMAIN,
      projectId: process.env.FIREBAE_PROJECT_ID,
      storageBucket: process.env.FIREBAE_STORAGE_BUCKET,
      messagingSenderId: process.env.FIREBAE_MESSAGING_SENDER_ID,
      appId: process.env.FIREBAE_APP_ID,
      measuringId: process.env.FIREBAE_MEASUREMENT_ID
    },
  };
};
