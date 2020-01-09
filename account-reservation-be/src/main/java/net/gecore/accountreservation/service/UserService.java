package net.gecore.accountreservation.service;

import java.util.Optional;
import java.util.UUID;
import net.gecore.accountreservation.domain.DiscordUser;
import net.gecore.accountreservation.domain.User;
import net.gecore.accountreservation.domain.discord.DiscordAuthResponse;
import net.gecore.accountreservation.domain.discord.DiscordToken;
import net.gecore.accountreservation.domain.component.Role;
import net.gecore.accountreservation.repository.UserRepository;
import net.gecore.accountreservation.service.util.EmailValidator;
import org.springframework.stereotype.Component;

@Component
public class UserService {

  private UserRepository userRepository;
  private DiscordService discordService;

  public UserService(UserRepository userRepository, DiscordService discordService){
    this.userRepository = userRepository;
    this.discordService = discordService;
  }

  public Optional<User> retrieveUserByGmail(String gmail){
    if (EmailValidator.validateEmail(gmail)) {
      return userRepository.findByGmail(gmail);
    }else{
      return Optional.empty();
    }
  }

  public Optional<User> retrieveUserById(UUID id){
    return userRepository.findById(id);
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


  public Optional<User> updateUserWithDiscord(User user, DiscordToken token){
   Optional<DiscordUser> response =  this.discordService.pushTokenToId(token, user);
   if(response.isPresent()){
     DiscordUser discordUser = response.get();

     user.setDiscordId(discordUser.getUsername()+"#"+discordUser.getDiscriminator());
     return Optional.of(userRepository.save(user));
   }else{
     return Optional.empty();
   }
  }


}
