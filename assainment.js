
function cashOut(money){
    if(0 > money || typeof (money) !== "number"){
        return "Invalid";
    }else{
        return money * 1.75/100;
    }
}

function validEmail(email){
    if(typeof (email) === "string"){
        if(email.split('@').length - 1 !== 1 || email.includes("@") === !true || email.includes("-") || email.includes(" ") || email.startsWith(".") || email.startsWith("-") || email.startsWith("_") || email.startsWith("+") || email.startsWith("@") || email.endsWith(".com") === !true){
            return false;
        }else{
            return true;
        }
    }else{
        return "Invalid";
    }
}

function  electionResult(votes){
    if(Array.isArray(votes)){
        let mango = [];
        let banana = [];
        for(let i= 0; i <votes.length; i++){
            if(votes[i] === "mango"){
                mango.push(votes[i]);
            }
            if(votes[i] === "banana"){
                banana.push(votes[i]);
            }
        }
        if(mango.length === banana.length){
            return "Draw";
        }else if(mango.length > banana.length){
            return "Mango";
        }else{
            return "Banana";
        }
    }else{
        return "Invalid";
    }
}

function  isBestFriend(f1,f2) {
    if(typeof(f1) === "object" && typeof(f2) === "object"){
        if(f1["bestFriend"] === f2["roll"] && f2["bestFriend"] === f1["roll"]){
            return true;
        }else{
            return false;
        }
    }else{
        return "Invalid"
    }
}

function  calculateWatchTime(times){
    let seconds = 0;
    if(Array.isArray(times)){
        for(let time of times){
            if(typeof (time) === "number"){
                seconds +=time
            }else{
                return "Invalid";
            }
        }
    }else{
        return "Invalid";
    }
    let h = Math.floor(seconds / 3600);
    let m = Math.floor((seconds % 3600) / 60);
    let s = seconds % 60;
    
    return  { "hour" : h, "minute" : m, "second" : s};
}



