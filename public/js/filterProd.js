window.addEventListener('load', function(){
    console.log('hello')

    let brandCheckBoxes = document.querySelectorAll(".brand-check");
    brandCheckBoxes.forEach(checkbox => {
        console.log(checkbox.value + '-' + checkbox.checked);
    });

    let priceCheckBoxes = document.querySelectorAll(".price-check");
    priceCheckBoxes.forEach(checkbox => {
        console.log(checkbox.value);
    });


    let filterButton = document.getElementsByClassName('apply-button');
    

    let filterForm = document.getElementsByClassName('filter-form');

    


    filterButton.onClick = function(event){

        brandCheckBoxes = brandCheckBoxes.filter(checkbox => checkbox.checked == true);
        priceCheckBoxes = priceCheckBoxes.filter(checkbox => checkbox.checked == true);

        brandString = brandCheckBoxes.join();
        priceString = branCheckBoxes.join('-');

        console.log(brandString);
        console.log(priceString);

        window.location = "/"
    }
})