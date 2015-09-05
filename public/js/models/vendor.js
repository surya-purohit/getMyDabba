App.Vendor = DS.Model.extend({
    venName: DS.attr('string'),
    venId: DS.attr('string'),
    venMobile: DS.attr('string'),
    speciality: DS.attr('string'),
    todayMenu: DS.attr('string')
});
App.Vendor.FIXTURES = [{
    "venName": "Surya",
    "venId": "vendor1",
    "venMobile": "9999999999",
    "speciality": "Kheer",
    "todayMenu": "menu1"
}, {
    "venName": "Tanmay",
    "venId": "vendor2",
    "venMobile": "9991962099",
    "speciality": "Jeera Aloo",
    "todayMenu": "menu2"
}, {
    "venName": "Nitesh",
    "venId": "vendor3",
    "venMobile": "740433999",
    "speciality": "Rajma",
    "todayMenu": "menu3"
}, {
    "venName": "Jyoti",
    "venId": "vendor4",
    "venMobile": "7357471234",
    "speciality": "Chana Masala",
    "todayMenu": "menu4"
}, {
    "venName": "Rachna",
    "venId": "vendor5",
    "venMobile": "9254560987",
    "speciality": "Kadhai Paneer",
    "todayMenu": "menu5"
}]
