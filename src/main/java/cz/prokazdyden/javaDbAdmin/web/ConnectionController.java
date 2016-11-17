package cz.prokazdyden.javaDbAdmin.web;

import cz.prokazdyden.javaDbAdmin.repository.ConnectionRepo;
import cz.prokazdyden.javaDbAdmin.service.dto.ConnectionDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import java.util.*;
import java.util.stream.Collectors;

/**
 * Controller to manage database connections.
 */
@Controller
@RequestMapping("connections")
public class ConnectionController
{
    @Autowired
    private ConnectionRepo connectionRepository;

    /**
     * @return all avaible database connections.
     */
    @CrossOrigin(origins = "http://localhost:1841")
    @RequestMapping(path = "/avaibleConnections", method = RequestMethod.GET)
    public @ResponseBody List<ConnectionDto> getAvaibleConnections()
    {
        return connectionRepository.findAll().map(ConnectionDto::new).collect(Collectors.toList());
    }
}
