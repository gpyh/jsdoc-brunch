# jsdoc-brunch
Adds [JSDoc](https://npmjs.org/package/jsdoc) support to [brunch](http://brunch.io).

Read more about JSDoc at the [JSDoc homepage](http://usejsdoc.org)

##Why this package
The [JSDoc](https://npmjs.org/package/jsdoc) package is already simple to use, and you can easily implement it in your own automated build config script files. However, I wanted an even more simple and automated workflow for it, so I made a brunch-plugin to do the work for me. And now, you can too ^_^

## Installing
run `npm install --save jsdoc-brunch`

##Brunch config
(All config optional, so you can skip this if you want to)

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

Here are some stuff that you can do, if you know how :)

* Add support for configuring the jsdocs compiler (http://usejsdoc.org/about-configuring-jsdoc.html)
* Find a way to enable the auto-reload on these pages when using the watch feature of brunch.
* Make it more stable. I have not accounted for all things that might go wrong, such as bad config.
