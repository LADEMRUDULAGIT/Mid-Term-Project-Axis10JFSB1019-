package com.axis.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.axis.exception.Employee_Already_Exists;
import com.axis.exception.Employee_NotFound;
import com.axis.exception.IDNotFoundException;
import com.axis.model.Employee;
import com.axis.repository.EmployeeRepository;
import com.axis.service.EmployeeService;
import com.axis.utils.AppConstants;

@RestController
@RequestMapping("/employee")
@CrossOrigin(origins="*")
public class EmployeeController {
	@Autowired
	EmployeeService  EmployeeService;
	
	@Autowired
	EmployeeRepository employeerepository;
	
	@PostMapping("/addemployee")
	public ResponseEntity<Employee> addEmployee(@RequestBody Employee employee){
		 Employee found=employeerepository.findByEmpid(employee.getEmpid());
		 employee.setLeaveCount(0);
		 if(found==null) {
			 Employee emp=EmployeeService.addEmployee(employee);
			 return new ResponseEntity<Employee>(emp,HttpStatus.OK);
		 }
		 else {
			 throw new Employee_Already_Exists(AppConstants.EMPLOYEE_ALREADY_EXISTS);
		 }
	}
	@PostMapping("/updatepasswd")
	public String updatePasswd(@RequestBody Employee employee){
		Employee repemployee=employeerepository.findByEmpid(employee.getEmpid());
		if(repemployee!=null) {
			 EmployeeService.updatepassword(repemployee,employee);
			//EmployeeService.updatepassword(employee);
			 return "Password updated Successfully" ;
		}
		else {
			 throw new IDNotFoundException(AppConstants.EMPLOYEE_ID_NOT_FOUND);
		}
		 
//		 else {
//			 throw new Employee_Already_Exists(AppConstants.EMPLOYEE_ALREADY_EXISTS);
//		 }
	}
	@GetMapping("/allemployees")
	public ResponseEntity<List<Employee>> getAllLeaves(){
		 List<Employee> Employees=EmployeeService.getAllEmployees();
		 return new ResponseEntity<List<Employee>>(Employees,HttpStatus.OK);
	}
	@PutMapping("/update/{id}")
	public ResponseEntity<Employee> updateEmployee(@PathVariable String id,@RequestBody Employee employee){
		 Employee repemployee=employeerepository.findByEmpid(id);
		 if(repemployee!=null) {
			 Employee Employee=EmployeeService.updateEmployee(repemployee,employee);
			 return new ResponseEntity<Employee>(Employee,HttpStatus.OK);
		 }
		 else {
			 throw new IDNotFoundException(AppConstants.EMPLOYEE_ID_NOT_FOUND);
		 }

	}
	@DeleteMapping("/delete/{id}")
	public String revokeEmployee(@PathVariable String id){
		 Employee repemployee=employeerepository.findByEmpid(id);
		 if(repemployee!=null) {
			 return EmployeeService.deleteEmployee(repemployee);
		 }
		 else {
			 throw new IDNotFoundException(AppConstants.EMPLOYEE_ID_NOT_FOUND);
		 }
//		 return new ResponseEntity<Employee>(Employee,HttpStatus.OK);
	}
	@GetMapping("/{id}")
	public ResponseEntity<Employee> getEmployee(@PathVariable String id){
		Employee repemployee=employeerepository.findByEmpid(id);
		if(repemployee!=null) {
			return new ResponseEntity<Employee>(repemployee,HttpStatus.OK);
		}
		else {
			throw new IDNotFoundException(AppConstants.EMPLOYEE_ID_NOT_FOUND);
		}
		
	}
	@GetMapping("/getEmployee/{name}")
	public ResponseEntity<Employee> getEmployeeByName(@PathVariable String name){
		Employee repemployee=employeerepository.findByName(name);
		if(repemployee!=null) {
			return new ResponseEntity<Employee>(repemployee,HttpStatus.OK);
		}
		else {
			throw new Employee_NotFound(AppConstants.EMPLOYEE_NOT_FOUND);
		}
	}

	@PostMapping("/validate")
	   public String validateEmployee(@RequestBody Employee employee){
		   String msg = "";	
		   try {
			   //User userData = employeerepository.findUserByEmail(user.getEmail());
			   Employee repemployee=employeerepository.findByEmpid(employee.getEmpid());
			   if( employee.getEmpid().equals(repemployee.getEmpid()) && employee.getPasswd().equals(repemployee.getPasswd())) {
					 msg = "valid";
				   }
			   else {
					   return "invalid";
					   
		       } 
		   }
		   catch(Exception ex) {
			   	msg ="invalid";
		   } 	
		   return msg;
    }
}
//Employee Employee=EmployeeService.addEmployee(employee);
//return new ResponseEntity<Employee>(Employee,HttpStatus.OK);
//EmployeeService.checkEmployee(repemployee);
