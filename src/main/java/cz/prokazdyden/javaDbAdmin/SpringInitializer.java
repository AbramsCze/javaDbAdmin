package cz.prokazdyden.javaDbAdmin;

import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.context.support.XmlWebApplicationContext;
import org.springframework.web.filter.CharacterEncodingFilter;
import org.springframework.web.servlet.support.AbstractDispatcherServletInitializer;
import javax.servlet.Filter;

/**
 * This class replaces the traditional {@code web.xml} in Servlet 3.0+ environments.
 */
public class SpringInitializer extends AbstractDispatcherServletInitializer
{
    @Override
    protected WebApplicationContext createRootApplicationContext()
    {
        XmlWebApplicationContext rootAppContext = new XmlWebApplicationContext();
        rootAppContext.setConfigLocation("classpath:spring/business-config.xml");
        return rootAppContext;
    }

    @Override
    protected WebApplicationContext createServletApplicationContext()
    {
        XmlWebApplicationContext webAppContext = new XmlWebApplicationContext();
        webAppContext.setConfigLocation("classpath:spring/view-config.xml");
        return webAppContext;
    }

    @Override
    protected String[] getServletMappings() {
        return new String[]{"/"};
    }

    @Override
    protected Filter[] getServletFilters()
    {
        CharacterEncodingFilter characterEncodingFilter = new CharacterEncodingFilter("UTF-8", true);
        return new Filter[]{characterEncodingFilter};
    }
}
