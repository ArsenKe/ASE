package calender_export_ms.repository;

import calender_export_ms.model.Tag;

import java.util.List;

public interface TagRepository {

 List<Tag> getTagsForEvent(String eventId);


    List<Tag> getTagsByEvent(String eventId);
}
