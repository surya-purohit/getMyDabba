// JavaScript Document


var Utils = {
	role:{
		"viewer":"viewer",
		"designer":"designer",
		"editor":"editor"
	},
	s3: {
    "hostname": "https://s3.amazonaws.com",
    "bucketname": "idp-rpm-v4"
	},

	 /* colors to be shown on land section when landscape-tool is selected.
     */
    
	colorFills: ["Asphalt", "Brick Pavers", "Concrete", "Concrete Pavers", "Dirt", "Gravel", "Landscape", "Mulch", "Sidewalks", "Stamped Concrete", "Water", "Shrub"],

	log: function(msg, type){
		try{
			// check/force type
			switch(type){
				case "info":
				case "warn":
				case "deprecate":
				case "err":
					// nothing
					break;
				default:
					type = "err";
					break;
			}

			/*
			 1 = All console log messages
			 "info|warn|deprecate|err" = 1 or more to include specific
			 type of messages to be output,
			 delimited with any character
			 0 = no console log messages
			*/
			if(App.logLevel == 1 || App.logLevel.indexOf(type) >= 0){
				console.log(msg);
			}

		}
		catch(e){
			/* error */
		}
	},

	makeUniqueId: function(){
		/*var tmp = "";
		var d = new Date().getTime();
		var r = (d + (Math.random()*1000));
		r = Math.floor(r);
		return r;*/
		return uuid.v4();
	},

	DateTime: {

		/*
		 returns 1999-01-01 01:01:01
		 */
		formatDateTime: function(when){
			var tmphtml = "";
			var tmpdate;
			if(parseInt(when)>1000){
				tmpdate = new Date(parseInt(when));
			}else{
				tmpdate = new Date();
			}
			tmphtml = tmphtml + tmpdate.getFullYear() + "-";
			tmphtml = tmphtml + (((parseInt(tmpdate.getMonth())+1)<10)?("0"+(parseInt(tmpdate.getMonth())+1)):((parseInt(tmpdate.getMonth())+1)));
			tmphtml = tmphtml + "-" + ((parseInt(tmpdate.getDate())<10)?("0"+tmpdate.getDate()):(tmpdate.getDate()));
			tmphtml = tmphtml + " " + ((parseInt(tmpdate.getHours())<10)?("0"+tmpdate.getHours()):(tmpdate.getHours()));
			tmphtml = tmphtml + ":" + ((parseInt(tmpdate.getMinutes())<10)?("0"+tmpdate.getMinutes()):(tmpdate.getMinutes()));
			tmphtml = tmphtml + ":" + ((parseInt(tmpdate.getSeconds())<10)?("0"+tmpdate.getSeconds()):(tmpdate.getSeconds()));
			return tmphtml;
		},


		/*
		 returns 1999-01-01
		 */
		formatDate: function(when){
			var tmphtml = "";
			var tmpdate;
			if(parseInt(when)>1000){
				tmpdate = new Date(parseInt(when));
			}else{
				tmpdate = new Date();
			}
			tmphtml = tmphtml + tmpdate.getFullYear() + "-";
			tmphtml = tmphtml + (((parseInt(tmpdate.getMonth())+1)<10)?("0"+(parseInt(tmpdate.getMonth())+1)):((parseInt(tmpdate.getMonth())+1)));
			tmphtml = tmphtml + "-" + ((parseInt(tmpdate.getDate())<10)?("0"+tmpdate.getDate()):(tmpdate.getDate()));
			return tmphtml;
		},


		/*
		 returns 01:01:01
		 */
		formatTime: function(when){
			var tmphtml = "";
			var tmpdate;
			if(parseInt(when)>1000){
				tmpdate = new Date(parseInt(when));
			}else{
				tmpdate = new Date();
			}
			tmphtml = tmphtml + "" + ((parseInt(tmpdate.getHours())<10)?("0"+tmpdate.getHours()):(tmpdate.getHours()));
			tmphtml = tmphtml + ":" + ((parseInt(tmpdate.getMinutes())<10)?("0"+tmpdate.getMinutes()):(tmpdate.getMinutes()));
			tmphtml = tmphtml + ":" + ((parseInt(tmpdate.getSeconds())<10)?("0"+tmpdate.getSeconds()):(tmpdate.getSeconds()));
			return tmphtml;
		},

		/*
		 input is 2013-10-01T23:23:23+0000
		 note the special   ^ character
		 */
		formatDateTimeTString: function(timestring){
			var tmphtml = timestring;
			try{
				var tmpdate;
				var parts;
				var y;
				var m;
				var d;
				var hr;
				var mi;
				var se;
				var date;
				var time;
				var dates;
				var times;

				parts = timestring.split("T");
				date = parts[0];
				dates = date.split("-");
				time = parts[1];
				time = time.replace("+0000","");
				times = time.split(":");
				y = parseInt(dates[0]);
				m = parseInt(dates[1])-1;
				d = parseInt(dates[2]);
				hr = parseInt(times[0]);
				mi = parseInt(times[1]);
				se =parseInt(times[2]);

				// new Date(year, month, day, hours, minutes, seconds, milliseconds)
				tmpdate = new Date(y, m, d, hr, mi, se, 0);
				tmphtml = "";
				tmphtml = tmphtml + tmpdate.getFullYear() + "-";
				tmphtml = tmphtml + (((parseInt(tmpdate.getMonth())+1)<10)?("0"+(parseInt(tmpdate.getMonth())+1)):((parseInt(tmpdate.getMonth())+1)));
				tmphtml = tmphtml + "-" + ((parseInt(tmpdate.getDate())<10)?("0"+tmpdate.getDate()):(tmpdate.getDate()));
				tmphtml = tmphtml + " " + ((parseInt(tmpdate.getHours())<10)?("0"+tmpdate.getHours()):(tmpdate.getHours()));
				tmphtml = tmphtml + ":" + ((parseInt(tmpdate.getMinutes())<10)?("0"+tmpdate.getMinutes()):(tmpdate.getMinutes()));
				tmphtml = tmphtml + ":" + ((parseInt(tmpdate.getSeconds())<10)?("0"+tmpdate.getSeconds()):(tmpdate.getSeconds()));
			}
			catch(e){
				//
			}
			return tmphtml;
		},

		/*
		 returns epoch time
		 */
		gmDate: function (when){
			var tmpdate;
			if(parseInt(when)>1000){
				tmpdate = new Date(parseInt(when));
			}else{
				tmpdate = new Date();
			}
			return (Math.floor(tmpdate.getTime()/ 1000));
		},

		/*
		 total days in month for
		 specified month and year
		 */
		daysInMonth: function (month, year) {
			var lDate = new Date(year, month, 0);
			return lDate.getDate();
		}

	},

	Number: {

		toThousands: function(n){
			return n.toString().replace(/,/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		}

	},

	Validate:{

		valEmail: function (email) {
			var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			return re.test(email);
		}

	},

	Array: {

		/* sorts an array of objects by the specified key
		 if rev evaluates to true, order is descending */
		sortObjs: function(arr, key, rev){
			return arr.sort(function(a, b) {
				var x = a[key];
				var y = b[key];
				if (typeof x == "string"){
					x = x.toLowerCase();
					y = y.toLowerCase();
				}
				if(!rev){
					return ((x < y) ? -1 : ((x > y) ? 1 : 0));
				}
				else{
					return ((x > y) ? -1 : ((x < y) ? 1 : 0));
				}
			});
		}

	},

	String: {

		charInString: function (c, s) {
			for (i = 0; i < s.length; i++) {
				if (s.charAt(i) == c) return true;
			}
			return false
		},

		charFromCharCode: function (charCode){
			return unescape('%' + charCode.toString(16));
		},

		ensureCharacterInPropertybag: function (sCharacter, sPropertybag) {
			if (sPropertybag.indexOf(sCharacter) == -1) {
				return false;
			}
			else{
				return true;
			}
		},

		charInBag: function (char, bag){
			try{
				if (bag.indexOf(char) == -1){
					return false;
				}
				else {
					return true;
				}
			}
			catch(e){
				return false;
			}
		},

		/*
		*	all these methods expect to be run on key'd events
		*	ie. keyup, keypress, keydown, and passed an event object
		*	that it will discern key pressed and real time allow or rejec it
		*/
		//<input... onkeypress="return Util.ensureCharInBag(event, 'abc');">ensureInteger
		ensureCharInBag: function (e, sPropertybag) {
			var iKey = e.which || window.event.keyCode;
			if ((iKey == 8) || (iKey == 0) || (iKey == 13)) { return true; }
			var sChar = Utils.String.charFromCharCode(iKey);
			return Utils.String.ensureCharacterInPropertybag(sChar, sPropertybag);
		},
		ensureAlphaNumeric: function (e) {
			var iKey = e.which || window.event.keyCode;
			if ((iKey == 8) || (iKey == 0) || (iKey == 13)) { return true; }
			var sChar = Utils.String.charFromCharCode(iKey);
			var sPropertybag = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
			return Utils.String.ensureCharacterInPropertybag(sChar, sPropertybag);
		},
		ensureAlpha: function (e){
			var iKey = e.which || window.event.keyCode;
			if ((iKey == 8) || (iKey == 0) || (iKey == 13)) { return true; }
			var sChar = Utils.String.charFromCharCode(iKey);
			var sPropertybag = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
			return Utils.String.ensureCharacterInPropertybag(sChar, sPropertybag);
		},
		ensureNumeric: function (e) {
			var iKey = e.which || window.event.keyCode;
			if ((iKey == 8) || (iKey == 0) || (iKey == 13)) { return true; }
			var sChar = Utils.String.charFromCharCode(iKey);
			var sPropertybag = "0123456789";
			return Utils.String.ensureCharacterInPropertybag(sChar, sPropertybag);
		},
		ensureFloat: function (e) {
			var iKey = e.which || window.event.keyCode;
			if ((iKey == 8) || (iKey == 0) || (iKey == 13)) { return true; }
			var sChar = Utils.String.charFromCharCode(iKey);
			var sPropertybag = ".0123456789";
			return Utils.String.ensureCharacterInPropertybag(sChar, sPropertybag);
		},
		ensureEmailChar: function (e) {
			var iKey = e.which || window.event.keyCode;
			if ((iKey == 8) || (iKey == 0) || (iKey == 13)) { return true; }
			var sChar = Utils.String.charFromCharCode(iKey);
			var sPropertybag = "-_@0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ.";
			return Utils.String.ensureCharacterInPropertybag(sChar, sPropertybag);
		},
		ensureDBSafeChar: function (e) {
			var iKey = e.which || window.event.keyCode;
			if ((iKey == 8) || (iKey == 0) || (iKey == 13)) { return true; }
			var sChar = Utils.String.charFromCharCode(iKey);
			var sPropertybag = " -_@0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ.,<>/!#$%^&*()[]|{}'\"";
			return Utils.String.ensureCharacterInPropertybag(sChar, sPropertybag);
		},
		ensureIDSafeChar: function (e) {
			var iKey = e.which || window.event.keyCode;
			if ((iKey == 8) || (iKey == 0) || (iKey == 13)) { return true; }
			var sChar = Utils.String.charFromCharCode(iKey);
			var sPropertybag = " -0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
			return Utils.String.ensureCharacterInPropertybag(sChar, sPropertybag);
		}
	},

	AppCache: {

		setCacheListeners: function(update, cached, checking, downloading, error, noupdate, obsolete, progress){

			if (window.applicationCache){
				window.applicationCache.addEventListener('updateready', Utils.AppCache.onUpdateCache, false);
				// Fired after the first cache of the manifest.
				window.applicationCache.addEventListener('cached', function(event){Utils.AppCache.appCacheHandler("cached", event);}, false);
				// Checking for an update. Always the first event fired in the sequence.
				window.applicationCache.addEventListener('checking', function(event){Utils.AppCache.appCacheHandler("checking", event);}, false);
				// An update was found. The browser is fetching resources.
				window.applicationCache.addEventListener('downloading', function(event){Utils.AppCache.appCacheHandler("downloading", event);}, false);
				// The manifest returns 404 or 410, the download failed,
				// or the manifest changed while the download was in progress.
				window.applicationCache.addEventListener('error', function(event){Utils.AppCache.appCacheHandler("error", event);}, false);
				// Fired after the first download of the manifest.
				window.applicationCache.addEventListener('noupdate', function(event){Utils.AppCache.appCacheHandler("noupdate", event);}, false);
				// Fired if the manifest file returns a 404 or 410.
				// This results in the application cache being deleted.
				window.applicationCache.addEventListener('obsolete', function(event){Utils.AppCache.appCacheHandler("obsolete", event);}, false);
				// Fired for each resource listed in the manifest as it is being fetched.
				window.applicationCache.addEventListener('progress', function(event){Utils.AppCache.appCacheHandler("progress", event);}, false);
			}

		},

		onUpdateCache: function(event){
			try{
				window.applicationCache.swapCache();
			}
			catch(e){
				Utils.log("updateCache: " + e);
			}
		},

		appCacheHandler: function(etype, event){
			Utils.log("cache " + type);
		}

	},

	SVG: {

		/*
			this method can be found in Snap, but it is not
			cross browser safe, so do not update this method to
			use it without thorough testing
			@args - a transform string
			@return: object - {translate:{x:0, y:0}, scale:{x:1, y:1}, rotate:{r:0, x:0, y:0}, skewX: { skew: 0 }}
		*/
		parseTransformString: function(transformString){
            var ret = { translate: { x: 0, y: 0 }, scale: { x: 1, y: 1 }, rotate: { r: 0, x: 0, y: 0 }, skewX: { skew: 0 } };
			var t = new RegExp(/translate\((.*?,.*?)\)/gi);
			var s = new RegExp(/scale\((.*?)\)/gi);
			var r = new RegExp(/rotate\((.*?)\)/gi);
            var skew = new RegExp(/skewX\((.*?)\)/gi); //skewX(//
			var tt = (t.exec(transformString));
			var st = (s.exec(transformString));
			var rt = (r.exec(transformString));
            var skt = (skew.exec(transformString));
			if(tt){
				if(tt[1].indexOf(",") >= 0){
					ret.translate.x = tt[1].split(",")[0];
					ret.translate.y = tt[1].split(",")[1];
				}
				else if(tt[1].indexOf(" ") >= 0){
					ret.translate.x = tt[1].split(" ")[0];
					ret.translate.y = tt[1].split(" ")[1];
				}
				else{
					ret.translate.x = tt[1];
					ret.translate.y = tt[1];
				}
			}
			if(st){
				if(st[1].indexOf(",") >= 0){
					ret.scale.x = st[1].split(",")[0];
					ret.scale.y = st[1].split(",")[1];
				}
				else if(st[1].indexOf(" ") >= 0){
					ret.scale.x = st[1].split(" ")[0];
					ret.scale.y = st[1].split(" ")[1];
				}
				else{
					ret.scale.x = st[1];
					ret.scale.y = st[1];
				}
			}
			if(rt){
				if(rt[1].indexOf(",") >= 0){
					ret.rotate.r = rt[1].split(",")[0];
					ret.rotate.x = rt[1].split(",")[1];
					ret.rotate.y = rt[1].split(",")[2];
				}
				else if(rt[1].indexOf(" ") >= 0){
					ret.rotate.r = rt[1].split(" ")[0];
					ret.rotate.x = rt[1].split(" ")[1];
					ret.rotate.y = rt[1].split(" ")[2];
				}
				else{
					ret.rotate.r = rt[1];
				}
			}
            if (skt) {
                ret.skewX.skew = skt[1];
            }
			ret.translate.x = parseFloat(ret.translate.x);
			ret.translate.y = parseFloat(ret.translate.y);
			ret.scale.x = parseFloat(ret.scale.x);
			ret.scale.y = parseFloat(ret.scale.y);
			ret.rotate.r = parseFloat(ret.rotate.r);
			ret.rotate.x = parseFloat(ret.rotate.x);
			ret.rotate.y = parseFloat(ret.rotate.y);
            ret.skewX.skew = parseFloat(ret.skewX.skew);

			return ret;
		},

		/*
			this method takes 2 x/y points (a start and end point)
			and finds the closest 45 degree angle in a 360 degree
			range and returns the new end point with the same distance
			of the original 2 points submitted - it returns the closest
			angle to 'snap to' and the resulting new end point

			@args - p1, p2 point objects {x: 1,  y: 1}
			@return - point object {x: 1,  y: 1}
		*/
		getSnapToAngleEndpoint: function(p1, p2){
			p1.x = parseFloat(p1.x);
			p1.y = parseFloat(p1.y);
			p2.x = parseFloat(p2.x);
			p2.y = parseFloat(p2.y);
			var a = Utils.SVG.findAngleOfTwoPoints(p1, p2);
			var d = Utils.SVG.distance(p1, p2);
			var np = {x: p2.x,  y: p2.y};
			var angle = null;

			if(a >=-22.5 && a <= 22.6){
				//lock to 0
				angle = (0 * (Math.PI/180));
			}
			else if(a >22.6 && a < 67.6){
				//lock to ++45
				angle = (45 * (Math.PI/180));
			}
			else if(a >=67.6 && a < 112.6){
				//lock to ++90
				angle = (90 * (Math.PI/180));
			}
			else if(a >=112.6 && a < 157.6){
				//lock to -+135
				angle = (135 * (Math.PI/180));
			}
			else if(a >=157.6 || a <= -157.6){
				//lock to --180
				angle = (180 * (Math.PI/180));
			}
			else if(a > -157.6 && a < -112.6){
				//lock to --135
				angle = (-135 * (Math.PI/180));
			}
			else if(a >= -112.6 && a < -67.6){
				//lock to +-90
				angle = (-90 * (Math.PI/180));
			}
			else if(a >= -67.6 && a < -22.5){
				//lock to +-45
				angle = (-45 * (Math.PI/180));
			}

			np.x = p1.x + d * Math.cos(angle);
			np.y = p1.y + d * Math.sin(angle);

			return np;
		},

		/*
			transforms the submitted point object p
			in to the new point object based on the
			submitted scale (s) and translate (t)
		 	@args - p point object {x: 1,  y: 1},
		 			s scale - a number,
		 			t translate - an array of x/y translate [0,0]
			@return point object {x: 1,  y: 1}
		*/
		getTransformedPoint: function(p, s, t){
			var newpoint = {x: p.x, y: p.y};
			if(s == 1){
				newpoint.x = (p.x) + (t[0] * -1);
				newpoint.y = (p.y) + (t[1] * -1);
			}
			else if(s<1){
				// if scale less than 1 it breaks
				// but we disabled -zoom cause there
				// is no reason for it
				s = s + 1;
				newpoint.x = ((t[0] * -1) + p.x) * s;
				newpoint.y = ((t[1] * -1) + p.y) * s;
			}
			else if(s>1){
				newpoint.x = ((t[0] * -1) + p.x) / s;
				newpoint.y = ((t[1] * -1) + p.y) / s;
			}
			return newpoint;
		},

		/*
			return the distance between the 2 points submitted
			it is unit agnostic, unit type should be kept outside this method
			@args - point objects, start and end point
			@return - number
		*/
		distance: function (p1, p2) {
			try {
				var xd = p2.x - p1.x;
				var yd = p2.y - p1.y;
				return Math.sqrt((xd * xd) + (yd * yd));
			}
			catch (e) {
				return 0;
			}
		},

		/*
			p = {x: ?, y: ?} - source point to compare all others to
		 	selectListOfDOMElements = d3.select("selector") - list of elements to check their
		 							known coordinates against - this currently only only works
		 							with paths - this select collection should never contain the element
		 							that the source point belongs to - the selection collection may have shapes
		 							with same point but cannot be same element or that element will also be
		 							returned in 'returnPoint.elements[]'
		 	maxDistance - number, compared element x/y points farther than this distance will not be considered
		 	returns the closest point of all submitted points of svg selection (with respective elements)
		 			or original source point and empty array if none meet criteria
		*/
		findClosestPointOfElements: function(p, selectListOfDOMElements, maxDistance){
			var objs = [];
			var returnPoint = {x: p.x, y: p.y, elements:[]};
			var checkPoints = [];
			var tmppt = {};
			var points = null;

			selectListOfDOMElements.each(function(d, i){

				/* get all points from the element we are iterating */
				// TODO account for rotation ??
				var g = d3.select(this).select("g");
				// start with default default'd transform string
				var transform = Utils.SVG.parseTransformString("");
				if(g){
					transform = Utils.SVG.parseTransformString(g.attr("transform"));
				}

				// gather valid snap points from all submitted elements
				var points = null;

				// if its a path based shape (which most should be) get its points
				// from its path or d attribute.
				var path = d3.select(this).select("path");
				checkPoints = [];
				if(path){
					// see http://snapsvg.io/docs/#Snap.parsePathString for reference
					points = Snap.parsePathString(path.attr("d"));

					if(points){
						// iterate all the points of the path and per which kind
						// of point, get the x / y of the 'snap to' point
						for(i = 0; i<points.length; i++){
							tmppt = null;

							// for good info
							// see https://www.dashingd3js.com/svg-paths-and-d3js
							if(points[i][0].toLowerCase() == "m" ||
								points[i][0].toLowerCase() == "l" ||
								points[i][0].toLowerCase() == "t"){

								tmppt = {
									x:(parseFloat(points[i][1]) + parseFloat(transform.translate.x)),
									y:(parseFloat(points[i][2]) + parseFloat(transform.translate.y))
								};

							}
							else if(points[i][0].toLowerCase() == "c"){

								tmppt = {
									x:(parseFloat(points[i][5]) + parseFloat(transform.translate.x)),
									y:(parseFloat(points[i][6]) + parseFloat(transform.translate.y))
								};

							}
							else if(points[i][0].toLowerCase() == "s" ||
								points[i][0].toLowerCase() == "q"){

								tmppt = {
									x:(parseFloat(points[i][3]) + parseFloat(transform.translate.x)),
									y:(parseFloat(points[i][4]) + parseFloat(transform.translate.y))
								};

							}
							else if(points[i][0].toLowerCase() == "a"){

								tmppt = {
									x:(parseFloat(points[i][6]) + parseFloat(transform.translate.x)),
									y:(parseFloat(points[i][7]) + parseFloat(transform.translate.y))
								};

							}

							// TODO !!! account for transforms all at once here, make sure to include
							// translate, scale, and rotation not just translate as above currently

							if(tmppt){
								checkPoints.push(tmppt);
							}

						}
					}
				}


				// TODO account for it being a rectangle or circle, etc
				// add points here to checkPoints array, add them from other shapes
				// such as circle or rect - but finding those points is different than
				// path points, but for now path alone is fine because no custom shapes yet only lines


				// now for all points gathered, iterate them and see if
				// any are close enough to source point p snap to, if so lets collect it
				
				for(i = 0; i<checkPoints.length; i++){
					d = Utils.SVG.distance(p, checkPoints[i]);
					if(d <= maxDistance){
						objs.push({d:d, x:checkPoints[i].x, y:checkPoints[i].y, ele:this.id});
					}
				}
			});

			// now we have all collected points within maxDistance from
			// source point p, lets find the closest point out of all
			// points within the maxDistance
			var low = maxDistance + 1;
			$.each(objs, function(k, v){
				if (v.d < low){
					low = v.d;
					returnPoint.x = v.x;
					returnPoint.y = v.y;
				}
			});

			// now we have the closest point of any objects
			// that were within the maxdistance, lets now
			// iterate all points that were close enough
			// and collect any of the respective elements
			// that have a point on the closest point - we do this
			// so we can return the closest snap to point but also
			// ALL objects that have a point on that point in case
			// there were multiple shapes at that point so we would want
			// all elements that have that 'snap point'
			$.each(objs, function(k, v){
				if(v.x == returnPoint.x && v.y == returnPoint.y) {
					// see if key exists, overwrite if so rather than push ????
					if(returnPoint.elements.indexOf(v.ele) < 0){
						returnPoint.elements.push(v.ele);
					}
				}
			});

			return returnPoint;
		},

		/*
			return is in radians 0 through 180/-180 on a horizontal plane
			!!! TODO - deprecate or update this in favor of Snap.angle(p1, p2, [p3])...
				verify snap method is safe FIRST !!!
		 */
		findAngleOfTwoPoints: function(p1, p2){
			try{
				var ret = 0;
				var deltaY = p2.y - p1.y;
				var deltaX = p2.x - p1.x;
				ret = (Math.atan2(deltaY, deltaX) * (180 / Math.PI));
			}
			catch(e){
				//
			}
			return ret;
		},

		findAngleOfTwoPointsInRadian: function(p1, p2){
			try{
				var ret = 0;
				var deltaY = p2.y - p1.y;
				var deltaX = p2.x - p1.x;
				ret = (Math.atan2(deltaY, deltaX));
			}
			catch(e){
				//
			}
			return ret;
		},

		/*
		 	p1 = {x:#, y:#}
		 	p2 = {x:#, y:#}
		 	forceInt = if true than no decimals will be returned,
		 				if null or false a floating point with possibly
		 				many decimals will be returned
		 	returns angle in degrees as bearing 0-360 with 0 facing up/north
		*/
		findBearingOfTwoPoints: function(p1, p2, forceInt){
			var degrees = 0;
			try{
				var a1 = Math.sqrt(Math.pow(p1.x - p1.x, 2) + Math.pow(p1.y - (p1.y - 10), 2));
				var a2 = Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
				var a3 = Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - (p1.y - 10), 2));

				degrees = (180 * (Math.acos((a2 * a2 + a1 * a1 - a3 * a3)/(2 * a2 * a1))) / Math.PI);
				var angle = Utils.SVG.findAngleOfTwoPoints(p1, p2);

				if(angle < -90 || angle > 90){
					degrees = 360 - degrees;
				}

				if(forceInt===true){
					degrees = parseInt(degrees);
				}
			}
			catch(e){
				//
			}
			return degrees;
		},


		/*
			get encompassing/surrounding bounding box of
		 	submitted array of multiple svg elements

			 // the min and maxs are for getting the bounding
			 // box of the group of selected items, so we get the
			 // smallest x/y points for placement surrounding 'window'
			 // and the largest width and height for the full size
			 // of the surrounding 'window'

			 ??? if anyone can ever figure out why I had to do (maxx-minx) and (maxy-miny)
			 below to get it to work right, that would be great but not required I guess. The large select
			 box for multiple items was always a little big and until I did this it didn't work/look right.
			 I am just noting I have no clue and I am too tired to figure out why since its working... see
			 the code starting 20 lines down with the width, height, x, and y attributes being set...

		*/
		getSurroundingBBox: function(itemArray){
			console.log(itemArray);
			var bbox = {"x":0, "y":0, "width":0, "height":0};
			var minx = Number.POSITIVE_INFINITY;
			var maxx = 0;
			var miny = Number.POSITIVE_INFINITY;
			var maxy = 0;
			try{
				itemArray.forEach(function(item){
					var ibbox = item.getBBox();
					var tform = Utils.SVG.parseTransformString(d3.select(item).attr("transform"));
					minx = Math.min(minx, (ibbox.x + parseFloat(tform.translate.x)));
					miny = Math.min(miny, (ibbox.y + parseFloat(tform.translate.y)));
					maxx = Math.max(maxx, (ibbox.x+ibbox.width + parseFloat(tform.translate.x)));
					maxy = Math.max(maxy, (ibbox.y+ibbox.height + parseFloat(tform.translate.y)));
				});
				maxx = (maxx-minx);
				maxy = (maxy-miny);
				bbox.x = minx;
				bbox.y = miny;
				bbox.width = maxx;
				bbox.height = maxy;
			}
			catch(e){
				//
			}
			return bbox;
		},

		/*
			convenience function for drawing temp bounding boxes
		*/
		drawBox: function(bbox, containerId, strokeWidth, strokeColor, fill, fillOpacity, css){

			if(Ember.isEmpty(bbox)){
				return;
			}
			if(Ember.isEmpty(containerId)){
				containerId = "svg-view";
			}
			if(Ember.isEmpty(strokeWidth)){
				strokeWidth = ".5";
			}
			if(Ember.isEmpty(strokeColor)){
				strokeColor = "black";
			}
			if(Ember.isEmpty(fill)){
				fill = "red";
			}
			if(Ember.isEmpty(fillOpacity)){
				fillOpacity = "0.5";
			}
			if(Ember.isEmpty(css)){
				css = "";
			}

			d3.select("#"+containerId).append("rect").attr({
				"class":"tempDraw "+css,
				"x":bbox.x,
				"y":bbox.y,
				"width":bbox.width,
				"height":bbox.height,
				"stroke-width":strokeWidth,
				"stroke":strokeColor,
				"fill":fill,
				"fill-opacity":fillOpacity
			});
		},


		/*
		 	convenience function for drawing temp circles
		 */
		drawCircle: function(attrs, containerId, strokeWidth, strokeColor, fill, fillOpacity, css){

			if(Ember.isEmpty(attrs) || Ember.isEmpty(attrs.r) || Ember.isEmpty(attrs.cx) || Ember.isEmpty(attrs.cy)){
				return;
			}
			if(Ember.isEmpty(containerId)){
				containerId = "svg-view";
			}
			if(Ember.isEmpty(strokeWidth)){
				strokeWidth = ".5";
			}
			if(Ember.isEmpty(strokeColor)){
				strokeColor = "black";
			}
			if(Ember.isEmpty(fill)){
				fill = "red";
			}
			if(Ember.isEmpty(fillOpacity)){
				fillOpacity = "0.5";
			}
			if(Ember.isEmpty(css)){
				css = "";
			}

			d3.select("#"+containerId).append("circle").attr({
				"class":"tempDraw "+css,
				"r":attrs.r,
				"cx":attrs.cx,
				"cy":attrs.cy,
				"stroke-width":strokeWidth,
				"stroke":strokeColor,
				"fill":fill,
                		"fill-opacity": fillOpacity,
                		"transform": attrs.transform
			});

		},
		pointAtMidOfPath:function(pathD){
			try{
				var middlePoint={};
				var pathTotalLength=Snap.path.getTotalLength(pathD);
				middlePoint=Snap.path.getPointAtLength(pathD,pathTotalLength/2);
			}
			catch(e){
				//do nothing
			}
			return middlePoint;
		}

	}

}