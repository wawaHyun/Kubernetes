package com.kuber.demo.user.model;

import lombok.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Component;

import com.kuber.demo.article.model.Article;

@Component
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UserDto {
    private Long id;
    private String username;
    private String password;
    private String name;
    private String phone;
    private Long address;
    private String job;
    private String modDate;
    private String regDate;
    private List<Article> article = new ArrayList<>();

}
