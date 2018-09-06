(function() {

    let kon = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13];
    let arr = [];
    var audio = $('audio')[0];
    $(document).keyup(function (event) {
        console.log(event.keyCode);

        arr.push(event.keyCode);
        console.log(arr);
        if (arr[0] != 38) {
            arr = [];
        }

        if (kon.toString() === arr.toString()) {
            $('#myModal').modal({
                        keyboard: false
                    })
            // $('#bob-dance').show(2000);
            audio.loop = true;
            audio.play();
            // $(document).hide();
            // $('button').show();
            // $('body').css('background-image', 'url(konami-code-master/img/space-bckgrnd.jpg)');
            // $('h1, p').css('color', 'white');

        }
        if (kon.toString().length === arr.toString().length) {
            arr = [];
        }
    });

    $('button').click(function () {
        location.reload();
    });

})();
