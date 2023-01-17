package com.axis.exception;

import java.time.LocalDate;

public class ErrorInfo {
	private String errorMessage;
    private String httpStatus;
    private LocalDate date;
	public ErrorInfo(String errorMessage, String httpStatus, LocalDate date) {
		super();
		this.errorMessage = errorMessage;
		this.httpStatus = httpStatus;
		this.date = date;
	}
	public String getErrorMessage() {
		return errorMessage;
	}
	public void setErrorMessage(String errorMessage) {
		this.errorMessage = errorMessage;
	}
	public String getHttpStatus() {
		return httpStatus;
	}
	public void setHttpStatus(String httpStatus) {
		this.httpStatus = httpStatus;
	}
	public LocalDate getDate() {
		return date;
	}
	public void setDate(LocalDate date) {
		this.date = date;
	}
	public ErrorInfo() {
		super();
		// TODO Auto-generated constructor stub
	}
	
}
