package com.axis.model;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="employeemanagement")
public class Employee {
	private String empid;
	public String _id;
	private String name;
	private String email;
	private String role;
	private String passwd;
	private int leaveCount;
	
	public Employee(String empid, String name,String role,String email, int leaveCount,String passwd) {
		super();
		this.empid = empid;
		this.name = name;
		this.email=email;
		this.role=role;
		this.passwd=passwd;
		this.leaveCount = leaveCount;
	}
	public Employee() {
		super();
		// TODO Auto-generated constructor stub
	}
	public String getPasswd() {
		return passwd;
	}
	public void setPasswd(String passwd) {
		this.passwd = passwd;
	}
	public String getEmpid() {
		return empid;
	}
	public void setEmpid(String empid) {
		this.empid = empid;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getLeaveCount() {
		return leaveCount;
	}
	public void setLeaveCount(int leaveCount) {
		this.leaveCount = leaveCount;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
}
