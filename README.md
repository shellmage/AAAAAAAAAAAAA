# AAAAAAAAAAAAA

AAAAAAAAAAAAA is a messenger-chat-bot that supports the '@everyone' discord-like feature.

# Requirements

[nodejs](https://nodejs.org/en/)<br>
[facebook-chat-api](https://github.com/Schmavery/facebook-chat-api)

# Install

To install nodejs on Debian-based:
```
sudo apt install nodejs
```
Or, on Arch-based:
```
sudo pacman -S nodejs
```
Then clone this repo, and install the [facebook-chat-api](https://github.com/Schmavery/facebook-chat-api)
```
git clone https://github.com/shellcxd3/AAAAAAAAAAAAA.git
cd AAAAAAAAAAAAA/
npm install facebook-chat-api
```

# Usage

First, change the "FB_EMAIL" and "FB_PASSWORD" in the login.js file to your email and password then execute it:
```
node login.js
```
This generates the appstate.json file that you will use to login without your plain text credentials, 
Once you complete that step, delete your email and password from the login.js file
(ps: please don't upload your plain-text passwords to the internet!)<br>
then run:
```
node app.js
```

# Note

For security reasons, make sure to check the [password safety](https://github.com/Schmavery/facebook-chat-api/blob/master/DOCS.md#password-safety)
section in the [facebook-chat-api](https://github.com/Schmavery/facebook-chat-api) repo.
