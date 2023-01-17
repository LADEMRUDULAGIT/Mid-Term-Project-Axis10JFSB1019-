package com.axis;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.web.bind.annotation.CrossOrigin;
@EnableFeignClients
@EnableDiscoveryClient
@SpringBootApplication
@CrossOrigin(origins="*")
public class LeavemanagementMicroserviceApplication {

	public static void main(String[] args) {
		SpringApplication.run(LeavemanagementMicroserviceApplication.class, args);
	}

}
