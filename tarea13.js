//La empresa “MULTIPLAN” dedicada al alquiler de vehículos, emite una factura de acuerdo al servicio prestado a sus clientes por la distancia recorrida en el auto alquilado. Si la distancia recorrida no es mayor a los 300 km., se cobra una tarifa fija de S/.250, si la distancia recorrida es mayor a 300 km. y hasta 1000 km. se cobra la tarifa fija más el exceso de kilómetros a razón de S/. 30 por km. y si la distancia recorrida es mayor a 1000 km., la compañía cobra la tarifa fija más los kilómetros recorridos entre 300 hasta 1000 a razón de S/. 30, más S/.20 por Kilómetro de exceso en distancias mayores de 1000 km. Además, por promoción otorga un descuento del 10% del importe a pagar, por importes mayores a 500 soles.//


let app = angular.module("MyApp",[])

app.controller("formControl", function($scope){
$scope.km = {recorrido: null, pago: 0, descuento: 0, total: 0};

$scope.calcular = function(){
    let kilometros = $scope.km.recorrido;
    
if(kilometros <= 300){
    pago = 250;
}else if(kilometros > 300 &&  kilometros <= 1000){
    pago = 250 + (kilometros - 300)* 30;
}else if(kilometros > 1000){
    pago = 250 + 700 * 30 + (kilometros - 100) * 20;
}else{
    pago = 250;
}

//Condiciòn para descuento
if(pago > 500){
    descuento = pago * 0.10;
}else{
    descuento = 0;
}
total = pago - descuento;

$scope.km.pago = pago;
$scope.km.descuento = descuento;
$scope.km.total = total;

}

$scope.calcular()

});