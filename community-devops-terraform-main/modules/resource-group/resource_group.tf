variable name {}
variable location {}
variable tags {}

# Create resource group
resource "azurerm_resource_group" "rg"{
  name     = var.name
  location = var.location
  tags = var.tags
}