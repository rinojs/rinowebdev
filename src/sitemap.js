const Rino = require('rinojs');
const path = require('path');
const fs = require('fs');

let domain = "https://rinojs.org/";

if (domain[domain.length - 1] != "/") domain += '/';

function generateSitemap()
{
    let rino = new Rino();
    let en = setupLinkList(path.resolve("./src/mds/en/"));
    let ko = setupLinkList(path.resolve("./src/mds/ko/"), "ko");
    let list = [...en.slice(1), ...ko.slice(1)];

    let sitemap = [];
    sitemap.push(domain);
    sitemap.push(domain + "ko/");

    for (let i of list)
    {
        sitemap.push(domain + i);
    }

    rino.generateSitemapFile(sitemap, path.resolve("./public/sitemap.xml"));
}

function setupLinkList(filename, locale = "")
{
    let list = getFilenameList(filename);

    list = list.map(file => path.parse(file).name);
    list = list.sort((a, b) =>
    {
        const numA = parseInt(a.split(`. `)[0], 10);
        const numB = parseInt(b.split(`. `)[0], 10);

        if (numA < numB)
        {
            return -1;
        }
        else if (numA > numB)
        {
            return 1;
        }

        return 0;
    });
    list = list.map(file => file.replace(/^\d+\.\s*/, '').trim());

    if (locale)
    {
        list = list.map(file => locale + "/" + file);
    }

    return list;
}

function getFilenameList(dir)
{
    try
    {
        let files = [];
        const dirContents = fs.readdirSync(dir);

        for (const item of dirContents)
        {
            const itemPath = path.join(dir, item);
            const stat = fs.statSync(itemPath);

            if (stat.isDirectory())
            {
                files = files.concat(getFilenameList(itemPath));
            }
            else
            {
                files.push(itemPath);
            }
        }

        return files;
    }
    catch (error)
    {
        console.error(`Error reading directory ${ dir }: ${ error }`);
    }
}

generateSitemap();