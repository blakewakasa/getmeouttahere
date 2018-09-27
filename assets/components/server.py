from flask import (Flask,
    request,
    abort,
    jsonify)
from twilio.rest import Client
app = Flask(__name__)

numbers = []

@app.route("/", methods = ["GET"])
def hello():
    account_sid = 'myaccountsid'
    auth_token = 'myauthtoken'
    client = Client(account_sid, auth_token)

    call = client.calls.create(
                        url='http://demo.twilio.com/docs/voice.xml',
                        to='mynumber',
                        from_='theirnumber'
                    )
    return jsonify({
        'stats'
        })

@app.route("/call",methods = ["POST"])
def output():
    
    number = request.get_json()
    print(number)
    number_taken = number in numbers
    if number_taken:
        abort(403)
    
    account_sid = 'ACd263180b73c231c5fb7797803649cae8'
    auth_token = 'ac677efb68ed2f93ee5470f9eab63a7f'
    client = Client(account_sid, auth_token)

    call = client.calls.create(
                        url='http://demo.twilio.com/docs/voice.xml',
                        to ='+1'+number['mynumber'],
                        from_='14243533761'
                    )
    return jsonify({
        'success':'Successfuly sent',
        })

#@app.route("/confirmed", methods = ["POST"])

'''@app.route("/login",methods = ["POST"])
def login():
    username = request.json['username']
    user_taken = username in users
    if user-taken:
        abort(403)
    else:
        users.append(username)
        return 'Successfully Logged in'
'''


# Your Account Sid and Auth Token from twilio.com/console


if __name__=='__main__':
    app.debug = True
    #print("hello")
    app.run(host = '0.0.0.0', port = "5005")
    
