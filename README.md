# Rollup Plugin for AngularJs 
## Annotate dependency injection - test
### Example
```js
// bundle all styles imports from javascript in one file "dest/app.css"
import annotate from 'rollup-plugin-ng-annotate2';

export default {
    input:'src/app.js',
    output:{
        format:'esm',
        file:'dest/app.js'
    },
    plugins: [
        annotate()
    ]
}; 
