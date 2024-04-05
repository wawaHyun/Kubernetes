package com.kuber.demo.article.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.kuber.demo.article.model.Article;
import com.kuber.demo.board.repository.BoardRepository;

@Repository
public interface ArticleRepository extends JpaRepository<Article, Long> {

}
