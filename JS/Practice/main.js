document.write("Hello World");
document.write("<h1>Heading1</h1>");
var name="rama";
var age=22;
document.write("my name is: "+name+" and my age is : "+age);
if(age%2==0){
    document.write("Even");
}
else{
    document.write("odd");
}

document.writeln("<br>");
for(var i=1;i<=4;i++)
{
    for(var j=1;j<=i;j++)
    {
        document.write("*");
    }
    document.writeln("<br>");
}
document.writeln("<br>");
var a=10;
var b=15;
var res=adding(a,b);
document.write(res);
function adding(a,b)
{
    return a+b;
}
document.writeln("<br>");
var cars=["BMW","HONDA","SUZUKI"]
cars.push("MAMA");
document.write(cars);
document.writeln("<br>");
var Car={
    car_brand: "volvo",
    car_model: "XC90",
    car_price: 2000,
    volvoAutoPilot : function()
    {
        return Car.car_brand+" "+Car.car_model+" has auto pilot";
    }
}
document.write(Car.volvoAutoPilot())
document.writeln("<br>");
document.writeln("<br>");
document.writeln("<br>");
document.writeln("<br>");
function Cars(car_brand,car_model,car_price)    
{
    this.car_brand=car_brand;
    this.car_model=car_model;
    this.car_price=car_price;
    this.AutoPilot = function()
    {
        return car_brand+" "+car_model+" has auto pilot";
    }
}
var car1=new Cars("volvo","XC90",2000);
var car2=new Cars("MG","Gloster",5000);
document.write(car2.car_model);
document.write("<br>");
document.write(car2.AutoPilot());
document.write("<br>");
document.write(car1.AutoPilot());