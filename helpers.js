function successfullMessage(msg) {
    return "✅ *QueenAmdi*:  ```" + msg + "```"
}
function errorMessage(msg) {
    return "🛑 *QueenAmdi*:  ```" + msg + "```"
}
function infoMessage(msg) {
    return "• *QueenAmdi :*  ```" + msg + "```"
}


module.exports = {
    successfullMessage,
    errorMessage,
    infoMessage
}
