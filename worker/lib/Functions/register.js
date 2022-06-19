const fs = require('fs')
const toMs = require('ms')
const { MessageType } = require("@adiwajshing/baileys");
const { sleep } = require("./myfunc");

const register = JSON.parse(fs.readFileSync('./worker/src/register/user.json'))
const capuser = JSON.parse(fs.readFileSync('./worker/src/captcha/capuser.json'))
const captcha = fs.readFileSync('./worker/src/captcha/captcha.json');


let addRegisterUser = (userid) => {
let obj = { id: userid }
	register.push(obj)
	fs.writeFileSync('./worker/src/register/user.json', JSON.stringify(register))
	}
	
let cekUser = (sender) => {
	let status = false
	Object.keys(register).forEach((i) => {
		if (register[i].id === sender) {
			status = true
			}
			})
			return status
			}
let cekCapuser = (sender) => {
	let status = false
	Object.keys(capuser).forEach((i) => {
		if (capuser[i].id === sender) {
			status = true
			}
			})
			return status
			}

module.exports = {
    addRegisterUser, 
    cekUser,
    cekCapuser, 
    register, 
    capuser, 
    captcha
}
