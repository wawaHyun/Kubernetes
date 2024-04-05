package com.kuber.demo.board;

import lombok.RequiredArgsConstructor;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import com.kuber.demo.board.model.Board;
import com.kuber.demo.board.model.BoardDto;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins="*", allowedHeaders = "*")
public class BoardController {

}
