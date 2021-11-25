import React from "react";
import { AuthContext, UserContext } from "../App";

export default function ComponentC() {
  const user = React.useContext(UserContext);
  const loginStatus = React.useContext(AuthContext);
  return (
    <div>
      ComponentC - User -{user} -{loginStatus}
    </div>
  );
}
