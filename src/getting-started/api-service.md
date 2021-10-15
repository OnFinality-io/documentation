# The Enhanced API Service

## Introduction

Our API Service allows you to access managed shared nodes so that you can forget about infrastructure and start developing immediately.

It's a fully managed infrastructure solution for blockchain developers across the Polkadot network. You can access shared nodes on different networks instantly and securely.

- Managed for you - We will do all the hard work for you in terms of infrastructure maintenance.
- Fee to Start - During the beta phase, our API Service will be free so that we can test and improve our services as quickly as possible. We will keep a generous free tier when we end the beta phase so that you can still try new things.
- Scalable - We will take care of scalability and resiliency so you can access nodes that are close to you and your users.
- Global - Our load balancers will distribute your requests to the closest node to your users, use our API Service to scale with performance from day 1.
- Monitoring - We're building our dashboard to give your the monitoring that you need on your requests and app performance so that you can understand and serve your users better.
- Documentation - We're all started somewhere, we plan to help all new to blockchain development with easy to use developer getting started documentation.

## Creating your own API Key

Registering and getting access to the API Service only takes a few minutes - we've designed the process to be as easy as possible.

### Login to OnFinality

First, go to [app.onfinality.io](https://app.onfinality.io/login) to create an account in OnFinality or log on using your existing account if you already have one. [Logging into OnFinality](https://support.onfinality.io/hc/en-us/articles/900000478026)

Once you're in, go to to the *API Service *page.

### A Quick Tour


The API Service page currently has three sections; a daily request indicator, the API key detail, and a usage graph.

### Daily Request Indicator

Our API Service plans are billed based on the number of requests per day. As shown above, our free tier currently includes 500,000 requests that reset every 24 hours. This section clearly shows how many requests you have consumed in the progress bar and exactly when your daily usage count resets.

### API Key 

For each network, we provide you with two enpoints, an HTTPS and a Websocket connection.  You can click on the Polkadot and Kusama network names above to switch between the displayed network URLs.

These URLs include your API key, which is private and unique to your account. You cannot let anyone know your API key, and you should do as much as possible to protect it and keep it secret as it is directly linked to your billing account. If you believe that your API key is in use by an unauthorized third party, then you can use the *Regenerate Key* button the reset it.

### Usage Graph

The usage graph shows you the volume of API requests made to your account over the last 24 hours or 30 days. You are viewing all blockchains by default, but can also filter down the request to a specific blockchain.

## Connect to your API Service

Once you have your [API service enabled and running](https://support.onfinality.io/hc/en-us/articles/900004222183) (see [API Service - Getting Started](https://support.onfinality.io/hc/en-us/articles/900004222183)) you can now connect to it and start using it in your dApps.

We're going to use the Polkadot/Substrate Portal to connect to our API service, but these instructions will also work for other similar methods.

Head to [PolkadotJS UI](https://polkadot.js.org/apps/#/accounts), and then to the Explorer tab under Network, and on the top of your screen click on the Polkadot Icon.


This will open the Network switcher which will allow you to select the network that you connect to. You can add your OnFinality API service endpoint to the Development section by pasting the websocket connection URL into the custom endpoint field and clicking on the save icon.

Congratulations, you're not connected and can start making calls with the Polkadot/Substrate UI App. We can't wait to see that you start building!
