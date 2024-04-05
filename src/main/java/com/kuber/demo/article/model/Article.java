package com.kuber.demo.article.model;

import com.kuber.demo.board.model.Board;
import com.kuber.demo.common.model.BaseEntity;
import com.kuber.demo.user.model.User;

import jakarta.persistence.*;
import lombok.*;
import lombok.extern.log4j.Log4j2;

@Log4j2
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@Builder
@AllArgsConstructor
@ToString(exclude = {"id"})
@Entity(name = "articles")
public class Article extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "article_id")
    private Long id;

    private String title;
    private String content;
    private String registerDate;

    // @ManyToOne(fetch = FetchType.LAZY)
    // @JoinColumn(name = "board_id")
    // private Board board;

    // @ManyToOne(fetch = FetchType.LAZY)
    // @JoinColumn(name = "user_id")
    // private User writer;
}
