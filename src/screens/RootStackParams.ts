import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
  Listagem: undefined;
  Favoritos: undefined;
};

export type PropsRoutes = NativeStackScreenProps<RootStackParamList>;
