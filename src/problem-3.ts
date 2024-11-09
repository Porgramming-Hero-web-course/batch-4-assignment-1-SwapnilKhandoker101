{
    //problem3:

    const countWordOccurrences=(sentence:string,word:string):number=>{
        sentence=sentence.toLocaleLowerCase();
        word=word.toLocaleLowerCase();
        let a=sentence.split(' ');
        // console.log(a)
        let count=0;
        for (let i=0;i<a.length;i++){
            if(a[i]==word){
                count+=1
            }
        }
        return count
    }

    console.log(countWordOccurrences("I love I I i typescript typescript", "I"))

    //
}