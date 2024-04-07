package com.kuber.demo.user.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import java.sql.SQLException;
import java.util.*;

import org.springframework.stereotype.Service;

import com.kuber.demo.common.component.PageRequestVo;
import com.kuber.demo.user.model.User;
import com.kuber.demo.user.model.UserDto;
import com.kuber.demo.user.repository.UserRepository;

@Service
@Slf4j
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository repo;

    @Override
    public UserDto save(UserDto t) {
        log.info("{}", t);
        return entityToDto(Optional.ofNullable(repo.save(dtoToEntity(t))));
    }

    @Override
    public void deleteById(Long id) {
        repo.deleteAllById(id);
    }

    @Override
    public List<UserDto> findAll(PageRequestVo vo) {
        List<UserDto> list = new ArrayList<>();
        list.add((UserDto) repo.findAll());
        return list;
    }

    @Override
    public Optional<UserDto> findById(Long id) {
        return Optional.ofNullable(entityToDto(repo.findById(id)));
    }

    @Override
    public Long count() {
        return null;
    }

    @Override
    public boolean existsById(Long id) {
        return repo.existsById(id);
    }

    @Override
    public String updatePassword(User user) {
        // return repo.updatePassword(user);
        return null;
    }

    @Override
    public List<UserDto> findUsersByName(String name) {
        List<UserDto> list = new ArrayList<>();
        // list.add(repo.findUsersByName(name));
        // return list;
        return null;
    }

    @Override
    public List<UserDto> findUsersByJob(String job) {
        return null;
    }

    public List<UserDto> findAll() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'findAll'");
    }

}
