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

var Btext = ["The river’s transformation began with the construction of Laguna Dam, which became the first dam on the river, built 10 miles upstream from Yuma and completed in 1909.  ", 
    "During the U.S. Army’s operation of the Yuma Quartermaster Depot between 1865 and 1883,the Storehouse held six months’ worth of Army supplies for all the military posts of Arizona Territory.  ",
    "From here, the Quartermaster oversaw the arrival and distribution of supplies, the hiring and firing of civilian staff, and the payment of Army debts.  ",
    "The home is built for comfort, with thick adobe walls that help keep the building cooler in the summertime and warmer in the wintertime. Next to the Quartermaster’s House is the detached kitchen and servant’s quarters.  Detached kitchens provided the dual benefits of keeping the heat from the kitchen stove out of the main house",
    "In the deserts of Arizona, mules proved to be the Army’s animal of choice due to their ability to tolerate the desert heat.  From the Yuma Depot, mule-drawn wagon trains transported military supplies to the many Army posts of Arizona.",
    "Prior to the dams, the river carried a large load of suspended sediment.Reservoirs forced this sediment to collect at the bottom, allowing the clear water at the top to be siphoned off for drinking. The Army built this reservoir to serve the Yuma Quartermaster Depot.",
    "Call Them At AnyTime (928) 373-5198, Monday – Friday 8:00 am – 5:00 pm 180 West 1st Street, Suite E Yuma, AZ 85364"
    ]; 
    console.log(Btext[0]);

var Btitle = ["Info Center",
    "Storehouse",
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
var BtnLabel1 = ["Where Does All the Water Go?",
    "1880's",
    "Quartermasters office",
    "Quartermasters House",
    "1880's",
    "Weather Station",
    "Introduction",
    "Conclusion"

];
var BtnLabel2 = ["Overlooking the grounds",
    "1900's",
    "",
    "Quartermasters Kitchen",
    "1900's",
    "Water Resivior",
    "",
    ""

];
var Baudio1 = ["audio/visitor1.wav",
    "audio/store80's.wav",
    "audio/office80's.wav",
    "audio/house80's.wav",
    "audio/corral80's.wav",
    "audio/resivoir80's.wav",
    "audio/intro.wav",
    "audio/conclusion.wav"
    ];

var Baudio2 = ["audio/visitor2.wav",
    "audio/store20's.wav",
    "audio/office20's.wav",
    "audio/house20's.wav",
    "audio/corral20's.wav",
    "audio/resivoir20's.wav",
    "",
    ""
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
    // Update DOM on a Received Event
    receivedEvent: function(id) {
       
        console.log('Received Event: ' + id);
    },

    loadImage: function() {
        //var cvs = document.getElementById("canvas1");
        var ctx = document.getElementById("canvas1").getContext("2d");
        ctx.drawImage(mapimg, 0, 0, 507, 330);
        screen.orientation.lock("landscape");
        //console.log(CWIDTH * app.mapmult);
    },

    setImg: function() {
        
        var setHeight = (window.innerHeight > window.innerWidth) ? window.innerWidth: window.innerHeight
        var cvs = document.getElementById("canvas1");
        if (setHeight >= CHEIGHT + 10) {
            //cvs.width = CWIDTH;
            //cvs.height = cvs.width * 0.65; // "auto";
            mapimg.src = "img/park_hdpi.jpg";
            app.mapmult = 0.5;
            console.log("high");
        } else {//} if (setHeight >= CHEIGHT * 0.62) {
            //cvs.width = CWIDTH * 0.60;
            //cvs.height = cvs.width * 0.65; // "auto";
            mapimg.src = "img/park_mdpi.jpg";
            app.mapmult = 0.78;
            console.log("med");
        //} else {
            //cvs.width = CWIDTH * 0.5;
            //cvs.height = cvs.width * 0.65; // "auto";
            //mapimg.src = "img/park_ldpi.jpg";
            //app.mapmult = 1.0;
            //console.log("low");
        }
        
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
      
        x = x * app.mapmult // * 1.3;
        y = y * app.mapmult // * 1.3;
        if (x >= 68 && x <= 126 && y >=213 && y <=261) {
            this.sql += "0";
            bi = 0;
        }else if (x >= 168 && x <= 245 && y >= 83 && y <= 190){
            this.sql += "1";
            bi = 1;
        }else if (x >= 250 && x <= 350 && y >= 87 && y <= 130){
            this.sql += "2";   
            bi = 2;
        }else if (x >= 370 && x <= 445 && y >= 31 && y <= 121){
            this.sql += "3";   
            bi = 3;
        }else if (x >= 127 && x <= 262 && y >= 250 && y <= 317){
            this.sql += "4";   
            bi = 4;
        }else if (x >= 265 && x <= 305 && y >= 20 && y <= 65){
            this.sql += "5";   
            bi = 5;
        }else if (x >= 112 && x <= 160 && y >= 72 && y <= 162){
            this.sql += "6";   
            bi = 6;
        } else {
            this.sql += "7";
            bi = 7
        }
        document.getElementById("p3text").innerHTML = Btext[bi];
        document.getElementById("pagename").innerText = Btitle[bi];
        document.getElementById("p3img").src = Bimage[bi];
        document.getElementById("btn1").innerHTML = BtnLabel1[bi];
        document.getElementById("btn2").innerHTML = BtnLabel2[bi];
        if (document.getElementById("btn2").innerHTML==""){
            document.getElementById("btn2").style.display = "none";
        }else{
            document.getElementById("btn2").style.display = "block";
        }

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