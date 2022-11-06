# Strapi App

```    
yarn create strapi-app backend
cd backend/
yarn add @strapi/plugin-graphql
yarn develop
```

# Restaurant API

```
curl -X GET http://localhost:1337/api/restaurants | jq
```


```
curl 'http://localhost:1337/graphql' -H 'Accept-Encoding: gzip, deflate, br' -H 'Content-Type: application/json' -H 'Accept: application/json' -H 'Connection: keep-alive' -H 'DNT: 1' -H 'Origin: https://dliulabs-scaling-happiness-x5w7qrgj9rfpq6j-1337.preview.app.github.dev' --data-binary '{"query":"{ restaurants{ data{ id attributes{ name image{ data{ attributes{ url } } } } } } }"}' --compressed | jq
```