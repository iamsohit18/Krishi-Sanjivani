
const cropPrices = [
    {
        market: "Delhi Mandi",
        city: "Delhi",
        buyer: "AgroFresh Pvt Ltd",
        crop: "Wheat",
        price: "₹2200/Qtl",
        contact: "9876543210",
        email: "agrofresh@gmail.com"
    },
    {
        market: "Kanpur Mandi",
        city: "Kanpur",
        buyer: "GreenFarm Agro",
        crop: "Rice",
        price: "₹1900/Qtl",
        contact: "9123456780",
        email: "greenfarm@gmail.com"
    },
    {
        market: "Patna Market",
        city: "Patna",
        buyer: "FreshBazaar",
        crop: "Mango",
        price: "₹80/Kg",
        contact: "9988776655",
        email: "freshbazaar@gmail.com"
    },
    {
        market: "Jaipur Mandi",
        city: "Jaipur",
        buyer: "KrishiMart",
        crop: "Mustard",
        price: "₹5200/Qtl",
        contact: "9090909090",
        email: "krishimart@gmail.com"
    },
    {
        market: "Lucknow Mandi",
        city: "Lucknow",
        buyer: "Bharat Agro",
        crop: "Tomato",
        price: "₹30/Kg",
        contact: "9876512345",
        email: "bharatagro@gmail.com"
    },
    {
        market: "Agra Market",
        city: "Agra",
        buyer: "RuralCrop Buyer",
        crop: "Potato",
        price: "₹25/Kg",
        contact: "9876501234",
        email: "ruralcrop@gmail.com"
    },
    {
        market: "Noida Market",
        city: "Noida",
        buyer: "Krishna Agro",
        crop: "Wheat",
        price: "₹2400/Qtl",
        contact: "9090876543",
        email: "krishnaagro@gmail.com"
    },
    {
        market: "Agra Bazaar",
        city: "Agra",
        buyer: "Farmer Fresh",
        crop: "Potato",
        price: "₹1200/Qtl",
        contact: "9988001122",
        email: "farmerfresh@gmail.com"
    },
    {
        market: "Banaras Fruit Market",
        city: "Varanasi",
        buyer: "Mango King",
        crop: "Mango",
        price: "₹80/Kg",
        contact: "9977885544",
        email: "mangoking@gmail.com"
    },
   {
market: "Sector 88 Market",
city: "Noida",
buyer: "Fresh Veggies Supplier",
crop: "Tomato",
price: "₹30/Kg",
contact: "9876543210",
email: "freshveggies.noida@gmail.com"
},
{
market: "Khurja Sabzi Mandi",
city: "Khurja",
buyer: "Green Leaf Traders",
crop: "Spinach",
price: "₹20/Kg",
contact: "8765432109",
email: "greenleaf.khurja@gmail.com"
},
{
market: "Bulandshahr Fruit Market",
city: "Bulandshahr",
buyer: "Apple House",
crop: "Apple",
price: "₹150/Kg",
contact: "7654321098",
email: "applehouse.bsr@gmail.com"
},
{
market: "Ghaziabad Mandi",
city: "Ghaziabad",
buyer: "Shree Onion Traders",
crop: "Onion",
price: "₹25/Kg",
contact: "9988776655",
email: "oniontraders.ghaziabad@gmail.com"
},
{
market: "Aligarh Sabzi Bazaar",
city: "Aligarh",
buyer: "Potato King",
crop: "Potato",
price: "₹22/Kg",
contact: "8899776655",
email: "potatoking.aligarh@gmail.com"
},
{
market: "Meerut Vegetable Market",
city: "Meerut",
buyer: "Fresh Cucumber Hub",
crop: "Cucumber",
price: "₹28/Kg",
contact: "9090909090",
email: "cucumberhub.meerut@gmail.com"
},
{
market: "Moradabad Fruit Market",
city: "Moradabad",
buyer: "Banana Mart",
crop: "Banana",
price: "₹50/Dozen",
contact: "9191919191",
email: "bananamart.moradabad@gmail.com"
},
{
market: "Agra Sabzi Market",
city: "Agra",
buyer: "Pomegranate Traders",
crop: "Pomegranate",
price: "₹120/Kg",
contact: "9292929292",
email: "pomegranate.agra@gmail.com"
},
{
market: "Hapur Mandi",
city: "Hapur",
buyer: "Sweet Corn Supplier",
crop: "Sweet Corn",
price: "₹35/Kg",
contact: "9393939393",
email: "sweetcorn.hapur@gmail.com"
},
{
market: "Mathura Fruit Market",
city: "Mathura",
buyer: "Watermelon Centre",
crop: "Watermelon",
price: "₹18/Kg",
contact: "9494949494",
email: "watermelon.mathura@gmail.com"
},
{
market: "Karnal Sabzi Mandi",
city: "Karnal",
buyer: "Fresh Wheat Traders",
crop: "Wheat",
price: "₹24/Kg",
contact: "9811111111",
email: "wheat.karnal@gmail.com"
},
{
market: "Panipat Vegetable Market",
city: "Panipat",
buyer: "Mustard Oil Suppliers",
crop: "Mustard",
price: "₹55/Kg",
contact: "9822222222",
email: "mustard.panipat@gmail.com"
},
{
market: "Sonipat Grain Market",
city: "Sonipat",
buyer: "Bajra King",
crop: "Bajra",
price: "₹23/Kg",
contact: "9833333333",
email: "bajra.sonipat@gmail.com"
},
{
market: "Rohtak Fruit Market",
city: "Rohtak",
buyer: "Rice World",
crop: "Rice",
price: "₹40/Kg",
contact: "9844444444",
email: "rice.rohtak@gmail.com"
},
{
market: "Hisar Vegetable Mandi",
city: "Hisar",
buyer: "Corn Suppliers",
crop: "Maize",
price: "₹28/Kg",
contact: "9855555555",
email: "maize.hisar@gmail.com"
},
{
market: "Ambala Sabzi Bazaar",
city: "Ambala",
buyer: "Tomato Hub",
crop: "Tomato",
price: "₹32/Kg",
contact: "9866666666",
email: "tomato.ambala@gmail.com"
},
{
market: "Yamunanagar Mandi",
city: "Yamunanagar",
buyer: "Onion Market",
crop: "Onion",
price: "₹26/Kg",
contact: "9877777777",
email: "onion.yamunanagar@gmail.com"
},
{
market: "Panchkula Fruit Market",
city: "Panchkula",
buyer: "Potato Suppliers",
crop: "Potato",
price: "₹20/Kg",
contact: "9888888888",
email: "potato.panchkula@gmail.com"
},
{
market: "Kurukshetra Sabzi Mandi",
city: "Kurukshetra",
buyer: "Banana Centre",
crop: "Banana",
price: "₹48/Dozen",
contact: "9899999999",
email: "banana.kurukshetra@gmail.com"
},
{
market: "Jhajjar Market",
city: "Jhajjar",
buyer: "Apple Traders",
crop: "Apple",
price: "₹140/Kg",
contact: "9900000000",
email: "apple.jhajjar@gmail.com"
},
{
market: "Rewari Sabzi Market",
city: "Rewari",
buyer: "Watermelon Suppliers",
crop: "Watermelon",
price: "₹20/Kg",
contact: "9911111111",
email: "watermelon.rewari@gmail.com"
},
{
market: "Sirsa Grain Market",
city: "Sirsa",
buyer: "Cucumber Dealers",
crop: "Cucumber",
price: "₹25/Kg",
contact: "9922222222",
email: "cucumber.sirsa@gmail.com"
},
{
market: "Fatehabad Mandi",
city: "Fatehabad",
buyer: "Carrot Hub",
crop: "Carrot",
price: "₹30/Kg",
contact: "9933333333",
email: "carrot.fatehabad@gmail.com"
},
{
market: "Kaithal Market",
city: "Kaithal",
buyer: "Pumpkin Traders",
crop: "Pumpkin",
price: "₹22/Kg",
contact: "9944444444",
email: "pumpkin.kaithal@gmail.com"
},
{
market: "Bhiwani Sabzi Mandi",
city: "Bhiwani",
buyer: "Ladyfinger Suppliers",
crop: "Ladyfinger",
price: "₹35/Kg",
contact: "9955555555",
email: "ladyfinger.bhiwani@gmail.com"
},
{
market: "Palwal Market",
city: "Palwal",
buyer: "Pomegranate Traders",
crop: "Pomegranate",
price: "₹130/Kg",
contact: "9966666666",
email: "pomegranate.palwal@gmail.com"
},
{
market: "Jind Sabzi Bazaar",
city: "Jind",
buyer: "Papaya Suppliers",
crop: "Papaya",
price: "₹40/Kg",
contact: "9977777777",
email: "papaya.jind@gmail.com"
},
{
market: "Mahendragarh Market",
city: "Mahendragarh",
buyer: "Guava Traders",
crop: "Guava",
price: "₹60/Kg",
contact: "9988888888",
email: "guava.mahendragarh@gmail.com"
},
{
market: "Charkhi Dadri Sabzi Mandi",
city: "Charkhi Dadri",
buyer: "Lemon Suppliers",
crop: "Lemon",
price: "₹80/Kg",
contact: "9999999999",
email: "lemon.charkhi@gmail.com"
},
{
market: "Faridabad Sabzi Market",
city: "Faridabad",
buyer: "Brinjal Hub",
crop: "Brinjal",
price: "₹28/Kg",
contact: "9123456789",
email: "brinjal.faridabad@gmail.com"
},
{ market: "Noida Seed Market", city: "Noida", buyer: "Shree Seeds Supplier", crop: "Wheat Seed", price: "₹2800/Qtl", contact: "9876543210", email: "shreeseeds.noida@gmail.com" },

{ market: "Greater Noida Seed Mandi", city: "Greater Noida", buyer: "AgriBest Seeds", crop: "Paddy Seed", price: "₹3000/Qtl", contact: "9123456789", email: "agribest.noida@gmail.com" },

{ market: "Bulandshahr Seed Market", city: "Bulandshahr", buyer: "Krishi Beej Bhandar", crop: "Mustard Seed", price: "₹4500/Qtl", contact: "9955443322", email: "krishibul@gmail.com" },

{ market: "Khurja Seed Market", city: "Khurja", buyer: "Kisan Seeds Trader", crop: "Maize Seed", price: "₹2200/Qtl", contact: "9933551122", email: "kisanseed.khurja@gmail.com" },

{ market: "Ghaziabad Seed Market", city: "Ghaziabad", buyer: "Super Agro Seeds", crop: "Wheat Seed", price: "₹2750/Qtl", contact: "9811223344", email: "superagro.ghaziabad@gmail.com" },

{ market: "Meerut Seed Mandi", city: "Meerut", buyer: "Jai Seeds Traders", crop: "Barley Seed", price: "₹2600/Qtl", contact: "9898989898", email: "jaiseeds.meerut@gmail.com" },

{ market: "Agra Seed Market", city: "Agra", buyer: "Rural Seeds Hub", crop: "Paddy Seed", price: "₹3100/Qtl", contact: "9787878787", email: "ruralagra@gmail.com" },

{ market: "Aligarh Seed Mandi", city: "Aligarh", buyer: "Agro Star Seeds", crop: "Mustard Seed", price: "₹4700/Qtl", contact: "9765432109", email: "agrostar.aligarh@gmail.com" },

{ market: "Delhi Seed Market", city: "Delhi", buyer: "Capital Seeds", crop: "Maize Seed", price: "₹2400/Qtl", contact: "9876512345", email: "capitalseeds.delhi@gmail.com" },

{ market: "Delhi Beej Bazaar", city: "Delhi", buyer: "Krishi Agro Seeds", crop: "Barley Seed", price: "₹2700/Qtl", contact: "9955112233", email: "krishiagro.delhi@gmail.com" },

{ market: "Sonipat Seed Market", city: "Sonipat", buyer: "Hariyana Seed Centre", crop: "Wheat Seed", price: "₹2850/Qtl", contact: "9911992233", email: "haryana.sonipat@gmail.com" },

{ market: "Panipat Seed Mandi", city: "Panipat", buyer: "Green Seeds Hub", crop: "Paddy Seed", price: "₹3150/Qtl", contact: "9944556677", email: "greenseeds.panipat@gmail.com" },

{ market: "Rohtak Seed Market", city: "Rohtak", buyer: "Kisan Beej Kendra", crop: "Mustard Seed", price: "₹4600/Qtl", contact: "9933667788", email: "kisanrohtak@gmail.com" },

{ market: "Hisar Seed Market", city: "Hisar", buyer: "Farmer Beej House", crop: "Maize Seed", price: "₹2300/Qtl", contact: "9977885566", email: "farmerhisar@gmail.com" },

{ market: "Karnal Seed Mandi", city: "Karnal", buyer: "Agro Beej Traders", crop: "Barley Seed", price: "₹2650/Qtl", contact: "9988776655", email: "agro.karnal@gmail.com" },

{ market: "Ambala Seed Market", city: "Ambala", buyer: "Hari Seeds Supplier", crop: "Wheat Seed", price: "₹2900/Qtl", contact: "9900991122", email: "hariseeds.ambala@gmail.com" },

{ market: "Gurgaon Seed Market", city: "Gurgaon", buyer: "Modern Agro Seeds", crop: "Paddy Seed", price: "₹3050/Qtl", contact: "9818112233", email: "modernagro.ggn@gmail.com" },

{ market: "Faridabad Seed Mandi", city: "Faridabad", buyer: "Farm Seeds Dealer", crop: "Mustard Seed", price: "₹4550/Qtl", contact: "9845123412", email: "farmseeds.faridabad@gmail.com" },

{ market: "Palwal Seed Market", city: "Palwal", buyer: "Shakti Beej Traders", crop: "Maize Seed", price: "₹2250/Qtl", contact: "9876549876", email: "shakti.palwal@gmail.com" },

{ market: "Delhi Seed Mandi", city: "Delhi", buyer: "National Agro Seeds", crop: "Barley Seed", price: "₹2750/Qtl", contact: "9966554433", email: "nationalagro.delhi@gmail.com" },
];





const cropContainer = document.getElementById('cropData');
const popup = document.getElementById('popup');
const popupText = document.getElementById('popupText');

function showPopup(buyer, market, city, crop, price, contact, email) {
    popupText.innerHTML = `
        <strong>Buyer Name:</strong> ${buyer}<br>
        <strong>Market:</strong> ${market}<br>
        <strong>City:</strong> ${city}<br>
        <strong>Crop:</strong> ${crop}<br>
        <strong>Price:</strong> ${price}<br>
        <strong>Contact:</strong> ${contact}<br>
        <strong>Email:</strong> ${email}
    `;
    popup.style.display = 'flex';
}

function closePopup() {
    popup.style.display = 'none';
}

cropPrices.forEach(data => {
    cropContainer.innerHTML += `
        <div class="crop-card">
            <h3>${data.crop}</h3>
            <p><strong>Buyer:</strong> ${data.buyer}</p>
            <p><strong>Market:</strong> ${data.market}, ${data.city}</p>
            <p><strong>Price:</strong> ${data.price}</p>
            <button class="details-btn" onclick="showPopup('${data.buyer}', '${data.market}', '${data.city}', '${data.crop}', '${data.price}', '${data.contact}', '${data.email}')">Details</button>
        </div>
    `;
});
