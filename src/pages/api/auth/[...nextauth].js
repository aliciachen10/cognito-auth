import NextAuth from 'next-auth';
// import Providers from 'next-auth/providers';
import CognitoProvider from 'next-auth/providers/cognito'

console.log("process.env.COGNITO_DOMAIN", process.env.COGNITO_DOMAIN)
console.log("process.env.COGNITO_DOMAIN", process.env.COGNITO_DOMAIN)
console.log("process.env.COGNITO_DOMAIN", process.env.COGNITO_DOMAIN)
export default NextAuth({
    providers: [
      CognitoProvider({
        clientId: process.env.COGNITO_CLIENT_ID,
        clientSecret: process.env.COGNITO_CLIENT_SECRET,
        issuer: process.env.COGNITO_DOMAIN, // Typically in the form of https://cognito-idp.{region}.amazonaws.com/{poolId}
      }),
      // ...other providers if any
    ],
    // ...other NextAuth options
  });