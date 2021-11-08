# CDK CLI

## tldr;



## Create project

```
ZOGA330>zhixian E:\src\github.com\ongzhixian\nglearnStack (main)
PS> cdk init app nglearnStack --language=typescript
```

## Watching for changes

npm run watch

## Deploy / Destroy

cdk deploy

cdk destroy 

Add option '--profile=xxx' to use specific profile.

## Layers

ZOGA330>zhixian E:\src\github.com\ongzhixian\nglearnStack (main)
PS> npm install --prefix ./lambda_layers/nglearn_common/nodejs/ uuid
E:\src\github.com\ongzhixian\nglearnStack\lambda_functions\nglearn_common\nodejs\uuid 
    -> E:\src\github.com\ongzhixian\nglearnStack\lambda_functions\nglearn_common\nodejs\node_modules\uuid\dist\bin\uuid

Note: 
    Any arbitrary code should reside in 'nodejs' folder.
    Modules should be installed to 'nodejs/node_modules'.
    When we set the location for the code for the lambda, we defined it as:
    ```
    code: lambda.Code.fromAsset('lambda_layers/nglearn_common'),
    ```

## CDK

Notes:
    AWS Lambda does not official support ESM.
    As AWS Lambda only supports commonJS, the Lambda entrypoint is a commonJS file.

npm install @aws-cdk/aws-lambda
npm install @aws-cdk/aws-apigateway