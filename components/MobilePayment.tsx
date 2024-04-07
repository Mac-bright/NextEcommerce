import { config } from 'process'
import React from 'react'
import { Button } from './ui/button'

/* const paymentLink = `https://api.monetbil.com/widget/v2.1/Lg0Jj0ohS4JiT8nLgxQDfwe2spmFzs2F 
` */
const paymentLink = ` https://api.monetbil.com/payment/v1/placePayment 
`

async function makePayment(){
    const response = await fetch(paymentLink,{
        method:"POST",
        body:JSON.stringify({
            "service": "Lg0Jj0ohS4JiT8nLgxQDfwe2spmFzs2F",
            'amount':'1',
            "phonenumber": "696708977",
            "notify_url": "https://localhost:3000//monetbil/notifications"
        })
    })

    const data = await response.json()
    return console.log(data)
}



async function checkPayment(){

}

/* async function makePayment(){
    const response = await fetch(paymentLink,{
        method:"POST",
        body:JSON.stringify({
            "service": "Lg0Jj0ohS4JiT8nLgxQDfwe2spmFzs2F",
            'amount':'1',
            "phonenumber": "653569658",
            "notify_url": "https://localhost:3000//monetbil/notifications"
        })
    })

    const data = await response.json()
    return console.log(data)
}
 */

const MobilePayment = () => {
  return (
    <div>
        <Button  onClick={() => makePayment()}>Makepayment</Button>
    </div>
  )
}

export default MobilePayment