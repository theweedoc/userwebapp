import React,{useEffect} from 'react'
     
const RazorPayPayment = () => {
   const options = {
       key: "rzp_test_HJG5Rtuy8Xh2NB",
       amount: "100", 
       name: "The WeeDoc",
       description: "Test",
       image: "logo.png",
       handler: function(response) {
         alert(response.razorpay_payment_id);
       },
       prefill: {
         name: "Kishore",
         contact: "1234567890",
         email: "demo@demo.com"
       },
       notes: {
         address: "test Address"
       },
       theme: {
         color: "#2E2E2E",
         hide_topbar: false
       }
     };
   
     const openPayModal = options => {
       var razorpayment = new window.Razorpay(options);
       razorpayment.open();
     };
     useEffect(() => {
       const script = document.createElement("script");
       script.src = "https://checkout.razorpay.com/v1/checkout.js";
       script.async = true;
       document.body.appendChild(script);
     }, []);


 
  return (
    <div> <button onClick={()=>openPayModal(options)}>PAYMENT GATEWAY</button> </div>
  )
}

export default RazorPayPayment       
       
