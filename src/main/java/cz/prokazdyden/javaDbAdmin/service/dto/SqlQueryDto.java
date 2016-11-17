package cz.prokazdyden.javaDbAdmin.service.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import java.util.Optional;

/**
 * Data transfer object for custom SQL query.
 */
public class SqlQueryDto
{
    /** Preprocessed custom sql query. */
    @JsonIgnore
    private Optional<String> sqlQuery;

    /** Whether custom query is select. */
    public boolean isSelect()
    {
        return sqlQuery.isPresent() && sqlQuery.get().toLowerCase().startsWith("select");
    }

    public Optional<String> getSqlQuery()
    {
        return sqlQuery;
    }

    /** Custom SQL query from JSON. */
    public void setQuery(final String query)
    {
        Optional<String> sqlQuery = Optional.of(query.substring(1, query.length() - 1));
        this.sqlQuery = ((sqlQuery.get().length() == 0) ? Optional.empty() : sqlQuery);
    }
}
