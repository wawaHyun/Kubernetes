package com.kuber.demo.user.service;

import com.kuber.demo.common.service.CommandService;
import com.kuber.demo.common.service.QueryService;
import com.kuber.demo.user.model.User;
import com.kuber.demo.user.model.UserDto;

import java.util.*;

public interface UserService extends CommandService<UserDto>, QueryService<UserDto> {

    String updatePassword(User user);
    List<UserDto> findUsersByName(String name);
    List<UserDto> findUsersByJob(String job);


    default User dtoToEntity (UserDto dto) {
     return User.builder()
                .username(dto.getUsername())
                .password(dto.getPassword())
                .name(dto.getName())
                .phone(dto.getPhone())
                .job(dto.getJob())
                .build();

        // boradId로 db를 조회해서 해당 게시판에 게시된 글의 목록을 가져올 경우
    }

    default UserDto entityToDto(Optional<User> optional) {
        return UserDto.builder()
                .username(optional.get().getUsername())
                .password(optional.get().getPassword())
                .name(optional.get().getName())
                .phone(optional.get().getPhone())
                .job(optional.get().getJob())
                .build();
    }

    //--------------------------------------------------------------------
    // command-setter

    // query-getter
}
