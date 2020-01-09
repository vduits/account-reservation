package net.gecore.accountreservation.repository;


import java.util.Optional;
import net.gecore.accountreservation.domain.DiscordUser;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DiscordUserRepository extends CrudRepository<DiscordUser, Long> {

   Optional<DiscordUser> findDiscordUserByDiscordId(String id);

}
