import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY)

async function sendEmail(req, res){

    try{
        await sgMail.send({
            to: 'odwa.bungu1@gmail.com',
            from: '3310572@myuwc.ac.za',
            subject: `Portfolio Website Message from name:${req.body.name}, email:${req.body.email}`,
            text: req.body.message

        }).then(() => {
            console.log("Email Sent!")
            res.status(200).json({ status: 'Ok' })
        }).catch((err) => {
            console.log(err.body)
            res.status(400).json({ error: err.message })
        })

    }catch(err){
        console.log(err)
        res.status(200).json({ error: '' })
    }
}

export default sendEmail