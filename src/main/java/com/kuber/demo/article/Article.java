package com.kuber.demo.article;

import com.kuber.demo.board.Board;

import jakarta.persistence.*;
import lombok.*;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@ToString(exclude = {"id"})
@Entity(name = "articles")
public class Article {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "article_id")
    private Long id;

    private String title;
    private String content;
    private String writer;
    private String registerDate;

    @ManyToOne
    @JoinColumn(name = "board_id", referencedColumnName = "board_id")
    private Board board;


    @Builder(builderMethodName = "builder")
    public Article(Long id, String title, String content, String writer,String registerDate) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.writer = writer;
        this.registerDate = registerDate;
    }
}
