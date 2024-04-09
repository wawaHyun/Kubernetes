package com.kuber.demo.board.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import java.sql.SQLException;
import java.util.List;
import java.util.Optional;
import java.util.stream.*;

import org.springframework.stereotype.Service;

import com.kuber.demo.board.model.BoardDto;
import com.kuber.demo.board.repository.BoardRepository;
import com.kuber.demo.common.component.Messenger;

@Service
@RequiredArgsConstructor
@Slf4j
public class BoardServiceImpl implements BoardService {

    private final BoardRepository repo;

    @Override
    public Messenger save(BoardDto user) {
        entityToDto((repo.save(dtoToEntity(user))));
        return Messenger.builder()
                .message("save succes")
                .build();
    }

    @Override
    public List<BoardDto> findAll() {
        List<BoardDto> list = repo.findAll().stream()
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
    public Messenger modify(BoardDto t) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'modify'");
    }

    @Override
    public Optional<BoardDto> findById(Long id) {
        return Optional.ofNullable(entityToDto(repo.findById(id).orElse(null)));
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
    public List<BoardDto> findBoardsByName(String name) {
        return null;
    }

}
