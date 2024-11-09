{
    // problem 8:

    const validateKeys=<T>(obj:T,keys:(keyof T)[]):boolean=>{
        let exist=true
        keys.forEach((key)=>{
            if(key in obj){
                exist=true

            }else{
                exist=false
            }
        })
        return exist

    }

    //
}