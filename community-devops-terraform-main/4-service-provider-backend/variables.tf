variable "env" {
  type    = string
  default = "dev"
}

variable "tags" {
  type    = map
  default = {
    Project = "future-data-systems"
    Environment = "Development Environment"
    Team = "Developers"
  }
}