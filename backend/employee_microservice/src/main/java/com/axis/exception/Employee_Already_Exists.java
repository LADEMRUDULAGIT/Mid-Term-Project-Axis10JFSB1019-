package com.axis.exception;

public class Employee_Already_Exists extends RuntimeException{
	String msg;

	public Employee_Already_Exists(String msg) {
		super();
		this.msg=msg;
	}
	public String getmsg() {
		return msg;
	}

}
