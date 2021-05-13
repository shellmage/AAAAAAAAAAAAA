# AAAAAAAAAAAAA

AAAAAAAAAAAAA is a messenger chatbot that supports the '@everyone' discord-like feature.

# Requirements

[nodejs](https://nodejs.org/en/)<br>

# Install

Clone this repo, and install dependencies
```
git clone https://github.com/shellmage/AAAAAAAAAAAAA.git
cd AAAAAAAAAAAAA/
npm install
```

# Usage

Open getAppstate.js and change the "EMAIL" and "PASSWORD" to your facebook email and password.<br>
Now execute it to save your cookies to the appstate.json file that you will use to login.
```
node getAppstate.js
```
Now delete your email and password from the getAppstate.js file.<br>
(PS: DO NOT UPLOAD YOUR PASSWORD OR 'appstate.json' FILE TO THE INTERNET!)<br>
<br>
To start the bot run:
```
node app.js
```

# Note

For security reasons, make sure to check the [password safety](https://github.com/Schmavery/facebook-chat-api/blob/master/DOCS.md#password-safety)
section in the facebook-chat-api repo.
