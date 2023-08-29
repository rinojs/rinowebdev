# System of Rino

## Whole Structure

```
Preprocess the project files -> static files or data
```

\
Instead of processing everything in the webpage, It is more efficient that we divide them into the things that need to be preprocessed and processed from client side.

## Preprocessing strucutre

```
Going through pages one by one
-> Syntax in a page in order
-> Syntax from Syntax(file or object) from page
-> Syntax from Syntax(file or object) if they have depth like @component
```

Rino preprocess files based on syntax in `<d:html></d:html>`. And preprocessing system follows the order of where the syntax is placed.

Preload files will be placed at the top of the javascript and css files.
Then components for client side will be placed. The last part will be the preprocessed components and pages.

Some syntax, they are applied in the order: `@data, @props, @tot`. You can try to do something with it. But it may not be safe because it is not like there's a rule `@data` or any others should be applied first.

## Dev() Directory Structrue and System

```
Project/src/index.js
Project/src/pages.js
Project/src/pages/
Project/src/pcomponents/
Project/src/components/
Project/src/preloads/
Project/src/tots/
Project/src/mds/
Project/public/
Project/dist/
```

It is totally up to you how you setup your project. But it is recommended to put everything well organized, just like the structure above.

`Project/src/index.js` is where you load `Project/src/pages.js` and run the code.

`Project/src/pages.js` is where you setup pages and run some code that you need.

`Project/src/pages/` is where you store .tot files for pages

`Project/src/pcomponents/` is where you store .tot files for preprocessed components

`Project/src/components/` is where you store .tot files for runtime components. You probably would not use this. Because it is not that powerful at the moment (version 1.3.0).

`Project/src/preloads/` is where you store .tot files for preloading.

`Project/src/tots/` is where you store .tot files for content and data storage. You can setup multilingual support using this.

`Project/src/mds/` is where you store .md files for content. You can setup multilingual support using this.

`Project/public/` is where you store asset files. They are going to be copied into `Project/dist/.` Rino use algorithm for checking when the files are updated. So it is quite efficient and fast enough.

`Project/dist/` is where Rino is going to put the result of development.

## Extra stuffs

Anything that is preprocessed start with `@`. Runtime component is also actually preprocessed as well, but it is just a rule for where they are more used for building a page. This rule has made because we are going to support runtime tools in the future.

It is good to understand [Tot](https://github.com/opdev1004/totjs). Because you can do many things with it. Tot is a good IO handler.
