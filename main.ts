let magicians: string[] = ["Adam", "Kendal", "Grace"];

function magicians_show(magicians: string[]){
    magicians.forEach(magician => {
        console.log("Magic Show by " + magician)
    })
};

//modifying an array
function make_great(magicians: string[]) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = "the great " + magicians[i];
    }
}

make_great(magicians); 
magicians_show(magicians); 

