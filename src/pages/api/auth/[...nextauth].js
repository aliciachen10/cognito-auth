import NextAuth from 'next-auth';
// import Providers from 'next-auth/providers';
import CognitoProvider from 'next-auth/providers/cognito'
// import GithubProvider from "next-auth/providers/github"


export default NextAuth({
    providers: [
      CognitoProvider({
        clientId: process.env.COGNITO_CLIENT_ID,
        clientSecret: process.env.COGNITO_CLIENT_SECRET,
        issuer: process.env.COGNITO_DOMAIN, // Typically in the form of https://cognito-idp.{region}.amazonaws.com/{poolId}
      }),
      // GithubProvider({
      //   clientId: process.env.GITHUB_ID,
      //   clientSecret: process.env.GITHUB_SECRET,
      // })
      // ...other providers if any
    ],
    // ...other NextAuth options
  });