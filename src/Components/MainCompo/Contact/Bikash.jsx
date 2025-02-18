import { useParams } from "react-router-dom"


const Bikash = () => {

    const {trandid} = useParams()

    // fetch('https://make-marriege-server.vercel.app/order-bikash', {
    //     method: 'POST', 
    //     headers: {
    //       'Content-Type': 'application/json' // Ensure the backend knows to expect JSON data
    //     },
    //     body: JSON.stringify(payment) // Convert the `payment` object to a JSON string
    //   })
    //   .then(res => res.json())
    //   .then(data => {
    //     window.location.replace(data.url)
    //     console.log(data);
    //   })
    // }
  return (
    <div>Bikash Payment SuccessFull , Transection ID: {trandid}</div>
  )
}

export default Bikash