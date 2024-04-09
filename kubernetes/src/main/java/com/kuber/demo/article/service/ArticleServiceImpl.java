package com.kuber.demo.article.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import org.springframework.stereotype.Service;

import com.kuber.demo.article.model.ArticleDto;
import com.kuber.demo.article.repository.ArticleRepository;
import com.kuber.demo.common.component.Messenger;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@Slf4j
@RequiredArgsConstructor
public class ArticleServiceImpl implements ArticleService {

    private final ArticleRepository repo;

    @Override
    public Messenger save(ArticleDto article) {
        entityToDto((repo.save(dtoToEntity(article))));
        return Messenger.builder()
                .message("save succes")
                .build();
    }

    @Override
    public List<ArticleDto> findAll() {
        List<ArticleDto> list = repo.findAll().stream()
                .map(this::entityToDto)
                .collect(Collectors.toList());
        return list;
    }

    @Override
    public Messenger deleteById(Long id) {
        repo.deleteById(id);
        return Messenger.builder()
                .message("delete succes")
                .build();
    }

    @Override
    public Messenger modify(ArticleDto dto) {
        entityToDto((repo.save(dtoToEntity(dto))));
        return Messenger.builder()
                .message("modify succes")
                .build();
    }

    @Override
    public Optional<ArticleDto> findById(Long id) {
        return Optional.ofNullable(entityToDto(repo.findById(id).orElse(null)));
    }

    @Override
    public Long count() {
        return repo.count();
    }

    @Override
    public boolean existsById(Long id) {
        return repo.existsById(id);
    }

    @Override
    public List<ArticleDto> findArticlesByTitle(String name) {
        return repo.findArticlesByTitle(name);
    }

}
