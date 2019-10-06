package net.gecore.accountreservation.repository;

import java.util.UUID;
import net.gecore.accountreservation.domain.Account;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AccountRepository extends CrudRepository<Account, UUID> {

}
