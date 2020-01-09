package net.gecore.accountreservation.domain.discord;

public class DiscordUserResponse {

  private String id;
  private String username;
  private String discriminator;
  private String avatar;
  private String locale;
  private String mfa_enabled;
  private String flags;

  public DiscordUserResponse() {
  }

  public String getId() {
    return id;
  }

  public void setId(String id) {
    this.id = id;
  }

  public String getUsername() {
    return username;
  }

  public void setUsername(String username) {
    this.username = username;
  }

  public String getDiscriminator() {
    return discriminator;
  }

  public void setDiscriminator(String discriminator) {
    this.discriminator = discriminator;
  }

  public String getAvatar() {
    return avatar;
  }

  public void setAvatar(String avatar) {
    this.avatar = avatar;
  }

  public String getLocale() {
    return locale;
  }

  public void setLocale(String locale) {
    this.locale = locale;
  }

  public String getMfa_enabled() {
    return mfa_enabled;
  }

  public void setMfa_enabled(String mfa_enabled) {
    this.mfa_enabled = mfa_enabled;
  }

  public String getFlags() {
    return flags;
  }

  public void setFlags(String flags) {
    this.flags = flags;
  }
}
