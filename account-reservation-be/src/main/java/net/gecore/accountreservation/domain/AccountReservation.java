package net.gecore.accountreservation.domain;

import java.util.UUID;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;

@Entity
@IdClass(AccountReservationId.class)
public class AccountReservation {

  @Id
  @Column(name = "account_id")
  private UUID accountId;
  @Id
  @Column(name = "reservation_id")
  private UUID reservationId;

  public AccountReservation() {
  }

  public AccountReservation(UUID accountId, UUID reservationId) {
    this.accountId = accountId;
    this.reservationId = reservationId;
  }

  public UUID getAccountId() {
    return accountId;
  }

  public void setAccountId(UUID accountId) {
    this.accountId = accountId;
  }

  public UUID getReservationId() {
    return reservationId;
  }

  public void setReservationId(UUID reservationId) {
    this.reservationId = reservationId;
  }
}
