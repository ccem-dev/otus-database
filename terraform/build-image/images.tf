###############################################
###               Variables                 ###
###############################################

variable "otus-database-name" {
  default = "otus-database"
}

variable "otus-database-directory" {
  default = "otus-api"
}

variable "otus-database-source" {
  default = "source"
}

###############################################
###  OTUS-DATABASE : Build Image Database   ###
###############################################
resource "null_resource" "otus-database" {
  provisioner "local-exec" {
    command = "docker build --target database -t ${var.otus-database-name} ."
  }
}