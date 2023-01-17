package com.axis.exception;

public class NoLeavesFound extends RuntimeException {
	String msg;

	public NoLeavesFound(String msg) {
		super();
		this.msg=msg;
		// TODO Auto-generated constructor stub
	}
	public String getmsg() {
		return msg;
	}
}
