package com.kuber.demo.user.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import java.util.*;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.kuber.demo.common.component.Messenger;
import com.kuber.demo.user.model.UserDto;
import com.kuber.demo.user.repository.UserRepository;

@Service
@Slf4j
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository repo;

    @Override
    public Messenger save(UserDto user) {
        entityToDto((repo.save(dtoToEntity(user))));
        return Messenger.builder()
                .message("save succes")
                .build();
    }

    @Override
    public List<UserDto> findAll() {
        List<UserDto> list = repo.findAll().stream()
                .map(this::entityToDto)
                .collect(Collectors.toList());
        return list;
    }

    @Override
    public Messenger deleteById(Long id) {
        repo.deleteById(id);
        return Messenger.builder()
                .message("delete succes")
                .build();
    }

    @Override
    public Messenger modify(UserDto dto) {
        entityToDto((repo.save(dtoToEntity(dto))));
        return Messenger.builder()
                .message("modify succes")
                .build();
    }

    @Override
    public Optional<UserDto> findById(Long id) {
        return repo.findById(id).map(i->entityToDto(i));
    }

    @Override
    public Long count() {
        return repo.count();
    }

    @Override
    public boolean existsById(Long id) {
        return repo.existsById(id);
    }

    @Override
    public List<UserDto> findUsersByName(String name) {
        return repo.findUsersByName(name);
    }

    @Override
    public List<UserDto> findUsersByJob(String job) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'findUsersByJob'");
    }

    @Override
    public Messenger login(UserDto param) {
        return Messenger.builder()
                .message("login success")
                .build();
    }

}
