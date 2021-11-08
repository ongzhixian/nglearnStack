import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as NglearnStack from '../lib/nglearn_stack-stack';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new NglearnStack.NglearnStackStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
