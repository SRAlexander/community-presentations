CLI Demos

1-cli-basic 

Step 1: Install the Azure CLI - https://docs.microsoft.com/en-us/cli/azure/install-azure-cli (Required for both demos)
Step 2: Login with "az login" (You will be redirected to the Azure portal login page)
Step 2.5: If you have more than one subscription, use the tenant flag and key "az login --tenant xxxx-xxxx-xxxx-xxxx"
Step 3: Intialise the teraform instance "terraform int"
Step 4: Build your change plan "terraform plan -out plan"
Step 5: Review the plan
Step 6: Apply the plan to to your azure instance "terraform apply "plan"
Note: Following step 6, you will now see a Terraform State, any further changes outside of this process will break Terraform going forwards.

2-cli-backend

Terraform can use a remote state file, an azure stoage blob is perfect to do so if multiple users will be using the configuration.

Create a blob storage...
Step 1: Run the following "az group create --name $RESOURCE_GROUP_NAME --location $LOCATION" filling in location with uksouth and a sutiable name for your resource group.
Step 2: Run the following "az storage account create --resource-group $RESOURCE_GROUP_NAME --name $STORAGE_ACCOUNT_NAME --sku Standard_LRS --encryption-services blob" again filling in $RESOURCE_GROUP_NAME with the name from step 1 and $STORAGE_ACCOUNT_NAME.
Step 3: Create an acount key with the following "(az storage account keys list --resource-group $RESOURCE_GROUP_NAME --account-name $STORAGE_ACCOUNT_NAME --query '[0].value' -o tsv)", filling in $RESOURCE_GROUP_NAME from step 1 and $STORAGE_ACCOUNT_NAME from step 2
Step 4: Create the blob storage with "az storage container create --name $CONTAINER_NAME --account-name $STORAGE_ACCOUNT_NAME --account-key $ACCOUNT_KEY" using $STORAGE_ACCOUNT_NAME from step 2 and $ACCOUNT_KEY from step 3.

Further details can be found here https://docs.microsoft.com/en-us/azure/developer/terraform/store-state-in-azure-storage

You can now follow the steps from the cli-basic process

3-service-provider-basic

Create a service principal
az ad sp create-for-rbac --role="Contributor" --scopes="/subscriptions/xxxxxxxxxxxxxxx"
{
  "appId": "example client_id", = client_id
  "displayName": "azure-cli-2021-05-09-19-31-48", 
  "name": "http://azure-cli-2021-05-09-19-31-48",
  "password": "example password", = client_secret
  "tenant": "example tenant"  = client_tenant
}

make sure you are logged out... "az logout"

run the following... 
terraform plan -out plan -var ARM_SUBSCRIPTION_ID="insert value" -var ARM_CLIENT_ID="insert value" -var ARM_CLIENT_SECRET="insert value" -var ARM_TENANT_ID="insert value"


4-service-prinipal-backend

Follow the instructions in step 3 to create a service prinicpal in you've not done so already.

For this example, I've removed the input vairables, instead set them as environment variables...

export ARM_SUBSCRIPTION=insert value
export ARM_CLIENT_ID=insert value
export ARM_CLIENT_SECRET=insert value
export ARM_TENANT_ID=insert value
export ACCESS_KEY=insert value

after setting the variables run... 
terraform plan -out plan
terrafrom apply "plan"