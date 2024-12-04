package com.example.persistencia;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

  @Bean
  public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
    http
        .csrf(csrf -> csrf.disable()) // Deshabilita CSRF para pruebas
        .authorizeHttpRequests(auth -> auth
            .requestMatchers("/api/auth/login").permitAll() // Permite acceso público a /api/auth/login
            .anyRequest().permitAll() // Permite acceso a cualquier otra URL para pruebas
        );
    return http.build();
  }
}
