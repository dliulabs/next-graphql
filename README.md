# Intro

[Next.js with Apollo GraphQL Client](https://blog.logrocket.com/why-use-next-js-apollo/)

[Getting Started With Apollo Client in Next.js](https://www.apollographql.com/blog/apollo-client/next-js/next-js-getting-started/)

# Setup

```
yarn create next-app nextjs-apollo
cd nextjs-apollo
yarn add @apollo/client graphql 
```

# Server

[How To Build A GraphQL Server Using Next.js API Routes](https://www.smashingmagazine.com/2020/10/graphql-server-next-javascript-api-routes/)

```
curl --request POST \
    --header 'content-type: application/json' \
    --url 'http://localhost:3000/api/graphql' \
    --data '{"query":"{getUsers {id login avatar_url}}"}' | jq
```


```
curl --request POST \
    --header 'content-type: application/json' \
    --url 'http://localhost:3000/api/graphql' \
    --data '{"query":"query($name: String!){getUser(name:$name){login id avatar_url}}","variables":{"name":"dliulabs"}}' | jq
```
