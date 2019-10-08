package net.gecore.accountreservation.controller;

import java.time.LocalDateTime;
import net.gecore.accountreservation.domain.Reservation;
import net.gecore.accountreservation.service.ReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "${api.crossorigin}")
@RestController
@RequestMapping("${api.uri}/reservation")
public class ReservationController {

  private ReservationService reservationService;

  @Autowired
  public ReservationController(ReservationService reservationService){
    this.reservationService = reservationService;
  }

  @PostMapping
  public Reservation createReservation(){
    return reservationService.createReservation(LocalDateTime.now());
  }

}
