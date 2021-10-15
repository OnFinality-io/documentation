# Integrate OnFinality in CI/CD
## Summary
This recipe shows how to upgrade your nodes version on OnFinality after a dev release, and where to add steps for testing for the new version.

## Prerequisite
* A valid user network and running nodes on OnFinality (check the other article) // /screenshot/

* A existing pipeline that build and publish binary to dockerhub

## Resources
* Our Github Action: https://github.com/OnFinality-io/action-onf-release 
* Example repo: https://github.com/OnFinality-io/Acala/blob/workshop

## Steps
### 1. Prepare access key and secret key
1. Login to [app.onfinality.io/account](https://app.onfinality.io/account)
2. Create a new Access Key /screenshot/
3. Note down Secret Key

### 2. Modify the existing workflow
Assuming there's a workflow that will build and publish the binary to dockerhub
```
name: Publish Docker image for new releases

on:
  push:
    branches: [ main ]

jobs:
  main:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      
      - name: Set up Docker Buildx
        uses: docker/setup-buildx-action@v1
        
      - name: Login to Dockerhub
        uses: docker/login-action@v1
        with:
          username: ${{ secrets.DOCKERHUB_USERNAME }}
          password: ${{ secrets.DOCKERHUB_TOKEN }}
          
      - name: Declare some variables
        id: vars
        shell: bash
        run: |
          echo "##[set-output name=branch;]$(echo ${GITHUB_REF#refs/heads/})"
          echo "::set-output name=sha_short::$(git rev-parse --short HEAD)"
          
      - name: Build and push
        id:   docker_build
        uses: docker/build-push-action@v2
        with:
          push: true
          file: scripts/Dockerfile
          tags: |
            onfinality/acala:${{ steps.vars.outputs.sha_short }}
            
      - name: Image digest
        run: echo ${{ steps.docker_build.outputs.digest }}
```
Note that the new image vesion is the first 7 letter of the commit hash (sha_short).
Now we add two steps in the end, the first one will push the new version to onfinality, the second one will do a rolling upgrade for all nodes to the new version.

```
      - name: Update image version of the new network spec 
      
        uses: "OnFinality-io/action-onf-release@v1"
        with:
          onf-access-key: ${{secrets.onf-access-key}}
          onf-secret-key: ${{secrets.onf-secret-key}}
          onf-workspace-id: ${{secrets.onf-workspace-id}}
          onf-network-key: b27bcdd4-fee0-44a2-9dae-62006051ef48 
          onf-sub-command: image # node, image
          onf-action: add # upgrade, add
          image-version: ${{ steps.vars.outputs.sha_short }}
          
      - name: Perform a rolling update to all nodes
        uses: "OnFinality-io/action-onf-release@v1"
        with:
          onf-access-key: ${{secrets.onf-access-key}}
          onf-secret-key: ${{secrets.onf-secret-key}}
          onf-workspace-id: ${{secrets.onf-workspace-id}}
          onf-network-key: b27bcdd4-fee0-44a2-9dae-62006051ef48 
          onf-sub-command: node # node, image
          onf-action: upgrade # upgrade, add
          image-version: ${{ steps.vars.outputs.sha_short }}
          percent: 30
```

## Extend it further
A lot of possibilities are left to be explored. Once a new version rolled out, you can execute some tests for the new client. And then an extra step to upgrade the runtime to the new version, before running other tests for the new runtime.
