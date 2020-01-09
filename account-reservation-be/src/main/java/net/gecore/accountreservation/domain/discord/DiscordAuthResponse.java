package net.gecore.accountreservation.domain.discord;

public class DiscordAuthResponse {
  private String error;
  private String error_description;
  private String access_token;
  private String token_type;
  private Long expires_in;
  private String refresh_token;
  private DiscordScope scope;


  public DiscordAuthResponse() {
  }

  public String getError() {
    return error;
  }

  public void setError(String error) {
    this.error = error;
  }

  public String getAccess_token() {
    return access_token;
  }

  public void setAccess_token(String access_token) {
    this.access_token = access_token;
  }

  public String getToken_type() {
    return token_type;
  }

  public void setToken_type(String token_type) {
    this.token_type = token_type;
  }

  public Long getExpires_in() {
    return expires_in;
  }

  public void setExpires_in(Long expires_in) {
    this.expires_in = expires_in;
  }

  public String getRefresh_token() {
    return refresh_token;
  }

  public void setRefresh_token(String refresh_token) {
    this.refresh_token = refresh_token;
  }

  public DiscordScope getScope() {
    return scope;
  }

  public void setScope(DiscordScope scope) {
    this.scope = scope;
  }

  public String getError_description() {
    return error_description;
  }

  public void setError_description(String error_description) {
    this.error_description = error_description;
  }
}
