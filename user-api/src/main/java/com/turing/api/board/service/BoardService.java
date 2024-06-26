package com.turing.api.board.service;

import java.util.*;

import com.turing.api.board.model.Board;
import com.turing.api.board.model.BoardDto;
import com.turing.api.common.service.CommandService;
import com.turing.api.common.service.QueryService;

public interface BoardService extends CommandService<BoardDto>, QueryService<BoardDto> {

    List<BoardDto> findBoardsByBoardName(String name);

    default Board dtoToEntity(BoardDto dto) {
        return Board.builder()
                .id(dto.getId())
                .boardName(dto.getBoardName())
                .boardType(dto.getBoardType())
                .build();

        // boradId로 db를 조회해서 해당 게시판에 게시된 글의 목 private String title;
    }

    default BoardDto entityToDto(Board ent) {
        return BoardDto.builder()
                .id(ent.getId())
                .boardName(ent.getBoardName())
                .boardType(ent.getBoardType())
                .modDate(String.valueOf(ent.getModDate()))
                .regDate(String.valueOf(ent.getRegDate()))
                .build();
    }

    // --------------------------------------------------------------------
    // command

    // query

}
