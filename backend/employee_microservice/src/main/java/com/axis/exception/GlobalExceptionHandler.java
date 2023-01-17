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
	@ExceptionHandler(Employee_NotFound.class)
	public ResponseEntity<ErrorInfo> noEmployeeFound(Employee_NotFound exception){
		ErrorInfo errorinfo=getErrorInfo(exception.getmsg());
		return new ResponseEntity<ErrorInfo>(errorinfo,HttpStatus.NOT_FOUND);
	}
	@ExceptionHandler(Employee_Already_Exists.class)
	public ResponseEntity<ErrorInfo> EmployeeAlreadyExists(Employee_Already_Exists exception){
		ErrorInfo errorinfo=getErrorInfo(exception.getmsg());
		errorinfo.setHttpStatus(HttpStatus.ALREADY_REPORTED.toString());
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
