package net.javaguides.springboot;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;


@SpringBootApplication
@ComponentScan(basePackages = {"net.javaguides.springboot.controller"})
public class SpringbootBackendCrudApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringbootBackendCrudApplication.class, args);
	}

}
