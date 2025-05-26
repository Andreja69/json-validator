

function compressor(jsonStrign){
          try {
             const x = JSON.parse(jsonStrign);
            const data = JSON.stringify(x, null, 4);
            console.log(data)
            return {result: data}
            } catch (e) {
                return { result: e};
            }
}


export default compressor;