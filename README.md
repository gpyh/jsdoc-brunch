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
        input: "app/anySubDir",
        destination: 'public/dir/to/docs'
    }
``

The `input` var specifies the location of the JS files to go through. (Default: 'app')

The `destination` var specifies the location you want the docs to end up. (Default: 'public/jsdocs')