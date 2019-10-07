package com.DefectTracker.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.DefectTracker.Exception.ResourceNotFoundException;
import com.DefectTracker.model.Employee;
import com.DefectTracker.repository.EmployeeRepository;
import com.DefectTracker.repository.ProjectRepository;

@RestController
public class EmployeeController {
	@Autowired
	private EmployeeRepository employeeRepo;
	@Autowired
	private ProjectRepository projectRepo;

	@GetMapping("/project/{projectId}/employee")
	public Page<Employee> getEmployees(@PathVariable(value = "projectId") Long projectId, Pageable pageable) {
		return employeeRepo.findByProjectId(projectId, pageable);
	}

	@PostMapping("/project/{projectId}/employee")
	public Employee saveEmployees(@PathVariable(value = "projectId") Long projectId,
			@Valid @RequestBody Employee employee) {
		return projectRepo.findById(projectId).map(postReq -> {
			employee.setProject(postReq);
			return employeeRepo.save(employee);
		}).orElseThrow(() -> new ResourceNotFoundException("projectId " + projectId + " not found"));
	}

}
