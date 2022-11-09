# 7 Part Tutorials

[Create a food ordering app with Strapi and Next.js](https://strapi.io/blog/nextjs-react-hooks-strapi-food-app-1)

Table of contents

🏗️ [Setup (part 1)](https://strapi.io/blog/nextjs-react-hooks-strapi-food-app-1)
🏠 [Restaurants (part 2)](https://strapi.io/blog/nextjs-react-hooks-strapi-restaurants-2)
🍔 [Dishes (part 3)](https://strapi.io/blog/nextjs-react-hooks-strapi-dishes-3)
🔐 [Authentication (part 4)](https://strapi.io/blog/nextjs-react-hooks-strapi-auth-4)
🛒 [Shopping Cart (part 5)](https://strapi.io/blog/nextjs-react-hooks-strapi-shopping-cart-5)
💵 [Order and Checkout (part 6)](https://strapi.io/blog/nextjs-react-hooks-strapi-checkout-6)
🚀 [Bonus: Deploy (part 7)](https://strapi.io/blog/nextjs-react-hooks-strapi-deploy)

# Part 1: Setup

## Setup Frontend

```
nvm use 18
yarn create next-app frontend
cd frontend
touch .env.development
yarn add @apollo/client
yarn add graphql
yarn dev

http://localhost:3000
```

```
yarn add reactstrap
```

## Setup Backend

```
nvm use 18
yarn create strapi-app backend
cd backend
yarn strapi install graphql
yarn develop
```

## Part 2: Create Restaurants page

```
http://localhost:1337/graphql
```

```
query GetAllRestaurants {
  restaurants {
    data {
      id
      attributes {
        name
        description
        image {
          data {
            id
            attributes {
              url
            }
          }
        }
      }
    }
  }
}
```

```
{
  "data": {
    "restaurants": {
      "data": [
        {
          "id": "1",
          "attributes": {
            "name": "Loveless Cafe",
            "description": "Nashville Old Time Favorite",
            "image": {
              "data": {
                "id": "1",
                "attributes": {
                  "url": "/uploads/cafe_67d9342223.jpg"
                }
              }
            }
          }
        },
        {
          "id": "2",
          "attributes": {
            "name": "Honky Tonk Central",
            "description": "Music City Legend ",
            "image": {
              "data": {
                "id": "2",
                "attributes": {
                  "url": "/uploads/honkytonk_3a51f8e34a.jpg"
                }
              }
            }
          }
        }
      ]
    }
  }
}
```
