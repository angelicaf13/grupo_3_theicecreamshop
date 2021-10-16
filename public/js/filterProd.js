window.addEventListener('load', function(){
    
    const applyFilterBtn = document.querySelector('.apply-button');
    applyFilterBtn.addEventListener('click', function(event){
        
        let form = document.querySelector('.filter-form');

        let brandsSelect = document.querySelectorAll('.brand input'); // get all the input elements for the brands
        brandsSelect = Object.values(brandsSelect); // transform the result to array

        let priceSelect = document.querySelectorAll('.price input') // get all the input elements for the pruces
        priceSelect = Object.values(priceSelect); // transform the result to array
        console.log(new URL(document.location).searchParams);

    //     let selectedBrands = []; 
    //     let selectedPrices = [];

    //     brandsSelect.forEach(input => { // only keep the value of those brand inputs that were checked by user
    //         if(input.checked == true){
    //             selectedBrands.push(input.value)
    //         }
    //     });

    //     priceSelect.forEach(input => { // only keep the value of those price inputs that were checked by user
    //         if(input.checked == true){
    //             selectedPrices.push(input.value)
    //         }
    //     });

    //     console.log(selectedBrands.length);
    //     console.log(selectedPrices.length);

    //     if(selectedBrands.length > 0 && selectedPrices.length > 0){
    //         // redirect with params for brands and price
    //         console.log('YES')
    //         form.action = "http://www.google.com";
    //         form.submit();
    //     }else if(brandsSelect.length > 0){
    //         // redirect only with brand param
    //     }else if(priceSelect.length > 0){
    //         // redeirect only with price param
    //     }else{
    //         // do nothing
    //     }

    //     console.log(selectedBrands);
    //     console.log(selectedPrices);

     })
})