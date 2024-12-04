package com.example.persistencia;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

  @Autowired
  private UserRepository userRepository;

  public boolean authenticate(String username, String password) {
    Optional<User> optionalUser = userRepository.findByUsername(username);

    // Valida usuario y contraseña
    return optionalUser.isPresent() && optionalUser.get().getPassword().equals(password);
  }

}
