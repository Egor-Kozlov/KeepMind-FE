import ReactNativeHapticFeedback from 'react-native-haptic-feedback';

type VibrationType =
  | 'impactLight'
  | 'impactMedium'
  | 'impactHeavy'
  | 'notificationSuccess'
  | 'notificationWarning'
  | 'notificationError'
  | 'rigid'
  | 'soft';

/**
 * Play vibration
 * @param vibrationType Type of vibration
 * @example
 * playVibration('notificationSuccess');
 */

const playVibration = (
  vibrationType: VibrationType = 'notificationSuccess',
): void => {
  const options = {
    enableVibrateFallback: true,
    ignoreAndroidSystemSettings: false,
  };
  ReactNativeHapticFeedback.trigger(vibrationType, options);
};

export default playVibration;
