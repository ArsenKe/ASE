package report_analytics_ms.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter

public class Mark {
    private Long id;
    private Long eventId;
    private Long attendeeId;
    private int score;
}
