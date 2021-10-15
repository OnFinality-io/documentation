# Create a Network on OnFinality

## Introduction

OnFinality supports creating nodes in various protocols from any public docker image. In this tutorial, we'll add the network-spec for a custom network so that later you and your team can deploy your own nodes into it.

In this tutorial, you will learn how to create a brand new one-validator network from your own substrate-based image.

You might want to use it to run some tests, or join more nodes into it to simulate a more complicated scenario. And you are safe to delete the whole network after you're done, and pay only a small price for it since we charge on an hourly basis.

## Preparations

1.  A public substrate-based image on docker hub
2.  A workspace with credit card binded

## Steps

### Create or Join a Network

Firstly, [Login](https://app.onfinality.io/) to your OnFinality account and go to the *Networks* page. Here, click on *Create Network Spec* up in the top right of your screen.

### Enter Network Details

On this page you'll enter some key information about the network that you are joining. Currently we are only supporting joining custom substrate networks (and there are plenty of them!) but this will be expanded in the future.

Firstly, you can give the network a memorable name, and then select the *Protocol* this network follows. The next 3 inputs are really important:

- *Image Repository* is the public docker name of the network's nodes
- *Image Repository Version* is the specific tagged version of that repository you want to take the code off
- _Chainspec_ is the location of the chainspec in that docker repo

Once you've entered all details on this page, click *Submit.*

### Congratulations, now go add your own node to this network

You'll now see the custom network you've joined in your Networks page. Now you can go to the Nodes page and [create a new node in your new network.](https://support.onfinality.io/hc/en-us/articles/900001593946)

3. Chose the spec of bootnode. Note: location decides where your network and all the nodes to join the network sit.
