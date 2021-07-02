import { gql, makeExtendSchemaPlugin } from "graphile-utils";

// import * as db from "zapatos/db";
// import type * as s from "zapatos/schema";
import { OurGraphQLContext } from "../../middleware/installPostGraphile";
import { ERROR_MESSAGE_OVERRIDES } from "../../utils/handleErrors";

const WorkerPlugin = makeExtendSchemaPlugin((build) => ({
  typeDefs: gql`
    input JobStatusInput {
      jobId: UUID!
    }

    type JobStatusPayload {
      jobId: UUID
      exists: Boolean
      running: Boolean
    }

    extend type Mutation {
      """
      Use this mutation to see if a Worker is is busy.
      """
      jobStatus(input: JobStatusInput!): JobStatusPayload
    }
  `,
  resolvers: {
    Mutation: {
      async jobStatus(
        _mutation,
        args,
        context: OurGraphQLContext,
        resolveInfo
      ) {
        const { jobId } = args.input;

        // console.log("args?", args.input);

        const { rootPgPool } = context;
        try {
          // @TODO: consider using zapatos

          // find job
          const {
            rows: [job],
          } = await rootPgPool.query(
            `
            select * from graphile_worker.jobs where id = $1 limit 1`,
            [jobId]
          );

          // console.log("test2", test2);

          return {
            data: {
              jobId,
              exists: !!job.id, // @TODO: better usage, like see if now > run_at
              running: !!job.id,
            },
          };
        } catch (e) {
          const { code } = e;
          const safeErrorCodes = [
            // @TODO: error codes
            ...Object.keys(ERROR_MESSAGE_OVERRIDES),
          ];
          if (safeErrorCodes.includes(code)) {
            throw e;
          } else {
            console.error(
              "Unrecognised error in WorkerPlugin; replacing with sanitized version"
            );
            console.error(e);
            const error = new Error("Query failed");
            error["code"] = code;
            throw error;
          }
        }
      },
    },
  },
}));

export default WorkerPlugin;
