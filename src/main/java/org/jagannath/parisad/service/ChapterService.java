package org.jagannath.parisad.service;

import org.jagannath.parisad.model.CityChapter;
import org.jagannath.parisad.repository.CityChapterRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ChapterService {

    private final CityChapterRepository chapterRepository;

    public ChapterService(CityChapterRepository chapterRepository) {
        this.chapterRepository = chapterRepository;
    }

    public List<CityChapter> getAllChapters() {
        return chapterRepository.findAll();
    }

    public Optional<CityChapter> getChapterByKey(String cityKey) {
        return chapterRepository.findByCityKey(cityKey.toLowerCase());
    }

    public CityChapter saveChapter(CityChapter chapter) {
        chapter.setCityKey(chapter.getCityKey().toLowerCase());
        return chapterRepository.save(chapter);
    }
}
