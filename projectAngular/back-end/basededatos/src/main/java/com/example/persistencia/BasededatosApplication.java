package com.example.persistencia;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;

@SpringBootApplication
public class BasededatosApplication {

  public static void main(String[] args) {
    SpringApplication.run(BasededatosApplication.class, args);
  }

  // Asegúrate de que Spring Boot pueda manejar solicitudes JSON correctamente
  @Bean
  public MappingJackson2HttpMessageConverter jacksonMessageConverter() {
    return new MappingJackson2HttpMessageConverter();
  }
}
