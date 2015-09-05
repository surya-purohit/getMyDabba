App.Vendor = DS.Model.extend({
    venName: DS.attr('string'),
    venId: DS.attr('string'),
    venMobile: DS.attr('string'),
    speciality: DS.attr('string'),
    password: DS.attr('string')
});
App.Vendor.FIXTURES = [{
    "venName": "Surya",
    "venId": "vendor1",
    "venMobile": "9999999999",
    "speciality": "Kheer",
    "password": "abcd@123",
    "id": "1"
}, {
    "venName": "Tanmay",
    "venId": "vendor2",
    "venMobile": "9991962099",
    "speciality": "Jeera Aloo",
    "password": "wxyz@0987",
    "id": "2"
}, {
    "venName": "Nitesh",
    "venId": "vendor3",
    "venMobile": "740433999",
    "speciality": "Rajma",
    "password": "hrhk@123",
    "id": "3"
}, {
    "venName": "Jyoti",
    "venId": "vendor4",
    "venMobile": "7357471234",
    "speciality": "Chana Masala",
    "password": "hrhk1234",
    "id": "4"
}, {
    "venName": "Rachna",
    "venId": "vendor5",
    "venMobile": "9254560987",
    "speciality": "Kadhai Paneer",
    "password": "jklm8765",
    "id": "5"
}]
