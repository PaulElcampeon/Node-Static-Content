const server = require('markdown-serve');

const path = require('path')

const errorMessage = require('../utils/errorMessage')

exports.renderMarkdown = (req, res,) => {
    var markdownServer = new server.MarkdownServer( path.resolve(__dirname, '../../content') )
 
    markdownServer.get(req.path, (err, result) => {
        // result is a MarkdownFile instance
        err ? res.status(404).render("template", { content: errorMessage.htmlErrorMessage(404,"Page Not Found") }) : res.render("template", { content: result.parseContent() })     
    });
}