import { decryptText } from "./utils.js"
import fs from "fs"

const filePath = "message.txt"
const base64EncryptedMessage = fs.readFileSync(filePath, "utf-8")
const decryptedMessage = decryptText(Buffer.from(base64EncryptedMessage, "base64")).toString()
fs.writeFileSync(filePath, "")
fs.writeFileSync(filePath, decryptedMessage)
