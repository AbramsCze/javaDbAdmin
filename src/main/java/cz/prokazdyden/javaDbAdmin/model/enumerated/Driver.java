package cz.prokazdyden.javaDbAdmin.model.enumerated;

import java.util.Arrays;
import java.util.Optional;

/**
 * Static model with available drivers.
 */
public enum Driver
{
    ORACLE("jdbc.oracle.name", "oracle", "oracle.jdbc.driver.OracleDriver");

    private String nameKey;
    private String urlParam;
    private String jdbcDriver;

    Driver(String nameKey, String urlParam, String jdbcDriver)
    {
        this.nameKey = nameKey;
        this.urlParam = urlParam;
        this.jdbcDriver = jdbcDriver;
    }

    /** Find Driver by url identifier. */
    public static Optional<Driver> getByUrlParam(final String urlParam)
    {
        return Arrays.stream(Driver.values()).filter(d -> d.getUrlParam().equalsIgnoreCase(urlParam)).findFirst();
    }

    public String getNameKey()
    {
        return nameKey;
    }

    public String getUrlParam()
    {
        return urlParam;
    }

    public String getJdbcDriver()
    {
        return jdbcDriver;
    }
}
