const fs = require('fs');

function fixFontPath(filename) {
    if (fs.existsSync(filename)) {
        let content = fs.readFileSync(filename, 'utf8');
        let quote = '"';

        if (/@fontPath\s*:\s*'/.test(content)) {
            quote = "'";
        }

        let newContent = content.replace(
            /@fontPath\s*:\s*("|')\.{2}\/\.{2}\/themes\//g,
            `@fontPath  : ${quote}../../`
        );

        fs.writeFileSync(filename, newContent, 'utf8');
    } else {
        console.warn(`${filename} does not exist`);
    }
}

fixFontPath('semantic/src/themes/basic/elements/icon.variables');
fixFontPath('semantic/src/themes/default/globals/site.variables');
fixFontPath('semantic/src/themes/flat/globals/site.variables');
fixFontPath('semantic/src/themes/github/elements/icon.variables');
fixFontPath('semantic/src/themes/material/elements/icon.variables');
fixFontPath('semantic/src/themes/material/globals/site.variables');
