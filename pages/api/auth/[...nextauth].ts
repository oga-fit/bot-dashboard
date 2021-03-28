import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
  providers: [
    Providers.Discord({
      clientId: process.env.DISCORD_CLIENT_ID,
      clientSecret: process.env.DISCORD_CLIENT_SECRET,
      scope: "identify guilds",
    }),
  ],
  callbacks: {
    signIn: async (user, account, profile) => {
      return true;
    },
    redirect: async (url, baseUrl) => {
      return baseUrl;
    },
    session: async (session) => {
      return session;
    },
    jwt: async (token, user, account, profile, isNewUser) => {
      if (account?.accessToken) token.accessToken = account.accessToken;
      if (profile) token.profile = profile;

      return Promise.resolve(token);
    },
  },
  pages: {
    signIn: "/auth/signin",
  },
});
