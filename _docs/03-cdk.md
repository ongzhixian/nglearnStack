# CDK Files

lib/cdk-workshop-stack.ts
    Defines a CDK stack and the AWS resources it will provision or access.

bin/cdk-workshop.ts 
    Entrypoint of the CDK application. 
    It will load the stack defined in lib/cdk-workshop-stack.ts.

package.json    
    Npm module manifest. 
    It includes information like the name of your app, version, dependencies and build scripts like “watch” and “build” (package-lock.json is maintained by npm)

cdk.json 
    Tells CDK how to run your app.
    For example: "npx ts-node --prefer-ts-exts bin/nglearn_stack.ts"
    
tsconfig.json 
    Project’s Typescript configuration

.gitignore and .npmignore 
    Tells git and npm which files to include/exclude from source control 
    and when publishing this module to the package manager.

node_modules 
    Maintained by npm and includes all your project’s dependencies.