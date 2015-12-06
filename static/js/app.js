"use strict"
var storeLocatorApp = angular.module("storeLocatorApp", []);

storeLocatorApp.controller("storeController", 
    function($scope, $http) {

    $scope.userLocationInput = document.getElementById(
        "user-location");
    $scope.geocoder = new google.maps.Geocoder();
    $scope.autocomplete = new google.maps.places.Autocomplete(
        $scope.userLocationInput,
        {componentRestrictions: {country: "IN"}}
    );

    $scope.setCurrentAddressOfUser = function() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                var latLng = new google.maps.LatLng(
                    position.coords.latitude, 
                    position.coords.longitude);
                $scope.geocoder.geocode({ "latLng": latLng}, 
                    function(results, status) {
                    if (status == google.maps.GeocoderStatus.OK) {
                        if (results[1]) {
                            $scope.userLocationInput.value = 
                            results[1].formatted_address;
                        } else {
                            alert("Unable to detect Your Location"+
                                "Please Enter your location");                    
                        }   
                    } else {
                        alert("Unable to detect Your Location"+
                                "Please Enter your location");                      
                    }     
                });
            });
        } else {
            alert("Unable to detect Your Location Please Enter your location");                   
        }   
    } 

    $scope.getLatLngFromAddress = function(address, callbackFunction) {
        $scope.geocoder.geocode( { "address": address}, 
            function(results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                if (results[0]) {
                    var pincode_found = false;
                    var lat = results[0].geometry.location.lat();
                    var lng = results[0].geometry.location.lng();
                    var latLng = new google.maps.LatLng(lat, lng);
                    callbackFunction(latLng);                  
                }
            } 
            callbackFunction(null);
        });
    } 

    $scope.getPincodeFromLatLng = function(latLng, callbackFunction) {
        $scope.geocoder.geocode( { "latLng": latLng}, 
            function(results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                if (results[0]) {
                    var pincode_found = false;
                    for (var i = 0; i < results[0].address_components.length; i++) {
                        var types = results[0].address_components[i].types;       
                        for (var typeIdx = 0; typeIdx < types.length; typeIdx++) {
                            if (types[typeIdx] == "postal_code"){
                                callbackFunction(results[0].address_components[i].short_name);
                                pincode_found = true;
                                break;
                            }
                        }
                    }
                    if (!pincode_found) {
                        alert("Unable to find pincode enter more precise address");
                        callbackFunction(null);
                    }
                } 
            } else {
                alert("Unable to find pincode from given address. Please enter correct address");
                callbackFunction(null);
            }       
        }); 
    }     

    $scope.getStoresNearByPincode = function(){
        var url = "http://127.0.0.1:5000/api/v1/stores/" + $scope.pincode
        console.log(url)
        $http.get(url,
            {cache: true},
            {headers:{ 'Access-Control-Allow-Origin': '*'}}
            ).success(function(response) {
            $scope.stores = response.stores;
            angular.forEach($scope.stores, function(store, key){
                $scope.calculateDistance(store.id, store.address);
            });         
        }).error(function(response) {
            alert("Error While retrieving stores");           
        });
    }
    
    $scope.updateStoreList = function(){
        var address = $scope.userLocationInput.value;
        $scope.getLatLngFromAddress(address, function(latLng){
            if (latLng) {
                $scope.getPincodeFromLatLng(latLng, function(result){
                    $scope.$apply(function(){
                        $scope.oldPincode = $scope.pincode;
                        $scope.pincode = result;
                        if ($scope.pincode &&
                            $scope.oldPincode !== $scope.pincode) {
                            $scope.getStoresNearByPincode();
                        }               
                    });
                }); 
            }           
        });  
    } 

    $scope.calculateDistance = function(storeId, destinations) {
        var origin = $scope.userLocationInput.value; 
        var service = new google.maps.DistanceMatrixService(); 
        service.getDistanceMatrix({
            origins: [origin], 
            destinations: [destinations],
            travelMode: google.maps.TravelMode.DRIVING, 
            unitSystem: google.maps.UnitSystem.METRIC,
            avoidHighways: false,
            avoidTolls: false,
        }, function(response, status){
            if (status == google.maps.DistanceMatrixStatus.OK) { 
                var origins = response.originAddresses;
                var destinations = response.destinationAddresses;
                for (var i = 0; i < origins.length; i++) {
                    var results = response.rows[i].elements;
                    for (var j = 0; j < results.length; j++) {
                        for (var k = 0; k < $scope.stores.length; k++) {
                            if($scope.stores[k].id === storeId) {
                                $scope.$apply(function(){
                                    $scope.stores[k].distance = results[j].distance.value / 1000;
                                    $scope.stores[k].distance = Math.round(
                                        $scope.stores[k].distance * 100) / 100
                                    $scope.stores[k].estimatedDuration = results[j].duration.text
                                });
                            }
                        }
                    }
                }
            }
        }); 
    }
    $scope.showMap = function($event){
        var currentRow = $event.currentTarget.parentElement.parentElement;
        if ($event.currentTarget.text.trim() === "show") {
            $event.currentTarget.text ="hide";
        } else {
            $event.currentTarget.text = "show";
            var mapRowId = "map-row-" + $event.currentTarget.id;          
            var mapRow = angular.element( 
                document.querySelector( '#' + mapRowId));
            mapRow.remove();
            return;
        }
        var tr = document.createElement('tr');
        tr.id = "map-row-" + $event.currentTarget.id;
        var td = document.createElement('td');
        td.setAttribute("colspan", "6");
        td.innerHTML = '<div class="map-container" id="map-'
                        + $event.currentTarget.id +'"></div>'
                        + '<div class="direction-panel" id = "direction-panel-'
                        + $event.currentTarget.id
                        + '"></div>';
        tr.appendChild(td);
        currentRow.parentNode.insertBefore(tr, currentRow.nextSibling);
        
        var directionsService = new google.maps.DirectionsService();
        var directionsDisplay = new google.maps.DirectionsRenderer();
        var map = new google.maps.Map(
            document.getElementById("map-" + $event.currentTarget.id), {
            zoom: 7,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        });

        directionsDisplay.setMap(map);
        var panelId = "direction-panel-" + $event.currentTarget.id;
        directionsDisplay.setPanel(document.getElementById(panelId));
        var destination = document.getElementById("address-" + $event.currentTarget.id).innerText;
        var request = {
            origin: $scope.userLocationInput.value , 
            destination: destination,
            travelMode: google.maps.DirectionsTravelMode.DRIVING
        };
        directionsService.route(request, function(response, status) {
            if (status == google.maps.DirectionsStatus.OK) {
                directionsDisplay.setDirections(response);
            }
        });
    }
    $scope.setCurrentAddressOfUser();
});