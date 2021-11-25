import React from "react";
import "./App.css";
import ComponentA from "./components/ComponentA";

export const UserContext = React.createContext();
export const AuthContext = React.createContext();

function App() {
  return (
    <div className="App">
      I am App: I am Passing data from here to my grand-grand Child ComponentC
      without prop drilling
      <AuthContext.Provider value={"logged In"}>
        <UserContext.Provider value={"anjan"}>
          <ComponentA />
        </UserContext.Provider>
      </AuthContext.Provider>
      <div>
        <a
          className="github-fork-ribbon black-bg"
          href="https://anjantalatam.github.io/use-context"
          data-ribbon="View Code on GitHub"
          title="View Code on GitHub"
        >
          View Code on GitHub
        </a>
      </div>
    </div>
  );
}

export default App;
