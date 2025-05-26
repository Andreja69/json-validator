import JSON5 from 'json5';


function validate(jsonString) {
        try {
            const x = JSON5.parse(jsonString);
            const data = JSON.stringify(x, null, 4);
            return {result: true,commpressedData: data,error : ""}
            } catch (e) {
                return { result: false, error: e};
            }
}
export default validate;









// function validate(text){
//     const message = "Please enter your JSON code";
//     if(text === ""){
//         return { result: message };
//     }else{

//         try {
//             JSON.parse(text);
//             return { result: true };
//         } catch (e) {
//             console.log(e.name)
//             console.log(e.message)
//             console.log(e.stack)
//             return { result: false, error: e.message };
//         }
//     }

// }



// export default validate;