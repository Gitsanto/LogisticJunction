var myRectangle = {
    x: 100,
    y: 20,
    width: 25,
    height: 10,
    borderWidth: 1
};

$(document).ready(function () {
    $('#myCanvas').css("border", "2px solid black");
    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');
    var cntxt = canvas.getContext('2d');
    drawPath(context);
    drawRect(myRectangle, cntxt);

    $('#myCanvas').click(function () {
        function animate(myRectangle, canvas, cntxt, startTime) {
            var time = (new Date()).getTime() - startTime;
            var linearSpeed = 10;
            var newX = Math.round(Math.sqrt((100 * 100) + (160 * 160)));
            if (newX < canvas.width - myRectangle.width - myRectangle.borderWidth / 2) {

                myRectangle.x = newX;

            }


            context.clearRect(0, 0, canvas.width, canvas.height);
            drawPath(context);
            drawRect(myRectangle, cntxt);

            // request new frame
            requestAnimFrame(function () {
                animate(myRectangle, canvas, cntxt, startTime);
            });
        }
        drawRect(myRectangle, cntxt);
        myRectangle.x = 100;
        myRectangle.y = 121;
        setTimeout(function () {
            var startTime = (new Date()).getTime();
            animate(myRectangle, canvas, cntxt, startTime);
        }, 1000);

    });
});

$(document).keypress(function (e) {
    if (e.which == 13) {


        $('#myCanvas').click();

    }
});

function drawRect(myRectangle, cntxt) {

    cntxt.beginPath();
    cntxt.rect(myRectangle.x, myRectangle.y, myRectangle.width, myRectangle.height);
    cntxt.fillStyle = 'cyan';
    cntxt.fill();

    cntxt.strokeStyle = 'black';
    cntxt.stroke();
};

function drawPath(context) {

    context.beginPath();
    context.moveTo(100, 20);

    // line 1
    context.lineTo(200, 160);
    // quadratic curve
    context.quadraticCurveTo(230, 200, 250, 120);

    // bezier curve
    context.bezierCurveTo(290, -40, 300, 200, 400, 150);

    // line 2
    context.lineTo(500, 90);
    context.lineWidth = 5;
    context.strokeStyle = 'blue';
    context.stroke();
};