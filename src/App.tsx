import React from "react";
import Amplify from "aws-amplify";
import { AmplifyAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";

import { amplifyConfig } from "./aws-config";

Amplify.configure(amplifyConfig);

const App = () => (
  <div style={{ maxWidth: 800, margin: "0 auto" }}>
    <AmplifyAuthenticator>
      <div>
        <h4>You are authenticated</h4>
        <AmplifySignOut />
      </div>
    </AmplifyAuthenticator>
  </div>
);

export default App;
