
const accountSid = 'ACd263180b73c231c5fb7797803649cae8';
const authToken = 'ac677efb68ed2f93ee5470f9eab63a7f';
const client = require('twilio')(accountSid, authToken);



export function call_create(){
    client.calls
      .create({
         url: 'http://demo.twilio.com/docs/voice.xml',
         to: '+13109088913',
         from: '+14243533761'
       })
      .then(call => console.log(call.sid))
      .done();
}
