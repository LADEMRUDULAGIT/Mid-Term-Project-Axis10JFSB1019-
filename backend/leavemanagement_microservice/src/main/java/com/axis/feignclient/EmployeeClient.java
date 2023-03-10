package com.axis.feignclient;

import java.util.List;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.axis.model.Employee;

@FeignClient(name="EmployeeManagement")
public interface EmployeeClient {
	@PutMapping("employee/update/{id}")
	Employee updateEmployee(@PathVariable String id,@RequestBody Employee employee);
	@GetMapping("employee/{id}")
	public Employee getEmployee(@PathVariable String id);
	
}
