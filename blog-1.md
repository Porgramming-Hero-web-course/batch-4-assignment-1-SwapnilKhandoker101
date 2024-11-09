# Union vs Intersection


## Union:

Union Operator "|"

Union helps to combine different types and allow the option to select only one from a set of different option.

Example: 

``` 
type vechicle={
        bike:string,
        car:string,
        ship:string;
    }
```
Now if we declare another type, for example:
```
type Owner='bike'|'car'|'ship';
```
Now, the owner could be only one of the following:
* bike
* car
* ship

## Intersection:

It helps to combine two or more different types together.

Example: 
```
type user={
    name:string,
    age:number
}
type admin={
    role:string
}
type adminUser=user & admin
```
Now,here the adminUser will contain the properties from both user and admin.

## Importance of Both Union and Intersection:

* Clean and concise code
* Combining different types
* Flexiblity in choosing different types





