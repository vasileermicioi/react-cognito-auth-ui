export const amplifyConfig = {
  Auth: {
    userPoolId: "",
    userPoolWebClientId: "",
    mandatorySignIn: false,
    authenticationFlowType: "USER_PASSWORD_AUTH",
    oauth: {
      scope: [
        "phone",
        "email",
        "profile",
        "openid",
        "aws.cognito.signin.user.admin",
      ],
      redirectSignIn: "http://localhost:3000/",
      redirectSignOut: "http://localhost:3000/",
      responseType: "code",
    },
  },
};
