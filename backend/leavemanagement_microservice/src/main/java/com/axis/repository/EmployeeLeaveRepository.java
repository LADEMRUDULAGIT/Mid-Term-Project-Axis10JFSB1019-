package com.axis.repository;
import java.util.List;

import com.axis.model.EmployeeLeave;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
public interface EmployeeLeaveRepository extends MongoRepository<EmployeeLeave, String>{

	List<EmployeeLeave> findByName(String name);
//	@Query("{empid:?0}")
	List<EmployeeLeave> findByEmpid(String empid);
//	Optional<EmployeeLeave> findByName(String name);

	

	//Optional<EmployeeLeave> findByName(String name);
//	public String deleteEmployeeLeave(String EmployeeName);

  // public EmployeeLeave findByEmployeeName(String employeeName);
}
