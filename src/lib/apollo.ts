import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4w5ys3i25ix01t7dnx85iez/master',
    cache: new InMemoryCache()
})