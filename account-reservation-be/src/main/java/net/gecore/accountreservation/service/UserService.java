package net.gecore.accountreservation.service;

import java.util.Optional;
import net.gecore.accountreservation.domain.User;
import net.gecore.accountreservation.domain.component.Role;
import net.gecore.accountreservation.repository.UserRepository;
import net.gecore.accountreservation.service.util.EmailValidator;
import org.springframework.stereotype.Component;

@Component
public class UserService {

  private UserRepository userRepository;


  public UserService(UserRepository userRepository){
    this.userRepository = userRepository;
  }

  public Optional<User> retrieveUser(String gmail){
    if (EmailValidator.validateEmail(gmail)) {
      return userRepository.findByGmail(gmail);
    }else{
      return Optional.empty();
    }
  }

  public Optional<User> createUser(User user){
    var gmail = user.getGmail();
    if (EmailValidator.validateEmail(gmail)){
      Optional<User> retrievedResult = userRepository.findByGmail(gmail);
      if(retrievedResult.isPresent()){
        return retrievedResult;
      }else{
        User newUser = new User(user.getGmail(), Role.Registered);
        return Optional.of(userRepository.save(newUser));
      }
    }else{
      return Optional.empty();
    }
  }



}
