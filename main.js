//blob dardzav base 64

let link = document.createElement('a');
link.download = 'myKaro.txt';
link.innerHTML='Click Me';
let blob = new Blob(['I sirum em im Karoyis u im Annayis'], {type: 'text/plain'});
let read = new FileReader();
read.readAsDataURL(blob);
document.body.append(link)
read.onload = function(){
    link.href = read.result;
    //link.click();
};

function showFile(input) {
    let file = input.files[0];
  
    alert(`File name: ${file.name}`); // e.g my.png
    alert(`Last modified: ${file.lastModified}`); // e.g 1552830408824
  }
  
function readFile(input){
    let file = input.files[0];
    let reader = new FileReader();
   reader.readAsArrayBuffer(file);
    reader.onload = function(){
        console.log(reader.result);

    };
    reader.onerror = function(){
        console.log(reader.error);
    }
}