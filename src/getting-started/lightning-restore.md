# Lightning Restore

## Introduction
Lightning Restore allows you to get your own nodes running and synced in seconds, not days. Previously, when running your own node you may have had to wait days for the node to completely sync, OnFinality now supports Lightning Restore across most of its supported networks and in multiple regions allowing you to save time and money.

Lightning Restore takes regular backups of OnFinality’s managed nodes and then uses that backup as a base to create your new node. We capture these backups up to every 5 minutes, so once your node has been created via Lightning Restore it will need to sync only with the most recent blocks.

## Which nodes support Lightning Restore?
Whenever you’re using [OnFinality](https://app.onfinality.io) to deploy your own dedicated node, look for the "Lightning Restore" icon.

In order to use lightning restore, your node must be of the correct node type, region, and satisfy a minimum storage size. `Networks` which support Lightning Restore will show the "Lightning Restore" icon when deploying a node. Hover over the icon to view which node types are supported.

<img src="/img/lightning-restore-network.png" width="60%">

`Regions` which support Lightning Restore for that `Network` & `Node Type` combination will also show the "Lightning Restore" icon.

<img src="/img/lightning-restore-node.png" width="60%">

If your node's storage size does not meet the minimum required for Lightning Restore the following alert will be displayed.

<img src="/img/lightning-restore-storage.png" width="60%">

> :warning: **Please note:** Altering certain launch arguments, such as the pruning mode, could prevent Lightning Restore from being used

