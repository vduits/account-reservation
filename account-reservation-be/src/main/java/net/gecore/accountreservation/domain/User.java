package net.gecore.accountreservation.domain;

import java.util.UUID;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import net.gecore.accountreservation.domain.component.Role;

@Entity
@Table(name="users")
public class User {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private UUID uuid;
  @Enumerated(EnumType.STRING)
  private Role role;
  private String gmail;
  private String discordId;

  public User(){}

  public User(String gmail, Role role){
    this.gmail = gmail;
    this.role = role;
  }

  public void setUuid(UUID id) {
    this.uuid = id;
  }

  public UUID getUuid() {
    return uuid;
  }

  public String getGmail() {
    return gmail;
  }

  public void setGmail(String gmail) {
    this.gmail = gmail;
  }

  public Role getRole() {
    return role;
  }

  public void setRole(Role role) {
    this.role = role;
  }

  public String getDiscordId() {
    return discordId;
  }

  public void setDiscordId(String discordId) {
    this.discordId = discordId;
  }
}
