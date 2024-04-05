package com.kuber.demo.article.model;

import org.springframework.stereotype.Component;

import com.kuber.demo.board.model.Board;
import com.kuber.demo.user.model.User;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.extern.log4j.Log4j;


@Component
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ArticleDto {

    private Long id;
    private String title;
    private String content;
    private String registerDate;
    private Long writerId;
    private Long boardId;

}
