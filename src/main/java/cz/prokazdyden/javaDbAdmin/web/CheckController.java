package cz.prokazdyden.javaDbAdmin.web;

import cz.prokazdyden.javaDbAdmin.model.enumerated.Driver;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import java.util.Locale;
import java.util.Optional;

/**
 * Controller check drivers installation.
 */
@Controller
@RequestMapping("checkDriver")
public class CheckController
{
    @Autowired private MessageSource messageSource;

    /**
     * @param driverId to check.
     * @return info about driver state.
     */
    @RequestMapping(value = "{driverId}", method = RequestMethod.GET)
    public @ResponseBody String getDriverStatus(final Locale locale, final @PathVariable String driverId)
    {
        Optional<Driver> driver = Driver.getByUrlParam(driverId);

        if(driver.isPresent())
        {
            String[] params = new String[2];
            params[0] = messageSource.getMessage(driver.get().getNameKey(), null, locale);

            try
            {
                Class driverClass = Class.forName(driver.get().getJdbcDriver());
                params[1] = "Success";

                return messageSource.getMessage("checkDriver.title", params, locale);
            }
            catch (ClassNotFoundException e)
            {
                params[1] = "Fail";
                return messageSource.getMessage("checkDriver.title", params, locale);
            }
        }
        return messageSource.getMessage("checkDriver.notFound", new String[]{driverId}, locale);
    }
}
