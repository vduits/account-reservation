package net.gecore.accountreservation.domain;

import java.time.LocalDateTime;
import java.util.Date;
import java.util.UUID;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="reservation")
public class Reservation {
  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private UUID id;
  private String user_id;
  private String group_name;
  private int account_count;
  private LocalDateTime start_date;
  private LocalDateTime end_date;
  private String request_info;
  private String state;

  public UUID getId() {
    return id;
  }

  public void setId(UUID id) {
    this.id = id;
  }

  public String getUser_id() {
    return user_id;
  }

  public void setUser_id(String user_id) {
    this.user_id = user_id;
  }

  public String getGroup_name() {
    return group_name;
  }

  public void setGroup_name(String group_name) {
    this.group_name = group_name;
  }

  public int getAccount_count() {
    return account_count;
  }

  public void setAccount_count(int account_count) {
    this.account_count = account_count;
  }

  public LocalDateTime getStart_date() {
    return start_date;
  }

  public void setStart_date(LocalDateTime start_date) {
    this.start_date = start_date;
  }

  public LocalDateTime getEnd_date() {
    return end_date;
  }

  public void setEnd_date(LocalDateTime end_date) {
    this.end_date = end_date;
  }

  public String getRequest_info() {
    return request_info;
  }

  public void setRequest_info(String request_info) {
    this.request_info = request_info;
  }

  public String getState() {
    return state;
  }

  public void setState(String state) {
    this.state = state;
  }

}
