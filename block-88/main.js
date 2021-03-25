var lib, canvas, mcGame, mcMenu, stage, mcLine, coordList = [];
var mcContainer, rootX, rootY, spaceX, spaceY;
var isDownBlock = false, arrBlock = [], curLevel;
var spBlock = 50;
var dkw = 35;
var dkh = 40;

var level1 = {
    "map":
    [
        [
            [0,0,4,4,4,0,0,0],
            [0,0,3,3,3,0,0,0],
            [0,0,3,3,3,0,0,0],
            [0,0,3,3,3,0,0,0],
            [0,0,-1,-1,-1,0,0,0],
            [0,0,6,6,6,0,0,0],
            [0,0,6,6,2,0,0,0],
            [0,0,6,6,2,0,0,0],
        ],
        [
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [3,3,-1,3,3,3,3,3],
            [3,3,-1,3,3,3,3,3],
            [6,6,-1,6,6,6,6,6],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
        ],
        [
            [0,0,0,4,4,0,0,0],
            [0,0,0,3,3,0,0,0],
            [0,0,0,3,3,0,0,0],
            [3,3,3,-1,-1,3,3,3],
            [6,6,6,-1,-1,6,6,6],
            [0,0,0,6,6,0,0,0],
            [0,0,0,6,2,0,0,0],
            [0,0,0,6,2,0,0,0],
        ]
    ],
    "step":
    [
        {
            "pos": 1,
            "block":[[1,1,1]],
            "color": 1,
            "remove": true,
            "eff":"mcCool"
        },
        {
            "pos": 1,
            "block":[
                [1],
                [1],
                [1]
            ],
            "color": 6,
            "scale": 0.4,
            "remove": true,
            "eff":"mcPerfect"
        },
        {
            "pos": 1,
            "block":[[1,1],[1,1]],
            "color": 3,
            "remove": true,
            "eff":"mcExcellent"
        }
    ]
}

var level2 = {
    "map":
    [
        [
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [4,4,4,2,2,0,0,0],
            [4,4,4,2,-1,0,0,0],
            [4,4,4,-1,-1,-1,0,0],
        ],
        [
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [4,4,4,2,2,-1,0,0],
            [4,4,4,2,1,-1,-1,0],
            [4,4,4,1,1,1,-1,0],
        ],
        [
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,-1,-1,0],
            [4,4,4,2,2,5,-1,0],
            [4,4,4,2,1,5,5,0],
            [4,4,4,1,1,1,5,0],
        ],
        [
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [-1,-1,-1,-1,-1,3,3,0],
            [4,4,4,2,2,5,3,0],
            [4,4,4,2,1,5,5,0],
            [4,4,4,1,1,1,5,0],
        ],
        [
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [2,2,2,2,2,3,3,-1],
            [4,4,4,2,2,5,3,-1],
            [4,4,4,2,1,5,5,-1],
            [4,4,4,1,1,1,5,-1],
        ],
        [
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [2,2,2,2,2,3,3,5],
            [4,4,4,2,2,5,3,5],
            [4,4,4,2,1,5,5,5],
            [4,4,4,1,1,1,5,5],
        ],
    ],
    "step":
    [
        {
            "pos": 1,
            "block":[[0,1],[1,1,1]],
            "color": 1,
            "remove": false,
        },
        {
            "pos": 1,
            "block":[[1],[1,1],[0,1]],
            "color": 5,
            "scale": 0.5,
            "remove": false,
        },
        {
            "pos": 1,
            "block":[[1,1],[0,1]],
            "color": 3,
            "remove": false,
        },
        {
            "pos": 1,
            "block":[[1,1,1,1,1]],
            "color": 2,
            "remove": false,
        },
        {
            "pos": 0,
            "block":[ [1],[1],[1],[1],[1]],
            "color": 5,
            "scale": 0.2,
            "remove": true,
            "eff":"mcExcellent"
        }
    ]
}


var level3 = {
    "map":
    [
        [
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [5,1,1,1,0,3,3,3],
            [4,4,4,1,0,0,0,3],
            [4,4,4,1,0,0,0,3],
            [4,4,4,1,0,-1,-1,-1],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
        ],
        [
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [5,1,1,1,0,3,3,3],
            [4,4,4,1,0,-1,-1,3],
            [4,4,4,1,0,-1,-1,3],
            [4,4,4,1,0,2,2,2],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
        ],
        [
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [5,1,1,1,-1,3,3,3],
            [4,4,4,1,-1,5,5,3],
            [4,4,4,1,-1,5,5,3],
            [4,4,4,1,-1,2,2,2],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
        ],
        [
            [0,0,2,2,2,2,2,4],
            [5,4,4,4,0,0,0,4],
            [0,0,0,0,0,2,2,4],
            [0,0,0,0,0,-1,-1,-1],
            [0,0,0,6,6,6,5,0],
            [0,0,0,2,2,3,5,0],
            [0,0,0,2,2,3,5,0],
            [0,0,2,2,2,2,5,0],
        ],
        [
            [0,0,-2,-2,-2,-2,2,-4],
            [5,4,4,4,-1,-1,-1,-4],
            [0,0,0,0,0,-2,2,-4],
            [0,0,0,0,0,-2,2,-2],
            [0,0,0,-6,-6,-6,5,0],
            [0,0,0,-2,-2,-3,5,0],
            [0,0,0,-2,-2,-3,5,0],
            [0,0,-2,-2,-2,-2,5,0],
        ],
        [
            [0,0,-2,2,2,2,0,-4],
            [0,0,-1,-1,-1,0,0,0],
            [0,0,-1,-1,-1,2,0,-4],
            [0,0,-1,-1,-1,2,0,-2],
            [0,0,0,6,6,6,0,0],
            [0,0,0,2,2,3,0,0],
            [0,0,0,2,2,3,0,0],
            [0,0,-2,2,2,2,0,0],
        ]
    ],
    "step":
    [
        {
            "pos": 1,
            "block":[[1,1, 1]],
            "color": 2,
            "remove": false,
        },
        {
            "pos": 1,
            "block":[[1,1],[1,1]],
            "color": 5,
            "remove": false,
        },
        {
            "pos": 1,
            "block":[[1],[1],[1],[1]],
            "color": 3,
            "scale": 0.3,
            "eff":"mcExcellent",
            "remove": true,
        },
        {
            "pos": 1,
            "block":[[1,1,1]],
            "color": 2,
            "scale": 0.4,
            "remove": false,
        },
        {
            "pos": 1,
            "block":[[1,1,1]],
            "color": 1,
            "scale": 0.5,
            "remove": true,
            "eff":"mcCool",
        },
        {
            "pos": 1,
            "block":[[1,1,1],[1,1,1],[1,1,1]],
            "color": 4,
            "scale": 0.3,
            "remove": true,
            "eff":"mcPerfect"
        },
    ]
}



function showGame(_lib, _canvas, _mcGame, _mcMenu, _stage){
    createjs.Touch.enable(_stage, false, true);
    _stage.preventSelection = false
    this.stage = _stage;
    this.lib = _lib;
    this.canvas = _canvas;
    this.mcGame = _mcGame;
    this.mcMenu = _mcMenu;
    

    mcGame.visible = true;
    mcMenu.visible = false;
    mcGame.btnInstall.addEventListener("click", openGame);   
    mcGame.mcHand.mouseEnabled = false;
    mcGame.mcHand.mou = false;

    this.mcContainer = mcGame.mcContainer;
    this.rootX = this.mcContainer.mcBlock1.x;
    this.rootY = this.mcContainer.mcBlock1.y; 
    this.spaceX = this.mcContainer.mcBlock2.x - this.mcContainer.mcBlock1.x;
    this.spaceY = this.mcContainer.mcBlock3.y - this.mcContainer.mcBlock1.y;
    this.blockWidth = 35;
    this.blockHeight = 35;
    
    this.mcContainer.removeChild(this.mcContainer.mcBlock1);
    this.mcContainer.removeChild(this.mcContainer.mcBlock2);
    this.mcContainer.removeChild(this.mcContainer.mcBlock3);

    this.mcContainer.mcBlock1._off = true;
    this.mcContainer.mcBlock2._off = true;
    this.mcContainer.mcBlock3._off = true;

    this.curStep = 0;
    var arrLevel = [this.level1, this.level2, this.level3];
    var rd = Math.floor(Math.random() * 3); 

    this.initgame(arrLevel[rd]);

    if(this.detectMobile()){
        canvas.addEventListener("touchmove",onMouseMove.bind(this));
        canvas.addEventListener("touchend", onMouseUp.bind(this));
    }else{
        canvas.addEventListener("mousemove", onMouseMove.bind(this));
        canvas.addEventListener("mouseup", onMouseUp.bind(this));
    }

    this.score = 0;
    this.curScore = 0;

    this.mcGame.txtBest.m1.gotoAndStop(9);
    this.mcGame.txtBest.m2.gotoAndStop(9);
    this.mcGame.txtBest.m3.gotoAndStop(9);
    this.mcGame.txtBest.m4.gotoAndStop(9);

    this.setNum(this.mcGame.txtScore.m1, 0, true);
    this.setNum(this.mcGame.txtScore.m2, 0, true);
    this.setNum(this.mcGame.txtScore.m3, 0, true);
    this.setNum(this.mcGame.txtScore.m4, 0, false);

    setInterval(this.tick, 10);
}

function tick(){
    if(this.curScore < this.score) {
        this.curScore++;
        var s = this.curScore.toString();
        if(s.length < 2) s = "000" + s;
        else if(s.length < 3) s = "00" + s;
        else if(s.length < 4) s = "0" + s;

        this.setNum(this.mcGame.txtScore.m1, parseInt(s[0]), true);
        this.setNum(this.mcGame.txtScore.m2, parseInt(s[1]), true);
        this.setNum(this.mcGame.txtScore.m3, parseInt(s[2]), true);
        this.setNum(this.mcGame.txtScore.m4, parseInt(s[3]), false);
       

        if(s[0] === '0') this.mcGame.txtScore.m1.vi
    }
}

function setNum(mc, num, isCheck){
    if(num === 0 && isCheck) mc.visible = false;
    else{
        mc.visible = true;
        mc.gotoAndStop(num);
    }
}

function initgame(level) {
    this.curLevel = level;
    this.createMap(level.map[curStep]);
    this.createPosBlock(level.map[curStep], curStep);
    this.createChooseBlock(level.step[curStep]);
    this.showHand(level.step[curStep])
}

function createChooseBlock(step){
    if(this.ctn){
        if(this.ctn.parent) this.ctn.parent.removeChild(this.ctn);
        this.ctn.removeAllChildren();
    }
    this.ctn = new createjs.MovieClip();
    this.lenW = 0;
    this.lenH = step.block.length;
    for(var i=0;i<step.block.length;i++){
        if(lenW < step.block[i].length) lenW = step.block[i].length;
        for(var j=0;j<step.block[i].length;j++){
            if(step.block[i][j] === 0) continue;
            var block = new lib.mcBlock();
            block._off = false;
            block.x = spaceX * j;
            block.y = spaceY * i;
            
            block.name = "block_" + i + "_" + j;
            block.gotoAndStop(step.color);
            ctn.addChild(block);
        }
    }
    this.ctn._off = false;
    ctn.regX = (lenW * this.spaceX)/2;
    ctn.regY = (lenH * this.spaceY)/2;
    this.ctn.scale = (step.scale === undefined)?0.6:step.scale;

    lenW = (lenW > 3) ? lenW : 3;

    this.mcGame.ctnChooseBlock.addChild(ctn);
    switch(step.pos){
        case 0: this.ctn.x = 10 + (lenW * this.spaceX)/2; break;
        case 1: this.ctn.x = 320/2; break;
        case 2: this.ctn.x = 320 - 10 - (lenW * this.spaceX) /2; break;
    }
    this.ctn.y = 415;
    this.ctn.addEventListener("mousedown", onMouseDown.bind(this));
}

function onTouchStart(e){
}

function onMouseDown(e){
    this.isDownBlock = true;
    this.ctn.rootX = this.ctn.x;
    this.ctn.rootY = this.ctn.y;
 
    this.stx = this.mcGame.globalToLocal(e.stageX, e.stageY).x;
    this.sty = this.mcGame.globalToLocal(e.stageX, e.stageY).y;
    this.ctn.scale = 1;
    mcGame.mcHand.visible = false;
    TweenMax.killAll();
    visibleChooseBlock();
}


function onMouseMove(e){
    if(!this.isDownBlock) return;

    var mx = this.mcGame.globalToLocal(this.stage.mouseX, this.stage.mouseY).x;
    var my = this.mcGame.globalToLocal(this.stage.mouseX, this.stage.mouseY).y;

    var sx = this.stx - mx;//this.stage.stageX;
    var sy = this.sty - my;

    if(this.ctn){
        this.ctn.x = this.ctn.rootX - sx;
        this.ctn.y = this.ctn.rootY - spBlock - sy;
    }
   
    var isChangeColor = false;
    for(var i=0;i<this.posBlock.length;i++) {
        if(mx >= this.posBlock[i].x + dkw && my >= this.posBlock[i].y + spBlock +dkh && mx <= this.posBlock[i].width + dkw  && my <= this.posBlock[i].height + spBlock +dkh ){
            if(this.curLevel.step[this.curStep].remove){
                this.updateColorAllBlock(this.curLevel.step[this.curStep].color);
                isChangeColor = true;
                break;
            }
        }
    }
    if(isChangeColor === false){
        this.updateColorAllBlock();
    }
}



function onMouseUp(e){
    if(!this.isDownBlock) return;
    this.isDownBlock = false;

    var mx = this.mcGame.globalToLocal(this.stage.mouseX, this.stage.mouseY).x;
    var my = this.mcGame.globalToLocal(this.stage.mouseX, this.stage.mouseY).y;

    var isTrue = false;
    for(var i=0;i<this.posBlock.length;i++) {
        if(mx >= this.posBlock[i].x + dkw && my >= this.posBlock[i].y + spBlock +dkh && mx <= this.posBlock[i].width + dkw  && my <= this.posBlock[i].height + spBlock +dkh ){
            isTrue = true;
            break;
        }
    }

    if(!isTrue){
        var scale = (this.curLevel.step[curStep].scale)?this.curLevel.step[curStep].scale : 0.6;
        TweenMax.to(this.ctn, 0.2, {x: this.ctn.rootX, y: this.ctn.rootY, scale: scale, onComplete: function(){
            this.createPosBlock(this.curLevel.map[curStep], curStep);
            this.showHand(this.curLevel.step[curStep]);
        }.bind(this)});
        this.updateColorAllBlock();
        
    }else{
        if(this.ctn.parent) this.ctn.parent.removeChild(this.ctn);
        this.ctn.removeAllChildren();
        this.ctn = null;
        this.updateColorChooseBlock(this.curLevel.step[this.curStep].color);
        if(this.curLevel.step[this.curStep].remove){
            this.updateColorAllBlock(this.curLevel.step[this.curStep].color);
            this.removeAllBlock();
            this.playeff(this.curLevel.step[this.curStep].eff)
            TweenMax.delayedCall(1, function(){
               nextStep();
            }.bind(this));
        }else{
            this.updateColorChooseBlock(this.curLevel.step[this.curStep].color);
            nextStep();
        }

    }
}

function playeff(eff){
    if(eff === undefined || eff === "") return;
    var mcEff = null;
    if(eff === "mcCool") mcEff = new lib.mcCool();
    if(eff === "mcPerfect") mcEff = new lib.mcPerfect();
    if(eff === "mcExcellent") mcEff = new lib.mcExcellent();

    var mcCenter = this.posBlock[Math.floor(this.posBlock.length/2)];
    mcEff.x  = mcCenter.x + spaceX/2 + dkw;
    mcEff.y  = mcCenter.y + spaceY/2 + dkh /2;

    mcEff.on("tick", function() {
        if (mcEff.currentFrame == mcEff.totalFrames - 1) { 
            mcEff.gotoAndStop(0);
            mcEff.parent.removeChild(mcEff);
        }
    });

    this.mcGame.addChild(mcEff);
}

function nextStep() {
    //update score
    var addScore = 0;
    for(var i=0;i<this.curLevel.step[this.curStep].block.length;i++){
        addScore += this.curLevel.step[this.curStep].block[i].length;
    }

    this.score += addScore;

    this.curStep++;
    if(this.curStep >= this.curLevel.step.length){
        this.gameOver();
    }else{
        this.createMap(this.curLevel.map[curStep]);
        this.createPosBlock(this.curLevel.map[curStep], curStep);
        this.createChooseBlock(this.curLevel.step[curStep]);
        this.showHand(this.curLevel.step[curStep])
    }
}

function showHand(step){
    mcGame.mcHand.visible = true;
    mcGame.mcHand.x = this.ctn.x //+ (this.lenW * this.spaceX)  / 2 * ctn.scale;
    mcGame.mcHand.y = this.ctn.y //+  (this.lenH * this.spaceY) /2  * ctn.scale;
    mcGame.mcHand.rootX =  mcGame.mcHand.x;
    mcGame.mcHand.rootY = mcGame.mcHand.y;
    
    var mcCenter = this.posBlock[Math.floor(this.posBlock.length/2)];
    this.movePosX = mcCenter.x + spaceX/2 + dkw;
    this.movePosY = mcCenter.y + spaceY/2 + dkh;
    mcGame.mcHand.scale = 1.2;
    TweenMax.killAll();
    showAnimHand();
    
}

function showAnimHand(){ 
    TweenMax.to(mcGame.mcHand, 1, {x:movePosX, y:movePosY, onComplete: function(){
        TweenMax.to(mcGame.mcHand, 0.3, {scale:1.1, onComplete(){
            TweenMax.to(mcGame.mcHand, 0.2, {x:mcGame.mcHand.rootX, y:mcGame.mcHand.rootY, scale:1, onComplete(){
                TweenMax.delayedCall(0.3, function(){
                    showAnimHand();
                }.bind(this));
            }}) 
        }})
    }.bind(this)})
}

function gameOver(){
    if(mcMenu.visible === true) return;
    showContinue();
}


function showContinue(){
    TweenMax.to(mcGame.btnInstall, 0.5, {alpha:0, onComplete:function(){
       
    }.bind(this)});

   TweenMax.delayedCall(0.8, function(){
        mcGame.visible = false;
        mcMenu.visible = true;
        TweenMax.from(mcMenu.mcBubble, 1, {alpa:0, y:-50});
        TweenMax.from(mcMenu.btnContinue, 1.5, {alpha: 0, y:400});

        mcMenu.btnContinue.addEventListener("click", onClickContinue);    
   })
    
}

function onClickContinue(){
    this.openGame();
}

function removeAllBlock(){
    this.dalayRemoveNext = 0.06;
   

    for(var i=0; i < this.posStep.length; i++){
        var movie = this.posStep[i];
        movie.remove = true;
        playAnimRemoveBlock(movie)
        TweenMax.delayedCall(this.dalayRemoveNext, function(mc){
            this.playAnimfromMovie(mc);
        }.bind(this), [movie]);
    }
}

function playAnimfromMovie(movie){
    var x = parseInt(movie.name.split("_")[1]);
    var y = parseInt(movie.name.split("_")[2]);

    var m1 = this.mcContainer.getChildByName("block_"+ (x + 1) + "_" + y);
    var m2 = this.mcContainer.getChildByName("block_"+ (x - 1) + "_" + y);
    var m3 = this.mcContainer.getChildByName("block_"+ x + "_" + (y + 1));
    var m4 = this.mcContainer.getChildByName("block_"+ x + "_" + (y - 1));


    if(m1 && m1.remove === undefined && m1.color > 0){
        m1.remove = true;
        this.playAnimRemoveBlock(m1);
        TweenMax.delayedCall(this.dalayRemoveNext, function(){
            this.playAnimfromMovie(m1);
        }.bind(this));
       
    }

    if(m2 && m2.remove === undefined&& m2.color > 0){
        m2.remove = true;
        this.playAnimRemoveBlock(m2)
        TweenMax.delayedCall(this.dalayRemoveNext, function(){
            this.playAnimfromMovie(m2);
        }.bind(this));
    }


    if(m3 && m3.remove === undefined&& m3.color > 0){
        m3.remove = true;
        this.playAnimRemoveBlock(m3)
        TweenMax.delayedCall(this.dalayRemoveNext, function(){
            this.playAnimfromMovie(m3);
        }.bind(this));
    }


    if(m4 && m4.remove === undefined&& m4.color > 0){
        m4.remove = true;
        this.playAnimRemoveBlock(m4)
        TweenMax.delayedCall(this.dalayRemoveNext, function(){
            this.playAnimfromMovie(m4);
        }.bind(this));
    }



}

function playAnimRemoveBlock(block)
{
    this.score += 2;

    block.regX = (this.blockWidth)/2;
    block.regY = (this.blockHeight)/2;

    block.x = block.x+(this.blockWidth)/2;
    block.y = block.y+(this.blockHeight)/2;

    var mcAnim = null;
    if(block.color === 1) mcAnim = new lib.mcAnim1;
    if(block.color === 2) mcAnim = new lib.mcAnim2;
    if(block.color === 3) mcAnim = new lib.mcAnim3;
    if(block.color === 4) mcAnim = new lib.mcAnim4;
    if(block.color === 5) mcAnim = new lib.mcAnim5;
    if(block.color === 6) mcAnim = new lib.mcAnim6;
    block.parent.removeChild(block);
    if(mcAnim){
        mcAnim.x = block.x;
        mcAnim.y = block.y;
        mcAnim.on("tick", function() {
            if (mcAnim.currentFrame == mcAnim.totalFrames - 1) { 
                mcAnim.gotoAndStop(0);
                mcAnim.parent.removeChild(mcAnim);
            }
        });
        this.mcContainer.addChild(mcAnim);
        mcAnim.gotoAndPlay(0);

    }


    // TweenMax.to(block, 0.1, {rotation: -30, scale:1.1, onComplete: function(){
    //     TweenMax.to(block, 0.4, {scale: 0, rotation: -360,onComplete: function(){
    //         if(block.parent) block.parent.removeChild(block);
    //     }.bind(this)});
    // }.bind(this)});
}

function visibleChooseBlock(){
    for(var i=0; i < this.posStep.length; i++){
        this.posStep[i].visible = false;
    }
}

function updateColorChooseBlock(idx){
    for(var i=0; i < this.posStep.length; i++){
        this.posStep[i].gotoAndStop(idx);
        this.posStep[i].visible = true;
    }
}

function updateColorAllBlock(idx){
    for(var i=0; i < this.arrBlock.length; i++){
        if(idx != undefined){
            if(this.arrBlock[i].color > 0){
                this.arrBlock[i].gotoAndStop(idx);
            }
        }else{
            if(this.arrBlock[i].color > 0){
                this.arrBlock[i].gotoAndStop(this.arrBlock[i].color);
            }
        }
    }
}

function detectMobile(){
    var iOS = ( navigator.userAgent.match(/(iPad|iPhone|iPod)/i) ? true : false );
    if(iOS){
        return true;
    }

    var ua = navigator.userAgent.toLowerCase();
    var isAndroid = ua.indexOf("android") > -1; 
    if(isAndroid){
        return true;
    }

    return false;
}

function createMap(map) {
    this.mcContainer.removeAllChildren();
    this.arrBlock = [];
    for(var i=0; i < map.length; i++){
        for(var j=0; j < map[i].length; j++){
            if(map[i][j] == 0) continue;
            if(map[i][j] == -1) continue;
            var block = new lib.mcBlock();
            block._off = false;
            block.x = rootX + (spaceX * j);
            block.y = rootY + (spaceY * i);
            block.name = "block_" + i + "_" + j;
            block.color = map[i][j];
            block.gotoAndStop(Math.abs(map[i][j]));
            this.arrBlock.push(block);
            this.mcContainer.addChild(block);
        }
    }
}

function createPosBlock(map, step) {
    this.posBlock = [];
    this.posStep = [];
    for(var i=0; i < map.length; i++){
        for(var j=0; j < map[i].length; j++){
            if(map[i][j] > 0) continue;
            if(map[i][j] !== -1) continue;
            var block = new lib.mcBlock();
            block._off = false;
            block.x = rootX + (spaceX * j);
            block.y = rootY + (spaceY * i);
            block.name = "block_" + i + "_" + j;

            var mx = this.mcContainer.x + block.x - spaceX;
            var my = this.mcContainer.y + block.y - spaceY;
            var mw = this.mcContainer.x + block.x;
            var mh = this.mcContainer.y + block.y;

            this.posBlock.push({x: mx, y: my, width:  mw, height: mh});
            this.posStep.push(block);
            block.gotoAndStop(map[i][j]);
            this.mcContainer.addChild(block);
        }
    }


}

function openGame(){
    window.open("https://play.google.com/store/apps/details?id=com.puzzlegamefree.blockpuzzle.gems.jewel"); 
}