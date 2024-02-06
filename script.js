function sendMail(){
    let parms={
        name:"Dipesh",
        email:"yraikar22it@student.mes.ac.in",
        subject:"test",
        message:"test"
    }
    emailjs.send("service_p1h9ans","template_y2h48zh",parms).then(alert("Email sent!"))
}