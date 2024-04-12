package com.turing.api.board.model;

import java.util.List;

import com.turing.api.article.model.Article;
import com.turing.api.common.model.BaseEntity;

import jakarta.persistence.*;
import lombok.*;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Getter
@Builder
@ToString(exclude = { "id" })
@Entity(name = "boards")
public class Board extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "board_id")
    private Long id;

    @Column(name = "board_name")
    private String boardName;

    @Column(name = "board_type")
    private String boardType;

    @OneToMany(mappedBy = "board", cascade = CascadeType.ALL)
    private List<Article> articles;

}
