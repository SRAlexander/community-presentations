#############################################################################
# VARIABLES
#############################################################################

variable reg_server_username {}
variable reg_server_password {}
variable reg_server_url {}
variable docker_image_name {}
variable docker_app_service_name {}
variable name {}
variable location {}
variable resource_group_name {}

locals {
  fx_version = "DOCKER|${var.reg_server_url}/${var.docker_image_name}:1.0"
  reg_server =  "https://${var.reg_server_url}"
}

#############################################################################
# Resources
#############################################################################

resource "azurerm_app_service_plan" "main" {
  name                = "${var.docker_app_service_name}-plan"
  location            = var.location
  resource_group_name = var.resource_group_name
  kind                = "linux"
  reserved            = true
  
  sku {
	capacity = 1
	tier     = "Basic"
    size     = "B1"
  }
}

resource "azurerm_app_service" "main" {
  name                = "${var.docker_app_service_name}-container"
  location            = var.location
  resource_group_name = var.resource_group_name
  app_service_plan_id = azurerm_app_service_plan.main.id
  
  site_config {
    always_on        = true
    app_command_line = ""
    ftps_state       = "Disabled"
    ip_restriction   = []
    linux_fx_version = local.fx_version
  }

  app_settings =  {
    "DOCKER_REGISTRY_SERVER_USERNAME"     = var.reg_server_username
	  "DOCKER_REGISTRY_SERVER_PASSWORD"     = var.reg_server_password
	  "DOCKER_REGISTRY_SERVER_URL"          = local.reg_server
	  "DOCKER_ENABLE_CI" = true
  }
}
