import Screen from "../components/Screen";
import { Button } from "react-native";
import { useContext } from "react";
import { AuthContext } from "../store/authContext";

const AccountScreen = () => {
  const {setIsLoggedIn} = useContext(AuthContext)

  return (
    <Screen>
      <Button title={"Sign out"} onPress={() => setIsLoggedIn(false)}/>
    </Screen>
  );
};

export default AccountScreen;
