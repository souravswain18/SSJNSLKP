package org.jagannath.parisad.controller;

import org.jagannath.parisad.model.CityChapter;
import org.jagannath.parisad.service.ChapterService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/chapters")
@CrossOrigin(origins = "*")
public class ChapterController {

    private final ChapterService chapterService;

    public ChapterController(ChapterService chapterService) {
        this.chapterService = chapterService;
    }

    @GetMapping
    public ResponseEntity<List<CityChapter>> getAllChapters() {
        return ResponseEntity.ok(chapterService.getAllChapters());
    }

    @GetMapping("/{cityKey}")
    public ResponseEntity<CityChapter> getChapter(@PathVariable String cityKey) {
        return chapterService.getChapterByKey(cityKey)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<CityChapter> createChapter(@RequestBody CityChapter chapter) {
        CityChapter saved = chapterService.saveChapter(chapter);
        return ResponseEntity.ok(saved);
    }
}
