# Upgrade image version for api service nodes

## Add the new image to OnFinality

1.  Login to the [OnFinality Portal](https://app.onfinality.io/)
2.  Navigate to the Networks > Network Specifications
3.  Click on your network, go to the network edit page![image1.png](https://support.onfinality.io/hc/article_attachments/4404816881945/image1.png)
4.  Click Edit under the Docker Hub Image section![image5.png](https://support.onfinality.io/hc/article_attachments/4404802997401/image5.png)
5.  Select the new image version and submit![image2.png](https://support.onfinality.io/hc/article_attachments/4404816906905/image2.png)

## Update API service nodes to use the new image version

OnFinality suggests that you should perform a rolling upgrade, that is update each node sequentially to ensure that you new image version starts when deployed.

1.  Navigate to Dedicated Nodes
2.  Click Upgrade Image at the top right corner\
    ![image3.png](https://support.onfinality.io/hc/article_attachments/4404802986009/image3.png)

3.  Upgrade the node to use the new image version\
    ![image4.png](https://support.onfinality.io/hc/article_attachments/4404802992025/image4.png)
