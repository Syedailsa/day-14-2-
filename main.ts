let magicians: string[] = ["Adam", "Kendal", "Grace"];

function magicians_show(magicians: string[]){
    magicians.forEach(magician => {
        console.log("Magic Show by " + magician)
    })
};

magicians_show(magicians);