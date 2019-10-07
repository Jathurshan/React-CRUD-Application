package com.DefectTracker.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.DefectTracker.Exception.ResourceNotFoundException;
import com.DefectTracker.model.Defect;
import com.DefectTracker.repository.DefectRepository;
import com.DefectTracker.repository.ProjectRepository;

@RestController
public class DefectController {
	@Autowired
	private DefectRepository defectRepo;
	@Autowired
	private ProjectRepository projectRepo;

	@GetMapping("/project/{projectId}/defect")
	public Page<Defect> getDefects(@PathVariable(value = "projectId") Long projectId, Pageable pageable) {
		return defectRepo.findByProjectId(projectId, pageable);
	}

	@PostMapping("/project/{projectId}/defect")
	public Defect saveDefect(@PathVariable(value = "projectId") Long projectId, @Valid @RequestBody Defect defect) {
		return projectRepo.findById(projectId).map(postReq -> {
			defect.setProject(postReq);
			return defectRepo.save(defect);
		}).orElseThrow(() -> new ResourceNotFoundException("projectId " + projectId + " not found"));
	}

	@PutMapping("/project/{projectId}/defect/{defectId}")
	public Defect updateDefect(@PathVariable(value = "projectId") Long projectId,
			@PathVariable(value = "defectId") Long defectId, @Valid @RequestBody Defect req) {
		if (!projectRepo.existsById(projectId)) {
			throw new ResourceNotFoundException("projectId " + projectId + " not found");
		}
		return defectRepo.findById(defectId).map(res -> {
			res.setName(req.getName());
			res.setDescription(req.getDescription());
			return defectRepo.save(res);
		}).orElseThrow(() -> new ResourceNotFoundException("defectId " + defectId + "not found"));
	}

	@DeleteMapping("/project/{projectId}/defect/{defectId}")
	public ResponseEntity<?> deleteDefect(@PathVariable(value = "projectId") Long projectId,
			@PathVariable(value = "defectId") Long defectId) {
		return defectRepo.findByIdAndProjectId(defectId, projectId).map(res -> {
			defectRepo.delete(res);
			return ResponseEntity.ok().build();
		}).orElseThrow(
				() -> new ResourceNotFoundException("not found defectId " + defectId + " and projectId " + projectId));

	}

}
