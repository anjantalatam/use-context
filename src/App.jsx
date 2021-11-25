import React from "react";
import "./App.css";
import ComponentA from "./components/ComponentA";

export const UserContext = React.createContext();
export const AuthContext = React.createContext();

function App() {
  return (
    <div className="App">
      I am App: I am Passing the data from here to my grand-grand Child
      ComponentC without prop drilling
      <AuthContext.Provider value={"logged In"}>
        <UserContext.Provider value={"anjan"}>
          <ComponentA />
        </UserContext.Provider>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
