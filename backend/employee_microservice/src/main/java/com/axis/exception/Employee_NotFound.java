package com.axis.exception;

public class Employee_NotFound extends RuntimeException{
	String msg;

	public Employee_NotFound(String msg) {
		super();
		this.msg=msg;
		// TODO Auto-generated constructor stub
	}
	public String getmsg() {
		return msg;
	}

}
