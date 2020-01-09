package net.gecore.accountreservation.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.io.IOException;
import java.net.URI;
import java.net.URLEncoder;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.net.http.HttpResponse.BodyHandlers;
import java.nio.charset.StandardCharsets;
import java.util.HashMap;
import java.util.Map;
import net.gecore.accountreservation.configuration.DiscordAPIConfiguration;
import net.gecore.accountreservation.domain.DiscordUser;
import net.gecore.accountreservation.domain.discord.DiscordGrantType;
import net.gecore.accountreservation.domain.discord.DiscordAuthResponse;
import net.gecore.accountreservation.domain.discord.DiscordScope;
import net.gecore.accountreservation.domain.discord.DiscordToken;
import net.gecore.accountreservation.domain.discord.DiscordUserResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Component;

@Component
public class DiscordAPIService {

  private static final String OAUTH = "/oauth2/token";
  private static final String CURRENT_USER = "/users/@me";
  private static final String AUTHORIZATION = "Authorization";
  private static final String BEARER = "Bearer";
  private static final String CONTENT_TYPE = "Content-Type";
  private static final String USER_AGENT = "User-Agent";

  private static final String USER_AGENT_NAME = "Java 11 HttpClient";

  private DiscordAPIConfiguration discordAPIConfiguration;
  private HttpClient httpClient = HttpClient.newHttpClient();
  private ObjectMapper objectMapper = new ObjectMapper();
  private static final TypeReference<DiscordAuthResponse> DISCORD_RESPONSE_TYPE =
      new TypeReference<>(){};
  private static final TypeReference<DiscordUserResponse> DISCORD_USER_TYPE =
      new TypeReference<>(){};

  @Autowired
  public DiscordAPIService(DiscordAPIConfiguration discordAPIConfiguration) {
    this.discordAPIConfiguration = discordAPIConfiguration;
  }

  public DiscordAuthResponse turnTokenIntoRefreshToken(DiscordToken discordToken)
      throws IOException, InterruptedException {
    HttpRequest request = buildTokenRequest(discordToken.getToken());
    HttpResponse<String> response = performDiscordRequest(request);
    return transformIntoDiscordAuthResponse(response.body());
  }


  public DiscordUserResponse fetchDiscordUserDetails(DiscordUser discordUser)
      throws IOException, InterruptedException {
    HttpRequest request = buildUserIdFetchRequest(discordUser);
    HttpResponse<String> response = performDiscordRequest(request);
    return transformIntoDiscordUserResponse(response.body());
  }

  public HttpResponse<String> performDiscordRequest(HttpRequest request)
      throws IOException, InterruptedException {
    return httpClient.send(request, BodyHandlers.ofString());
  }

  private HttpRequest buildTokenRequest(String token) {
    return HttpRequest.newBuilder()
        .uri(URI.create(buildOauthUrl()))
        .POST(createFormData(authCodeFormBuildup(token)))
        .setHeader(USER_AGENT, USER_AGENT_NAME)
        .header(CONTENT_TYPE, MediaType.APPLICATION_FORM_URLENCODED_VALUE)
        .build();
  }

  public HttpRequest buildUserIdFetchRequest(DiscordUser discordUser){
    return HttpRequest.newBuilder()
        .uri(URI.create(buildGetUserIdUrl()))
        .GET()
        .setHeader(USER_AGENT, USER_AGENT_NAME)
        .header(CONTENT_TYPE, MediaType.APPLICATION_FORM_URLENCODED_VALUE)
        .header(AUTHORIZATION, BEARER +" "+ discordUser.getAccessToken())
        .build();
  }

  public Map<Object, Object> authCodeFormBuildup(String token) {
    var map = new HashMap<>();
    map.put("client_id", this.discordAPIConfiguration.getClientId());
    map.put("client_secret", this.discordAPIConfiguration.getClientSecret());
    map.put("grant_type", DiscordGrantType.authorization_code);
    map.put("code", token);
    map.put("redirect_uri", this.discordAPIConfiguration.getRedirectUri());
    map.put("scope", DiscordScope.identify);
    return map;
  }

  public static HttpRequest.BodyPublisher createFormData(Map<Object, Object> data) {
    var builder = new StringBuilder();
    for (Map.Entry<Object, Object> entry : data.entrySet()) {
      if (builder.length() > 0) {
        builder.append("&");
      }
      builder.append(URLEncoder.encode(entry.getKey().toString(), StandardCharsets.UTF_8));
      builder.append("=");
      builder.append(URLEncoder.encode(entry.getValue().toString(), StandardCharsets.UTF_8));
    }
    return HttpRequest.BodyPublishers.ofString(builder.toString());
  }

  public DiscordAuthResponse transformIntoDiscordAuthResponse(String response){
    try {
      return objectMapper.readValue(response, DISCORD_RESPONSE_TYPE);
    } catch (JsonProcessingException e) {
      return new DiscordAuthResponse();
    }
  }

  public DiscordUserResponse transformIntoDiscordUserResponse(String response){
    try {
      return objectMapper.readValue(response, DISCORD_USER_TYPE);
    } catch (JsonProcessingException e) {
      return new DiscordUserResponse();
    }
  }




  public String buildOauthUrl() {
    return discordAPIConfiguration.getApiEndpoint() + OAUTH;
  }

  public String buildGetUserIdUrl(){return discordAPIConfiguration.getApiEndpoint() + CURRENT_USER;
  }






  //when retrieving token get that used until thing and check a bit before if valid still?

  //technically it's an 'only once thing though'

  //perform request and refresh token if need be?


}
