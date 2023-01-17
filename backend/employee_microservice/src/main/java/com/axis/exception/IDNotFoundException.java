package com.axis.exception;

public class IDNotFoundException extends RuntimeException {
	String msg;
	
	public IDNotFoundException(String msg) {
		super();
		this.msg = msg;
	}

	public String getmsg() {
		return this.msg;
	}
}
