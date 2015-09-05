App.Product = DS.Model.extend({
    venId: DS.attr('string'),
    menuType: DS.attr('string'),
    maxOrder: DS.attr('string'),
    foodItem: DS.attr(),
    date: DS.attr('string'),
    price: DS.attr('string'),
    image: DS.attr('string'),
});

App.Product.FIXTURES = [{
    "id": "1",
    "venId": "vendor1",
    "menuType": "Breakfast",
    "maxOrder": "15",
    "foodItem": [{
        "breads": "Aloo Parantha"
    }, {
        "curd": "Simple Curd"
    }, {
        "dessert": "Motichoor laddu"
    }],
    "date": "",
    "price": "59",
    "image": "https://aahaaram.files.wordpress.com/2013/10/alu-paratha.jpg"
}, {
    "id": "2",
    "venId": "vendor1",
    "menuType": "Lunch",
    "maxOrder": "20",
    "foodItem": [{
        "veg": "Dal Makhani"
    }, {
        "breads": "Tandoori Roti"
    }, {
        "salad": "Cucumber"
    }, {
        "rice": "Jeera Rice"
    }, {
        "dessert": "Kheer"
    }],
    "date": "",
    "price": "69",
    "image": "https://kitchenpops.files.wordpress.com/2013/05/dal_makhani_zoink.jpg"
}, {
    "id": "3",
    "venId": "vendor1",
    "menuType": "Dinner",
    "maxOrder": "30",
    "foodItem": [{
        "veg": "Palak Kofta"
    }, {
        "breads": "Butter Roti"
    }, {
        "salad": "Carrot Salad"
    }, {
        "curd": "Onion Raita"
    }],
    "date": "",
    "price": "49",
    "image": "http://photos1.blogger.com/x/blogger2/1778/4272/1600/571793/Palak%20Kofta6.jpg"
}, {
    "id": "4",
    "venId": "vendor2",
    "menuType": "Breakfast",
    "maxOrder": "20",
    "foodItem": [{
        "breads": "Onion Parantha"
    }, {
        "curd": "Boondi Raita"
    }, {
        "dessert": "Jalebi"
    }],
    "date": "",
    "price": "49",
    "image": "http://sarikasethgunjal.com/wp-content/uploads/2014/04/DSC_1565-1.jpg"
}, {
    "id": "5",
    "venId": "vendor2",
    "menuType": "Lunch",
    "maxOrder": "14",
    "foodItem": [{
        "veg": "Dal Tadka"
    }, {
        "breads": "Plain Naan"
    }, {
        "salad": "Onion Salad"
    }, {
        "rice": "Plain Rice"
    }],
    "date": "",
    "price": "50",
    "image": "http://www.spiceupthecurry.com/wp-content/uploads/2013/09/Dal-Palak-Recipe-Moong-Dal-with-Spinach1.jpg"
}, {
    "id": "6",
    "venId": "vendor2",
    "menuType": "Dinner",
    "maxOrder": "25",
    "foodItem": [{
        "veg": "Rajma"
    }, {
        "breads": "Plain Roti"
    }, {
        "salad": "Onion Salad"
    }, {
        "rice": "Jeera Rice"
    }, {
        "dessert": "Gulab Jamun"
    }],
    "date": "",
    "price": "49",
    "image": "http://www.itslife.in/wp-content/gallery/recipes-curries-dal/recipes-dals-n-curries-rajma-roti.jpg"
}, {
    "id": "7",
    "venId": "vendor3",
    "menuType": "Breakfast",
    "maxOrder": "18",
    "foodItem": [{
        "breads": "Gobhi Parantha"
    }, {
        "curd": "Mix Raita"
    }, {
        "dessert": "Rasgulla"
    }],
    "date": "",
    "price": "50",
    "image": "http://cdn3.foodviva.com/static-content/food-images/north-indian-recipes/gobhi-paratha-recipe/gobhi-paratha-recipe.jpg"
}, {
    "id": "8",
    "venId": "vendor3",
    "menuType": "Lunch",
    "maxOrder": "25",
    "foodItem": [{
        "veg": "Mix Veg"
    }, {
        "breads": "Aloo Naan"
    }, {
        "salad": "Tomato"
    }, {
        "rice": "Veg Pulao"
    }, {
        "curd": "Rabri"
    }, {
        "dessert": "Rasgulla"
    }],
    "date": "",
    "price": "60",
    "image": "http://cdn.whatanindianrecipe.net/wp-content/uploads/2012/11/mixed-vegetable-sabzi-curry.jpg"
}, {
    "id": "9",
    "venId": "vendor3",
    "menuType": "Dinner",
    "maxOrder": "15",
    "foodItem": [{
        "veg": "Shahi Paneer"
    }, {
        "breads": "Tandoori Roti"
    }, {
        "salad": "Banana Salad"
    }, {
        "dessert": "Gajar ka Halwa"
    }],
    "date": "",
    "price": "50",
    "image": "http://ksmartstatic.sify.com/cmf-1.0.0/appflow/bawarchi.com/Image/oetrq6agdhhjd_bigger.jpg"
}, {
    "id": "10",
    "venId": "vendor4",
    "menuType": "Breakfast",
    "maxOrder": "20",
    "foodItem": [{
        "veg": "Chana Masala"
    }, {
        "breads": "Plain Parantha"
    }, {
        "curd": "Aloo Raita"
    }],
    "date": "",
    "price": "49",
    "image": "http://1.bp.blogspot.com/-Lenr_rJ-834/TfhIGTSasrI/AAAAAAAAKDM/eU3oSB_ob5g/s400/kcmasala+last.jpg"
}, {
    "id": "11",
    "venId": "vendor4",
    "menuType": "Lunch",
    "maxOrder": "25",
    "foodItem": [{
        "veg": "Chole"
    }, {
        "breads": "Plain Naan"
    }, {
        "salad": "Cucumber"
    }, {
        "rice": "Plain Rice"
    }, {
        "curd": "Boondi Raita"
    }, {
        "dessert": "Jalebi"
    }],
    "date": "",
    "price": "69",
    "image": "https://reenamansukhani.files.wordpress.com/2014/01/chole-with-butter-naan.jpg"
}, {
    "id": "12",
    "venId": "vendor4",
    "menuType": "Dinner",
    "maxOrder": "10",
    "foodItem": [{
        "veg": "Mix Veg"
    }, {
        "breads": "Plain Roti"
    }, {
        "salad": "Tomato"
    }, {
        "rice": "Pulao"
    }, {
        "dessert": "Lassi"
    }],
    "date": "",
    "price": "59",
    "image": "http://cdn.whatanindianrecipe.net/wp-content/uploads/2012/11/mixed-vegetable-sabzi-curry.jpg"
}, {
    "id": "13",
    "venId": "vendor5",
    "menuType": "Breakfast",
    "maxOrder": "28",
    "foodItem": [{
        "veg": "Jeera Aloo"
    }, {
        "breads": "Plain Parantha"
    }, {
        "curd": "Mix Raita"
    }, ],
    "date": "",
    "price": "49",
    "image": "http://1.bp.blogspot.com/-D8RgcIduiHM/VTS-FakC0MI/AAAAAAAAAiA/tBuOk_0A0_A/s1600/IMG_0582.JPG"
}, {
    "id": "14",
    "venId": "vendor5",
    "menuType": "Lunch",
    "maxOrder": "30",
    "foodItem": [{
        "veg": "Kadhi"
    }, {
        "breads": "Onion Naan"
    }, {
        "salad": "Cucumber Salad"
    }, {
        "rice": "Jeera Rice"
    }, {
        "dessert": "Mung Halwa"
    }],
    "date": "",
    "price": "59",
    "image": "http://bikanervala.ae/images/breakfast-mini-meals/header7.jpg"
}, {
    "id": "15",
    "venId": "vendor5",
    "menuType": "Dinner",
    "maxOrder": "35",
    "foodItem": [{
        "veg": "Mutter Paneer"
    }, {
        "breads": "Aloo Naan"
    }, {
        "salad": "Tomato salad"
    }, {
        "dessert": "Kheer"
    }],
    "date": "",
    "price": "69",
    "image": "http://cdn3.foodviva.com/static-content/food-images/punjabi-recipes/matar-paneer-recipe/matar-paneer-recipe.jpg"
}];
