package com.example.foodapp.controller;

import com.example.foodapp.entity.FoodItem;
import com.example.foodapp.repository.FoodItemRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/food")
@CrossOrigin(origins = "*")
@RequiredArgsConstructor
public class FoodController {

    private final FoodItemRepository foodItemRepository;

    @GetMapping
    public List<FoodItem> listAll() {
        return foodItemRepository.findAll();
    }

    @PostMapping
    public FoodItem create(@RequestBody FoodItem foodItem) {
        return foodItemRepository.save(foodItem);
    }
}


