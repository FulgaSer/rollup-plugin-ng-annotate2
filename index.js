import ngAnnotate from 'ng-annotate';

export default function annotatePlugin(config) {
    let options=Object.assign({add:true,remove:false}, config);

    return {
        name: 'ng-annotate2',
        renderChunk(code,chunk){
            if(chunk.fileName.endsWith('.js')){
                const output=ngAnnotate(code, options);

                if (output.errors) {
                    output.errors.forEach(error => {console.error(error)});
                    return null;
                }
                return  output.src;
            }
        }
    }
}
