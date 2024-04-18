package com.example.toystorebackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.example.toystorebackend.model.UserModel;

@Repository
public interface UserRepo extends JpaRepository<UserModel,Integer> {

    @Transactional
    @Query(value = "update users set first_name=?3,last_name = ?3 where user_id=?1",nativeQuery = true)
    UserModel update(int id,String firstname,String lastname);
}
