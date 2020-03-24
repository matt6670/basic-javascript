function pluralise(word){
    return (word[word.length - 1] != "s") ?  word +"s" : word;

}

function countItem(item, count){
    return (count > 1) ? ("I have " + count + " " + pluralise(item)) : ("I have " + count + " " + item);
}

function createGrid(x,y){

    let line ="";
    let even ="&   ";
    let odd = "  &  "

    for(i =0;i<x;i++){
        for(j=0;j<y;j++){
            if(i % 2 === 0){
                line = line + even;
            }
            else{
                line = line + odd;
            }
        }
        console.log(line);
        line="";
    }
}

createGrid(5,10);


