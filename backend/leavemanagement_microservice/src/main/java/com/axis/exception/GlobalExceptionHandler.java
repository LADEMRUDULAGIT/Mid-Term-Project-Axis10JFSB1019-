package com.axis.exception;

import java.time.LocalDate;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {
	@ExceptionHandler(IDNotFoundException.class)
	public ResponseEntity<ErrorInfo> noIdFound(IDNotFoundException exception){
		ErrorInfo errorinfo=getErrorInfo(exception.getmsg());
		return new ResponseEntity<ErrorInfo>(errorinfo,HttpStatus.NOT_FOUND);
	}
	@ExceptionHandler(EmployeeLeave_NotFound.class)
	public ResponseEntity<ErrorInfo> noEmployeeFound(EmployeeLeave_NotFound exception){
		ErrorInfo errorinfo=getErrorInfo(exception.getmsg());
		return new ResponseEntity<ErrorInfo>(errorinfo,HttpStatus.NOT_FOUND);
	}
	@ExceptionHandler(NoLeavesFound.class)
	public ResponseEntity<ErrorInfo> noLeaveFound(NoLeavesFound exception){
		ErrorInfo errorinfo=getErrorInfo(exception.getmsg());
		return new ResponseEntity<ErrorInfo>(errorinfo,HttpStatus.NOT_FOUND);
	}
	public ErrorInfo getErrorInfo(String exceptionstr) {
		ErrorInfo errorinfo=new ErrorInfo();
		errorinfo.setErrorMessage(exceptionstr);
		errorinfo.setHttpStatus(HttpStatus.NOT_FOUND.toString());
		errorinfo.setDate(LocalDate.now());
		return errorinfo;
	}
	
}
