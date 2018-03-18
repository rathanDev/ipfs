references

https://github.com/ipfs/js-ipfs-api/tree/master/examples/bundle-browserify

---

$ ipfs init
initializing IPFS node at /home/janarthan/.ipfs
generating 2048-bit RSA keypair...done
peer identity: QmRrUBoyTUxZvrAQL2E1zYWuJcqvPxuutx7CmVnZjQs2ew
to get started, enter:

	ipfs cat /ipfs/QmVLDAhCY3X9P2uRudKAryuQFPM5zqA3Yij1dY8FpGbL7T/readme


ipfs cat /ipfs/QmVLDAhCY3X9P2uRudKAryuQFPM5zqA3Yij1dY8FpGbL7T/quick-start

---

echo "hey Srilanka" > hey
ipfs add hey
added QmetD5mVTnuRdZoSZ27XCbPCtpZF2DZJQL6es9LuykHmcm hey

ipfs cat QmetD5mVTnuRdZoSZ27XCbPCtpZF2DZJQL6es9LuykHmcm

mkdir -p foo/bar
echo "foob in foob" > foo/bar/foob
ipfs add -r foo/
added QmaaQaaEUWuDsFDAgqGBYjPRhzYtP7eAziNYh4UYpwyX6C foo/bar/foob
added QmXYDNPhxPgTemuBQYiroR2hxqGNAwAMTVcs3TMcCWXo6k foo/bar
added QmUhCrhz45S1yCv4a2QNS7FrABFb9oRdyfwXmC4AK4c49R foo


janarthan@janarthan1:~/practice/ipfs$ ipfs ls QmUhCrhz45S1yCv4a2QNS7FrABFb9oRdyfwXmC4AK4c49R
QmXYDNPhxPgTemuBQYiroR2hxqGNAwAMTVcs3TMcCWXo6k 71 bar/
janarthan@janarthan1:~/practice/ipfs$ ipfs ls QmUhCrhz45S1yCv4a2QNS7FrABFb9oRdyfwXmC4AK4c49R/bar
QmaaQaaEUWuDsFDAgqGBYjPRhzYtP7eAziNYh4UYpwyX6C 21 foob
janarthan@janarthan1:~/practice/ipfs$ ipfs ls QmUhCrhz45S1yCv4a2QNS7FrABFb9oRdyfwXmC4AK4c49R/bar/
QmaaQaaEUWuDsFDAgqGBYjPRhzYtP7eAziNYh4UYpwyX6C 21 foob



narthan@janarthan1:~/practice/ipfs$ ipfs object get QmUhCrhz45S1yCv4a2QNS7FrABFb9oRdyfwXmC4AK4c49R
{"Links":[{"Name":"bar","Hash":"QmXYDNPhxPgTemuBQYiroR2hxqGNAwAMTVcs3TMcCWXo6k","Size":71}],"Data":"\u0008\u0001"}


janarthan@janarthan1:~/practice/ipfs$ ipfs id
{
	"ID": "QmRrUBoyTUxZvrAQL2E1zYWuJcqvPxuutx7CmVnZjQs2ew",
	"PublicKey": "CAASpgIwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQCtuhaUhuArJ/cxjZ00VqMpXwRyviNgKpPtF6+rI3o8J3NyVarsindLUX3V+4s3FtTPqP5WU+PlXebycGfPJofsXq4v3BSCE4O4knohwOhBhdJqpU3abjJ1sqVe5sqWJKGPnZx3/qUBX7CGZegZ9FHnKAo3iNWkE5nKsOI6Zqa/qdBaqpD2RY4tznMcl58eNVMQAumKF9g2vyUOFry1XyZiA7V+ei9476Ch72vtfS7nvQ3/FCug4Qs+RyJE7+uSRRlefleX2HaaFspU8jvy30dqF2tOl260snQkjChcENPMMfs4oL/t/J4mT1jBP4actlpoDq7DZd2qILyjnS2EyIEBAgMBAAE=",
	"Addresses": null,
	"AgentVersion": "go-ipfs/0.4.10/",
	"ProtocolVersion": "ipfs/0.1.0"
}


janarthan@janarthan1:~/practice/ipfs$ ipfs daemon
Initializing daemon...
Adjusting current ulimit to 2048...
Successfully raised file descriptor limit to 2048.
Swarm listening on /ip4/10.10.10.64/tcp/4001
Swarm listening on /ip4/127.0.0.1/tcp/4001
Swarm listening on /ip6/::1/tcp/4001
API server listening on /ip4/127.0.0.1/tcp/5001
Gateway (readonly) server listening on /ip4/127.0.0.1/tcp/8080
Daemon is ready


janarthan@janarthan1:~/practice/ipfs$ ipfs swarm peers
/ip4/104.236.176.52/tcp/4001/ipfs/QmSoLnSGccFuZQJzRadHn95W2CrSFmZuTdDWP8HXaHca9z
/ip4/104.236.179.241/tcp/4001/ipfs/QmSoLPppuBtQSGwKDZT2M73ULpjvfd3aZ6ha4oFGL1KrGM
/ip4/104.236.76.40/tcp/4001/ipfs/QmSoLV4Bbm51jM9C4gDYZQ9Cy3U6aXMJDAbzgu2fzaDs64
/ip4/178.62.158.247/tcp/4001/ipfs/QmSoLer265NRgSp2LA3dPaeykiS1J6DifTC88f5uVQKNAd


janarthan@janarthan1:~/practice/ipfs$ ipfs add -r pics/
added QmTbHpFrjMdGPDJvTPmL5XTeELKNkzHjQPKb7Tsk2uWrN4 pics/goldenRetriever.jpg
added QmSeXPiJbmTH9DmpSKw7hRDWkXZ4WKpUi5Tt8GgHA4ZPay pics


http://localhost:8080/ipfs/QmTbHpFrjMdGPDJvTPmL5XTeELKNkzHjQPKb7Tsk2uWrN4

https://gateway.ipfs.io/ipfs/QmTbHpFrjMdGPDJvTPmL5XTeELKNkzHjQPKb7Tsk2uWrN4


---
webUi
-----
http://localhost:5001/ipfs/QmPhnvn747LqwPYMJmQVorMaGbMSgA7mRRoyyZYz3DoZRQ/#/


