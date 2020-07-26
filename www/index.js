/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

var postForm = $( '#post-form' );
var jsonData = function( form ) {
var arrData = form.serializeArray(),
objData = {};
$.each( arrData, function( index, element ) {
objData[element.name] = element.value;
});
return JSON.stringify( objData );
};
postForm.on( 'submit', function( e ) {
e.preventDefault();
$.ajax({
url: 'http://queenzee.myartsonline.com/wp-json/wp/v2/posts',
method: 'POST',
data: jsonData( postForm ),
crossDomain: true,
contentType: 'application/json',
beforeSend: function ( xhr ) {
xhr.setRequestHeader( 'Authorization', "Bearer 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9xdWVlbnplZS5teWFydHNvbmxpbmUuY29tIiwiaWF0IjoxNTgwMjE0OTQ2LCJuYmYiOjE1ODAyMTQ5NDYsImV4cCI6MTU4MDgxOTc0NiwiZGF0YSI6eyJ1c2VyIjp7ImlkIjoiMiJ9fX0.KyqBO2HhMIkc3xFHf2oGwCaPZzrCGMJ_5LLWoi4gSXc'");
},
success: function( data ) {
console.log( data );
},
error: function( error ) {
console.log( error );
}
});
});

app.initialize();