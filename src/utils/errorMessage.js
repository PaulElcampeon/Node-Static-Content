exports.htmlErrorMessage = (errorCode, message) => {
    return `<h1>Error</h1>
    <p>${errorCode}</p>
    <p>${message}</p>`
}