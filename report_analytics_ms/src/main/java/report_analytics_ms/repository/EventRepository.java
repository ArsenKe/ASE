package report_analytics_ms.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import report_analytics_ms.model.Event;

import java.util.List;


@Repository
public interface EventRepository extends JpaRepository<Event, Long> {
    List<Event> findAll();
    // Custom methods and queries can be added here if needed
}