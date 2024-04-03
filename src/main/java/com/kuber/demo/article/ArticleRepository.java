package com.kuber.demo.article;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

@RequiredArgsConstructor
@Repository
public class ArticleRepository {
    private Connection conn;

}
