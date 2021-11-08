import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';
import * as apigw from '@aws-cdk/aws-apigateway';
// import * as sns from '@aws-cdk/aws-sns';
// import * as subs from '@aws-cdk/aws-sns-subscriptions';
// import * as sqs from '@aws-cdk/aws-sqs';


export class NglearnStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    const ngLearnCommonLayer = new lambda.LayerVersion(this, 'ngLearnCommonlayer', {
      layerVersionName: "ngLearnCommonlayer-v1",
      compatibleRuntimes: [lambda.Runtime.NODEJS_14_X],
      code: lambda.Code.fromAsset('lambda_layers/nglearn_common'),
      description: 'Common 3rd party libraries used in nglearn',
    });


    // defines an AWS Lambda resource
    const helloLambda = new lambda.Function(this, 'HelloHandler', {
      functionName: "ngLearnHelloWorld",
      description: "Hello world function for ngLearnStack",
      runtime: lambda.Runtime.NODEJS_14_X,              // execution environment
      code: lambda.Code.fromAsset('lambda_functions'),  // code loaded from "lambda" directory
      handler: 'hello.handler'                          // file is "hello", function is "handler"
    });

    const getGuidLambda = new lambda.Function(this, 'EntropyGetGuid', {
      functionName: "ngLearnGetGuid",
      description: "Get GUID function",
      runtime: lambda.Runtime.NODEJS_14_X,
      code: lambda.Code.fromAsset('lambda_functions'),
      handler: 'entropy.getGuid',
      layers: [ngLearnCommonLayer]
    });

    const getRandomBytesLambda = new lambda.Function(this, 'EntropyRandomBytes', {
      functionName: "ngLearnRandomBytes",
      description: "Get random 20 bytes in hex",
      runtime: lambda.Runtime.NODEJS_14_X,
      code: lambda.Code.fromAsset('lambda_functions'),
      handler: 'entropy.randomBytes'
    });


    // defines an API Gateway REST API resource backed by our "hello" function.
    new apigw.LambdaRestApi(this, 'ngLearnHelloWorld', {
      description: "ngLearn Hello World",
      handler: helloLambda
    });

    new apigw.LambdaRestApi(this, 'ngLearnGetGuid', {
      description: "ngLearn GetGuid",
      handler: getGuidLambda
    });

    new apigw.LambdaRestApi(this, 'ngLearnGetRandomBytes', {
      description: "ngLearn GetRandomBytes",
      handler: getRandomBytesLambda
    });

    // const queue = new sqs.Queue(this, 'CdkWorkshopQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });

    // const topic = new sns.Topic(this, 'CdkWorkshopTopic');

    // topic.addSubscription(new subs.SqsSubscription(queue));


  }
}
