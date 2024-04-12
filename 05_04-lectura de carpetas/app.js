import { readdir } from 'node:fs';

 
 readdir( './archivos', { withFileTypes:true }  , (error, archivos)=>{

    if(error){
        console.log("error")
        throw error
    }else{

        archivos.forEach(archivo => {

            if (archivo.isFile()) {
                console.log(`- 📄 ${archivo.name}`);
            } else if (archivo.isDirectory()) {
                console.log(`🗂️ ${archivo.name} `);
            }

        })

         
    }
    
 })
