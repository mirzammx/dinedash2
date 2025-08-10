package com.example.foodapp.dto;

import java.util.List;

public record CreateOrderRequest(
        String customerName,
        List<Long> foodItemIds
) {}


