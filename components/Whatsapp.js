import React from 'react'
import { FloatingWhatsApp } from "react-floating-whatsapp"

function Whatsapp() {
    return (
        <div className="">
            <FloatingWhatsApp
                phoneNumber="27789690660"
                accountName="Odwa"
                avatar='/android-chrome-512x512.png'
                chatMessage="Hi there! How can I help?"
                allowEsc
                allowClickAway
                notification
                notificationSound
            />
        </div>
    )
}

export default Whatsapp