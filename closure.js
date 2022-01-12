var another = function () {
    var x = 'local';
    function y() {
        alert(x);
    }
    return { y: y };
}
var newScope = another();

var newScope = (function () {
    var x = 'local';
    return {
        y: function () {
            alert(x);
        }
    };
})();

var counter = function () {
    var count = 0;
    function changeCount(number) {
        count += number;
    }
    return {
        increase: function () {
            changeCount(1);
        },
        decrease: function () {
            changeCount(-1);
        },
        show: function () {
            alert(count);
        }
    }
};
var counterClosure = counter();
counterClosure.increase();
counterClosure.show(); // 1
counterClosure.decrease();
counterClosure.show(); // 0

for (var i = 0; i < 5; i++) {
    (function (j) {
        $('#target' + j).on('click', function () {
            alert(j);
        });
    })(i);
}