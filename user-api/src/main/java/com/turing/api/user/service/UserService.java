package com.turing.api.user.service;

import java.util.*;

import com.turing.api.common.component.Messenger;
import com.turing.api.common.service.CommandService;
import com.turing.api.common.service.QueryService;
import com.turing.api.user.model.User;
import com.turing.api.user.model.UserDto;



public interface UserService extends CommandService<UserDto>, QueryService<UserDto> {

    List<UserDto> findUsersByName(String name);

    List<UserDto> findUsersByJob(String job);

    Messenger login(UserDto param);

    default User dtoToEntity(UserDto dto) {
        System.out.println(">>>>>>    "+dto.toString());
        return User.builder()
                .id(dto.getId())
                .username(dto.getUsername())
                .password(dto.getPassword())
                .name(dto.getName())
                .phone(dto.getPhone())
                .job(dto.getJob())
                .build();

        // boradId로 db를 조회해서 해당 게시판에 게시된 글의 목록을 가져올 경우
    }

    default UserDto entityToDto(User ent) {
        return UserDto.builder()
                .id(ent.getId())
                .username(ent.getUsername())
                .password(ent.getPassword())
                .name(ent.getName())
                .phone(ent.getPhone())
                .job(ent.getJob())
                .modDate(String.valueOf(ent.getModDate()))
                .regDate(String.valueOf(ent.getRegDate()))
                .build();
    }

}
