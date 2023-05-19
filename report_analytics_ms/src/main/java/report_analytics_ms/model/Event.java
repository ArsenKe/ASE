package report_analytics_ms.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@AllArgsConstructor
@NoArgsConstructor
@Getter

public class Event {
    private Long id;
    private String name;
    private Date startDate;
}
