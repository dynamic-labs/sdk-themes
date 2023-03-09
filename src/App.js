import { useState } from "react";
import { DynamicContextProvider, DynamicWidget } from "@dynamic-labs/sdk-react";

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
          environmentId: "2731d0a2-d567-424c-b9ac-8ca95b4be452",
          toolkitEnabled: true,
          multiWalletEnabled: true,
        }}
      >
        <DynamicWidget />
      </DynamicContextProvider>
    </div>
  );
}

export default App;
