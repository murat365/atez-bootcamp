function calculate(...params) {
    let result = 1;
    let sayac = 0;
    params.forEach((value) => {
        if (typeof(value) != "number"){
            sayac++;
        }
    })

    if (sayac == 0) {
        
        params.forEach((value) => {
            result *= value;
        })
    } else {
        console.log("Tüm parametreler number ifade olmak zorundadır.")
    }
    

    if (sayac ==0) {
        console.log("Sonuç", result);    }
}   


calculate(1,2,5,4);