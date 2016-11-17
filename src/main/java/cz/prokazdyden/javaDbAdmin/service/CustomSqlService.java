package cz.prokazdyden.javaDbAdmin.service;

import java.util.List;
import java.util.Map;

/**
 * Service layer processing custom sql queries from users.
 */
public interface CustomSqlService
{
    /**
     * Evaluate custom SQL select.
     * @param sql select to evaluate.
     * @return result of select script.
     */
    List<Map<String, Object>> select(String sql);
}
