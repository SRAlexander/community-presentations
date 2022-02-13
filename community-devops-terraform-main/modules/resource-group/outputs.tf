output "rg_id" {
  description = "Azure Resource Group ID"
  value = azurerm_resource_group.rg.id
}

output "rg_name" {
  description = "Azure Resource Group Name"
  value = azurerm_resource_group.rg.name
}

