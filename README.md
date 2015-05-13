# scrat-parser-babel

A parser plugin for [scrat](http://scrat-team.github.io/) to compile js/jsx files with [babel](https://babeljs.io/).

## Usage

```javascript
fis.config.set('project.fileType.text', 'jsx'); // treat .jsx as text file.
fis.config.set('roadmap.ext.jsx', 'js');        // treat .jsx as js
fis.config.set('modules.parser.jsx', 'babel');  // compile .jsx with fis-parser-babel
fis.config.set('settings.parser.babel', {});    // options for babel transpiling
```