import { encryptText } from "./utils.js"
import fs from "fs"

const filePath = "message.txt"
const message = fs.readFileSync(filePath, "utf-8")
const encryptedMessage = encryptText(message).toString("base64")
fs.writeFileSync(filePath, "")
fs.writeFileSync(filePath, encryptedMessage)
