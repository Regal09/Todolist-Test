function gettodo(){
    let url = "/gettask?status='todo'"

    fetch(url)
		.then(function(responseJSON) {
        	responseJSON.json()
        	.then(function(res) {
        	
        		afficheReponseGET(res,"todoTask");
        	});
    	})
    	.catch(function (err) {
        	console.log(err);
    });


}

// Affichage d'une réponse JSON
function afficheReponseGET(reponse,divName) {
    let div = document.querySelector(divName);
    document.getElementById(divName).innerHTML = "";
  
    let list = document.getElementById(divName);
      
    reponse.forEach((item)=>{
    let li = document.createElement("li");
    console.log( item.tache);
    li.innerText = item.tache;
    list.appendChild(li);
  })
   

    
}




function getinprogress(){
   

    let url = "/gettask?status='inprogress'"

    fetch(url)
		.then(function(responseJSON) {
        	responseJSON.json()
        	.then(function(res) {
        	
        		afficheReponseGET(res,"inprogress");
        	});
    	})
    	.catch(function (err) {
        	console.log(err);
    });
}
function getTaskdone(){
    let url = "/gettask?status='done'"

    fetch(url)
		.then(function(responseJSON) {
        	responseJSON.json()
        	.then(function(res) {
        	
        		afficheReponseGET(res,"doneTask");
        	});
    	})
    	.catch(function (err) {
        	console.log(err);
    });


}
function addtask(){


    let na = document.getElementById("nameTask").value;
    let de = document.getElementById("descTask").value;


        let url = "/addtask?tache="+na+"&desctache="+de+"";
    
        fetch(url)
            .then(function(responseJSON) {
              
                responseJSON.json()
                .then(function(res) {
                
                    console.log("done")
                });
            })
            .catch(function (err) {
                console.log(err);
        });


}


function updatetask(){
let na = document.getElementById("nameTasktoupdate").value;
let status = document.getElementById("status").value;


console.log(na.type)
    let url = "/updatetask?tache="+na+"&statusupdate="+status+"";

    fetch(url)
        .then(function(responseJSON) {
          
            responseJSON.json()
            .then(function(res) {
            
                console.log("done")
            });
        })
        .catch(function (err) {
            console.log(err);
    });


}

function deletetask(){
  

    let na = document.getElementById("nameTasktodelete").value;
    let status = document.getElementById("status").value;
    
    
    console.log(na.type)
        let url = "/deletetask?tache="+na+"";
    
        fetch(url)
            .then(function(responseJSON) {
              
                responseJSON.json()
                .then(function(res) {
                
                    console.log("done")
                });
            })
            .catch(function (err) {
                console.log(err);
        });
}