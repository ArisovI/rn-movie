import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../navigations/app.navigation";

export const useAppNavigation = () => {
  return useNavigation<NavigationProp<RootStackParamList>>();
};
