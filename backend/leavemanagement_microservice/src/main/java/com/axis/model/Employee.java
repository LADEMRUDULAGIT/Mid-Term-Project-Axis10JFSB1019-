package com.axis.model;

public class Employee {
	private String empid;
	public String _id;
	private String name;
	private String email;
	private String role;
	private int leaveCount;
	public Employee(String empid, String name,String role,String email, int leaveCount) {
		super();
		this.empid = empid;
		this.name = name;
		this.email=email;
		this.role=role;
		this.leaveCount = leaveCount;
	}
	public Employee() {
		super();
		// TODO Auto-generated constructor stub
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
