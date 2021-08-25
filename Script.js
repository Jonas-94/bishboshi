function bishbosh(){

    
    var numbers = parseInt( document.getElementById("numbers2").value);
    var bish = parseInt(document.getElementById("bish2").value);
    var bosh = parseInt(document.getElementById("bosh2").value);
    var bibolist = document.getElementById("bobili");
    bibolist.innerHTML = "";

    for ( i = 1; i <= numbers; i++) {
        var listitem = document.createElement("li");
        
        if (i % bish == 0) {
            listitem.innerHTML = "bish"
            bibolist.appendChild(listitem);
        }
        else if (i % bosh == 0){
            
            listitem.innerHTML = "bosh"
            bibolist.appendChild(listitem);

        }
        else if(i % bish == 0 && i % bosh == 0){
            listitem.innerHTML = "bishbosh"
            bibolist.appendChild(listitem);

        }
        else{
            listitem.innerHTML = i;
            bibolist.appendChild(listitem);
        }

        
    }
    // document.getElementById("pop").innerHTML = text;
    // var list = document.createElement('ul');
   


}
// function changenumber(x){
//     document.getElementById("slider_value").innerHTML=x;

// }
function changenumber(range, label){
    document.getElementById(label).innerHTML = document.getElementById(range).value
}