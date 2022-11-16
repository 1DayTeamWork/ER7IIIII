import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      async authorize(credentials, req) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        const res = await fetch("http://localhost:3000/api/auth/signin", {
          method: "POST",
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" },
        });
        const user = await res.json();

        //     // If no error and we have user data, return it
        if (res.ok && user) {
          return user;
        }
        // Return null if user data could not be retrieved
      },
    }),
  ],

  pages: {
    // signIn: '/auth/signin', // Displays signin buttons
    // signOut: '/auth/signout', // Displays form with sign out button
    // error: '/auth/error', // Error code passed in query string as ?error=
    // verifyRequest: '/auth/verify-request', // Used for check email page
    newUser: "/bully", // If set, new users will be directed here on first sign in
  },

  events: {
    signIn: ({ user, account, profile, isNewUser }) => {
      console.log(`isNewUser: ${JSON.stringify(isNewUser)}`);
    },
  },
  debug: false,
};

export default authOptions;
