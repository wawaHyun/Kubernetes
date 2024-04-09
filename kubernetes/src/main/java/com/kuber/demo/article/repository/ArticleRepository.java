package com.kuber.demo.article.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.kuber.demo.article.model.Article;
import com.kuber.demo.article.model.ArticleDto;

@Repository
public interface ArticleRepository extends JpaRepository<Article, Long> {

    List<ArticleDto> findArticlesByTitle(String name);

}
