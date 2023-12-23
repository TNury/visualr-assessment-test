import type { CodegenConfig } from '@graphql-codegen/cli';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

function returnSchema() {
  const apiURL = process.env.cmsUrl;
  const schemaURL = `${apiURL}/graphql`;

  let schema = {};

  schema[schemaURL] = {
    headers: {
      Authorization: `${process.env.strapiKey}`,
    },
  };

  return [schema];
}

// Remember to dynamically set the config based on the environment
const config: CodegenConfig = {
  schema: returnSchema(),
  documents: 'src/graphql/queries/*.graphql',
  generates: {
    './src/types/queries/queries.ts': {
      plugins: ['typescript', 'typescript-operations'],
    },
    './src/graphql/queries/generated-query-document-nodes.ts': {
      plugins: ['typescript-document-nodes'],
    },
  },
};

export default config;
