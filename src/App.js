import { useState } from "react";
import { DynamicContextProvider, DynamicWidget } from "@dynamic-labs/sdk-react";

function App() {
  const dropdownValues = process.env.REACT_APP_THEMES.split(",").map(
    (theme) => theme.split(".")[0]
  );

  const versionValues = process.env.REACT_APP_THEME_VERSIONS.split(",");

  const [version, setVersion] = useState("");
  const [theme, setTheme] = useState(dropdownValues[0]);

  const makeOption = (value) => (
    <option value={value}>{value.replace("-", " ")}</option>
  );

  return (
    <div className="App">
      <link rel="stylesheet" href={`/css/${version}${theme}.css`} />
      <select onChange={(e) => setVersion(e.target.value)}>
        <option value="">unversioned</option>
        {versionValues.map(makeOption)}
      </select>
      <select onChange={(e) => setTheme(e.target.value)}>
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
