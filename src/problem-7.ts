{
    //problem 7:

    class Car{
        constructor(public make:string,public model:string,public year:number){

        }
        getCarAge(){

            const d=new Date();
            let Currentyear=d.getFullYear();
            const age=Currentyear-this.year;
            return age;
        
        }
    }

    const car = new Car("Honda", "Civic", 2006);
    console.log(car.getCarAge())



}