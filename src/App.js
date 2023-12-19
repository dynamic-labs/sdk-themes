import { useState } from "react";
import { DynamicContextProvider, DynamicWidget } from "@dynamic-labs/sdk-react-core";
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";

function App() {
  const dropdownValues = process.env.REACT_APP_THEMES.split(",").map(
    (theme) => theme.split(".")[0]
  );

  const [theme, setTheme] = useState(`/css/${dropdownValues[0]}.css`);

  const makeOption = (value) => (
    <option value={value}>{value.replace("-", " ")}</option>
  );

  return (
    <div className="App">
      <link rel="stylesheet" href={theme} />
      <select onChange={(e) => setTheme(`/css/${e.target.value}.css`)}>
        {dropdownValues.map(makeOption)}
      </select>
      <br />
      <br />
      <DynamicContextProvider
        settings={{
          environmentId: "793f471f-b1a3-43d1-8cbf-d0aa5a0a3fc0",
          walletConnectors: [EthereumWalletConnectors],
          toolkitEnabled: true,
        }}
      >
        <DynamicWidget />
      </DynamicContextProvider>
    </div>
  );
}

export default App;
