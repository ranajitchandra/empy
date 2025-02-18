console.clear()


function cashOut(money) {
    if(0 > money || typeof (money) !== "number"){
        return "Invalid"
    }else{
        return money * 1.75/100
    }
}

function validEmail(email) {
    email.toLowerCase()
    if(typeof (email) === "string"){
        if(email.split('@').length - 1 !== 1 || email.includes("@") === !true || email.includes("-") || email.includes(" ") || email.startsWith(".") || email.startsWith("-") || email.startsWith("_") || email.startsWith("+") || email.startsWith("@") || email.endsWith(".com") === !true){
            return false
        }else{
            return true
        }
    }else{
        return "Invalid"
    }
}





