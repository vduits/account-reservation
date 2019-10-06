package net.gecore.accountreservation.domain;

import java.util.Date;
import java.util.UUID;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="account")
public class Account {
  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private UUID id;
  private String login_name;
  private String login_password;
  private boolean assignable;
  private Date last_updated;

  public UUID getId() {
    return id;
  }

  public void setId(UUID id) {
    this.id = id;
  }

  public String getLogin_name() {
    return login_name;
  }

  public void setLogin_name(String login_name) {
    this.login_name = login_name;
  }

  public String getLogin_password() {
    return login_password;
  }

  public void setLogin_password(String login_password) {
    this.login_password = login_password;
  }

  public boolean isAssignable() {
    return assignable;
  }

  public void setAssignable(boolean assignable) {
    this.assignable = assignable;
  }

  public Date getLast_updated() {
    return last_updated;
  }

  public void setLast_updated(Date last_updated) {
    this.last_updated = last_updated;
  }


}
