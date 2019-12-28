package net.gecore.accountreservation.service;

import net.gecore.accountreservation.domain.Reservation;
import net.gecore.accountreservation.repository.AccountRepository;
import net.gecore.accountreservation.repository.ReservationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class ReservationService {

  private AccountRepository accountRepository;
  private ReservationRepository reservationRepository;

  @Autowired
  public ReservationService(AccountRepository accountRepository, ReservationRepository reservationRepository){
    this.accountRepository = accountRepository;
    this.reservationRepository = reservationRepository;
  }

  public Reservation createReservation(Reservation reservation){
    return reservationRepository.save(reservation);
  }

}
