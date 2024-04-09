package com.kuber.demo.board.model;

import org.springframework.stereotype.Component;

import com.kuber.demo.article.model.Article;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.extern.log4j.Log4j;
import java.util.*;

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
    private List<Article> articles = new ArrayList<>();

}
