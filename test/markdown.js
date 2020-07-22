let chai = require("chai");
let chaiHttp = require("chai-http")
let server = require("../src/app")
const markdownServe = require('markdown-serve');
const path = require("path")
const fs = require('fs')

//Assertion Style
chai.should();

chai.use(chaiHttp);

describe('Markdown Views', () => {
    it("It should return status code 200", (done) => {
        chai.request(server)
            .get("/jobs")
            .end((err, res) => {
                res.should.have.status(200);
                done();
            })
    })

    it("It should return relevant html with the correct markdown content ", (done) => {
        const requestUrl = "/blog/june/company-update"
        chai.request(server)
            .get(requestUrl)
            .end((err, res) => {
                htmlResponseValidForRoute(res.text, requestUrl)
                    .then(result => {
                        result.should.be.true;
                        done();
                    })
            })
    })

    it("It should return status code 404", (done) => {
        chai.request(server)
            .get("/cats")
            .end((err, res) => {
                res.should.have.status(404);
                done();
            })
    })
})

const htmlResponseValidForRoute = (htmlText, pathOfResource) => {
    return new Promise((resolve, reject) => {
        const markdownServer = new markdownServe.MarkdownServer(path.resolve(__dirname, '../content'));

        markdownServer.get(pathOfResource, (err, result) => {
            const text = err ? null : result.parseContent()
            resolve(htmlText.includes(text));
        });
    });
}