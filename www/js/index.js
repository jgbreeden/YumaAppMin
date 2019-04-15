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
var mapimg = new Image();
var db;  


const CWIDTH = 1014; // 507;
const CHEIGHT = 660; // 330;
var bi = 0;

var Btext = ["This is the code for building 1", 
    "This is the code for building 2",
    "This is the code for building 3",
    "This is the code for building 4",
    "This is the code for building 5",
    "This is the code for building 6",
    "This is the code for building 7",
    "This is the code for the lawn"
    ]; 
    console.log(Btext[0]);

var Btitle = ["Info Center","Storehouse",
    "Quarter Masters Office",
    "Quarter master's house & kitchen",
    "Corral House",
    "Reseviour",
    "Passenger Car",
    "Lawn"
    ];
    console.log(Btitle[0]);

var Bimage = ["img/vic.jpg", "img/storehouse2.jpg", "img/qmo.jpg",
    "img/kitchen.jpg", "img/ch.jpg",   
    "img/river.jpg", "img/pscar.jpg",
    "img/lawn.jpg" 
    ];
    console.log(Bimage[0]);

var Baudio1 = ["audio/visitor1.wav","audio/store80's.wav",
    "audio/office80's.wav",
    "audio/house80's.wav",
    "audio/corral80's.wav",
    "audio/resivoir80's.wav",
    "audio/passanger1.wav",
    "audio/passanger1.wav"
    ];

var Baudio2 = ["audio/visitor2.wav","audio/store20's.wav",
    "audio/office20's.wav",
    "audio/house20's.wav",
    "audio/corral20's.wav",
    "audio/resivoir20's.wav",
    "audio/passanger2.wav",
    "audio/passanger1.wav"
    ];

var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function() {
        this.receivedEvent('deviceready');
        //window.plugins.sqlDB.copy("YumaApp.db", 0, app.dbsuccess, app.dbfail);
        this.setImg();
        //load image to canvas when they click on the QMD button
		document.getElementById("maplink").addEventListener("click", this.loadImage);
        document.getElementById("canvas1").addEventListener("click", function(e) {
            //if(mapimg.src = "img/park_ldpi.jpg") {
                app.getBuilding(e.pageX, e.pageY);
            //} else {
                //app.getBuilding(e.pageX/1.95, e.pageY/1.95);
            //}
            window.location = "#page3";
        });
        document.getElementById("btn1").addEventListener("click", app.playAudio1);
        document.getElementById("btn2").addEventListener("click", app.playAudio2);
        // window.addEventListener("orientationchange", function (){
        //     app.setImg();
        //     app.loadImage();
        // });
                
    },
    
    mapmult: 0.5,

    dbsuccess: function() {
        //alert("copy success");
        db = window.sqlitePlugin.openDatabase({name:"YumaApp.db", location: "default"});
    },

    dbfail: function(err) {
        if(e.code == 516) {
            db = window.sqlitePlugin.openDatabase({name:"YumaApp.db", location: "default"});
        } else {
            alert(e.message);
        }
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
       
        console.log('Received Event: ' + id);
    },

    loadImage: function() {
        // var cvs = document.getElementById("canvas1");
        var ctx = document.getElementById("canvas1").getContext("2d");
        ctx.drawImage(mapimg, 0, 0, 507, 330);
        screen.orientation.lock("landscape");
        //console.log(CWIDTH * app.mapmult);
    },

    setImg: function() {
        
        var setHeight = (window.innerHeight > window.innerWidth) ? window.innerWidth: window.innerHeight;
    
        //var cvs = document.getElementById("canvas1");
        // if (setHeight >= CHEIGHT + 10) {
        //     //cvs.width = CWIDTH;
        //     //cvs.height = cvs.width * 0.65; // "auto";
        //     mapimg.src = "img/park_hdpi.jpg";
        //     app.mapmult = 1.0;
        //     console.log("high");
        // } else if (setHeight >= CHEIGHT * 0.62) {
            //cvs.width = CWIDTH * 0.60;
            //cvs.height = cvs.width * 0.65; // "auto";
            mapimg.src = "img/park_mdpi.jpg";
            app.mapmult = 0.62;
            console.log("med");
        // } else {
        //     //cvs.width = CWIDTH * 0.5;
        //     //cvs.height = cvs.width * 0.65; // "auto";
        //     mapimg.src = "img/park_ldpi.jpg";
        //     app.mapmult = 0.5;
        //     console.log("low");
        // }
        
        //mapimg.width = cvs.width;
        //mapimg.height = cvs.height;
        // if (window.innerWidth >= 940) {
        //     mapimg.src = "img/park_hdpi.jpg";
        //     app.mapmult = 0.5
        // } else {
        //     mapimg.src = "img/park_ldpi.jpg";
        //     app.mapmult = 1.0;
        // }
        
    },

    getBuilding:function(x, y) {

        //this.sql = "SELECT * FROM buildings WHERE id=";
        x = x * app.mapmult * 1.3;
        y = y * app.mapmult * 1.3;
        if (x >= 84 && x <= 124 && y >=228 && y <=279) {
            this.sql += "0";
            bi = 0;
        }else if (x >= 191 && x <= 267 && y >= 98 && y <= 190){
            this.sql += "1";
            bi = 1;
        }else if (x >= 283 && x <= 373 && y >= 99 && y <= 147){
            this.sql += "2";   
            bi = 2;
        }else if (x >= 404 && x <= 467 && y >= 46 && y <= 106){
            this.sql += "3";   
            bi = 3;
        }else if (x >= 142 && x <= 272 && y >= 258 && y <= 332){
            this.sql += "4";   
            bi = 4;
        }else if (x >= 292 && x <= 330 && y >= 31 && y <= 69){
            this.sql += "5";   
            bi = 5;
        }else if (x >= 127 && x <= 173 && y >= 87 && y <= 147){
            this.sql += "6";   
            bi = 6;
        } else {
            this.sql += "7";
            bi = 7
        }
        document.getElementById("p3text").innerHTML = Btext[bi];
        document.getElementById("pagename").innerText = Btitle[bi];
        document.getElementById("info").innerText = Btext[bi];
        document.getElementById("p3img").src = Bimage[bi];
        // document.getElementById("btn1").onclick = app.playAudio(Baudio1[i]);
        // document.getElementById("btn2").onclick = app.playAudio(Baudio2[i]);
        //document.getElementById("btn1").addEventListener("click", app.playAudio(Baudio1[i]));
        //document.getElementById("btn2").addEventListener("click", app.playAudio(Baudio2[i]));

        //db.transaction(this.getSql, this.errData, app.showData);
        console.log(x + "-" + y)
    }, 
             
    getSql: function(tx) {
        tx.executeSql(app.sql, [], app.showData, app.errData);
    },

    showData: function(tx,result){
        document.getElementById("p3img").src = "img/" + result.rows.item(0).imgname;
        document.getElementById("p3text").innerText = result.rows.item(0).description;
        document.getElementById("pagename").innerText = result.rows.item(0).title;
    },

    errData: function(err) {
        alert("error:" + err.message + ":" + err.code);
    },

    playAudio1: function() {
        app.playAudio(Baudio1[bi]);
    },
    playAudio2: function() {
        app.playAudio(Baudio2[bi]);
    },
    
    playAudio: function(src) {
        var my_media = null;
        my_media = new Media(src);
        my_media.play();
    }
 

};

app.initialize();