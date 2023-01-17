package com.axis.service;

import java.util.List;

import com.axis.model.Employee;

public interface EmployeeService {
	public Employee addEmployee(Employee Employee);
	public List<Employee> getAllEmployees();
	public Employee updateEmployee(Employee repEmployee,Employee Employee);
    public String deleteEmployee(Employee Employees);
    //public void checkEmployee(List<Employee> Employee);
    public void updatepassword(Employee repemployee,Employee Employee);
}
