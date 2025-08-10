package com.example.foodapp.config;

import com.example.foodapp.entity.FoodItem;
import com.example.foodapp.repository.FoodItemRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;

@Component
public class DataLoader implements CommandLineRunner {

    private final FoodItemRepository foodItemRepository;

    public DataLoader(FoodItemRepository foodItemRepository) {
        this.foodItemRepository = foodItemRepository;
    }

    @Override
    public void run(String... args) {
        if (foodItemRepository.count() == 0) {
            FoodItem i1 = new FoodItem();
            i1.setName("Margherita Pizza");
            i1.setDescription("Classic pizza with tomato, mozzarella, and basil");
            i1.setPrice(new BigDecimal("9.99"));
            foodItemRepository.save(i1);

            FoodItem i2 = new FoodItem();
            i2.setName("Cheeseburger");
            i2.setDescription("Juicy beef patty with cheddar, lettuce, and tomato");
            i2.setPrice(new BigDecimal("8.49"));
            foodItemRepository.save(i2);

            FoodItem i3 = new FoodItem();
            i3.setName("Caesar Salad");
            i3.setDescription("Crisp romaine, parmesan, croutons, and Caesar dressing");
            i3.setPrice(new BigDecimal("6.99"));
            foodItemRepository.save(i3);
        }
    }
}


