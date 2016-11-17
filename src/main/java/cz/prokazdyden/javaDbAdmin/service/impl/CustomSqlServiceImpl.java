package cz.prokazdyden.javaDbAdmin.service.impl;

import cz.prokazdyden.javaDbAdmin.service.CustomSqlService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Map;

@Service
public class CustomSqlServiceImpl implements CustomSqlService
{
    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Override
    public List<Map<String, Object>> select(final String sql)
    {
        return jdbcTemplate.queryForList(sql);
    }
}
