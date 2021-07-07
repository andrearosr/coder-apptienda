import { TouchableNativeFeedback, TouchableOpacity, Platform } from "react-native";

const TouchableComponent = Platform.OS === 'android' && Platform.version >= 21
  ? TouchableNativeFeedback
  : TouchableOpacity;

export default TouchableComponent;