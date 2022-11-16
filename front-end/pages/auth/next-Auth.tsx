import NextAuth, {
  Awaitable,
  NextAuthOptions,
  RequestInternal,
  User,
} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      authorize: function (credentials, req): Awaitable<User | null> {
        throw new Error("Unauthorized.");
      },
    }),
  ],
  pages:{
    signIn:'/auth/Login.tsx'
  }
};
