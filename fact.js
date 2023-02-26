function factorial(params) {
    let result = 1;      ///  Functional scope veriable

    // Girilen argümanın tipine bakıp number olmaması halinde tamsayı girilmesi istenecek.
    if (params<0 || typeof(params) != Number) { 
        console.log("Lütfen pozitif bir sayı giriniz.")
    }else  if (params === 1) {
        return  result
    }else{
        for (let i = 1; i < params; i++) {
            result = result*i;
        }
        console.log("Faktoriyel", result)
    }
}

factorial("a");