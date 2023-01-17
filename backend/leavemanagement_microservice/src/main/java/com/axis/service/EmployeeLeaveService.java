package com.axis.service;

import java.util.List;
import java.util.Optional;

import com.axis.model.Employee;
import com.axis.model.EmployeeLeave;

public interface EmployeeLeaveService {
	public EmployeeLeave addEmployeeLeave(EmployeeLeave employeeleave);
	public List<EmployeeLeave> getAllEmployeeLeaves();
	public EmployeeLeave updateEmployeeLeave(EmployeeLeave repemployeeleave,EmployeeLeave userempleave);
    public String deleteEmployeeLeave(List<EmployeeLeave> empleave);
    public void checkleavecount(int leavecount);
    public void checkEmployeeLeave(List<EmployeeLeave> Employeeleaves);
   // public EmployeeLeave getEmployeeLeaveById(String id);
//    public Optional<EmployeeLeave> getEmployeeLeaveByName(String name);
}
