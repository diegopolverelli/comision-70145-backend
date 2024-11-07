import twilio from "twilio"
const accountSid = 'accountSid de twilio';
const authToken = 'authToken de twilio';
// const client = require('twilio')(accountSid, authToken);
const client = twilio(accountSid, authToken)

client.messages
    .create({
        from: 'whatsapp:+14155238886',
        body: "Prueba de mensaje desde WS",
        // contentSid: 'HX229f5a04fd0510ce1b071852155d3e75',
        // contentVariables: '{"1":"409173"}',
        to: 'whatsapp:+5491154200776'
    })
    .then(message => console.log(message.sid))
    // .done();