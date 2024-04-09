package com.kuber.demo.common.service;

import com.kuber.demo.common.component.Messenger;

public interface CommandService<T> {

    Messenger save(T t);

    Messenger deleteById(Long id);

    Messenger modify(T t);
}
