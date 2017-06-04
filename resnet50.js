!function(e){function t(a){if(r[a])return r[a].exports;var n=r[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,t),n.l=!0,n.exports}var r={};t.m=e,t.c=r,t.i=function(e){return e},t.d=function(e,r,a){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:a})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="https://mil-tokyo.github.io/webdnn",t(t.s=11)}([function(e,t){!function(e,t,r,a,n,o,i){e.GoogleAnalyticsObject=n,e[n]=e[n]||function(){(e[n].q=e[n].q||[]).push(arguments)},e[n].l=1*new Date,o=t.createElement(r),i=t.getElementsByTagName(r)[0],o.async=1,o.src="https://www.google-analytics.com/analytics.js",i.parentNode.insertBefore(o,i)}(window,document,"script",0,"ga"),ga("create","UA-100057100-1","auto"),ga("send","pageview")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(2),n=function(){function e(e){this.base=e;var t=e.querySelector(".InitializingView-Message");if(!t)throw Error(".InitializingView-Message not found");this.message=t;var r=e.querySelector(".ProgressBar-Inner");if(!r)throw Error(".ProgressBar-Inner not found");this.progressBar=new a.default(r)}return e.prototype.updateProgress=function(e){this.progressBar.update(e)},e.prototype.updateMessage=function(e){this.message.textContent=e},e.prototype.remove=function(){this.base.parentNode&&this.base.parentNode.removeChild(this.base)},e}();t.default=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e){this.bar=e}return e.prototype.update=function(e){this.bar.style.width=100*Math.min(Math.max(e,0),1)+"%"},e}();t.default=a},function(e,t,r){"use strict";var a=this&&this.__awaiter||function(e,t,r,a){return new(r||(r=Promise))(function(n,o){function i(e){try{l(a.next(e))}catch(e){o(e)}}function s(e){try{l(a.throw(e))}catch(e){o(e)}}function l(e){e.done?n(e.value):new r(function(t){t(e.value)}).then(i,s)}l((a=a.apply(e,t||[])).next())})},n=this&&this.__generator||function(e,t){function r(e){return function(t){return a([e,t])}}function a(r){if(n)throw new TypeError("Generator is already executing.");for(;l;)try{if(n=1,o&&(i=o[2&r[0]?"return":r[0]?"throw":"next"])&&!(i=i.call(o,r[1])).done)return i;switch(o=0,i&&(r=[0,i.value]),r[0]){case 0:case 1:i=r;break;case 4:return l.label++,{value:r[1],done:!1};case 5:l.label++,o=r[1],r=[0];continue;case 7:r=l.ops.pop(),l.trys.pop();continue;default:if(i=l.trys,!(i=i.length>0&&i[i.length-1])&&(6===r[0]||2===r[0])){l=0;continue}if(3===r[0]&&(!i||r[1]>i[0]&&r[1]<i[3])){l.label=r[1];break}if(6===r[0]&&l.label<i[1]){l.label=i[1],i=r;break}if(i&&l.label<i[2]){l.label=i[2],l.ops.push(r);break}i[2]&&l.ops.pop(),l.trys.pop();continue}r=t.call(e,l)}catch(e){r=[6,e],o=0}finally{n=i=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}var n,o,i,s,l={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return s={next:r(0),throw:r(1),return:r(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s};Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){var r=this;this.input=e,this.context=t,this.input.addEventListener("change",function(e){return r.onInputChange(e)})}return e.prototype.onInputChange=function(e){var t=this;this.input&&this.input.files&&this.input.files[0]&&this.loadByFile(this.input.files[0]).then(function(){t.onload&&t.onload()}).catch(function(e){throw e})},e.prototype.loadByFile=function(e){return a(this,void 0,void 0,function(){var t,r=this;return n(this,function(a){return t=new FileReader,[2,new Promise(function(a){t.onload=function(e){return r.loadByUrl(t.result)},t.readAsDataURL(e)})]})})},e.prototype.loadByUrl=function(e){return a(this,void 0,void 0,function(){var t,r;return n(this,function(a){switch(a.label){case 0:return a.trys.push([0,2,,3]),[4,this.fetchImageAsync(e)];case 1:return t=a.sent(),[3,3];case 2:throw r=a.sent();case 3:return this.setImageToCanvas(t),this.onload&&this.onload(),[2]}})})},e.prototype.setImageToCanvas=function(e){this.context.drawImage(e,0,0,e.width,e.height,0,0,this.context.canvas.width,this.context.canvas.height)},e.prototype.fetchImageAsync=function(e){var t=new Image;return new Promise(function(r){t.onload=function(){return r(t)},t.src=e})},e}();t.default=o},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=["tench","goldfish","great white shark","tiger shark","hammerhead","electric ray","stingray","cock","hen","ostrich","brambling","goldfinch","house finch","junco","indigo bunting","robin","bulbul","jay","magpie","chickadee","water ouzel","kite","bald eagle","vulture","great grey owl","European fire salamander","common newt","eft","spotted salamander","axolotl","bullfrog","tree frog","tailed frog","loggerhead","leatherback turtle","mud turtle","terrapin","box turtle","banded gecko","common iguana","American chameleon","whiptail","agama","frilled lizard","alligator lizard","Gila monster","green lizard","African chameleon","Komodo dragon","African crocodile","American alligator","triceratops","thunder snake","ringneck snake","hognose snake","green snake","king snake","garter snake","water snake","vine snake","night snake","boa constrictor","rock python","Indian cobra","green mamba","sea snake","horned viper","diamondback","sidewinder","trilobite","harvestman","scorpion","black and gold garden spider","barn spider","garden spider","black widow","tarantula","wolf spider","tick","centipede","black grouse","ptarmigan","ruffed grouse","prairie chicken","peacock","quail","partridge","African grey","macaw","sulphur-crested cockatoo","lorikeet","coucal","bee eater","hornbill","hummingbird","jacamar","toucan","drake","red-breasted merganser","goose","black swan","tusker","echidna","platypus","wallaby","koala","wombat","jellyfish","sea anemone","brain coral","flatworm","nematode","conch","snail","slug","sea slug","chiton","chambered nautilus","Dungeness crab","rock crab","fiddler crab","king crab","American lobster","spiny lobster","crayfish","hermit crab","isopod","white stork","black stork","spoonbill","flamingo","little blue heron","American egret","bittern","crane","limpkin","European gallinule","American coot","bustard","ruddy turnstone","red-backed sandpiper","redshank","dowitcher","oystercatcher","pelican","king penguin","albatross","grey whale","killer whale","dugong","sea lion","Chihuahua","Japanese spaniel","Maltese dog","Pekinese","Shih-Tzu","Blenheim spaniel","papillon","toy terrier","Rhodesian ridgeback","Afghan hound","basset","beagle","bloodhound","bluetick","black-and-tan coonhound","Walker hound","English foxhound","redbone","borzoi","Irish wolfhound","Italian greyhound","whippet","Ibizan hound","Norwegian elkhound","otterhound","Saluki","Scottish deerhound","Weimaraner","Staffordshire bullterrier","American Staffordshire terrier","Bedlington terrier","Border terrier","Kerry blue terrier","Irish terrier","Norfolk terrier","Norwich terrier","Yorkshire terrier","wire-haired fox terrier","Lakeland terrier","Sealyham terrier","Airedale","cairn","Australian terrier","Dandie Dinmont","Boston bull","miniature schnauzer","giant schnauzer","standard schnauzer","Scotch terrier","Tibetan terrier","silky terrier","soft-coated wheaten terrier","West Highland white terrier","Lhasa","flat-coated retriever","curly-coated retriever","golden retriever","Labrador retriever","Chesapeake Bay retriever","German short-haired pointer","vizsla","English setter","Irish setter","Gordon setter","Brittany spaniel","clumber","English springer","Welsh springer spaniel","cocker spaniel","Sussex spaniel","Irish water spaniel","kuvasz","schipperke","groenendael","malinois","briard","kelpie","komondor","Old English sheepdog","Shetland sheepdog","collie","Border collie","Bouvier des Flandres","Rottweiler","German shepherd","Doberman","miniature pinscher","Greater Swiss Mountain dog","Bernese mountain dog","Appenzeller","EntleBucher","boxer","bull mastiff","Tibetan mastiff","French bulldog","Great Dane","Saint Bernard","Eskimo dog","malamute","Siberian husky","dalmatian","affenpinscher","basenji","pug","Leonberg","Newfoundland","Great Pyrenees","Samoyed","Pomeranian","chow","keeshond","Brabancon griffon","Pembroke","Cardigan","toy poodle","miniature poodle","standard poodle","Mexican hairless","timber wolf","white wolf","red wolf","coyote","dingo","dhole","African hunting dog","hyena","red fox","kit fox","Arctic fox","grey fox","tabby","tiger cat","Persian cat","Siamese cat","Egyptian cat","cougar","lynx","leopard","snow leopard","jaguar","lion","tiger","cheetah","brown bear","American black bear","ice bear","sloth bear","mongoose","meerkat","tiger beetle","ladybug","ground beetle","long-horned beetle","leaf beetle","dung beetle","rhinoceros beetle","weevil","fly","bee","ant","grasshopper","cricket","walking stick","cockroach","mantis","cicada","leafhopper","lacewing","dragonfly","damselfly","admiral","ringlet","monarch","cabbage butterfly","sulphur butterfly","lycaenid","starfish","sea urchin","sea cucumber","wood rabbit","hare","Angora","hamster","porcupine","fox squirrel","marmot","beaver","guinea pig","sorrel","zebra","hog","wild boar","warthog","hippopotamus","ox","water buffalo","bison","ram","bighorn","ibex","hartebeest","impala","gazelle","Arabian camel","llama","weasel","mink","polecat","black-footed ferret","otter","skunk","badger","armadillo","three-toed sloth","orangutan","gorilla","chimpanzee","gibbon","siamang","guenon","patas","baboon","macaque","langur","colobus","proboscis monkey","marmoset","capuchin","howler monkey","titi","spider monkey","squirrel monkey","Madagascar cat","indri","Indian elephant","African elephant","lesser panda","giant panda","barracouta","eel","coho","rock beauty","anemone fish","sturgeon","gar","lionfish","puffer","abacus","abaya","academic gown","accordion","acoustic guitar","aircraft carrier","airliner","airship","altar","ambulance","amphibian","analog clock","apiary","apron","ashcan","assault rifle","backpack","bakery","balance beam","balloon","ballpoint","Band Aid","banjo","bannister","barbell","barber chair","barbershop","barn","barometer","barrel","barrow","baseball","basketball","bassinet","bassoon","bathing cap","bath towel","bathtub","beach wagon","beacon","beaker","bearskin","beer bottle","beer glass","bell cote","bib","bicycle-built-for-two","bikini","binder","binoculars","birdhouse","boathouse","bobsled","bolo tie","bonnet","bookcase","bookshop","bottlecap","bow","bow tie","brass","brassiere","breakwater","breastplate","broom","bucket","buckle","bulletproof vest","bullet train","butcher shop","cab","caldron","candle","cannon","canoe","can opener","cardigan","car mirror","carousel","carpenter's kit","carton","car wheel","cash machine","cassette","cassette player","castle","catamaran","CD player","cello","cellular telephone","chain","chainlink fence","chain mail","chain saw","chest","chiffonier","chime","china cabinet","Christmas stocking","church","cinema","cleaver","cliff dwelling","cloak","clog","cocktail shaker","coffee mug","coffeepot","coil","combination lock","computer keyboard","confectionery","container ship","convertible","corkscrew","cornet","cowboy boot","cowboy hat","cradle","crane","crash helmet","crate","crib","Crock Pot","croquet ball","crutch","cuirass","dam","desk","desktop computer","dial telephone","diaper","digital clock","digital watch","dining table","dishrag","dishwasher","disk brake","dock","dogsled","dome","doormat","drilling platform","drum","drumstick","dumbbell","Dutch oven","electric fan","electric guitar","electric locomotive","entertainment center","envelope","espresso maker","face powder","feather boa","file","fireboat","fire engine","fire screen","flagpole","flute","folding chair","football helmet","forklift","fountain","fountain pen","four-poster","freight car","French horn","frying pan","fur coat","garbage truck","gasmask","gas pump","goblet","go-kart","golf ball","golfcart","gondola","gong","gown","grand piano","greenhouse","grille","grocery store","guillotine","hair slide","hair spray","half track","hammer","hamper","hand blower","hand-held computer","handkerchief","hard disc","harmonica","harp","harvester","hatchet","holster","home theater","honeycomb","hook","hoopskirt","horizontal bar","horse cart","hourglass","iPod","iron","jack-o'-lantern","jean","jeep","jersey","jigsaw puzzle","jinrikisha","joystick","kimono","knee pad","knot","lab coat","ladle","lampshade","laptop","lawn mower","lens cap","letter opener","library","lifeboat","lighter","limousine","liner","lipstick","Loafer","lotion","loudspeaker","loupe","lumbermill","magnetic compass","mailbag","mailbox","maillot","maillot","manhole cover","maraca","marimba","mask","matchstick","maypole","maze","measuring cup","medicine chest","megalith","microphone","microwave","military uniform","milk can","minibus","miniskirt","minivan","missile","mitten","mixing bowl","mobile home","Model T","modem","monastery","monitor","moped","mortar","mortarboard","mosque","mosquito net","motor scooter","mountain bike","mountain tent","mouse","mousetrap","moving van","muzzle","nail","neck brace","necklace","nipple","notebook","obelisk","oboe","ocarina","odometer","oil filter","organ","oscilloscope","overskirt","oxcart","oxygen mask","packet","paddle","paddlewheel","padlock","paintbrush","pajama","palace","panpipe","paper towel","parachute","parallel bars","park bench","parking meter","passenger car","patio","pay-phone","pedestal","pencil box","pencil sharpener","perfume","Petri dish","photocopier","pick","pickelhaube","picket fence","pickup","pier","piggy bank","pill bottle","pillow","ping-pong ball","pinwheel","pirate","pitcher","plane","planetarium","plastic bag","plate rack","plow","plunger","Polaroid camera","pole","police van","poncho","pool table","pop bottle","pot","potter's wheel","power drill","prayer rug","printer","prison","projectile","projector","puck","punching bag","purse","quill","quilt","racer","racket","radiator","radio","radio telescope","rain barrel","recreational vehicle","reel","reflex camera","refrigerator","remote control","restaurant","revolver","rifle","rocking chair","rotisserie","rubber eraser","rugby ball","rule","running shoe","safe","safety pin","saltshaker","sandal","sarong","sax","scabbard","scale","school bus","schooner","scoreboard","screen","screw","screwdriver","seat belt","sewing machine","shield","shoe shop","shoji","shopping basket","shopping cart","shovel","shower cap","shower curtain","ski","ski mask","sleeping bag","slide rule","sliding door","slot","snorkel","snowmobile","snowplow","soap dispenser","soccer ball","sock","solar dish","sombrero","soup bowl","space bar","space heater","space shuttle","spatula","speedboat","spider web","spindle","sports car","spotlight","stage","steam locomotive","steel arch bridge","steel drum","stethoscope","stole","stone wall","stopwatch","stove","strainer","streetcar","stretcher","studio couch","stupa","submarine","suit","sundial","sunglass","sunglasses","sunscreen","suspension bridge","swab","sweatshirt","swimming trunks","swing","switch","syringe","table lamp","tank","tape player","teapot","teddy","television","tennis ball","thatch","theater curtain","thimble","thresher","throne","tile roof","toaster","tobacco shop","toilet seat","torch","totem pole","tow truck","toyshop","tractor","trailer truck","tray","trench coat","tricycle","trimaran","tripod","triumphal arch","trolleybus","trombone","tub","turnstile","typewriter keyboard","umbrella","unicycle","upright","vacuum","vase","vault","velvet","vending machine","vestment","viaduct","violin","volleyball","waffle iron","wall clock","wallet","wardrobe","warplane","washbasin","washer","water bottle","water jug","water tower","whiskey jug","whistle","wig","window screen","window shade","Windsor tie","wine bottle","wing","wok","wooden spoon","wool","worm fence","wreck","yawl","yurt","web site","comic book","crossword puzzle","street sign","traffic light","book jacket","menu","plate","guacamole","consomme","hot pot","trifle","ice cream","ice lolly","French loaf","bagel","pretzel","cheeseburger","hotdog","mashed potato","head cabbage","broccoli","cauliflower","zucchini","spaghetti squash","acorn squash","butternut squash","cucumber","artichoke","bell pepper","cardoon","mushroom","Granny Smith","strawberry","orange","lemon","fig","pineapple","banana","jackfruit","custard apple","pomegranate","hay","carbonara","chocolate sauce","dough","meat loaf","pizza","potpie","burrito","red wine","espresso","cup","eggnog","alp","bubble","cliff","coral reef","geyser","lakeside","promontory","sandbar","seashore","valley","volcano","ballplayer","groom","scuba diver","rapeseed","daisy","yellow lady's slipper","corn","acorn","hip","buckeye","coral fungus","agaric","gyromitra","stinkhorn","earthstar","hen-of-the-woods","bolete","ear","toilet tissue"];t.default=a},,,,function(e,t){},,,function(e,t,r){"use strict";function a(e){for(var t=[],r=0,a=0;a<e.length;a++){var n=Math.exp(e[a]);r+=n,t[a]=n}for(var a=0;a<e.length;a++)t[a]/=r;return t}var n=this&&this.__awaiter||function(e,t,r,a){return new(r||(r=Promise))(function(n,o){function i(e){try{l(a.next(e))}catch(e){o(e)}}function s(e){try{l(a.throw(e))}catch(e){o(e)}}function l(e){e.done?n(e.value):new r(function(t){t(e.value)}).then(i,s)}l((a=a.apply(e,t||[])).next())})},o=this&&this.__generator||function(e,t){function r(e){return function(t){return a([e,t])}}function a(r){if(n)throw new TypeError("Generator is already executing.");for(;l;)try{if(n=1,o&&(i=o[2&r[0]?"return":r[0]?"throw":"next"])&&!(i=i.call(o,r[1])).done)return i;switch(o=0,i&&(r=[0,i.value]),r[0]){case 0:case 1:i=r;break;case 4:return l.label++,{value:r[1],done:!1};case 5:l.label++,o=r[1],r=[0];continue;case 7:r=l.ops.pop(),l.trys.pop();continue;default:if(i=l.trys,!(i=i.length>0&&i[i.length-1])&&(6===r[0]||2===r[0])){l=0;continue}if(3===r[0]&&(!i||r[1]>i[0]&&r[1]<i[3])){l.label=r[1];break}if(6===r[0]&&l.label<i[1]){l.label=i[1],i=r;break}if(i&&l.label<i[2]){l.label=i[2],l.ops.push(r);break}i[2]&&l.ops.pop(),l.trys.pop();continue}r=t.call(e,l)}catch(e){r=[6,e],o=0}finally{n=i=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}var n,o,i,s,l={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return s={next:r(0),throw:r(1),return:r(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s};Object.defineProperty(t,"__esModule",{value:!0}),r(8),r(0);var i,s=r(3),l=r(4),c=r(1),u=!1;!function(e){e[e.INITIALIZING=0]="INITIALIZING",e[e.NO_IMAGE=1]="NO_IMAGE",e[e.STAND_BY=2]="STAND_BY",e[e.RUNNING=3]="RUNNING",e[e.ERROR=4]="ERROR"}(i||(i={}));var h=new(function(){function e(){this.lastStatus=""}return e.prototype.initialize=function(){return n(this,void 0,void 0,function(){var e,t,r,a,n,d,p,b,g,m,f,w,k,y,v,I,x,B,N,S=this;return o(this,function(o){switch(o.label){case 0:if(ga("send","event","ResNet50","launch"),this.setState(i.INITIALIZING),this.randomImageIndex=Math.floor(6*Math.random()),e=document.getElementById("canvas"),!(t=e.getContext("2d")))throw new Error("Context is null");if(this.context=t,this.picker=new s.default(document.getElementById("imageInput"),t),this.picker.onload=function(){S.setState(i.STAND_BY)},!(r=document.getElementById("runButton")))throw Error("#runButton is not found.");if(this.runButton=r,this.runButton.addEventListener("click",function(){return h.predict()}),!(a=document.getElementById("loadRandomButton")))throw Error("#loadRandomButton is not found.");if(a.addEventListener("click",function(){return h.loadRandomImage()}),!(n=document.getElementById("message")))throw Error("#message is not found.");if(this.messageView=n,this.resultLabels=[],this.resultBars=[],this.resultProbabilities=[],d=document.querySelectorAll(".ResultItem"),10!=d.length)throw Error("# of .ResultItem must be 10.");for(p=0;p<10;p++){if(b=d[p],!(g=b.querySelector(".ResultItem-Label")))throw Error(".ResultItem-Label is not found.");if(this.resultLabels.push(g),!(m=b.querySelector(".ResultItem-Bar")))throw Error(".ResultItem-Bar is not found.");if(this.resultBars.push(m),!(f=b.querySelector(".ResultItem-Probability")))throw Error(".ResultItem-Probability is not found.");this.resultProbabilities.push(f)}if(w=document.getElementById("launchView"),w&&w.parentNode&&(w.parentNode.removeChild(w),w=null),!(k=document.getElementById("initializingView")))throw Error("#initializingView is not found");if(y=new c.default(k),u)return y.updateMessage("Sorry, but this application can't work on Chrome for Android."),[2];if(console.log(navigator.userAgent),v=WebDNN.getBackendAvailability(),v.status.webgpu)switch(this.lastStatus=localStorage.getItem("webgpu_last_status")||"none",this.lastStatus){case"none":break;case"running":case"crashed":v.status.webgpu=!1,v.defaultOrder.splice(v.defaultOrder.indexOf("webgpu"),1),localStorage.setItem("webgpu_last_status","crashed"),console.warn("This browser supports WebGPU. However, it was crashed at last execution with WebGPU. Therefore, WebDNN disabled WebGPU backend temporally."),localStorage.getItem("flag_webgpu_disabled_alert")||(alert("This browser supports WebGPU. However, it was crashed at last execution with WebGPU. \n\nTherefore, WebDNN disabled WebGPU backend temporally."),localStorage.setItem("flag_webgpu_disabled_alert","1"))}return y.updateMessage("Load label data"),this.labels=l.default,y.updateMessage("Load model data"),[4,WebDNN.init(v.defaultOrder)];case 1:return o.sent(),this.runner=WebDNN.runner,I=performance.now(),[4,this.runner.load("./models/resnet50",function(e,t){return y.updateProgress(e/t)})];case 2:return o.sent(),x=performance.now()-I,ga("send","event","ResNet50","play","loading_time-"+WebDNN.backendName,Math.round(x)),B=this,[4,this.runner.getInputViews()];case 3:return B.inputView=o.sent()[0],N=this,[4,this.runner.getOutputViews()];case 4:return N.outputView=o.sent()[0],y.remove(),this.setState(i.NO_IMAGE),this.loadRandomImage(),[2]}})})},e.prototype.setMessage=function(e){this.messageView&&(this.messageView.textContent=e)},e.prototype.setState=function(e){switch(this.state=e,e){case i.INITIALIZING:this.setMessage("Initializing..."),this.runButton&&(this.runButton.textContent="Initializing...",this.runButton.disabled=!0);break;case i.NO_IMAGE:this.setMessage('Select an image, and click "Run" button.'),this.runButton&&(this.runButton.textContent="Run",this.runButton.disabled=!0);break;case i.STAND_BY:this.setMessage("Ready(backend: "+this.runner.backendName+")"),this.runButton&&(this.runButton.textContent="Run",this.runButton.disabled=!1);break;case i.RUNNING:this.setMessage("Running..."),this.runButton&&(this.runButton.textContent="Running...",this.runButton.disabled=!0);break;case i.ERROR:this.setMessage("Error"),this.runButton&&(this.runButton.textContent="Error",this.runButton.disabled=!0)}},e.prototype.setInputImageData=function(){for(var e=this.context.canvas.width,t=this.context.canvas.height,r=this.context.getImageData(0,0,e,t),a=r.data,n=0;n<t;n++)for(var o=0;o<e;o++)this.inputView[3*(n*e+o)]=a[4*(n*e+o)+2]-103.939,this.inputView[3*(n*e+o)+1]=a[4*(n*e+o)+1]-116.779,this.inputView[3*(n*e+o)+2]=a[4*(n*e+o)]-123.68},e.prototype.loadRandomImage=function(){this.randomImageIndex=(this.randomImageIndex+1)%6,this.picker.loadByUrl("./assets/images/"+this.randomImageIndex+".png")},e.prototype.predict=function(){return n(this,void 0,void 0,function(){var e,t,r,n,s,l,c=this;return o(this,function(o){switch(o.label){case 0:return this.setState(i.RUNNING),this.setInputImageData(),"webgpu"===this.runner.backendName&&"none"===this.lastStatus&&(localStorage.setItem("webgpu_last_status","running"),this.lastStatus="running"),e=performance.now(),[4,this.runner.run()];case 1:for(o.sent(),t=performance.now()-e,"webgpu"===this.runner.backendName&&"running"===this.lastStatus&&(localStorage.setItem("webgpu_last_status","completed"),this.lastStatus="completed"),r=[],n=0;n<this.outputView.length;n++)r.push(this.outputView[n]);s=a(r),l=WebDNN.Math.argmax(s.slice(0),10),l.forEach(function(e,t){c.resultProbabilities[t].textContent=(100*s[e]).toFixed(1)+"%",c.resultProbabilities[t].style.opacity="1",c.resultBars[t].style.width=100*s[e]+"%",c.resultBars[t].style.opacity=""+(.3+.7*s[e]),c.resultLabels[t].textContent=c.labels[e],c.resultLabels[t].style.opacity="1"}),this.setState(i.STAND_BY),this.setMessage("Computation Time: "+t.toFixed(2)+" [ms]");try{ga("send","event","ResNet50","play","computation_time",Math.round(t))}catch(e){}return[2]}})})},e}());window.onload=function(){u=/Android(.*)Chrome/.test(navigator.userAgent),WebDNN.registerTransformDelegate(function(e){var t=e.match(/([^\/]+)(?:\?.*)?$/);return t?"https://mil-tokyo.github.io/webdnn-data/models/resnet50/"+t[1]+"?raw=true&v=2":e});var e=document.getElementById("runAppButton");if(!e)throw Error("#runAppButton is not found");e.addEventListener("click",function(){return h.initialize()}),"?run=1"==location.search&&h.initialize()},window.onerror=function(e,t,r,a,n){ga("send","exception",{exDescription:e,exFatal:!1})}}]);