package com.example.toystorebackend.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.example.toystorebackend.model.UserModel;
import com.example.toystorebackend.service.UserService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PutMapping;




@RestController
public class UserController {
    
    @Autowired
    UserService service;

    @CrossOrigin
    @PostMapping("/postdata")
    public UserModel postMethodName(@RequestBody UserModel m) {
        //TODO: process POST request
        
        return service.postData(m);
    }

    @CrossOrigin
    @GetMapping("/get")
    public List<UserModel> getMethodName() {
        
        return service.getData();
    }
    
    @CrossOrigin
    @GetMapping("/getbyid/{id}")
    public Optional<UserModel> getMethodName(@PathVariable int id) {
        return service.getById(id);
    }

    @CrossOrigin
    @PutMapping("update/{id}/{fname}/{lname}")
    public UserModel putMethodName(@PathVariable int id,@PathVariable String fname,@PathVariable String lname) {
        //TODO: process PUT request
        
        return service.update(id, fname, lname);
    
    }

    
    
}
