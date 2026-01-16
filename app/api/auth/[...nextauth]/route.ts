import NextAuth from "next-auth";
import GoogleProvier from "next-auth/providers/google";

const handler = NextAuth({
    providers: [
        GoogleProvier({
            clientId:process.env.GOOGLE_CLIENT_ID!,
            clientSecret:process.env.GOOGLE_CLIENT_SECRET!,
        })
    ],
    session: {
        strategy:  "jwt"
    },
});

export {handler as GET, handler as POST}