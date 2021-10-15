# Upgrade image version for api service nodes

## Add the new image to OnFinality

1.  Login to the [OnFinality Portal](https://app.onfinality.io/)
2.  Navigate to the Networks > Network Specifications
3.  Click on your network, go to the network edit page
4.  Click Edit under the Docker Hub Image section
5.  Select the new image version and submit## Update API service nodes to use the new image version

OnFinality suggests that you should perform a rolling upgrade, that is update each node sequentially to ensure that you new image version starts when deployed.

1.  Navigate to Dedicated Nodes
2.  Click Upgrade Image at the top right corner
3.  Upgrade the node to use the new image version