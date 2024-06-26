package com.turing.api.board.model;

import org.springframework.stereotype.Component;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Component
@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class BoardDto {

    private Long id;
    private String boardName;
    private String boardType;
    private String modDate;
    private String regDate;

}
