package com.kuber.demo.article;

import com.kuber.demo.common.AbstractService;
import com.kuber.demo.enums.Messenger;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.sql.SQLException;
import java.util.List;
import java.util.Map;
import java.util.Optional;
@Service
@RequiredArgsConstructor
public class ArticleServiceImpl extends AbstractService implements ArticleService{
    private ArticleRepository repository;
    @Override
    public Map<String, ?> save(Object o) throws SQLException {
        return null;
    }

    @Override
    public Map<String, ?> findAll() throws SQLException {
        return null;
    }

    @Override
    public Map<String, ?> findById(Long id) {
        return null;
    }

    @Override
    public Map<String, ?> count() {
        return null;
    }

    @Override
    public Map<String, ?> getOne(String id) throws SQLException {
        return null;
    }

    @Override
    public Map<String, ?> delete(Object o) {
        return null;
    }

    @Override
    public Map<String, ?> existsById(Long id) {
        return null;
    }
}
