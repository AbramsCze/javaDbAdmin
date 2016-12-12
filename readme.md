# Project is in development
Used technology: Sencha ExtJS, Java, Spring, Hibernate, Maven, Embedded H2

## TODO travis build status

## Install driver to maven local repo
Version is in MANIFEST.MF

```
    install:install-file -Dfile=${basedir}/lib/ojdbc7.jar -DgroupId=com.oracle -DartifactId=ojdbc7 -Dversion=12.1.0.2.0 -Dpackaging=jar -DlocalRepositoryPath=${basedir}/lib -DgeneratePom=true
    
    <dependency>
        <groupId>com.oracle</groupId>
        <artifactId>ojdbc7</artifactId>
        <version>12.1.0.2.0</version>
    </dependency>
    
    <mirrorOf>*,!javaDbAdmin-local-repo</mirrorOf>
    
    http://localhost:9966/javaDbAdmin/checkDriver/oracle
```
## Upgrade font awesome

- Download font awesome zip and decompres it
- Replace in ext/ext/packages/font-awesome/resources/fonts files from font-awesome_decompressed_folder/fonts/
- Replace in ext/ext/packages/font-awesome/sass/etc files from awesome_decompressed_folder/scss
- Add //# fashion warn -elevation to start of file ext/ext/packages/font-awesome/sass/etc/_variables.scss
- Add //# fashion warn +elevation to end of file ext/ext/packages/font-awesome/sass/etc/_variables.scss
- Run "sencha package build" into ext/ext/packages.

## TODO How to
