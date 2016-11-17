package cz.prokazdyden.javaDbAdmin.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * Business object for database connection.
 */
@Entity
@Table(name = "JDAT_CONNECTION", schema = "PUBLIC")
public class Connection
{
    @Id
    private Long id;

    private String name;

    private String description;

    private String connectionString;

    private String url;

    private Long port;

    public Connection()
    {
    }

    public Connection(String name, String description)
    {
        this.name = name;
        this.description = description;
    }

    public Long getId()
    {
        return id;
    }

    public void setId(Long id)
    {
        this.id = id;
    }

    public String getName()
    {
        return name;
    }

    public void setName(String name)
    {
        this.name = name;
    }

    public String getDescription()
    {
        return description;
    }

    public void setDescription(String description)
    {
        this.description = description;
    }

    public String getConnectionString()
    {
        return connectionString;
    }

    public void setConnectionString(String connectionString)
    {
        this.connectionString = connectionString;
    }

    public String getUrl()
    {
        return url;
    }

    public void setUrl(String url)
    {
        this.url = url;
    }

    public Long getPort()
    {
        return port;
    }

    public void setPort(Long port)
    {
        this.port = port;
    }
}
