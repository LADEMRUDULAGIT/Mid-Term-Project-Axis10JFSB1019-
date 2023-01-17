package com.axis.service;

import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.axis.exception.EmployeeLeave_NotFound;
import com.axis.exception.IDNotFoundException;
import com.axis.exception.NoLeavesFound;
import com.axis.model.Employee;
import com.axis.model.EmployeeLeave;
import com.axis.repository.EmployeeLeaveRepository;
import com.axis.utils.AppConstants;

@Service
public class EmployeeLeaveImpl implements EmployeeLeaveService {

	@Autowired
	EmployeeLeaveRepository employeerepository;
	@Override
	public EmployeeLeave addEmployeeLeave(EmployeeLeave employeeleave) {
		return this.employeerepository.insert(employeeleave);
		//return null;
	}

	@Override
	public List<EmployeeLeave> getAllEmployeeLeaves() {
		return this.employeerepository.findAll();
	}

	@Override
	public EmployeeLeave updateEmployeeLeave(EmployeeLeave repfinalempleave,EmployeeLeave userempleave) {
		// TODO Auto-generated method stub
		//return null;
		if(repfinalempleave==null) {
			throw new  IDNotFoundException(AppConstants.ID_NOT_FOUND);
		}
		
		//EmployeeLeave repfinalempleave=getlatestdocument(repemployeeleave);//repleave
		
		
//		 employeeleaveservice.checkleavecount(totalduration);
		employeerepository.delete(repfinalempleave);
		repfinalempleave.setEmpid(userempleave.getEmpid());
		repfinalempleave.setLeaveType(userempleave.getLeaveType());
		repfinalempleave.setFromDate(userempleave.getFromDate());
		repfinalempleave.setToDate(userempleave.getToDate());
		repfinalempleave.setName(userempleave.getName());
		repfinalempleave.setStatus(userempleave.getStatus());
		return this.employeerepository.insert(repfinalempleave);
	}

	@Override
	public String deleteEmployeeLeave(List<EmployeeLeave> empleaves) {
		// TODO Auto-generated method stub
//		 EmployeeLeave empleave =employeerepository.findById(id).orElseThrow(()->new IDNotFoundException(AppConstants.ID_NOT_FOUND));
		if(empleaves.size()==0) {
			throw new  IDNotFoundException(AppConstants.ID_NOT_FOUND);
		}
		employeerepository.delete(getlatestdocument(empleaves));
		return "Revoked leave Successfully";
	}
    public EmployeeLeave getlatestdocument(List<EmployeeLeave> empleaves) {
    	return empleaves.get(empleaves.size()-1);
    }
    @Override
	public void checkleavecount(int leavecount) {
		// TODO Auto-generated method stub
    	
		if(leavecount>17) throw new NoLeavesFound(AppConstants.Leaves_Not_Found);
	}

	@Override
	public void checkEmployeeLeave(List<EmployeeLeave> Employeeleaves) {
		// TODO Auto-generated method stub
		if(Employeeleaves.size()==0) {
			throw new EmployeeLeave_NotFound(AppConstants.EMPLOYEE_NOT_FOUND);
		}
	}

	
//	@Override
//	public EmployeeLeave getEmployeeLeaveById(String id) {
//		EmployeeLeave empleave =employeerepository.findById(id).orElseThrow(()->new IDNotFoundException(AppConstants.ID_NOT_FOUND));
//		return empleave;
//	}
//	@Override
//	public Optional<EmployeeLeave> getEmployeeLeaveByName(String name) {
//		Optional<EmployeeLeave> empleave =employeerepository.findByName(name);
//		return empleave;
//	}

	

	

}
