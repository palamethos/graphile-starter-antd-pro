module.exports = {
  client: {
    includes: [`${__dirname}/@app/web/src/**/*.graphql`],
    service: {
      name: "postgraphile",
      localSchemaFile: `${__dirname}/data/schema.graphql`,
    },
  },
};
