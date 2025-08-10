package com.example.foodapp.controller;

import com.example.foodapp.dto.LoginRequest;
import com.example.foodapp.dto.LoginResponse;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*")
public class AuthController {

    @PostMapping("/login")
    public LoginResponse login(@RequestBody LoginRequest request) {
        // Demo-only: Accept any username/password and return a fake token
        String token = "demo-" + UUID.randomUUID();
        return new LoginResponse(request.username(), token);
    }
}


