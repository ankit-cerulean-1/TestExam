


export function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

export function validatePhone(inputtxt)
{
  let phoneno = /^\d{10}$/;
    if(inputtxt.match(phoneno)){
        return true;
    }else return false;
}

export function validateUrl(myURL) {
    let array = myURL.split(':');
    if(array.length >0 && array[0] == 'http' || array[0] == 'https'){
        return true;
    }else
    return false;
 }

 export function validateName(name){
    var re = /^[A-Za-z]+$/;
    if(re.test(name))
      return true
    else
      return false     
 }