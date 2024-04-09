package com.kuber.demo.board.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.kuber.demo.board.model.Board;
import com.kuber.demo.board.model.BoardDto;

@Repository
public interface BoardRepository extends JpaRepository<Board, Long> {

}
