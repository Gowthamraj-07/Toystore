package com.example.toystorebackend.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.toystorebackend.model.UserModel;
import com.example.toystorebackend.repository.UserRepo;

@Service
public class UserService {
    
    @Autowired
    UserRepo repo;

    public UserModel postData(UserModel m)
    {
        return repo.save(m);
    }
    public List<UserModel>getData()
    {
        return repo.findAll();
    }
    public Optional<UserModel>getById(int id)
    {
        return repo.findById(id);
    }
    public UserModel update(int id,String firstname,String lastname)
    {
        UserModel exist= repo.findById(id).orElse(null);
        if(exist!=null)
        {
            exist.setFirstname(firstname);
            exist.setLastname(lastname);
            repo.saveAndFlush(exist);
            return exist;
        }
        return null;
    }
}
