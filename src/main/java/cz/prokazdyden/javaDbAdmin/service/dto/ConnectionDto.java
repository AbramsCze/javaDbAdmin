package cz.prokazdyden.javaDbAdmin.service.dto;

import cz.prokazdyden.javaDbAdmin.model.Connection;

/**
 * Data transfer object for avaible database connection.
 */
public class ConnectionDto
{
    /** Unique identification of connection. */
    private String connectionId;

    /** User friendly description of connection. */
    private String connectionDesc;

    public ConnectionDto(final Connection connection)
    {
        this.connectionId = connection.getName();
        this.connectionDesc = connection.getDescription();
    }


    /******************************************************************************************************************/

    public String getConnectionId()
    {
        return connectionId;
    }

    public String getConnectionDesc()
    {
        return connectionDesc;
    }
}
