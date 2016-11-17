package cz.prokazdyden.javaDbAdmin.web;

import cz.prokazdyden.javaDbAdmin.service.CustomSqlService;
import cz.prokazdyden.javaDbAdmin.service.dto.SqlQueryDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Map;

/**
 * Controller evaluate custom SQL script.
 */
@Controller
@RequestMapping("sql")
public class SqlController
{
    @Autowired
    private CustomSqlService customSqlService;

    /**
     * Evaluate custom SQL script.
     * @return result if present.
     */
    @PostMapping
    @CrossOrigin(origins = "http://localhost:1841")
    public @ResponseBody List<Map<String, Object>> evaluate(@ModelAttribute("query") final SqlQueryDto sql)
    {
        if(sql.isSelect())
        {
            return evaluateSelect(sql.getSqlQuery().get());
        }
        return null;
    }

    /**
     * Evaluate custom SQL select.
     * @param sql select to evaluate.
     * @return result of select script.
     */
    protected @ResponseBody List<Map<String, Object>> evaluateSelect(final String sql)
    {
        return customSqlService.select(sql);
    }
}
