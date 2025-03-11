// Import with `` if you are using ESM
import * as Sentry from "@sentry/node"

Sentry.init({
  dsn: "https://6149a137384a3b1ffefc6d64a298562f@o4508958317674496.ingest.us.sentry.io/4508958323179520",
  integrations: [Sentry.mongooseIntegration()],
});