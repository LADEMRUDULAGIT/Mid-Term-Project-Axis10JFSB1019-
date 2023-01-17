package com.axis.exception;

public class EmployeeLeave_NotFound extends RuntimeException{
	String msg;

	public EmployeeLeave_NotFound(String msg) {
		super();
		this.msg=msg;
		// TODO Auto-generated constructor stub
	}
	public String getmsg() {
		return msg;
	}

}
