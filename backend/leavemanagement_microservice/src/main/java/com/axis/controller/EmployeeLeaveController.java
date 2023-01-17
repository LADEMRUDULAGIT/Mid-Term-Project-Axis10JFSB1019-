package com.axis.controller;
import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.axis.feignclient.EmployeeClient;
import com.axis.model.Employee;
import com.axis.model.EmployeeLeave;
import com.axis.repository.EmployeeLeaveRepository;
import com.axis.service.EmployeeLeaveService;

@RestController
@RequestMapping("/leave")
@CrossOrigin(origins="*")
public class EmployeeLeaveController {
	@Autowired
	EmployeeLeaveService  employeeleaveservice;
	
	@Autowired
	EmployeeLeaveRepository employeerepository;
	
	@Autowired
	EmployeeClient employeeclient;
	
	
	@PostMapping("/addemployeeleave")//add leave
	public ResponseEntity<EmployeeLeave> addEmployeeLeave(@RequestBody EmployeeLeave empleave){
		
		
		LocalDate dateBefore = LocalDate.parse(empleave.getFromDate());
		LocalDate dateAfter = LocalDate.parse(empleave.getToDate());
		
		
		//calculating number of days in between
		int duration = (int)ChronoUnit.DAYS.between(dateBefore, dateAfter);
		
		 Employee employee= getEmployee(empleave.getEmpid());
		 int totalduration=(duration+employee.getLeaveCount());
		 employeeleaveservice.checkleavecount(totalduration);
		 if(empleave.getStatus()=="") {
			 empleave.setStatus("Pending");
		 }
		
		 
		 EmployeeLeave employeeleave=employeeleaveservice.addEmployeeLeave(empleave);
		 employee.setLeaveCount(totalduration);
		 
		// Employee updatedemp=updateEmployee(employee.getEmpid(),employee);
		 return new ResponseEntity<EmployeeLeave>(employeeleave,HttpStatus.OK);
	}
	
	@GetMapping("/allemployeeleaves")
	public ResponseEntity<List<EmployeeLeave>> getAllLeaves(){
		 List<EmployeeLeave> employeeleaves=employeeleaveservice.getAllEmployeeLeaves();
		 return new ResponseEntity<List<EmployeeLeave>>(employeeleaves,HttpStatus.OK);
	}
	
	@PutMapping("/update/employeeleave/{id}")//update the latest leave
	public ResponseEntity<EmployeeLeave> updateEmployeeLeave(@PathVariable String id,@RequestBody EmployeeLeave userempleave){
		
		 List<EmployeeLeave> repemployeeleave=employeerepository.findByEmpid(id);
		 
		 Employee employee= getEmployee(userempleave.getEmpid());
		
		 LocalDate userdateBefore = LocalDate.parse(userempleave.getFromDate());
		 LocalDate userdateAfter = LocalDate.parse(userempleave.getToDate());
		 int userduration = (int)ChronoUnit.DAYS.between(userdateBefore, userdateAfter);//by userleave
		 
		 EmployeeLeave repfinalempleave=repemployeeleave.get(repemployeeleave.size()-1);//repleave
		 LocalDate repdateBefore = LocalDate.parse(repfinalempleave.getFromDate());
		 LocalDate repdateAfter = LocalDate.parse(repfinalempleave.getToDate());
		 
		 int repduration = (int)ChronoUnit.DAYS.between(repdateBefore, repdateAfter);//by repleavelatest
		 

		int assumedduration=employee.getLeaveCount()-repduration+userduration;
		
		 employeeleaveservice.checkleavecount(assumedduration);
		 
		 EmployeeLeave employeeleave=employeeleaveservice.updateEmployeeLeave(repfinalempleave,userempleave);

		 employee.setLeaveCount(assumedduration);
		 
		// Employee updatedemp=updateEmployee(userempleave.getEmpid(),employee);
		 
		 return new ResponseEntity<EmployeeLeave>(employeeleave,HttpStatus.OK);
	}
	
	@GetMapping("/latestemployeeleave/{id}")//get latest leave
	public ResponseEntity<EmployeeLeave> getLatestEmployeeLeave(@PathVariable String id){
		
		 List<EmployeeLeave> repemployeeleave=employeerepository.findByEmpid(id);
		 
		 EmployeeLeave latestleave=repemployeeleave.get(repemployeeleave.size()-1);
		 return new ResponseEntity<EmployeeLeave>(latestleave,HttpStatus.OK);
	}
	@DeleteMapping("/delete/employeeleave/{id}")//revoke leave
	public String revokeEmployeeLeave(@PathVariable String id){
		List<EmployeeLeave> employeeleave=employeerepository.findByEmpid(id);
		//EmployeeLeave finalemployeeleave=employeeleave.get(employeeleave.size()-1);
		//Employee employee= getEmployee(id);
	//	LocalDate dateBefore = LocalDate.parse(finalemployeeleave.getFromDate());
	//	 LocalDate dateAfter = LocalDate.parse(finalemployeeleave.getToDate());
		// int duration = (int) ChronoUnit.DAYS.between(dateBefore, dateAfter);
		//employee.setLeaveCount(employee.getLeaveCount()-duration);
		//Employee updated=updateEmployee(employee.getEmpid(),employee);
		 return employeeleaveservice.deleteEmployeeLeave(employeeleave);
	}

	@GetMapping("getemployeeleavebyid/{id}")//leaves
	public ResponseEntity<List<EmployeeLeave>> getEmployeeLeavesById(@PathVariable String id){
		List<EmployeeLeave> employeeleaves=employeerepository.findByEmpid(id);
		 return new ResponseEntity<List<EmployeeLeave>>(employeeleaves,HttpStatus.OK);
	}
	@GetMapping("/getemployeeleave/{name}")
	public ResponseEntity<List<EmployeeLeave>> getEmployeeLeaveByName(@PathVariable String name){
		List<EmployeeLeave> employeeleave=employeerepository.findByName(name);
		employeeleaveservice.checkEmployeeLeave(employeeleave);
		return new ResponseEntity<List<EmployeeLeave>>(employeeleave,HttpStatus.OK);
	}

	@PutMapping("/acceptleave/{id}")
	public ResponseEntity<EmployeeLeave> aceeptleave(@PathVariable String id){
		List<EmployeeLeave> repemployeeleave=employeerepository.findByEmpid(id);
		 
		EmployeeLeave repempleave=repemployeeleave.get(repemployeeleave.size()-1);
		 Employee employee= getEmployee(repempleave.getEmpid());
		LocalDate dateBefore = LocalDate.parse(repempleave.getFromDate());
		LocalDate dateAfter = LocalDate.parse(repempleave.getToDate());
		
		
		//calculating number of days in between
		int duration = (int)ChronoUnit.DAYS.between(dateBefore, dateAfter);
		
		 int totalduration=(duration+employee.getLeaveCount());
		 
		 EmployeeLeave empleave=repemployeeleave.get(repemployeeleave.size()-1);
		 empleave.setStatus("Accepted");
		 EmployeeLeave employeeleave=employeeleaveservice.updateEmployeeLeave(repempleave,empleave);
		 
		// EmployeeLeave employeeleave=employeeleaveservice.addEmployeeLeave(empleave);
		 employee.setLeaveCount(totalduration);
		 
		Employee updatedemp=updateEmployee(employee.getEmpid(),employee);
		 return new ResponseEntity<EmployeeLeave>(employeeleave,HttpStatus.OK);
	}
	@PutMapping("/rejectleave/{id}")
	public ResponseEntity<EmployeeLeave> rejectleave(@PathVariable String id){
		List<EmployeeLeave> repemployeeleave=employeerepository.findByEmpid(id);
		 
		EmployeeLeave repempleave=repemployeeleave.get(repemployeeleave.size()-1);
		 Employee employee= getEmployee(repempleave.getEmpid());
		 
		 EmployeeLeave empleave=repemployeeleave.get(repemployeeleave.size()-1);
		 empleave.setStatus("Rejected");
		 EmployeeLeave employeeleave=employeeleaveservice.updateEmployeeLeave(repempleave,empleave);
		 
		// EmployeeLeave employeeleave=employeeleaveservice.addEmployeeLeave(empleave);
//		 employee.setLeaveCount(totalduration);
		 
		// Employee updatedemp=updateEmployee(employee.getEmpid(),employee);
		 return new ResponseEntity<EmployeeLeave>(employeeleave,HttpStatus.OK);
	}
	
   //Employee methods using feign client
	@PutMapping("/update/{id}")
	public Employee updateEmployee(@PathVariable String id,@RequestBody Employee employee){
		 return employeeclient.updateEmployee(id,employee);
	}
	@GetMapping("/{id}")
	public Employee getEmployee(@PathVariable String id){
		 return employeeclient.getEmployee(id);
		
	}
	public Employee EmployeeObj(Employee employee,EmployeeLeave empleave,int duration) {
		 employee.setLeaveCount(duration);
		 return employee;
	}
}

//@GetMapping("/employeeleave/{id}")
//public ResponseEntity<List<EmployeeLeave>> updateEmployeeLeave(@PathVariable String id){
//	List<EmployeeLeave> employeeleave=employeerepository.findByEmpid(id);
//	employeeleaveservice.checkEmployeeLeave(employeeleave);
//	 return new ResponseEntity<List<EmployeeLeave>>(employeeleave,HttpStatus.OK);
//}
//@GetMapping("/employeeleave/{id}")
//public ResponseEntity<List<EmployeeLeave>> getEmpleavebyid(@PathVariable String id){
//	 List<EmployeeLeave> employeeleaves=employeerepository.findByEmpid(id);
//	 return new ResponseEntity<List<EmployeeLeave>>(employeeleaves,HttpStatus.OK);
//}
//Employee employee1=EmployeeObj(userempleave,totalduration);
//return new ResponseEntity<EmployeeLeave>(employeeleave,HttpStatus.OK);
//EmployeeLeave employeeleave=employeeleaveservice.getEmployeeLeaveById(id);
////int dur=empleave.getFromDate().compareTo(empleave.getToDate());
//SimpleDateFormat sdfrom = new SimpleDateFormat(empleave.getFromDate().toString());
//SimpleDateFormat sdto = new SimpleDateFormat(empleave.getToDate().toString());
////int dur1=empleave.getFromDate().-empleave.getToDate();

//int duration = empleave.getToDate().getDate() - empleave.getFromDate().getDate()+1;