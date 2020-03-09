variable "otus-database-persistence"{
  default = "/otus-platform/docker-persistence/otus-database"
}

variable "otus-database-port" {
	default = 51003
}

variable "otus-database-version" {
	default = "latest"
}

resource "docker_image" "otus-database" {
  name = "otus-database:${var.otus-database-version}"
}

variable "otus-api-network" {
  default = "otus-api-network"
}
resource "docker_container" "otus-database" {
  name = "otus-database"
  image = "${docker_image.otus-database.name}"
  ports {
	internal = 27017
	external = "${var.otus-database-port}"
  }
  volumes {
	host_path = "${var.otus-database-persistence}"
	container_path = "/data/db"
  }
  networks_advanced {
    name    = "${var.otus-api-network}"
  }
}
