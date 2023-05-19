package report_analytics_ms.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import report_analytics_ms.model.Tag;

@Repository
public interface TagRepository extends JpaRepository<Tag, Long> {
    // Custom methods and queries can be added here if needed
}