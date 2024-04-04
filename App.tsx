import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./telas/login";
import Registro from "./telas/registro";
import Chat from "./telas/chat";

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login" screenOptions={{headerShown: false}}>
        <Stack.Screen name="login" component={Login}/>
        <Stack.Screen name="registro" component={Registro}/>
        <Stack.Screen name="chat" component={Chat}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}