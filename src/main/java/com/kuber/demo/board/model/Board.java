package com.kuber.demo.board.model;

import java.util.List;

import com.kuber.demo.article.model.Article;
import com.kuber.demo.common.model.BaseEntity;

import jakarta.persistence.*;
import lombok.*;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@ToString(exclude = { "id" })
@Entity(name = "boards")
public class Board extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "board_id")
    private Long id;

    @Column(name = "board_name")
    private String boardName;

    @Column(name = "board_type2")
    private String boardType2;

    @OneToMany(mappedBy = "board", fetch = FetchType.LAZY)
    private List<Article> articles;

}
