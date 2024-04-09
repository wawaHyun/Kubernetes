package com.kuber.demo.common.service;

import java.util.List;
import java.util.Optional;

import com.kuber.demo.common.component.PageRequestVo;

public interface QueryService<T> {
    List<T> findAll();

    Optional<T> findById(Long id);

    Long count();

    boolean existsById(Long id);
}
