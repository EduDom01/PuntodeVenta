var shoppingList = angular.module("root", []);

shoppingList.controller("index", ["$scope", function ($scope){
  
  $scope.itemName;
  $scope.itemShop;
  $scope.itemQuantity;
  $scope.itemPrice;
  
  var success = document.getElementById('successMessage');
  var error = document.getElementById('errorMessage');
  
  $scope.selection = [];
  
  $scope.list = [
    {name: 'Leche', shop:'Alpura', quantity: 1, price: 26.5, checked: true},
    {name: 'Pan', shop:'Alpura', quantity: 1, price: 21.5, checked: true},
    {name: 'Huevos', shop:'San Juan', quantity: 1, price: 17.5, checked: true},
    {name: 'Chocolate', shop:'Carlos V', quantity: 1, price: 3.10, checked: false},
    {name: 'Jamon', shop:'FUD', quantity: 1, price: 22.0, checked: false},
    {name: 'Yoghurt', shop:'Activia', quantity: 6, price: 31.0, checked: false},
    {name: 'Chocolate', shop:'Carlos V', quantity: 6, price: 3.10, checked: false}
  ];
  
  
  $scope.getTotal = function(){
    var total = 0;
    for(var i = 0; i < $scope.list.length; i++){
        total += $scope.list[i].price;
    }
    return total;
  };
    
  $scope.inventory = [
    {name: 'Leche', shop:'Alpura', quantity: 1, price: 26.5},
    {name: 'Pan', shop: 'Wonder', quantity: 1, price: 21.5},
    {name: 'Huevo', shop: 'San Juan', quantity: 1, price: 1.75},
  ];

  $scope.remove = function(item) { 
    var index = $scope.list.indexOf(item)
    $scope.list.splice(index, 1);     
  }
  
  $scope.removeInventory = function(item) { 
    var index = $scope.inventory.indexOf(item)
    $scope.inventory.splice(index, 1);     
  }
    
  $scope.clearAll = function(list){
  	var length = list.length;
     list.splice(0, length);
  };
    
    $scope.addItem = function() {
       if($scope.itemName && $scope.itemQuantity && $scope.itemPrice && $scope.itemShop){
	        $scope.list.push({name: $scope.itemName, shop: $scope.itemShop, quantity: $scope.itemQuantity, price: $scope.itemPrice * $scope.itemQuantity, checked: false});
	
	        $scope.itemName = '';
	        $scope.itemShop = '';
	        $scope.itemQuantity = '';
	        $scope.itemPrice = '';
	
	        success.style.display = 'block';
	        var timer = setTimeout(function(){
	          success.style.display = 'none';
	        }, 2000);
      }
    }
    
    $scope.add = function(item){
      var item = $scope.list.indexOf(item);
      $scope.inventory.push($scope.list[item]);
      $scope.list[item].checked = true;
    }
}]);