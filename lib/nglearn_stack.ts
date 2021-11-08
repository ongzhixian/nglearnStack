import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';
// import * as sns from '@aws-cdk/aws-sns';
// import * as subs from '@aws-cdk/aws-sns-subscriptions';
// import * as sqs from '@aws-cdk/aws-sqs';


export class NglearnStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // defines an AWS Lambda resource
    const hello = new lambda.Function(this, 'HelloHandler', {
      functionName: "ngLearnHelloWorld",
      description: "Hello world function for ngLearnStack",
      runtime: lambda.Runtime.NODEJS_14_X,              // execution environment
      code: lambda.Code.fromAsset('lambda_functions'),  // code loaded from "lambda" directory
      handler: 'hello.handler'                          // file is "hello", function is "handler"
    
    });

    // const queue = new sqs.Queue(this, 'CdkWorkshopQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });

    // const topic = new sns.Topic(this, 'CdkWorkshopTopic');

    // topic.addSubscription(new subs.SqsSubscription(queue));


  }
}
