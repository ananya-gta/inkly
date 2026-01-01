import { AuthConfig } from "convex/server";

export default {
    providers: [
        {
            domain: "https://pumped-mastodon-1.clerk.accounts.dev",
            applicationID: "convex",
        },
    ]
} satisfies AuthConfig;