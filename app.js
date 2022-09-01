const mobiles = {

    Iphone:{
        Iphone10: {
            Name: "Iphone",
            Model: "Iphone 10",
            Ram: "3 GB",
            Rom: "64 GB",
            Price: "$218",
        },
        Iphone12pro: {
            Name: "Iphone",
            Model: "Iphone 12 pro",
            Ram: "4 GB",
            Rom: "128 GB",
            Price: "$799",
        },
        Iphone13pro: {
            Name: "Iphone",
            Model: "Iphone 13 pro",
            Ram: "4 GB",
            Rom: "128 GB",
            Price: "$1699",
        },

    },
    infinix:{
        hot8: {
            Name: "infinix",
            Model: "hot 8",
            Ram: "4 GB",
            Rom: "32 GB",
            Price: "$888",
        },
        hot10: {
            Name: "infinix",
            Model: "hot 10",
            Ram: "6 GB",
            Rom: "64 GB",
            Price: "$500",
        },
        hot9: {
            Name: "infinix",
            Model: "hot 9",
            Ram: "8 GB",
            Rom: "128 GB",
            Price: "$555",
    },
    samsung:{
        galaxyc1: {
            Name: "Samsung",
            Model: "c1",
            Ram: "4 GB",
            Rom: "32 GB",
            Price: "$888",
        },
        Note10: {
            Name: "Samsung",
            Model: "Galaxy Note 10",
            Ram: "6 GB",
            Rom: "64 GB",
            Price: "$500",
        },
        glaxaynote8: {
            Name: "Samsung",
            Model: "note 8",
            Ram: "8 GB",
            Rom: "128 GB",
            Price: "$555",
        },
    }
}

// simple mobile search start

// function searchbtn() {
//   let input = document.getElementById("search");
//   let inputtwo = document.getElementById("search2");
//   console.log(mobiles[input.value][inputtwo.value]); //("." q nhi lagaya question)
// }
// simple mobile search end


// dropdown lisy start

const brand = document.getElementById('brand')
const model = document.getElementById('model')
const renderValues = document.getElementById('renderValues')
const BrandNames = Object.keys(mobiles)


const firstValue = () => {

    for (let i = 0; i < BrandNames.length; i++) {
        brand.innerHTML += `  <option value=${BrandNames[i]}>${BrandNames[i]}</option>`

    }




}

firstValue()

const secondValue = () => {
    model.disabled = false
    const mobileNames = Object.keys(mobiles[brand.value])
    for (let i = 0; i < mobileNames.length; i++) {

        model.innerHTML += `  <option value=${mobileNames[i]}>${mobileNames[i]}</option>`

    }
    console.log(mobileNames);
}

const renderVal = () => {
    const selectedVal = mobiles[brand.value][model.value]
    console.log(selectedVal);

    renderValues.innerHTML = `        
    <h1>
         ${selectedVal.Name}   
    </h1>
    <h1>
         ${selectedVal.Model}   
    </h1>
    <h1>
         ${selectedVal.Ram}   
    </h1>
    <h1>
         ${selectedVal.Rom}   
    </h1>
    <h1>
         ${selectedVal.Price}   
    </h1>
    
    `




}