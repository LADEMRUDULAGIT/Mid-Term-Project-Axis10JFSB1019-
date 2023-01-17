package com.axis.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.axis.exception.Employee_NotFound;
import com.axis.exception.IDNotFoundException;
import com.axis.model.Employee;
import com.axis.repository.EmployeeRepository;
import com.axis.utils.AppConstants;
@Service
public class EmployeeImpl implements EmployeeService {
     @Autowired
     EmployeeRepository employeerepository;

	@Override
	public Employee addEmployee(Employee Employee) {
		employeerepository.insert(Employee);
		return Employee;
	}

	@Override
	public List<Employee> getAllEmployees() {
		return employeerepository.findAll();
	}

	@Override
	public Employee updateEmployee(Employee repemployee, Employee Employee) {
		Employee.setEmpid(repemployee.getEmpid());
		employeerepository.delete(repemployee);
		repemployee.setEmpid(Employee.getEmpid());
		repemployee.setRole(Employee.getRole());
		repemployee.setEmail(Employee.getEmail());
		repemployee.setLeaveCount(Employee.getLeaveCount());
		repemployee.setName(Employee.getName());
		employeerepository.insert(repemployee);
		return repemployee;
	}

	@Override
	public String deleteEmployee(Employee Employee) {
		 employeerepository.delete(Employee);
		 return "Employee Deleted Successfully.";
	
	}
	 public Employee getlatestdocument(List<Employee> empleaves) {
	    	return empleaves.get(empleaves.size()-1);
	}

	@Override
	public void updatepassword(Employee repemployee,Employee Employee) {
		//employeerepository.findByEmpid(Employee.getEmpid()).setPasswd(Employee.getPasswd());
		Employee emp=repemployee;
		employeerepository.delete(repemployee);
		repemployee=emp;
		repemployee.setPasswd(Employee.getPasswd());
		employeerepository.insert(repemployee);
		//return repemployee;
	}

}
	 
	 
	 
	 
	 
	 
//		if(Employees.size()==0) {
//		throw new  IDNotFoundException(AppConstants.ID_NOT_FOUND);
//	}
	// Employee empleave =getlatestdocument(Employees);
 //employeerepository.findById(id).orElseThrow(()->new IDNotFoundException(AppConstants.ID_NOT_FOUND));

//	 public void checkEmployee(Employee Employee) {
//		 if(Employees.size()==0) {
//			 throw new Employee_NotFound(AppConstants.EMPLOYEE_NOT_FOUND);
//		 }
//	 }
//	@Override
//	public Employee getEmployeeById(String id) {
//		Employee empleave =employeerepository.findById(id).orElseThrow(()->new IDNotFoundException(AppConstants.ID_NOT_FOUND));
//		return empleave;
//	}
//		if(repemployee.size()==0) {
//		throw new  IDNotFoundException(AppConstants.ID_NOT_FOUND);
//	}
//	Employee repfinalemp=getlatestdocument(repemployee);
//	Employee empleave =employeerepository.findById(id).orElseThrow(()->new IDNotFoundException(AppConstants.ID_NOT_FOUND));
	
