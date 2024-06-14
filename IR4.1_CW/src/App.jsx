import Password from "./components/Password";
import Tabs from "./components/Tabs";
import Text from "./components/Text";
import Theme from "./components/Theme";

const App = () => {
  return (
    <main>
      <Theme />
      <hr />
      <Password />
      <hr />
      <Text />
      <hr />
      <Tabs />
    </main>
  );
};

export default App;
