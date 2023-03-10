import crypto from "crypto"
import fs from "fs"
const { publicKey, privateKey } = crypto.generateKeyPairSync("rsa", {
	modulusLength: 2048,
	publicKeyEncoding: {
		type: "pkcs1",
		format: "pem",
	},
	privateKeyEncoding: {
		type: "pkcs1",
		format: "pem",
	},
})

console.log("====================================")

fs.writeFileSync("public.pem", publicKey)
fs.writeFileSync("private.pem", privateKey)

console.log("====================================")
