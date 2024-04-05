package com.kuber.demo.board.service;

import com.kuber.demo.board.model.Board;
import com.kuber.demo.board.model.BoardDto;
import com.kuber.demo.common.service.CommandService;
import com.kuber.demo.common.service.QueryService;

import java.util.*;

public interface BoardService  {
    
    // default Board dtoToEntity(BoardDto dto) {
    //     Board board = Board.builder()
    //             .boardName(dto.getBoardName())
    //             .boardType(dto.getBoardType())
    //             .build();

    //     // boradId로 db를 조회해서 해당 게시판에 게시된 글의 목 private String title;

    //     return board;
    // }

    // default Optional<BoardDto> entityToDto(Board ent) {
    //     BoardDto dto = BoardDto.builder()
    //             .boardName(ent.getBoardName())
    //             .boardType(ent.getBoardType())
    //             .build();

    //     return Optional.of(dto);
    // }

    
    //--------------------------------------------------------------------
    // command

    // query
    
}
