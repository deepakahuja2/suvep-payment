console.log("Hi !!!!!!!!!!! ");
    var options = {
        "key": "rzp_test_h5iCkEZGWojMlW", // Enter the Key ID generated from the Dashboard Yash ID 
        // "key": "rzp_test_PpOinqLyVBHOcP", // Enter the Key ID generated from the Dashboard
        "amount": 320*100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 means 50000 paise or ₹500.
        "currency": "INR",
        "name": "Devotional Study",
        "description": "Tutorial",
        "image": "logo.png",// Replace this with the order_id created using Orders API (https://razorpay.com/docs/api/orders).
        "handler": function (response){
            // savetoDB(response);
            $('#myModal').modal();
        },
        "prefill": {
            "name": "Akshay Bhatia",
            "email": "akshay.bhatia@gmail.com",
            "contact": "9999999999"
        },
        "notes": {
            "address": "note value"
        },
        "theme": {
            "color": "#9932CC"
        }
    }
    var rzp1 = new Razorpay(options);
    rzp1.on('payment.failed', function (response){
        alert(response.error.code);
        alert(response.error.description);
        alert(response.error.source);
        alert(response.error.step);
        alert(response.error.reason);
        alert(response.error.metadata.order_id);
        alert(response.error.metadata.payment_id);
});
console.log("Btn : "+btn);
var btn = document.getElementById('proceed').onclick = function(e){
    rzp1.open();
    e.preventDefault();
}



// function savetoDB(response) {
//     console.log(response)
//     var payRef = firebase.database().ref('payment');

//     payRef.child('123456789').set({
//     payment_id : response.razorpay_payment_id
//     })
// }
