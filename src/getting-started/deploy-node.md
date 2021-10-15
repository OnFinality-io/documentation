# Deploy a Dedicated Node

## Introduction

OnFinality makes it really easy to create new nodes on various supported networks. In minutes, you can have a new node online on any cloud of your choosing. This guide will use Kusama to show you how, but is also relevant to any other network (including the existing public networks already in OnFinality).

## Get Started

[Login](https://app.onfinality.io/) to your OnFinality account and go to the `Nodes List` page. Here click on `Create New` in the top right of your screen.


## Select a Network

The first page will allow you to select what network you want to create a new node in. This list will show both public networks that OnFinality supports, and also any private or custom network that you've already added. Today we're going to create a Kusama network, so we'll click on `Polkadot - Kusama`.


## Configure your New Node

This steps allows you to enter the various settings that you want your ode to be created with, you can enter a memorable name, and also change the node size and deployment location.

I'm going to give my node a simple name, and deploy it to Google Cloud Platform's Singapore region.

Lastly, I'm going to change the `Node Specification`. We strongly suggest following the recommended settings here if your node is going to be used for any production workloads - changing this settings could result in adverse behaviour across your network.

Because I'm using this node just to test that I can get up and running on Kusama, I'm going to change my node specification to 2 Units, and select a 40GB storage size. You should consult the network's own documentation for minimum sizes and best practices



Now that we've configured our new node, I'm going to click `Next`.

## Review your New Node

The last step shows you all the settings about your new node, you can go back to change any details or click `Create Node` to provision your new node on your selected cloud.


## Select Billing Method

Select your billing method for this node using the checkbox provided and then click `Create Node`. 

Your credit card will automatically be billed at the end of each month with the running costs of your new node, and you'll receive an itemised invoice via email.

If you haven't already added billing details to your account, and you're not on a premiere plan you'll need to add a credit card. Click *Add new payment method *and enter your details on the secure popup.



## Congratulations, now go and build your dApp!

Back on your Nodes list, you'll see your new node appear. It will take a few minutes to initialise but you can click on it to view its details.


