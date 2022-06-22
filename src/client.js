import { ApolloClient,  InMemoryCache,  gql } from "@apollo/client";

export const query = gql
  `{assembly(where: {id: "cl4orkygu0cld0c1fvt6un8j1"}) {
        name
    reference {
      ... on Assembly {
        id
        name
        reference {
          ... on Assembly {
            id
            name
          }
          ... on Hero {
            id
            name
            primaryHeader
            subheader
            description
          }
          ... on Section {
            id
            name
            header
          }
      }
    }
  }
}
 }
`

export const client = new ApolloClient({
    uri: "https://api-ap-southeast-2.graphcms.com/v2/cl4or4nq70qso01xxe94lesn8/master",
    cache: new InMemoryCache()
});
