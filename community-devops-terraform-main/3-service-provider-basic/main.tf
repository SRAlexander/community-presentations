#############################################################################
# CLI VARIABLES
#############################################################################

variable ARM_SUBSCRIPTION_ID {} 
variable ARM_CLIENT_ID { } 
variable ARM_CLIENT_SECRET {}
variable ARM_TENANT_ID  {}

############################################################################
# Azure RM config
#############################################################################

provider "azurerm" {
  features {}
  subscription_id = var.ARM_SUBSCRIPTION_ID
  client_id = var.ARM_CLIENT_ID
  client_secret = var.ARM_CLIENT_SECRET
  tenant_id = var.ARM_TENANT_ID
}

# Configure the Azure provider
terraform {

  required_providers {
    azurerm = {
      source = "hashicorp/azurerm"
      version = ">= 2.26"
    }
  }

}

##################################################################
# Import global variables
##################################################################
module "global_vars" {
    source = "../global_variables"
}

##################################################################
# Create a resource group
##################################################################
module "resource_group" {
  source    = "../modules/resource-group"
  name      = "${module.global_vars.project_name}-${var.env}-rg"
  location  = module.global_vars.location
  tags      = var.tags
}

##################################################################
# Create ui app service and containers
##################################################################
module "frontend_app_service" {
 source                   = "../modules/app-service"
 reg_server_username      = "${module.global_vars.registry_server_username}"
 reg_server_password      = "${module.global_vars.registry_server_password}"
 reg_server_url 	   	    = "${module.global_vars.registry_server_url}"
 docker_image_name 	      = "${module.global_vars.frontend_docker_img_name}"
 docker_app_service_name  = "${module.global_vars.frontend_app_service_name}-${var.env}" 
 name                     = "${module.global_vars.frontend_app_service_name}-${var.env}"
 resource_group_name      = "${module.global_vars.project_name}-${var.env}-rg"
 location                 = module.global_vars.location
#  tags                     = module.global_variables.tags
 depends_on = [
   module.resource_group.rg_id
 ]
}

##################################################################
# Create ui app service and containers
##################################################################
module "backend_app_service" {
 source                   = "../modules/app-service"
 reg_server_username      = "${module.global_vars.registry_server_username}"
 reg_server_password      = "${module.global_vars.registry_server_password}"
 reg_server_url 	   	    = "${module.global_vars.registry_server_url}"
 docker_image_name 	      = "${module.global_vars.backend_docker_img_name}"
 docker_app_service_name  = "${module.global_vars.backend_app_service_name}-${var.env}" 
 name                     = "${module.global_vars.backend_app_service_name}-${var.env}"
 resource_group_name      = "${module.global_vars.project_name}-${var.env}-rg"
 location                 = module.global_vars.location
#  tags                     = module.global_variables.tags
 depends_on = [
   module.resource_group.rg_id
 ]
}