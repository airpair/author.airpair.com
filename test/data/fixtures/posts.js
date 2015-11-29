module.exports = {


  higherOrder: {
    "_id" : ObjectId("55c02b22d131551100f1f0da"),
    "title" : "Mastering ES6 higher-order functions for Arrays",
    "md" : "Higher-order functions are beautifully concise yet expressive when dealing with data. Elevate your functional programming skills by learning ES6 higher-order functions for Arrays!",
    "publishHistory" : [
      {
        "touch" : {
          "action" : "publish",
          "utc" : ISODate("2015-09-15T18:39:06.632Z"),
          "by" : {
            "_id" : ObjectId("538bae591c67d1a4859d3333"),
            "name" : "Tiago Romero Garcia"
          }
        },
        "commit" : "60f98aa4989c23b4fe06f9d711e77d16ca2f296b",
        "_id" : ObjectId("55f865ca272fbe11004303d7")
      }
    ],
    "editHistory" : [
      {
        "_id" : ObjectId("55c02b22d131551100f1f0db"),
        "utc" : ISODate("2015-08-04T03:01:54.731Z"),
        "action" : "createByAuthor",
        "by" : {
          "name" : "Tiago Romero Garcia",
          "_id" : ObjectId("5333e0fd66a6f999a4651100")
        }
      },
      {
        "_id" : ObjectId("55f47468529e2e11008268f5"),
        "action" : "updateHEAD",
        "utc" : ISODate("2015-09-12T18:52:24.805Z"),
        "by" : {
          "_id" : ObjectId("538bae591c67d1a4859d3333"),
          "name" : "Tiago Romero Garcia"
        }
      }
    ],
    "tags" : [
      { "_id" : ObjectId("514825fa2a26ea020000001f"), "sort" : "0" },
      { "_id" : ObjectId("5181d0a966a6f999a465ecca"), "sort" : "1" },
      { "_id" : ObjectId("5181d0a966a6f999a465ec0a"), "sort" : "2" }
    ],
    "forkers" : [
      {
        "email" : "rm@test.com",
        "name" : "Rich McLaughlin",
        "userId" : ObjectId("54f711888438550c00e98aa0"),
        "_id" : ObjectId("55ddc500f8279f110030d88d"),
        "social" : { "gh" : { "username" : "RichMcL" } }
      },
      {
        "email" : "sl@test.com",
        "name" : "Sean Lynch",
        "userId" : ObjectId("55e90102d2b5001100b0fc79"),
        "_id" : ObjectId("55e90c2ad2b5001100b0fe35"),
        "social" : { "gh" : { "username" : "slynch13" } }
      }
    ],
    "reviews" : [
      {
        "type" : "post-survey-inreview",
        "by" : {
          "_id" : ObjectId("5524440217321011003de445"),
          "name" : "julien renaux",
          "email" : "j.r@test.com"
        },
        "_id" : ObjectId("55dcb002c184971100440bbe"),
        "votes" : [
          {
            "_id" : ObjectId("55dcb057c184971100440bd5"),
            "val" : 1,
            "by" : {
              "_id" : ObjectId("538bae591c67d1a4859d3333"),
              "name" : "Tiago Romero Garcia"
            }
          }
        ],
        "replies" : [
            {
              "by" : {
                "_id" : ObjectId("538bae591c67d1a4859d3333"),
                "name" : "Tiago Romero Garcia",
              },
              "comment" : "Thanks Julien for feedback and rating!",
              "_id" : ObjectId("55dcb061c184971100440bd7")
            }
        ],
        "questions" : [
          {
              "answer" : "4",
              "prompt" : "How would you rate the quality of this post?",
              "key" : "rating",
              "idx" : 0,
              "_id" : ObjectId("55dcb002c184971100440bc0")
          },
          {
              "answer" : "Good stuff!",
              "prompt" : "Overall comment",
              "key" : "feedback",
              "idx" : 1,
              "_id" : ObjectId("55dcb002c184971100440bbf")
          }
        ]
      },
      {
          "_id" : ObjectId("55dd1e01f8279f110030ae39"),
          "by" : {
            "_id" : ObjectId("527bd05966a6f999a465fb0c"),
            "name" : "Eric Mann",
            "email" : "em@test.com"
          },
          "type" : "post-survey-inreview",
          "votes" : [
            {
                "_id" : ObjectId("55ddedb0f8279f110030e465"),
                "val" : 1,
                "by" : {
                  "_id" : ObjectId("538bae591c67d1a4859d3333"),
                  "name" : "Tiago Romero Garcia",
                }
            }
          ],
          "replies" : [
            {
              "_id" : ObjectId("55ddedc31241ac1100837e2c"),
              "comment" : "Thanks Eric for your super valuable feedback!",
              "by" : {
                  "_id" : ObjectId("538bae591c67d1a4859d3333"),
                  "name" : "Tiago Romero Garcia"
              }
            }
          ],
          "questions" : [
            {
              "_id" : ObjectId("55dd1e01f8279f110030ae3b"),
              "idx" : 0,
              "key" : "rating",
              "prompt" : "How would you rate the quality of this post?",
              "answer" : "5"
            },
            {
              "_id" : ObjectId("55dd1e01f8279f110030ae3a"),
              "idx" : 1,
              "key" : "feedback",
              "prompt" : "Overall comment",
              "answer" : "Higher-order array functions are tricky to grasp, so seeing applicable code examples (particularly the same example re-used in different situations) makes the sophisticated code and syntax much more approachable."
            }
          ]
      },
      {
        "updated" : ISODate("2015-08-26T14:05:35.685Z"),
        "_id" : ObjectId("55ddc784f8279f110030d967"),
        "by" : {
          "_id" : ObjectId("54f711888438550c00e98aa0"),
          "name" : "Rich McLaughlin",
          "email" : "rm@test.com"
        },
        "type" : "post-survey-inreview",
        "votes" : [
          {
            "by" : {
                "_id" : ObjectId("538bae591c67d1a4859d3333"),
                "name" : "Tiago Romero Garcia",
            },
            "val" : 1,
            "_id" : ObjectId("55ddedb1f8279f110030e467")
          }
        ],
        "replies" : [
          {
            "by" : {
              "_id" : ObjectId("538bae591c67d1a4859d3333"),
              "name" : "Tiago Romero Garcia",
            },
            "comment" : "Hey Rich! Thanks so much for your feedback! Great idea, I will add a synopsis :)",
            "_id" : ObjectId("55ddede01241ac1100837e3b")
          }
        ],
        "questions" : [
          {
              "answer" : "5",
              "prompt" : "How would you rate the quality of this post?",
              "key" : "rating",
              "idx" : 0,
              "_id" : ObjectId("55ddc7aff8279f110030d978")
          },
          {
              "answer" : "Great examples, Tiago.  This is a really strong follow up to your previous post.  Don't forget to add your synopsis section :)  I would add a prominent link to your previous post in the synopsis as well",
              "prompt" : "Overall comment",
              "key" : "feedback",
              "idx" : 1,
              "_id" : ObjectId("55ddc7aff8279f110030d977")
          }
        ]
      },
      {
          "updated" : ISODate("2015-09-15T17:53:12.664Z"),
          "_id" : ObjectId("55efa1326882141100f368f5"),
          "by" : {
              "_id" : ObjectId("549342348f8c80299bcc56c2"),
              "name" : "Jonathon Kresner"
          },
          "type" : "post-survey-inreview",
          "votes" : [],
          "replies" : [
            {
              "by" : {
                  "_id" : ObjectId("549342348f8c80299bcc56c2"),
                  "name" : "Jonathon Kresner"
              },
              "comment" : "I think the syntax argument is not as strong as a function that returns a function demonstrating how one can be more DRY and reuse code.",
              "_id" : ObjectId("55efa4db6882141100f36998")
            }
          ],
          "questions" : [
              {
                  "_id" : ObjectId("55f85b08272fbe110043013d"),
                  "idx" : 0,
                  "key" : "rating",
                  "prompt" : "How would you rate the quality of this post?",
                  "answer" : "4"
              },
              {
                  "_id" : ObjectId("55f85b08272fbe110043013c"),
                  "idx" : 1,
                  "key" : "feedback",
                  "prompt" : "Overall comment",
                  "answer" : "(1) Nice ending to a great ready :p"
              }
          ]
      }
    ],
    "updated" : ISODate("2015-09-15T18:39:06.633Z"),
    "lastTouch" : {
        "by" : {
            "name" : "Tiago Romero Garcia",
            "_id" : ObjectId("5333e0fd66a6f999a4651100")
        },
        "utc" : ISODate("2015-09-15T18:39:06.633Z"),
        "action" : "publish"
    },
    "created" : ISODate("2015-08-04T03:01:54.730Z"),
    "by" : {
        "expertId" : ObjectId("538bae8a9768760200ee9e15"),
        "avatar" : "//0.gravatar.com/avatar/5cac784a074b86d771fe768274f6860c",
        "username" : "tiagorg",
        "bio" : "Technical Manager at @AvenueCode and Technical Leader at @Macys, heavily interested in cutting-edge front-end technologies. http://tiagorg.com",
        "name" : "Tiago Romero Garcia",
        "userId" : ObjectId("5333e0fd66a6f999a4651100")
    },
    "assetUrl" : "https://cloud.githubusercontent.com/assets/764487/9474195/82d6a242-4b35-11e5-87a0-43561850b53a.jpg",
    "meta" : {
        "ogUrl" : "https://www.airpair.com/javascript/posts/mastering-es6-higher-order-functions-for-arrays",
        "ogType" : "article",
        "ogTitle" : "Mastering ES6 higher-order functions for Arrays",
        "title" : "Mastering ES6 higher-order functions for Arrays",
        "description" : "Higher-order functions are beautifully concise yet expressive when dealing with data. Elevate your functional programming skills by learning ES6 higher-order functions for Arrays!",
        "ogDescription" : "Higher-order functions are beautifully concise yet expressive when dealing with data. Elevate your functional programming skills by learning ES6 higher-order functions for Arrays!",
        "canonical" : "https://www.airpair.com/javascript/posts/mastering-es6-higher-order-functions-for-arrays",
        "ogImage" : "https://cloud.githubusercontent.com/assets/764487/9474195/82d6a242-4b35-11e5-87a0-43561850b53a.jpg"
    },
    "slug" : "mastering-es6-higher-order-functions-for-arrays",
    "github" : {
        "repoInfo" : {
            "author" : "tiagorg",
            "authorTeamName" : "mastering-es6-higher-order-functions-for-arrays-00f1f0da-author",
            "authorTeamId" : 1723144,
            "url" : "https://github.com/airpair/mastering-es6-higher-order-functions-for-arrays"
        }
    },
    "submitted" : ISODate("2015-08-25T17:31:22.008Z"),
    "publishedCommit" : "60f98aa4989c23b4fe06f9d711e77d16ca2f296b",
    "stats" : {
        "rating" : 4.714285714285714,
        "reviews" : 7,
        "comments" : 14,
        "forkers" : 2,
        "openPRs" : 0,
        "closedPRs" : 0,
        "acceptedPRs" : 0,
        "shares" : 0,
        "words" : 2606
    },
    "tmpl" : "default",
    "published" : ISODate("2015-09-15T18:39:06.633Z"),
    "publishedUpdated" : ISODate("2015-09-15T18:39:06.633Z"),
    "publishedBy" : {
      "name" : "Tiago Romero Garcia",
      "_id" : ObjectId("5333e0fd66a6f999a4651100")
    }
  },



  pubedArchitec: {
    "_id" : ObjectId("550106c2f1377c0c0051cbef"),
    "title" : "Scalable Architecture DR CoN: Docker, Registrator, Consul, Consul Template and Nginx",
    "md" : "No real MD",
    "publishHistory" : [
        {
            "touch" : {
                "action" : "publish",
                "utc" : "2015-03-16T21:39:54.136Z",
                "by" : {
                    "_id" : ObjectId("5501064cb2620c0c009bae70"),
                    "name" : "Graham Jenson"
                }
            },
            "commit" : "Not yet propagated",
            "_id" : ObjectId("55074daa3c09dd0c009b581f")
        },
        {
            "touch" : {
                "action" : "publish",
                "utc" : "2015-03-16T21:48:35.616Z",
                "by" : {
                    "_id" : ObjectId("549342348f8c80299bcc56c2"),
                    "name" : "Jonathon Kresner"
                }
            },
            "commit" : "4321756fa5c0cfeeaab27b73273a577a609913fe",
            "_id" : ObjectId("55074fb38dac8f0c00294a3c")
        }
    ],
    "editHistory" : [],
    "tags" : [
        {
            "slug" : "python",
            "name" : "python",
            "_id" : ObjectId("514825fa2a26ea020000002d")
        },
        {
            "_id" : ObjectId("5249f4d266a6f999a465f897"),
            "name" : "docker",
            "slug" : "docker"
        },
        {
            "_id" : ObjectId("5153f494d96db10200000011"),
            "name" : "NGINX",
            "slug" : "nginx"
        },
        {
            "_id" : ObjectId("5358c8081c67d1a4859d2f18"),
            "name" : "devops",
            "slug" : "devops"
        }
    ],
    "forkers" : [
        {
            "_id" : ObjectId("55074f993c09dd0c009b5875"),
            "userId" : ObjectId("549342348f8c80299bcc56c2"),
            "name" : "Jonathon Kresner",
            "email" : "jk@airpair.com",
            "social" : { "gh" : { "username" : "jkresner" } }
        }
    ],
    "reviews" : [
        {
            "_id" : ObjectId("550736f54c39d40c0099424c"),
            "by" : {
                "_id" : "550736924c39d40c00994241",
                "name" : "Fergus Hewson",
                "email" : "fh@hotmail.com"
            },
            "type" : "post-survey-inreview",
            "votes" : [],
            "replies" : [],
            "questions" : [
                {
                    "_id" : ObjectId("550736f54c39d40c0099424e"),
                    "idx" : 0,
                    "key" : "rating",
                    "prompt" : "How would you rate the quality of this post?",
                    "answer" : "5"
                },
                {
                    "_id" : ObjectId("550736f54c39d40c0099424d"),
                    "idx" : 1,
                    "key" : "feedback",
                    "prompt" : "Overall comment",
                    "answer" : "Great post, looks like a very useful tool!!!"
                }
            ]
        },
        {
            "type" : "post-survey-inreview",
            "by" : {
                "_id" : "5474a0138f8c80299bcc5243",
                "name" : "Rahat Khanna (mappmechanic)",
                "email" : "rh@test.com"
            },
            "_id" : ObjectId("550738774c39d40c0099427d"),
            "votes" : [],
            "replies" : [],
            "questions" : [
                {
                    "answer" : "4",
                    "prompt" : "How would you rate the quality of this post?",
                    "key" : "rating",
                    "idx" : 0,
                    "_id" : ObjectId("550738774c39d40c0099427f")
                },
                {
                    "answer" : "Nice post. Would try to use Docker.",
                    "prompt" : "Overall comment",
                    "key" : "feedback",
                    "idx" : 1,
                    "_id" : ObjectId("550738774c39d40c0099427e")
                }
            ]
        },
        {
            "_id" : ObjectId("550740e64c39d40c00994413"),
            "by" : {
                "_id" : "550740ad4c39d40c0099440b",
                "name" : "Daniel Walmsley",
                "email" : "d.w@test.com"
            },
            "type" : "post-survey-inreview",
            "votes" : [
                {
                    "_id" : ObjectId("55074fd88dac8f0c00294a4b"),
                    "val" : 1,
                    "by" : {
                        "_id" : "549342348f8c80299bcc56c2",
                        "name" : "Jonathon Kresner"
                    }
                }
            ],
            "replies" : [],
            "questions" : [
                {
                    "_id" : ObjectId("550740e64c39d40c00994415"),
                    "idx" : 0,
                    "key" : "rating",
                    "prompt" : "How would you rate the quality of this post?",
                    "answer" : "5"
                },
                {
                    "_id" : ObjectId("550740e64c39d40c00994414"),
                    "idx" : 1,
                    "key" : "feedback",
                    "prompt" : "Overall comment",
                    "answer" : "Looks good, good to hear a Maori perspective on Docker."
                }
            ]
        },
        {
            "type" : "post-survey-inreview",
            "by" : {
                "_id" : "5507428d4c39d40c00994461",
                "name" : "Duncan Tyler",
            },
            "_id" : ObjectId("550742f94c39d40c00994475"),
            "votes" : [],
            "replies" : [],
            "questions" : [
                {
                    "answer" : "5",
                    "prompt" : "How would you rate the quality of this post?",
                    "key" : "rating",
                    "idx" : 0,
                    "_id" : ObjectId("550742f94c39d40c00994477")
                },
                {
                    "answer" : "Docker definitely sounds like a goer, thanks Graham!",
                    "prompt" : "Overall comment",
                    "key" : "feedback",
                    "idx" : 1,
                    "_id" : ObjectId("550742f94c39d40c00994476")
                }
            ]
        }
    ],
    "updated" : "2015-03-16T22:23:33.578Z",
    "lastTouch" : {
        "by" : {
            "name" : "Jonathon Kresner",
            "_id" : "549342348f8c80299bcc56c2"
        },
        "utc" : "2015-03-16T22:23:33.578Z",
        "action" : "publish"
    },
    "created" : "2015-03-12T03:23:46.945Z",
    "by" : {
        "userId" : ObjectId("5501064cb2620c0c009bae70"),
        "name" : "Graham Jenson",
        "bio" : "I am a Developer who builds things, I blog over at http://www.maori.geek.nz/",
        "avatar" : "//0.gravatar.com/avatar/7b9e77978853a15053b169abb710a787"
    },
    "__v" : 0,
    "assetUrl" : "https://maorigeek.s3.amazonaws.com/uploads/docker_whale.png_1411805342.jpg_1421807584.jpg",
    "meta" : {
        "ogUrl" : "https://www.airpair.com/scalable-architecture-with-docker-consul-and-nginx",
        "ogType" : "article",
        "ogTitle" : "Scalable Architecture DR CoN: Docker, Registrator, Consul, Consul Template and Nginx",
        "description" : "In this post I will describe how to use Docker to plug together Consul, Consul Template, Registrator and Nginx into a truly scalable architecture that I am calling DR CoN. Once all plugged together, DR CoN lets you add and remove services from the architecture without having to rewrite any configuration or restart any services, and everything just works!",
        "title" : "Scalable Architecture DR CoN: Docker, Registrator, Consul, Consul Template and Nginx",
        "ogDescription" : "In this post I will describe how to use Docker to plug together Consul, Consul Template, Registrator and Nginx into a truly scalable architecture that I am calling DR CoN. Once all plugged together, DR CoN lets you add and remove services from the architecture without having to rewrite any configuration or restart any services, and everything just works!",
        "canonical" : "https://www.airpair.com/scalable-architecture-with-docker-consul-and-nginx",
        "ogImage" : "https://maorigeek.s3.amazonaws.com/uploads/docker_whale.png_1411805342.jpg_1421807584.jpg"
    },
    "slug" : "scalable-architecture-dr-con-docker-registrator-consul-consul-template-and-nginx",
    "github" : {
        "repoInfo" : {
            "url" : "https://github.com/airpair/scalable-architecture-dr-con-docker-registrator-consul-consul-template-and-nginx",
            "authorTeamId" : 1358851,
            "authorTeamName" : "scalable-architecture-dr-con-docker-registrator-consul-consul-template-and-nginx-0051cbef-author",
            "author" : "grahamjenson"
        }
    },
    "submitted" : "2015-03-12T04:05:46.709Z",
    "stats" : {
        "rating" : 4.6,
        "reviews" : 5,
        "comments" : 5,
        "forkers" : 2,
        "openPRs" : 0,
        "closedPRs" : 0,
        "acceptedPRs" : 0,
        "shares" : 0,
        "words" : 1192
    },
    "tmpl" : "default",
    "published" : "2015-03-16T21:39:54.136Z",
    "publishedUpdated" : "2015-03-16T22:23:33.578Z",
    "publishedBy" : {
        "name" : "Jonathon Kresner",
        "_id" : ObjectId("549342348f8c80299bcc56c2")
    },
    "publishedCommit" : "4321756fa5c0cfeeaab27b73273a577a609913fe"
  },



  exps_deep: {
    "_id" : ObjectId("541a36c3535a850b00b05697"),
    "assetUrl" : "https://cloud.githubusercontent.com/assets/979542/9256432/2ec6296a-41a4-11e5-931a-7f0bc48fe8b4.png",
    "by" : {
      "username" : "hackerpreneur",
      "bio" : "Jonathon Kresner is AirPair's CEO and Founder. He conceived AirPair to help developers build ideas faster and stay un-stuck. He's decided to put AirPair to the test, by rebuilding airpair.com from scratch in 90 days with daily help from the best AngularJS, NodeJS and MongoDB experts on the web.",
      "name" : "Jonathon Kresner",
      "avatar" : "//0.gravatar.com/avatar/19183084115c4a79d34cdc3110adef37",
      "userId" : ObjectId("549342348f8c80299bcc56c2")
    },
    "created" : ISODate("2014-09-18T01:34:59.747Z"),
    "md" : "Synopsis\n> There are major optimizations (and bottlenecks) you can spot by passing\nthrough your `ExpressJS Middleware` with a fine tooth comb. I was originally \nstuck for 6 hours on a middleware issue while settings up PassportJS the second\ntime round after noticing 10,000,000+ sessions in AirPair's MongoDB production\ninstance in late 2014. There's good stuff in this deep dive for all levels of\nNode.js developers building on express. The main take away is **watch out for the order you add ExpressJS Middleware** to your app. As I'll cover more than once below, a tiny swap in middleware order can have HUGE consequences.\n\n<sub>First published Oct 2014, Updated Aug 2015, intended to significantly \nenhance on discussion around bots, scrappers & analytics in Nov 2015.</sub>\n\n## ExpressJS & PassportJS 101\n\nThough I'd setup ExpressJS and PassportJS in 2013 for the *v0* version\nof airpair.com, I didn't deeply understand each or their relationship with\none another. Around October 2014 I noticed some 10,000,000 active session documents in MongoDB, which was obviously not right. \n\nLuckily it never affected us in a material way, and at the time I didn't want to \ntake my chances. So I spent some time observing how Express and PassportJS plug \ninto each other, here's what I learned on the way to uncovering what was going\nwrong.\n\n### There is only ONE Session\n\nAs per the PassportJS docs<sup>The official [PassportJS docs](http://passportjs.org/guide/configure/)</sup> configuring Passport via\nexpress middleware looks something like this:\n\n<!--?prettify lang=javascript linenums=false?-->\n\n    app.configure(function() {\n      app.use(express.static('public'));\n      app.use(express.cookieParser());\n      app.use(express.bodyParser());\n      app.use(express.session({ secret: 'keyboard cat' }));\n      app.use(passport.initialize());\n      app.use(passport.session());\n      app.use(app.router);\n    });\n\nThe syntax is a bit misleading I think ... \n\nThe first thing to conceptually get your head around is that even though you configure `express.session()` and`passport.session()`, there is really only one session, which is managed by Express. Passport merely piggy backs off the ExpressJS session to store data for authenticated users. \n\nLet's take a look at how:\n\n### ExpressJS Sessions & `req.session`\n\n`req.session` is just a json object that gets persisted by the `express-session` middleware, using a store of your choice e.g. Mongo or Redis. Logging to the terminal, you'll see the default session object looks something like:\n\n<!--?prettify lang=javascript linenums=false?-->\n\n    req.session = { cookie: \n      { path: '/',\n        _expires: Thu Nov 07 2014 09:39:45 GMT-0700 (PDT),\n        originalMaxAge: 100000,\n        httpOnly: true } }\n\nIf you open up your persistence store and look at the documents, you'll see the req.session object is an attribute of the the entire document that also comes with an `id` and `expires` attribute.\n\n<!--?prettify lang=javascript linenums=false?-->\n\n    {\n        _id : \"svZGs99EIvDkwW_60PRwlafU9Y_7_m-N\",\n        session : { cookie:{originalMaxAge:100000,expires:\"2014-11-07T02:11:16.320Z\",httpOnly:true,path:\"/\"},\n        expires : ISODate(\"2014-11-07T02:11:16.320Z\")\n    }\n\nExpress stuffs the id of the session object into a cookie on the client's browser, which gets passed back to express in a header on every request. This is how Express identifies multiple requests as belonging to a single session even if the user is not logged in. With the id from the cookie header, Express reads the session store and puts all the info onto req.session, which is available to you on each request.\n\n#### Harnessing `req.session` yourself\n\nYou can stuff anything you like onto the req.session object and Express will automatically persist it back to the session store for a given session (unique id). For example, if a user can't access a page because they are not logged in, airpair.com uses a custom made-up attribute called `return_to` to direct the user to the right page after login. \n\n<!--?prettify lang=javascript linenums=true?-->\n\n    { cookie: \n      { path: '/',\n        _expires: Thu Oct 09 2014 09:39:45 GMT-0700 (PDT),\n        originalMaxAge: 100000,\n        httpOnly: true },\n        passport: { user: { _id: '549342348f8c80299bcc56c2' } },\n        return_to: '/workshops' }\n\nIt's worth noting that since you can put anything you want into an anonymous session, provided you can correlate it to a user in your database on login or signup, you can start persisting info for a user even though you don't know who they are straight away. You will see some cool interactions for anonymous users on airpair.com coming in the next month or two.\n\n#### Passport also harnesses `req.session`\n\nAs you can see on line 6 in the code snippet above, using the `passport` attribute allows PassportJS to use the session object to keep track of a logged in user  associated with a given session. \n\nIt then uses the `deserializeUser` function, which receives `req.session.passport.user` as its first parameter, and as the default behavior suggested in the PassportJS documentation, makes an additional read to your persistence store to retrieve the user object associated with the userId.\n\n<!--?prettify lang=javascript linenums=false?-->\n\n    passport.serializeUser(function(user, done) {\n      done(null, user.id);\n    });\n\n    passport.deserializeUser(function(id, done) {\n      User.findById(id, function(err, user) {\n        done(err, user);\n    });\n\n### Passport `req.user`\n\n`req.user` is a PassportJS specific property that is the result of the `deserializeUser` function using the data from `req.session.passport.user`\n\n## Optimize PassportJS \n\nI realized that in the old app, we followed the default suggestion and were hitting the database twice on every single API call to populate all the user's information in memory. But in practice, we rarely needed more than the userId in our backend code. So this time around, I've made the decision to stuff the name and email into the session object and avoid making multiple database trips on every single API call. With many pages on the site making 5-10 calls to render a single page, this seemed like a cheap way to significantly reduce database load. Here's what the new app looks like:\n\n<!--?prettify lang=javascript linenums=false?-->\n\n    passport.serializeUser( (user, done) => {\n      var sessionUser = { _id: user._id, name: user.name, email: user.email, roles: user.roles }\n      done(null, sessionUser)\n    })\n\n    passport.deserializeUser( (sessionUser, done) => {\n      // The sessionUser object is different from the user mongoose collection\n      // it's actually req.session.passport.user and comes from the session collection\n      done(null, sessionUser)\n    })\n\n## Optimize ExpressJS Sessions\n\n### When are sessions created?\n\nExpress will create a new session (and write it to the database) whenever it\ndoes not detect a session cookie. As it turns out, the order in which you set the session\nmiddleware and tell Express where your static directory is has some pretty\ndramatic nuances. Here's what the new AirPair index.js looks like:\n\n<!--?prettify lang=javascript linenums=false?-->\n\n    var express = require('express')\n    var app = express()\n\t\n    //-- We don't want to serve sessions for static resources\n    //-- Save database write on every resources\n    app.use(express.static(config.appdir+'/public'))\n\n    mongo.connect()\n    session(app, mongo.initSessionStore)\n\n    //-- Do not move connect-livereload before session middleware\n    if (config.livereload) app.use(require('connect-livereload')({ port: 35729 }))\n\t\n    hbsEngine.init(app)\n    routes.init(app)\t\n    app.listen(config.port, function() {})\n\n### Avoid Sessions for Static Resources\n\nI learned that if you add the session middleware before your static directory, \nExpress will generate sessions for requests on static files like stylesheets, images, and JavaScript. \n\nIf a new visitor without a session loads a page with 10 static files, the \nclient's browser will not yet have a cookie and will send 10 cookieless requests \nall triggering Express to create sessions. Ouch! So that's what was happening... \nIf you haven't done something smart to detect bots and scrapers, things can blow\nout pretty quickly!\n\nSimply put your static files first, or better yet on a CDN that has nothing to\ndo with your Node.js app and your session collection should stay much healthier.\n\n## ExpressJS 4.0 Middleware Order\n\nThe middleware setup for ExpressJS 4.0 is quite different from ExpressJS 3.0 where everything came baked in. You now need to include each piece manually with its own NPM package. In case you want to see an up-to-date version of how each  piece is chained together, because there are many non-working legacy examples floating around, this is what I ended up with.\n\nA couple of gotchas sunk half an hour or so for me, including that Cookie Parser now requires a secret and Body Parser required and Extend Url.\n\n<!--?prettify lang=javascript linenums=false?-->\n\n    // Passport does not directly manage your session, it only uses the session.\n    // So you configure session attributes (e.g. life of your session) via express\n    var sessionOpts = {\n      saveUninitialized: true, // saved new sessions\n      resave: false, // do not automatically write to the session store\n      store: sessionStore,\n      secret: config.session.secret,\n      cookie : { httpOnly: true, maxAge: 2419200000 } // configure when sessions expires\n    }\n\n    app.use(bodyParser.json())\n    app.use(bodyParser.urlencoded({extended: true}))\n    app.use(cookieParser(config.session.secret))\n    app.use(session(sessionOpts))\n\n    app.use(passport.initialize())\n    app.use(passport.session())\n\n\n### The AHA! **live-reload** middleware\n\nSo it turns out, the problem that held me up was the position of the live-reload middleware. LiveReload injects script into every response to listen for changes emitted from the server. I don't know the exact issue, but having it before the session middleware broke the session cookie being sent correctly to the client.\n\n## Check your Middleware!\n\nI'm glad I took the time to dive deep with Express and Passport for the new \nairpair.com site. A few tweaks have lead to significantly less database traffic \nand my deepening understanding of how to utilize req.session will empower us to \nbuild some cool interactions and personalization for anonymous visitors.\n\nI highly highly recommend going through all your middleware one at a time\nto understand everything you app is doing on every request. There are many performance gains to be had when you understand things\npiece by piece.\n",
    "meta" : {
        "ogImage" : "https://cloud.githubusercontent.com/assets/979542/9256432/2ec6296a-41a4-11e5-931a-7f0bc48fe8b4.png",
        "ogDescription" : "Misunderstanding ExpressJS Sessions and how PassportJS works can lead to millions of un-necessary database reads and writes. This deep time will keep you out of trouble.",
        "description" : "Misunderstanding ExpressJS Sessions and how PassportJS works can lead to millions of un-necessary database reads and writes. This deep time will keep you out of trouble.",
        "ogUrl" : "http://www.airpair.com/express/posts/expressjs-and-passportjs-sessions-deep-dive",
        "ogVideo" : null,
        "ogTitle" : "ExpressJS and PassportJS Sessions Deep Dive",
        "ogType" : "article",
        "canonical" : "http://www.airpair.com/express/posts/expressjs-and-passportjs-sessions-deep-dive",
        "title" : "ExpressJS and PassportJS Sessions Deep Dive"
    },
    "published" : ISODate("2014-09-23T19:17:23.161Z"),
    "publishedBy" : {
        "_id" : ObjectId("549342348f8c80299bcc56c2"),
        "name" : "Jonathon Kresner",
    },
    "slug" : "expressjs-and-passportjs-sessions-deep-dive",
    "tags" : [
        {
            "slug" : "express",
            "name" : "ExpressJS",
            "_id" : ObjectId("514825fa2a26ea0200000016")
        },
        {
            "slug" : "passport",
            "name" : "passport",
            "_id" : ObjectId("5181e12e66a6f999a465f282")
        }
    ],
    "title" : "ExpressJS and PassportJS Sessions Deep Dive",
    "updated" : ISODate("2015-08-13T22:59:42.039Z"),
    "submitted" : ISODate("2015-02-21T00:15:35.231Z"),
    "github" : {
        "repoInfo" : {
            "author" : "jkresner",
            "url" : "https://github.com/airpair/expressjs-and-passportjs-sessions-deep-dive",
            "owner" : "jkresner",
            "authorTeamId" : 1315283,
            "reviewTeamId" : 1315282
        }
    },
    "lastTouch" : {
        "action" : "propagateMDfromGithub",
        "utc" : ISODate("2015-08-13T22:59:42.039Z"),
        "by" : {
            "_id" : ObjectId("549342348f8c80299bcc56c2"),
            "name" : "Jonathon Kresner"
        }
    },
    "editHistory" : [
        {
            "_id" : ObjectId("54e7ce27fd5a340c005de39e"),
            "utc" : ISODate("2015-02-21T00:15:35.231Z"),
            "action" : "submittedForReview",
            "by" : {
                "name" : "Jonathon Kresner",
                "_id" : ObjectId("549342348f8c80299bcc56c2")
            }
        },
        {
            "utc" : ISODate("2015-08-13T17:15:27.102Z"),
            "action" : "updateByAuthor",
            "_id" : ObjectId("55ccd0af88d34e110078a5f8"),
            "by" : {
                "name" : "Jonathon Kresner",
                "_id" : ObjectId("549342348f8c80299bcc56c2")
            }
        },
        {
            "_id" : ObjectId("55ccd1f233be2d11001c83dc"),
            "action" : "updateHEAD",
            "utc" : ISODate("2015-08-13T17:20:50.953Z"),
            "by" : {
                "_id" : ObjectId("549342348f8c80299bcc56c2"),
                "name" : "Jonathon Kresner"
            }
        },
        {
            "utc" : ISODate("2015-08-13T17:24:16.737Z"),
            "action" : "updateHEAD",
            "_id" : ObjectId("55ccd2c033be2d11001c840f"),
            "by" : {
                "name" : "Jonathon Kresner",
                "_id" : ObjectId("549342348f8c80299bcc56c2")
            }
        },
        {
            "_id" : ObjectId("55ccd2cd33be2d11001c8412"),
            "action" : "propagateMDfromGithub",
            "utc" : ISODate("2015-08-13T17:24:29.754Z"),
            "by" : {
                "_id" : ObjectId("549342348f8c80299bcc56c2"),
                "name" : "Jonathon Kresner"
            }
        },
        {
            "utc" : ISODate("2015-08-13T17:57:17.516Z"),
            "action" : "propagateMDfromGithub",
            "_id" : ObjectId("55ccda7d88d34e110078a8fb"),
            "by" : {
                "name" : "Jonathon Kresner",
                "_id" : ObjectId("549342348f8c80299bcc56c2")
            }
        },
        {
            "utc" : ISODate("2015-08-13T22:20:25.723Z"),
            "action" : "updateHEADonFork",
            "_id" : ObjectId("55cd182933be2d11001c968b"),
            "by" : {
                "name" : "Rich McLaughlin",
                "_id" : ObjectId("54f711888438550c00e98aa0")
            }
        },
        {
            "_id" : ObjectId("55cd215e33be2d11001c9837"),
            "action" : "propagateMDfromGithub",
            "utc" : ISODate("2015-08-13T22:59:42.039Z"),
            "by" : {
                "_id" : ObjectId("549342348f8c80299bcc56c2"),
                "name" : "Jonathon Kresner"
            }
        }
    ],
    "reviews" : [
        {
            "_id" : ObjectId("54f0d3f64499800c00f1e3b7"),
            "type" : "post-survey-inreview",
            "by" : {
                "name" : "m payne",
                "_id" : "54f0d3ea4499800c00f1e3b5"
            },
            "votes" : [
                {
                    "by" : {
                        "_id" : "549342348f8c80299bcc56c2",
                        "name" : "Jonathon Kresner",
                    },
                    "val" : 1,
                    "_id" : ObjectId("54f0ea3f4499800c00f1e5b2")
                }
            ],
            "replies" : [
                {
                    "by" : {
                        "name" : "Jonathon Kresner",
                        "_id" : "549342348f8c80299bcc56c2"
                    },
                    "comment" : "Thank you sir :)",
                    "_id" : ObjectId("54f18f41b2ecf40c00e2911e")
                }
            ],
            "questions" : [
                {
                    "_id" : ObjectId("54f0d3f64499800c00f1e3b9"),
                    "answer" : "5",
                    "prompt" : "How would you rate the quality of this post?",
                    "key" : "rating",
                    "idx" : 0
                },
                {
                    "_id" : ObjectId("54f0d3f64499800c00f1e3b8"),
                    "answer" : "+5 for disambiguation of static and session relationship! good to know",
                    "prompt" : "Overall comment",
                    "key" : "feedback",
                    "idx" : 1
                }
            ]
        },
        {
            "_id" : ObjectId("55bda4e448f26f11009ddb00"),
            "by" : {
                "_id" : ObjectId("55bda4c8cf98ed11005a928b"),
                "name" : "Benjamin Jones",
                "email" : "bj@test.com"
            },
            "type" : "post-survey-inreview",
            "votes" : [],
            "replies" : [],
            "questions" : [
                {
                    "_id" : ObjectId("55bda4e448f26f11009ddb02"),
                    "idx" : 0,
                    "key" : "rating",
                    "prompt" : "How would you rate the quality of this post?",
                    "answer" : "4"
                },
                {
                    "_id" : ObjectId("55bda4e448f26f11009ddb01"),
                    "idx" : 1,
                    "key" : "feedback",
                    "prompt" : "Overall comment",
                    "answer" : "Great post!"
                }
            ]
        },
        {
            "type" : "post-survey-inreview",
            "by" : {
                "_id" : ObjectId("54f711888438550c00e98aa0"),
                "name" : "Rich McLaughlin",
                "email" : "rm@test.com"
            },
            "_id" : ObjectId("55cd25de88d34e110078bb63"),
            "votes" : [],
            "replies" : [],
            "questions" : [
                {
                    "answer" : "4",
                    "prompt" : "How would you rate the quality of this post?",
                    "key" : "rating",
                    "idx" : 0,
                    "_id" : ObjectId("55cd25de88d34e110078bb65")
                },
                {
                    "answer" : "Sweet, we were just working on a similar stack for a ShipIt Day project so I'll be sure to go back and double check our Express config before pulling it into a release :)",
                    "prompt" : "Overall comment",
                    "key" : "feedback",
                    "idx" : 1,
                    "_id" : ObjectId("55cd25de88d34e110078bb64")
                }
            ]
        },
        {
            "type" : "post-survey-inreview",
            "by" : {
                "_id" : ObjectId("533afd421c67d1a4859d2b28"),
                "name" : "Abraham Polishchuk",
                "email" : "ap@test.com"
            },
            "_id" : ObjectId("55cd6c8c71d6051100c3732f"),
            "updated" : ISODate("2015-08-14T09:58:19.810Z"),
            "votes" : [],
            "replies" : [],
            "questions" : [
                {
                    "_id" : ObjectId("55cdbbbb71d6051100c3868d"),
                    "idx" : 0,
                    "key" : "rating",
                    "prompt" : "How would you rate the quality of this post?",
                    "answer" : "5"
                },
                {
                    "_id" : ObjectId("55cdbbbb71d6051100c3868c"),
                    "idx" : 1,
                    "key" : "feedback",
                    "prompt" : "Overall comment",
                    "answer" : "Great job diving deep into such a seemingly mundane topic. It is a rare occurrence indeed that something like this is pursued to the point where it yields real insights, and I am very very happy that you took the time to get this insight out there for the community to share, and hopefully consume when they are building their own apps. A very interesting post."
                }
            ]
        },
        {
            "_id" : ObjectId("55ce6f21ef06bf11004e50b0"),
            "by" : {
                "_id" : ObjectId("527bd05966a6f999a465fb0c"),
                "name" : "Eric Mann",
                "email" : "em@test.com"
            },
            "type" : "post-survey-inreview",
            "votes" : [],
            "replies" : [],
            "questions" : [
                {
                    "_id" : ObjectId("55ce6f21ef06bf11004e50b2"),
                    "idx" : 0,
                    "key" : "rating",
                    "prompt" : "How would you rate the quality of this post?",
                    "answer" : "5"
                },
                {
                    "_id" : ObjectId("55ce6f21ef06bf11004e50b1"),
                    "idx" : 1,
                    "key" : "feedback",
                    "prompt" : "Overall comment",
                    "answer" : "Middleware can be tricky - particularly when dealing with unique session IDs and the like. I've had my own frustrations with Express in the past, and this pretty much sums up my experience! I'm looking forward to polishing my code and fixing the issue :)"
                }
            ]
        },
        {
            "_id" : ObjectId("56289a056d2109110015a3fd"),
            "by" : {
                "_id" : ObjectId("562891dac6e100110021e1c2"),
                "name" : "Julian Frank"
            },
            "type" : "post-survey-inreview",
            "votes" : [],
            "replies" : [
                {
                    "by" : {
                        "_id" : ObjectId("549342348f8c80299bcc56c2"),
                        "name" : "Jonathon Kresner",
                        "email" : "jk@airpair.com"
                    },
                    "comment" : "Glad you liked it.",
                    "_id" : ObjectId("562e6eae745e3c1100c94e19")
                }
            ],
            "questions" : [
                {
                    "_id" : ObjectId("56289a056d2109110015a3ff"),
                    "idx" : 0,
                    "key" : "rating",
                    "prompt" : "How would you rate the quality of this post?",
                    "answer" : "4"
                },
                {
                    "_id" : ObjectId("56289a056d2109110015a3fe"),
                    "idx" : 1,
                    "key" : "feedback",
                    "prompt" : "Overall comment",
                    "answer" : "Thanks for this post"
                }
            ]
        }
    ],
    "stats" : {
        "words" : 1450,
        "shares" : 0,
        "acceptedPRs" : 0,
        "closedPRs" : 0,
        "openPRs" : 0,
        "forkers" : 2,
        "comments" : 12,
        "reviews" : 9,
        "rating" : 4.666666666666667
    },
    "forkers" : [
      {
        "email" : "yl@test.com",
        "name" : "Yuriy Linnyk",
        "userId" : ObjectId("558dccfbf6f02b110057636a"),
        "_id" : ObjectId("558df2e619316a1100fcdd94"),
        "social" : { "gh" : { "username" : "yuraji" } }
      },
      {
        "_id" : ObjectId("55cd0e5988d34e110078b6f8"),
        "userId" : ObjectId("54f711888438550c00e98aa0"),
        "name" : "Rich McLaughlin",
        "email" : "rm@test.com",
        "social" : { "gh" : { "username" : "RichMcL" } }
      }
    ],
    "publishedUpdated" : ISODate("2015-08-13T22:59:42.039Z"),
    "publishHistory" : [
        {
            "touch" : {
                "action" : "publish",
                "utc" : ISODate("2015-08-13T17:57:17.516Z"),
                "by" : {
                    "_id" : ObjectId("549342348f8c80299bcc56c2"),
                    "name" : "Jonathon Kresner"
                }
            },
            "commit" : "7661a82071bacd17e8e406e87b0e06e5111235af",
            "_id" : ObjectId("55ccda7d88d34e110078a8fc")
        },
        {
            "_id" : ObjectId("55cd215e33be2d11001c9838"),
            "commit" : "8503d290c7b4ed5e780f04f2b703eef43554b6d1",
            "touch" : {
                "action" : "publish",
                "utc" : ISODate("2015-08-13T22:59:42.038Z"),
                "by" : {
                    "_id" : ObjectId("549342348f8c80299bcc56c2"),
                    "name" : "Jonathon Kresner"
                }
            }
        }
    ],
    "publishedCommit" : "8503d290c7b4ed5e780f04f2b703eef43554b6d1"
  }

}
