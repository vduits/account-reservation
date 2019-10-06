package net.gecore.accountreservation.repository;

import java.util.UUID;
import net.gecore.accountreservation.domain.Reservation;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReservationRepository extends CrudRepository<Reservation, UUID> {

}
