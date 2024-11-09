{
    //problem 4:

    type Circle={
        shape:'circle';
        radius:number;

    }
    type Rectangle={
        shape:'rectangle';
        height:number;
        lenght:number;
    }

    type Shape=Circle | Rectangle;

    const calculateShapeArea=(shape:Shape):number=>{
        if(shape.shape==='circle'){
            return Math.PI*Math.pow(shape.radius,2);
        }else if(shape.shape==='rectangle'){
            return shape.lenght*shape.height;
        }
        return 0;
    }

    console.log(calculateShapeArea({ shape: "circle", radius: 5 }))
    console.log(calculateShapeArea({
        shape: "rectangle",
        lenght: 4,
        height: 6,
      }))

    //
}