package cz.prokazdyden.javaDbAdmin.repository;

import org.springframework.data.repository.NoRepositoryBean;
import org.springframework.data.repository.Repository;
import java.io.Serializable;
import java.util.Optional;
import java.util.stream.Stream;

/**
 * Contais elementary functions.
 */
@NoRepositoryBean
interface BaseRepository<T, ID extends Serializable> extends Repository<T, ID>
{
    /**
     * Delete entity from database.
     * @param deleted entity for delete.
     */
    void delete(T deleted);

    /**
     * @return all records from database.
     */
    Stream<T> findAll();

    /**
     * @param id primary key.
     * @return record from database with specified id.
     */
    Optional<T> findOne(ID id);

    /**
     * Save entity to database.
     * @param persisted entity for save.
     * @return saved entity.
     */
    T save(T persisted);
}
