package net.gecore.accountreservation.domain;

import java.io.Serializable;
import java.util.Objects;
import java.util.UUID;

public class AccountReservationId  implements Serializable {

  private UUID accountId;
  private UUID reservationId;

  public AccountReservationId() {
  }

  public AccountReservationId(UUID accountId, UUID reservationId) {
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

  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    AccountReservationId that = (AccountReservationId) o;
    return Objects.equals(accountId, that.accountId) &&
        Objects.equals(reservationId, that.reservationId);
  }

  @Override
  public int hashCode() {
    return Objects.hash(accountId, reservationId);
  }
}
