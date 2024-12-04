package com.example.persistencia;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:4200")
public class AuthController {

  @Autowired
  private UserService userService;

  @PostMapping(value = "/login", consumes = MediaType.APPLICATION_JSON_VALUE)
  public ResponseEntity<Map<String, String>> login(@RequestBody LoginRequest loginRequest) {
    System.out.println("Datos recibidos: " + loginRequest.getUsername() + ", " + loginRequest.getPassword());
    Map<String, String> response = new HashMap<>();

    // Verificar credenciales
    boolean isAuthenticated = userService.authenticate(loginRequest.getUsername(), loginRequest.getPassword());

    if (isAuthenticated) {
      response.put("message", "Inicio de sesión exitoso");
      return ResponseEntity.ok(response); // 200 OK con respuesta en JSON
    } else {
      response.put("message", "Credenciales inválidas");
      return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(response); // 401 UNAUTHORIZED con mensaje
    }
  }

  // Manejador de excepciones para solicitudes malformadas
  @ExceptionHandler(HttpMessageNotReadableException.class)
  public ResponseEntity<Map<String, String>> handleInvalidRequest(HttpMessageNotReadableException ex) {
    Map<String, String> response = new HashMap<>();
    response.put("error", "Cuerpo de la solicitud no válido o mal formado");
    return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response); // 400 BAD REQUEST con error en JSON
  }

  @GetMapping("/test")
  public String testEndpoint() {
    return "Endpoint de prueba funcionando";
  }
}
