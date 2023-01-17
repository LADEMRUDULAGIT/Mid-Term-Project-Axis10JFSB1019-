package com.axis.repository;


import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.axis.model.Employee;
public interface EmployeeRepository extends MongoRepository<Employee,String> {
	Employee findByEmpid(String empid);
	Employee findByName(String name);
}
