package net.gecore.accountreservation.controller;

import net.gecore.accountreservation.domain.User;
import net.gecore.accountreservation.domain.component.Role;
import net.gecore.accountreservation.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "${api.crossorigin}")
@RestController
@RequestMapping("${api.uri}/user")
public class UserController {

  private UserService userService;

  @Autowired
  public UserController(UserService userService){
    this.userService = userService;
  }

  @GetMapping(value = "{gmail}",produces = MediaType.APPLICATION_JSON_VALUE)
  public User checkUser(@PathVariable String gmail){
    var result = this.userService.retrieveUser(gmail);
    return result.orElseGet(User::new);
  }

  @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
  public User createUser(@RequestBody User user){
    if(user.getRole() != Role.Registered){
      return new User();
    }else{
      var result = this.userService.createUser(user);
      return result.orElseGet(User::new);
    }
  }


}
