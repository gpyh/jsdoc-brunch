## jsdoc-brunch
Adds JSDoc support to [brunch](http://brunch.io).

## Usage
Add `"jsdoc-brunch" to `package.json` of your brunch app.

If you want to use git version of plugin, add
`"jsdoc-brunch": "git+ssh://git@github.com:MazeMap/jsdoc-brunch.git"`.

#Brunch config
Inside the Brunch config file `config.js` add these parameters under the `plugins` object as shown here:
```
plugins: {
    jsdoc: {
        input: "app/anySubDir", /* optional, default 'app' */
        destination: 'public/dir/to/docs', /* optional, default 'public/jsdocs' */
        recursive: false /* optional, default true */
        enabled: false /* optional, default true */
    }
``

The `input` var specifies the location of the JS files to go through. (Default: 'app')

The `destination` var specifies the location you want the docs to end up. (Default: 'public/jsdocs')

The `recursive` var specifies if it should recursively scan the input folder. (Default: true)

The `enabled` var allows you to disable jsdoc during testing, by setting this to false. (Default: true)