package net.gecore.accountreservation.service;


import java.io.IOException;
import java.util.Optional;
import java.util.UUID;
import net.gecore.accountreservation.domain.DiscordUser;
import net.gecore.accountreservation.domain.User;
import net.gecore.accountreservation.domain.discord.DiscordAuthResponse;
import net.gecore.accountreservation.domain.discord.DiscordToken;
import net.gecore.accountreservation.domain.discord.DiscordUserResponse;
import net.gecore.accountreservation.repository.DiscordUserRepository;
import org.springframework.stereotype.Component;

@Component
public class DiscordService {

  private DiscordAPIService discordAPIService;
  private DiscordUserRepository repository;

  public DiscordService(DiscordAPIService discordAPIService, DiscordUserRepository repository){
    this.discordAPIService = discordAPIService;
    this.repository = repository;
  }

//todo turn this into a discordUser return I guess?
  public Optional<DiscordUser> pushTokenToId(DiscordToken token, User user) {
    try{
      DiscordAuthResponse response = discordAPIService.turnTokenIntoRefreshToken(token);
      if(response.getError() != null){
        //todo then we push for error flow
        return Optional.empty();
      }else if (response.getAccess_token() != null){
        return createDiscordUser(response, user.getUuid());
      }
      return Optional.empty();
    }catch(IOException | InterruptedException ie){
      ie.printStackTrace();
    }
    return Optional.empty();
  }

  public Optional<DiscordUser> createDiscordUser(DiscordAuthResponse response, UUID userId)
      throws IOException, InterruptedException {
    DiscordUser discordUser = new DiscordUser();
    discordUser.setAccessToken(response.getAccess_token());
    discordUser.setRefreshToken(response.getRefresh_token());
    discordUser.setUser_id(userId);
    boolean userFound = addDiscordUserDetails(discordUser);
    if(userFound){
      return Optional.of(repository.save(discordUser));
    }
    return Optional.empty();
  }

  public boolean addDiscordUserDetails(DiscordUser discordUser) throws IOException, InterruptedException {
    DiscordUserResponse response = discordAPIService.fetchDiscordUserDetails(discordUser);
    if (response.getId() != null && response.getUsername() != null){
      discordUser.setDiscordId(response.getId());
      discordUser.setUsername(response.getUsername());
      discordUser.setDiscriminator(response.getDiscriminator());
      return true;
    }
    return false;
  }

}
