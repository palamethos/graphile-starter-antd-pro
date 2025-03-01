import {
  ApolloClient,
  ApolloLink,
  FetchResult,
  HttpLink,
  InMemoryCache,
  Observable,
  Operation,
  split,
} from "@apollo/client";
// import { BatchHttpLink } from "@apollo/client/link/batch-http";
import { onError } from "@apollo/client/link/error";
// import { getDataFromTree } from "@apollo/client/react/ssr";
import { getOperationAST, GraphQLError, print } from "graphql";
import { Client, createClient } from "graphql-ws";
// import withApolloBase from "next-with-apollo";

// import { GraphileApolloLink } from "./GraphileApolloLink";

let wsClient: Client | null = null;

// ! TODO:NB
const isDev = true; // process.env.NODE_ENV !== "production"; // TODO: ? both prod and dev technically need corss origin due to port diff

class WebSocketLink extends ApolloLink {
  public request(operation: Operation): Observable<FetchResult> {
    return new Observable((sink) => {
      if (!wsClient) {
        sink.error(new Error("No websocket connection"));
        return;
      }
      return wsClient.subscribe<FetchResult>(
        { ...operation, query: print(operation.query) },
        {
          next: sink.next.bind(sink),
          complete: sink.complete.bind(sink),
          error: (err) => {
            if (err instanceof Error) {
              sink.error(err);
            } else if (err instanceof CloseEvent) {
              sink.error(
                new Error(
                  `Socket closed with event ${err.code}` + err.reason
                    ? `: ${err.reason}` // reason will be available on clean closes
                    : ""
                )
              );
            } else {
              sink.error(
                new Error(
                  (err as GraphQLError[])
                    .map(({ message }) => message)
                    .join(", ")
                )
              );
            }
          },
        }
      );
    });
  }
}

let _rootURL: string | null = null;
function createWsClient() {
  if (!_rootURL) {
    throw new Error("No ROOT_URL");
  }
  const url = `${_rootURL.replace(/^http/, "ws")}/graphql`;
  return createClient({
    url,
  });
}

export function resetWebsocketConnection(): void {
  if (wsClient) {
    wsClient.dispose();
  }
  wsClient = createWsClient();
}

// function makeServerSideLink(req: any, res: any) {
//   return new GraphileApolloLink({
//     req,
//     res,
//     postgraphileMiddleware: req.app.get("postgraphileMiddleware"),
//   });
// }

function makeClientSideLink(GRAPHQL_URL: string) {
  if (_rootURL) {
    throw new Error("Must only makeClientSideLink once");
  }
  _rootURL = GRAPHQL_URL;
  // const CSRF_TOKEN = data.query.CSRF_TOKEN;
  // const httpLink = new BatchHttpLink({
  const httpLink = new HttpLink({
    uri: `${GRAPHQL_URL}`,
    credentials: isDev ? "include" : "same-origin",
    // headers: {
    //   "CSRF-Token": CSRF_TOKEN,
      // "Access-Control-Allow-Credentials": true
    // },
  });
  wsClient = createWsClient();
  const wsLink = new WebSocketLink();

  // Using the ability to split links, you can send data to each link
  // depending on what kind of operation is being sent.
  const mainLink = split(
    // split based on operation type
    ({ query, operationName }) => {
      const op = getOperationAST(query, operationName);
      return (op && op.operation === "subscription") || false;
    },
    wsLink,
    httpLink
  );
  return mainLink;
}

export const withApollo = (GRAPHQL_URL: string): ApolloClient<any> => {
  // const { GRAPHQL_URL } = process.env;
  if (!GRAPHQL_URL) {
    throw new Error("GRAPHQL_URL envvar is not set");
  }

  const onErrorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
      graphQLErrors.map(({ message, locations, path }) =>
        console.error(
          `[GraphQL error]: message: ${message}, location: ${JSON.stringify(
            locations
          )}, path: ${JSON.stringify(path)}`
        )
      );
    if (networkError) console.error(`[Network error]: ${networkError}`);
  });

  const mainLink = makeClientSideLink(GRAPHQL_URL);

  const client = new ApolloClient({
    link: ApolloLink.from([onErrorLink, mainLink]),
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          queryType: true,
        },
      },
    }).restore({}),
    queryDeduplication: false, // ! TODO:NB
    defaultOptions: {
      query: {
        fetchPolicy: 'network-only'
      }
    }
  });

  return client;
};
