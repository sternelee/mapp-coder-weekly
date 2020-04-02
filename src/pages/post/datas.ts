const datas = [
  {
    tag: "div",
    attrs: {},
    nodes: [
      {
        tag: "p",
        attrs: {},
        nodes: [{ tag: "text", text: "JavaScript Weekly" }]
      }
    ]
  },
  {
    tag: "div",
    attrs: {},
    nodes: [
      {
        tag: "a",
        attrs: { href: "https://javascriptweekly.com/link/86006/web" },
        nodes: [
          {
            tag: "img",
            attrs: {
              src:
                "https://res.cloudinary.com/cpress/image/upload/w_1280,e_sharpen:60/zglx89r6u2plm84glhu8.jpg",
              width: "640"
            },
            nodes: []
          }
        ]
      }
    ]
  },
  {
    tag: "div",
    attrs: {},
    nodes: [
      {
        tag: "p",
        attrs: { class: "desc" },
        nodes: [
          {
            tag: "span",
            attrs: { class: "mainlink" },
            nodes: [
              {
                tag: "a",
                attrs: {
                  href: "https://javascriptweekly.com/link/86006/web",
                  title: "prettier.io"
                },
                nodes: [
                  {
                    tag: "text",
                    text: "Prettier 2.0 &#x201C;2020&#x201D; Released"
                  }
                ]
              }
            ]
          },
          {
            tag: "text",
            text:
              " &#x2014; The popular code formatter now adds better defaults, a better CLI, TypeScript 3.8 feature support (e.g. "
          },
          {
            tag: "code",
            attrs: {},
            nodes: [{ tag: "text", text: "export * as ns" }]
          },
          { tag: "text", text: "), and lots more. " },
          {
            tag: "a",
            attrs: { href: "https://javascriptweekly.com/link/86007/web" },
            nodes: [{ tag: "text", text: "Project&#xA0;homepage." }]
          }
        ]
      },
      {
        tag: "p",
        attrs: { class: "name" },
        nodes: [{ tag: "text", text: "prettier " }]
      }
    ]
  },
  {
    tag: "div",
    attrs: {},
    nodes: [
      {
        tag: "p",
        attrs: { class: "desc" },
        nodes: [
          {
            tag: "span",
            attrs: { class: "mainlink" },
            nodes: [
              {
                tag: "a",
                attrs: {
                  href: "https://javascriptweekly.com/link/86008/web",
                  title: "www.theregister.co.uk"
                },
                nodes: [
                  {
                    tag: "text",
                    text:
                      "What Happens When the Maintainer of a Major JS Library Goes to Jail?"
                  }
                ]
              }
            ]
          },
          { tag: "text", text: " &#x2014; The maintainer of the popular " },
          {
            tag: "a",
            attrs: { href: "https://javascriptweekly.com/link/86009/web" },
            nodes: [{ tag: "text", text: "core-js" }]
          },
          {
            tag: "text",
            text:
              " library (very commonly used alongside Babel) lost an appeal to overturn an 18-month prison&#xA0;sentence."
          }
        ]
      },
      {
        tag: "p",
        attrs: { class: "name" },
        nodes: [{ tag: "text", text: "Thomas Claburn (The Register) " }]
      }
    ]
  },
  {
    tag: "div",
    attrs: {},
    nodes: [
      {
        tag: "a",
        attrs: { href: "https://javascriptweekly.com/link/86010/web" },
        nodes: [
          {
            tag: "img",
            attrs: {
              src: "https://copm.s3.amazonaws.com/e0854aba.jpeg",
              width: "125",
              height: "125",
              align: "right",
              class: "som"
            },
            nodes: []
          }
        ]
      },
      {
        tag: "p",
        attrs: { class: "desc" },
        nodes: [
          {
            tag: "span",
            attrs: { class: "mainlink" },
            nodes: [
              {
                tag: "a",
                attrs: {
                  href: "https://javascriptweekly.com/link/86010/web",
                  title: "www.crowdcast.io"
                },
                nodes: [
                  {
                    tag: "text",
                    text: "Online Lab: Build a Blockchain App with JavaScript"
                  }
                ]
              }
            ]
          },
          {
            tag: "text",
            text:
              " &#x2014; Learn how to build a distributed ledger into your JavaScript application using open source tools and best practices in this interactive lab from IBMers Lennart Frantzell and Dave Nugent."
          }
        ]
      },
      {
        tag: "p",
        attrs: { class: "name" },
        nodes: [
          { tag: "text", text: "IBM Developer " },
          {
            tag: "span",
            attrs: { class: "tag-sponsor" },
            nodes: [{ tag: "text", text: "sponsor" }]
          }
        ]
      }
    ]
  },
  {
    tag: "div",
    attrs: {},
    nodes: [
      {
        tag: "p",
        attrs: { class: "desc" },
        nodes: [
          {
            tag: "span",
            attrs: { class: "mainlink" },
            nodes: [
              {
                tag: "a",
                attrs: {
                  href: "https://javascriptweekly.com/link/86011/web",
                  title: "htmldom.dev"
                },
                nodes: [
                  {
                    tag: "text",
                    text:
                      "HTML DOM: A Resource for Solving DOM Problems with Native APIs"
                  }
                ]
              }
            ]
          },
          {
            tag: "text",
            text:
              " &#x2014; A guide with a list of different things we might normally do with a JavaScript library, but can now be done using native&#xA0;APIs."
          }
        ]
      },
      {
        tag: "p",
        attrs: { class: "name" },
        nodes: [{ tag: "text", text: "Nguyen Huu Phuoc " }]
      }
    ]
  },
  {
    tag: "div",
    attrs: {},
    nodes: [
      {
        tag: "p",
        attrs: { class: "desc" },
        nodes: [
          {
            tag: "span",
            attrs: { class: "mainlink" },
            nodes: [
              {
                tag: "a",
                attrs: {
                  href: "https://javascriptweekly.com/link/86012/web",
                  title: "blog.angular.io"
                },
                nodes: [
                  {
                    tag: "text",
                    text:
                      "Angular 9.1 Released:&#x200A;TypeScript 3.8 and Faster Builds"
                  }
                ]
              }
            ]
          },
          {
            tag: "text",
            text:
              " &#x2014; A minor Angular release that acts as a &#x2018;drop-in replacement&#x2019; for 9.0 and brings concurrent package compilation for faster build times. A few other niceties too, all covered&#xA0;here."
          }
        ]
      },
      {
        tag: "p",
        attrs: { class: "name" },
        nodes: [{ tag: "text", text: "Stephen Fluin " }]
      }
    ]
  },
  { tag: "div", attrs: { class: "hrule" }, nodes: [] },
  {
    tag: "div",
    attrs: {},
    nodes: [
      {
        tag: "div",
        attrs: {},
        nodes: [
          { tag: "text", text: "t" },
          {
            tag: "p",
            attrs: {},
            nodes: [
              {
                tag: "text",
                text: "&#x1F4C5;&#xA0;Forthcoming Online JavaScript Conferences"
              }
            ]
          },
          {
            tag: "p",
            attrs: {},
            nodes: [
              {
                tag: "text",
                text:
                  "The reality of world events are encouraging a proliferation of online events to replace in-person events that have been postponed. At least two have been announced in the JavaScript world so far:"
              }
            ]
          },
          {
            tag: "p",
            attrs: {},
            nodes: [
              { tag: "text", text: "&#x2B50;&#xFE0F; " },
              {
                tag: "big",
                attrs: {},
                nodes: [
                  {
                    tag: "a",
                    attrs: {
                      href: "https://javascriptweekly.com/link/86013/web"
                    },
                    nodes: [
                      { tag: "text", text: "JavaScript Remote Conf 2020" }
                    ]
                  },
                  { tag: "text", text: " (May 14-15)" }
                ]
              },
              {
                tag: "text",
                text: " &#x2014; This is being run by the folks behind the "
              },
              {
                tag: "a",
                attrs: { href: "https://javascriptweekly.com/link/86014/web" },
                nodes: [{ tag: "text", text: "JavaScript Jabber podcast" }]
              },
              {
                tag: "text",
                text:
                  ". Speakers lined up already include Douglas Crockford, Aimee Knight and Christian Heilmann, and you can "
              },
              {
                tag: "a",
                attrs: { href: "https://javascriptweekly.com/link/86015/web" },
                nodes: [{ tag: "text", text: "submit a talk" }]
              },
              { tag: "text", text: " if you want to join them." }
            ]
          },
          {
            tag: "p",
            attrs: {},
            nodes: [
              { tag: "text", text: "&#x2B50;&#xFE0F; " },
              {
                tag: "big",
                attrs: {},
                nodes: [
                  {
                    tag: "a",
                    attrs: {
                      href: "https://javascriptweekly.com/link/86016/web"
                    },
                    nodes: [{ tag: "text", text: "ESNEXT CONF 2020" }]
                  },
                  { tag: "text", text: " (May 18-22)" }
                ]
              },
              {
                tag: "text",
                text: " &#x2014; This one comes from the Pika folks (of "
              },
              {
                tag: "a",
                attrs: { href: "https://javascriptweekly.com/link/86017/web" },
                nodes: [{ tag: "text", text: "Snowpack" }]
              },
              {
                tag: "text",
                text:
                  " fame). 12 speakers over 5 days so it&apos;s a gradual pace. You can "
              },
              {
                tag: "a",
                attrs: { href: "https://javascriptweekly.com/link/86018/web" },
                nodes: [{ tag: "text", text: "apply to speak here" }]
              },
              { tag: "text", text: " up until April 3." }
            ]
          },
          {
            tag: "p",
            attrs: {},
            nodes: [
              { tag: "text", text: "&#x2B50;&#xFE0F; " },
              {
                tag: "big",
                attrs: {},
                nodes: [
                  {
                    tag: "a",
                    attrs: {
                      href: "https://javascriptweekly.com/link/86019/web"
                    },
                    nodes: [{ tag: "text", text: "ForwardJS" }]
                  },
                  { tag: "text", text: " (May 26-29)" }
                ]
              },
              {
                tag: "text",
                text:
                  " &#x2014; A real world event (ForwardJS Ottawa) that has now become a virtual event. It&apos;s going to be a busy May for watching events online &#x1F604;"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    tag: "div",
    attrs: {},
    nodes: [
      {
        tag: "div",
        attrs: {},
        nodes: [
          { tag: "text", text: "t" },
          {
            tag: "p",
            attrs: {},
            nodes: [
              { tag: "text", text: "&#x26A1;&#xFE0F;&#xA0;Quick Releases" }
            ]
          },
          { tag: "text", text: " t" },
          {
            tag: "ul",
            attrs: { class: "nogap" },
            nodes: [
              {
                tag: "li",
                attrs: {},
                nodes: [
                  {
                    tag: "a",
                    attrs: {
                      href: "https://javascriptweekly.com/link/86020/web"
                    },
                    nodes: [{ tag: "text", text: "React Native 0.62" }]
                  },
                  {
                    tag: "text",
                    text: " &#x2014; React-powered native app framework."
                  }
                ]
              },
              {
                tag: "li",
                attrs: {},
                nodes: [
                  {
                    tag: "a",
                    attrs: {
                      href: "https://javascriptweekly.com/link/86021/web"
                    },
                    nodes: [{ tag: "text", text: "Vue 3.0 alpha 10" }]
                  }
                ]
              },
              {
                tag: "li",
                attrs: {},
                nodes: [
                  {
                    tag: "a",
                    attrs: {
                      href: "https://javascriptweekly.com/link/86022/web"
                    },
                    nodes: [{ tag: "text", text: "Node 13.12.0" }]
                  }
                ]
              },
              {
                tag: "li",
                attrs: {},
                nodes: [
                  {
                    tag: "a",
                    attrs: {
                      href: "https://javascriptweekly.com/link/86023/web"
                    },
                    nodes: [{ tag: "text", text: "Rollup 2.2.0" }]
                  },
                  {
                    tag: "text",
                    text: " &#x2014; Next-generation ES module bundler."
                  }
                ]
              },
              {
                tag: "li",
                attrs: {},
                nodes: [
                  {
                    tag: "a",
                    attrs: {
                      href: "https://javascriptweekly.com/link/86024/web"
                    },
                    nodes: [{ tag: "text", text: "svgr 5.3" }]
                  },
                  {
                    tag: "text",
                    text: " &#x2014; Convert SVGs into React components."
                  }
                ]
              },
              { tag: "text", text: " t" }
            ]
          }
        ]
      }
    ]
  },
  {
    tag: "div",
    attrs: {},
    nodes: [
      { tag: "p", attrs: {}, nodes: [{ tag: "text", text: "&#x1F4BB; Jobs" }] }
    ]
  },
  {
    tag: "div",
    attrs: {},
    nodes: [
      {
        tag: "p",
        attrs: { class: "desc" },
        nodes: [
          {
            tag: "span",
            attrs: { class: "mainlink" },
            nodes: [
              {
                tag: "a",
                attrs: {
                  href: "https://javascriptweekly.com/link/86025/web",
                  title: "www.komoot.com"
                },
                nodes: [{ tag: "text", text: "React JS Developer (Remote)" }]
              }
            ]
          },
          {
            tag: "text",
            text:
              " &#x2014; 9+ million people plan outdoor adventures with our apps every day. If you are smart and ambitious, join us to inspire people to explore more of the great outdoors."
          }
        ]
      },
      {
        tag: "p",
        attrs: { class: "name" },
        nodes: [{ tag: "text", text: "Komoot " }]
      }
    ]
  },
  {
    tag: "div",
    attrs: {},
    nodes: [
      {
        tag: "p",
        attrs: { class: "desc" },
        nodes: [
          {
            tag: "span",
            attrs: { class: "mainlink" },
            nodes: [
              {
                tag: "a",
                attrs: {
                  href: "https://javascriptweekly.com/link/86026/web",
                  title: "boards.greenhouse.io"
                },
                nodes: [{ tag: "text", text: "Principal UI Engineer" }]
              }
            ]
          },
          {
            tag: "text",
            text:
              " &#x2014; Join a tech team based in the heart of NYC and work on a data-driven, cloud solution for the world&apos;s leading entertainment brands."
          }
        ]
      },
      {
        tag: "p",
        attrs: { class: "name" },
        nodes: [{ tag: "text", text: "Whip Media Group " }]
      }
    ]
  },
  {
    tag: "div",
    attrs: {},
    nodes: [
      {
        tag: "p",
        attrs: { class: "desc" },
        nodes: [
          {
            tag: "span",
            attrs: { class: "mainlink" },
            nodes: [
              {
                tag: "a",
                attrs: {
                  href: "https://javascriptweekly.com/link/86027/web",
                  title: "www.vettery.com"
                },
                nodes: [{ tag: "text", text: "Find a Dev Job Through Vettery" }]
              }
            ]
          },
          {
            tag: "text",
            text:
              " &#x2014; Vettery is completely free for job seekers. Make a profile, name your salary, and connect with hiring managers from top employers."
          }
        ]
      },
      {
        tag: "p",
        attrs: { class: "name" },
        nodes: [{ tag: "text", text: "Vettery " }]
      }
    ]
  },
  {
    tag: "p",
    attrs: {},
    nodes: [
      { tag: "text", text: "&#x2139;&#xFE0F; " },
      {
        tag: "em",
        attrs: {},
        nodes: [
          {
            tag: "text",
            text:
              "If you&apos;re interested in running a job listing in JavaScript Weekly, there&apos;s "
          },
          {
            tag: "a",
            attrs: { href: "https://javascriptweekly.com/link/86028/web" },
            nodes: [{ tag: "text", text: "more info here." }]
          }
        ]
      }
    ]
  },
  {
    tag: "div",
    attrs: {},
    nodes: [
      {
        tag: "p",
        attrs: {},
        nodes: [{ tag: "text", text: "&#x1F4D8; Articles &amp; Tutorials " }]
      }
    ]
  },
  {
    tag: "div",
    attrs: {},
    nodes: [
      {
        tag: "p",
        attrs: { class: "desc" },
        nodes: [
          {
            tag: "span",
            attrs: { class: "mainlink" },
            nodes: [
              {
                tag: "a",
                attrs: {
                  href: "https://javascriptweekly.com/link/86029/web",
                  title: "felixgerschau.com"
                },
                nodes: [
                  {
                    tag: "text",
                    text: "Measuring the Performance of JavaScript Functions"
                  }
                ]
              }
            ]
          },
          { tag: "text", text: " &#x2014; " },
          {
            tag: "em",
            attrs: {},
            nodes: [
              {
                tag: "text",
                text:
                  "&#x201C;In this article I will explain how you can measure the performance of your functions and what to do with the results you get from&#xA0;them.&#x201D;"
              }
            ]
          }
        ]
      },
      {
        tag: "p",
        attrs: { class: "name" },
        nodes: [{ tag: "text", text: "Felix Gerschau " }]
      }
    ]
  },
  {
    tag: "div",
    attrs: {},
    nodes: [
      {
        tag: "p",
        attrs: { class: "desc" },
        nodes: [
          {
            tag: "span",
            attrs: { class: "mainlink" },
            nodes: [
              {
                tag: "a",
                attrs: {
                  href: "https://javascriptweekly.com/link/86030/web",
                  title: "thecodebarbarian.com"
                },
                nodes: [
                  {
                    tag: "text",
                    text: "Building a Code Editor with CodeMirror"
                  }
                ]
              }
            ]
          },
          { tag: "text", text: " &#x2014; " },
          {
            tag: "a",
            attrs: { href: "https://javascriptweekly.com/link/86031/web" },
            nodes: [{ tag: "text", text: "CodeMirror" }]
          },
          {
            tag: "text",
            text:
              " is an open source project that makes it easy to build advanced text editors into your frontend apps. Here&#x2019;s how to build a "
          },
          { tag: "em", attrs: {}, nodes: [{ tag: "text", text: "code" }] },
          {
            tag: "text",
            text:
              " editor with it and how to connect together all the&#xA0;pieces."
          }
        ]
      },
      {
        tag: "p",
        attrs: { class: "name" },
        nodes: [{ tag: "text", text: "Valeri Karpov " }]
      }
    ]
  },
  {
    tag: "div",
    attrs: {},
    nodes: [
      {
        tag: "p",
        attrs: { class: "desc" },
        nodes: [
          {
            tag: "span",
            attrs: { class: "mainlink" },
            nodes: [
              {
                tag: "a",
                attrs: {
                  href: "https://javascriptweekly.com/link/86032/web",
                  title: "try.datree.io"
                },
                nodes: [
                  {
                    tag: "text",
                    text:
                      "Top GitHub Best Practices for Developers - Expanded Guide"
                  }
                ]
              }
            ]
          },
          {
            tag: "text",
            text:
              " &#x2014; Implementing these best practices could save you time, improve code maintainability, and prevent security risks."
          }
        ]
      },
      {
        tag: "p",
        attrs: { class: "name" },
        nodes: [
          { tag: "text", text: "Datree.io " },
          {
            tag: "span",
            attrs: { class: "tag-sponsor" },
            nodes: [{ tag: "text", text: "sponsor" }]
          }
        ]
      }
    ]
  },
  {
    tag: "div",
    attrs: {},
    nodes: [
      {
        tag: "p",
        attrs: { class: "desc" },
        nodes: [
          {
            tag: "span",
            attrs: { class: "mainlink" },
            nodes: [
              {
                tag: "a",
                attrs: {
                  href: "https://javascriptweekly.com/link/86033/web",
                  title: "www.theritters.online"
                },
                nodes: [
                  {
                    tag: "text",
                    text:
                      "Deleting Scrobbles on last.fm En Masse with a JS One Liner"
                  }
                ]
              }
            ]
          },
          {
            tag: "text",
            text:
              " &#x2014; A reminder, if you needed one, that running quick, scrappy JavaScript one liners in the devtools can help you gain some serious power over the pages you&#x2019;re&#xA0;navigating."
          }
        ]
      },
      {
        tag: "p",
        attrs: { class: "name" },
        nodes: [{ tag: "text", text: "Charlie Ritter " }]
      }
    ]
  },
  {
    tag: "div",
    attrs: {},
    nodes: [
      {
        tag: "p",
        attrs: { class: "desc" },
        nodes: [
          {
            tag: "span",
            attrs: { class: "mainlink" },
            nodes: [
              {
                tag: "a",
                attrs: {
                  href: "https://javascriptweekly.com/link/86034/web",
                  title: "blog.bitsrc.io"
                },
                nodes: [{ tag: "text", text: "How to Use the Web Storage API" }]
              }
            ]
          },
          { tag: "text", text: " &#x2014; An introductory guide to " },
          {
            tag: "code",
            attrs: {},
            nodes: [{ tag: "text", text: "localStorage" }]
          },
          { tag: "text", text: " and " },
          {
            tag: "code",
            attrs: {},
            nodes: [{ tag: "text", text: "sessionStorage" }]
          },
          { tag: "text", text: "." }
        ]
      },
      {
        tag: "p",
        attrs: { class: "name" },
        nodes: [{ tag: "text", text: "Chidume Nnamdi " }]
      }
    ]
  },
  {
    tag: "div",
    attrs: {},
    nodes: [
      {
        tag: "p",
        attrs: { class: "desc" },
        nodes: [
          {
            tag: "span",
            attrs: { class: "mainlink" },
            nodes: [
              {
                tag: "a",
                attrs: {
                  href: "https://javascriptweekly.com/link/86035/web",
                  title: "medium.com"
                },
                nodes: [
                  {
                    tag: "text",
                    text: "Optimizing JS for Native-Like Webviews"
                  }
                ]
              }
            ]
          },
          { tag: "text", text: " &#x2014; Serving web pages fast enough to " },
          { tag: "em", attrs: {}, nodes: [{ tag: "text", text: "feel" }] },
          { tag: "text", text: " native." }
        ]
      },
      {
        tag: "p",
        attrs: { class: "name" },
        nodes: [{ tag: "text", text: "Leo Jiang " }]
      }
    ]
  },
  {
    tag: "div",
    attrs: {},
    nodes: [
      {
        tag: "p",
        attrs: { class: "desc" },
        nodes: [
          {
            tag: "span",
            attrs: { class: "mainlink" },
            nodes: [
              {
                tag: "a",
                attrs: {
                  href: "https://javascriptweekly.com/link/86019/web",
                  title: "forwardjs.com"
                },
                nodes: [
                  {
                    tag: "text",
                    text: "Register for the Free ForwardJS May 2020 Livestream"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        tag: "p",
        attrs: { class: "name" },
        nodes: [
          { tag: "text", text: "ForwardJS " },
          {
            tag: "span",
            attrs: { class: "tag-sponsor" },
            nodes: [{ tag: "text", text: "sponsor" }]
          }
        ]
      }
    ]
  },
  {
    tag: "div",
    attrs: {},
    nodes: [
      {
        tag: "p",
        attrs: { class: "desc" },
        nodes: [
          {
            tag: "span",
            attrs: { class: "mainlink" },
            nodes: [
              {
                tag: "a",
                attrs: {
                  href: "https://javascriptweekly.com/link/86036/web",
                  title: "www.smashingmagazine.com"
                },
                nodes: [
                  {
                    tag: "text",
                    text: "How To Make Life Easier When Using Git"
                  }
                ]
              }
            ]
          },
          {
            tag: "text",
            text: " &#x2014; Lots of useful bits and pieces in&#xA0;here."
          }
        ]
      },
      {
        tag: "p",
        attrs: { class: "name" },
        nodes: [{ tag: "text", text: "Shane Hudson " }]
      }
    ]
  },
  {
    tag: "div",
    attrs: {},
    nodes: [
      {
        tag: "p",
        attrs: { class: "desc" },
        nodes: [
          {
            tag: "span",
            attrs: { class: "mainlink" },
            nodes: [
              {
                tag: "a",
                attrs: {
                  href: "https://javascriptweekly.com/link/86037/web",
                  title: "gomakethings.com"
                },
                nodes: [
                  {
                    tag: "text",
                    text: "How to Use the URL API with Vanilla JavaScript"
                  }
                ]
              }
            ]
          },
          {
            tag: "text",
            text:
              " &#x2014; A simple look at a lesser-known Web API, which lets you grab various bits including the hash, hostname, pathname, protocol, etc."
          }
        ]
      },
      {
        tag: "p",
        attrs: { class: "name" },
        nodes: [{ tag: "text", text: "Chris Ferdinandi " }]
      }
    ]
  },
  {
    tag: "div",
    attrs: {},
    nodes: [
      {
        tag: "p",
        attrs: {},
        nodes: [{ tag: "text", text: "&#x1F527; Code &amp; Tools" }]
      }
    ]
  },
  {
    tag: "div",
    attrs: {},
    nodes: [
      {
        tag: "a",
        attrs: { href: "https://javascriptweekly.com/link/86048/web" },
        nodes: [
          {
            tag: "img",
            attrs: {
              src:
                "https://res.cloudinary.com/cpress/image/upload/w_1280,e_sharpen:60/v1585327798/phwd41gjwpdprcjmknuq.png",
              width: "640"
            },
            nodes: []
          }
        ]
      }
    ]
  },
  {
    tag: "div",
    attrs: {},
    nodes: [
      {
        tag: "p",
        attrs: { class: "desc" },
        nodes: [
          {
            tag: "span",
            attrs: { class: "mainlink" },
            nodes: [
              {
                tag: "a",
                attrs: {
                  href: "https://javascriptweekly.com/link/86048/web",
                  title: "ui.toast.com"
                },
                nodes: [
                  {
                    tag: "text",
                    text:
                      "TOAST UI Editor 2.0: A Powerful WYSIWYG Markdown Editor"
                  }
                ]
              }
            ]
          },
          {
            tag: "text",
            text:
              " &#x2014; Two years in comes version 2.0, along with 10K GitHub stars to boot. v2.0 has a new Markdown parser, better syntax highlighting, improved scroll syncing and live previews, and more. "
          },
          {
            tag: "a",
            attrs: { href: "https://javascriptweekly.com/link/86049/web" },
            nodes: [{ tag: "text", text: "GitHub&#xA0;repo." }]
          }
        ]
      },
      {
        tag: "p",
        attrs: { class: "name" },
        nodes: [{ tag: "text", text: "NHN " }]
      }
    ]
  },
  {
    tag: "div",
    attrs: {},
    nodes: [
      {
        tag: "p",
        attrs: { class: "desc" },
        nodes: [
          {
            tag: "span",
            attrs: { class: "mainlink" },
            nodes: [
              {
                tag: "a",
                attrs: {
                  href: "https://javascriptweekly.com/link/86038/web",
                  title: "github.com"
                },
                nodes: [
                  {
                    tag: "text",
                    text: "match-sorter: Deterministic Best-Match Array Sorting"
                  }
                ]
              }
            ]
          },
          {
            tag: "text",
            text:
              " &#x2014; If you have an array full of items that you want to filter and sort &#x2018;intelligently&#x2019; and deterministically, check this&#xA0;out."
          }
        ]
      },
      {
        tag: "p",
        attrs: { class: "name" },
        nodes: [{ tag: "text", text: "Kent C. Dodds " }]
      }
    ]
  },
  {
    tag: "div",
    attrs: {},
    nodes: [
      {
        tag: "p",
        attrs: { class: "desc" },
        nodes: [
          {
            tag: "span",
            attrs: { class: "mainlink" },
            nodes: [
              {
                tag: "a",
                attrs: {
                  href: "https://javascriptweekly.com/link/86039/web",
                  title: "github.com"
                },
                nodes: [
                  {
                    tag: "text",
                    text: "Nano ID 3.0: A Unique String ID Generator"
                  }
                ]
              }
            ]
          },
          {
            tag: "text",
            text:
              " &#x2014; Tiny (108 bytes), secure, and URL-friendly. 3.0 requires "
          },
          {
            tag: "a",
            attrs: { href: "https://javascriptweekly.com/link/86040/web" },
            nodes: [{ tag: "text", text: "changes to your code" }]
          },
          { tag: "text", text: " if you&#x2019;re already using&#xA0;it." }
        ]
      },
      {
        tag: "p",
        attrs: { class: "name" },
        nodes: [{ tag: "text", text: "Andrey Sitnik " }]
      }
    ]
  },
  {
    tag: "div",
    attrs: {},
    nodes: [
      {
        tag: "p",
        attrs: { class: "desc" },
        nodes: [
          {
            tag: "span",
            attrs: { class: "mainlink" },
            nodes: [
              {
                tag: "a",
                attrs: {
                  href: "https://javascriptweekly.com/link/86041/web",
                  title: "github.com"
                },
                nodes: [
                  {
                    tag: "text",
                    text:
                      "jsSHA: Pure JS Implementations of SHA-1, SHA-256, SHA3-512, Etc."
                  }
                ]
              }
            ]
          },
          {
            tag: "text",
            text:
              " &#x2014; If there&#x2019;s a SHA hash, this library probably covers&#xA0;it."
          }
        ]
      },
      {
        tag: "p",
        attrs: { class: "name" },
        nodes: [{ tag: "text", text: "Brian Turek " }]
      }
    ]
  },
  {
    tag: "div",
    attrs: {},
    nodes: [
      {
        tag: "p",
        attrs: { class: "desc" },
        nodes: [
          {
            tag: "span",
            attrs: { class: "mainlink" },
            nodes: [
              {
                tag: "a",
                attrs: {
                  href: "https://javascriptweekly.com/link/86043/web",
                  title: "www.site24x7.com"
                },
                nodes: [
                  {
                    tag: "text",
                    text:
                      "Analyze Page Load Time and Optimize Your Front-End Performance"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        tag: "p",
        attrs: { class: "name" },
        nodes: [
          { tag: "text", text: "Site24x7 " },
          {
            tag: "span",
            attrs: { class: "tag-sponsor" },
            nodes: [{ tag: "text", text: "sponsor" }]
          }
        ]
      }
    ]
  },
  {
    tag: "div",
    attrs: {},
    nodes: [
      {
        tag: "p",
        attrs: { class: "desc" },
        nodes: [
          {
            tag: "span",
            attrs: { class: "mainlink" },
            nodes: [
              {
                tag: "a",
                attrs: {
                  href: "https://javascriptweekly.com/link/86042/web",
                  title: "skt-t1-byungi.github.io"
                },
                nodes: [
                  {
                    tag: "text",
                    text:
                      "Rsup Progress: A Simple Progress Bar with Promises Support"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        tag: "p",
        attrs: { class: "name" },
        nodes: [{ tag: "text", text: "skt-t1-byungi " }]
      }
    ]
  },
  {
    tag: "div",
    attrs: {},
    nodes: [
      {
        tag: "p",
        attrs: { class: "desc" },
        nodes: [
          {
            tag: "span",
            attrs: { class: "mainlink" },
            nodes: [
              {
                tag: "a",
                attrs: {
                  href: "https://javascriptweekly.com/link/86044/web",
                  title: "www.blinkingcaret.com"
                },
                nodes: [
                  {
                    tag: "text",
                    text:
                      "ElectronCGI 1.0: Build Cross-Platform GUIs for .NET Core"
                  }
                ]
              }
            ]
          },
          {
            tag: "text",
            text:
              " &#x2014; Lets you invoke .NET Core code from Node and vice versa so you can use Electron to build a UI for an app otherwise based on a .NET Core&#xA0;language."
          }
        ]
      },
      {
        tag: "p",
        attrs: { class: "name" },
        nodes: [{ tag: "text", text: "Rui Figueiredo " }]
      }
    ]
  },
  {
    tag: "div",
    attrs: {},
    nodes: [
      {
        tag: "p",
        attrs: { class: "desc" },
        nodes: [
          {
            tag: "span",
            attrs: { class: "mainlink" },
            nodes: [
              {
                tag: "a",
                attrs: {
                  href: "https://javascriptweekly.com/link/86045/web",
                  title: "dinerojs.com"
                },
                nodes: [
                  {
                    tag: "text",
                    text:
                      "Dinero.js: A Library for Working with Monetary Values"
                  }
                ]
              }
            ]
          },
          { tag: "text", text: " &#x2014; " },
          {
            tag: "a",
            attrs: { href: "https://javascriptweekly.com/link/86046/web" },
            nodes: [{ tag: "text", text: "GitHub&#xA0;repo." }]
          }
        ]
      },
      {
        tag: "p",
        attrs: { class: "name" },
        nodes: [{ tag: "text", text: "Sarah Dayan " }]
      }
    ]
  },
  {
    tag: "div",
    attrs: {},
    nodes: [
      {
        tag: "p",
        attrs: { class: "desc" },
        nodes: [
          {
            tag: "span",
            attrs: { class: "mainlink" },
            nodes: [
              {
                tag: "a",
                attrs: {
                  href: "https://javascriptweekly.com/link/86047/web",
                  title: "github.com"
                },
                nodes: [
                  {
                    tag: "text",
                    text:
                      "jest-dom: Custom Jest Matchers to Test the State of the DOM"
                  }
                ]
              }
            ]
          },
          {
            tag: "text",
            text:
              " &#x2014; So you want to use Jest to write tests that assert various things about the state of a&#xA0;DOM.."
          }
        ]
      },
      {
        tag: "p",
        attrs: { class: "name" },
        nodes: [{ tag: "text", text: "Testing Library " }]
      }
    ]
  }
];
// el-heading, el-content, el-subtable  漏掉了, 主要是 table 的class

export default datas