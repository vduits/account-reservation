package net.gecore.accountreservation.repository;

import java.util.Optional;
import java.util.UUID;
import net.gecore.accountreservation.domain.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<User, UUID> {

  Optional<User> findByGmail(String gmail);

}
