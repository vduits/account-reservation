package net.gecore.accountreservation.controller;

import java.time.LocalDateTime;
import net.gecore.accountreservation.domain.Reservation;
import net.gecore.accountreservation.service.ReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
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

  @PostMapping(consumes= MediaType.APPLICATION_JSON_VALUE)
  public Reservation createReservation( @RequestBody Reservation reservation){
    System.out.println(reservation.getStatus());
    return reservationService.createReservation(reservation);
  }


}
