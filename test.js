let chai=require("chai");
let chaiHttp=require("chai-http");
let server=require("./app");
let { JSDOM } = require('jsdom');
let { expect } = require("chai");
const { listeners } = require("./app");
// let { getNews } = require("./public/newsfeed");
const API_KEY = `4133a954c08249019e6f221dc4e9b1b8`;
const api_url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${API_KEY}`;

chai.should();
chai.use(chaiHttp);
//chai.use(require('chai-dom'));
//require('jsdom-global')();

// describe('search.html', () => {
//     beforeEach((done) => {
//      JSDOM.fromFile('./public/search.html')
//      .then((dom) => {
//        global.document = dom.window.document
//      })
//    .then(done, done);
//    });

//    describe("Level 1 heading", () => {
//     it("h1 element should say 'Hello World!'", (done) => {
//      let element = document.getElementById("Business");
//      element.click();
//      activelink(element);
//      expect(element).to.have.class("active");
//     //  var [articles,response]=getNews;
//     //   response.should.have.status(200);
//      done();
//     //  expect(articles).to.have.text("Hello World!")
//     })
//    })

// });

describe("Get/LandingPage",()=>{

    it("it should display landing page",(done)=>{
        chai.request(server)
            .get("/")
            .end((err,res)=>{
                res.should.have.status(200);
                done();
            });
    });
});

describe("Get/Newsfeed",()=>{

    it("it should display newsfeed",(done)=>{
        chai.request(server)
            .get("/newsfeed")
            .end((err,res)=>{
                res.should.have.status(200);
                done();
            });
    });
});

describe("Get/SearchNewsPage",()=>{

    it("it should display search news page",(done)=>{
        chai.request(server)
            .get("/searchnews")
            .end((err,res)=>{
                res.should.have.status(200);
                done();
            });
    });
});

describe("Get/anyOtherPage",()=>{

    it("it should display error message: resource not found",(done)=>{
        chai.request(server)
            .get("/anyotherpage")
            .end((err,res)=>{
                res.should.have.status(404);
                done();
            });
    });
});
