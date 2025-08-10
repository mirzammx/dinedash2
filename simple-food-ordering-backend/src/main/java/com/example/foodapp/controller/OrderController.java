package com.example.foodapp.controller;

import com.example.foodapp.dto.CreateOrderRequest;
import com.example.foodapp.dto.UpdateOrderStatusRequest;
import com.example.foodapp.entity.FoodItem;
import com.example.foodapp.entity.Order;
import com.example.foodapp.entity.OrderStatus;
import com.example.foodapp.repository.FoodItemRepository;
import com.example.foodapp.repository.OrderRepository;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/orders")
@CrossOrigin(origins = "*")
public class OrderController {

    private final OrderRepository orderRepository;
    private final FoodItemRepository foodItemRepository;

    public OrderController(OrderRepository orderRepository, FoodItemRepository foodItemRepository) {
        this.orderRepository = orderRepository;
        this.foodItemRepository = foodItemRepository;
    }

    @GetMapping
    public List<Order> listAll() {
        return orderRepository.findAll();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Order placeOrder(@RequestBody CreateOrderRequest request) {
        List<FoodItem> items = foodItemRepository.findAllById(request.foodItemIds());
        Order order = new Order();
        order.setCustomerName(request.customerName());
        order.setItems(items);
        order.setStatus(OrderStatus.PENDING);
        return orderRepository.save(order);
    }

    @PutMapping("/{id}/status")
    public Order updateStatus(@PathVariable Long id, @RequestBody UpdateOrderStatusRequest request) {
        Order order = orderRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Order not found: " + id));
        order.setStatus(request.status());
        return orderRepository.save(order);
    }
}


