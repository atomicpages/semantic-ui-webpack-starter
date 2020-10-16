# Semantic UI &amp; Webpack Boilerplate

After spending a few days on this issue, I decided to create a boilerplate so other developers don't run into the same issues I did when trying to add Semantic UI to a project of my own.

## How to Use

1.  Clone the repo
2.  Install dependencies via `npm`

    - **Note:** `yarn` users will encounter issues installing `semantic-ui` source, if this occurs kill the process and run:

    ```sh
    npm i semantic-ui
    ```

3.  Run the font path fix.

    -   Run `node font-fix.js` from the command line
    -   There is an incorrect transformation that occurs with the relative paths when using webpack, we need to run this any time we update/install semantic-ui
        If you don't care about semantic-ui bundled fonts, then **do not** run this font fix command; amend your webpack config as follows:

        <a name="idcurls"></a>

        ```js
            {
            	test: /\.less$/, // import css from 'foo.less';
            	use: [
            		'style-loader',
            		{
            			loader: 'css-loader',
            			options: { url: false }
            		},
            		'less-loader'
            	]
            }
        ```

4.  Start the webpack dev server

### CLI

```sh
git clone https://github.com/atomicpages/semantic-ui-webpack2-boilerplate.git
npm i
node font-fix.js
npm start
```

## Adding a Custom Theme in Semantic UI

Currently, the best way to do this is to develop your theme inside of the `semantic` folder (or wherever your assets are insatlled) and then make a copy in the root. Due to the ridged nature of Semanitc UI, it might not be possible to do this otherwise. Other options:

1. Scrap `less` imports and amend `webpack.config.js` as follows:

    ```js
    {
    	test: /\.css$/, // changed from \.less$
    	use: [
    		'style-loader',
    		'css-loader'
    	]
    }
    ```

    If you ran `font-fix.js` we need to undo what we did. To do this delete the `semantic` folder and reinstall using `npm` Once this is complete we can now build `semantic-ui` independently of Webpack:

    ```sh
    cd semantic
    gulp build
    gulp watch
    ```

    inside of `app/index.js` make the following change:

    ```js
    import css from '../semantic/dist/semantic.css';
    ```

    **Note:** if you've set aliases ensure those are updated for the proper path.

## Adding a Custom Theme

Due to the rigid nature of Webpack _and_ Semantic UI, they don't mingle very well. To by pass this, we can develop our theme inside of the `semantic` source folder directly and use gulp tasks to copy it to our project root.

```sh
gulp copy-to # copies to semantic folder
gulp copy-from # copies from the semantic folder
gulp copy-theme-config # copies theme.config to project root; run with copy-from by default
```

In order to get webpack to deploy the new changes, all modifications to theme files must be done inside the `semantic-ui` folder.

## Build for Production

Just run `npm run build`

## Common issues

1. URL issues with some assets not able to be found

    Based on experience, this is usually an issue with the way paths are resolved in webpack. There are two solutions:

    1. Fix the path to be correct (like `font-fix.js`)
    2. Tell `css-loader` to [ignore urls](#idcurls)

## Requirements

-   Node 10.x+
