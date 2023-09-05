# Preprocessing API

## rino.dev()

```
dev()
arguments:
{
    pages:[
        {
            pageFilename: `File name for the page, the entry .tot file.`,
            distDirname: `This is the directory where the output files will be stored.`,
            tots: [{name: `name of this`, filename: `File path of .tot file`}, ...],
            mds: [{nname: `name of this`, filename: `File path of .md file`}, ...],
            data: `json data for injecting to the html, css and javascript`,
            filenames: {
                html: `filename for html, default is /index.html`,
                css: `filename for css, default is /style.css`,
                js: `filename for js, default is /main.js`
            }
        }, ... pages continue
    ],
    distRoot: `This is the directory of root where the output files will be stored.`,
    src: `Where your project files are. src directory path. This is for checking changes.`,
    publicDirname: `public directory where you store asset files.`
}
```

## rino.build()

```
build()
arguments: args
args: {
    pageFilename: `File name for the page, the entry .tot file.`,
    distDirname: `This is the directory where the output files will be stored.`,
    tots: [{name: `name of this`, filename: `File path of .tot file`}, ...],
    mds: [{nname: `name of this`, filename: `File path of .md file`}, ...],
    data: `js object, json data for injecting to the html, css and javascript`,
    filenames: {
        html: `filename for html, default is /index.html`,
        css: `filename for css, default is /style.css`,
        js: `filename for js, default is /main.js`
    }
}
```

## rino.buildMultiple()

```
buildMultiple()
argument:
[
    {
        pageFilename: `File name for the page, the entry .tot file.`,
        distDirname: `This is the directory where the output files will be stored.`,
        tots: [{name: `name of this`, filename: `File path of .tot file`}, ...],
        mds: [{nname: `name of this`, filename: `File path of .md file`}, ...],
        data: `json data for injecting to the html, css and javascript`,
        filenames: {
            html: `filename for html, default is /index.html`,
            css: `filename for css, default is /style.css`,
            js: `filename for js, default is /main.js`
        }
    }, ... pages continue
]
```

## rino.buildPage()

```
buildPage()
arguments: args
args: {
    filename: `File name for the page, strting .tot file path.`,
    data: `js object, json data for injecting to the html, css and javascript`,
}
```

## rino.buildComponent()

```
buildComponent()
arguments:
{
    filename: `This is the file path of tot file.`,
    data: `js object, json data for injecting to the html, css and javascript`,
    props: properties that is passed from the parent. List.
}
```

## rino.writeFiles()

```
writeFiles()
arguments:
dirname: `This is the directory where the output files will be stored.`,
obj: {
    html: `html content`,
    css: `css content`,
    js: `js content`
},
filenames: {
    html: `filename for html, default is /index.html`,
    css: `filename for css, default is /style.css`,
    js: `filename for js, default is /main.js`
}
```

## rino.loadJSON()

```
loadJSON()
arguments: filename: `filename for json`
```

## rino.loadTot()

```
loadTot()
arguments: filename: `filename for tot`
```
