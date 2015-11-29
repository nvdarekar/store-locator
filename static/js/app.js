"use strict"
var storeLocatorApp = angular.module('storeLocatorApp', []);

storeLocatorApp.controller('storeController', function($scope, $http) {
    $scope.geocoder = new google.maps.Geocoder();
    $scope.userLocationInput = document.getElementById("user-location");
    $scope.autocomplete = new google.maps.places.Autocomplete($scope.userLocationInput, {
        componentRestrictions: {country: "IN"}
    });

    $scope.setUserCurrentAddress = function() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                var latLng = new google.maps.LatLng(position.coords.latitude, 
                    position.coords.longitude);
                $scope.geocoder.geocode( { 'latLng': latLng}, function(results, status) {
                    if (status == google.maps.GeocoderStatus.OK) {
                        if (results[1]) {
                            $scope.userLocationInput.value = results[1].formatted_address
                        }
                    } else {
                        alert("Unable to detect Your Location Please Enter your location");                    
                    }     
                });
            });
        } else {
            alert("Unable to detect Your Location Please Enter your location");                   
        }   
    } 
    $scope.getPincodeFromAddress = function(address, callbackFunction) {
        $scope.geocoder.geocode( { 'address': address}, function(results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                if (results[0]) {
                    var flag  = 0
                    var lat = results[0].geometry.location.Pa;
                    var lng = results[0].geometry.location.Qa;
                    for (var i = 0; i < results[0].address_components.length; i++) {
                        var types = results[0].address_components[i].types;       
                        for (var typeIdx = 0; typeIdx < types.length; typeIdx++) {
                            if (types[typeIdx] == 'postal_code'){
                                callbackFunction(results[0].address_components[i].short_name);
                                flag = 1;
                            }
                        }
                    }
                    if(flag != 1){
                        alert("Unable to find pincode enter more precise address")
                    }
                } 
            } else {
                alert("Unable to get pincode from given address. Please enter correct address");
                callbackFunction("Error");
            }       
        });
    };

    $scope.getStoresNearByPincode = function(){
        $http.get('http://127.0.0.1:5000/api/v1/stores/' + $scope.pincode
        ).success(function(response) {
            $scope.stores = response.stores;
        }).error(function(response) {
            alert("Error While retrieving stores")            
        });
    }
    
    $scope.updateStoreList = function(){
        var address = $scope.userLocationInput.value;
        $scope.getPincodeFromAddress(address, function(result){
            $scope.$apply(function(){
                $scope.pincode = result
                $scope.getStoresNearByPincode()               
            });
        });
    } 
    $scope.setUserCurrentAddress()
});