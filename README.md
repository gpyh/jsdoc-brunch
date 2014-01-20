# jsdoc-brunch
Adds JSDoc support to [brunch](http://brunch.io).

## Installing npm package
Add `"jsdoc-brunch"` to `package.json` of your brunch app.

##Brunch config
Inside the Brunch config file `config.js` add these parameters under the `plugins` object as shown here:
```
plugins: {
    jsdoc: {
        input: "app/anySubDir", /* optional, default 'app' */
        destination: 'public/dir/to/docs', /* optional, default 'public/jsdocs' */
        recursive: false /* optional, default true */
        enabled: false /* optional, default true */
    }
```

The `input` specifies the location of the JS files to go through. (Default: `"app"`)

The `destination` specifies the location you want the docs to end up. (Default: `"public/jsdocs"`)

The `recursive` specifies if it should recursively scan the input folder. (Default: `true`)

The `enabled` allows you to disable jsdoc during testing, by setting this to false. (Default: `true`)

##Then what?
Now, when Brunch compiles your code, it also tells JSDoc to search your specified `input` folder, and parse the js-files. It outputs it's files to the specified `destination` folder.

##Todo
This plugin is really just a very simple wrapper for the already simple JSDocs npm package. 
There should be done some work to implement more options that are supported by JSDocs, and also there should be a way to enable the auto-refresh on these pages as well.
