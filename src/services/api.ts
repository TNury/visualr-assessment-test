import * as mappedQueriesRaw from '@vat/graphql/queries/generated-query-document-nodes';

const apiURL = process.env.NEXT_PUBLIC_cmsUrl;

async function callAPI(
  queryName: string,
  variables?: Record<string, any>,
  options?: Record<string, any>
) {
  const mappedQueries: Record<string, any> = mappedQueriesRaw;

  const query: string = mappedQueries[queryName].loc.source.body;

  const objectToSend = {
    query,
    variables,
  };

  const requestOptions: RequestInit = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.strapiKey}`,
    },
    body: JSON.stringify(objectToSend),
    ...options,
    // cache: 'no-store'
  };

  const rawResponse = await fetch(`${apiURL}/graphql`, requestOptions);

  const parsedResponse = await rawResponse.json();

  return parsedResponse;
}

export default callAPI;
