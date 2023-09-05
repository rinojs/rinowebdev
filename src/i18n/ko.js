const path = require('path');

async function ko()
{
    return [
        {
            data: {
                title: "리노 | Rino.js",
                desc: "빠른 학습, 전처리 방식의, 직관적인 웹 프레임워크",
                url: "ko/"
            },
            tots: [
                {
                    name: "header",
                    filename: path.resolve(__dirname, "../tots/ko/components/header.tot")
                },
                {
                    name: "footer",
                    filename: path.resolve(__dirname, "../tots/ko/components/footer.tot")
                },
                {
                    name: "content",
                    filename: path.resolve(__dirname, "../tots/ko/index.tot")
                }
            ],
            pageFilename: path.resolve(__dirname, "../pages/index.tot"),
            distDirname: path.resolve(__dirname, "../../dist/ko/"),
            filenames: {
                css: "style.css",
                js: "main.js"
            }
        },
        {
            data: {
                title: "상점 | Rino.js",
                desc: "리노 상점, 우리를 돕는 또 다른 방법",
                url: "ko/shop.html"
            },
            tots: [
                {
                    name: "header",
                    filename: path.resolve(__dirname, "../tots/ko/components/header.tot")
                },
                {
                    name: "footer",
                    filename: path.resolve(__dirname, "../tots/ko/components/footer.tot")
                },
                {
                    name: "content",
                    filename: path.resolve(__dirname, "../tots/ko/shop.tot")
                }
            ],
            pageFilename: path.resolve(__dirname, "../pages/shop.tot"),
            distDirname: path.resolve(__dirname, "../../dist/ko/"),
            filenames: {
                html: "shop.html",
                css: "shop-style.css",
                js: "shop-main.js"
            }
        },
        {
            data: {
                title: "리노 후원자 | Rino.js",
                desc: "후원자가 되어 저희를 도와주세요",
                url: "ko/sponsor.html"
            },
            tots: [
                {
                    name: "header",
                    filename: path.resolve(__dirname, "../tots/ko/components/header.tot")
                },
                {
                    name: "footer",
                    filename: path.resolve(__dirname, "../tots/ko/components/footer.tot")
                },
                {
                    name: "content",
                    filename: path.resolve(__dirname, "../tots/ko/sponsor.tot")
                }
            ],
            pageFilename: path.resolve(__dirname, "../pages/sponsor.tot"),
            distDirname: path.resolve(__dirname, "../../dist/ko/"),
            filenames: {
                html: "sponsor.html",
                css: "sponsor-style.css",
                js: "sponsor-main.js"
            }
        },
        {
            data: {
                title: "소개 | 문서 | Rino.js",
                desc: "Introduction of Rino.js. 문서.",
                url: "ko/documents/introduction.html"
            },
            mds: [
                {
                    name: "content",
                    filename: path.resolve(__dirname, "../mds/ko/documents/introduction.md")
                }
            ],
            tots: [
                {
                    name: "header",
                    filename: path.resolve(__dirname, "../tots/ko/components/header.tot")
                },
                {
                    name: "footer",
                    filename: path.resolve(__dirname, "../tots/ko/components/footer.tot")
                },
                {
                    name: "sidebar",
                    filename: path.resolve(__dirname, "../tots/ko/components/doc-sidebar.tot")
                }
            ],
            pageFilename: path.resolve(__dirname, "../pages/documents/introduction.tot"),
            distDirname: path.resolve(__dirname, "../../dist/ko/documents/"),
            filenames: {
                html: "introduction.html",
                css: "introduction-style.css",
                js: "introduction-main.js"
            }
        },
        {
            data: {
                title: "설치 및 설정 | 문서 | Rino.js",
                desc: "Rino.js 설치 및 설정. 문서.",
                url: "ko/documents/installation.html"
            },
            mds: [
                {
                    name: "content",
                    filename: path.resolve(__dirname, "../mds/ko/documents/installation.md")
                }
            ],
            tots: [
                {
                    name: "header",
                    filename: path.resolve(__dirname, "../tots/ko/components/header.tot")
                },
                {
                    name: "footer",
                    filename: path.resolve(__dirname, "../tots/ko/components/footer.tot")
                },
                {
                    name: "sidebar",
                    filename: path.resolve(__dirname, "../tots/ko/components/doc-sidebar.tot")
                }
            ],
            pageFilename: path.resolve(__dirname, "../pages/documents/installation.tot"),
            distDirname: path.resolve(__dirname, "../../dist/ko/documents/"),
            filenames: {
                html: "installation.html",
                css: "installation-style.css",
                js: "installation-main.js"
            }
        },
        {
            data: {
                title: "시스템 | 문서 | Rino.js",
                desc: "Rino.js의 시스템. 문서.",
                url: "ko/documents/system.html"
            },
            mds: [
                {
                    name: "content",
                    filename: path.resolve(__dirname, "../mds/ko/documents/system.md")
                }
            ],
            tots: [
                {
                    name: "header",
                    filename: path.resolve(__dirname, "../tots/ko/components/header.tot")
                },
                {
                    name: "footer",
                    filename: path.resolve(__dirname, "../tots/ko/components/footer.tot")
                },
                {
                    name: "sidebar",
                    filename: path.resolve(__dirname, "../tots/ko/components/doc-sidebar.tot")
                }
            ],
            pageFilename: path.resolve(__dirname, "../pages/documents/system.tot"),
            distDirname: path.resolve(__dirname, "../../dist/ko/documents/"),
            filenames: {
                html: "system.html",
                css: "system-style.css",
                js: "system-main.js"
            }
        },
        {
            data: {
                title: "전처리 API | 문서 | Rino.js",
                desc: "Rino.js의 전처리 API. 문서.",
                url: "ko/documents/preprocessing-api.html"
            },
            mds: [
                {
                    name: "content",
                    filename: path.resolve(__dirname, "../mds/ko/documents/preprocessing-api.md")
                }
            ],
            tots: [
                {
                    name: "header",
                    filename: path.resolve(__dirname, "../tots/ko/components/header.tot")
                },
                {
                    name: "footer",
                    filename: path.resolve(__dirname, "../tots/ko/components/footer.tot")
                },
                {
                    name: "sidebar",
                    filename: path.resolve(__dirname, "../tots/ko/components/doc-sidebar.tot")
                }
            ],
            pageFilename: path.resolve(__dirname, "../pages/documents/preprocessing-api.tot"),
            distDirname: path.resolve(__dirname, "../../dist/ko/documents/"),
            filenames: {
                html: "preprocessing-api.html",
                css: "preprocessing-api-style.css",
                js: "preprocessing-api-main.js"
            }
        },
        {
            data: {
                title: "전처리용 데이터 | 문서 | Rino.js",
                desc: "Rino.js의 전처리용 데이터. 문서.",
                url: "ko/documents/preprocessed-data.html"
            },
            mds: [
                {
                    name: "content",
                    filename: path.resolve(__dirname, "../mds/ko/documents/preprocessed-data.md")
                }
            ],
            tots: [
                {
                    name: "header",
                    filename: path.resolve(__dirname, "../tots/ko/components/header.tot")
                },
                {
                    name: "footer",
                    filename: path.resolve(__dirname, "../tots/ko/components/footer.tot")
                },
                {
                    name: "sidebar",
                    filename: path.resolve(__dirname, "../tots/ko/components/doc-sidebar.tot")
                }
            ],
            pageFilename: path.resolve(__dirname, "../pages/documents/preprocessed-data.tot"),
            distDirname: path.resolve(__dirname, "../../dist/ko/documents/"),
            filenames: {
                html: "preprocessed-data.html",
                css: "preprocessed-data-style.css",
                js: "preprocessed-data-main.js"
            }
        },
        {
            data: {
                title: "페이지 | 문서 | Rino.js",
                desc: "Rino.js의 전처리용 페이지. 문서.",
                url: "ko/documents/preprocessed-page.html"
            },
            mds: [
                {
                    name: "content",
                    filename: path.resolve(__dirname, "../mds/ko/documents/preprocessed-page.md")
                }
            ],
            tots: [
                {
                    name: "header",
                    filename: path.resolve(__dirname, "../tots/ko/components/header.tot")
                },
                {
                    name: "footer",
                    filename: path.resolve(__dirname, "../tots/ko/components/footer.tot")
                },
                {
                    name: "sidebar",
                    filename: path.resolve(__dirname, "../tots/ko/components/doc-sidebar.tot")
                }
            ],
            pageFilename: path.resolve(__dirname, "../pages/documents/preprocessed-page.tot"),
            distDirname: path.resolve(__dirname, "../../dist/ko/documents/"),
            filenames: {
                html: "preprocessed-page.html",
                css: "preprocessed-page-style.css",
                js: "preprocessed-page-main.js"
            }
        },
        {
            data: {
                title: "@component | 문서 | Rino.js",
                desc: "Rino.js의 전처리용 컴포넌트. 문서.",
                url: "ko/documents/preprocessed-component.html"
            },
            mds: [
                {
                    name: "content",
                    filename: path.resolve(__dirname, "../mds/ko/documents/preprocessed-component.md")
                }
            ],
            tots: [
                {
                    name: "header",
                    filename: path.resolve(__dirname, "../tots/ko/components/header.tot")
                },
                {
                    name: "footer",
                    filename: path.resolve(__dirname, "../tots/ko/components/footer.tot")
                },
                {
                    name: "sidebar",
                    filename: path.resolve(__dirname, "../tots/ko/components/doc-sidebar.tot")
                }
            ],
            pageFilename: path.resolve(__dirname, "../pages/documents/preprocessed-component.tot"),
            distDirname: path.resolve(__dirname, "../../dist/ko/documents/"),
            filenames: {
                html: "preprocessed-component.html",
                css: "preprocessed-component-style.css",
                js: "preprocessed-component-main.js"
            }
        },
        {
            data: {
                title: "@preload | 문서 | Rino.js",
                desc: "Rino.js의 전처리용 미리 로드. 문서.",
                url: "ko/documents/preprocessed-preload.html"
            },
            mds: [
                {
                    name: "content",
                    filename: path.resolve(__dirname, "../mds/ko/documents/preprocessed-preload.md")
                }
            ],
            tots: [
                {
                    name: "header",
                    filename: path.resolve(__dirname, "../tots/ko/components/header.tot")
                },
                {
                    name: "footer",
                    filename: path.resolve(__dirname, "../tots/ko/components/footer.tot")
                },
                {
                    name: "sidebar",
                    filename: path.resolve(__dirname, "../tots/ko/components/doc-sidebar.tot")
                }
            ],
            pageFilename: path.resolve(__dirname, "../pages/documents/preprocessed-preload.tot"),
            distDirname: path.resolve(__dirname, "../../dist/ko/documents/"),
            filenames: {
                html: "preprocessed-preload.html",
                css: "preprocessed-preload-style.css",
                js: "preprocessed-preload-main.js"
            }
        },
        {
            data: {
                title: "@tot | 문서 | Rino.js",
                desc: "Rino.js의 전처리용 Tot. 문서.",
                url: "ko/documents/preprocessed-tot.html"
            },
            mds: [
                {
                    name: "content",
                    filename: path.resolve(__dirname, "../mds/ko/documents/preprocessed-tot.md")
                }
            ],
            tots: [
                {
                    name: "header",
                    filename: path.resolve(__dirname, "../tots/ko/components/header.tot")
                },
                {
                    name: "footer",
                    filename: path.resolve(__dirname, "../tots/ko/components/footer.tot")
                },
                {
                    name: "sidebar",
                    filename: path.resolve(__dirname, "../tots/ko/components/doc-sidebar.tot")
                }
            ],
            pageFilename: path.resolve(__dirname, "../pages/documents/preprocessed-tot.tot"),
            distDirname: path.resolve(__dirname, "../../dist/ko/documents/"),
            filenames: {
                html: "preprocessed-tot.html",
                css: "preprocessed-tot-style.css",
                js: "preprocessed-tot-main.js"
            }
        },
        {
            data: {
                title: "@md | 문서 | Rino.js",
                desc: "Rino.js의 전처리용 마크다운. 문서.",
                url: "ko/documents/preprocessed-md.html"
            },
            mds: [
                {
                    name: "content",
                    filename: path.resolve(__dirname, "../mds/ko/documents/preprocessed-md.md")
                }
            ],
            tots: [
                {
                    name: "header",
                    filename: path.resolve(__dirname, "../tots/ko/components/header.tot")
                },
                {
                    name: "footer",
                    filename: path.resolve(__dirname, "../tots/ko/components/footer.tot")
                },
                {
                    name: "sidebar",
                    filename: path.resolve(__dirname, "../tots/ko/components/doc-sidebar.tot")
                }
            ],
            pageFilename: path.resolve(__dirname, "../pages/documents/preprocessed-md.tot"),
            distDirname: path.resolve(__dirname, "../../dist/ko/documents/"),
            filenames: {
                html: "preprocessed-md.html",
                css: "preprocessed-md-style.css",
                js: "preprocessed-md-main.js"
            }
        },
        {
            data: {
                title: "@events | 문서 | Rino.js",
                desc: "Rino.js의 전처리용 이벤트. 문서.",
                url: "ko/documents/preprocessed-event.html"
            },
            mds: [
                {
                    name: "content",
                    filename: path.resolve(__dirname, "../mds/ko/documents/preprocessed-event.md")
                }
            ],
            tots: [
                {
                    name: "header",
                    filename: path.resolve(__dirname, "../tots/ko/components/header.tot")
                },
                {
                    name: "footer",
                    filename: path.resolve(__dirname, "../tots/ko/components/footer.tot")
                },
                {
                    name: "sidebar",
                    filename: path.resolve(__dirname, "../tots/ko/components/doc-sidebar.tot")
                }
            ],
            pageFilename: path.resolve(__dirname, "../pages/documents/preprocessed-event.tot"),
            distDirname: path.resolve(__dirname, "../../dist/ko/documents/"),
            filenames: {
                html: "preprocessed-event.html",
                css: "preprocessed-event-style.css",
                js: "preprocessed-event-main.js"
            }
        },
        {
            data: {
                title: "@props | 문서 | Rino.js",
                desc: "Rino.js의 @props. 문서.",
                url: "ko/documents/preprocessed-props.html"
            },
            mds: [
                {
                    name: "content",
                    filename: path.resolve(__dirname, "../mds/ko/documents/preprocessed-props.md")
                }
            ],
            tots: [
                {
                    name: "header",
                    filename: path.resolve(__dirname, "../tots/ko/components/header.tot")
                },
                {
                    name: "footer",
                    filename: path.resolve(__dirname, "../tots/ko/components/footer.tot")
                },
                {
                    name: "sidebar",
                    filename: path.resolve(__dirname, "../tots/ko/components/doc-sidebar.tot")
                }
            ],
            pageFilename: path.resolve(__dirname, "../pages/documents/preprocessed-props.tot"),
            distDirname: path.resolve(__dirname, "../../dist/ko/documents/"),
            filenames: {
                html: "preprocessed-props.html",
                css: "preprocessed-props-style.css",
                js: "preprocessed-props-main.js"
            }
        },
        {
            data: {
                title: "내부 데이터 | 문서 | Rino.js",
                desc: "Rino.js의 내부 데이터. 문서.",
                url: "ko/documents/innerdata.html"
            },
            mds: [
                {
                    name: "content",
                    filename: path.resolve(__dirname, "../mds/ko/documents/innerdata.md")
                }
            ],
            tots: [
                {
                    name: "header",
                    filename: path.resolve(__dirname, "../tots/ko/components/header.tot")
                },
                {
                    name: "footer",
                    filename: path.resolve(__dirname, "../tots/ko/components/footer.tot")
                },
                {
                    name: "sidebar",
                    filename: path.resolve(__dirname, "../tots/ko/components/doc-sidebar.tot")
                }
            ],
            pageFilename: path.resolve(__dirname, "../pages/documents/innerdata.tot"),
            distDirname: path.resolve(__dirname, "../../dist/ko/documents/"),
            filenames: {
                html: "innerdata.html",
                css: "innerdata-style.css",
                js: "innerdata-main.js"
            }
        },
        {
            data: {
                title: "주석 | 문서 | Rino.js",
                desc: "Rino.js의 주석. 문서.",
                url: "ko/documents/comment.html"
            },
            mds: [
                {
                    name: "content",
                    filename: path.resolve(__dirname, "../mds/ko/documents/comment.md")
                }
            ],
            tots: [
                {
                    name: "header",
                    filename: path.resolve(__dirname, "../tots/ko/components/header.tot")
                },
                {
                    name: "footer",
                    filename: path.resolve(__dirname, "../tots/ko/components/footer.tot")
                },
                {
                    name: "sidebar",
                    filename: path.resolve(__dirname, "../tots/ko/components/doc-sidebar.tot")
                }
            ],
            pageFilename: path.resolve(__dirname, "../pages/documents/comment.tot"),
            distDirname: path.resolve(__dirname, "../../dist/ko/documents/"),
            filenames: {
                html: "comment.html",
                css: "comment-style.css",
                js: "comment-main.js"
            }
        },
        {
            data: {
                title: "회피 구문 | 문서 | Rino.js",
                desc: "Rino.js의 회피 구문. 문서.",
                url: "ko/documents/escape.html"
            },
            mds: [
                {
                    name: "content",
                    filename: path.resolve(__dirname, "../mds/ko/documents/escape.md")
                }
            ],
            tots: [
                {
                    name: "header",
                    filename: path.resolve(__dirname, "../tots/ko/components/header.tot")
                },
                {
                    name: "footer",
                    filename: path.resolve(__dirname, "../tots/ko/components/footer.tot")
                },
                {
                    name: "sidebar",
                    filename: path.resolve(__dirname, "../tots/ko/components/doc-sidebar.tot")
                }
            ],
            pageFilename: path.resolve(__dirname, "../pages/documents/escape.tot"),
            distDirname: path.resolve(__dirname, "../../dist/ko/documents/"),
            filenames: {
                html: "escape.html",
                css: "escape-style.css",
                js: "escape-main.js"
            }
        },
        {
            data: {
                title: "리노킷 | 문서 | Rino.js",
                desc: "Rino.js의 리노킷. 문서.",
                url: "ko/documents/rinokit.html"
            },
            mds: [
                {
                    name: "content",
                    filename: path.resolve(__dirname, "../mds/ko/documents/rinokit.md")
                }
            ],
            tots: [
                {
                    name: "header",
                    filename: path.resolve(__dirname, "../tots/ko/components/header.tot")
                },
                {
                    name: "footer",
                    filename: path.resolve(__dirname, "../tots/ko/components/footer.tot")
                },
                {
                    name: "sidebar",
                    filename: path.resolve(__dirname, "../tots/ko/components/doc-sidebar.tot")
                }
            ],
            pageFilename: path.resolve(__dirname, "../pages/documents/rinokit.tot"),
            distDirname: path.resolve(__dirname, "../../dist/ko/documents/"),
            filenames: {
                html: "rinokit.html",
                css: "rinokit-style.css",
                js: "rinokit-main.js"
            }
        },
        {
            data: {
                title: "컴포넌트 | 문서 | Rino.js",
                desc: "리노킷의 컴포넌트. 문서.",
                url: "ko/documents/component.html"
            },
            mds: [
                {
                    name: "content",
                    filename: path.resolve(__dirname, "../mds/ko/documents/component.md")
                }
            ],
            tots: [
                {
                    name: "header",
                    filename: path.resolve(__dirname, "../tots/ko/components/header.tot")
                },
                {
                    name: "footer",
                    filename: path.resolve(__dirname, "../tots/ko/components/footer.tot")
                },
                {
                    name: "sidebar",
                    filename: path.resolve(__dirname, "../tots/ko/components/doc-sidebar.tot")
                }
            ],
            pageFilename: path.resolve(__dirname, "../pages/documents/component.tot"),
            distDirname: path.resolve(__dirname, "../../dist/ko/documents/"),
            filenames: {
                html: "component.html",
                css: "component-style.css",
                js: "component-main.js"
            }
        },
        {
            data: {
                title: "데이터 | 문서 | Rino.js",
                desc: "리노킷의 데이터. 문서.",
                url: "ko/documents/data.html"
            },
            mds: [
                {
                    name: "content",
                    filename: path.resolve(__dirname, "../mds/ko/documents/data.md")
                }
            ],
            tots: [
                {
                    name: "header",
                    filename: path.resolve(__dirname, "../tots/ko/components/header.tot")
                },
                {
                    name: "footer",
                    filename: path.resolve(__dirname, "../tots/ko/components/footer.tot")
                },
                {
                    name: "sidebar",
                    filename: path.resolve(__dirname, "../tots/ko/components/doc-sidebar.tot")
                }
            ],
            pageFilename: path.resolve(__dirname, "../pages/documents/data.tot"),
            distDirname: path.resolve(__dirname, "../../dist/ko/documents/"),
            filenames: {
                html: "data.html",
                css: "data-style.css",
                js: "data-main.js"
            }
        },
        {
            data: {
                title: "리노킷 API | 문서 | Rino.js",
                desc: "리노킷 API. 문서.",
                url: "ko/documents/rinokit-api.html"
            },
            mds: [
                {
                    name: "content",
                    filename: path.resolve(__dirname, "../mds/ko/documents/rinokit-api.md")
                }
            ],
            tots: [
                {
                    name: "header",
                    filename: path.resolve(__dirname, "../tots/ko/components/header.tot")
                },
                {
                    name: "footer",
                    filename: path.resolve(__dirname, "../tots/ko/components/footer.tot")
                },
                {
                    name: "sidebar",
                    filename: path.resolve(__dirname, "../tots/ko/components/doc-sidebar.tot")
                }
            ],
            pageFilename: path.resolve(__dirname, "../pages/documents/rinokit-api.tot"),
            distDirname: path.resolve(__dirname, "../../dist/ko/documents/"),
            filenames: {
                html: "rinokit-api.html",
                css: "rinokit-api-style.css",
                js: "rinokit-api-main.js"
            }
        }
    ]
}

module.exports = { ko }