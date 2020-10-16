const fs = require('fs');

function fixFontPath(filename) {
    if (fs.existsSync(filename)) {
        const content = fs.readFileSync(filename, 'utf8');
        let quote = '"';

        if (/@fontPath\s*:\s*'/.test(content)) {
            quote = "'";
        }

        fs.writeFileSync(
            filename,
            content.replace(
                /@fontPath\s*:\s*("|')\.{2}\/\.{2}\/themes\//g,
                `@fontPath  : ${quote}../../`
            ),
            'utf8'
        );
    } else {
        console.warn(`${filename} does not exist`);
    }
}

[
    'semantic/src/themes/basic/elements/icon.variables',
    'semantic/src/themes/default/globals/site.variables',
    'semantic/src/themes/flat/globals/site.variables',
    'semantic/src/themes/github/elements/icon.variables',
    'semantic/src/themes/material/elements/icon.variables',
    'semantic/src/themes/material/globals/site.variables',
].forEach(fixFontPath);
