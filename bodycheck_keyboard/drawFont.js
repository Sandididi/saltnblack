
function Text1(x, y, w, h) {
    var options = {
        friction: 0.5,
        restitution: 0.6
    }
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    // this.hue = random(170, 195);
    World.add(engine.world, this.body);

    this.show = function () {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        // strokeWeight(1);
        // stroke(255);
        // fill(this.hue, 255, 200);
        rotate(angle);
        image(fontImage01,0 , 0, this.w, this.h);
        // fill(220,200,165);
        
        pop();
    }
}

function Text2(x, y, w, h) {
    var options = {
        friction: 0.5,
        restitution: 0.6
    }
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    World.add(engine.world, this.body);

    this.show = function () {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        rotate(angle);
        image(fontImage02,0 , 0, this.w, this.h);
        pop();
    }
}

function Text3(x, y, w, h) {
    var options = {
        friction: 0.5,
        restitution: 0.6
    }
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    World.add(engine.world, this.body);

    this.show = function () {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        rotate(angle);
        image(fontImage03,0 , 0, this.w, this.h);
        pop();
    }
}

function Text4(x, y, w, h) {
    var options = {
        friction: 0.5,
        restitution: 0.6
    }
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    World.add(engine.world, this.body);

    this.show = function () {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        rotate(angle);
        image(fontImage04,0 , 0, this.w, this.h);
        pop();
    }
}

function Text5(x, y, w, h) {
    var options = {
        friction: 0.5,
        restitution: 0.6
    }
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    World.add(engine.world, this.body);

    this.show = function () {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        rotate(angle);
        image(fontImage05,0 , 0, this.w, this.h);
        pop();
    }
}

function Text6(x, y, w, h) {
    var options = {
        friction: 0.5,
        restitution: 0.6
    }
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    World.add(engine.world, this.body);

    this.show = function () {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        rotate(angle);
        image(fontImage06,0 , 0, this.w, this.h);
        pop();
    }
}

function Text7(x, y, w, h) {
    var options = {
        friction: 0.5,
        restitution: 0.6
    }
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    World.add(engine.world, this.body);

    this.show = function () {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        rotate(angle);
        image(fontImage07,0 , 0, this.w, this.h);
        pop();
    }
}

function Text8(x, y, w, h) {
    var options = {
        friction: 0.5,
        restitution: 0.6
    }
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    World.add(engine.world, this.body);

    this.show = function () {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        rotate(angle);
        image(fontImage08,0 , 0, this.w, this.h);
        pop();
    }
}

function Text9(x, y, w, h) {
    var options = {
        friction: 0.5,
        restitution: 0.6
    }
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    World.add(engine.world, this.body);

    this.show = function () {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        rotate(angle);
        image(fontImage09,0 , 0, this.w, this.h);
        pop();
    }
}

function Text10(x, y, w, h) {
    var options = {
        friction: 0.5,
        restitution: 0.6
    }
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    World.add(engine.world, this.body);

    this.show = function () {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        rotate(angle);
        image(fontImage10,0 , 0, this.w, this.h);
        pop();
    }
}

function Text11(x, y, w, h) {
    var options = {
        friction: 0.5,
        restitution: 0.6
    }
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    World.add(engine.world, this.body);

    this.show = function () {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        rotate(angle);
        image(fontImage11,0 , 0, this.w, this.h);
        pop();
    }
}

function Text12(x, y, w, h) {
    var options = {
        friction: 0.5,
        restitution: 0.6
    }
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    World.add(engine.world, this.body);

    this.show = function () {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        rotate(angle);
        image(fontImage12,0 , 0, this.w, this.h);
        pop();
    }
}

function Text13(x, y, w, h) {
    var options = {
        friction: 0.5,
        restitution: 0.6
    }
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    World.add(engine.world, this.body);

    this.show = function () {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        rotate(angle);
        image(fontImage13,0 , 0, this.w, this.h);
        pop();
    }
}

function Text14(x, y, w, h) {
    var options = {
        friction: 0.5,
        restitution: 0.6
    }
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    World.add(engine.world, this.body);

    this.show = function () {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        rotate(angle);
        image(fontImage14,0 , 0, this.w, this.h);
        pop();
    }
}

function Text15(x, y, w, h) {
    var options = {
        friction: 0.5,
        restitution: 0.6
    }
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    World.add(engine.world, this.body);

    this.show = function () {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        rotate(angle);
        image(fontImage15,0 , 0, this.w, this.h);
        pop();
    }
}

function Text16(x, y, w, h) {
    var options = {
        friction: 0.5,
        restitution: 0.6
    }
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    World.add(engine.world, this.body);

    this.show = function () {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        rotate(angle);
        image(fontImage16,0 , 0, this.w, this.h);
        pop();
    }
}

function Text17(x, y, w, h) {
    var options = {
        friction: 0.5,
        restitution: 0.6
    }
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    World.add(engine.world, this.body);

    this.show = function () {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        rotate(angle);
        image(fontImage17,0 , 0, this.w, this.h);
        pop();
    }
}

function Text18(x, y, w, h) {
    var options = {
        friction: 0.5,
        restitution: 0.6
    }
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    World.add(engine.world, this.body);

    this.show = function () {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        rotate(angle);
        image(fontImage18,0 , 0, this.w, this.h);
        pop();
    }
}

function Text19(x, y, w, h) {
    var options = {
        friction: 0.5,
        restitution: 0.6
    }
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    World.add(engine.world, this.body);

    this.show = function () {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        rotate(angle);
        image(fontImage19,0 , 0, this.w, this.h);
        pop();
    }
}

function Text20(x, y, w, h) {
    var options = {
        friction: 0.5,
        restitution: 0.6
    }
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    World.add(engine.world, this.body);

    this.show = function () {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        rotate(angle);
        image(fontImage20,0 , 0, this.w, this.h);
        pop();
    }
}

function Text21(x, y, w, h) {
    var options = {
        friction: 0.5,
        restitution: 0.6
    }
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    World.add(engine.world, this.body);

    this.show = function () {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        rotate(angle);
        image(fontImage21,0 , 0, this.w, this.h);
        pop();
    }
}

function Text22(x, y, w, h) {
    var options = {
        friction: 0.5,
        restitution: 0.6
    }
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    World.add(engine.world, this.body);

    this.show = function () {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        rotate(angle);
        image(fontImage22,0 , 0, this.w, this.h);
        pop();
    }
}

function Text23(x, y, w, h) {
    var options = {
        friction: 0.5,
        restitution: 0.6
    }
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    World.add(engine.world, this.body);

    this.show = function () {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        rotate(angle);
        image(fontImage23,0 , 0, this.w, this.h);
        pop();
    }
}

function Text24(x, y, w, h) {
    var options = {
        friction: 0.5,
        restitution: 0.6
    }
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    World.add(engine.world, this.body);

    this.show = function () {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        rotate(angle);
        image(fontImage24,0 , 0, this.w, this.h);
        pop();
    }
}

function Text25(x, y, w, h) {
    var options = {
        friction: 0.5,
        restitution: 0.6
    }
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    World.add(engine.world, this.body);

    this.show = function () {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        rotate(angle);
        image(fontImage25,0 , 0, this.w, this.h);
        pop();
    }
}

function Text26(x, y, w, h) {
    var options = {
        friction: 0.5,
        restitution: 0.6
    }
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    World.add(engine.world, this.body);

    this.show = function () {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        rotate(angle);
        image(fontImage26,0 , 0, this.w, this.h);
        pop();
    }
}