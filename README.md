# demo-site

This is a sample project to showcase our serverless [proxy stack](https://github.com/KlickMarketing/demo-stack-proxy).

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Installation

`yarn install`

## Configuration

The serverless pipeline for this site relys on two other services to be deployed first.
Please first deploy those into your environment and then come back here and continue deploying this one.

- [demo-stack-proxy](https://github.com/KlickMarketing/demo-stack-proxy)
- [demo-stack-entry-cfn](https://github.com/KlickMarketing/demo-stack-entry-cfn)

## Deployment

`sls deploy -s dev`