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
var ewimg = new Image();
var db;  


const CWIDTH = 1014; // 507;
const CHEIGHT = 660; // 330;
const CEWWIDTH = 718;
const CEWHEIGHT = 744;
var bi = 0;
var my_media = null;

var Btext = ["The river’s transformation began with the construction of Laguna Dam, which became the first dam on the river, built 10 miles upstream from Yuma and completed in 1909.  ", 
    "During the U.S. Army’s operation of the Yuma Quartermaster Depot between 1865 and 1883, the Storehouse held six months’ worth of Army supplies for all the military posts of Arizona Territory.  ",
    "From here, the Quartermaster oversaw the arrival and distribution of supplies, the hiring and firing of civilian staff, and the payment of Army debts.  ",
    "The home is built for comfort, with thick adobe walls that help keep the building cooler in the summertime and warmer in the wintertime. Next to the Quartermaster’s House is the detached kitchen and servant’s quarters.",
    "In the deserts of Arizona, mules proved to be the Army’s animal of choice due to their ability to tolerate the desert heat.  From the Yuma Depot, mule-drawn wagon trains transported military supplies to the many Army posts of Arizona.",
    "Prior to the dams, the river carried a large load of suspended sediment. Reservoirs forced this sediment to collect at the bottom, allowing the clear water at the top to be siphoned off for drinking.",
    "To book an event at the Colorado River State Historic Park, please contact Teri Ingram at 928-373-5196.",
    "",
    "<div style='font-size: 12px;'>Park Hours and Phone: 928-783-0071" +
    "<ul><li>October - May: Open 7 days a week, 9:00 am to 4:30 pm</li><li>June - September: Open Tuesday through Sunday, 9:00 am to 4:30 pm</li></ul></div>" +
    "<div style='font-size: 12px;'>Yuma Crossing National Heritage Area administrative office:" +
    "<ul><li>Location: 180 West 1st Street, Suite E, Yuma, AZ 85364</li><li>Open Monday through Friday, 8:00 am to 5:00 pm</li><li>Call anytime at 928-373-5198, or email at yumacrossing@yumaaz.gov </li></ul></div>",
    "",
    "The Colorado River Siphon routes the Yuma Canal under the Colorado River, from the California side to the Arizona side."
    ]; 
    //console.log(Btext[0]);

var Btitle = ["Info Center",
    "Storehouse",
    "QuarterMaster's Office",
    "QuarterMaster's House & Kitchen",
    "Corral House",
    "Reservoir",
    "Passenger Car",
    "Lawn",
    "Introduction",
    "Conclusion",
    "River Siphon"
    ];
    //console.log(Btitle[0]);

var Ewtitle = ["Map Legend",
    "Moody Memorial Overlook",
    "Herb Guenther Overlook", 
    "Sunrise Point Park",
    "Sunset View Park",
    "CottonWoods,Willow & Mesquite Habitat",
    "Wetland/Marsh Restoreation"
     ];
     //console.log(Ewtitle[0]);

var Bimage = ["img/vic.jpg", "img/storehouse2.jpg", "img/qmo.jpg",
    "img/kitchen.jpg", "img/ch.jpg",   
    "img/river.jpg", "img/pscar.jpg",
    "img/lawn.jpg",
    "img/CRSHPstart.jpg",
    "img/CRSHPend.jpg",
    "img/siphon.jpg" 
    ];
    //console.log(Bimage[0]);

var Ewimage = ["ewlegend.png",
    "overlook2.jpg",
    "guentheroverlook.jpg",
    "sunrisept.jpg",
    "sunsetview.jpg",
    "cottonwood.jpg",
    "marsh.jpg"
    //console.log(Ewimage[0]);
    ]

var Ewtext = ["Scenic Overloook and Restoreation areas can be clicked for more info",
    "Named after Robert J. Moody who helped initiate the first Yuma County Fair",
    "Named after Herb Guenther who served as a commisioner for the Arizona Game and Fish Department",
    "Sunrise Point Park was founded by an Arizona State Parks grant with a match from the Yuma Parks and National Heritage Area via Bureau of Reclamation funding",
    "Sunset View Nature Park is being planned by the Yuma Crossing National Heritage Area",
    "Cottonwood Habitat is nearly 400 acres that have been transformed from a trash dumb filled with hobo camps into a mosaic of marsh, mesquite, cottonwood, and willows",
    "Ongoing maintenance funding for this project is provided by the lower Colorado Multi-Species Conservation Program, Heritage Area, City of Yuma and Quechan"
    //console.log(Ewtext[0]);
    ]

var BtnLabel1 = ["Where Does All the Water Go? &#128266;",
    "1870s &#128266;",
    "Quartermaster's Office &#128266;",
    "Quartermaster's House &#128266;",
    "1870s &#128266;",
    "Water Reservoir &#128266;",
    "",
    "",
    "Introduction  &#128266;",
    "",
    "Colorado River Siphon &#128266;"

];
var BtnLabel2 = ["Overlooking the grounds &#128266;",
    "1900s &#128266;",
    "Weather Station &#128266;",
    "Quartermaster's Kitchen and <br> Servant's Quarters &#128266;",
    "1900s &#128266;",
    "",
    "",
    "",
    "Conclusion &#128266;",
    "",
    "Yuma Irrigation Project &#128266;"

];
var Baudio1 = ["/android_asset/www/audio/vic.mp3",
    "/android_asset/www/audio/store1880.mp3",
    "/android_asset/www/audio/qmoffice.mp3",
    "/android_asset/www/audio/qmhouse.mp3",
    "/android_asset/www/audio/corral1880.mp3",
    "/android_asset/www/audio/reservoir.mp3",
    "",
    "",
    "/android_asset/www/audio/introduction.mp3",
    "",
    "/android_asset/www/audio/riversiphon.mp3"
    ];

var Baudio2 = ["/android_asset/www/audio/porch.mp3",
    "/android_asset/www/audio/store1900.mp3",
    "/android_asset/www/audio/weather.mp3",
    "/android_asset/www/audio/qmkitchen.mp3",
    "/android_asset/www/audio/corral1900.mp3",
    "",
    "",
    "",
    "/android_asset/www/audio/conclusion.mp3",
    "",
    "/android_asset/www/audio/irrigation.mp3"
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
        document.addEventListener("backbutton", this.onBackButtonClicked, false);
		document.getElementById("maplink").addEventListener("click", this.loadImage);
        document.getElementById("canvas1").addEventListener("click", function(e) {
            //if(mapimg.src = "img/park_ldpi.jpg") {
                app.getBuilding(e.pageX, e.pageY);
            //} else {
                //app.getBuilding(e.pageX/1.95, e.pageY/1.95);
            //}
            window.location = "#page3";
        });
        document.getElementById("canvas2").addEventListener("click", function(e) { 
            app.getFeature(e.pageX, e.pageY);
            window.location = "#page5";
        });
        document.getElementById("btn4").addEventListener("click", this.getLocation);
        document.getElementById("ewlink").addEventListener("click", this.loadEWimg);
        document.getElementById("btn1").addEventListener("click", app.playAudio1);
        document.getElementById("btn2").addEventListener("click", app.playAudio2);
        document.getElementById("mapbutton").addEventListener("click", app.stopDetail);
        document.getElementById("mapbutton").addEventListener("click", app.lockOrientation);
        document.getElementById("homebutton").addEventListener("click", app.stopDetail);
        // window.addEventListener("orientationchange", function (){
        //     app.setImg();
        //     app.loadImage();
        // });
                
    },
    
    mapmult: 0.5,
    ewmapmult: 1,

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
       
        //console.log('Received Event: ' + id);
    },

    loadImage: function() {
        //var cvs = document.getElementById("canvas1");
        var ctx = document.getElementById("canvas1").getContext("2d");
        ctx.drawImage(mapimg, 0, 0);
        screen.orientation.lock("landscape");
        //console.log(CWIDTH * app.mapmult);
    },

    loadEWimg: function () {
        var ctx = document.getElementById("canvas2").getContext("2d");
        ctx.drawImage(ewimg, 0, 0);
    },

    setImg: function() {
        
        var setHeight = (window.innerHeight > window.innerWidth) ? window.innerWidth: window.innerHeight;
        var cvs = document.getElementById("canvas1");
        var ewcvs = document.getElementById("canvas2")
        if (setHeight >= CHEIGHT + 10) {
            cvs.width = CWIDTH;
            mapimg.src = "img/park_hdpi.jpg";
            app.mapmult = 0.5;
            console.log("high");

        } else if (setHeight >= CHEIGHT * 0.55) {
            cvs.width = CWIDTH * 0.60;
            mapimg.src = "img/park_mdpi.jpg";
            app.mapmult = 0.78;
            console.log("med");

        } else {
            cvs.width = CWIDTH * 0.5;
            mapimg.src = "img/park_ldpi.jpg";
            app.mapmult = 1.0;
            console.log("low");

        }
        cvs.height = cvs.width * 0.65; // "auto";
        if (setHeight >= CEWHEIGHT + 10) {
            app.ewmapmult = 1.0;
            ewcvs.width = CEWWIDTH;
            ewimg.src = "img/EastWLparkhdpi.png";
        } 
        else if (setHeight >= CEWHEIGHT * 0.55) {
            app.ewmapmult = 0.62;
            ewcvs.width = CEWWIDTH * .62;
            ewimg.src = "img/EastWLparkmdpi.png";

        } else {
            app.ewmapmult = 0.5;
            ewcvs.width = CEWWIDTH * .5;
            ewimg.src = "img/EastWLparkldpi.png";
        }
        ewcvs.height = ewcvs.width * 1.1

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
        y = y * app.mapmult // * 1.3;\
        if (x >= 80 && x <= 126 && y >=213 && y <=261) {
            //console.log("info center");
            this.sql += "0";
            bi = 0;
        }else if (x >= 168 && x <= 245 && y >= 83 && y <= 190){
            this.sql += "1";
            bi = 1;
        }else if (x >= 250 && x <= 358 && y >= 87 && y <= 130){
            this.sql += "2";   
            bi = 2;
        }else if (x >= 389 && x <= 482 && y >= 31 && y <= 121){
            this.sql += "3";   
            bi = 3;
        }else if (x >= 127 && x <= 262 && y >= 250 && y <= 317){
            this.sql += "4";   
            bi = 4;
        }else if (x >= 274 && x <= 325 && y >= 16 && y <= 60){
            this.sql += "5";   
            bi = 5;
        }else if (x >= 110 && x <= 160 && y >= 72 && y <= 162){
            this.sql += "6";   
            bi = 6;

/*         }else if (x >= 20 && x <= 68 && y >= 180 && y <= 235 ){ 
            //big buttons
            console.log("End Button");
            this.sql += "9";
            bi = 9; */
        }else if (x >= 20 && x <= 79 && y >= 210 && y <= 275 ){ 
            //replace this big button with small button
            this.sql += "8";
            bi = 8;
        }else if (x >= 400 && x <= 450 && y >= 210 && y <= 240 ){ 
            //console.log("river siphon");
            this.sql += "10";
            bi = 10;

        }else {
            //"Lawn"
            this.sql += "7";
            bi = 7
        }
        document.getElementById("p3text").innerHTML = Btext[bi];
        document.getElementById("pagename").innerText = Btitle[bi];
        document.getElementById("p3img").src = Bimage[bi];
        document.getElementById("btn1").innerHTML = BtnLabel1[bi];
        document.getElementById("btn2").innerHTML = BtnLabel2[bi];
        if (document.getElementById("btn1").innerHTML==""){
            document.getElementById("btn1").style.display = "none";
        }else{
            document.getElementById("btn1").style.display = "block";
        }
        if (document.getElementById("btn2").innerHTML==""){
            document.getElementById("btn2").style.display = "none";
        }else{
            document.getElementById("btn2").style.display = "block";
        }
        screen.orientation.unlock();
        // document.getElementById("btn1").onclick = app.playAudio(Baudio1[i]);
        // document.getElementById("btn2").onclick = app.playAudio(Baudio2[i]);
        //document.getElementById("btn1").addEventListener("click", app.playAudio(Baudio1[i]));
        //document.getElementById("btn2").addEventListener("click", app.playAudio(Baudio2[i]));

        //db.transaction(this.getSql, this.errData, app.showData);
        //console.log(x + "-" + y)
    }, 

    getFeature: function(x, y) {
        x = x / this.ewmapmult;
        y = y / this.ewmapmult;
        if (x > 260 && x < 280 && y > 560 && y < 580) {
            document.getElementById("page5name").innerText = "Moody Memorial Overlook"; 
        } else if (x > 195 && x < 215 && y > 285 && y < 305) {
            document.getElementById("page5name").innerText = "Herb Guenther Overlook";
        } else {
            document.getElementById("page5name").innerText = "missed";
        }
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

    onBackButtonClicked: function() {
        console.log(window.location);
        if(window.location.href.substr(-6) == "#page2") {
            screen.orientation.unlock();
        }else if(window.location == "#page3") {
            screen.orientation.lock("landscape");
        }
        window.history.back();
    },

    playAudio1: function() {
        app.playAudio(Baudio1[bi]);
    },
    playAudio2: function() {
        app.playAudio(Baudio2[bi]);
    },
    
    playAudio: function(src) {
        app.stopDetail();        
        my_media = new Media(src);
        my_media.play();
    },
 
    stopDetail: function() {
        if (my_media) {
            my_media.stop();
            my_media.release();
            my_media = null;
        }
    },

    lockOrientation: function() {
        screen.orientation.lock("landscape");
    },
    getLocation: function () {
        navigator.geolocation.getCurrentPosition(app.geoSuccess, app.geoError);
    },
    geoSuccess: function (position) {
        //alert(position.coords.latitude + ":" + position.coords.longitude);
        var ctx = document.getElementById("canvas2").getContext("2d");
        let top = 32.7335;
        let left = -114.6172; 
        let right = -114.5966;
        let bottom = 32.7155;
        var x = (position.coords.longitude - left) / (right - left) * CEWWIDTH * app.ewmapmult;
        var y = (position.coords.latitude - top) / (bottom - top) * CEWHEIGHT * app.ewmapmult;
        //ctx.clearRect(0, 0, CEWWIDTH, CEWHEIGHT)
        //app.loadEWimg();
        //ctx.fillStyle = "orange";
        //ctx.fillRect(x - 5, y - 5, 10, 10)
        app.showDot(x, y, 20)
    },
    geoError: function () {
        alert(error.message)
    },
    showDot: function(x, y, size) {
        let ctx = document.getElementById("canvas2").getContext("2d");
        console.log(size);
        app.loadEWimg();
        ctx.beginPath();
        ctx.fillStyle = "orange";
        ctx.strokeStyle = "orange";
        ctx.lineWidth = 6
        ctx.arc(x, y, size, 0, 2 * Math.PI)
        ctx.stroke();
        if (size > 6){
            setTimeout(function() {
                app.showDot(x, y, size - 2)
            }, 100);
        } else {
            ctx.fill()
        }
    }
};

app.initialize();