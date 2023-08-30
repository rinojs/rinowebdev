const path = require('path');

async function en()
{
    return [
        {
            data: {
                title: "Rino.js",
                desc: "Fast learning, preprocessing, intuitive web framework. Rino.js",
                url: ""
            },
            tots: [
                {
                    name: "header",
                    filename: path.resolve(__dirname, "../tots/en/components/header.tot")
                },
                {
                    name: "footer",
                    filename: path.resolve(__dirname, "../tots/en/components/footer.tot")
                },
                {
                    name: "content",
                    filename: path.resolve(__dirname, "../tots/en/index.tot")
                }
            ],
            pageFilename: path.resolve(__dirname, "../pages/index.tot"),
            distDirname: path.resolve(__dirname, "../../dist/"),
            filenames: {
                css: "style.css",
                js: "main.js"
            }
        },
        {
            data: {
                title: "Shop | Rino.js",
                desc: "Rino.js Shop, another way to support us",
                url: "shop.html"
            },
            tots: [
                {
                    name: "header",
                    filename: path.resolve(__dirname, "../tots/en/components/header.tot")
                },
                {
                    name: "footer",
                    filename: path.resolve(__dirname, "../tots/en/components/footer.tot")
                },
                {
                    name: "content",
                    filename: path.resolve(__dirname, "../tots/en/shop.tot")
                }
            ],
            pageFilename: path.resolve(__dirname, "../pages/shop.tot"),
            distDirname: path.resolve(__dirname, "../../dist/"),
            filenames: {
                html: "shop.html",
                css: "shop-style.css",
                js: "shop-main.js"
            }
        },
        {
            data: {
                title: "Sponsor | Rino.js",
                desc: "Rino Sponsor. Become a sponsor and support us",
                url: "sponsor.html"
            },
            tots: [
                {
                    name: "header",
                    filename: path.resolve(__dirname, "../tots/en/components/header.tot")
                },
                {
                    name: "footer",
                    filename: path.resolve(__dirname, "../tots/en/components/footer.tot")
                },
                {
                    name: "content",
                    filename: path.resolve(__dirname, "../tots/en/sponsor.tot")
                }
            ],
            pageFilename: path.resolve(__dirname, "../pages/sponsor.tot"),
            distDirname: path.resolve(__dirname, "../../dist/"),
            filenames: {
                html: "sponsor.html",
                css: "sponsor-style.css",
                js: "sponsor-main.js"
            }
        },
        {
            data: {
                title: "Introduction | Doc | Rino.js",
                desc: "Introduction of Rino.js. Documentation.",
                url: "documents/introduction.html"
            },
            mds: [
                {
                    name: "content",
                    filename: path.resolve(__dirname, "../mds/en/documents/introduction.md")
                }
            ],
            tots: [
                {
                    name: "header",
                    filename: path.resolve(__dirname, "../tots/en/components/header.tot")
                },
                {
                    name: "footer",
                    filename: path.resolve(__dirname, "../tots/en/components/footer.tot")
                },
                {
                    name: "sidebar",
                    filename: path.resolve(__dirname, "../tots/en/components/doc-sidebar.tot")
                }
            ],
            pageFilename: path.resolve(__dirname, "../pages/documents/introduction.tot"),
            distDirname: path.resolve(__dirname, "../../dist/documents/"),
            filenames: {
                html: "introduction.html",
                css: "introduction-style.css",
                js: "introduction-main.js"
            }
        },
        {
            data: {
                title: "Installation & Setup | Doc | Rino.js",
                desc: "Installation & Setup of Rino.js. Documentation.",
                url: "documents/installation.html"
            },
            mds: [
                {
                    name: "content",
                    filename: path.resolve(__dirname, "../mds/en/documents/installation.md")
                }
            ],
            tots: [
                {
                    name: "header",
                    filename: path.resolve(__dirname, "../tots/en/components/header.tot")
                },
                {
                    name: "footer",
                    filename: path.resolve(__dirname, "../tots/en/components/footer.tot")
                },
                {
                    name: "sidebar",
                    filename: path.resolve(__dirname, "../tots/en/components/doc-sidebar.tot")
                }
            ],
            pageFilename: path.resolve(__dirname, "../pages/documents/installation.tot"),
            distDirname: path.resolve(__dirname, "../../dist/documents/"),
            filenames: {
                html: "installation.html",
                css: "installation-style.css",
                js: "installation-main.js"
            }
        },
        {
            data: {
                title: "System | Doc | Rino.js",
                desc: "System of Rino.js. Documentation.",
                url: "documents/system.html"
            },
            mds: [
                {
                    name: "content",
                    filename: path.resolve(__dirname, "../mds/en/documents/system.md")
                }
            ],
            tots: [
                {
                    name: "header",
                    filename: path.resolve(__dirname, "../tots/en/components/header.tot")
                },
                {
                    name: "footer",
                    filename: path.resolve(__dirname, "../tots/en/components/footer.tot")
                },
                {
                    name: "sidebar",
                    filename: path.resolve(__dirname, "../tots/en/components/doc-sidebar.tot")
                }
            ],
            pageFilename: path.resolve(__dirname, "../pages/documents/system.tot"),
            distDirname: path.resolve(__dirname, "../../dist/documents/"),
            filenames: {
                html: "system.html",
                css: "system-style.css",
                js: "system-main.js"
            }
        },
        {
            data: {
                title: "Preprocessing API | Doc | Rino.js",
                desc: "Preprocessing API of Rino.js. Documentation.",
                url: "documents/preprocessing-api.html"
            },
            mds: [
                {
                    name: "content",
                    filename: path.resolve(__dirname, "../mds/en/documents/preprocessing-api.md")
                }
            ],
            tots: [
                {
                    name: "header",
                    filename: path.resolve(__dirname, "../tots/en/components/header.tot")
                },
                {
                    name: "footer",
                    filename: path.resolve(__dirname, "../tots/en/components/footer.tot")
                },
                {
                    name: "sidebar",
                    filename: path.resolve(__dirname, "../tots/en/components/doc-sidebar.tot")
                }
            ],
            pageFilename: path.resolve(__dirname, "../pages/documents/preprocessing-api.tot"),
            distDirname: path.resolve(__dirname, "../../dist/documents/"),
            filenames: {
                html: "preprocessing-api.html",
                css: "preprocessing-api-style.css",
                js: "preprocessing-api-main.js"
            }
        },
        {
            data: {
                title: "Preprocessed Data | Doc | Rino.js",
                desc: "Preprocessed Data of Rino.js. Documentation.",
                url: "documents/preprocessed-data.html"
            },
            mds: [
                {
                    name: "content",
                    filename: path.resolve(__dirname, "../mds/en/documents/preprocessed-data.md")
                }
            ],
            tots: [
                {
                    name: "header",
                    filename: path.resolve(__dirname, "../tots/en/components/header.tot")
                },
                {
                    name: "footer",
                    filename: path.resolve(__dirname, "../tots/en/components/footer.tot")
                },
                {
                    name: "sidebar",
                    filename: path.resolve(__dirname, "../tots/en/components/doc-sidebar.tot")
                }
            ],
            pageFilename: path.resolve(__dirname, "../pages/documents/preprocessed-data.tot"),
            distDirname: path.resolve(__dirname, "../../dist/documents/"),
            filenames: {
                html: "preprocessed-data.html",
                css: "preprocessed-data-style.css",
                js: "preprocessed-data-main.js"
            }
        },
        {
            data: {
                title: "Preprocessed Page | Doc | Rino.js",
                desc: "Preprocessed Page of Rino.js. Documentation.",
                url: "documents/preprocessed-page.html"
            },
            mds: [
                {
                    name: "content",
                    filename: path.resolve(__dirname, "../mds/en/documents/preprocessed-page.md")
                }
            ],
            tots: [
                {
                    name: "header",
                    filename: path.resolve(__dirname, "../tots/en/components/header.tot")
                },
                {
                    name: "footer",
                    filename: path.resolve(__dirname, "../tots/en/components/footer.tot")
                },
                {
                    name: "sidebar",
                    filename: path.resolve(__dirname, "../tots/en/components/doc-sidebar.tot")
                }
            ],
            pageFilename: path.resolve(__dirname, "../pages/documents/preprocessed-page.tot"),
            distDirname: path.resolve(__dirname, "../../dist/documents/"),
            filenames: {
                html: "preprocessed-page.html",
                css: "preprocessed-page-style.css",
                js: "preprocessed-page-main.js"
            }
        },
        {
            data: {
                title: "Preprocessed Component | Doc | Rino.js",
                desc: "Preprocessed Component of Rino.js. Documentation.",
                url: "documents/preprocessed-component.html"
            },
            mds: [
                {
                    name: "content",
                    filename: path.resolve(__dirname, "../mds/en/documents/preprocessed-component.md")
                }
            ],
            tots: [
                {
                    name: "header",
                    filename: path.resolve(__dirname, "../tots/en/components/header.tot")
                },
                {
                    name: "footer",
                    filename: path.resolve(__dirname, "../tots/en/components/footer.tot")
                },
                {
                    name: "sidebar",
                    filename: path.resolve(__dirname, "../tots/en/components/doc-sidebar.tot")
                }
            ],
            pageFilename: path.resolve(__dirname, "../pages/documents/preprocessed-component.tot"),
            distDirname: path.resolve(__dirname, "../../dist/documents/"),
            filenames: {
                html: "preprocessed-component.html",
                css: "preprocessed-component-style.css",
                js: "preprocessed-component-main.js"
            }
        },
        {
            data: {
                title: "Preprocessed Preload | Doc | Rino.js",
                desc: "Preprocessed Preload of Rino.js. Documentation.",
                url: "documents/preprocessed-preload.html"
            },
            mds: [
                {
                    name: "content",
                    filename: path.resolve(__dirname, "../mds/en/documents/preprocessed-preload.md")
                }
            ],
            tots: [
                {
                    name: "header",
                    filename: path.resolve(__dirname, "../tots/en/components/header.tot")
                },
                {
                    name: "footer",
                    filename: path.resolve(__dirname, "../tots/en/components/footer.tot")
                },
                {
                    name: "sidebar",
                    filename: path.resolve(__dirname, "../tots/en/components/doc-sidebar.tot")
                }
            ],
            pageFilename: path.resolve(__dirname, "../pages/documents/preprocessed-preload.tot"),
            distDirname: path.resolve(__dirname, "../../dist/documents/"),
            filenames: {
                html: "preprocessed-preload.html",
                css: "preprocessed-preload-style.css",
                js: "preprocessed-preload-main.js"
            }
        },
        {
            data: {
                title: "Preprocessed Tot | Doc | Rino.js",
                desc: "Preprocessed Tot of Rino.js. Documentation.",
                url: "documents/preprocessed-tot.html"
            },
            mds: [
                {
                    name: "content",
                    filename: path.resolve(__dirname, "../mds/en/documents/preprocessed-tot.md")
                }
            ],
            tots: [
                {
                    name: "header",
                    filename: path.resolve(__dirname, "../tots/en/components/header.tot")
                },
                {
                    name: "footer",
                    filename: path.resolve(__dirname, "../tots/en/components/footer.tot")
                },
                {
                    name: "sidebar",
                    filename: path.resolve(__dirname, "../tots/en/components/doc-sidebar.tot")
                }
            ],
            pageFilename: path.resolve(__dirname, "../pages/documents/preprocessed-tot.tot"),
            distDirname: path.resolve(__dirname, "../../dist/documents/"),
            filenames: {
                html: "preprocessed-tot.html",
                css: "preprocessed-tot-style.css",
                js: "preprocessed-tot-main.js"
            }
        },
        {
            data: {
                title: "Preprocessed Markdown | Doc | Rino.js",
                desc: "Preprocessed Markdown of Rino.js. Documentation.",
                url: "documents/preprocessed-md.html"
            },
            mds: [
                {
                    name: "content",
                    filename: path.resolve(__dirname, "../mds/en/documents/preprocessed-md.md")
                }
            ],
            tots: [
                {
                    name: "header",
                    filename: path.resolve(__dirname, "../tots/en/components/header.tot")
                },
                {
                    name: "footer",
                    filename: path.resolve(__dirname, "../tots/en/components/footer.tot")
                },
                {
                    name: "sidebar",
                    filename: path.resolve(__dirname, "../tots/en/components/doc-sidebar.tot")
                }
            ],
            pageFilename: path.resolve(__dirname, "../pages/documents/preprocessed-md.tot"),
            distDirname: path.resolve(__dirname, "../../dist/documents/"),
            filenames: {
                html: "preprocessed-md.html",
                css: "preprocessed-md-style.css",
                js: "preprocessed-md-main.js"
            }
        },
        {
            data: {
                title: "Preprocessed Event | Doc | Rino.js",
                desc: "Preprocessed Event of Rino.js. Documentation.",
                url: "documents/preprocessed-event.html"
            },
            mds: [
                {
                    name: "content",
                    filename: path.resolve(__dirname, "../mds/en/documents/preprocessed-event.md")
                }
            ],
            tots: [
                {
                    name: "header",
                    filename: path.resolve(__dirname, "../tots/en/components/header.tot")
                },
                {
                    name: "footer",
                    filename: path.resolve(__dirname, "../tots/en/components/footer.tot")
                },
                {
                    name: "sidebar",
                    filename: path.resolve(__dirname, "../tots/en/components/doc-sidebar.tot")
                }
            ],
            pageFilename: path.resolve(__dirname, "../pages/documents/preprocessed-event.tot"),
            distDirname: path.resolve(__dirname, "../../dist/documents/"),
            filenames: {
                html: "preprocessed-event.html",
                css: "preprocessed-event-style.css",
                js: "preprocessed-event-main.js"
            }
        },
        {
            data: {
                title: "Escape | Doc | Rino.js",
                desc: "Escape of Rino.js. Documentation.",
                url: "documents/escape.html"
            },
            mds: [
                {
                    name: "content",
                    filename: path.resolve(__dirname, "../mds/en/documents/escape.md")
                }
            ],
            tots: [
                {
                    name: "header",
                    filename: path.resolve(__dirname, "../tots/en/components/header.tot")
                },
                {
                    name: "footer",
                    filename: path.resolve(__dirname, "../tots/en/components/footer.tot")
                },
                {
                    name: "sidebar",
                    filename: path.resolve(__dirname, "../tots/en/components/doc-sidebar.tot")
                }
            ],
            pageFilename: path.resolve(__dirname, "../pages/documents/escape.tot"),
            distDirname: path.resolve(__dirname, "../../dist/documents/"),
            filenames: {
                html: "escape.html",
                css: "escape-style.css",
                js: "escape-main.js"
            }
        },
        {
            data: {
                title: "Rinokit | Doc | Rino.js",
                desc: "Rinokit. Documentation.",
                url: "documents/rinokit.html"
            },
            mds: [
                {
                    name: "content",
                    filename: path.resolve(__dirname, "../mds/en/documents/rinokit.md")
                }
            ],
            tots: [
                {
                    name: "header",
                    filename: path.resolve(__dirname, "../tots/en/components/header.tot")
                },
                {
                    name: "footer",
                    filename: path.resolve(__dirname, "../tots/en/components/footer.tot")
                },
                {
                    name: "sidebar",
                    filename: path.resolve(__dirname, "../tots/en/components/doc-sidebar.tot")
                }
            ],
            pageFilename: path.resolve(__dirname, "../pages/documents/rinokit.tot"),
            distDirname: path.resolve(__dirname, "../../dist/documents/"),
            filenames: {
                html: "rinokit.html",
                css: "rinokit-style.css",
                js: "rinokit-main.js"
            }
        },
        {
            data: {
                title: "Component | Doc | Rino.js",
                desc: "Component of Rinokit. Documentation.",
                url: "documents/component.html"
            },
            mds: [
                {
                    name: "content",
                    filename: path.resolve(__dirname, "../mds/en/documents/component.md")
                }
            ],
            tots: [
                {
                    name: "header",
                    filename: path.resolve(__dirname, "../tots/en/components/header.tot")
                },
                {
                    name: "footer",
                    filename: path.resolve(__dirname, "../tots/en/components/footer.tot")
                },
                {
                    name: "sidebar",
                    filename: path.resolve(__dirname, "../tots/en/components/doc-sidebar.tot")
                }
            ],
            pageFilename: path.resolve(__dirname, "../pages/documents/component.tot"),
            distDirname: path.resolve(__dirname, "../../dist/documents/"),
            filenames: {
                html: "component.html",
                css: "component-style.css",
                js: "component-main.js"
            }
        },
        {
            data: {
                title: "Data | Doc | Rino.js",
                desc: "Data of Rinokit. Documentation.",
                url: "documents/data.html"
            },
            mds: [
                {
                    name: "content",
                    filename: path.resolve(__dirname, "../mds/en/documents/data.md")
                }
            ],
            tots: [
                {
                    name: "header",
                    filename: path.resolve(__dirname, "../tots/en/components/header.tot")
                },
                {
                    name: "footer",
                    filename: path.resolve(__dirname, "../tots/en/components/footer.tot")
                },
                {
                    name: "sidebar",
                    filename: path.resolve(__dirname, "../tots/en/components/doc-sidebar.tot")
                }
            ],
            pageFilename: path.resolve(__dirname, "../pages/documents/data.tot"),
            distDirname: path.resolve(__dirname, "../../dist/documents/"),
            filenames: {
                html: "data.html",
                css: "data-style.css",
                js: "data-main.js"
            }
        },
        {
            data: {
                title: "Rinokit API | Doc | Rino.js",
                desc: "Rinokit API. Documentation.",
                url: "documents/rinokit-api.html"
            },
            mds: [
                {
                    name: "content",
                    filename: path.resolve(__dirname, "../mds/en/documents/rinokit-api.md")
                }
            ],
            tots: [
                {
                    name: "header",
                    filename: path.resolve(__dirname, "../tots/en/components/header.tot")
                },
                {
                    name: "footer",
                    filename: path.resolve(__dirname, "../tots/en/components/footer.tot")
                },
                {
                    name: "sidebar",
                    filename: path.resolve(__dirname, "../tots/en/components/doc-sidebar.tot")
                }
            ],
            pageFilename: path.resolve(__dirname, "../pages/documents/rinokit-api.tot"),
            distDirname: path.resolve(__dirname, "../../dist/documents/"),
            filenames: {
                html: "rinokit-api.html",
                css: "rinokit-api-style.css",
                js: "rinokit-api-main.js"
            }
        }
    ]
}

module.exports = { en }