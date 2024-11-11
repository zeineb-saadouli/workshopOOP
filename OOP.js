//const person={FirstName:zeineb,
     //LastName:Saadouli,
      //age:32};
 class Car{ 
    constructor(make,model){
        this.make=make;
        this.model=model;
    }
    display(){
        console.log(`${this.make} ${this.model}`) 
    }
 }  
 const MyCar= new Car ("Toyota","Corola");
 console.log(MyCar.model);
 console.log(MyCar.make);
 MyCar.display();

 class SmartPhone{
    constructor(name,color,model,storage){
        this.name=name;
        this.color=color;
        this.model=model;
        this.storage=storage;

    }
    afficher(){
        console.log(`smartphone:${this.name}
            model:${this.model}
            color:${this.color}
            storage:${this.storage}`);
    }
 }
 const Myphone= new SmartPhone("Samsung","rouge","A21","128 GB");
 Myphone.afficher();
 //l'heritage
 class vehicule extends Car{
    constructor(make,model,doors){
       
        super(make,model);
        this.doors=doors;
    }
    info(){
        super.display();
        console.log(`${this.doors}`);
    }
 }
const auto= new vehicule("Kia","ev6",4);
auto.info();
//prototype
function Person(name,age){
    this.name=name;
    this.age=age;
}
Person.prototype.greet=function(){
    console.log(`my name ${this.name} my age ${this.age}`);
}
const p1= new Person('Sameh',23);
p1.greet();

function Studiant(name,age,field){
    this.field=field;
    Studiant.call(this,name,age);
   
}
Studiant.prototype= Object.create(Person.prototype);
Studiant.prototype.constructor = Studiant;
Studiant.prototype.study= function(){
    console.log(`${this.name} is studying  ${this.field}`);
}
const p2= new Studiant ('zeineb',32,'engineering');
p2.study();
    

 
