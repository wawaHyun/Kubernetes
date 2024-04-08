package com.kuber.demo.article.service;

import com.kuber.demo.article.model.Article;
import com.kuber.demo.article.model.ArticleDto;
import com.kuber.demo.common.service.CommandService;
import com.kuber.demo.common.service.QueryService;

import java.util.*;

public interface ArticleService extends CommandService<ArticleDto>, QueryService<ArticleDto> {

    default Article dtoToEntity(ArticleDto dto) {
        Article aticle = Article.builder()
                .title(dto.getTitle())
                .content(dto.getContent())
                .registerDate(dto.getRegisterDate())
                // .writer((String) dto.getWriterId())
                .build();

        // boradId로 db를 조회해서 해당 게시판에 게시된 글의 목 private String title;

        return aticle;
    }

    default Optional<ArticleDto> entityToDto(Article ent) {
        ArticleDto dto = ArticleDto.builder()
                .title(ent.getTitle())
                .content(ent.getContent())
                .registerDate(ent.getRegisterDate())
                // .writer((Long) ent.getWriter())
                .build();

        return Optional.of(dto);
    }

    // --------------------------------------------------------------------
    // command

    // query

}
