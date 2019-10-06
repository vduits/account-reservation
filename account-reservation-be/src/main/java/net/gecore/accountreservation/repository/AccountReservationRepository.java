package net.gecore.accountreservation.repository;

import java.util.List;
import java.util.UUID;
import net.gecore.accountreservation.domain.AccountReservation;
import net.gecore.accountreservation.domain.AccountReservationId;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AccountReservationRepository extends CrudRepository<AccountReservation, AccountReservationId> {

  List<AccountReservation> findAccountReservationsByReservationId(UUID reservation_id);

}
