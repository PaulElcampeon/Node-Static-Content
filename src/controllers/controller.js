const server = require('markdown-serve');

const path = require("path")

exports.renderMarkdown = (req, res) => {
    var markdownServer = new server.MarkdownServer( path.resolve(__dirname, '../../content') );
 
    markdownServer.get(req.path, (err, result) => {
        // result is a MarkdownFile instance
        err ? res.status(404).render("template", { content: "404" }) : res.render("template", { content: result.parseContent() })     
    });
}