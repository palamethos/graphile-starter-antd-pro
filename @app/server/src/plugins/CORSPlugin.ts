/**
 * This server plugin injects CORS headers to allow requests only from a specific origin.
 */

import { Request, Response } from "express";

export default function makeAllowedOriginTweak(origin: string) {
  return {
    ["postgraphile:http:handler"](req: Request, { res }: { res: Response }) {
      res.setHeader("Access-Control-Allow-Origin", origin);
      res.setHeader("Access-Control-Allow-Methods", "HEAD, GET, POST");
      res.setHeader("Access-Control-Allow-Credentials", "true");
      res.setHeader(
        "Access-Control-Allow-Headers",
        [
          "Origin",
          "X-Requested-With",
          // Used by `express-graphql` to determine whether to expose the GraphiQL
          // interface (`text/html`) or not.
          "Accept",
          // Used by PostGraphile for auth purposes.
          "Authorization",
          // Used by GraphQL Playground and other Apollo-enabled servers
          "X-Apollo-Tracing",
          // The `Content-*` headers are used when making requests with a body,
          // like in a POST request.
          "Content-Type",
          "Content-Length",
          // For our 'Explain' feature
          "X-PostGraphile-Explain",
        ].join(", ")
      );
      res.setHeader(
        "Access-Control-Expose-Headers",
        ["X-GraphQL-Event-Stream"].join(", ")
      );
      return req;
    },
  };
}
