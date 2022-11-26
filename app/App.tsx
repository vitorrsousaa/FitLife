import { useFonts } from 'expo-font';
import { Main } from './src/Main';

export default function App() {
  const [isFontLoaded] = useFonts({
    'Urbanist-300': require('./src/assets/fonts/Urbanist-Light.ttf'),
    'Urbanist-400': require('./src/assets/fonts/Urbanist-Regular.ttf'),
    'Urbanist-500': require('./src/assets/fonts/Urbanist-Medium.ttf'),
    'Urbanist-600': require('./src/assets/fonts/Urbanist-SemiBold.ttf'),
    'Urbanist-700': require('./src/assets/fonts/Urbanist-Bold.ttf'),
  });

  if (!isFontLoaded) {
    return null;
  }

  return <Main />;
}
