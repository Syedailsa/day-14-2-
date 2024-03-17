var magicians = ["Adam", "Kendal", "Grace"];
function magicians_show(magicians) {
    magicians.forEach(function (magician) {
        console.log("Magic Show by " + magician);
    });
}
;
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = "The great " + magicians[i];
    }
}
make_great(magicians);
magicians_show(magicians);
