import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxios from "../../Hooks/useAxios";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { useParams } from "react-router-dom";
import useBiodata from "../../Hooks/useBiodata";

const Payment = ({id}) => {
  const {user} = useAuth()
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState(false);
  const [clientSecret, setclientSecret] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxios()
  const price = 5;
 
  const [biodata] = useBiodata() || [];
  const data = biodata.find((bio) => bio._id === id);

  useEffect(()=> {
      axiosSecure.post('/create-payment-intent', {price})
      .then(res => {
        // console.log(res.data.clientSecret);
        setclientSecret(res.data.clientSecret)
                    if (res.data.insertedId) {
                      // Swal.fire({
                      //   position: "top-end",
                      //   icon: "success",
                      //   title: `Payment has Benn Submitted`,
                      //   showConfirmButton: false,
                      //   timer: 1000,
                      // });
                      console.log('saved');
                    }
      })
  },[axiosSecure,price])

  const handleSubmit = async (event) => {
  
    event.preventDefault();

    if (!stripe || !elements) {
    
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setErr(error.message)
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setErr('')
    }
   
    // confirm cardc payment 
    const { paymentIntent , error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name:user?.displayName || 'anonymous' ,
            email: user?.email || 'anonymous'
          }
        },
      });

      if(confirmError){
        console.log("[error]", confirmError);
      }else{
        console.log("payment Intent : ", paymentIntent);
        if(paymentIntent.status === 'succeeded'){
            console.log('transection ID: ', paymentIntent.id);
            setMessage(paymentIntent.id)


            // now save the info from database =============
            const payment = {
              email: user?.email ,
              price: price,
              transection: paymentIntent?.id,
              status: 'pending',
              ownername: data?.name,
              ownerEmail: data?.email,
              biodataId: data?.bioId,
              mobile: data?.mobile,
              age: data?.age,
              occupation: data?.occupation
            }

            axiosSecure.post('/payments', payment)
            .then(res => {
              console.log(res.data);
              if (res.data.insertedId) {
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: `Payment has Been Submitted`,
                  showConfirmButton: false,
                  timer: 1000,
                });
              }
            })
        }
      }
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto bg-white shadow-md p-6 rounded-lg border border-gray-200"
      >
        <h1 className="text-xl font-bold mb-4 text-gray-700 text-center">
          Complete Your Payment
        </h1>

        {/* Card Element */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Card Details
          </label>
          <div className="border rounded-md p-3 shadow-sm focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500">
            <CardElement
              options={{
                style: {
                  base: {
                    fontSize: "16px",
                    color: "#424770",
                    "::placeholder": {
                      color: "#aab7c4",
                    },
                  },
                  invalid: {
                    color: "#9e2146",
                  },
                },
              }}
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={!stripe || isLoading || !clientSecret }
          className={`w-full py-2 px-4 rounded-md text-white font-semibold ${
            isLoading || !stripe
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {isLoading ? "Processing..." : "Pay"}
        </button>

        {/* Message Display */}
        {message && (
          <div className="mt-4 p-3 text-sm text-center text-green-700 bg-green-100 rounded-lg">
           <span className="text-green-600 font-semibold">Transection ID : </span> {message}
          </div>
        )}
        {err && (
          <div className="mt-4 p-3 text-sm text-center text-red-700 bg-green-100 rounded-lg">
            {err}
          </div>
        )}
      </form>
    </div>
  );
};

export default Payment;
