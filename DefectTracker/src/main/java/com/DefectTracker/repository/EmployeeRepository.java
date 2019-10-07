package com.DefectTracker.repository;

import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.DefectTracker.model.Employee;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {
	Page<Employee> findByProjectId(Long projectId, Pageable pageable);

	Optional<Employee> findByIdAndProjectId(Long id, Long projectId);
}
