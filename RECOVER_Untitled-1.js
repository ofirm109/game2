(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"RECOVER_Untitled_1_atlas_", frames: [[0,0,1028,177],[1332,0,130,106],[1030,0,300,225]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.Bitmap4 = function() {
	this.spriteSheet = ss["RECOVER_Untitled_1_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap5 = function() {
	this.spriteSheet = ss["RECOVER_Untitled_1_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.חייה1 = function() {
	this.spriteSheet = ss["RECOVER_Untitled_1_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.כפתורעצור = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAhB3IAAjtIA7AAIAADtgAhbB3IAAjtIA7AAIAADtg");
	this.shape.setTransform(0.2,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0099FF").s().p("AiTCTIAAklIEnAAIAAElg");
	this.shape_1.setTransform(0.6,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0033FF").s().p("AiTCTIAAklIEnAAIAAElg");
	this.shape_2.setTransform(0.6,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.2,-14.8,29.5,29.5);


(lib.כפתורהמשךבמשחק = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgFBvIAAgdQgBgMAEgJQACgIAJgNIAFgGQAHgLABgQIAAgTIhVAAIAAhiIAqAAIAAA+IBVAAIAAAoQAAAWgCALQgCAKgHAJIgGAKQgGAKgDAGQgCAFAAAKIAAAag");
	this.shape.setTransform(95.3,-3.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAhBRIAAhLQAAgdgOgLQgOgMgdAAQgWAAgaAEIgDgiQAZgEAiAAQAjAAAUAKQAUALAIAQQAJAQAAAbIAABRgAhJBRIAAhSIAqAAIAABSg");
	this.shape_1.setTransform(78.4,-0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AACBRIAAgkIAoAAIAAghQAAgegGgNQgGgNgNAAQgNAAgJAQQgIAPgIAoIgKA2IgtAAIAHgjQAIgfAFgOIgbhPIAnAAIAJAiQAXgkAiAAQAcAAARAXQARAWAAAyIAABCg");
	this.shape_2.setTransform(58.6,-0.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhGA3QgZgbAAg3IgCg2IAqAAIAAAqIACAYIAAAKQAKAAAJgEQAHgGADgJQACgIABgVIABgcIApAAIgCAnQgBAPgCAJQgCAJgHAJQgGAHgNAHQgNAGgWABQAEANAMAIQAMAJAPAAQAaAAANgQQAOgQADgqIAEg6IAqAAIgFA9QgEAmgIASQgJATgWAOQgVANggAAQgqABgZgcg");
	this.shape_3.setTransform(38.4,0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgVAtIAAhZIArAAIAABZg");
	this.shape_4.setTransform(23,-3.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAaBwIAAiMQAAgbgOgKQgMgLgaAAQgPAAgXADIgDghQAVgFAdAAQAqAAAWASQAVASAAAoIAACTg");
	this.shape_5.setTransform(10,2.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AhOBRIAAgkIBXAAIAAgrQAAgZgKgLQgLgLgcAAQgQAAgVADIgDghQAYgFAXAAQArAAAVASQAVASAAAoIAAAxIAdAAIAAAkg");
	this.shape_6.setTransform(-14.8,-0.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AACBRIAAgkIAoAAIAAghQAAgegGgNQgGgNgNAAQgNAAgJAQQgIAPgIAoIgKA2IgtAAIAHgjQAIgfAFgOIgbhPIAmAAIAKAiQAXgkAiAAQAcAAARAXQARAWAAAyIAABCg");
	this.shape_7.setTransform(-34.1,-0.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AhGA3QgZgbAAg3IgCg2IAqAAIAAAqIACAYIAAAKQAKAAAJgEQAHgGADgJQACgIABgVIABgcIApAAIgCAnQgBAPgCAJQgCAJgHAJQgGAHgNAHQgNAGgWABQAEANAMAIQAMAJAPAAQAZAAAOgQQAOgQADgqIAEg6IAqAAIgFA9QgEAmgIASQgJATgWAOQgVANggAAQgqABgZgcg");
	this.shape_8.setTransform(-54.3,0.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAgBRIAAhTQABgVgKgLQgJgLgYAAQgNAAgJACIAAB8IgqAAIAAicQAdgFAeAAQAlAAATAJQASAKAIAPQAIAQAAAaIAABVg");
	this.shape_9.setTransform(-75,-0.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AhGBvIAAiQIArAAIAACQgAABAxIAAgdQAAgMADgIQAEgIAJgNIAEgGQAHgLAAgQIAAgUIhiAAIAAgkICNAAIAAApQAAAXgCAKQgCALgGAJIgHAKQgHAKgCAFQgBAGAAAIIAAAag");
	this.shape_10.setTransform(-93.3,2.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0099FF").s().p("AxaETIAAolMAi1AAAIAAIlg");
	this.shape_11.setTransform(0.5,-0.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0033FF").s().p("AxaETIAAolMAi1AAAIAAIlg");
	this.shape_12.setTransform(0.5,-0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_12},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_12},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_12},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-152,-27.9,305,55);


(lib.taitel = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.text = new cjs.Text("רווח-יריה", "11px 'Arial'", "#666666");
	this.text.textAlign = "center";
	this.text.lineHeight = 14;
	this.text.lineWidth = 45;
	this.text.parent = this;
	this.text.setTransform(-105.1,70.6);

	this.text_1 = new cjs.Text("לרדת", "11px 'Arial'", "#666666");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 14;
	this.text_1.lineWidth = 26;
	this.text_1.parent = this;
	this.text_1.setTransform(2.3,70.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AhDCJIAAkRICGAAIAAERg");
	this.shape.setTransform(24.7,73.9,0.289,0.289,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AtLmTIaXgLItGM8g");
	this.shape_1.setTransform(24.6,80.4,0.086,0.086);

	this.text_2 = new cjs.Text("לעלות", "11px 'Arial'", "#666666");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 14;
	this.text_2.lineWidth = 26;
	this.text_2.parent = this;
	this.text_2.setTransform(102.1,70.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("AhDCJIAAkRICGAAIAAERg");
	this.shape_2.setTransform(124.4,80,0.289,0.289);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("AtLmTIaXgLItGM8g");
	this.shape_3.setTransform(124.5,73.5,0.086,0.086,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.text_2},{t:this.shape_1},{t:this.shape},{t:this.text_1},{t:this.text}]}).wait(1));

	// Layer 1
	this.quetionText = new cjs.Text("", "21px 'Arial'");
	this.quetionText.name = "quetionText";
	this.quetionText.textAlign = "center";
	this.quetionText.lineHeight = 25;
	this.quetionText.lineWidth = 645;
	this.quetionText.parent = this;
	this.quetionText.setTransform(0,32.4);

	this.taitelText = new cjs.Text("", "bold 20px 'Arial'");
	this.taitelText.name = "taitelText";
	this.taitelText.textAlign = "center";
	this.taitelText.lineHeight = 24;
	this.taitelText.lineWidth = 615;
	this.taitelText.parent = this;
	this.taitelText.setTransform(3,6);

	this.instance = new lib.Bitmap4();
	this.instance.parent = this;
	this.instance.setTransform(-330,-22,0.641,0.641);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.taitelText},{t:this.quetionText}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.taitel, new cjs.Rectangle(-330,-22,658.9,113.5), null);


(lib.shot1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF33").s().p("Ah0ArQgxgSAAgZQAAgZAxgSQAwgRBEgBQBFABAwARQAxASAAAZQAAAZgxASQgwAThFAAQhEAAgwgTg");
	this.shape.setTransform(-0.7,0.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.shot1, new cjs.Rectangle(-17.3,-5.8,33.3,12.3), null);


(lib.hed = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#211C17").s().p("AiBAGQAAgKALgCIDrgLQALAAACALQgBALgLABIjqAMQgMAAgBgMg");
	this.shape.setTransform(6.6,-21.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#020202").s().p("AgrAuQgTgSgBgbQABgbARgRQASgTAbgBQAaAAASASQATASABAbQgBAagRATQgSARgbACQgbgBgRgRg");
	this.shape_1.setTransform(-19.3,-13.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ai0AwQgSgSgBgbQAAgaASgTQARgSAcgBIEPgEQAcABASARQASASABAbQAAAagSATQgSASgbABIkQAEQgbgBgSgRg");
	this.shape_2.setTransform(2.3,-19.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AA+AFQgFgCgEgBQgFgBgFABIgKACIgPAFIgEABQgLACgJgHIgQgDIgQgDIgQgFIgQgFIAQADIARADIAQACIAPADIABAAIAAABQAIAFAJgCIAVgEIAKgBQAFgCAFADQAFAAAFADIAIAJIgJgHg");
	this.shape_3.setTransform(-1.7,12.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F7BD57").s().p("AgaA9QgKgKAAgQIAChHQAAgPALgKQAKgKAPAAQAPAAAKALQAJAKABAQIgCBHQAAAPgLAKQgKAKgPAAQgPgBgKgKg");
	this.shape_4.setTransform(-0.3,0.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgOAAQACgNAMgBQAOACABAMQgCAOgNABQgNgCgBgNg");
	this.shape_5.setTransform(-9,-1.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgwABQABgLAMgCIBHgBQAMACABALQgBALgMABIhHABQgMAAgBgMg");
	this.shape_6.setTransform(-11,-5.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgYAXQgKgKAAgNQABgOAKgKQAKgJANAAQAPAAAJAKQAKAKAAAOQAAAOgKAJQgLAKgNAAQgOgBgKgKg");
	this.shape_7.setTransform(-10.5,-2.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgOAAQACgNAMgBQAOACABAMQgCAOgNABQgNgCgBgNg");
	this.shape_8.setTransform(11.3,-1.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgwAAQABgKAMgBIBHgBQAMAAABAMQgBALgMACIhHABQgMgBgBgNg");
	this.shape_9.setTransform(9.3,-5.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgYAXQgKgJABgOQAAgPAKgJQAKgJANAAQAPAAAJAKQAKAKAAAOQAAAOgLAJQgKAKgNABQgOgCgKgKg");
	this.shape_10.setTransform(9.8,-2.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFE3A6").s().p("AgED0Qg0gCgpgaQgpgZgYgrQgYgqABgzIACh1QACgzAagpQAZgqArgXQAqgYAyAAQA0ACApAaQApAZAYArQAYAqgBAzIgCB1QgCAzgZApQgaAqgqAXQgqAYgxAAIgCAAg");
	this.shape_11.setTransform(-1.7,-0.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F7BD57").s().p("AgRARQgHgHAAgKQABgKAHgHQAHgHAKAAQAKABAHAHQAHAHAAAKQgBAKgHAHQgHAHgKAAQgKgBgHgHg");
	this.shape_12.setTransform(14.7,-0.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFE3A6").s().p("AghAhQgOgOAAgTQABgUAOgOQAOgNATABQAUABANANQANANABAUQgCAUgOANQgNANgTAAQgUAAgNgOg");
	this.shape_13.setTransform(15,-0.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F7BD57").s().p("AgRARQgHgHAAgKQABgKAHgHQAHgHAKAAQAKABAHAHQAHAHAAAKQgBAKgHAHQgHAHgKAAQgKgBgHgHg");
	this.shape_14.setTransform(-21.8,-1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFE3A6").s().p("AgiAhQgNgOABgTQABgUANgOQANgNAUABQAUAAANAOQANANAAAUQAAAUgOANQgOANgTAAQgUgBgOgNg");
	this.shape_15.setTransform(-21.5,-1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.hed, new cjs.Rectangle(-26.3,-25.8,48.7,49.5), null);


(lib.box = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#998675").ss(1,1,1).p("AKfAAQAAEWjFDEQjEDFkWAAQkVAAjFjFQjEjEAAkWQAAkVDEjEQDFjFEVAAQEWAADEDFQDFDEAAEVg");
	this.shape.setTransform(6,-1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.box, new cjs.Rectangle(-62.1,-69.1,136.2,136.1), null);


(lib.carecter = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#211C17").s().p("ACpBNIleh1QgHgCgEgHQgDgHACgIIABgBQADgGAGgEQAHgEAIADIFeB0QAHADADAGQAEAIgDAHIAAABQgCAIgHADQgEACgEAAIgHgBg");
	this.shape.setTransform(26.9,-42.7,0.68,0.68);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#020202").s().p("AgiBdQgngOgRglQgRgnAOglQAPgmAmgSQAmgRAlAPQAnAOARAmQARAmgOAmQgPAmgmARQgUAJgVAAQgRAAgRgHg");
	this.shape_1.setTransform(-1.9,-44.9,0.68,0.68);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AClCpImPiXQgngOgRglQgRgmAOgmQAPgnAmgRQAmgRAmAOIGPCXQAnAOARAlQARAmgOAmQgOAngmARQgVAJgUAAQgSAAgSgGg");
	this.shape_2.setTransform(22,-42.5,0.68,0.68);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AguDGQgsgcgLgyIgpi6QgLgyAcgsQAdgrAygLQAxgLAsAcQAsAcALAyIApC5QALAzgcAsQgcArgzALQgOADgOAAQgiAAgfgUg");
	this.shape_3.setTransform(-105.6,48.6,0.68,0.68);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#494949").s().p("AgsAtIAAhZIBZAAIAABZg");
	this.shape_4.setTransform(113.8,4.6,0.68,0.68);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhPB4QgqAAgdgdQgdgdAAgpIAAgoQAAgpAdgdQAegeApAAICfAAQApAAAeAeQAdAdAAApIAAAoQAAApgdAdQgdAdgqAAg");
	this.shape_5.setTransform(56.3,28.1,0.68,0.68);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#494949").s().p("AgNCyQgeAAgVgPQgVgPAAgVIAAj9IABgJQAFgSAUgMQATgMAbAAIAbAAQAKAAAMADQgQADgNAJQgVAQABAUQgBANAJALQAEARARAMQATAMAZAAIAaAAIAAC8QAAAVgVAPQgVAPgeAAg");
	this.shape_6.setTransform(56.7,28.3,0.68,0.68);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#767776").s().p("AgJAdQgNAAgIgIQgJgJAAgMQAAgLAJgIQAIgJANAAIATAAQAMAAAJAJQAJAIAAALQAAAMgJAJQgJAIgMAAg");
	this.shape_7.setTransform(68,3.5,0.68,0.68);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#767776").s().p("AgKAdQgMAAgIgIQgJgJAAgMQAAgLAJgIQAIgJAMAAIAUAAQAMAAAJAJQAJAIAAALQAAAMgJAJQgJAIgMAAg");
	this.shape_8.setTransform(59,3.5,0.68,0.68);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#767776").s().p("Ai9AeQgGAAgEgFQgFgFAAgFIAAgcQAAgHAFgEQAEgEAGAAIF7AAQAGAAAEAEQAFAEAAAHIAAAcQAAAFgFAFQgEAFgGAAg");
	this.shape_9.setTransform(92,9.5,0.68,0.68);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#767776").s().p("Ai9AdQgGAAgEgEQgFgEAAgHIAAgcQAAgFAFgFQAEgFAGABIF7AAQAGgBAEAFQAFAFAAAFIAAAcQAAAHgFAEQgEAEgGAAg");
	this.shape_10.setTransform(92,2.8,0.68,0.68);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#494949").s().p("AlGDYQgoAAgigUQgggTgQggQgIgQgCgSIgBjRQAAgwAngiQAngjA3AAIKMAAQA3AAAoAjQAnAiAAAwIAADEQAAAxgnAiQgoAjg3AAgAliBaQgMAEgKAIQgQAPgBAUIABAIQADASAPALQAQAMAUABIDpAAQAYAAAPgPQARgPAAgUQAAgUgRgPQgPgOgYAAIjpAAQgHAAgJACg");
	this.shape_11.setTransform(82.2,11.5,0.68,0.68);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhBBKQgcgRgIggQgIgfASgcQARgdAggIIAvgMQAhgIAcASQAcARAIAgQAIAfgSAdQgRAcggAIIgvAMQgKACgKAAQgVAAgUgMg");
	this.shape_12.setTransform(51.2,24,0.68,0.68);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ag1BWQgdgLgNgdIgDgHQgMgdALgcQAMgeAcgMIA3gYQAcgNAdAMQAeALAMAdIADAHQANAdgLAcQgMAegdAMIg3AYQgOAHgPAAQgOAAgOgGg");
	this.shape_13.setTransform(54.6,11.8,0.68,0.68);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AiMBtQgngegHgxIgBgMQgGgwAegoQAfgnAxgGICIgSQAxgGAnAfQAoAeAGAxIABAMQAHAwgfAoQgfAngxAGIiHASIgQABQgoAAghgag");
	this.shape_14.setTransform(59,20.4,0.68,0.68);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#80DAF9").s().p("ABIEXIllk/QgxgsgDhCQgEhDAsgxQAsgxBCgDQBCgEAxAsIFlE/QAxAsAEBCQAEBDgsAxQgsAxhCAEIgKAAQg8AAgugpg");
	this.shape_15.setTransform(-11.8,12.3,0.68,0.68);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#80DAF9").s().p("ADpCqInfgVQhCgDgtgwQgsgyAChAQADhCAxgtQAxgtBCADIHfAVQBCACAtAyQAsAxgCBBQgDBBgxAtQguAqg9AAIgIAAg");
	this.shape_16.setTransform(19.6,26.3,0.68,0.68);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAGAFIAAAAIgBgBQgGgHgMgDIgmgJQgEgBgIgFQgKgHgGgOIAJAKIAKAHQAIADAPACIAaAEQANADAKALIgBAAQAiATAjAaQgggOgqgYg");
	this.shape_17.setTransform(5.6,-12.1,0.68,0.68);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F7BD57").s().p("AgrBoQgVgJgJgVQgJgWAJgWIAshnQAIgVAVgJQAVgJAXAJQAVAIAJAWQAJAWgJAVIgsBoQgIAVgWAJQgKAFgLAAQgLAAgLgFg");
	this.shape_18.setTransform(11.6,-23.8,0.68,0.68);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgIAVQgJgDgEgJQgDgJADgIQAEgJAJgEQAIgDAJADQAJAFADAIQAEAIgEAJQgEAJgIADQgFACgEAAQgEAAgEgCg");
	this.shape_19.setTransform(4.1,-29.6,0.68,0.68);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAuAnIhpgnQgIgDgEgIQgDgHADgIQADgIAIgDQAHgEAIADIBpAnQAIADAEAIQADAHgDAIQgDAIgIAEQgEABgEAAIgHgBg");
	this.shape_20.setTransform(3.3,-33.8,0.68,0.68);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgUAyQgUgJgJgUQgIgVAIgUQAJgUAVgJQATgIAVAIQAUAJAJAUQAIAUgIAUQgJAVgUAIQgLAFgKAAQgKAAgKgEg");
	this.shape_21.setTransform(2.8,-30.9,0.68,0.68);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgIAWQgJgEgDgJQgEgJAEgIQADgJAJgEQAIgDAJADQAJAEADAJQAEAIgEAJQgDAIgJAFQgFABgEAAQgEAAgEgBg");
	this.shape_22.setTransform(24.2,-21.7,0.68,0.68);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAuAnIhpgnQgIgDgDgIQgEgHADgIQADgIAIgDQAHgEAIADIBpAnQAIADADAIQAEAHgDAIQgDAIgIAEQgEABgEAAIgHgBg");
	this.shape_23.setTransform(23.5,-25.8,0.68,0.68);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgUAyQgUgJgJgUQgIgVAIgUQAJgUAVgJQATgIAVAIQAUAJAJAVQAIATgIAVQgJAUgUAJQgLAEgKAAQgKAAgKgEg");
	this.shape_24.setTransform(22.9,-22.9,0.68,0.68);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFE3A6").s().p("AiSFgQhugtguhwQguhvAuhuIBHipQAthuBwgvQBugtBvAtQBuAvAuBvQAuBvguBtIhHCqQguBvhvAtQg3AYg3AAQg3AAg4gYg");
	this.shape_25.setTransform(10.8,-25.7,0.68,0.68);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F7BD57").s().p("AgOAkQgPgGgGgPQgGgPAGgOQAGgPAPgGQAOgGAPAGQAPAGAGAPQAGAOgGAPQgGAPgPAGQgIADgHAAQgGAAgIgDg");
	this.shape_26.setTransform(26.9,-18.7,0.68,0.68);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFE3A6").s().p("AgbBFQgdgMgLgdQgMgcAMgbQALgdAdgLQAbgMAdAMQAcALAMAdQALAbgLAdQgMAcgdAMQgOAFgOAAQgNAAgOgFg");
	this.shape_27.setTransform(27.2,-18.9,0.68,0.68);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#F7BD57").s().p("AgOAkQgPgGgGgPQgGgPAGgOQAGgPAPgGQAOgGAPAGQAPAGAGAPQAGAOgGAPQgGAPgPAGQgIADgHAAQgHAAgHgDg");
	this.shape_28.setTransform(-9,-33.7,0.68,0.68);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFE3A6").s().p("AgbBFQgdgMgLgcQgMgdAMgbQALgdAdgLQAbgMAdAMQAcALAMAdQALAbgLAdQgMAcgdAMQgOAFgOAAQgNAAgOgFg");
	this.shape_29.setTransform(-8.7,-33.8,0.68,0.68);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#A6F421").s().p("AgvA5QgbgHgNgTQgNgSAJgTQAIgTAZgJIA2gUQAYgJAcAHQAbAHANASQANATgJATQgJATgZAJIg2AUQgNAFgOAAQgMAAgMgDg");
	this.shape_30.setTransform(-51.9,-31.4,0.68,0.68);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("ABOB8QgIgDgFgGIiojWQgFgFADgHQACgHAJgDQAHgDAKABQAIADAFAFICoDWQAFAHgDAGQgCAHgIADQgFACgGAAIgHAAg");
	this.shape_31.setTransform(-61.9,-20.6,0.68,0.68);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#9B5800").s().p("AAAAWQgNAAgIgHQgJgHABgJQAAgJAKgGQAJgGALABQANABAJAGQAIAHgBAIQAAAKgJAGQgJAFgLAAIgBAAg");
	this.shape_32.setTransform(-27.9,-23.7,0.68,0.68);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000BDD").s().p("AAAAWQgNgBgJgHQgIgHAAgIQABgJAJgGQAKgGALABQANAAAJAHQAIAHgBAIQAAAKgJAGQgIAFgLAAIgCAAg");
	this.shape_33.setTransform(-31.9,-26.9,0.68,0.68);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#009E78").s().p("AAAAWQgNAAgIgHQgJgHABgJQAAgJAKgGQAJgGALABQANABAJAGQAIAHgBAJQAAAJgJAGQgJAFgKAAIgCAAg");
	this.shape_34.setTransform(-34.8,-30.1,0.68,0.68);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#A000A0").s().p("AgBAWQgMAAgJgHQgIgHAAgJQABgJAJgGQAKgGALABQANABAJAGQAIAHgBAJQAAAJgKAGQgIAFgKAAIgDAAg");
	this.shape_35.setTransform(-37.7,-34,0.68,0.68);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFDA00").s().p("AgBAWQgMAAgIgHQgJgHAAgJQABgJAJgGQAKgGAMABQAMABAJAGQAIAHAAAJQgBAJgJAGQgJAFgKAAIgDAAg");
	this.shape_36.setTransform(-40.6,-38,0.68,0.68);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#C7DFE5").s().p("AixDgQhhgYguhCIgVgeQguhCAehGQAfhFBZggIDmhTQBZgfBgAYQBhAYAuBCIAVAfQAuBBgeBGQgfBFhZAgIjmBSQgyATg1AAQgoAAgqgLg");
	this.shape_37.setTransform(-47,-25.8,0.68,0.68);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#95C3CE").s().p("AixDgQhhgYguhCIgVgfQguhCAehFQAfhFBZggIDmhSQBZggBgAYQBhAYAuBCIAVAeQAuBCgeBFQgfBGhZAgIjmBTQgyASg1AAQgoAAgqgLg");
	this.shape_38.setTransform(-45.1,-21.4,0.68,0.68);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AkUF/QiBg2g1iCQg1iCA3iBQA3iBCCg1IFgiQQBMgeBQAHIAgAEQgRBKAGBLQAGBOAeBIQA7CRCEBWQgNARgKALQg0A7hKAeIlgCQQg/AZhAAAQhCAAhDgcg");
	this.shape_39.setTransform(-35.8,-5.9,0.68,0.68);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("Ag6ITQiBgOhshIQhCgsgzg9Qg0g+gfhNQgfhOgGhTQgGhPAShPQAch9BThiQBVhmB7gyQDMhTDMBWQDLBWBTDNQBUDMhWDLQhXDMjMBTQhiAnhmAAQgcAAgegDgAi7nUQh1AvhQBgQhNBdgbB3QgRBJAGBLQAGBNAeBJQA7CRCEBWQBmBCB4ANQB7ANB1gvQDAhOBRjAQBRi/hOjAQhPjAi/hRQhhgphiAAQhdAAhfAmg");
	this.shape_40.setTransform(15.7,-25.7,0.68,0.68);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#F7BD57").s().p("AhxCuQgGgDgDgHIhLjYQgCgHADgHQAEgHAHgDIEdhiQAHgCAHADQAHADACAHIBLDZQACAHgDAHQgDAHgHACIkeBiIgGABQgEAAgEgCg");
	this.shape_41.setTransform(-10.3,-13.9,0.68,0.68);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#CAF4FF").s().p("AClCoIl+hMQg1gKgdguQgegtALg1QAKg2AugfQAtgfA0ALIF/BMQA1AKAdAuQAeAtgLA1QgLA2gtAfQgiAXgmAAQgMAAgOgDg");
	this.shape_42.setTransform(27.6,15.3,0.68,0.68);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#CAF4FF").s().p("ABlDZIlOjOQgugcgNg1QgOg2AcgvQAbgvA1gNQA0gNAuAcIFPDPQAuAbANA1QANA2gcAvQgbAvg1ANQgRAEgQAAQgiAAgfgTg");
	this.shape_43.setTransform(1.4,5.2,0.68,0.68);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#80DAF9").s().p("Ak2DJQg6ghgRg/QgRhAAhg5QAhg5A/gSIHPh9QBAgRA5AhQA6AhARA/QARBAghA5QghA5g/ARInPB+QgWAGgVAAQgoAAgmgWg");
	this.shape_44.setTransform(-87.1,39,0.68,0.68);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AhDDJQghgbgGgqIgcjqQgFgqAbgiQAagiArgFIAjgEQAqgFAiAaQAhAbAFAqIAdDqQAFArgbAhQgaAigrAFIgjAEIgOABQgiAAgcgWg");
	this.shape_45.setTransform(-105.9,29.2,0.68,0.68);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#80DAF9").s().p("AkWEfQgwguAAhCQgBhDAugvIFOlXQAtgwBDgBQBCgBAwAuQAvAuABBDQABBCguAvIlOFYQguAvhCABIgDAAQhBAAgugtg");
	this.shape_46.setTransform(-59.1,22.9,0.68,0.68);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#CAF4FF").s().p("AjsChQg3glgMhBQgNhAAlg3QAlg3BBgNIEmg5QBAgMA3AlQA4AlAMBAQANBAglA3QglA3hBANIkmA5QgQAEgRAAQguAAgpgcg");
	this.shape_47.setTransform(-91.7,21.8,0.68,0.68);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#CAF4FF").s().p("AkoDeQg8gdgVg/QgWg/Adg7QAeg7A+gVIHFicQA+gWA8AdQA8AdAVA/QAWA+gdA8QgdA6g/AWInFCdQgbAJgaAAQgjAAgigRg");
	this.shape_48.setTransform(-62.9,14,0.68,0.68);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.carecter, new cjs.Rectangle(-115.5,-62.1,232.5,125.6), null);


(lib.bar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#686969").s().p("AgIAAQAAgGAIgBQAIAAABAHQgBAIgIAAQgHAAgBgIg");
	this.shape.setTransform(443,0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#686969").s().p("AgRAAQACgOAPgBQAQABACAOQgBAPgRABQgPgBgCgPg");
	this.shape_1.setTransform(445.8,2.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#6FC28C").ss(2,1,1).p("AA8gtQgBAmgiAZQggAag0AC");
	this.shape_2.setTransform(450,4.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(1,1,1).p("AATgTQAAARgLAKQgKALgQAB");
	this.shape_3.setTransform(423.4,13.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(1,1,1).p("AATgTQAAARgLAKQgKALgQAB");
	this.shape_4.setTransform(423.1,-9.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#151B19").s().p("AhiApQgQgQgBgYQABgWAPgQQAQgQAYgBIB2gCQAYAAAQAQQAQAPABAZQAAAWgQAQQgQAQgXABIh3ACQgYgBgQgPg");
	this.shape_5.setTransform(438.3,0.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#61C4BE").s().p("AhSAlQgOgOgCgWQAAgUAPgPQAOgOAVgBIBggBQAVAAAPAOQAOAOAAAVQAAAVgNAOQgOAPgWABIhgABQgUAAgPgOg");
	this.shape_6.setTransform(416.6,-10.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#61C4BE").s().p("AhSAlQgOgOgBgWQAAgUAOgPQAOgOAVgBIBfgBQAWAAAPAOQAOAOABAVQAAAVgPAOQgOAPgVABIhgABQgUAAgPgOg");
	this.shape_7.setTransform(416.9,11.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#02A272").s().p("AjmBoQgJgJAAgOIgCibQAAgOAJgJQAJgJANgBIFUgFQAvABAgAfQAfAeADAvQgBAugfAfQgfAgguACIlUAFQgOAAgKgJg");
	this.shape_8.setTransform(433.6,0.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1E3566").s().p("AhTCRQgYgLgRgVQgZgfgBgpIgBhNQAAgoAWgfQAQgVAZgOQAYgNAdAAIBDgBQAdAAAYAMQAZAMARAWQASAXAFAgIABAPIABBNIAAACIAAANQgDASgHARIgBACIgFAJIgIALQgMARgQAKIgCACIgNAGQgWALgaABIhEABQgcAAgYgMg");
	this.shape_9.setTransform(430.8,0.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#006746").s().p("AhCBbQgVgMgCgbIgCiUIC3BjIhxBZQgMAFgLAAQgMAAgKgGg");
	this.shape_10.setTransform(418.7,12.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#006746").s().p("AhbgyQABgbAVgNQAUgNAYALIB1BQIi1Bug");
	this.shape_11.setTransform(418.3,-12.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#4B4F4D").s().p("AgEB+QgLAAgGgHQgIgHAAgKIgDjJQAAgLAHgHQAHgHAKgBIAOAAQAKAAAHAHQAHAHABALIACDJQAAAKgHAHQgGAHgLABg");
	this.shape_12.setTransform(408.4,0.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F6EB0F").s().p("AggARQgQgCgBgPQABgOAQgCIBBAAQAPACACAOQgCAPgPACg");
	this.shape_13.setTransform(409.5,5.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F6EB0F").s().p("Ag1AMQgLgBgBgLQABgKALgBIBrAAQALABABAKQgBALgLABg");
	this.shape_14.setTransform(406.5,7.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E98A23").s().p("AhSATQgRgCgCgRQACgQARgCIClAAQASACABAQQgBARgSACg");
	this.shape_15.setTransform(404.9,1.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#EC1E24").s().p("AhPAOQgNgBgBgNQABgMANgBICfAAQANABABAMQgBAMgNACg");
	this.shape_16.setTransform(398.6,6.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFC10D").s().p("Ah9AUQgNgCgBgSQABgRANgCID6AAQANACACARQgCASgNACg");
	this.shape_17.setTransform(397.3,4.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F6EB0F").s().p("Ag1ALQgLgBgBgKQABgJALgBIBrAAQALABABAJQgBAKgLABg");
	this.shape_18.setTransform(402.9,-1.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E98A23").s().p("AhSATQgRgCgCgRQACgQARgCICmAAQARACABAQQgBARgRACg");
	this.shape_19.setTransform(401.2,-7.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#EC1E24").s().p("AhPAOQgNgBgBgNQABgMANgBICfAAQANABABAMQgBAMgNACg");
	this.shape_20.setTransform(394.9,-2.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFC10D").s().p("AhfAUQgKgCgBgSQABgRAKgCIC/AAQAKACABARQgBASgKACg");
	this.shape_21.setTransform(401,-5.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F6EB0F").s().p("AgtARQgEAAAAgEIAAgZQAAgDAEgBIBbAAQAEABAAADIAAAZQAAAEgEAAg");
	this.shape_22.setTransform(406.2,-3.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFCC33").s().p("Eg9ZAAyIAAhjMB6zAAAIAABjg");
	this.shape_23.setTransform(0.5,0.1,1.091,1);

	this.timeline.addTween(cjs.Tween.get(this.shape_23).wait(1));

}).prototype = getMCSymbolPrototype(lib.bar, new cjs.Rectangle(-428.4,-22,886.2,44.8), null);


(lib.star = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.gotoAndStop(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 3
	this.starText = new cjs.Text("", "12px 'Arial'");
	this.starText.name = "starText";
	this.starText.textAlign = "center";
	this.starText.lineHeight = 15;
	this.starText.lineWidth = 108;
	this.starText.parent = this;
	this.starText.setTransform(0.3,-40.7,0.935,0.935);

	this.timeline.addTween(cjs.Tween.get(this.starText).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AoLGZIAAsxIQWAAIAAMxg");
	this.shape.setTransform(0.6,-1.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 7
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#736357").s().p("AHXI4QgBAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAAAQgfgkACgvQAEgtAkgfQAiggAwAEQAmADAcAZQAGAFhMBVQg/BJgTAAQgDAAgCgDgAohHTQhJhXARgKQAAAAAAgBQAAAAAAgBQABAAAAAAQAAAAAAAAQApgZAtAKQAtALAaAnQAaAngLAtQgIAmgdAZIgBAAQgJAAhGhTgAhhH8QggggAAgtQAAgvAgggQAiggAtAAQAuAAAfAgQAgAgAAAvQAAAtggAgQgfAhguAAQgtAAgighgAC+EuQgSgSAAgZQAAgaASgTQASgRAZAAQAaAAASARQASATAAAaQAAAZgSASQgSASgaAAQgZAAgSgSgAo9CbQgOgPAAgVQAAgVAOgQQAQgPAVAAQAVAAAPAPQAPAQAAAVQAAAVgPAPQgPAPgVAAQgVAAgQgPgAkUBSQgmgmAAg1QAAg3AmgoQAngmA3AAQA3AAAmAmQAnAoAAA3QAAA1gnAmQgmAog3AAQg3AAgngogAEIgGQgagaAAgmQAAgkAagcQAcgaAlAAQAlAAAaAaQAcAcAAAkQAAAmgcAaQgaAaglAAQglAAgcgagApzlgQgGgFBFhbQBFhbAOAOIACACQAiAhAAAvQAAAvgiAhQghAhguAAQgnAAgegWgAi3l4QgggiAAguQAAgwAgggQAjgiAuAAQAvAAAgAiQAiAgAAAwQAAAugiAiQggAhgvAAQguAAgjghgAFimAQgRgRAAgaQAAgZARgSQATgRAZAAQAZAAARARQASASAAAZQAAAagSARQgRASgZAAQgZAAgTgSg");
	this.shape_1.setTransform(-0.9,-1.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer 5
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#998675").s().p("AoHIHQjJjKgNkYIgBglQAAkwDXjXQDYjXEvAAQExAADXDXQDXDXAAEwIAAAlQgNEYjKDKQjXDYkxAAQkvAAjYjYg");
	this.shape_2.setTransform(0.9,-2.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.star, new cjs.Rectangle(-72.6,-75.6,147,147), null);


(lib.no = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AAAAJQgHAOgFAHIgMgIIAQgTIgXgEIAEgOQAQAFAHAEIgCgXIANAAIgCAXQAKgFANgEIAEAOQgMADgMABIARATIgMAIIgNgVg");
	this.shape.setTransform(0,-0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.no, new cjs.Rectangle(-20.6,-9,41.3,26.4), null);


(lib.animel1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.חייה1();
	this.instance.parent = this;
	this.instance.setTransform(-150,-116);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.animel1, new cjs.Rectangle(-150,-116,300,225), null);


(lib.אודות = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0000FF").ss(1,1,1).p("Ah3AAIDvAA");
	this.shape.setTransform(1.2,3,1.038,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0000FF").s().p("AAPAfIgWghQgGADgBAIIgCAWIgMAAIACgWQACgOALgFIgPgUIAOAAIATAcQADgCACgEIACgKIACgMIALAAIgBAMQgBAJgDAGQgDADgHAFIATAag");
	this.shape_1.setTransform(10.9,-1.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0000FF").s().p("AgFAfIAAg9IALAAIAAA9g");
	this.shape_2.setTransform(5.9,-1.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0000FF").s().p("AAGAfIAAg0IghAAIAAgJIA3AAIAAAJIgLAAIAAA0g");
	this.shape_3.setTransform(1.4,-1.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0000FF").s().p("AgFAfIAAg9IALAAIAAA9g");
	this.shape_4.setTransform(-3.2,-1.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0000FF").s().p("AggAeIACgJIAGABQAEAAACgBQABgCABgFIAAgjIgNABIgBgJQANgCAOAAQANAAAIADQAHACAEAGQAEAHAAAMIAAAgIgLAAIAAgeQAAgIgCgFQgBgEgFgCQgEgDgKAAIgGAAIAAAlIAAAJQgCADgDACQgEACgGAAQgGAAgFgCg");
	this.shape_5.setTransform(-8.8,-1.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#0066FF").ss(1,1,1).p("Ah3AAIDvAA");
	this.shape_6.setTransform(1.2,3,1.038,1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0066FF").s().p("AAPAfIgWghQgGADgBAIIgCAWIgMAAIACgWQACgOALgFIgPgUIAOAAIATAcQADgCACgEIACgKIACgMIALAAIgBAMQgBAJgDAGQgDADgHAFIATAag");
	this.shape_7.setTransform(10.9,-1.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0066FF").s().p("AgFAfIAAg9IALAAIAAA9g");
	this.shape_8.setTransform(5.9,-1.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0066FF").s().p("AAGAfIAAg0IghAAIAAgJIA3AAIAAAJIgLAAIAAA0g");
	this.shape_9.setTransform(1.4,-1.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0066FF").s().p("AgFAfIAAg9IALAAIAAA9g");
	this.shape_10.setTransform(-3.2,-1.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0066FF").s().p("AggAeIACgJIAGABQAEAAACgBQABgCABgFIAAgjIgNABIgBgJQANgCAOAAQANAAAIADQAHACAEAGQAEAHAAAMIAAAgIgLAAIAAgeQAAgIgCgFQgBgEgFgCQgEgDgKAAIgGAAIAAAlIAAAJQgCADgDACQgEACgGAAQgGAAgFgCg");
	this.shape_11.setTransform(-8.8,-1.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("Ah/AjIAAhFID/AAIAABFg");
	this.shape_12.setTransform(0.9,-0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_12}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.9,-10.7,35.1,17.4);


(lib.x = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAqBQIghgxIgJgOIgpA/IghAAIA6hSIg2hOIAiAAIAZAnIALASIALgSIAbgnIAhAAIg3BNIA7BTg");
	this.shape.setTransform(0.5,-1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhHBRIAAihICPAAIAAChg");
	this.shape_1.setTransform(0.6,-0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.3,-23,19.7,38.6);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgXAAQADgVAUgBQAWABABAVQgBAVgWADQgUgDgDgVg");
	this.shape.setTransform(313.9,19.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgOAAQACgNAMgBQAOACABAMQgBAOgOABQgNgBgBgOg");
	this.shape_1.setTransform(178.1,156.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgUAAQABgTATgBQAUABABATQgBAUgUABQgTgBgBgUg");
	this.shape_2.setTransform(405.5,35.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgfAAQADgcAcgDQAdADADAcQgDAdgdADQgcgDgDgdg");
	this.shape_3.setTransform(72.7,129.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgeAAQADgbAbgDQAbADADAbQgDAbgbADQgbgDgDgbg");
	this.shape_4.setTransform(57.9,-136.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgaAAQADgXAXgDQAYADADAXQgDAYgYADQgXgDgDgYg");
	this.shape_5.setTransform(523.1,-137.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgWAAQACgUAUgCQAVACACAUQgCAVgVACQgUgCgCgVg");
	this.shape_6.setTransform(470.6,66.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgXAAQACgVAVgCQAWACACAVQgCAWgWACQgVgCgCgWg");
	this.shape_7.setTransform(504.5,98.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgNAVQgGgBgBgGIAAgbQABgGAGgBIAbAAQAGABAAAGIAAAbQAAAGgGABg");
	this.shape_8.setTransform(479,-175.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgVAAQACgTATgCQAUACACATQgCAUgUACQgTgCgCgUg");
	this.shape_9.setTransform(327.7,92.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgVAAQACgTATgCQAUACACATQgCAUgUACQgTgCgCgUg");
	this.shape_10.setTransform(254.8,68.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgJAPQgFAAAAgFIAAgTQAAgFAFAAIATAAQAFAAAAAFIAAATQAAAFgFAAg");
	this.shape_11.setTransform(404.2,-125.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgFAJQAAAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAgBIAAgLQAAAAABgBQAAAAAAgBQABAAAAAAQABgBAAAAIALAAQABAAAAABQABAAAAAAQAAABABAAQAAABAAAAIAAALQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAg");
	this.shape_12.setTransform(237.6,-36.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgSAAQACgQAQgCQARACACAQQgCARgRACQgQgCgCgRg");
	this.shape_13.setTransform(225.5,9.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgJAPQgFAAAAgFIAAgTQAAgFAFAAIATAAQAFAAAAAFIAAATQAAAFgFAAg");
	this.shape_14.setTransform(419.7,-17);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgXAAQACgVAVgCQAWACACAVQgCAWgWACQgVgCgCgWg");
	this.shape_15.setTransform(379.4,146.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgqAAQAEgmAmgEQAnAEAEAmQgEAngnAEQgmgEgEgng");
	this.shape_16.setTransform(398.1,96.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgPAXQgHAAgBgIIAAgeQABgHAHgBIAeAAQAIABAAAHIAAAeQAAAIgIAAg");
	this.shape_17.setTransform(124.4,118.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgSAcQgIAAgBgJIAAglQABgIAIgBIAlAAQAIABABAIIAAAlQgBAJgIAAg");
	this.shape_18.setTransform(167,-157.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgPAZQgIgCAAgHIAAggQAAgHAIgBIAfAAQAHABABAHIAAAgQgBAHgHACg");
	this.shape_19.setTransform(84.2,-26.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#222558").s().p("ArQAsQgpgDgDgpQADgnApgEIWhAAQApAEADAnQgDApgpADg");
	this.shape_20.setTransform(453.7,-30.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#222558").s().p("Ai0BIQAkgBAYgVQAYgUABgeQgBgdgYgVQgYgTgkgBIFpAAQgkABgYATQgYAVgBAdQABAeAYAUQAYAVAkABg");
	this.shape_21.setTransform(427.3,-40.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#222558").s().p("AoWAsQgogDgEgpQAEgnAogEIQtAAQAoAEAEAnQgEApgoADg");
	this.shape_22.setTransform(402.9,-49);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#222558").s().p("AoVABQAEgoAogEIPTgBQAoAEAEAoQgEAogoADIvSACQgpgEgEgog");
	this.shape_23.setTransform(390.9,169.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#222558").s().p("Ah4AyQAYgUABgeQgBgdgYgUQgYgTgkgBIFogBQgjABgYAUQgYAUgBAdQABAdAYAUQAYAUAkABIlpABQAkgBAYgUg");
	this.shape_24.setTransform(422.4,159.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#222558").s().p("AltAAQAEgnAogEIKDgBQAoAEAEAoQgEAogoADIqDACQgogEgEgpg");
	this.shape_25.setTransform(425.4,150.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#222558").s().p("AltAAQAEgnAogEIKDgBQAoAEAEAoQgEAogoADIqDACQgogEgEgpg");
	this.shape_26.setTransform(438.3,169.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#222558").s().p("Ah4AyQAYgUABgeQgBgdgZgTQgXgUgkgBIFpgBQgkABgYAUQgYAUAAAdQAAAeAYATQAYAUAkABIloABQAjgBAYgUg");
	this.shape_27.setTransform(453,159.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#222558").s().p("ApDABQAEgnAogEIQugCQApAEAEAoQgEAogpADIwtACQgpgEgEgog");
	this.shape_28.setTransform(477.4,150.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#222558").s().p("AkSAsQgogDgEgpQAEgnAogEIIlAAQAoAEAEAnQgEApgoADg");
	this.shape_29.setTransform(267.6,129.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#222558").s().p("Ai0A/QAkgBAYgRQAYgTABgaQgBgagYgRQgXgSgigBIFkAAQgjABgXASQgYARgBAaQABAaAYATQAYARAkABg");
	this.shape_30.setTransform(277.5,120.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#222558").s().p("AniAsQgpgDgDgpQADgnApgEIPFAAQApAEAEAnQgEApgpADg");
	this.shape_31.setTransform(254.5,111.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#222558").s().p("AlBAsQgogDgEgpQAEgnAogEIKDAAQAoAEAEAnQgEApgoADg");
	this.shape_32.setTransform(186.8,49.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#222558").s().p("AixBEQAigBAXgSQAYgUABgdQgBgcgYgUQgYgSgkgBIFpAAQgkABgYASQgYAUgBAcQABAdAYAUQAYATAkAAg");
	this.shape_33.setTransform(201.4,40);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#222558").s().p("AlBAsQgogDgEgpQAEgnAogEIKDAAQAoAEAEAnQgEApgoADg");
	this.shape_34.setTransform(204.6,30.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#222558").s().p("AlBAsQgogDgEgpQAEgnAogEIKDAAQAoAEAEAnQgEApgoADg");
	this.shape_35.setTransform(154.7,30.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#222558").s().p("AixBBQAigBAXgSQAYgTABgbQgBgagYgTQgYgSgkgBIFpAAQgkABgYASQgYATgBAaQABAbAYATQAYATAkAAg");
	this.shape_36.setTransform(169.3,21.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#222558").s().p("AlBAsQgogDgEgpQAEgnAogEIKDAAQAoAEAEAnQgEApgoADg");
	this.shape_37.setTransform(172.4,12.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#222558").s().p("AjaAsQgpgDgEgpQAEgnApgEIG1AAQApAEAEAnQgEApgpADg");
	this.shape_38.setTransform(73,49.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#222558").s().p("AixBEQAigBAXgSQAYgUABgdQgBgcgYgUQgYgSgkgBIFpAAQgkABgYASQgYAUgBAcQABAdAYAUQAYATAkAAg");
	this.shape_39.setTransform(77.4,40);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#222558").s().p("AopAsQgogDgEgpQAEgnAogEIRTAAQAoAEAEAnQgDApgpADg");
	this.shape_40.setTransform(103.7,30.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#EAEAE9").s().p("AgRAAQABgQAQgBQAQABACAQQgCAQgQACQgQgCgBgQg");
	this.shape_41.setTransform(105.5,-70.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#EAEAE9").s().p("AgXAPQgMgWAVgQQAWgMAQAVQAMAWgVAQQgIAEgHAAQgNAAgKgNg");
	this.shape_42.setTransform(325.2,-47.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#EAEAE9").s().p("AggAAQADgdAdgDQAeADADAdQgDAegeADQgdgDgDgeg");
	this.shape_43.setTransform(361.1,-140);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#EAEAE9").s().p("AgeAAQADgbAbgDQAcADADAbQgDAcgcADQgbgDgDgcg");
	this.shape_44.setTransform(268.9,-92.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#EAEAE9").s().p("AgZAAQACgXAXgCQAYACACAXQgCAYgYACQgXgCgCgYg");
	this.shape_45.setTransform(187.9,-45.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#EAEAE9").s().p("AgZAAQACgXAXgCQAYACACAXQgCAYgYACQgXgCgCgYg");
	this.shape_46.setTransform(114.7,-163.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#222558").s().p("AlBAsQgogDgEgpQAEgnAogEIKDAAQAoAEAEAnQgEApgoADg");
	this.shape_47.setTransform(383.2,-85.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#222558").s().p("AiyA+QAhgBAXgRQAZgSABgaQgBgZgZgSQgXgRghgBIFjAAQgiABgXARQgYASgBAZQABAaAYASQAYASAkAAg");
	this.shape_48.setTransform(398,-95.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#222558").s().p("AlBAsQgogDgEgpQAEgnAogEIKDAAQAoAEAEAnQgEApgoADg");
	this.shape_49.setTransform(401,-104.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#222558").s().p("AmGAsQgogDgFgpQAFgnAogEIMNAAQApAEADAnQgDApgpADg");
	this.shape_50.setTransform(246,-134.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#222558").s().p("AjnA9QAsgBAegRQAegRACgaQgCgZgegRQgegRgsgBIHMAAQgrABgeARQggARgBAZQABAaAgARQAfARAtABg");
	this.shape_51.setTransform(242.6,-143.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#222558").s().p("AoWAsQgogDgEgpQAEgnAogEIQtAAQAoAEAEAnQgEApgoADg");
	this.shape_52.setTransform(263.8,-153);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#222558").s().p("AlBAsQgogDgEgpQAEgnAogEIKDAAQAoAEAEAnQgEApgoADg");
	this.shape_53.setTransform(160.2,-116.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#222558").s().p("AjOBIQApgBAbgUQAcgUABgfQgBgegcgUQgbgUgpgBIGcAAQgpABgaAUQgcAUgBAeQABAfAcAUQAaAUApABg");
	this.shape_54.setTransform(172.3,-125.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#222558").s().p("AlBAsQgogDgEgpQAEgnAogEIKDAAQAoAEAEAnQgEApgoADg");
	this.shape_55.setTransform(177.9,-134.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#0D1138").s().p("EgrtAkhMAAAhJBMBXbAAAMAAABJBg");
	this.shape_56.setTransform(279.8,0);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgWAAQABgVAVgBQAVABACAVQgCAVgVADQgVgDgBgVg");
	this.shape_57.setTransform(-245.8,19.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgOAAQACgNAMgBQAOACABAMQgBAOgOABQgNgBgBgOg");
	this.shape_58.setTransform(-381.6,156.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgUAAQABgTATgBQAUABABATQgBAUgUABQgTgBgBgUg");
	this.shape_59.setTransform(-154.2,35.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgfAAQADgcAcgDQAdADADAcQgDAdgdADQgcgDgDgdg");
	this.shape_60.setTransform(-486.9,129.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgeAAQADgbAbgDQAcADADAbQgDAbgcADQgbgDgDgbg");
	this.shape_61.setTransform(-501.7,-136.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgaAAQADgXAXgDQAYADADAXQgDAYgYADQgXgDgDgYg");
	this.shape_62.setTransform(-36.5,-137.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgWAAQACgUAUgCQAVACACAUQgCAVgVACQgUgCgCgVg");
	this.shape_63.setTransform(-89,66.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgXAAQACgVAVgCQAWACACAVQgCAWgWACQgVgCgCgWg");
	this.shape_64.setTransform(-55.1,98.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgMAVQgHgBgBgGIAAgbQABgGAHgBIAaAAQAGABABAGIAAAbQgBAGgGABg");
	this.shape_65.setTransform(-80.6,-175.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgVAAQACgTATgCQAUACACATQgCAUgUACQgTgCgCgUg");
	this.shape_66.setTransform(-232,92.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgVAAQACgTATgCQAUACACATQgCAUgUACQgTgCgCgUg");
	this.shape_67.setTransform(-304.9,68.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgJAPQgFAAAAgFIAAgTQAAgFAFAAIATAAQAFAAAAAFIAAATQAAAFgFAAg");
	this.shape_68.setTransform(-155.5,-125.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgFAJQAAAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAgBIAAgLQAAAAABgBQAAAAAAgBQABAAAAAAQABgBAAAAIALAAQABAAAAABQABAAAAAAQAAABABAAQAAABAAAAIAAALQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAg");
	this.shape_69.setTransform(-322,-36.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgSAAQACgQAQgCQARACACAQQgCARgRACQgQgCgCgRg");
	this.shape_70.setTransform(-334.1,9.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgJAPQgFAAAAgFIAAgTQAAgFAFAAIATAAQAFAAAAAFIAAATQAAAFgFAAg");
	this.shape_71.setTransform(-140,-17);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgXAAQACgVAVgCQAWACACAVQgCAWgWACQgVgCgCgWg");
	this.shape_72.setTransform(-180.3,146.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgqAAQAEgmAmgEQAnAEAEAmQgEAngnAEQgmgEgEgng");
	this.shape_73.setTransform(-161.5,96.4);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AgOAXQgIAAAAgIIAAgeQAAgHAIgBIAdAAQAIABAAAHIAAAeQAAAIgIAAg");
	this.shape_74.setTransform(-435.2,118.1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgSAcQgJAAAAgJIAAglQAAgIAJgBIAlAAQAJABABAIIAAAlQgBAJgJAAg");
	this.shape_75.setTransform(-392.6,-157.6);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgQAZQgGgCgCgHIAAggQACgHAGgBIAgAAQAIABABAHIAAAgQgBAHgIACg");
	this.shape_76.setTransform(-475.5,-26.2);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#222558").s().p("ArQAsQgpgDgDgpQADgnApgEIWhAAQApAEAEAnQgEApgpADg");
	this.shape_77.setTransform(-106,-30.6);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#222558").s().p("Ai0BIQAkgBAYgVQAYgUABgeQgBgdgYgVQgYgTgkgBIFpAAQgkABgYATQgYAVgBAdQABAeAYAUQAYAVAkABg");
	this.shape_78.setTransform(-132.4,-40.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#222558").s().p("AoWAsQgogDgEgpQAEgnAogEIQtAAQAoAEAEAnQgEApgoADg");
	this.shape_79.setTransform(-156.8,-49);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#222558").s().p("AoVABQAEgoAogEIPTgBQAoAEAEAoQgEAogoADIvSACQgpgEgEgog");
	this.shape_80.setTransform(-168.7,169.2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#222558").s().p("Ah4AyQAYgUABgeQgBgdgZgUQgXgTgkgBIFogBQgjABgYAUQgYAUAAAdQAAAdAYAUQAYAUAkABIloABQAjgBAYgUg");
	this.shape_81.setTransform(-137.3,159.8);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#222558").s().p("AltAAQAEgnAogEIKDgBQAoAEAEAoQgEAogoADIqDACQgogEgEgpg");
	this.shape_82.setTransform(-134.2,150.9);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#222558").s().p("AltAAQAEgnAogEIKDgBQAoAEAEAoQgEAogoADIqDACQgogEgEgpg");
	this.shape_83.setTransform(-121.3,169.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#222558").s().p("Ah4AyQAYgUABgeQgBgdgZgTQgXgUgkgBIFpgBQgkABgYAUQgYAUgBAdQABAeAYATQAYAUAkABIlpABQAkgBAYgUg");
	this.shape_84.setTransform(-106.6,159.8);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#222558").s().p("ApDABQAEgnAogEIQugCQApAEAEAoQgEAogpADIwtACQgpgEgEgog");
	this.shape_85.setTransform(-82.2,150.7);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#222558").s().p("AkSAsQgogDgEgpQAEgnAogEIIlAAQAoAEAEAnQgEApgoADg");
	this.shape_86.setTransform(-292.1,129.6);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#222558").s().p("Ai0A/QAkgBAYgRQAYgTABgaQgBgagYgRQgXgSgigBIFkAAQgjABgXASQgYARgBAaQABAaAYATQAYARAkABg");
	this.shape_87.setTransform(-282.1,120.5);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#222558").s().p("AniAsQgogDgFgpQAFgnAogEIPFAAQAoAEAFAnQgFApgoADg");
	this.shape_88.setTransform(-305.1,111.3);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#222558").s().p("AlBAsQgogDgEgpQAEgnAogEIKDAAQAoAEAEAnQgEApgoADg");
	this.shape_89.setTransform(-372.8,49.1);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#222558").s().p("AixBEQAigBAXgSQAYgUABgdQgBgcgYgUQgYgSgkgBIFpAAQgkABgYASQgYAUgBAcQABAdAYAUQAYATAkAAg");
	this.shape_90.setTransform(-358.2,40);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#222558").s().p("AlBAsQgogDgEgpQAEgnAogEIKDAAQAoAEAEAnQgEApgoADg");
	this.shape_91.setTransform(-355.1,30.8);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#222558").s().p("AlBAsQgogDgEgpQAEgnAogEIKDAAQAoAEAEAnQgEApgoADg");
	this.shape_92.setTransform(-404.9,30.8);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#222558").s().p("AixBBQAigBAXgSQAYgTABgbQgBgagYgTQgYgSgkgBIFpAAQgkABgYASQgYATgBAaQABAbAYATQAYATAkAAg");
	this.shape_93.setTransform(-390.4,21.1);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#222558").s().p("AlBAsQgogDgEgpQAEgnAogEIKDAAQAoAEAEAnQgEApgoADg");
	this.shape_94.setTransform(-387.3,12.5);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#222558").s().p("AjaAsQgpgDgEgpQAEgnApgEIG1AAQApAEAEAnQgEApgpADg");
	this.shape_95.setTransform(-486.7,49.1);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#222558").s().p("AixBEQAigBAXgSQAYgUABgdQgBgcgYgUQgYgSgkgBIFpAAQgkABgYASQgYAUgBAcQABAdAYAUQAYATAkAAg");
	this.shape_96.setTransform(-482.2,40);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#222558").s().p("AopAsQgogDgEgpQAEgnAogEIRTAAQAoAEAEAnQgDApgpADg");
	this.shape_97.setTransform(-455.9,30.8);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#EAEAE9").s().p("AgRAAQACgQAPgBQAQABACAQQgCAQgQACQgPgCgCgQg");
	this.shape_98.setTransform(-454.1,-70.1);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#EAEAE9").s().p("AgXAPQgMgWAVgQQAWgMAQAVQAMAWgVAQQgIAEgHAAQgNAAgKgNg");
	this.shape_99.setTransform(-234.4,-47.4);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#EAEAE9").s().p("AggAAQADgdAdgDQAeADADAdQgDAegeADQgdgDgDgeg");
	this.shape_100.setTransform(-198.5,-140);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#EAEAE9").s().p("AgeAAQADgbAbgDQAcADADAbQgDAcgcADQgbgDgDgcg");
	this.shape_101.setTransform(-290.8,-92.2);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#EAEAE9").s().p("AgZAAQACgXAXgCQAYACACAXQgCAYgYACQgXgCgCgYg");
	this.shape_102.setTransform(-371.8,-45.1);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#EAEAE9").s().p("AgZAAQACgXAXgCQAYACACAXQgCAYgYACQgXgCgCgYg");
	this.shape_103.setTransform(-445,-163.1);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#222558").s().p("AlBAsQgogDgEgpQAEgnAogEIKDAAQAoAEAEAnQgEApgoADg");
	this.shape_104.setTransform(-176.4,-85.9);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#222558").s().p("AizA+QAjgBAXgRQAXgSACgaQgCgZgXgSQgXgRgjgBIFkAAQgiABgXARQgYASgBAZQABAaAYASQAYASAjAAg");
	this.shape_105.setTransform(-161.6,-95.3);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#222558").s().p("AlBAsQgogDgEgpQAEgnAogEIKDAAQAoAEAEAnQgEApgoADg");
	this.shape_106.setTransform(-158.7,-104.3);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#222558").s().p("AmGAsQgpgDgEgpQAEgnApgEIMNAAQApAEAEAnQgEApgpADg");
	this.shape_107.setTransform(-313.6,-134.7);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#222558").s().p("AjoA9QAtgBAegRQAfgRABgaQgBgZgfgRQgegRgtgBIHOAAQgtABgeARQgfARgBAZQABAaAfARQAgARAtABg");
	this.shape_108.setTransform(-317.1,-143.9);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#222558").s().p("AoWAsQgogDgEgpQAEgnAogEIQtAAQAoAEAEAnQgEApgoADg");
	this.shape_109.setTransform(-295.9,-153);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#222558").s().p("AlBAsQgogDgEgpQAEgnAogEIKDAAQAoAEAEAnQgEApgoADg");
	this.shape_110.setTransform(-399.4,-116.5);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#222558").s().p("AjOBIQAqgBAbgUQAbgUABgfQgBgegbgUQgbgUgqgBIGcAAQgpABgbAUQgbAUgBAeQABAfAbAUQAbAUApABg");
	this.shape_111.setTransform(-387.4,-125.8);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#222558").s().p("AlBAsQgogDgEgpQAEgnAogEIKDAAQAoAEAEAnQgEApgoADg");
	this.shape_112.setTransform(-381.7,-134.7);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#0D1138").s().p("EgrtAkhMAAAhJBMBXbAAAMAAABJBg");
	this.shape_113.setTransform(-279.8,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-559.6,-233.6,1119.3,467.4);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgXAAQADgVAUgBQAWABABAVQgBAVgWADQgUgDgDgVg");
	this.shape.setTransform(313.9,19.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgOAAQACgNAMgBQAOACABAMQgBAOgOABQgNgBgBgOg");
	this.shape_1.setTransform(178.1,156.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgUAAQABgTATgBQAUABABATQgBAUgUABQgTgBgBgUg");
	this.shape_2.setTransform(405.5,35.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgfAAQADgcAcgDQAdADADAcQgDAdgdADQgcgDgDgdg");
	this.shape_3.setTransform(72.7,129.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgeAAQADgbAbgDQAbADADAbQgDAbgbADQgbgDgDgbg");
	this.shape_4.setTransform(57.9,-136.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgaAAQADgXAXgDQAYADADAXQgDAYgYADQgXgDgDgYg");
	this.shape_5.setTransform(523.1,-137.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgWAAQACgUAUgCQAVACACAUQgCAVgVACQgUgCgCgVg");
	this.shape_6.setTransform(470.6,66.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgXAAQACgVAVgCQAWACACAVQgCAWgWACQgVgCgCgWg");
	this.shape_7.setTransform(504.5,98.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgNAVQgGgBgBgGIAAgbQABgGAGgBIAbAAQAGABAAAGIAAAbQAAAGgGABg");
	this.shape_8.setTransform(479,-175.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgVAAQACgTATgCQAUACACATQgCAUgUACQgTgCgCgUg");
	this.shape_9.setTransform(327.7,92.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgVAAQACgTATgCQAUACACATQgCAUgUACQgTgCgCgUg");
	this.shape_10.setTransform(254.8,68.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgJAPQgFAAAAgFIAAgTQAAgFAFAAIATAAQAFAAAAAFIAAATQAAAFgFAAg");
	this.shape_11.setTransform(404.2,-125.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgFAJQAAAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAgBIAAgLQAAAAABgBQAAAAAAgBQABAAAAAAQABgBAAAAIALAAQABAAAAABQABAAAAAAQAAABABAAQAAABAAAAIAAALQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAg");
	this.shape_12.setTransform(237.6,-36.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgSAAQACgQAQgCQARACACAQQgCARgRACQgQgCgCgRg");
	this.shape_13.setTransform(225.5,9.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgJAPQgFAAAAgFIAAgTQAAgFAFAAIATAAQAFAAAAAFIAAATQAAAFgFAAg");
	this.shape_14.setTransform(419.7,-17);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgXAAQACgVAVgCQAWACACAVQgCAWgWACQgVgCgCgWg");
	this.shape_15.setTransform(379.4,146.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgqAAQAEgmAmgEQAnAEAEAmQgEAngnAEQgmgEgEgng");
	this.shape_16.setTransform(398.1,96.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgPAXQgHAAgBgIIAAgeQABgHAHgBIAeAAQAIABAAAHIAAAeQAAAIgIAAg");
	this.shape_17.setTransform(124.4,118.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgSAcQgIAAgBgJIAAglQABgIAIgBIAlAAQAIABABAIIAAAlQgBAJgIAAg");
	this.shape_18.setTransform(167,-157.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgPAZQgIgCAAgHIAAggQAAgHAIgBIAfAAQAHABABAHIAAAgQgBAHgHACg");
	this.shape_19.setTransform(84.2,-26.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#222558").s().p("ArQAsQgpgDgDgpQADgnApgEIWhAAQApAEADAnQgDApgpADg");
	this.shape_20.setTransform(453.7,-30.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#222558").s().p("Ai0BIQAkgBAYgVQAYgUABgeQgBgdgYgVQgYgTgkgBIFpAAQgkABgYATQgYAVgBAdQABAeAYAUQAYAVAkABg");
	this.shape_21.setTransform(427.3,-40.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#222558").s().p("AoWAsQgogDgEgpQAEgnAogEIQtAAQAoAEAEAnQgEApgoADg");
	this.shape_22.setTransform(402.9,-49);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#222558").s().p("AoVABQAEgoAogEIPTgBQAoAEAEAoQgEAogoADIvSACQgpgEgEgog");
	this.shape_23.setTransform(390.9,169.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#222558").s().p("Ah4AyQAYgUABgeQgBgdgYgUQgYgTgkgBIFogBQgjABgYAUQgYAUgBAdQABAdAYAUQAYAUAkABIlpABQAkgBAYgUg");
	this.shape_24.setTransform(422.4,159.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#222558").s().p("AltAAQAEgnAogEIKDgBQAoAEAEAoQgEAogoADIqDACQgogEgEgpg");
	this.shape_25.setTransform(425.4,150.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#222558").s().p("AltAAQAEgnAogEIKDgBQAoAEAEAoQgEAogoADIqDACQgogEgEgpg");
	this.shape_26.setTransform(438.3,169.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#222558").s().p("Ah4AyQAYgUABgeQgBgdgZgTQgXgUgkgBIFpgBQgkABgYAUQgYAUAAAdQAAAeAYATQAYAUAkABIloABQAjgBAYgUg");
	this.shape_27.setTransform(453,159.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#222558").s().p("ApDABQAEgnAogEIQugCQApAEAEAoQgEAogpADIwtACQgpgEgEgog");
	this.shape_28.setTransform(477.4,150.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#222558").s().p("AkSAsQgogDgEgpQAEgnAogEIIlAAQAoAEAEAnQgEApgoADg");
	this.shape_29.setTransform(267.6,129.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#222558").s().p("Ai0A/QAkgBAYgRQAYgTABgaQgBgagYgRQgXgSgigBIFkAAQgjABgXASQgYARgBAaQABAaAYATQAYARAkABg");
	this.shape_30.setTransform(277.5,120.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#222558").s().p("AniAsQgpgDgDgpQADgnApgEIPFAAQApAEAEAnQgEApgpADg");
	this.shape_31.setTransform(254.5,111.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#222558").s().p("AlBAsQgogDgEgpQAEgnAogEIKDAAQAoAEAEAnQgEApgoADg");
	this.shape_32.setTransform(186.8,49.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#222558").s().p("AixBEQAigBAXgSQAYgUABgdQgBgcgYgUQgYgSgkgBIFpAAQgkABgYASQgYAUgBAcQABAdAYAUQAYATAkAAg");
	this.shape_33.setTransform(201.4,40);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#222558").s().p("AlBAsQgogDgEgpQAEgnAogEIKDAAQAoAEAEAnQgEApgoADg");
	this.shape_34.setTransform(204.6,30.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#222558").s().p("AlBAsQgogDgEgpQAEgnAogEIKDAAQAoAEAEAnQgEApgoADg");
	this.shape_35.setTransform(154.7,30.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#222558").s().p("AixBBQAigBAXgSQAYgTABgbQgBgagYgTQgYgSgkgBIFpAAQgkABgYASQgYATgBAaQABAbAYATQAYATAkAAg");
	this.shape_36.setTransform(169.3,21.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#222558").s().p("AlBAsQgogDgEgpQAEgnAogEIKDAAQAoAEAEAnQgEApgoADg");
	this.shape_37.setTransform(172.4,12.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#222558").s().p("AjaAsQgpgDgEgpQAEgnApgEIG1AAQApAEAEAnQgEApgpADg");
	this.shape_38.setTransform(73,49.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#222558").s().p("AixBEQAigBAXgSQAYgUABgdQgBgcgYgUQgYgSgkgBIFpAAQgkABgYASQgYAUgBAcQABAdAYAUQAYATAkAAg");
	this.shape_39.setTransform(77.4,40);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#222558").s().p("AopAsQgogDgEgpQAEgnAogEIRTAAQAoAEAEAnQgDApgpADg");
	this.shape_40.setTransform(103.7,30.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#EAEAE9").s().p("AgRAAQABgQAQgBQAQABACAQQgCAQgQACQgQgCgBgQg");
	this.shape_41.setTransform(105.5,-70.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#EAEAE9").s().p("AgXAPQgMgWAVgQQAWgMAQAVQAMAWgVAQQgIAEgHAAQgNAAgKgNg");
	this.shape_42.setTransform(325.2,-47.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#EAEAE9").s().p("AggAAQADgdAdgDQAeADADAdQgDAegeADQgdgDgDgeg");
	this.shape_43.setTransform(361.1,-140);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#EAEAE9").s().p("AgeAAQADgbAbgDQAcADADAbQgDAcgcADQgbgDgDgcg");
	this.shape_44.setTransform(268.9,-92.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#EAEAE9").s().p("AgZAAQACgXAXgCQAYACACAXQgCAYgYACQgXgCgCgYg");
	this.shape_45.setTransform(187.9,-45.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#EAEAE9").s().p("AgZAAQACgXAXgCQAYACACAXQgCAYgYACQgXgCgCgYg");
	this.shape_46.setTransform(114.7,-163.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#222558").s().p("AlBAsQgogDgEgpQAEgnAogEIKDAAQAoAEAEAnQgEApgoADg");
	this.shape_47.setTransform(383.2,-85.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#222558").s().p("AiyA+QAhgBAXgRQAZgSABgaQgBgZgZgSQgXgRghgBIFjAAQgiABgXARQgYASgBAZQABAaAYASQAYASAkAAg");
	this.shape_48.setTransform(398,-95.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#222558").s().p("AlBAsQgogDgEgpQAEgnAogEIKDAAQAoAEAEAnQgEApgoADg");
	this.shape_49.setTransform(401,-104.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#222558").s().p("AmGAsQgogDgFgpQAFgnAogEIMNAAQApAEADAnQgDApgpADg");
	this.shape_50.setTransform(246,-134.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#222558").s().p("AjnA9QAsgBAegRQAegRACgaQgCgZgegRQgegRgsgBIHMAAQgrABgeARQggARgBAZQABAaAgARQAfARAtABg");
	this.shape_51.setTransform(242.6,-143.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#222558").s().p("AoWAsQgogDgEgpQAEgnAogEIQtAAQAoAEAEAnQgEApgoADg");
	this.shape_52.setTransform(263.8,-153);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#222558").s().p("AlBAsQgogDgEgpQAEgnAogEIKDAAQAoAEAEAnQgEApgoADg");
	this.shape_53.setTransform(160.2,-116.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#222558").s().p("AjOBIQApgBAbgUQAcgUABgfQgBgegcgUQgbgUgpgBIGcAAQgpABgaAUQgcAUgBAeQABAfAcAUQAaAUApABg");
	this.shape_54.setTransform(172.3,-125.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#222558").s().p("AlBAsQgogDgEgpQAEgnAogEIKDAAQAoAEAEAnQgEApgoADg");
	this.shape_55.setTransform(177.9,-134.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#0D1138").s().p("EgrtAkhMAAAhJBMBXbAAAMAAABJBg");
	this.shape_56.setTransform(279.8,0);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgWAAQABgVAVgBQAVABACAVQgCAVgVADQgVgDgBgVg");
	this.shape_57.setTransform(-245.8,19.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgOAAQACgNAMgBQAOACABAMQgBAOgOABQgNgBgBgOg");
	this.shape_58.setTransform(-381.6,156.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgUAAQABgTATgBQAUABABATQgBAUgUABQgTgBgBgUg");
	this.shape_59.setTransform(-154.2,35.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgfAAQADgcAcgDQAdADADAcQgDAdgdADQgcgDgDgdg");
	this.shape_60.setTransform(-486.9,129.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgeAAQADgbAbgDQAcADADAbQgDAbgcADQgbgDgDgbg");
	this.shape_61.setTransform(-501.7,-136.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgaAAQADgXAXgDQAYADADAXQgDAYgYADQgXgDgDgYg");
	this.shape_62.setTransform(-36.5,-137.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgWAAQACgUAUgCQAVACACAUQgCAVgVACQgUgCgCgVg");
	this.shape_63.setTransform(-89,66.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgXAAQACgVAVgCQAWACACAVQgCAWgWACQgVgCgCgWg");
	this.shape_64.setTransform(-55.1,98.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgMAVQgHgBgBgGIAAgbQABgGAHgBIAaAAQAGABABAGIAAAbQgBAGgGABg");
	this.shape_65.setTransform(-80.6,-175.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgVAAQACgTATgCQAUACACATQgCAUgUACQgTgCgCgUg");
	this.shape_66.setTransform(-232,92.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgVAAQACgTATgCQAUACACATQgCAUgUACQgTgCgCgUg");
	this.shape_67.setTransform(-304.9,68.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgJAPQgFAAAAgFIAAgTQAAgFAFAAIATAAQAFAAAAAFIAAATQAAAFgFAAg");
	this.shape_68.setTransform(-155.5,-125.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgFAJQAAAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAgBIAAgLQAAAAABgBQAAAAAAgBQABAAAAAAQABgBAAAAIALAAQABAAAAABQABAAAAAAQAAABABAAQAAABAAAAIAAALQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAg");
	this.shape_69.setTransform(-322,-36.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgSAAQACgQAQgCQARACACAQQgCARgRACQgQgCgCgRg");
	this.shape_70.setTransform(-334.1,9.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgJAPQgFAAAAgFIAAgTQAAgFAFAAIATAAQAFAAAAAFIAAATQAAAFgFAAg");
	this.shape_71.setTransform(-140,-17);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgXAAQACgVAVgCQAWACACAVQgCAWgWACQgVgCgCgWg");
	this.shape_72.setTransform(-180.3,146.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgqAAQAEgmAmgEQAnAEAEAmQgEAngnAEQgmgEgEgng");
	this.shape_73.setTransform(-161.5,96.4);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AgOAXQgIAAAAgIIAAgeQAAgHAIgBIAdAAQAIABAAAHIAAAeQAAAIgIAAg");
	this.shape_74.setTransform(-435.2,118.1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgSAcQgJAAAAgJIAAglQAAgIAJgBIAlAAQAJABABAIIAAAlQgBAJgJAAg");
	this.shape_75.setTransform(-392.6,-157.6);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgQAZQgGgCgCgHIAAggQACgHAGgBIAgAAQAIABABAHIAAAgQgBAHgIACg");
	this.shape_76.setTransform(-475.5,-26.2);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#222558").s().p("ArQAsQgpgDgDgpQADgnApgEIWhAAQApAEAEAnQgEApgpADg");
	this.shape_77.setTransform(-106,-30.6);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#222558").s().p("Ai0BIQAkgBAYgVQAYgUABgeQgBgdgYgVQgYgTgkgBIFpAAQgkABgYATQgYAVgBAdQABAeAYAUQAYAVAkABg");
	this.shape_78.setTransform(-132.4,-40.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#222558").s().p("AoWAsQgogDgEgpQAEgnAogEIQtAAQAoAEAEAnQgEApgoADg");
	this.shape_79.setTransform(-156.8,-49);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#222558").s().p("AoVABQAEgoAogEIPTgBQAoAEAEAoQgEAogoADIvSACQgpgEgEgog");
	this.shape_80.setTransform(-168.7,169.2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#222558").s().p("Ah4AyQAYgUABgeQgBgdgZgUQgXgTgkgBIFogBQgjABgYAUQgYAUAAAdQAAAdAYAUQAYAUAkABIloABQAjgBAYgUg");
	this.shape_81.setTransform(-137.3,159.8);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#222558").s().p("AltAAQAEgnAogEIKDgBQAoAEAEAoQgEAogoADIqDACQgogEgEgpg");
	this.shape_82.setTransform(-134.2,150.9);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#222558").s().p("AltAAQAEgnAogEIKDgBQAoAEAEAoQgEAogoADIqDACQgogEgEgpg");
	this.shape_83.setTransform(-121.3,169.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#222558").s().p("Ah4AyQAYgUABgeQgBgdgZgTQgXgUgkgBIFpgBQgkABgYAUQgYAUgBAdQABAeAYATQAYAUAkABIlpABQAkgBAYgUg");
	this.shape_84.setTransform(-106.6,159.8);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#222558").s().p("ApDABQAEgnAogEIQugCQApAEAEAoQgEAogpADIwtACQgpgEgEgog");
	this.shape_85.setTransform(-82.2,150.7);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#222558").s().p("AkSAsQgogDgEgpQAEgnAogEIIlAAQAoAEAEAnQgEApgoADg");
	this.shape_86.setTransform(-292.1,129.6);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#222558").s().p("Ai0A/QAkgBAYgRQAYgTABgaQgBgagYgRQgXgSgigBIFkAAQgjABgXASQgYARgBAaQABAaAYATQAYARAkABg");
	this.shape_87.setTransform(-282.1,120.5);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#222558").s().p("AniAsQgogDgFgpQAFgnAogEIPFAAQAoAEAFAnQgFApgoADg");
	this.shape_88.setTransform(-305.1,111.3);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#222558").s().p("AlBAsQgogDgEgpQAEgnAogEIKDAAQAoAEAEAnQgEApgoADg");
	this.shape_89.setTransform(-372.8,49.1);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#222558").s().p("AixBEQAigBAXgSQAYgUABgdQgBgcgYgUQgYgSgkgBIFpAAQgkABgYASQgYAUgBAcQABAdAYAUQAYATAkAAg");
	this.shape_90.setTransform(-358.2,40);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#222558").s().p("AlBAsQgogDgEgpQAEgnAogEIKDAAQAoAEAEAnQgEApgoADg");
	this.shape_91.setTransform(-355.1,30.8);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#222558").s().p("AlBAsQgogDgEgpQAEgnAogEIKDAAQAoAEAEAnQgEApgoADg");
	this.shape_92.setTransform(-404.9,30.8);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#222558").s().p("AixBBQAigBAXgSQAYgTABgbQgBgagYgTQgYgSgkgBIFpAAQgkABgYASQgYATgBAaQABAbAYATQAYATAkAAg");
	this.shape_93.setTransform(-390.4,21.1);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#222558").s().p("AlBAsQgogDgEgpQAEgnAogEIKDAAQAoAEAEAnQgEApgoADg");
	this.shape_94.setTransform(-387.3,12.5);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#222558").s().p("AjaAsQgpgDgEgpQAEgnApgEIG1AAQApAEAEAnQgEApgpADg");
	this.shape_95.setTransform(-486.7,49.1);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#222558").s().p("AixBEQAigBAXgSQAYgUABgdQgBgcgYgUQgYgSgkgBIFpAAQgkABgYASQgYAUgBAcQABAdAYAUQAYATAkAAg");
	this.shape_96.setTransform(-482.2,40);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#222558").s().p("AopAsQgogDgEgpQAEgnAogEIRTAAQAoAEAEAnQgDApgpADg");
	this.shape_97.setTransform(-455.9,30.8);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#EAEAE9").s().p("AgRAAQACgQAPgBQAQABACAQQgCAQgQACQgPgCgCgQg");
	this.shape_98.setTransform(-454.1,-70.1);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#EAEAE9").s().p("AgXAPQgMgWAVgQQAWgMAQAVQAMAWgVAQQgIAEgHAAQgNAAgKgNg");
	this.shape_99.setTransform(-234.4,-47.4);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#EAEAE9").s().p("AggAAQADgdAdgDQAeADADAdQgDAegeADQgdgDgDgeg");
	this.shape_100.setTransform(-198.5,-140);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#EAEAE9").s().p("AgeAAQADgbAbgDQAcADADAbQgDAcgcADQgbgDgDgcg");
	this.shape_101.setTransform(-290.8,-92.2);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#EAEAE9").s().p("AgZAAQACgXAXgCQAYACACAXQgCAYgYACQgXgCgCgYg");
	this.shape_102.setTransform(-371.8,-45.1);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#EAEAE9").s().p("AgZAAQACgXAXgCQAYACACAXQgCAYgYACQgXgCgCgYg");
	this.shape_103.setTransform(-445,-163.1);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#222558").s().p("AlBAsQgogDgEgpQAEgnAogEIKDAAQAoAEAEAnQgEApgoADg");
	this.shape_104.setTransform(-176.4,-85.9);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#222558").s().p("AizA+QAjgBAXgRQAXgSACgaQgCgZgXgSQgXgRgjgBIFkAAQgiABgXARQgYASgBAZQABAaAYASQAYASAjAAg");
	this.shape_105.setTransform(-161.6,-95.3);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#222558").s().p("AlBAsQgogDgEgpQAEgnAogEIKDAAQAoAEAEAnQgEApgoADg");
	this.shape_106.setTransform(-158.7,-104.3);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#222558").s().p("AmGAsQgpgDgEgpQAEgnApgEIMNAAQApAEAEAnQgEApgpADg");
	this.shape_107.setTransform(-313.6,-134.7);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#222558").s().p("AjoA9QAtgBAegRQAfgRABgaQgBgZgfgRQgegRgtgBIHOAAQgtABgeARQgfARgBAZQABAaAfARQAgARAtABg");
	this.shape_108.setTransform(-317.1,-143.9);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#222558").s().p("AoWAsQgogDgEgpQAEgnAogEIQtAAQAoAEAEAnQgEApgoADg");
	this.shape_109.setTransform(-295.9,-153);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#222558").s().p("AlBAsQgogDgEgpQAEgnAogEIKDAAQAoAEAEAnQgEApgoADg");
	this.shape_110.setTransform(-399.4,-116.5);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#222558").s().p("AjOBIQAqgBAbgUQAbgUABgfQgBgegbgUQgbgUgqgBIGcAAQgpABgbAUQgbAUgBAeQABAfAbAUQAbAUApABg");
	this.shape_111.setTransform(-387.4,-125.8);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#222558").s().p("AlBAsQgogDgEgpQAEgnAogEIKDAAQAoAEAEAnQgEApgoADg");
	this.shape_112.setTransform(-381.7,-134.7);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#0D1138").s().p("EgrtAkhMAAAhJBMBXbAAAMAAABJBg");
	this.shape_113.setTransform(-279.8,0);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#0D1138").s().p("EgCPAh7MAAAhD1IEfAAMAAABD1g");
	this.shape_114.setTransform(1.8,1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-559.6,-233.6,1119.3,467.4);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("בחר", "bold 17px 'Verdana'", "#660000");
	this.text.textAlign = "center";
	this.text.lineHeight = 21;
	this.text.lineWidth = 86;
	this.text.parent = this;
	this.text.setTransform(50.1,5.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC3300").s().p("AoWCgIAAk/IQtAAIAAE/g");
	this.shape.setTransform(52.5,17.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-1,1.1,107,32), null);


(lib.an_ComboBox = function(options) {
	this._element = new $.an.ComboBox(options);
	this._el = this._element.create();
	var $this = this;
	this.addEventListener('added', function() {
		$this._lastAddedFrame = $this.parent.currentFrame;
		$this._element.attach($('#dom_overlay_container'));
	});
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;



(lib.an_Button = function(options) {
	this._element = new $.an.Button(options);
	this._el = this._element.create();
	var $this = this;
	this.addEventListener('added', function() {
		$this._lastAddedFrame = $this.parent.currentFrame;
		$this._element.attach($('#dom_overlay_container'));
	});
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;



(lib.start = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.comboBox1 = new lib.an_ComboBox({'id': 'comboBox1', 'label':'', 'items':'dummy, dummy, items, 2, label, 0, , , data, 0, , , 3, בחר נושא, 0, חיות בישראל, 1, מדינות באירופה, 2', 'value':'0', 'disabled':false, 'visible':true, 'class':'ui-combobox'});

	this.comboBox1.setTransform(69,2,1,1,0,0,0,50,11);

	this.startBut = new lib.Symbol1();
	this.startBut.parent = this;
	this.startBut.setTransform(-51.7,3.3,0.737,0.605,0,0,0,52.5,17.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.startBut},{t:this.comboBox1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.start, new cjs.Rectangle(-91.1,-9.5,210.6,23), null);


(lib.חלל = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.Tween1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(292.2,13.1);

	this.instance_1 = new lib.Tween2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-267,13.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},410).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:-267},410).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-267.5,-220.5,1119.3,467.4);


(lib.nav = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.butstop = new lib.כפתורעצור();
	this.butstop.parent = this;
	this.butstop.setTransform(-387,-4.8);
	new cjs.ButtonHelper(this.butstop, 0, 1, 2, false, new lib.כפתורעצור(), 3);

	this.odot = new lib.אודות();
	this.odot.parent = this;
	this.odot.setTransform(-436.8,0.3,2.042,2.042,0,0,0,-0.1,0.1);
	new cjs.ButtonHelper(this.odot, 0, 1, 2, false, new lib.אודות(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.odot},{t:this.butstop}]}).wait(1));

	// Layer 2
	this.text = new cjs.Text("מפוצצים בחלל", "24px 'Arial'");
	this.text.textAlign = "right";
	this.text.lineHeight = 29;
	this.text.lineWidth = 134;
	this.text.parent = this;
	this.text.setTransform(443.9,-16.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#211C17").s().p("AhJAEQgHgBgBgGQABgHAIgBICSAIQAHABAAAGQgBAIgHAAg");
	this.shape.setTransform(458.6,-18.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#020202").s().p("AgbAdQgMgMAAgRQABgRALgMQAMgLAPAAQARAAAMAMQALAMAAARQAAARgMALQgMAMgQAAQgQgBgLgLg");
	this.shape_1.setTransform(474.8,-13.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhVAoQgRgBgKgMQgMgMAAgQQABgRALgMQALgLARAAICqACQARABALALQALAMAAARQAAARgMAMQgLALgRAAg");
	this.shape_2.setTransform(461.3,-17.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgnACIAHgCQADgBAEABIAGAAIAMADQAGABAEgDIAAgBIABAAIAKgBIAKgCIAKgCIALgCIgKAEIgKADIgLABIgKACQgFAFgGgBIgDgBIgJgDIgHgCIgGAAIgGACIgFAFIAEgGg");
	this.shape_3.setTransform(463.8,3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F7BD57").s().p("AgOAoQgHgHAAgKIgBgtQAAgKAGgHQAHgGAJgBQAJAAAGAHQAHAGAAAKIABAtQAAAKgGAHQgGAHgKABQgJgBgGgGg");
	this.shape_4.setTransform(462.9,-4.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgIAAQAAgHAIgCQAIABABAIQgBAIgIABQgHAAgBgJg");
	this.shape_5.setTransform(468.3,-6.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgVAIQgIgBgBgHQABgHAIgBIAsABQAHABABAGQgBAIgHAAg");
	this.shape_6.setTransform(469.6,-8.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgOAQQgGgGAAgKQAAgIAFgGQAHgHAIAAQAJAAAGAGQAHAGgBAJQAAAJgFAGQgHAHgIAAQgJAAgGgGg");
	this.shape_7.setTransform(469.3,-6.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgIAAQAAgIAIgBQAIABABAIQAAAIgJABQgHAAgBgJg");
	this.shape_8.setTransform(455.6,-6.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgWAIQgHgBgBgHQABgHAHgBIAtABQAHABABAGQgBAIgHABg");
	this.shape_9.setTransform(456.9,-8.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgOAPQgGgFgBgKQABgIAGgGQAGgHAIAAQAJAAAGAGQAGAGABAJQAAAIgGAHQgGAGgJABQgIAAgHgHg");
	this.shape_10.setTransform(456.6,-6.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFE3A6").s().p("Ag2CNQgbgPgQgaQgQgagBgiIgBhKQgBghAPgcQAPgbAagQQAagRAggBQAfAAAaAQQAbAOAQAbQAQAbABAgIACBLQAAAhgPAbQgPAbgaARQgZARghAAIgCABQgeAAgZgQg");
	this.shape_11.setTransform(463.8,-5.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F7BD57").s().p("AgKAMQgEgFAAgGQgBgGAFgFQAEgFAGAAQAHAAAEAEQAEAFAAAGQAAAGgDAFQgFAFgHAAQgFAAgFgEg");
	this.shape_12.setTransform(453.5,-5.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFE3A6").s().p("AgUAWQgIgIgBgOQABgMAHgJQAJgIAMgBQAMABAIAIQAJAIAAANQABAMgJAJQgIAJgMABQgMgBgJgIg");
	this.shape_13.setTransform(453.4,-5.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F7BD57").s().p("AgKALQgEgEAAgHQgBgFAFgFQAEgEAGgBQAGAAAFAFQAEAEAAAGQAAAGgEAFQgEAEgHABQgGAAgEgFg");
	this.shape_14.setTransform(476.4,-5.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFE3A6").s().p("AgTAVQgJgHgBgNQABgMAIgKQAIgIAMgBQAMABAJAHQAIAJABANQAAAMgIAIQgJAKgMAAQgMAAgIgJg");
	this.shape_15.setTransform(476.2,-6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

	// Layer 1
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("A8HFKIAAqTMA4PAAAIAAKTg");
	this.shape_16.setTransform(-2.6,-5.9,2.724,0.564);

	this.timeline.addTween(cjs.Tween.get(this.shape_16).wait(1));

}).prototype = getMCSymbolPrototype(lib.nav, new cjs.Rectangle(-492.7,-24.5,980.4,38.2), null);


(lib.חלללאזז = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween2("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(474.4,64.8,1.836,1.836,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.חלללאזז, new cjs.Rectangle(-553.5,-364.4,2055.4,858.2), null);


(lib.stopH = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.butstop = new lib.כפתורהמשךבמשחק();
	this.butstop.parent = this;
	this.butstop.setTransform(-7.5,62.5);
	new cjs.ButtonHelper(this.butstop, 0, 1, 2, false, new lib.כפתורהמשךבמשחק(), 3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAxB2IAAhuQAAgqgVgQQgWgQgpAAQggAAgmAFIgEgyQAkgGAwAAQA0AAAdAPQAdAQANAXQAMAWAAApIAAB2gAhrB2IAAh4IA+AAIAAB4g");
	this.shape.setTransform(190.5,-77);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AADB2IAAg1IA5AAIAAgvQAAgtgIgSQgHgTgTAAQgUAAgNAXQgNAVgLA8IgOBOIhBAAIAKgzQALgtAHgVIgnhzIA4AAIANAxQAkg0AwAAQApAAAYAhQAZAhAABJIAABgg");
	this.shape_1.setTransform(161.7,-77);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhmBQQgkgoAAhQIgDhPIA9AAIAAA+IACAjIAAAPQAPAAAMgIQAMgHADgMQAEgNABgeIADgqIA6AAIgDA6QgCAWgCANQgDAMgKANQgJALgTAJQgTAJggADQAFASATAMQASAMAVAAQAlAAAUgWQAUgXAEg9IAGhWIA9AAIgHBZQgFA4gOAbQgNAbgeAUQgfAUgvAAQg+AAgjgog");
	this.shape_2.setTransform(132.4,-76.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAvB2IAAh5QAAgfgNgPQgNgQgjgBQgTABgNACIAAC1Ig+AAIAAjkQArgHArAAQA2AAAcAOQAaAOALAWQAMAWAAAmIAAB9g");
	this.shape_3.setTransform(102.3,-77);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhmChIAAjRIA+AAIAADRgAABBIIAAgqQAAgSAFgMQAFgMANgTIAGgIQAMgQAAgXIAAgdIiQAAIAAg1IDNAAIAAA8QAAAhgDAPQgDAPgJAOIgKAOQgKAOgCAJQgEAIAAALIAAAng");
	this.shape_4.setTransform(75.9,-72.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AhyB2IAAg1IB/AAIAAg9QAAgmgPgPQgQgQgpgBQgXABgeAEIgEgxQAigHAiAAQA/AAAeAaQAeAbAAA5IAABIIAqAAIAAA1g");
	this.shape_5.setTransform(37.5,-77);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AADB2IAAg1IA5AAIAAgvQAAgtgIgSQgHgTgUAAQgTAAgMAXQgOAVgLA8IgOBOIhBAAIAKgzQAKgtAIgVIgnhzIA4AAIAOAxQAjg0AwAAQApAAAYAhQAZAhAABJIAABgg");
	this.shape_6.setTransform(9.4,-77);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AhZB0IAAg1IBnAAIh0izIBDAAIA5BbQALgDADgIQAEgIABgjIACglIA8AAIgCAkIgCAVQAAAKgDAKQgDAKgGAKQgHAKgJAJQgKAHgNAIIAvBKIAAAbg");
	this.shape_7.setTransform(-16.6,-76.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AhyB2IAAg1IB/AAIAAg9QAAgmgPgPQgQgQgpgBQgXABgeAEIgEgxQAigHAiAAQA/AAAeAaQAeAbAAA5IAABIIAqAAIAAA1g");
	this.shape_8.setTransform(-39.8,-77);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAxB2IAAhuQAAgqgVgQQgWgQgpAAQggAAgmAFIgEgyQAkgGAwAAQA0AAAdAPQAdAQANAXQAMAWAAApIAAB2gAhrB2IAAh4IA+AAIAAB4g");
	this.shape_9.setTransform(-79.3,-77);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AhmBQQglgoABhQIgDhPIA9AAIAAA+IACAjIABAPQAPAAALgIQALgHAEgMQADgNACgeIACgqIA7AAIgDA6QgBAWgDANQgDAMgKANQgJALgTAJQgTAJgfADQAEASASAMQASAMAXAAQAkAAAUgWQATgXAFg9IAGhWIA9AAIgIBZQgEA4gOAbQgNAbgeAUQgfAUguAAQg/AAgjgog");
	this.shape_10.setTransform(-109.1,-76.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAxB2IAAhuQAAgqgVgQQgWgQgpAAQggAAgmAFIgEgyQAkgGAwAAQA0AAAdAPQAdAQANAXQAMAWAAApIAAB2gAhrB2IAAh4IA+AAIAAB4g");
	this.shape_11.setTransform(-139.1,-77);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgfBBIAAiBIA/AAIAACBg");
	this.shape_12.setTransform(-159.1,-82);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgfBBIAAiBIA/AAIAACBg");
	this.shape_13.setTransform(-171.4,-82);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAxB2IAAhuQAAgqgVgQQgWgQgpAAQggAAgmAFIgEgyQAkgGAwAAQA0AAAdAPQAdAQANAXQAMAWAAApIAAB2gAhrB2IAAh4IA+AAIAAB4g");
	this.shape_14.setTransform(-191.3,-77);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("EgxYAfBMAAAg+AMBixAAAMAAAA+Ag");
	this.shape_15.setTransform(0.6,-2.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.butstop}]}).wait(1));

	// Layer 2
	this.instance = new lib.חלללאזז();
	this.instance.parent = this;
	this.instance.setTransform(490.4,161,1,1,0,0,0,474.2,64.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0D1138").s().p("EgIRBAJMAAAhtjIQjAAMAAABtjgEgIRgxwIAAuHIPEAAIAAgRIBfAAIAAOYg");
	this.shape_16.setTransform(495.2,140.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.stopH, new cjs.Rectangle(-537.3,-269.8,2055.4,859.9), null);


(lib.odot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 6
	this.myx = new lib.x();
	this.myx.parent = this;
	this.myx.setTransform(-296.9,-179);
	new cjs.ButtonHelper(this.myx, 0, 1, 2, false, new lib.x(), 3);

	this.timeline.addTween(cjs.Tween.get(this.myx).wait(1));

	// Layer 4
	this.instance = new lib.Bitmap5();
	this.instance.parent = this;
	this.instance.setTransform(158,100,0.623,0.623);

	this.instance_1 = new lib.hed();
	this.instance_1.parent = this;
	this.instance_1.setTransform(134.1,-140.5,0.992,1,0,0,180,-2,-1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgEBEIAAgUIAsAAIAAgoQgBgVgBgKQgCgLgFgGQgHgHgJAAQgOAAgJAPQgKAPgHAjIgKAyIgYAAIALg1IAGgYIgVg5IAYAAIAKAeQAGgNAMgJQAMgJAPAAQAPAAALAIQAMAHAFAQQAFAPAAAeIAAA7g");
	this.shape.setTransform(134.9,157.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgwBCIADgWQAMAEANAAQAOAAAJgGQAKgGAFgLQAFgKAAgPQAAgUgLgOQgMgNgUABQgNAAgMADIgDgWQAPgDALAAQAhAAATATQATAUAAAdQAAAUgIAPQgIAQgQAJQgPAJgYAAQgLAAgPgDg");
	this.shape_1.setTransform(121.4,157.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgLBDIAAiFIAYAAIAACFg");
	this.shape_2.setTransform(112.3,157.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgLBdIAAi5IAYAAIAAC5g");
	this.shape_3.setTransform(105.9,159.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AghA9QgPgKgFgOQgGgPAAgaIAAg/IAYAAIAABFQAAAeALAJQALAKANAAQAOAAAIgGQAJgIACgKQADgLAAgRIAAgRQAAgegRAAQgMAAgJAOIgIgNQANgXAVABQASAAAJAOQAJAOAAAaIAAAKQAAAZgFAPQgFAOgOALQgOALgWAAQgTAAgOgKg");
	this.shape_4.setTransform(89.2,157.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgwBCIADgWQAMAEANAAQAOAAAJgGQAKgGAFgLQAFgKAAgPQAAgUgLgOQgMgNgUABQgNAAgMADIgDgWQAPgDALAAQAhAAATATQATAUAAAdQAAAUgIAPQgIAQgQAJQgPAJgYAAQgLAAgPgDg");
	this.shape_5.setTransform(75.3,157.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgfBEIAAgUIAnAAIAAhBQAAgLgCgGQgBgFgFgEQgFgEgIAAQgIAAgHACIgBgUQAIgCAMAAQARAAAJAHQAJAFAEALQADAIAAASIAABWg");
	this.shape_6.setTransform(64.3,157.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgMBDIAAiFIAZAAIAACFg");
	this.shape_7.setTransform(57.1,157.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgDBdIAAgSQAAgQADgJQACgIAHgIIAHgJQAGgIACgGQABgFAAgIIAAgSIhJAAIAAhIIAXAAIAAAzIBLAAIAAAiQAAANgEAJQgCAJgHAJIgGAJQgKAOAAAQIAAAVg");
	this.shape_8.setTransform(47.5,154.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgMBDIAAiFIAZAAIAACFg");
	this.shape_9.setTransform(38.6,157.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAWBEIgJghQgPAAgKATIgIAOIgZAAIALgVQAKgTAMgFQAMgGAJAAIAAgiQAAgLgCgGQgBgFgGgEQgEgEgJAAQgIAAgGACIgCgUQAJgCAMAAQAQAAAKAHQAJAFADALQADAIAAASIAAAoIANAug");
	this.shape_10.setTransform(29.9,157.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgLAjIAAhFIAYAAIAABFg");
	this.shape_11.setTransform(21.9,154.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAjBEIAAhIQAAgPgEgIQgDgJgKgFQgKgFgRAAIgYACIAABwIgZAAIAAiDQAcgEAWAAQAYAAAPAHQAQAHAGAMQAGANAAAWIAABKg");
	this.shape_12.setTransform(5,157.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgLBDIAAiFIAYAAIAACFg");
	this.shape_13.setTransform(-6,157.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgDBdIAAgSQAAgQADgJQACgIAHgIIAHgJQAGgIACgGQABgFAAgIIAAgSIhJAAIAAhIIAXAAIAAAzIBLAAIAAAiQAAANgEAJQgCAJgHAJIgGAJQgLAOAAAQIAAAVg");
	this.shape_14.setTransform(-15.6,154.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgLBDIAAiFIAYAAIAACFg");
	this.shape_15.setTransform(-24.5,157.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgLBdIAAi5IAYAAIAAC5g");
	this.shape_16.setTransform(-30.9,159.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAjBEIAAhDQAAgTgEgJQgFgKgMgEQgLgFgVAAQgRAAgWADIgBgVQAWgDAWAAQApAAAQAPQAQAQAAAhIAABHgAg5BEIAAhLIAZAAIAABLg");
	this.shape_17.setTransform(134,125.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("Ag5A9IAGgVQAMAJAUgBQAUAAAQgMQAPgNABgXQAAgWgNgNQgMgOgTAAQgLAAgLADIAAAYQAAAQAQAAQAHAAADgBIADAQQgHAEgKgBQgRABgIgKQgKgHAAgSIAAgoQAWgGAYgBQAcAAAUASQAUARAAAiQAAAfgUATQgVATgjABQgYgBgPgIg");
	this.shape_18.setTransform(119.2,125.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("Ag0BdIAAh/IAXAAIAAB/gAACApIAAgSQgBgOADgIQADgIAHgKIAIgJQAFgHACgGQACgGAAgJIAAgSIhVAAIAAgUIBtAAIAAAhQAAAOgCAJQgDAJgHAJIgGAJQgLANAAAQIAAAVg");
	this.shape_19.setTransform(105.1,128.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgLBDIAAiFIAXAAIAACFg");
	this.shape_20.setTransform(94.5,125.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgDBdIAAgSQAAgRADgIQADgIAGgIIAIgKQAFgHABgFQACgGAAgIIAAgTIhKAAIAAhHIAYAAIAAA0IBKAAIAAAhQAAANgDAJQgCAIgGAJIgIAKQgKAOAAAPIAAAWg");
	this.shape_21.setTransform(84.9,123.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AghA9QgPgJgFgQQgGgOAAgZIAAg/IAYAAIAABFQAAAdALAKQALAJANAAQAOAAAIgHQAJgGACgLQADgLAAgRIAAgSQAAgdgRAAQgMAAgJANIgIgMQANgWAVAAQASAAAJANQAJAPAAAbIAAAJQAAAZgFAPQgFAPgOAKQgOAKgWAAQgTAAgOgJg");
	this.shape_22.setTransform(71.7,125.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAjBEIAAhDQAAgTgEgJQgFgKgLgEQgMgFgVAAQgRAAgVADIgCgVQAXgDAVAAQApAAAQAPQAQAQABAhIAABHgAg5BEIAAhLIAZAAIAABLg");
	this.shape_23.setTransform(56.1,125.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgDBdIAAgSQAAgRADgIQADgIAGgIIAHgKQAGgHACgFQABgGAAgIIAAgTIhJAAIAAhHIAYAAIAAA0IBKAAIAAAhQAAANgDAJQgDAIgGAJIgHAKQgKAOAAAPIAAAWg");
	this.shape_24.setTransform(35.9,123.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgiA9QgOgJgGgQQgFgOAAgZIAAg/IAYAAIAABFQAAAdALAKQALAJANAAQAOAAAJgHQAIgGADgLQACgLAAgRIAAgSQAAgdgRAAQgMAAgJANIgIgMQANgWAVAAQASAAAJANQAJAPAAAbIAAAJQAAAZgFAPQgFAPgOAKQgOAKgWAAQgTAAgPgJg");
	this.shape_25.setTransform(22.7,125.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgwBBIADgVQAMADANAAQAOAAAJgFQAKgGAFgLQAFgLAAgOQAAgUgLgNQgMgNgUAAQgNAAgMADIgDgVQAPgFALAAQAhAAATAUQATAUAAAdQAAAUgIAQQgIAOgQAKQgPAKgYAAQgLgBgPgEg");
	this.shape_26.setTransform(8.8,125.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AggBEIAAgUIApAAIAAhCQAAgKgCgGQgCgGgFgDQgEgDgKgBQgHABgGABIgCgTQAIgDANAAQAQAAAJAGQAJAGADAKQADAJABASIAABWg");
	this.shape_27.setTransform(-2.3,125.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgLBDIAAiFIAXAAIAACFg");
	this.shape_28.setTransform(-9.5,125.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgDBdIAAgSQAAgRADgIQADgIAGgIIAIgKQAFgHABgFQACgGAAgIIAAgTIhKAAIAAhHIAYAAIAAA0IBKAAIAAAhQAAANgDAJQgCAIgHAJIgHAKQgKAOAAAPIAAAWg");
	this.shape_29.setTransform(-19,123.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgLBDIAAiFIAXAAIAACFg");
	this.shape_30.setTransform(-27.9,125.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AAWBEIgJghQgPAAgKATIgIAOIgZAAIALgVQAKgSAMgGQAMgGAJAAIAAgjQAAgKgCgGQgBgGgGgDQgEgDgJgBQgIABgGABIgCgTQAJgDAMAAQAQAAAKAGQAJAGADAKQADAJAAASIAAApIANAtg");
	this.shape_31.setTransform(-36.6,125.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgMAjIAAhFIAYAAIAABFg");
	this.shape_32.setTransform(-44.7,122.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgMBDIAAiFIAYAAIAACFg");
	this.shape_33.setTransform(-51.1,125.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AhHBBIAFgTQAGADAIgBQAJAAADgDQADgFAAgKIAAhMQgLAAgQACIgCgUQAdgDAegBQAdAAARAGQAQAEAIAOQAJANAAAbIAABHIgYAAIAAhCQAAgTgDgIQgDgJgKgHQgKgFgWAAIgNAAIAABRQAAANgCAGQgCAHgIAEQgHAFgPgBQgMAAgMgDg");
	this.shape_34.setTransform(-63.3,125.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgDBdIAAgSQAAgRADgIQADgIAGgIIAIgKQAFgHACgFQABgGAAgIIAAgTIhKAAIAAhHIAYAAIAAA0IBKAAIAAAhQAAANgDAJQgCAIgHAJIgHAKQgJAOgBAPIAAAWg");
	this.shape_35.setTransform(-83.3,123.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgFBEIAAgUIAsAAIAAgoQAAgVgBgKQgBgKgHgHQgFgGgKgBQgOABgJAPQgKAOgHAjIgKAyIgYAAIALg1IAGgZIgVg3IAYAAIAKAdQAGgNANgJQALgJAPAAQAPAAAMAIQAKAIAGAPQAFAPAAAdIAAA8g");
	this.shape_36.setTransform(-97.2,125.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgLAjIAAhFIAYAAIAABFg");
	this.shape_37.setTransform(-107.8,122.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AAOBDIAAhxIhJAAIAAgUIB3AAIAAAUIgXAAIAABxg");
	this.shape_38.setTransform(-117.6,125.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AAjBEIAAhDQAAgTgEgJQgFgKgLgEQgMgFgVAAQgRAAgVADIgCgVQAXgDAVAAQApAAAQAPQAQAQABAhIAABHgAg5BEIAAhLIAZAAIAABLg");
	this.shape_39.setTransform(-132,125.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgtA0QgRgUAAggQAAgfARgTQARgUAcAAQARAAAOAHQANAIAKAQQAJAQAAAXQAAAUgHAQQgHAQgOAKQgPAJgUAAQgcAAgRgTgAgbgkQgJAPAAAVQAAAYAKAOQAKANAQAAQATAAAJgOQAJgPAAgWQAAgXgKgOQgKgNgRAAQgSAAgJAOg");
	this.shape_40.setTransform(246,31.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("Ag/BEIAAgVIBSAAIAAguQAAgRgEgKQgFgJgKgGQgLgFgXAAIgZABIgCgTQARgDATAAQAjAAARAPQAQAQAAAhIAAAyIAVAAIAAAVg");
	this.shape_41.setTransform(231.5,31.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgMAjIAAhFIAYAAIAABFg");
	this.shape_42.setTransform(221.3,28.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("Ag/BEIAAgVIBSAAIAAguQAAgRgEgKQgFgJgKgGQgLgFgXAAIgZABIgCgTQARgDATAAQAjAAARAPQAQAQAAAhIAAAyIAVAAIAAAVg");
	this.shape_43.setTransform(211,31.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgLBDIAAiFIAXAAIAACFg");
	this.shape_44.setTransform(200.8,31.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AhHBBIAFgTQAGACAIABQAJgBADgDQADgFAAgKIAAhMQgLAAgQACIgCgUQAdgDAegBQAdAAARAGQAQAEAIAOQAJAOAAAaIAABHIgYAAIAAhCQAAgTgDgIQgDgKgKgFQgKgGgWAAIgNAAIAABQQAAAOgCAGQgCAHgIAEQgHAFgPgBQgMAAgMgDg");
	this.shape_45.setTransform(188.5,31.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgDBdIAAgSQAAgQADgJQACgIAHgIIAHgKQAGgHACgFQABgGAAgIIAAgSIhJAAIAAhIIAXAAIAAA0IBLAAIAAAhQAAANgEAJQgCAIgHAKIgGAJQgKANAAAQIAAAWg");
	this.shape_46.setTransform(168.6,29.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgMAjIAAhFIAZAAIAABFg");
	this.shape_47.setTransform(159.7,28.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgEBEIAAgVIAsAAIAAgnQAAgVgCgLQgBgJgGgHQgHgGgJAAQgOgBgJAPQgKAPgHAjIgKAyIgYAAIALg0IAGgZIgVg4IAYAAIAKAdQAGgNANgJQALgJAPAAQAPAAAMAIQALAHAFAQQAFAPAAAdIAAA8g");
	this.shape_48.setTransform(148.2,31.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgMBDIAAiFIAZAAIAACFg");
	this.shape_49.setTransform(137.6,31.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AANBDIAAhxIhIAAIAAgUIB3AAIAAAUIgWAAIAABxg");
	this.shape_50.setTransform(127.8,31.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AAhBDIgzhHQgMAFgBAUIgGAuIgZAAIAGguQADggAXgLIgggsIAeAAIAqA8QAIgFAEgHQADgGABgPIAEgbIAYAAIgCAbQgCASgHAMQgFAKgPAJIAoA5g");
	this.shape_51.setTransform(108.3,31.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgMAjIAAhFIAYAAIAABFg");
	this.shape_52.setTransform(97.4,28.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AggBEIAAgVIApAAIAAhBQAAgKgCgGQgCgGgFgDQgEgEgKABQgHgBgGACIgCgTQAIgDANAAQAQAAAJAGQAJAHADAJQADAKABARIAABWg");
	this.shape_53.setTransform(89.1,31.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AghA9QgPgJgFgQQgGgOAAgZIAAg/IAYAAIAABEQAAAeALAKQALAJANAAQAOAAAIgHQAJgHACgKQADgLAAgRIAAgSQAAgdgRAAQgMAAgJANIgIgMQANgWAVgBQASAAAJAPQAJANAAAbIAAAKQAAAZgFAPQgFAPgOAKQgOAKgWABQgTgBgOgJg");
	this.shape_54.setTransform(77.5,31.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AAeBEIAAhDQAAgRgDgJQgFgJgLgHQgLgFgTAAQgOAAgTACIgBgUQATgDARAAQAoAAAPAPQAQAQABAhIAABHg");
	this.shape_55.setTransform(62.4,31.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AAhBDIgyhHQgNAFgCAUIgFAuIgZAAIAGguQADggAWgLIgegsIAdAAIAqA8QAIgFADgHQAEgGABgPIADgbIAZAAIgCAbQgCASgGAMQgGAKgQAJIApA5g");
	this.shape_56.setTransform(49.5,31.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("Ag0BdIAAh/IAYAAIAAB/gAABApIAAgSQAAgOADgIQACgIAJgKIAHgJQAGgHABgGQACgGAAgJIAAgSIhVAAIAAgUIBtAAIAAAhQAAAOgDAJQgCAJgHAJIgHAJQgKANAAAQIAAAVg");
	this.shape_57.setTransform(34.9,34.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgiA9QgOgJgGgQQgFgOAAgZIAAg/IAYAAIAABEQAAAeALAKQALAJANAAQAOAAAJgHQAIgHADgKQACgLAAgRIAAgSQAAgdgRAAQgMAAgJANIgIgMQANgWAVgBQASAAAJAPQAJANAAAbIAAAKQAAAZgFAPQgFAPgOAKQgOAKgWABQgTgBgPgJg");
	this.shape_58.setTransform(20,31.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgLAjIAAhFIAXAAIAABFg");
	this.shape_59.setTransform(9,28.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("Ag/BEIAAgVIBSAAIAAguQAAgRgEgKQgFgJgKgGQgLgFgXAAIgZABIgCgTQARgDATAAQAjAAARAPQAQAQAAAhIAAAyIAVAAIAAAVg");
	this.shape_60.setTransform(-1.3,31.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgLAjIAAhFIAYAAIAABFg");
	this.shape_61.setTransform(-11.5,28.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgLBDIAAiFIAXAAIAACFg");
	this.shape_62.setTransform(-17.9,31.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AhHBBIAFgTQAGACAIABQAJgBADgDQADgFAAgKIAAhMQgLAAgQACIgCgUQAdgDAegBQAdAAARAGQAQAEAIAOQAJAOAAAaIAABHIgYAAIAAhCQAAgTgDgIQgDgKgKgFQgKgGgWAAIgNAAIAABQQAAAOgCAGQgCAHgIAEQgHAFgPgBQgMAAgMgDg");
	this.shape_63.setTransform(-30.2,31.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AAKBdIAAiQQgHAHgKAJQgLAHgJAEIAAgVQAPgKAMgNQALgMAFgNIAMAAIAAC6g");
	this.shape_64.setTransform(-50.5,29);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AAcBHQgTAZgYgBQgWAAgOgQQgMgSAAgUQAAgjAkgUQgKgOgEgIQgDgKAAgIQAAgSALgMQALgMAQAAQAOAAAKALQAKAMAAARQAAAagcAUIAbAoQAFgKACgPIAUAFQgFAYgJAQQALARANAMIgMASQgMgJgMgRgAglAUQgGAJAAAKQAAAOAIALQAHALANAAQAIAAAIgGQAKgGAFgKIghg0QgPAKgFAJgAgThHQgGAGAAAIQAAAKAIAKIAIAMQAKgJAFgHQADgGAAgIQAAgKgFgGQgEgGgHAAQgIAAgEAGg");
	this.shape_65.setTransform(-68.4,29.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AAhBDIgzhHQgMAFgBAUIgGAuIgZAAIAFguQAEggAXgLIgggsIAeAAIArA8QAHgFAEgHQADgGABgPIAEgbIAYAAIgDAbQgBASgHAMQgFAKgPAJIAoA5g");
	this.shape_66.setTransform(-88.7,31.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgfBEIAAgVIAnAAIAAhBQAAgKgBgGQgCgGgFgDQgFgEgIABQgJgBgGACIgBgTQAIgDAMAAQAQAAAKAGQAJAHADAJQAEAKAAARIAABWg");
	this.shape_67.setTransform(-101.5,31.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgLAjIAAhFIAYAAIAABFg");
	this.shape_68.setTransform(-108.7,28.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgFBEIAAgVIAsAAIAAgnQAAgVgBgLQgBgJgHgHQgFgGgKAAQgOgBgJAPQgKAPgHAjIgKAyIgYAAIALg0IAGgZIgVg4IAYAAIAKAdQAGgNANgJQALgJAPAAQAPAAAMAIQAKAHAGAQQAFAPAAAdIAAA8g");
	this.shape_69.setTransform(-120.2,31.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgvBDIAAgUIBDAAIhJhxIAbAAIAlA7QAJgHAEgIQAEgIAAgOIABgWIAaAAIgCAYQgBAMgCAHQgBAIgIAIQgGAHgPAIIAdAtIAAAOg");
	this.shape_70.setTransform(-134.4,31.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgMAjIAAhFIAYAAIAABFg");
	this.shape_71.setTransform(-143.2,28.4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AAkBEIAAhDQgBgSgFgKQgEgJgMgFQgLgFgVAAQgRAAgWADIgCgUQAYgEAVAAQAqAAAPAPQARAQgBAhIAABHgAg5BEIAAhLIAZAAIAABLg");
	this.shape_72.setTransform(-154.2,31.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgKAVQAFgCADgHQACgFABgMIgKAAIAAgaIAUAAIAAAaQAAAPgEAIQgFAJgHAEg");
	this.shape_73.setTransform(-165.1,38.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AhHBBIAFgTQAGACAIABQAJgBADgDQADgFAAgKIAAhMQgLAAgQACIgCgUQAdgDAegBQAdAAARAGQAQAEAIAOQAJAOAAAaIAABHIgYAAIAAhCQAAgTgDgIQgDgKgKgFQgKgGgWAAIgNAAIAABQQAAAOgCAGQgCAHgIAEQgHAFgPgBQgMAAgMgDg");
	this.shape_74.setTransform(-183,31.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgrA6QgQgMgIgVQgIgVAAgjIgCglIAZAAIABAWQAAAhADANQANAAALgHQALgGAAgTIACgkIAYAAIgDAqIgDARQgCAFgFAGQgEAFgLAFQgLAFgTACQADANAMAIQALAJARgBQAPABALgIQALgHAGgMQAFgMACgUIAFg6IAZAAIgFAyQgDAbgHATQgGASgRALQgRAMgaAAQgYAAgQgLg");
	this.shape_75.setTransform(-199.7,31.8);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("Ag6A1QAXgEAOgEIgXh1IAaAAIASBtQAWgIAFgQQAGgPAAgYIABguIAZAAIgCAjIgCAkQgBAKgFAMQgGAMgKAKQgLAJgUAHQgTAIglAGg");
	this.shape_76.setTransform(-216.3,32.3);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AAMAhIgFgjIAAgeIAVAAIAAAeIgFAjgAgVAhIgGgjIAAgeIAVAAIAAAeIgEAjg");
	this.shape_77.setTransform(-226.3,23.1);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AAjBEIAAhIQAAgPgEgIQgDgJgKgFQgKgFgRAAIgYABIAABxIgZAAIAAiDQAcgEAWAAQAYAAAPAHQAQAIAGALQAGANAAAVIAABLg");
	this.shape_78.setTransform(-237.8,31.6);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("Ag5A9IAGgUQANAHASABQAWAAAPgNQAPgNAAgXQABgWgMgNQgNgNgUAAQgKAAgKACIAAAZQAAAPAPAAQAGAAAFgCIACARQgHAEgKAAQgRgBgJgIQgJgJAAgRIAAgoQAWgHAYAAQAcABAVARQATASAAAhQAAAfgUATQgUAUgkAAQgYAAgPgJg");
	this.shape_79.setTransform(155.3,0.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgLBDIAAiFIAYAAIAACFg");
	this.shape_80.setTransform(144.8,0.2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AhHBAIAFgSQAGADAIAAQAJgBADgEQADgEAAgJIAAhNQgLAAgQACIgCgUQAdgDAeAAQAdAAARAEQAQAFAIAOQAJAOAAAaIAABIIgYAAIAAhDQAAgTgDgJQgDgJgKgGQgKgFgWAAIgNAAIAABRQAAAMgCAHQgCAHgIAEQgHAEgPABQgMAAgMgFg");
	this.shape_81.setTransform(132.6,0.2);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AAjBEIAAhIQAAgPgEgJQgDgIgKgFQgKgFgRAAIgYACIAABwIgZAAIAAiDQAcgEAWAAQAYAAAPAHQAQAIAGALQAGANAAAWIAABKg");
	this.shape_82.setTransform(117.2,0.1);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("Ag/BEIAAgUIBSAAIAAguQAAgSgEgJQgFgKgKgGQgLgFgXAAIgZACIgCgVQARgCATAAQAjAAARAQQAQAQAAAfIAAA0IAVAAIAAAUg");
	this.shape_83.setTransform(90.4,0.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgFBEIAAgUIAsAAIAAgoQAAgVgBgKQgBgLgHgGQgFgHgKAAQgOAAgJAPQgKAPgHAjIgKAyIgYAAIALg1IAGgZIgVg4IAYAAIAKAeQAGgNANgJQALgJAPAAQAPAAAMAIQAKAIAGAPQAFAPAAAeIAAA7g");
	this.shape_84.setTransform(75.1,0.1);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgtA0QgRgUAAggQAAgfARgTQARgUAcAAQARAAAOAHQANAIAKAQQAJAQAAAXQAAAUgHAQQgHAQgOAKQgPAJgUAAQgcAAgRgTgAgbgkQgJAPAAAVQAAAYAKAOQAKANAQAAQATAAAJgOQAJgPAAgWQAAgXgKgOQgKgNgRAAQgSAAgJAOg");
	this.shape_85.setTransform(60.2,0.2);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AAWBEIgJghQgPAAgKATIgIAOIgZAAIALgVQAKgTAMgFQAMgGAJAAIAAgiQAAgLgCgGQgBgGgGgDQgEgEgJAAQgIAAgGACIgCgUQAJgCAMAAQAQAAAKAHQAJAFADALQADAIAAASIAAAoIANAug");
	this.shape_86.setTransform(47.3,0.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AAfBEIAAhCQAAgSgFgJQgDgJgLgHQgMgFgTAAQgOAAgSADIgDgWQAUgCAQAAQAoAAARAQQAQAQAAAfIAABIg");
	this.shape_87.setTransform(35.1,0.1);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AhHBAIAFgSQAGADAIAAQAJgBADgEQADgEAAgJIAAhNQgLAAgQACIgCgUQAdgDAeAAQAdAAARAEQAQAFAIAOQAJAOAAAaIAABIIgYAAIAAhDQAAgTgDgJQgDgJgKgGQgKgFgWAAIgNAAIAABRQAAAMgCAHQgCAHgIAEQgHAEgPABQgMAAgMgFg");
	this.shape_88.setTransform(20.1,0.2);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("Ag5A9IAGgUQANAHASABQAWAAAPgNQAPgNAAgXQABgWgMgNQgNgNgUAAQgKAAgKACIAAAZQAAAPAPAAQAGAAAFgCIACARQgHAEgKAAQgRgBgJgIQgJgJAAgRIAAgoQAWgHAYAAQAcABAVARQATASAAAhQAAAfgUATQgUAUgkAAQgYAAgPgJg");
	this.shape_89.setTransform(-0.4,0.2);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AAeBEIAAhCQAAgSgDgJQgFgJgLgHQgLgFgTAAQgOAAgTADIgBgWQATgCARAAQAoAAAPAQQAQAQABAfIAABIg");
	this.shape_90.setTransform(-15,0.1);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AgLBDIAAiFIAYAAIAACFg");
	this.shape_91.setTransform(-24.1,0.2);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgLAjIAAhFIAXAAIAABFg");
	this.shape_92.setTransform(-30.5,-3.1);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("Ag0BdIAAh/IAYAAIAAB/gAABApIAAgSQABgOACgIQADgIAHgKIAIgJQAFgHACgGQACgGAAgJIAAgSIhVAAIAAgUIBtAAIAAAhQAAAOgCAJQgDAJgHAJIgGAJQgLANAAAQIAAAVg");
	this.shape_93.setTransform(-40.6,2.8);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AghA9QgPgKgFgOQgGgPAAgaIAAg/IAYAAIAABFQAAAeALAJQALAKANAAQAOAAAIgGQAJgIACgKQADgLAAgRIAAgRQAAgegRAAQgMAAgJAOIgIgNQANgXAVABQASgBAJAOQAJAOAAAbIAAAKQAAAZgFAPQgFAOgOALQgOALgWAAQgTAAgOgKg");
	this.shape_94.setTransform(-55.6,0.2);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("Ag/BEIAAgUIBSAAIAAguQAAgSgEgJQgFgKgKgGQgLgFgXAAIgZACIgCgVQARgCATAAQAjAAARAQQAQAQAAAfIAAA0IAVAAIAAAUg");
	this.shape_95.setTransform(-76.4,0.1);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("Ag0BdIAAh/IAXAAIAAB/gAACApIAAgSQgBgOADgIQADgIAHgKIAIgJQAFgHACgGQACgGAAgJIAAgSIhVAAIAAgUIBtAAIAAAhQAAAOgDAJQgCAJgHAJIgGAJQgLANAAAQIAAAVg");
	this.shape_96.setTransform(-90.3,2.8);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AgMBDIAAiFIAYAAIAACFg");
	this.shape_97.setTransform(-100.9,0.2);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AAfBEIAAhCQgBgSgEgJQgDgJgMgHQgLgFgTAAQgNAAgUADIgCgWQAUgCAQAAQAoAAAQAQQARAQgBAfIAABIg");
	this.shape_98.setTransform(-111.4,0.1);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AgtA0QgRgUAAggQAAgfARgTQARgUAcAAQARAAAOAHQANAIAKAQQAJAQAAAXQAAAUgHAQQgHAQgOAKQgPAJgUAAQgcAAgRgTgAgbgkQgJAPAAAVQAAAYAKAOQAKANAQAAQATAAAJgOQAJgPAAgWQAAgXgKgOQgKgNgRAAQgSAAgJAOg");
	this.shape_99.setTransform(-124.9,0.2);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AgMAjIAAhFIAZAAIAABFg");
	this.shape_100.setTransform(-135.5,-3.1);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("Ag6BEIAAiDQAcgEAWAAQAYAAAPAHQAQAIAGALQAGANAAAWIAABKgAghgsIAABcIBEAAIAAg0QAAgPgEgJQgDgIgKgFQgKgFgRAAIgYACg");
	this.shape_101.setTransform(-146.5,0.1);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AgKBEIAAgaIAVAAIAAAagAgKgoIAAgaIAVAAIAAAag");
	this.shape_102.setTransform(-157.2,0.2);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AAgBQIg4hPQgKAKgDAlIgCAgIgpAAIADgiQADgiAIgPQAJgPAOgIIgmg1IAyAAIAtBBQAMgIADgfIACgaIAnAAIgBATQgEAigIAPQgJANgPAKIAxBEg");
	this.shape_103.setTransform(228.7,-70.2);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AgVAtIAAhZIArAAIAABZg");
	this.shape_104.setTransform(215,-73.8);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AhNBJIAJgdQAXAJAVAAQAZAAAQgOQAQgOAAgZQAAgZgNgOQgMgOgXAAIgSABIAAATQABAWARAAIAGAAIAHAZQgLAEgMAAQgMAAgLgDQgKgFgHgKQgIgKABgaIAAgmQAcgIAeAAQApAAAaAWQAYAWAAAkQAAAogbAXQgbAWgrAAQgcAAgdgKg");
	this.shape_105.setTransform(201.8,-70.2);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AgVAtIAAhZIArAAIAABZg");
	this.shape_106.setTransform(188.3,-73.8);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AgVBQIAAifIArAAIAACfg");
	this.shape_107.setTransform(179.9,-70.2);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AgVBvIAAjdIArAAIAADdg");
	this.shape_108.setTransform(171.4,-67.1);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AgVBQIAAifIArAAIAACfg");
	this.shape_109.setTransform(154.4,-70.2);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AhMBJIAIgdQAXAJAVAAQAZAAAQgOQAQgOAAgZQAAgZgNgOQgMgOgXAAIgRABIAAATQgBAWATAAIAFAAIAHAZQgLAEgNAAQgLAAgLgDQgKgFgHgKQgIgKAAgaIAAgmQAdgIAeAAQApAAAZAWQAZAWAAAkQAAAogbAXQgbAWgrAAQgcAAgcgKg");
	this.shape_110.setTransform(141.2,-70.2);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AgVAtIAAhZIArAAIAABZg");
	this.shape_111.setTransform(127.7,-73.8);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AhaBMIAHgbQAJADAHAAQAJAAADgFQADgEAAgNIAAhLQgLAAgVACIgEghQAngFAqAAQAjAAAVAHQAVAGAKAQQALARAAAeIAABWIgrAAIAAhPQAAgegKgJQgKgKgmAAIAABPQAAAVgDAJQgDAJgJAFQgKAGgSAAQgTAAgSgGg");
	this.shape_112.setTransform(112.4,-70.3);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AgVBQIAAifIArAAIAACfg");
	this.shape_113.setTransform(98.4,-70.2);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AAhBRIAAhTQgBgVgIgLQgKgLgXAAQgOAAgJACIAAB8IgqAAIAAicQAdgFAeAAQAmAAASAJQASAKAIAPQAIAQAAAaIAABVg");
	this.shape_114.setTransform(84.7,-70.3);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AgUBRIAAgrIApAAIAAArgAgUgkIAAgsIApAAIAAAsg");
	this.shape_115.setTransform(70,-70.2);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AhZA5QAZgDATgFIACiMIArAAIgGCAQARgHAJgMQAGgKAGgXIAShMIAqAAIgOA5QgHAdgEAKQgGAPgIAMQgVAcg0AQQgfAKgpAGg");
	this.shape_116.setTransform(47.9,-69);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AgKBRIAIgkIAmAAIAHghQAGgegCgNQgCgNgOAAQgOAAgMAPQgMARgPAnIgWA2IgtAAIAPgjQANgeAIgPIgJhPIAnAAIACAiQAegkAiAAQAdAAAMAWQAGAMAAAUQAAASgFAXIgPBCg");
	this.shape_117.setTransform(29.5,-70.3);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AAABRIARhPQACgIAAgHQAAgRgLgHQgKgIgXAAQgOAAgYADIAEghQAWgFAdAAQBIAAAAA0QAAALgDANIgSBVg");
	this.shape_118.setTransform(12.8,-70.3);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AhJBOIANghQAOAFANAAQAYAAAPgOQAQgNAFgXIABgNQAAgRgKgJQgLgKgSAAQgOAAgQAFIACghQARgFAVAAQA2AAARAlQAEAKAAANQAAALgDALQgLAzgtAWQgVAKgeAAQgVAAgQgFg");
	this.shape_119.setTransform(-12.4,-70.2);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AAABRIARhPQACgIAAgHQAAgRgLgHQgKgIgXAAQgOAAgYADIAEghQAWgFAdAAQBIAAAAA0QAAALgDANIgSBVg");
	this.shape_120.setTransform(-27.2,-70.3);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AgKBRIAHgkIAnAAIAHghQAHgegDgNQgCgNgOAAQgOAAgMAPQgMARgQAnIgVA2IgtAAIAPgjQANgeAJgPIgKhPIAmAAIACAiQAfgkAiAAQAcAAAMAWQAHAMAAAUQAAASgFAXIgOBCg");
	this.shape_121.setTransform(-46.1,-70.3);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AgeAtIAThZIArAAIgUBZg");
	this.shape_122.setTransform(-58.4,-73.8);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AgmBQIAiifIArAAIgiCfg");
	this.shape_123.setTransform(-76.2,-70.2);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AAUBQIgmhPQgNAKgLAlIgJAgIgpAAIALgiQAJggANgRQALgOAQgJIgag1IAyAAIAfBBQAOgIAJgfIAIgaIAnAAIgGATQgKAggMARQgKAMgTALIAiBEg");
	this.shape_124.setTransform(-89.6,-70.2);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("AgmBQIAiifIArAAIgjCfg");
	this.shape_125.setTransform(-102.7,-70.2);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("AhWBJIAPgdQAVAJAVAAQAbAAARgOQATgOAGgZIACgRQAAgkgoAAIgRABIgDATIgBAIQAAAOANAAIAGAAIAAAZQgKAEgNAAQgbAAgJgSQgCgEAAgJQAAgKADgNIAIgmQAegIAdAAQArAAAUAWQAPAQAAAYQgBAIgCAKQgIAnggAYQggAWgsAAQgbAAgbgKg");
	this.shape_126.setTransform(-116.6,-70.2);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AgeAtIAThZIArAAIgUBZg");
	this.shape_127.setTransform(-128.6,-73.8);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AAABRIARhPQACgIAAgHQAAgRgLgHQgKgIgXAAQgOAAgYADIAEghQAWgFAdAAQBIAAAAA0QAAALgDANIgSBVg");
	this.shape_128.setTransform(-141.5,-70.3);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("AgKBRIAHgkIAnAAIAHghQAHgegDgNQgCgNgOAAQgOAAgMAPQgMARgQAnIgVA2IgtAAIAPgjQANgeAJgPIgKhPIAnAAIABAiQAfgkAiAAQAcAAANAWQAGAMAAAUQAAASgFAXIgPBCg");
	this.shape_129.setTransform(-169.1,-70.3);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("Ag4BQIAFgUIAIgvIACgPQAFgbAWgOIgsAAIAIgkIBsAAIgGAeQgvAAgHAoIgCAOQgCAdgFAWIgFAYg");
	this.shape_130.setTransform(-182.6,-70.2);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("AAABRIARhPQACgIAAgHQAAgRgLgHQgKgIgXAAQgOAAgYADIAEghQAWgFAdAAQBIAAAAA0QAAALgDANIgSBVg");
	this.shape_131.setTransform(-198.6,-70.3);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("AAWBRIAShTIABgPQAAgKgEgHQgHgLgYAAQgNAAgJACIgaB8IgrAAIAiicQAegFAdAAQBCAAAKAiQACAHAAAJQAAALgDAPIgTBVg");
	this.shape_132.setTransform(-217.1,-70.3);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("AgeAtIAThZIArAAIgUBZg");
	this.shape_133.setTransform(-229.4,-73.8);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("AACBRIAAgkIAoAAIAAghQAAgegGgNQgGgNgMAAQgOAAgJAQQgIAPgIAoIgKA2IgtAAIAHgjQAIgfAFgOIgbhPIAmAAIAKAiQAXgkAiAAQAcAAARAXQARAWAAAyIAABCg");
	this.shape_134.setTransform(81.5,-143.5);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("AhNBJIAJgdQAXAJAVAAQAZAAAQgOQAQgOAAgaQAAgYgNgOQgNgOgWAAIgSACIAAASQABAWARAAIAGAAIAHAZQgLAFgMAAQgNAAgKgFQgKgEgHgKQgIgKABgbIAAglQAcgIAeAAQApAAAaAXQAZAWgBAjQAAAogbAWQgbAXgrAAQgcAAgdgKg");
	this.shape_135.setTransform(63.3,-143.4);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AgVBQIAAifIArAAIAACfg");
	this.shape_136.setTransform(49.8,-143.4);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("Ag9BQIAAgkIBHAAIhQh7IAuAAIAnA+QAHgCADgGQADgFABgYIABgZIApAAIgCAYIgBAPIgCANQgCAHgEAHQgFAHgHAGQgGAFgJAFIAhAzIAAATg");
	this.shape_137.setTransform(37,-143.4);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("Ag9BQIAAgkIBHAAIhQh7IAuAAIAnA+QAHgCADgGQADgFABgYIABgZIApAAIgCAYIgBAPIgCANQgCAHgEAHQgFAHgGAGQgHAFgJAFIAhAzIAAATg");
	this.shape_138.setTransform(21.2,-143.4);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("AgVAtIAAhZIArAAIAABZg");
	this.shape_139.setTransform(9.7,-147);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("AhKBRIAAicQAdgFAeAAQAlAAATAJQASAKAIAPQAIAQAAAaIAABVgAgggrIAABYIBAAAIAAgvQABgVgKgLQgJgLgYAAQgNAAgJACg");
	this.shape_140.setTransform(-3.9,-143.5);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("AhOBRIAAgkIBXAAIAAgrQAAgZgKgLQgLgLgcAAQgQAAgVADIgDghQAYgFAXAAQArAAAVASQAVASAAAoIAAAxIAdAAIAAAkg");
	this.shape_141.setTransform(-30.9,-143.5);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000000").s().p("AAgBRIAAhTQABgVgKgLQgJgLgYAAQgNAAgIACIAAB8IgrAAIAAicQAdgFAeAAQAlAAATAJQATAKAHAPQAIAQAAAaIAABVg");
	this.shape_142.setTransform(-49.5,-143.5);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000000").s().p("AgFBvIAAgdQgBgMAEgJQACgJAKgNIADgFQAJgLAAgQIAAgTIhVAAIAAhiIAqAAIAAA9IBVAAIAAAqQAAAVgCALQgCALgHAJIgGAKQgHAJgCAGQgCAFAAAJIAAAbg");
	this.shape_143.setTransform(-67,-146.5);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000000").s().p("AgFBvIAAgdQgBgMAEgJQACgJAJgNIAFgFQAHgLABgQIAAgTIhVAAIAAhiIAqAAIAAA9IBVAAIAAAqQAAAVgCALQgCALgHAJIgGAKQgGAJgDAGQgCAFAAAJIAAAbg");
	this.shape_144.setTransform(-82.4,-146.5);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FFFFFF").s().p("EgxXAfAMAAAg+AMBiwAAAMAAAA+Ag");
	this.shape_145.setTransform(2,-2.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.odot, new cjs.Rectangle(-314.1,-202,632.2,405), null);


(lib.end = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// כפתורים
	this.play_agine = new lib.an_Button({'id': 'play_agine', 'label':'שחקו שוב', 'disabled':false, 'visible':true, 'class':'ui-button'});

	this.play_agine.setTransform(-174,230.1,1,1,0,0,0,50,11);

	this.end = new lib.an_Button({'id': 'end', 'label':'סיום', 'disabled':false, 'visible':true, 'class':'ui-button'});

	this.end.setTransform(176.1,230.1,1,1,0,0,0,50,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.end},{t:this.play_agine}]}).wait(1));

	// טקסט
	this.num = new cjs.Text("", "bold 28px 'Arial'");
	this.num.name = "num";
	this.num.textAlign = "right";
	this.num.lineHeight = 33;
	this.num.lineWidth = 111;
	this.num.parent = this;
	this.num.setTransform(-322.8,-228.8);

	this.time = new cjs.Text("", "bold 28px 'Arial'");
	this.time.name = "time";
	this.time.textAlign = "right";
	this.time.lineHeight = 33;
	this.time.lineWidth = 111;
	this.time.parent = this;
	this.time.setTransform(-322.8,-181);

	this.noT = new cjs.Text("", "27px 'Arial'");
	this.noT.name = "noT";
	this.noT.textAlign = "center";
	this.noT.lineHeight = 32;
	this.noT.lineWidth = 438;
	this.noT.parent = this;
	this.noT.setTransform(-231.1,-134.6);

	this.yesT = new cjs.Text("", "27px 'Arial'");
	this.yesT.name = "yesT";
	this.yesT.textAlign = "center";
	this.yesT.lineHeight = 32;
	this.yesT.lineWidth = 438;
	this.yesT.parent = this;
	this.yesT.setTransform(226.1,-134.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgsAvIAFgQQAKAGAOABQAQAAAMgKQAMgJAAgTQAAgQgJgLQgKgKgPAAQgIAAgIACIAAATQAAAMAMAAQAFAAADgBIACAMQgFADgIAAQgNAAgHgHQgHgGAAgNIAAgfQARgGATABQAVAAAQANQAPAOAAAZQAAAYgQAPQgQAPgaAAQgTgBgMgGg");
	this.shape.setTransform(430.8,-164.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAXA1IAAg0QAAgMgDgIQgDgHgIgEQgJgFgOAAQgLAAgOACIgCgQQAPgCANgBQAeAAANANQAMAMAAAZIAAA3g");
	this.shape_1.setTransform(419.6,-164.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgJAbIAAg1IASAAIAAA1g");
	this.shape_2.setTransform(412.6,-167.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgaAvQgKgIgFgLQgEgLgBgTIAAgxIATAAIAAA0QAAAYAJAHQAIAIAKAAQALAAAGgGQAHgFABgJQACgHAAgOIAAgNQAAgXgMAAQgKAAgGAKIgHgJQAKgSAQAAQAOABAHAKQAIALgBAVIAAAIQAAASgDAMQgEALgMAIQgKAIgRAAQgPAAgLgHg");
	this.shape_3.setTransform(404.4,-164.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgIAbIAAg1IASAAIAAA1g");
	this.shape_4.setTransform(395.9,-167.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgsA1IAAhlQAVgDARgBQASAAAMAHQAMAFAFAKQAEAIAAARIAAA6gAgZgiIAABHIA0AAIAAgnQAAgMgDgGQgCgHgIgEQgIgEgNAAIgSABg");
	this.shape_5.setTransform(387.5,-164.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AghAsQgMgJgGgQQgHgQAAgbIgBgcIATAAIAAAQQABAaACAKQAKAAAJgFQAIgFAAgPIACgbIARAAIgBAgIgCANQgCAEgEAEQgDAFgIADQgJAEgPABQADALAJAGQAJAGANAAQALAAAIgFQAJgGAEgJQAEgJACgQIAEgsIATAAIgEAmQgCAVgFAOQgGAOgNAJQgMAJgUAAQgSAAgNgJg");
	this.shape_6.setTransform(369,-164.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgCBIIAAgPQAAgMACgHQACgGAFgGIAFgIIAGgJIABgKIAAgPIg4AAIAAg3IATAAIAAAoIA4AAIAAAZQAAALgCAGQgDAHgEAHIgGAHQgHALAAAMIAAARg");
	this.shape_7.setTransform(357.2,-166.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAZA0Igmg3QgJAEgCAPIgEAkIgTAAIAEgkQADgYARgJIgYgiIAXAAIAgAvQAGgEADgFQACgGABgLIADgVIATAAIgCAWQgCANgEAJQgFAIgMAHIAfAsg");
	this.shape_8.setTransform(347.4,-164.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgPA0IAAgRIgCggIAAgLQAAgQANgLIgaAAIAAgQIA9AAIAAANQgPAAgIAJQgIAIAAAPIAAAKIADAhIAAAPg");
	this.shape_9.setTransform(332.4,-164.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgJA0IAAhnIATAAIAABng");
	this.shape_10.setTransform(325.8,-164.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAbA1IAAg0QAAgOgEgHQgDgHgJgFQgJgDgQAAQgNAAgQACIgCgPQASgEAQAAQAgABAMAMQANALAAAaIAAA3gAgrA1IAAg6IASAAIAAA6g");
	this.shape_11.setTransform(317.4,-164.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgIA0IAAhnIASAAIAABng");
	this.shape_12.setTransform(308.8,-164.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgxA1IAAgQIA/AAIAAgkQABgNgEgHQgDgIgIgEQgIgEgSAAIgTABIgCgPQANgCAPgBQAbAAAMANQANAMAAAZIAAAnIAQAAIAAAQg");
	this.shape_13.setTransform(295.4,-164.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgsAvIAFgQQAKAGAOABQAQAAAMgKQAMgJAAgTQAAgQgJgLQgKgKgPAAQgIAAgIACIAAATQAAAMAMAAQAFAAADgBIACAMQgFADgIAAQgNAAgHgHQgHgGAAgNIAAgfQARgGATABQAVAAAQANQAPAOAAAZQAAAYgQAPQgQAPgaAAQgTgBgMgGg");
	this.shape_14.setTransform(284.6,-164.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgsApQARgDALgEIgShZIAUAAIAOBTQARgGAEgMQAEgLABgTIABgjIASAAIgBAbIgBAbQgBAIgFAJQgEAKgHAHQgJAHgPAGQgPAGgdAEg");
	this.shape_15.setTransform(273.2,-164.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgsA1IAAhlQAVgDARgBQASAAAMAHQAMAFAFAKQAEAIAAARIAAA6gAgZgiIAABHIA0AAIAAgnQAAgMgDgGQgCgHgIgEQgIgEgNAAIgSABg");
	this.shape_16.setTransform(262.5,-164.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAbA1IAAg0QAAgOgDgHQgEgHgJgFQgJgDgPAAQgOAAgRACIgBgPQASgEARAAQAfABANAMQAMALAAAaIAAA3gAgsA1IAAg6IATAAIAAA6g");
	this.shape_17.setTransform(245,-164.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAXA1IAAg0QAAgMgDgIQgDgHgIgEQgJgFgOAAQgLAAgOACIgCgQQAPgCANgBQAeAAANANQAMAMAAAZIAAA3g");
	this.shape_18.setTransform(233.3,-164.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAZA0Igmg3QgJAEgCAPIgEAkIgTAAIAEgkQADgYARgJIgYgiIAXAAIAgAvQAGgEADgFQACgGABgLIADgVIATAAIgCAWQgCANgEAJQgFAIgMAHIAfAsg");
	this.shape_19.setTransform(223.3,-164.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AghAsQgMgJgGgQQgGgQAAgbIgBgcIASAAIABAQQAAAaACAKQAKAAAIgFQAJgFAAgPIACgbIARAAIgCAgIgBANQgCAEgEAEQgDAFgJADQgIAEgPABQADALAJAGQAJAGANAAQALAAAIgFQAJgGAEgJQAFgJAAgQIAFgsIASAAIgDAmQgCAVgFAOQgFAOgNAJQgOAJgTAAQgTAAgMgJg");
	this.shape_20.setTransform(210.5,-164.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgJA0IAAhnIASAAIAABng");
	this.shape_21.setTransform(201.1,-164.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgYA1IAAgQIAeAAIAAgyIgBgNQgBgEgEgDQgDgDgIAAIgKABIgBgOQAGgCAJgBQANAAAHAGQAHAEADAIQACAHAAANIAABDg");
	this.shape_22.setTransform(194.7,-164.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAbA1IAAg0QAAgOgDgHQgEgHgJgFQgJgDgPAAQgOAAgRACIgBgPQASgEARAAQAfABANAMQAMALAAAaIAAA3gAgsA1IAAg6IATAAIAAA6g");
	this.shape_23.setTransform(185.6,-164.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgDA1IAAgQIAhAAIAAgeIgBgZQgBgIgEgEQgFgGgHAAQgLAAgHAMQgIAMgFAaIgIAnIgSAAIAIgpIAFgTIgQgrIASAAIAIAXQAEgKAKgIQAJgHALAAQAMABAJAGQAIAGAEAMQAEAMAAAWIAAAug");
	this.shape_24.setTransform(167.7,-164.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgjAoQgMgPAAgZQAAgXAMgQQAOgPAVAAQANAAALAGQAKAGAIAMQAGANAAARQABAQgGAMQgFAMgMAHQgLAIgPAAQgVAAgOgPgAgUgbQgIALABAQQAAATAHAKQAIAKAMAAQAPAAAGgLQAIgLgBgRQAAgSgHgKQgIgKgNAAQgNAAgHALg");
	this.shape_25.setTransform(156.2,-164.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgJA0IAAhnIASAAIAABng");
	this.shape_26.setTransform(148,-164.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgDA1IAAgQIAhAAIAAgeIgBgZQgBgIgEgEQgGgGgHAAQgKAAgHAMQgIAMgFAaIgIAnIgSAAIAIgpIAFgTIgQgrIASAAIAIAXQAEgKAKgIQAJgHALAAQAMABAJAGQAIAGAEAMQAEAMAAAWIAAAug");
	this.shape_27.setTransform(139.2,-164.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgYA1IAAgQIAeAAIAAgyIgBgNQgCgEgDgDQgDgDgHAAIgLABIgCgOQAHgCAJgBQAMAAAIAGQAHAEACAIQADAHAAANIAABDg");
	this.shape_28.setTransform(129.6,-164.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgIAbIAAg1IASAAIAAA1g");
	this.shape_29.setTransform(124,-167.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgsA1IAAhlQAVgDARgBQASAAAMAHQAMAFAFAKQAEAIAAARIAAA6gAgZgiIAABHIA0AAIAAgnQAAgMgDgGQgCgHgIgEQgIgEgNAAIgSABg");
	this.shape_30.setTransform(115.6,-164.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgwA1IAAgQIA/AAIAAgkQAAgNgEgHQgDgIgIgEQgIgEgSAAIgTABIgCgPQANgCAPgBQAbAAAMANQANAMAAAZIAAAnIARAAIAAAQg");
	this.shape_31.setTransform(98.6,-164.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FF0000").s().p("AAAAKQgHANgFAHIgMgIIAQgTIgXgEIAEgOQAQAGAHAEIgCgZIANAAIgCAZQAKgFANgFIAEAOQgMADgMABIARATIgMAIIgNgUg");
	this.shape_32.setTransform(83.7,-170.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgXBJIAAgTQAAgSgCgYIgBgOQAAgYASgNIgoAAIAAghIBhAAIAAAcQgTAAgLAIQgMAKAAASIACANQADAZAAAUIAAAXg");
	this.shape_33.setTransform(-275.6,-162.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AACBJIAAghIAjAAIAAgdQAAgcgEgLQgFgLgMAAQgMAAgIANQgIAOgHAkIgIAxIgqAAIAHgfQAHgcAEgNIgYhIIAiAAIAJAfQAWggAdAAQAbAAAPAUQAPAUAAAtIAAA8g");
	this.shape_34.setTransform(-291.1,-163);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgTBlIAAjJIAnAAIAADJg");
	this.shape_35.setTransform(-303.3,-160.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AglATIAAglIBLAAIAAAlg");
	this.shape_36.setTransform(-311.1,-162.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("Ag3BIIAAggIBAAAIhIhwIAqAAIAjA5QAGgCADgFQACgFABgVIABgYIAlAAIgCAXIAAAMIgCANQgCAHgEAFQgEAHgGAFQgGAFgJAEIAfAvIAAAQg");
	this.shape_37.setTransform(-278,-210.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgTAoIAAhQIAnAAIAABQg");
	this.shape_38.setTransform(-288.4,-213.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgTBIIAAiQIAnAAIAACQg");
	this.shape_39.setTransform(-296.1,-210.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgTBlIAAjJIAnAAIAADJg");
	this.shape_40.setTransform(-303.7,-207.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AglATIAAglIBLAAIAAAlg");
	this.shape_41.setTransform(-311.5,-210.7);

	this.nameGame = new cjs.Text("", "bold 28px 'Arial'");
	this.nameGame.name = "nameGame";
	this.nameGame.textAlign = "right";
	this.nameGame.lineHeight = 33;
	this.nameGame.lineWidth = 336;
	this.nameGame.parent = this;
	this.nameGame.setTransform(192.5,-228.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("Ag1A4QgVgWAAghQAAgiAUgVQAVgVAhAAQAXAAAQAKQAQAJAKARQAKARAAAWQAAAggVAWQgVAWghAAQggAAgVgUgAgageQgIANgBARQAAAUAKAMQAKAMAPAAQAQAAAJgMQALgMgBgUQABgUgLgLQgJgNgQAAQgRAAgJAOg");
	this.shape_42.setTransform(427.7,-210.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgTAoIAAhQIAnAAIAABQg");
	this.shape_43.setTransform(415.2,-213.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgTAoIAAhQIAnAAIAABQg");
	this.shape_44.setTransform(407.6,-213.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AACBJIAAghIAjAAIAAgdQAAgcgEgLQgFgLgMAAQgMAAgIANQgIAOgHAkIgJAxIgoAAIAGgfQAGgcAGgNIgZhIIAjAAIAJAfQAVggAdAAQAaAAAPAUQAQAUAAAtIAAA8g");
	this.shape_45.setTransform(394.5,-210.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AhRBFIAGgZQAJADAGAAQAIAAADgEQACgEAAgMIAAhEQgJAAgUACIgDgdQAkgFAmAAQAfAAASAGQATAFAJAPQAKAPAAAbIAABOIgnAAIAAhIQABgagKgJQgIgIgiAAIAABHQAAATgDAIQgDAIgIAFQgKAFgQAAQgRAAgQgFg");
	this.shape_46.setTransform(376.1,-210.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AhDBJIAAiNQAbgEAbAAQAhAAARAIQARAJAHAOQAHAOAAAXIAABNgAgcgnIAABPIA5AAIAAgqQAAgTgIgKQgIgKgWAAQgLAAgIACg");
	this.shape_47.setTransform(358.9,-210.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AAdBIIgyhHQgJAKgDAgIgCAdIglAAIACgfQADgeAIgNQAIgOAMgHIgigxIAtAAIApA8QALgIACgcIACgYIAkAAIgCASQgDAfgHANQgIAMgOAJIAsA9g");
	this.shape_48.setTransform(334.7,-210.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AhRBFIAGgZQAJADAGAAQAIAAADgEQACgEAAgMIAAhEQgJAAgUACIgDgdQAkgFAmAAQAfAAASAGQATAFAJAPQAKAPAAAbIAABOIgnAAIAAhIQABgagKgJQgJgIghAAIAABHQAAATgDAIQgDAIgIAFQgKAFgPAAQgSAAgQgFg");
	this.shape_49.setTransform(316.2,-210.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AAeBJIAAhEQAAgagNgKQgNgKgaAAQgUAAgXADIgDgeQAWgEAfAAQAgAAASAJQASAKAIAOQAHAOAAAZIAABJgAhCBJIAAhKIAnAAIAABKg");
	this.shape_50.setTransform(291,-210.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AACBJIAAghIAkAAIAAgdQgBgcgFgLQgEgLgMAAQgMAAgIANQgIAOgHAkIgJAxIgoAAIAGgfQAGgcAGgNIgZhIIAjAAIAJAfQAVggAeAAQAZAAAPAUQAQAUAAAtIAAA8g");
	this.shape_51.setTransform(273.1,-210.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("Ag/AxQgXgZAAgwIgBgyIAmAAIAAAnIABAWIAAAJQAKAAAHgEQAHgGACgHQACgHABgUIACgaIAkAAIgCAkQgBAPgCAHQgCAIgFAHQgGAIgLAFQgNAGgTABQADAMALAHQALAIAOAAQAWAAANgPQAMgOADgmIAEg1IAlAAIgEA4QgDAigIARQgJARgTAMQgTANgcAAQgnAAgWgag");
	this.shape_52.setTransform(254.8,-210.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AAdBJIAAhLQAAgTgIgKQgIgKgWAAQgLAAgIACIAABwIgnAAIAAiNQAbgEAbAAQAhAAARAIQARAJAHAOQAHAOAAAXIAABNg");
	this.shape_53.setTransform(236.1,-210.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("Ag/BlIAAiDIAmAAIAACDgAABAsIAAgZQAAgLADgIQACgHAJgMIAEgFQAGgKAAgPIAAgSIhYAAIAAghIB/AAIAAAmQAAAVgCAJQgBAJgGAJIgGAJQgHAIgCAFQgBAFAAAIIAAAXg");
	this.shape_54.setTransform(219.6,-207.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AglATIAAglIBLAAIAAAlg");
	this.shape_55.setTransform(207.4,-210.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.nameGame},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.yesT},{t:this.noT},{t:this.time},{t:this.num}]}).wait(1));

	// Layer 5
	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(1,1,1).p("AAA6AMAAAA0B");
	this.shape_56.setTransform(-0.8,29.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_56).wait(1));

	// Layer 3
	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#0099FF").s().p("EhHYADIIAAmPMCOxAAAIAAGPg");
	this.shape_57.setTransform(-0.3,-119);

	this.timeline.addTween(cjs.Tween.get(this.shape_57).wait(1));

	// Layer 4
	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("EhHYAYyMAAAgxiMCOxAAAMAAAAxig");
	this.shape_58.setTransform(-0.3,37.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_58).wait(1));

	// Layer 1
	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#00CCFF").s().p("EhJrAn3MAAAhPtMCTXAAAMAAABPtg");
	this.shape_59.setTransform(-2.5,1.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_59).wait(1));

	// Layer 7
	this.instance = new lib.חלללאזז();
	this.instance.parent = this;
	this.instance.setTransform(211.1,161,1,1,0,0,0,474.2,64.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#0D1138").s().p("EgIRA+2MAAAhtjIQjAAMAAABtjgEgIRgxgIAAtVIQjAAIAANVg");
	this.shape_60.setTransform(215.9,134);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_60},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.end, new cjs.Rectangle(-816.6,-268.2,2055.4,858.2), null);


// stage content:
(lib.RECOVER_Untitled1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//הבחירה
		var myCoise=0;
		//הסבר בטבלה
		var noName;
		var yesName;
		//המערך
		var quition = new Array();
		//-------------------הכנסת הפריטים למערך-----------------
		function sabject(Coise){
			if(Coise==1){
				quition[0]=["בעלי חיים בישראל","בעלי חיים שגדלים בישראל"];
				quition[1]=["t","דרור הבית",true,false,true];
				quition[2]=["t","בולבול",true,false,true];
				quition[3]=["t","צופית",true,false,true];
				quition[4]=["t","פשוש",true,false,true];
				quition[5]=["t","קוף ממשפחת המרמטיים - טמרין רעמתי מוזהב ראש",false,false,true];
				quition[6]=["t","יחמור פרסי",false,false,true];
				quition[7]=["t","היפופוטם",false,false,true];
				quition[8]=["t","למור קטה",false,false,true];
				quition[9]=["t","חתול",true,false,true];
				quition[10]=["p",lib.animel1,true,false,true];
				
				yesName="בעלי חיים שגודלים בישראל";
				noName="בעלי חיים שלא גודלים בישראל";
			}else if(Coise==2){
				quition[0]=["מדינות באירופה","מדינות שנימצאות באירופה"];
				quition[1]=["t","פריט 1",true,false,true];
				quition[2]=["p","תמונה",false,false,true];
			}
		}
		//בודק עם הערך אמור לחזור
		function trueAndfalse(serch) {
			if (quition[serch][3] == false) {
				return true;
			} else {
				return false;
			}
		}
		//בודק עם עך שאמור לחזור יהיה תשובה נכונה או לא
		function QtrueAndFalse(trueAndFalse, num) {
			if ((num == 0 && trueAndFalse == true) || (num == 1 && trueAndFalse == false)) {
				return true;
			} else {
				//לבדוק אם צריך
				var myFalse = 0;
				for (i = 1; i < quition.length; i++) {
					if (quition[i][2] == false && quition[i][3] == false) {
						myFalse ++;
					}
				}
				if (myFalse == 0) {
					return true;
				} else {
					return false;
				}
			}
		}
		//משנה טקסט לכותרת
		function txtTitel(titel) {
			if (titel.length < 80) {
				return "15pt Arial";
			} else if (titel.length < 140) {
				return "12pt Arial";
			} else {
				return "12pt Arial";
			}
		}
		//משנה טקסט לאסטרוייד
		function txtStar(mytxt) {
			if (mytxt.length < 7) {
				return "25pt Arial";
			} else if (mytxt.length < 40) {
				return "15pt Arial";
			} else {
				return "12pt Arial";
			}
		}
		//משנה גודל תמונה לאסטורייד
		function Scale(circle, content) // פונקציה למציאת היחס אליו נרצה לשנות את התמונה
		{
			var circleBounds = circle.nominalBounds; // גודל המעגל
			var contentBounds = content.nominalBounds; // גודל התמונה
		
			var z; // משתנה אליו נכניס את יחס אורך התמונה ורוחב התמונה
			var shorter; // משתנה שהערך שלו יהיה מה יותר קצר - רוחב התמונה או אורך התמונה - הסיבה זה לחישוב היחס אליו נרצה לשנות את התמונה
			var r = circleBounds.width / 2; // משתנה שמחזיק את יחס המעגל
		
			if (contentBounds.height > contentBounds.width) // בודק האם אורך התמונה גדול יותר מרוחב התמונה
			{
				z = contentBounds.height / contentBounds.width; // משתנה ששומר את יחס אורך התמונה ורוחב התמונה
				shorter = contentBounds.width; // משתנה שמכיל את הצלע הקטנה בתמונה
			} else {
				z = contentBounds.width / contentBounds.height;
				shorter = contentBounds.height;
			}
		
			var newSize = 2 * (Math.sqrt((r * r) / ((z * z) + 1))); // משפט פיתגורס * 2 = אורך הצלע הקטנה שצריך בכדי להכניס את התמונה לעיגול
		
			return ((newSize / shorter) * 0.97); // היחס שצריך להקטין את התמונה המקורית כדי שתכנס בעיגול פחות 3%
			// אפשר לשנות את האחוזים בכדי להתאים יותר טוב את התמונה לעיגול שלך - פשוט לשנות את 0.97
		
		}
		//מספר התשובות הנכונות
		function trueQuntion() {
			var trueQ = 0;
			for (i = 0; i < quition.length; i++) {
				if (quition[i][2] == true && quition[i][3] == false) {
					trueQ++;
				}
			}
			return trueQ;
		}
		//בודק התנגשות
		function intersect(obj1, obj2) {
			var obj1W = obj1.nominalBounds;
			var obj2W = obj2.nominalBounds;
			if (obj1.x + (obj1W.width / 2) <= obj2.x - (obj2W.width / 2)) {
				return false;
			} else if (obj1.y + (obj1W.height / 2) <= obj2.y - (obj2W.height / 2)) {
				return false;
			} else if (obj1.x - (obj1W.width / 2) > obj2.x + (obj2W.width / 2)) {
				return false;
			} else if (obj1.y - (obj1W.height / 2) > obj2.y + (obj2W.height / 2)) {
				return false;
			}
			return true;
		}
		var home = this;
		//-----------ניתן לשינוי
		//מהירות ההתקדמות של האסטרוייד
		var runStar = 10;
		//-----------לא ניתן לשינוי
		//תזוזת הדמות
		var goY = 0;
		//מהירות התזוזה למעלה למלמטה
		//var meirutY = 34;
		var meirutY2 = 10;
		//מהירות תזוזה של היריה
		var shotRun = 15;
		//חיים
		var hp = 1;
		//רנדום התשובה הפריט
		var rundQuition;
		//עצירה
		var puse = false;
		//מסך פתיחה 
		var mystat = true;
		//אודות
		var odotHalonit = false;
		//השניות
		var mytime = 0;
		var mytime2 = 0;
		//המשחק פועל
		var player = true;
		//המשחק לא בפעם הראשונה
		var onePlay = true;
		//התקדמות בבר
		var stopmyhedgo=70;
		//0-------------------מסך התחלה--------------------------------
		start();
		function start() {
			mystart = true;
			home.bacrund2.visible = true;
			var start = new lib.start();
			start.x = 480;
			start.y = 250;
			start.name = "start";
			start.startBut.alpha = 0.3;
			stage.addChild(start);
			$("#dom_overlay_container").on("change", "#comboBox1", start1);
			//הוספת טפרייט ניווט
			var nav = new lib.nav();
			nav.y = 23;
			nav.x = 960 / 2;
			nav.name = "nav";
			stage.addChild(nav);
			nav.butstop.visible = false;
			nav.odot.addEventListener("click", odot);
			nav.butstop.addEventListener("click", myStop);
		}
		//0.1----------------------------הכנסת הערך---------------------
		function start1(evt) {
			myvalue = evt.currentTarget.value;
			var myStart = stage.getChildByName("start");
			if (myvalue == 0) {
				myStart.startBut.alpha = 0.3;
			} else {
				myStart.startBut.alpha = 1;
				myStart.startBut.addEventListener("click", startGame);
				myCoise = myvalue;
				//sabject(myCoise);
		
			}
		}
		//1-----------------התחלת המשחק--------------------------------
		function startGame() {
			player = true;
			mystat = false;
			puse = false;
			home.bacrund2.visible = false;
			sabject(myCoise);
			stage.removeChild(stage.getChildByName("start"));
			//הוספת הדמות
			var myCarecter = new lib.carecter();
			myCarecter.y = 300;
			myCarecter.x = 150;
			myCarecter.name = "carecter";
			stage.addChildAt(myCarecter, 2);
			//הוספת שאלה
			mytaitel();
			//הוספת בר התקדמות
			var bar = new lib.bar();
			bar.y = 560;
			bar.x = 960 / 2;
			bar.name = "bar";
			stage.addChild(bar);
			var hed = new lib.hed();
			hed.y = 560;
			hed.x = 70;
			hed.name = "hed";
			stage.addChild(hed);
			//הוספת כפתור עצירה
			var nav = stage.getChildByName("nav");
			nav.butstop.visible = true;
		
			//הוספת הפונקציות
			window.addEventListener("keydown", go);
			window.addEventListener("keyup", stopMinets);
			window.addEventListener("keydown", shot);
			GoStart();
			//הפעלת זמן
			setInterval(timer, 1000);
			//תזוזת הדמות
			setInterval(goMinets, 50);
		}
		//1.1-------------------------------הוספת השאלה-----------------------
		function mytaitel() {
			var quis = new lib.taitel();
			quis.x = 480;
			quis.y = 58;
			quis.taitelText.text = quition[0][0];
			var txt = "פוצצו את האסטרואידים שעליהם " + quition[0][1] + " " + "והתחמקו מהאחרים";
			quis.quetionText.text = txt;
			quis.quetionText.font = txtTitel(txt);
			quis.name = "quis";
			stage.addChild(quis);
		}
		
		//2---------------תזוזת הדמות----------------------------------
		//window.addEventListener("keydown", go);
		function go(evt) {
			if (evt.keyCode == 38) {
				goY = -meirutY2;
			} else if (evt.keyCode == 40) {
				goY = meirutY2;
			}
			//createjs.Ticker.addEventListener("tick", goMinets);
			//createjs.Ticker.setFPS(meirutY);
		}
		//3----------------------תנוע חלקה וקירות------------------------
		function goMinets() {
			if (player == true) {
				var myCarecter = stage.getChildByName("carecter");
				//תנוע חלקה
				myCarecter.y += goY;
				//קירות
				if (myCarecter.y > 490) {
					myCarecter.y -= meirutY2;
				} else if (myCarecter.y < 210) {
					myCarecter.y += meirutY2;
				}
			}
			/*if (puse == false) {
				mytime++;
				if (mytime == 30) {
					mytime = 0;
					mytime2++;
				}
			}*/
		}
		//4-----------------------במקרה של עצירה------------------------
		//window.addEventListener("keyup", stopMinets);
		function stopMinets(evt) {
			if (evt.keyCode == 38) {
				goY = 0;
			} else if (evt.keyCode == 40) {
				goY = 0;
			}
		}
		
		//5------------------------הפעלת יריה---------------------------
		//window.addEventListener("keydown", shot);
		function shot(evt) {
			var carecter = stage.getChildByName("carecter");
			var star = stage.getChildByName("star");
			//הופעת היריה
			if (evt.keyCode == 32) {
				stopshot(true);
				var shot = new lib.shot1();
				shot.x = carecter.x + 140;
				shot.y = carecter.y + 2;
				shot.name = "shot";
				stage.addChild(shot);
				//5.1-------תזוזה של יריה ופגיע טובה ולא טובה---------------------
				var time = setInterval(function () {
					shot.x += shotRun;
					if (shot.x > 960) {
						stopshot(false);
						stage.removeChild(shot);
						clearInterval(time);
					} else if (intersect(shot, star)) {
						//פגיע באסרוייד
						stopshot(false);
						stage.removeChild(shot);
						clearInterval(time);
						//במקרה של פגיע טובה
						if (quition[rundQuition][2] == true) {
							hp--;
							//הפריט לא יחזור
							quition[rundQuition][3] = true;
							//מתקדם צעד נוסף
							hedgo()
						}
						//במקרה של פגיע לא טובה
						else if (quition[rundQuition][2] == false) {
							quition[rundQuition][4] = false;
						}
					}
		
				}, 10)
			}
		}
		//6------------------עצירת היריה---------------------------------
		function stopshot(TrueAndFalse) {
			if (TrueAndFalse == true) {
				window.removeEventListener("keydown", shot);
			} else if (TrueAndFalse == false) {
				window.addEventListener("keydown", shot);
			}
		}
		//7-------------------- הופעת האסטרוייד והופעת המידע---------------------------
		
		function GoStart() {
			if (puse == false) {
				hp = 1;
				//רנדום
				var rund;
				for (i = 0; i < 235; i++) {
					i = Math.floor((Math.random() * 450));
					rund = i;
				}
				//הופעה בבמה
				var star = new lib.star();
				star.y = rund;
				star.x = 1100;
				star.name = "star";
		
		
				//רנדום של פריט
				var rundTrueAndFalse = Math.floor((Math.random() * 2));
				//alert(rundTrueAndFalse);//בדיקה שהתשובה נכונה או לא
				do {
					do {
						rundQuition = Math.floor((Math.random() * quition.length));
						var myTrue = trueAndfalse(rundQuition);
					} while (myTrue == false);
				} while (QtrueAndFalse(quition[rundQuition][2], rundTrueAndFalse) == false);
				//החדרת המידע לאסטרוייד
				if (quition[rundQuition][0] == "t") {
					//במקרה של טקסט
					star.starText.text = quition[rundQuition][1];
					star.starText.font = txtStar(quition[rundQuition][1]);
				} else if (quition[rundQuition][0] == "p") {
					//במקרה של תמונה
					var picer = new quition[rundQuition][1]();
					var box = new lib.box();
					var godel = Scale(box, picer);
					picer.scaleX = godel;
					picer.scaleY = godel;
					picer.x = 0.5;
					star.addChild(picer);
				}
				stage.addChildAt(star, 1);
				//7.1--------------תזוזה של האסטרוייד והתעלמות מתשובה------------
				var goStar = setInterval(function () {
					//לעצור את ההאסטרוייד
					if (puse == false) {
						star.x -= 1;
					}
					if (star.x < -80) {
		
						//התעלמות מתשובה טובה
						if (quition[rundQuition][2] == true) {
							quition[rundQuition][4] = false;
						}
						else if (quition[rundQuition][2] == false) {
							quition[rundQuition][3] = true;
						}
						stage.removeChild(star);
						clearInterval(goStar);
						GoStart();
		
					} else if (hp < 1) {
						stage.removeChild(star);
						clearInterval(goStar);
						GoStart();
					}
				}, runStar);
			}
		}
		//8-----------------------התקדמות בבר--------------------------
		function hedgo() {
			var myhed = stage.getChildByName("hed");
			var sumTrue = 0;
			for (i = 0; i < quition.length; i++) {
				if (quition[i][2] == true) {
					sumTrue++;
				}
			}
			var go = 820 / sumTrue;
			stopmyhedgo+=go;
			//myhed.x += go;
			var myhedgo=setInterval(function(){
				myhed.x+=3;
				if(myhed.x>stopmyhedgo){
					clearInterval(myhedgo);
				}
			},80);
			//סיום המשחק
			if (trueQuntion() == 0) {
				puse = true;
				end();
			}
		}
		//9------------------------אודות-------------------------------
		function odot() {
			if (odotHalonit == false) {
				odotHalonit = true;
				var odot = new lib.odot();
				odot.x = 960 / 2;
				odot.y = 590 / 2 + 5;
				odot.name = "odot";
				stage.addChild(odot);
				odot.myx.addEventListener("click", odotX);
				//במקרה שזה קורה במסך פתיחה
				if (mystat == true) {
					var start = stage.getChildByName("start");
					//start.visible = false;
					stage.removeChild(start);
				}
			} else {
				odotHalonit = false;
				var myodot = stage.getChildByName("odot");
				stage.removeChild(myodot);
				//במקרה שזה קורה במסך פתיחה
				if (mystat == true) {
					var start = new lib.start();
					start.x = 480;
					start.y = 250;
					start.name = "start";
					start.startBut.alpha = 0.3;
					stage.addChild(start);
				}
			}
		}
		//10---------------------------האיקס באודות--------------------
		function odotX() {
			odot();
		
		}
		//11-------------------------עצירה-----------------------------
		function myStop() {
			var but = stage.getChildByName("nav");
			if (puse == false) {
				puse = true;
				var myStop = new lib.stopH();
				myStop.x = 960 / 2;
				myStop.y = 590 / 2 + 5;
				myStop.name = "stop";
				stage.addChild(myStop);
				myStop.butstop.addEventListener("click", myStop2);
				but.butstop.visible = false;
			} else {
				var myStop = stage.getChildByName("stop");
				stage.removeChild(myStop);
				puse = false;
				but.butstop.visible = true;
			}
		}
		//12----------------------------לסגור עצירה----------------------
		function myStop2() {
			myStop();
		}
		//13--------------------------משוב מסכם-------------------------
		function end() {
			//הופעת החלונית
			var myEnd = new lib.end();
			myEnd.x = 960 / 2;
			myEnd.y = 590 / 2 + 5;
			myEnd.name = "end";
			stage.addChild(myEnd);
			//העלמות גפתור עצור
			var nav = stage.getChildByName("nav");
			nav.butstop.visible = false;
			//החדרת התוכן לטבלה
			//שם המשחק
			myEnd.nameGame.text = quition[0][0];
			//עמודות בטבלה
			myEnd.yesT.text = yesName;
			myEnd.noT.text = noName;
			//זמן המשחק
			myEnd.time.text = mytime;
			if (mytime2 < 10) {
				myEnd.time.text = "0" + mytime2 + ":";
			} else {
				myEnd.time.text = mytime2 + ":";
			} if (mytime < 10) {
				myEnd.time.text += "0" + mytime;
			} else {
				myEnd.time.text += mytime;
			}
			//ציון
			var yourFalse = 0;
			for (i = 1; i < quition.length; i++) {
				if (quition[i][4] == false) {
					yourFalse++;
				}
			}
			var num = ((1 - (yourFalse / (quition.length - 1))) * 100);
			myEnd.num.text = Math.floor(num);
			//הופעת האובייקטים על הבמה
			var yesX = 750;
			var yesY = 200;
			var noX = 100;
			var noY = 200;
			for (i = 1; i < quition.length; i++) {
				if (quition[i][0] == "t") {
					var object = new createjs.Text();
					object.font = "13pt Arial";
					object.color = "Blak";
					object.textAlign = "rtl";
					object.name = "object" + i;
					object.text = quition[i][1];
					if (quition[i][2] == false) {
						object.x = noX;
						object.y = noY;
						//משוב לאי הצלחה
						if (quition[i][4] == false) {
							var noGood = new lib.no();
							noGood.x = noX + 100;
							noGood.y = noY + 10;
							noGood.name = "no";
							stage.addChild(noGood)
						}
						noY += 30;
						stage.addChild(object);
					} else {
						object.x = yesX;
						object.y = yesY;
						//משוב לאי הצלחה
						if (quition[i][4] == false) {
							var noGood = new lib.no();
							noGood.x = yesX + 100;
							noGood.y = yesY + 10;
							noGood.name = "no";
							stage.addChild(noGood)
						}
						yesY += 30;
						stage.addChild(object);
					}
		
				} else if (quition[i][0] == "p") {
					var object = new quition[i][1]();
					var box = new lib.box();
					var godel = Scale(box, object);
					object.scaleX = godel;
					object.scaleY = godel;
					if (quition[i][2] == false) {
						object.x = noX;
						object.y = noY + 50;
						//משוב לאי הצלחה
						if (quition[i][4] == false) {
							var noGood = new lib.no();
							noGood.x = noX + 100;
							noGood.y = noY + 50;
							noGood.name = "no";
							stage.addChild(noGood)
						}
						noY += 200;
						stage.addChild(object);
					} else {
						object.x = yesX;
						object.y = yesY + 50;
						//משוב לאי הצלחה
						if (quition[i][4] == false) {
							var noGood = new lib.no();
							noGood.x = yesX + 100;
							noGood.y = yesY + 50;
							noGood.name = "no";
							stage.addChild(noGood)
						}
						yesY += 200;
						object.name = "object" + i;
						stage.addChild(object);
					}
				}
		
			}
			//הפעלת הכפתורים
			$("#dom_overlay_container").on("click", "#end", endForOp);
			$("#dom_overlay_container").on("click", "#play_agine", playAgine);
		
		}
		//14--------------------------חישוב זמן-------------------------
		function timer() {
			if (puse == false) {
				mytime++;
				if (mytime == 30) {
					mytime = 0;
					mytime2++;
				}
			}
		}
		//15------------------------למחוק הכל-------------------------
		function removeAll() {
			player = false;
			var end = stage.getChildByName("end");
			var no = stage.getChildByName("no");
			var carecter = stage.getChildByName("carecter");
			var hed = stage.getChildByName("hed");
			var bar = stage.getChildByName("bar");
			var quis = stage.getChildByName("quis");
			var nav = stage.getChildByName("nav");
			stage.removeChild(nav);
			stage.removeChild(end);
			stage.removeChild(no);
			stage.removeChild(carecter);
			stage.removeChild(hed);
			stage.removeChild(bar);
			stage.removeChild(quis);
			for (i = 1; i < quition.length; i++) {
				var object = stage.getChildByName("object" + i);
				stage.removeChild(object);
			}
			mytime = 0;
			mytime2 = 0;
		}
		//16-------------------------------משחק חדש--------------------
		function endForOp() {
			start();
			removeAll();
		}
		//17-----------------------------שחק שוב-------------------
		function playAgine() {
			removeAll();
			var nav = new lib.nav();
			nav.y = 23;
			nav.x = 960 / 2;
			nav.name = "nav";
			stage.addChild(nav);
			nav.butstop.visible = false;
			nav.odot.addEventListener("click", odot);
			nav.butstop.addEventListener("click", myStop);
			sabject(myCoise);
			startGame();
		}
		/*
		תוכן עניינים
		
		0-מסך התחלה
		0.1-הכנסת הערך
		1-התחלת משחק
		1.1-הוספת שאלה
		2-תזוזת הדמות
		3-תנוע חלקה וקירות
		4-במקרה של עצירה
		5-הפעלת יריה
		5.1-תזוזה של יריה ופגיע טובה ולא טובה
		6-עצירת היריה
		7-הופעת האסטרוייד
		7.1-תזוזה של האסטרוייד והתעלמות מתשובה
		8-התקדמות בבר
		9-אודות
		10-האיקס באודות
		11-עצירה 
		12-לסגור עצירה
		13-משוב מסכם
		14-חישוב זמן
		15-למחוק הכל
		16-משחק חדש
		17-שחקו שוב
		
		מה חסר לי
		-במקרה של פגיע בדמות 
		-אנימציה של פיצוץ
		-תיקון כתב
		-תיקון עיצובי
		
		שאלות
		ליינק באודות
		איך להתחיל את הטקסט בצד ימין בצורה דינאמית
		
		
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// רקע בזמן עצירה
	this.bacrund2 = new lib.חלללאזז();
	this.bacrund2.parent = this;
	this.bacrund2.setTransform(515.2,275.2,1,1,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.bacrund2).wait(1));

	// רקע
	this.bacrund = new lib.חלל();
	this.bacrund.parent = this;
	this.bacrund.setTransform(461.3,313.8,1.734,1.734,0,0,0,3.1,-2.1);

	this.timeline.addTween(cjs.Tween.get(this.bacrund).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(441.2,205.3,2055.4,858.2);
// library properties:
lib.properties = {
	width: 960,
	height: 590,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/RECOVER_Untitled_1_atlas_.png", id:"RECOVER_Untitled_1_atlas_"},
		{src:"https://code.jquery.com/jquery-2.2.4.min.js", id:"lib/jquery-2.2.4.min.js"},
		{src:"components/sdk/anwidget.js", id:"sdk/anwidget.js"},
		{src:"components/ui/src/combobox.js", id:"an.ComboBox"},
		{src:"components/ui/src/button.js", id:"an.Button"}
	],
	preloads: []
};


function _updateVisibility(evt) {
	if((this.getStage() == null || this._off || this._lastAddedFrame != this.parent.currentFrame) && this._element) {
		this._element.detach();
		stage.removeEventListener('drawstart', this._updateVisibilityCbk);
		this._updateVisibilityCbk = false;
	}
}
function _handleDrawEnd(evt) {
	var props = this.getConcatenatedDisplayProps(this._props), mat = props.matrix;
	var tx1 = mat.decompose(); var sx = tx1.scaleX; var sy = tx1.scaleY;
	var dp = window.devicePixelRatio || 1; var w = this.nominalBounds.width * sx; var h = this.nominalBounds.height * sy;
	mat.tx/=dp;mat.ty/=dp; mat.a/=(dp*sx);mat.b/=(dp*sx);mat.c/=(dp*sy);mat.d/=(dp*sy);
	this._element.setProperty('transform-origin', this.regX + 'px ' + this.regY + 'px');
	var x = (mat.tx + this.regX*mat.a + this.regY*mat.c - this.regX);
	var y = (mat.ty + this.regX*mat.b + this.regY*mat.d - this.regY);
	var tx = 'matrix(' + mat.a + ',' + mat.b + ',' + mat.c + ',' + mat.d + ',' + x + ',' + y + ')';
	this._element.setProperty('transform', tx);
	this._element.setProperty('width', w);
	this._element.setProperty('height', h);
	this._element.update();
}

function _tick(evt) {
	var stage = this.getStage();
	stage&&stage.on('drawend', this._handleDrawEnd, this, true);
	if(!this._updateVisibilityCbk) {
		this._updateVisibilityCbk = stage.on('drawstart', this._updateVisibility, this, false);
	}
}


})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;