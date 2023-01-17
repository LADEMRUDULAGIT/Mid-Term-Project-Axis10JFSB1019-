package com.axis.model;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.format.annotation.DateTimeFormat;
@Document(collection="employeeleave")
public class EmployeeLeave {
	private String empid;
	private String name;
	public String _id;
	//private int noOfDays;
	private String leaveType;
//	@DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME)
	private String fromDate;
	private String status;
	
//	@DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME)
	private String toDate;
	public EmployeeLeave(String empid, String name, String leaveType, String fromDate, String toDate,String status) {
		super();
		this.empid = empid;
		this.name = name;
		this.leaveType = leaveType;
		this.fromDate = fromDate;
		this.toDate = toDate;
		this.status=status;
	}
	
	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getToDate() {
		return toDate;
	}
	public void setToDate(String toDate) {
		this.toDate = toDate;
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
	public String getLeaveType() {
		return leaveType;
	}
	public void setLeaveType(String leaveType) {
		this.leaveType = leaveType;
	}
	public String getFromDate() {
		return fromDate;
	}
	public void setFromDate(String fromDate) {
		this.fromDate = fromDate;
	}
	public EmployeeLeave() {
		super();
		// TODO Auto-generated constructor stub
	}
	
}
