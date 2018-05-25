# one-trick-pony
This is a limited DNS server which only serves up the minimum set of required servers for Agar.io game play but not for its associated ads, for example. This should allow you to play the game without disruptions, without loss of earned experience points and without the buggy ad-related code which should make it easier to play without the usual/frequent game crashes.

![My Agar.io User](https://cloud.githubusercontent.com/assets/15971213/20247431/fda5b152-a980-11e6-801e-492c75d5457f.jpg)

## Game lag associated with background downloading of ad content
If you've ever suffered loss during game play because of game lag, look no further than the ads themselves as the culprit. The game begins downloading those video ads in the background which then disrupts the normal game play, causing those game-changing lags. **In other words: lose the ads, lose the lag.**

## Server suggestion
I'm running this on a Raspberry Pi Zero W single-board computer ($10), with a 4GB microSD card ($5), a USB-to-micro-USB adapter cable and a Radio Shack—style USB barrel battery. The total cost then is something like $20, noting that you can power the Pi from your own computer if you'd like.

### Running the DNS server with the test ports 3000 and 3001

Ports 3000 and 3001 are useful for testing things since they don't require privileged-level ports and can be run by a standard user.

You can alter the port(s) the server listens to in the **config/index.js** file. Note that if you use the default port of 53 for the **dnsPort** or port 80 for the **webDefaultPort** then you'll need to run node in the superuser mode. See the documentation included in the webserver for running with the default ports. (So you'll want to run it first with the included ones in order to read that documentation.)

### Installation
I'm assuming Raspbian/Ubuntu/Debian for your operating system below. If you're on something else, the first four commands may need to be different for you.

```
$ sudo apt-get update
$ sudo apt-get upgrade
# Get some coffee. No, seriously. Walk to Starbucks because this
# will take some time.
$ curl -sLS https://apt.adafruit.com/add | sudo bash
$ sudo apt-get install node
$ sudo apt-get install git
$ mkdir ~/Sites
$ cd ~/Sites
$ git clone https://github.com/OutsourcedGuru/one-trick-pony.git
$ cd one-trick-pony
$ npm install
$ vi config/index.js
  // Edit the dnsAddr value to your server's
  // external IP address so that the documentation
  // is correct on the home page and so that other
  // game computers can use it.
$ DEBUG=one-trick-pony:* npm start

> one-trick-pony@1.0.0 start /Users/username/Sites/one-trick-pony
> node ./bin/www

  one-trick-pony:server web server listening on *:3000 +0ms
  one-trick-pony:server dns server listening on 127.0.0.1:3001 +2ms
 
```

Next, open up a browser to your [http://localhost:3000](http://localhost:3000) website which should be running. If you have updated the dnsAddr value to your computer's external IP address, substitute this for "localhost" in the URL.

See the webpage's documentation for further details on changing the default ports to their expected values.

## Update
You definitely want to update to the latest v2 of this since Agar.io looks like they've changed their servers. Enjoy.

## Social

Oh, and if you see me in the game (👁‍🗨⚙) and want to earn some free mass, just make sure that you've got eyes like this (regardless of whether or not you use a skin). 👀

If you demonstrate some talent I might just team up with you.

|Donate||Cryptocurrency|
|:-----:|---|:--------:|
| ![eth-receive](https://user-images.githubusercontent.com/15971213/40564950-932d4d10-601f-11e8-90f0-459f8b32f01c.png) || ![btc-receive](https://user-images.githubusercontent.com/15971213/40564971-a2826002-601f-11e8-8d5e-eeb35ab53300.png) |
|Ethereum||Bitcoin|

